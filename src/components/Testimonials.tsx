
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Quote } from "lucide-react";

export const Testimonials = () => {
  const testimonials = [
    {
      quote: "Enligne has totally changed how I order food. The delivery times are incredibly fast, and I love being able to track my order in real-time.",
      author: "Sarah J.",
      role: "Early Access User",
      avatar: "https://i.pravatar.cc/150?img=1",
    },
    {
      quote: "The exclusive restaurant partnerships and deals have saved me so much money. Plus, the food always arrives hot and fresh!",
      author: "Michael T.",
      role: "Beta Tester",
      avatar: "https://i.pravatar.cc/150?img=2",
    },
    {
      quote: "As someone with dietary restrictions, I appreciate how easy it is to customize orders. The customer service is also top-notch!",
      author: "Elena C.",
      role: "Early Access User",
      avatar: "https://i.pravatar.cc/150?img=3",
    },
  ];

  return (
    <section id="testimonials" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-enligne-black">
          What Our <span className="text-enligne-red">Early Users</span> Are Saying
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="border border-gray-100 shadow-md hover:shadow-lg transition-all duration-300">
              <CardContent className="p-6">
                <div className="mb-4 text-enligne-red">
                  <Quote className="h-6 w-6" />
                </div>
                <p className="mb-4 text-gray-700 italic">"{testimonial.quote}"</p>
                <div className="flex items-center">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.author}
                    className="w-10 h-10 rounded-full mr-4"
                  />
                  <div>
                    <p className="font-semibold text-enligne-black">{testimonial.author}</p>
                    <p className="text-sm text-gray-500">{testimonial.role}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
