"use client";

import { useState, useEffect, Suspense } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import Link from "next/link";
import {
  Calendar as CalendarIcon,
  Clock,
  User,
  Phone,
  Mail,
  MessageSquare,
  ArrowRight,
  Leaf,
  Flower2,
  Sparkles,
  CheckCircle,
  AlertCircle,
  Heart,
  ChevronDown,
} from "lucide-react";
import Topbar from "@/components/Topbar";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { Calendar as CalendarComponent } from "@/components/ui/calendar";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Badge } from "@/components/ui/badge";

// Define proper types for booking types
interface BaseBookingType {
  title: string;
  description: string;
  gradient: string;
  icon: string;
  duration: string;
}

interface BookingTypeWithPrice extends BaseBookingType {
  price: string;
}

type BookingType = BaseBookingType | BookingTypeWithPrice;

// Type guard to check if booking type has price
const hasPrice = (
  bookingType: BookingType,
): bookingType is BookingTypeWithPrice => {
  return "price" in bookingType;
};

// Booking types configuration with proper typing
const bookingTypes: Record<string, BookingType> = {
  general: {
    title: "Book an Appointment",
    description: "Schedule your wellness journey with us",
    gradient: "from-forest to-forest-light",
    icon: "✨",
    duration: "30-90 min",
  },
  consultation: {
    title: "Book a Consultation",
    description:
      "Speak with our wellness advisors to find the perfect treatment",
    gradient: "from-sage to-forest",
    icon: "💬",
    duration: "30 min",
  },
  "deep-tissue-aromatherapy": {
    title: "Deep Tissue & Aromatherapy Ritual",
    description:
      "Combine our most requested treatments for the ultimate restoration session",
    gradient: "from-[#8aab8a] to-[#5d8a60]",
    icon: "🍃",
    duration: "120 min",
    price: "$95+",
  },
  "couples-retreat": {
    title: "Couples Retreat",
    description:
      "A shared sanctuary experience with dual treatment rooms and champagne service",
    gradient: "from-[#9a8a7c] to-[#7a6a5c]",
    icon: "💑",
    duration: "180 min",
    price: "$250+",
  },
  "deep-tissue-therapy": {
    title: "Deep Tissue Therapy",
    description: "Targeted pressure techniques to release chronic tension",
    gradient: "from-[#8aab8a] to-[#5d8a60]",
    icon: "💆🏻‍♂️",
    duration: "60/90 min",
    price: "$95+",
  },
  "rejuvenating-facial": {
    title: "Rejuvenating Facial",
    description: "Clinical-grade facial treatments that restore radiance",
    gradient: "from-[#c4a882] to-[#a08560]",
    icon: "✨",
    duration: "75 min",
    price: "$120+",
  },
  "aromatherapy-ritual": {
    title: "Aromatherapy Ritual",
    description: "Essential oil infused massage and breathwork",
    gradient: "from-[#7c9a82] to-[#4a7c5f]",
    icon: "🌿",
    duration: "90 min",
    price: "$110+",
  },
  "detox-body-wrap": {
    title: "Detox Body Wrap",
    description: "Mineral-rich body treatment to draw out toxins",
    gradient: "from-[#b8a88a] to-[#8a7a62]",
    icon: "🧖🏻‍♀️",
    duration: "80 min",
    price: "$135+",
  },
  "sound-therapy": {
    title: "Sound Therapy",
    description: "Vibrational healing using crystal bowls",
    gradient: "from-[#6d8a93] to-[#4a6a73]",
    icon: "🔔",
    duration: "60 min",
    price: "$85+",
  },
};

// Service categories for dropdown
const serviceCategories = [
  { value: "general", label: "General Appointment" },
  { value: "consultation", label: "Wellness Consultation" },
  { value: "deep-tissue-therapy", label: "Deep Tissue Therapy" },
  { value: "rejuvenating-facial", label: "Rejuvenating Facial" },
  { value: "aromatherapy-ritual", label: "Aromatherapy Ritual" },
  { value: "deep-tissue-aromatherapy", label: "Deep Tissue & Aromatherapy" },
  { value: "detox-body-wrap", label: "Detox Body Wrap" },
  { value: "sound-therapy", label: "Sound Therapy" },
  { value: "couples-retreat", label: "Couples Retreat" },
];

