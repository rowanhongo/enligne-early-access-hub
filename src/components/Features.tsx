
import { MessageSquare, Clock, Tag, MapPin } from "lucide-react";

export const Features = () => {
  const features = [
    {
      title: "Real-time Tracking",
      description: "Follow your order from restaurant to doorstep with precision tracking.",
      icon: <MapPin className="h-6 w-6 text-enligne-red" />,
    },
    {
      title: "Lightning Fast",
      description: "Our optimized delivery network ensures your food arrives hot and fresh.",
      icon: <Clock className="h-6 w-6 text-enligne-red" />,
    },
    {
      title: "Find Your Favourites",
      description: "Discover hard-to-find foods from your favorite restaurants nearby.",
      icon: <Tag className="h-6 w-6 text-enligne-red" />,
    },
    {
      title: "24/7 Support",
      description: "Our customer service team is available around the clock to assist you.",
      icon: <MessageSquare className="h-6 w-6 text-enligne-red" />,
    }
  ];

  return (
    <section id="features" className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-enligne-black">
          Why Choose <span className="text-enligne-red">Enligne</span>?
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="bg-white p-6 rounded-xl shadow-md border border-gray-100 hover:shadow-lg transition-all duration-300"
            >
              <div className="rounded-full bg-gray-50 w-12 h-12 flex items-center justify-center mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2 text-enligne-black">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
