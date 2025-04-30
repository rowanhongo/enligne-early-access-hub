
import { useEffect, useRef, useState } from 'react';
import { 
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from "@/components/ui/carousel";
import { cn } from "@/lib/utils";

// Array of app images - replaced with the provided uploads
const appImages = [
  "public/lovable-uploads/5294472e-0c2e-4764-b6bf-2f0b6c7d33d1.png",
  "public/lovable-uploads/0b4ea9bf-da31-4534-847a-65655b74b8e2.png",
  "public/lovable-uploads/4bc13546-8ef2-495d-8981-11a39e308bea.png",
  "public/lovable-uploads/ed271ea0-e240-4472-81a2-d865a7fa904e.png",
  "public/lovable-uploads/a6381050-8fc6-4afa-af49-0a2d7bfdb351.png",
  "public/lovable-uploads/dba14e2f-e383-4a43-a118-0fdc84846e8e.png"
];

export const VideoSection = () => {
  const [api, setApi] = useState<any>();
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  
  // Setup auto-scrolling
  useEffect(() => {
    if (!api) return;
    
    // Start automatic scrolling
    intervalRef.current = setInterval(() => {
      api.scrollNext();
    }, 3000); // Scroll every 3 seconds
    
    // Listen to scroll events to update the current index
    const onSelect = () => {
      setCurrentIndex(api.selectedScrollSnap());
    };
    
    api.on("select", onSelect);
    
    // Clean up
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
      api.off("select", onSelect);
    };
  }, [api]);
  
  return (
    <section id="video" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-enligne-black">
            See Enligne in <span className="text-enligne-red">Action</span>
          </h2>
          
          <div className="relative">
            <Carousel 
              setApi={setApi}
              opts={{
                align: "center",
                loop: true,
              }}
              className="w-full"
            >
              <CarouselContent className="-ml-2 md:-ml-4">
                {appImages.map((src, index) => (
                  <CarouselItem 
                    key={index} 
                    className="pl-2 md:pl-4 basis-full md:basis-1/2 lg:basis-1/3 transition-all duration-300"
                  >
                    <div className={cn(
                      "overflow-hidden rounded-xl border border-gray-200 shadow-md transition-all duration-500",
                      currentIndex === index ? "scale-110 shadow-lg" : "scale-90 opacity-70"
                    )}>
                      <img 
                        src={src} 
                        alt={`Enligne App Screenshot ${index + 1}`} 
                        className="w-full h-auto aspect-[9/16] object-cover"
                      />
                    </div>
                    {currentIndex === index && (
                      <div className="mt-4 text-center">
                        <p className="text-sm font-medium text-enligne-red">
                          {index === 0 ? "Profile" : 
                           index === 1 ? "Home Screen" : 
                           index === 2 ? "Customer Support" : 
                           index === 3 ? "Special Offers" :
                           index === 4 ? "Restaurant Details" :
                           "Cart"}
                        </p>
                      </div>
                    )}
                  </CarouselItem>
                ))}
              </CarouselContent>
              <div className="flex justify-center gap-2 mt-8">
                <CarouselPrevious className="static transform-none mx-2 bg-enligne-red text-white hover:bg-enligne-red/90" />
                <CarouselNext className="static transform-none mx-2 bg-enligne-red text-white hover:bg-enligne-red/90" />
              </div>
            </Carousel>
          </div>
          
          <div className="mt-10 text-center">
            <p className="text-gray-700 max-w-2xl mx-auto">
              Our sleek, intuitive interface makes ordering food a breeze. 
              Browse restaurants, track your delivery in real-time, and enjoy 
              your meal with minimal wait times.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
