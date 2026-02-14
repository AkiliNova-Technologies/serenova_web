import Topbar from "@/components/Topbar";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import InfoBar from "@/components/InfoBar";
import About from "@/components/About";
import Stats from "@/components/Stats";
import Services from "@/components/Services";
import Treatments from "@/components/Treatments";
import Testimonials from "@/components/Testimonials";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import SpaceCategories from "@/components/SpaceCategories";

export default function Home() {
  return (
    <>
      <Topbar />
      <Navbar />
      <Hero />
      <InfoBar />
      <About />
      <Stats />
      <Services />
      <Treatments />
      <SpaceCategories />
      <Testimonials />
      <CTA />
      <Footer />
    </>
  );
}
