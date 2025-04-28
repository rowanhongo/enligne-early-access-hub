
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "../hooks/use-toast";

export const SignupForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate inputs
    if (!name.trim() || !email.trim()) {
      toast({
        title: "Error",
        description: "Please fill out all fields",
        variant: "destructive"
      });
      return;
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      toast({
        title: "Error",
        description: "Please enter a valid email address",
        variant: "destructive"
      });
      return;
    }

    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      toast({
        title: "Success!",
        description: "You've been added to our early access list!",
      });
      setName("");
      setEmail("");
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <section id="signup" className="py-16 md:py-24 bg-enligne-black text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Get <span className="text-enligne-red">Early Access</span>
          </h2>
          <p className="mb-8 text-gray-300">
            Be among the first to experience Enligne. Sign up now for exclusive early access and special benefits.
          </p>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid gap-4">
              <div className="grid gap-2 text-left">
                <Label htmlFor="name" className="text-white">
                  Full Name
                </Label>
                <Input
                  id="name"
                  placeholder="Enter your name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="bg-white/10 border-white/20 text-white placeholder:text-gray-400"
                />
              </div>
              
              <div className="grid gap-2 text-left">
                <Label htmlFor="email" className="text-white">
                  Email Address
                </Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="you@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="bg-white/10 border-white/20 text-white placeholder:text-gray-400"
                />
              </div>
            </div>
            
            <Button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-enligne-red hover:bg-enligne-red/90 text-white py-6 rounded-xl text-lg font-semibold"
            >
              {isSubmitting ? "Signing Up..." : "Sign Up for Early Access"}
            </Button>
          </form>
          
          <p className="mt-4 text-sm text-gray-400">
            By signing up, you agree to our{" "}
            <a href="#" className="underline text-enligne-red hover:text-enligne-red/80">
              Terms of Service
            </a>{" "}
            and{" "}
            <a href="#" className="underline text-enligne-red hover:text-enligne-red/80">
              Privacy Policy
            </a>
            .
          </p>
        </div>
      </div>
    </section>
  );
};