// Time slots
const timeSlots = [
  "9:00 AM",
  "9:30 AM",
  "10:00 AM",
  "10:30 AM",
  "11:00 AM",
  "11:30 AM",
  "12:00 PM",
  "12:30 PM",
  "1:00 PM",
  "1:30 PM",
  "2:00 PM",
  "2:30 PM",
  "3:00 PM",
  "3:30 PM",
  "4:00 PM",
  "4:30 PM",
  "5:00 PM",
  "5:30 PM",
  "6:00 PM",
  "6:30 PM",
  "7:00 PM",
];

function BookingContent() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const type = searchParams.get("type") || "general";

  const [selectedService, setSelectedService] = useState(type);
  const [selectedDate, setSelectedDate] = useState<Date>();
  const [selectedTime, setSelectedTime] = useState("");
  const [isDatePickerOpen, setIsDatePickerOpen] = useState(false);
  const [isTimePickerOpen, setIsTimePickerOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    notes: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const bookingType = bookingTypes[selectedService] || bookingTypes.general;

  const formatDisplayDate = (date: Date | undefined) => {
    if (!date) return "Select a date";
    return date.toLocaleDateString("en-US", {
      weekday: "long",
      month: "long",
      day: "numeric",
      year: "numeric",
    });
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!selectedDate) newErrors.date = "Please select a date";
    if (!selectedTime) newErrors.time = "Please select a time";
    if (!formData.name) newErrors.name = "Name is required";
    if (!formData.email) newErrors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(formData.email))
      newErrors.email = "Email is invalid";
    if (!formData.phone) newErrors.phone = "Phone number is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleServiceChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedService(e.target.value);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);

    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 1500);
  };

  if (isSuccess) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-ivory via-white to-ivory flex items-center justify-center p-4 sm:p-6">
        <div className="max-w-md w-full bg-white rounded-2xl sm:rounded-3xl shadow-2xl p-6 sm:p-8 md:p-10 text-center relative overflow-hidden">
          {/* Decorative elements - hidden on mobile */}
          <div className="absolute inset-0 opacity-5 hidden sm:block">
            <Leaf className="absolute top-10 left-10 w-20 h-20 text-forest" />
            <Flower2 className="absolute bottom-10 right-10 w-20 h-20 text-forest" />
          </div>

          <div className="relative z-10">
            <div className="w-16 h-16 sm:w-18 sm:h-18 md:w-20 md:h-20 bg-forest/10 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-5 md:mb-6">
              <CheckCircle size={28} className="sm:hidden text-forest" />
              <CheckCircle size={32} className="hidden sm:block md:hidden text-forest" />
              <CheckCircle size={40} className="hidden md:block text-forest" />
            </div>

            <h2 className="font-serif text-2xl sm:text-2xl md:text-3xl text-charcoal mb-2 sm:mb-3">
              Booking Confirmed!
            </h2>
            <p className="text-text-body text-[13px] sm:text-[14px] md:text-[15px] mb-4 sm:mb-5 md:mb-6 px-2 sm:px-0">
              Thank you for choosing Serenova. We've sent a confirmation email
              to {formData.email}
            </p>

            <div className="bg-ivory rounded-xl sm:rounded-2xl p-4 sm:p-5 md:p-6 mb-6 sm:mb-7 md:mb-8 text-left">
              <h3 className="font-bold text-charcoal mb-2 sm:mb-3 text-xs sm:text-sm uppercase tracking-wider">
                Booking Details
              </h3>
              <div className="space-y-1.5 sm:space-y-2 text-[12px] sm:text-[13px] md:text-[14px]">
                <p>
                  <span className="text-text-muted">Service:</span>{" "}
                  <span className="font-medium text-forest">
                    {bookingType.title}
                  </span>
                </p>
                <p>
                  <span className="text-text-muted">Date:</span>{" "}
                  {formatDisplayDate(selectedDate)}
                </p>
                <p>
                  <span className="text-text-muted">Time:</span> {selectedTime}
                </p>
                <p>
                  <span className="text-text-muted">Duration:</span>{" "}
                  {bookingType.duration}
                </p>
                {hasPrice(bookingType) && (
                  <p>
                    <span className="text-text-muted">Price:</span>{" "}
                    <span className="font-medium text-forest">
                      {bookingType.price}
                    </span>
                  </p>
                )}
              </div>
            </div>

            <Link
              href="/"
              className="inline-flex items-center gap-2 bg-forest text-cream px-6 sm:px-7 md:px-8 py-3 sm:py-3.5 md:py-4 rounded-full text-[11px] sm:text-[12px] md:text-[13px] font-bold uppercase tracking-wider hover:bg-forest-light transition-all"
            >
              Return to Home
              <ArrowRight size={12} className="sm:hidden" />
              <ArrowRight size={14} className="hidden sm:block md:hidden" />
              <ArrowRight size={15} className="hidden md:block" />
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <>
      <div className="min-h-screen bg-gradient-to-b from-ivory via-white to-ivory py-12 sm:py-16">
        {/* Decorative background */}
        <div className="fixed inset-0 pointer-events-none">
          <div className="absolute top-1/3 -left-20 w-80 h-80 bg-forest/5 rounded-full blur-3xl hidden sm:block" />
          <div className="absolute bottom-1/3 -right-20 w-80 h-80 bg-gold-light/5 rounded-full blur-3xl hidden sm:block" />
        </div>

        <div className="relative mx-auto max-w-[800px] px-4 sm:px-6 z-10">
          {/* Back link */}
          <Link
            href="/"
            className="inline-flex items-center gap-1.5 sm:gap-2 text-forest/60 hover:text-forest transition-colors mb-6 sm:mb-8 group"
          >
            <ArrowRight
              size={14}
              className="sm:hidden rotate-180 group-hover:-translate-x-1 transition-transform"
            />
            <ArrowRight
              size={16}
              className="hidden sm:block rotate-180 group-hover:-translate-x-1 transition-transform"
            />
            <span className="text-[11px] sm:text-[12px] md:text-[13px] font-medium">
              Back to Home
            </span>
          </Link>

          {/* Header */}
          <div className="text-center mb-8 sm:mb-10">
            <div className="flex items-center justify-center gap-2 sm:gap-3 mb-3 sm:mb-4">
              <div className="w-8 sm:w-12 h-px bg-gradient-to-r from-transparent via-forest/30 to-transparent" />
              <div className="flex gap-1 sm:gap-1.5">
                {[1, 2, 3].map((dot) => (
                  <div key={dot} className="relative">
                    <div className="w-1 sm:w-1.5 h-1 sm:h-1.5 rounded-full bg-forest/40" />
                    {dot === 2 && (
                      <div className="absolute inset-0 w-1 sm:w-1.5 h-1 sm:h-1.5 rounded-full bg-gold-light/40 animate-ping" />
                    )}
                  </div>
                ))}
              </div>
              <div className="w-8 sm:w-12 h-px bg-gradient-to-r from-transparent via-forest/30 to-transparent" />
            </div>

            <h1 className="font-serif text-2xl sm:text-3xl md:text-[42px] text-charcoal mb-2 sm:mb-3 px-2 sm:px-0">
              Book Your Appointment
            </h1>

            <p className="text-text-body text-[13px] sm:text-[14px] md:text-[15px] max-w-[540px] mx-auto px-3 sm:px-0">
              Fill in the details below and we'll confirm your booking via email
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Service Selection */}
            <Card className="bg-white p-4 sm:p-5 md:p-6 rounded-xl sm:rounded-2xl shadow-none">
              <div className="space-y-3 sm:space-y-4">
                <div className="flex items-center gap-1.5 sm:gap-2">
                  <Sparkles className="w-3 sm:w-4 h-3 sm:h-4 text-forest" />
                  <Label className="text-[11px] sm:text-[12px] md:text-[13px] uppercase tracking-wider font-bold text-charcoal">
                    Select Service
                  </Label>
                </div>
                <Select
                  value={selectedService}
                  onValueChange={setSelectedService}
                >
                  <SelectTrigger className="w-full min-h-12 sm:min-h-13 md:min-h-14 px-3 sm:px-4 border-1 border-border-soft rounded-lg sm:rounded-xl focus:border-forest focus:ring-0">
                    <SelectValue placeholder="Choose a service" />
                  </SelectTrigger>
                  <SelectContent className="rounded-lg sm:rounded-xl border-border-soft">
                    {serviceCategories.map((service) => (
                      <SelectItem
                        key={service.value}
                        value={service.value}
                        className="py-2 sm:py-2.5 md:py-3 text-xs sm:text-sm"
                      >
                        {service.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                {hasPrice(bookingType) && (
                  <div className="flex items-center gap-2 mt-1 sm:mt-2">
                    <Badge
                      variant="secondary"
                      className="bg-gold-light/10 text-forest hover:bg-gold-light/20 border-0 rounded-full px-2 sm:px-3 py-0.5 sm:py-1 text-[9px] sm:text-[10px] md:text-[11px] font-medium"
                    >
                      {bookingType.duration} • {bookingType.price}
                    </Badge>
                  </div>
                )}
              </div>

              {/* Date & Time Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5 md:gap-6">
                {/* Date Selection */}
                <div className="space-y-2 sm:space-y-3">
                  <div className="flex items-center gap-1.5 sm:gap-2">
                    <CalendarIcon className="w-3 sm:w-4 h-3 sm:h-4 text-forest" />
                    <Label className="text-[11px] sm:text-[12px] md:text-[13px] uppercase tracking-wider font-bold text-charcoal">
                      Select Date
                    </Label>
                  </div>
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button
                        variant="outline"
                        className={`w-full min-h-12 sm:min-h-13 md:min-h-14 px-3 sm:px-4 border-1 rounded-lg sm:rounded-xl justify-start text-left font-normal bg-transparent hover:bg-transparent ${
                          errors.date
                            ? "border-red-300 hover:border-red-300"
                            : "border-border-soft hover:border-forest/30"
                        }`}
                      >
                        <CalendarIcon className="mr-1.5 sm:mr-2 h-3 sm:h-4 w-3 sm:w-4 text-forest/40" />
                        <span
                          className={
                            selectedDate ? "text-charcoal text-xs sm:text-sm" : "text-text-muted text-xs sm:text-sm"
                          }
                        >
                          {selectedDate
                            ? selectedDate.toLocaleDateString("en-US", {
                                weekday: "short",
                                month: "short",
                                day: "numeric",
                              })
                            : "Choose a date"}
                        </span>
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent
                      className="relative w-auto p-0 rounded-lg sm:rounded-xl border-border-soft"
                      align="start"
                    >
                      <CalendarComponent
                        mode="single"
                        selected={selectedDate}
                        onSelect={setSelectedDate}
                        disabled={(date) => date < new Date()}
                        initialFocus
                        className="rounded-lg sm:rounded-xl w-[280px] sm:w-[320px] md:w-[360px]"
                      />
                    </PopoverContent>
                  </Popover>
                  {errors.date && (
                    <p className="text-red-500 text-[9px] sm:text-[10px] md:text-[11px] mt-1 flex items-center gap-1">
                      <AlertCircle className="w-2 sm:w-3 h-2 sm:h-3" />
                      {errors.date}
                    </p>
                  )}
                </div>

                {/* Time Selection */}
                <div className="space-y-2 sm:space-y-3">
                  <div className="flex items-center gap-1.5 sm:gap-2">
                    <Clock className="w-3 sm:w-4 h-3 sm:h-4 text-forest" />
                    <Label className="text-[11px] sm:text-[12px] md:text-[13px] uppercase tracking-wider font-bold text-charcoal">
                      Select Time
                    </Label>
                  </div>
                  <Select value={selectedTime} onValueChange={setSelectedTime}>
                    <SelectTrigger
                      className={`w-full min-h-12 sm:min-h-13 md:min-h-14 px-3 sm:px-4 border-1 rounded-lg sm:rounded-xl ${
                        errors.time
                          ? "border-red-300"
                          : "border-border-soft focus:border-forest"
                      }`}
                    >
                      <SelectValue placeholder="Choose a time">
                        {selectedTime ? (
                          <div className="flex items-center text-xs sm:text-sm">
                            <Clock className="mr-1.5 sm:mr-2 h-3 sm:h-4 w-3 sm:w-4 text-forest/40" />
                            {selectedTime}
                          </div>
                        ) : (
                          "Choose a time"
                        )}
                      </SelectValue>
                    </SelectTrigger>
                    <SelectContent className="rounded-lg sm:rounded-xl border-border-soft max-h-56 sm:max-h-60 md:max-h-64">
                      {timeSlots.map((time) => (
                        <SelectItem key={time} value={time} className="py-2 sm:py-2.5 md:py-3 text-xs sm:text-sm">
                          {time}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  {errors.time && (
                    <p className="text-red-500 text-[9px] sm:text-[10px] md:text-[11px] mt-1 flex items-center gap-1">
                      <AlertCircle className="w-2 sm:w-3 h-2 sm:h-3" />
                      {errors.time}
                    </p>
                  )}
                </div>
              </div>

              {/* Personal Information */}
              <div className="">
                <div className="space-y-4 sm:space-y-5 md:space-y-6">
                  <h3 className="font-serif text-base sm:text-lg text-charcoal">
                    Your Information
                  </h3>

                  {/* Name */}
                  <div className="space-y-2 sm:space-y-3">
                    <div className="flex items-center gap-1.5 sm:gap-2">
                      <User className="w-3 sm:w-4 h-3 sm:h-4 text-forest" />
                      <Label
                        htmlFor="name"
                        className="text-[11px] sm:text-[12px] md:text-[13px] uppercase tracking-wider font-bold text-charcoal"
                      >
                        Full Name
                      </Label>
                    </div>
                    <Input
                      id="name"
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      placeholder="Janet Doe"
                      className={`h-12 sm:h-13 md:h-14 px-3 sm:px-4 border-1 rounded-lg sm:rounded-xl text-xs sm:text-sm ${
                        errors.name
                          ? "border-red-300"
                          : "border-border-soft focus:border-forest"
                      }`}
                    />
                    {errors.name && (
                      <p className="text-red-500 text-[9px] sm:text-[10px] md:text-[11px] mt-1 flex items-center gap-1">
                        <AlertCircle className="w-2 sm:w-3 h-2 sm:h-3" />
                        {errors.name}
                      </p>
                    )}
                  </div>

                  {/* Email */}
                  <div className="space-y-2 sm:space-y-3">
                    <div className="flex items-center gap-1.5 sm:gap-2">
                      <Mail className="w-3 sm:w-4 h-3 sm:h-4 text-forest" />
                      <Label
                        htmlFor="email"
                        className="text-[11px] sm:text-[12px] md:text-[13px] uppercase tracking-wider font-bold text-charcoal"
                      >
                        Email Address
                      </Label>
                    </div>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      placeholder="janet@example.com"
                      className={`h-12 sm:h-13 md:h-14 px-3 sm:px-4 border-1 rounded-lg sm:rounded-xl text-xs sm:text-sm ${
                        errors.email
                          ? "border-red-300"
                          : "border-border-soft focus:border-forest"
                      }`}
                    />
                    {errors.email && (
                      <p className="text-red-500 text-[9px] sm:text-[10px] md:text-[11px] mt-1 flex items-center gap-1">
                        <AlertCircle className="w-2 sm:w-3 h-2 sm:h-3" />
                        {errors.email}
                      </p>
                    )}
                  </div>

                  {/* Phone */}
                  <div className="space-y-2 sm:space-y-3">
                    <div className="flex items-center gap-1.5 sm:gap-2">
                      <Phone className="w-3 sm:w-4 h-3 sm:h-4 text-forest" />
                      <Label
                        htmlFor="phone"
                        className="text-[11px] sm:text-[12px] md:text-[13px] uppercase tracking-wider font-bold text-charcoal"
                      >
                        Phone Number
                      </Label>
                    </div>
                    <Input
                      id="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={(e) =>
                        setFormData({ ...formData, phone: e.target.value })
                      }
                      placeholder="+256 700 123 456"
                      className={`h-12 sm:h-13 md:h-14 px-3 sm:px-4 border-1 rounded-lg sm:rounded-xl text-xs sm:text-sm ${
                        errors.phone
                          ? "border-red-300"
                          : "border-border-soft focus:border-forest"
                      }`}
                    />
                    {errors.phone && (
                      <p className="text-red-500 text-[9px] sm:text-[10px] md:text-[11px] mt-1 flex items-center gap-1">
                        <AlertCircle className="w-2 sm:w-3 h-2 sm:h-3" />
                        {errors.phone}
                      </p>
                    )}
                  </div>

                  {/* Notes */}
                  <div className="space-y-2 sm:space-y-3">
                    <div className="flex items-center gap-1.5 sm:gap-2">
                      <MessageSquare className="w-3 sm:w-4 h-3 sm:h-4 text-forest" />
                      <Label
                        htmlFor="notes"
                        className="text-[11px] sm:text-[12px] md:text-[13px] uppercase tracking-wider font-bold text-charcoal"
                      >
                        Additional Notes (Optional)
                      </Label>
                    </div>
                    <Textarea
                      id="notes"
                      value={formData.notes}
                      onChange={(e) =>
                        setFormData({ ...formData, notes: e.target.value })
                      }
                      placeholder="Any special requests or information..."
                      rows={3}
                      className="border-1 border-border-soft rounded-lg sm:rounded-xl focus:border-forest resize-none text-xs sm:text-sm"
                    />
                  </div>
                </div>
              </div>

              {/* Cancellation Policy */}
              <Card className="bg-forest/5 border-0 rounded-lg sm:rounded-xl md:rounded-2xl p-4 sm:p-5 md:p-6 shadow-none mt-4 sm:mt-5 md:mt-6">
                <div className="flex items-start gap-2 sm:gap-3">
                  <div className="w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 rounded-full bg-forest/10 flex items-center justify-center shrink-0">
                    <Heart className="w-3 sm:w-3.5 md:w-4 h-3 sm:h-3.5 md:h-4 text-forest" />
                  </div>
                  <div>
                    <h4 className="font-medium text-charcoal text-xs sm:text-sm mb-0.5 sm:mb-1">
                      Cancellation Policy
                    </h4>
                    <p className="text-text-muted text-[10px] sm:text-[11px] md:text-[12px] leading-relaxed">
                      Free cancellation up to 24 hours before your appointment.
                      Late cancellations may incur a 50% fee.
                    </p>
                  </div>
                </div>
              </Card>
            </Card>

            {/* Terms agreement */}
            <div className="flex items-center gap-1.5 sm:gap-2 text-forest/70 text-[10px] sm:text-[11px] md:text-[12px]">
              <CheckCircle className="w-3 sm:w-3.5 h-3 sm:h-3.5 text-forest shrink-0" />
              <span>
                By booking, you agree to our terms and conditions and
                cancellation policy
              </span>
            </div>

            {/* Submit button */}
            <Button
              type="submit"
              disabled={isSubmitting}
              className="w-full h-12 sm:h-13 md:h-14 bg-forest text-cream rounded-full text-[11px] sm:text-[12px] md:text-[13px] font-bold uppercase tracking-wider hover:bg-forest-light transition-all disabled:opacity-50 group"
            >
              {isSubmitting ? (
                <>
                  <div className="w-3 sm:w-4 h-3 sm:h-4 border-2 border-cream border-t-transparent rounded-full animate-spin mr-1.5 sm:mr-2" />
                  <span className="text-xs sm:text-sm">Processing...</span>
                </>
              ) : (
                <>
                  Confirm Booking
                  <ArrowRight className="w-3 sm:w-4 h-3 sm:h-4 ml-1.5 sm:ml-2 group-hover:translate-x-1 transition-transform" />
                </>
              )}
            </Button>
          </form>

          {/* Contact info */}
          <div className="text-center mt-6 sm:mt-7 md:mt-8">
            <p className="text-text-muted text-[11px] sm:text-[12px] md:text-[13px]">
              Need help? Call us at{" "}
              <a
                href="tel:+256700123456"
                className="text-forest font-medium hover:underline"
              >
                +256 700 123 456
              </a>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default function BookingPage() {
  return (
    <>
      <Topbar />
      <Navbar />
      <Suspense
        fallback={
          <div className="min-h-screen bg-ivory flex items-center justify-center">
            <div className="text-center px-4 sm:px-6">
              <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 border-4 border-forest/20 border-t-forest rounded-full animate-spin mx-auto mb-3 sm:mb-4" />
              <p className="text-forest/60 text-xs sm:text-sm">Loading booking form...</p>
            </div>
          </div>
        }
      >
        <BookingContent />
      </Suspense>
      <Footer />
    </>
  );
}