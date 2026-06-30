import { Navbar } from "@/components/layout/Navbar";
import { Hero } from "@/components/sections/Hero";
import { FeaturedMenu } from "@/components/sections/FeaturedMenu";
import { WhyBCCafe } from "@/components/sections/WhyBCCafe";
import { SpecialOffers } from "@/components/sections/SpecialOffers";
import { Testimonials } from "@/components/sections/Testimonials";
import { Location } from "@/components/sections/Location";
import { Footer } from "@/components/layout/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      {/* Ambient Dot Field Background */}
      <div className="fixed inset-0 dot-field-bg pointer-events-none z-0" />
      <main className="flex-grow">
        <Hero />
        <FeaturedMenu />
        <WhyBCCafe />
        <SpecialOffers />
        <Testimonials />
        <Location />
      </main>
      <Footer />
    </>
  );
}
