
import { Play } from "lucide-react";

export const HowToOrderSection = () => {
  return (
    <section className="py-12 md:py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 md:mb-12 text-center text-enligne-black">
          How to Order on <span className="text-enligne-red">Enligne</span>
        </h2>
        
        <div className="max-w-3xl mx-auto">
          <div className="relative overflow-hidden rounded-xl shadow-lg group cursor-pointer">
            {/* Placeholder image - will be replaced with actual tutorial thumbnail */}
            <img 
              src="https://images.unsplash.com/photo-1618160702438-9b02ab6515c9" 
              alt="How to order on Enligne" 
              className="w-full h-auto aspect-video object-cover transition-transform duration-300 group-hover:scale-105"
            />
            
            {/* Play button overlay */}
            <div className="absolute inset-0 flex items-center justify-center bg-black/30 transition-opacity duration-300 group-hover:bg-black/50">
              <div className="bg-enligne-red rounded-full p-4 shadow-lg transform transition-transform duration-300 group-hover:scale-110">
                <Play className="h-10 w-10 text-white" />
              </div>
            </div>
          </div>
          
          <div className="mt-6 text-center">
            <p className="text-gray-700">
              Watch our quick tutorial to learn how to place an order, track your delivery,
              and get the most out of Enligne!
            </p>
            <p className="mt-2 text-sm text-gray-500">
              (Click the video to play)
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
