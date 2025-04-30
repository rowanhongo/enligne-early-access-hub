
import { Button } from "@/components/ui/button";

export const Hero = () => {
  const scrollToSignup = () => {
    const signupSection = document.getElementById('signup');
    if (signupSection) {
      signupSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center pt-16 overflow-hidden bg-gray-100">
      <div className="absolute inset-0 z-0">
        <img
          src="/lovable-uploads/32ec54ad-c35e-4a6b-9023-63d6c5f57c62.png"
          alt="Food Delivery Background"
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/40 to-white" />
      </div>

      <div className="container mx-auto px-4 py-12 md:py-32 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <div className="animate-fade-in-up">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-enligne-black">
              Delivering Delicious,<br />
              <span className="text-enligne-red">Right to Your Door</span>
            </h1>
            <p className="text-lg md:text-xl mb-8 text-gray-700">
              The future of home delivery in Kigali is here. Experience lightning-fast delivery times, 
              a varied selection of restaurants, supermarkets, bakeries and more, and exclusive offers.
            </p>
            
            <Button 
              onClick={scrollToSignup}
              className="bg-enligne-red hover:bg-enligne-red/90 text-white py-6 px-8 rounded-full text-lg shadow-lg hover:shadow-xl transition-all duration-300"
            >
              Sign Up for Early Access
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
