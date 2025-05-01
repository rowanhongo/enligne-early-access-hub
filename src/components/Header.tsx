
import { useState, useEffect } from 'react';
import { MobileNav } from './MobileNav';
import { Link } from 'react-router-dom';

export const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  
  const navLinks = [
    { href: "#features", label: "Features" },
    { href: "#video", label: "Demo" },
    { href: "#testimonials", label: "Testimonials" },
    { href: "#faq", label: "FAQ" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/90 backdrop-blur-md shadow-sm' : 'bg-transparent'}`}>
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center gap-4">
          <Link to="/">
            <img 
              src="/lovable-uploads/11816126-4ad5-41d8-acdf-53931bd3472d.png" 
              alt="Enligne Logo" 
              className="h-8 md:h-10"
            />
          </Link>
          <div className="hidden md:block text-enligne-red font-semibold text-lg">
            We Move Kigali
          </div>
        </div>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:block">
          <ul className="flex space-x-6">
            {navLinks.map((link, index) => (
              <li key={index}>
                <a 
                  href={link.href} 
                  className="text-enligne-black hover:text-enligne-red font-medium transition-colors"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        
        {/* Mobile Navigation */}
        <MobileNav links={navLinks} />
      </div>
    </header>
  );
};
