
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { Link } from 'react-router-dom';

interface MobileNavProps {
  links: { href: string; label: string }[];
}

export const MobileNav: React.FC<MobileNavProps> = ({ links }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNav = () => {
    setIsOpen(!isOpen);
  };

  const closeNav = () => {
    setIsOpen(false);
  };

  return (
    <div className="md:hidden">
      <Button
        variant="ghost"
        size="sm"
        className="p-1"
        onClick={toggleNav}
        aria-label="Toggle Menu"
      >
        {isOpen ? (
          <X className="h-6 w-6 text-enligne-black" />
        ) : (
          <Menu className="h-6 w-6 text-enligne-black" />
        )}
      </Button>

      {isOpen && (
        <div className="fixed inset-0 z-50 bg-white">
          <div className="flex flex-col h-full">
            <div className="flex justify-between items-center p-4 border-b">
              <Link to="/" onClick={closeNav}>
                <img 
                  src="/lovable-uploads/11816126-4ad5-41d8-acdf-53931bd3472d.png" 
                  alt="Enligne Logo" 
                  className="h-8"
                />
              </Link>
              <Button
                variant="ghost"
                size="sm"
                onClick={toggleNav}
                className="p-1"
                aria-label="Close Menu"
              >
                <X className="h-6 w-6 text-enligne-black" />
              </Button>
            </div>

            <nav className="flex-1 overflow-auto py-8">
              <ul className="space-y-6 px-8">
                {links.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.href}
                      className="text-2xl font-medium text-enligne-black hover:text-enligne-red block py-2"
                      onClick={closeNav}
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </div>
      )}
    </div>
  );
};
