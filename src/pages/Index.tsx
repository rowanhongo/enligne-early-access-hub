
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Features } from "@/components/Features";
import { VideoSection } from "@/components/VideoSection";
import { HowToOrderSection } from "@/components/HowToOrderSection";
import { Testimonials } from "@/components/Testimonials";
import { FAQ } from "@/components/FAQ";
import { SignupForm } from "@/components/SignupForm";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <Features />
      <VideoSection />
      <HowToOrderSection />
      <Testimonials />
      <FAQ />
      <SignupForm />
      <Footer />
    </div>
  );
};

export default Index;
