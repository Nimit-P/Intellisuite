import AboutUS from "@/components/AboutUs";
import { DashboardPreview } from "@/components/DashboardPreview";
import { HowItWorks } from "@/components/HowItWorks";
import { CTA } from "@/components/CTA";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import NavBar from "@/components/Navbar";
import { PricingSection } from "@/components/Pricing";
import TeamSection from "@/components/team";
import { ReviewCardTestimonials } from "@/components/Testimonals";
import { Feature17 } from "@/components/feature17";



export default function page() {
  return (
    <div className="space-y-2 md:space-y-5">
      <NavBar />
      <section id="hero">
        <HeroSection />
      </section>
      <section id="about-us" >
        <AboutUS />
      </section>
      <section id="how-it-works">
        <HowItWorks />
      </section>
      <section id="dashboard-preview">
        <DashboardPreview />
      </section>
      {/* <section id="features">
        <Feature17 />
      </section> */}
      <section id="team">
        <TeamSection />
      </section>
      <section id="reviews">
        <ReviewCardTestimonials />
      </section>
      <section id="pricing">
        <PricingSection />
      </section>
      <section id="cta">
        <CTA />
      </section>
      <Footer />
    </div>
  )
}
