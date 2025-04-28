
import { useState, useRef } from 'react';
import { Button } from "@/components/ui/button";
import { Play } from "lucide-react";

export const VideoSection = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  
  const handlePlayClick = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <section id="video" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center text-enligne-black">
            See Enligne in <span className="text-enligne-red">Action</span>
          </h2>
          
          <div className="relative aspect-video rounded-2xl overflow-hidden shadow-2xl border border-gray-100">
            <video 
              ref={videoRef}
              className="w-full h-full object-cover"
              poster="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=1200&q=80"
              muted
            >
              <source src="/app-teaser.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            
            {!isPlaying && (
              <div className="absolute inset-0 flex items-center justify-center bg-black/30">
                <Button 
                  onClick={handlePlayClick}
                  className="bg-enligne-red hover:bg-enligne-red/90 h-16 w-16 rounded-full flex items-center justify-center transition-transform duration-300 hover:scale-110"
                >
                  <Play className="h-8 w-8 text-white" />
                </Button>
              </div>
            )}
          </div>
          
          <div className="mt-8 text-center">
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
