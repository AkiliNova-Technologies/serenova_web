import { Phone, Gift } from "lucide-react";

export default function Topbar() {
  return (
    <div className="bg-forest text-cream text-[13px] py-2.5">
      <div className="mx-auto max-w-[1280px] px-6 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <Phone size={13} />
          <span className="opacity-90">Call Us: +256 700 123 456</span>
        </div>
        <div className="hidden sm:flex items-center gap-2">
          <Gift size={13} />
          <span className="opacity-90">
            First visit? Enjoy <strong className="text-gold-light">15% off</strong> your signature experience.{" "}
            <a href="#" className="underline underline-offset-2 hover:text-gold-light transition-colors">
              Book now
            </a>
          </span>
        </div>
        <div className="flex gap-4 items-center">
          {["Mon–Fri: 9AM–7PM", "Sat: 10AM–5PM"].map((t, i) => (
            <span key={i} className="opacity-70 hidden md:inline text-[12px]">
              {t}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
