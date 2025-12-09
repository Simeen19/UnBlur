import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import MethodSection from "@/components/MethodSection";
import PodcastSection from "@/components/PodcastSection";
import ProblemSection from "@/components/ProblemSection";
import SolutionSection from "@/components/SolutionSection";
import FeaturesSection from "@/components/FeaturesSection";
import WhyDifferentSection from "@/components/WhyDifferentSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen bg-background overflow-x-hidden">
      <Navbar />
      <HeroSection />
      <section id="method">
        <MethodSection />
      </section>
      <section id="podcast">
        <PodcastSection />
      </section>
      <ProblemSection />
      <SolutionSection />
      <section id="features">
        <FeaturesSection />
      </section>
      <WhyDifferentSection />
      <section id="testimonials">
        <TestimonialsSection />
      </section>
      <CTASection />
      <Footer />
    </main>
  );
};

export default Index;
