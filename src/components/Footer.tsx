
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <footer className="bg-gray-100 py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-8 md:mb-0">
            <img 
              src="/lovable-uploads/11816126-4ad5-41d8-acdf-53931bd3472d.png" 
              alt="Enligne Logo" 
              className="h-8"
            />
            <p className="mt-2 text-gray-600 max-w-md">
              We move Kigali!<br />
              Tap. Track. Done.
            </p>
          </div>
          
          <div className="grid grid-cols-2 gap-8 md:gap-16">
            <div>
              <h4 className="text-lg font-semibold mb-4 text-enligne-black">Company</h4>
              <ul className="space-y-2">
                <li>
                  <Link to="/about" className="text-gray-600 hover:text-enligne-red transition-colors">
                    About Us
                  </Link>
                </li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4 text-enligne-black">Legal</h4>
              <ul className="space-y-2">
                <li>
                  <Link to="/privacy-policy" className="text-gray-600 hover:text-enligne-red transition-colors">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link to="/terms-of-service" className="text-gray-600 hover:text-enligne-red transition-colors">
                    Terms of Service
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} Enligne. All rights reserved.
          </p>
          
          <div className="flex space-x-4">
            <a 
              href="#" 
              className="text-gray-500 hover:text-enligne-red transition-colors"
              aria-label="Facebook"
            >
              <Facebook />
            </a>
            <a 
              href="#" 
              className="text-gray-500 hover:text-enligne-red transition-colors"
              aria-label="Twitter"
            >
              <Twitter />
            </a>
            <a 
              href="https://www.instagram.com/enligne.rw?utm_source=qr&igsh=MWdmdnIxaThpbXRwZA==" 
              className="text-gray-500 hover:text-enligne-red transition-colors"
              aria-label="Instagram"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Instagram />
            </a>
            <a 
              href="#" 
              className="text-gray-500 hover:text-enligne-red transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
