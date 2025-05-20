import { useState } from "react";
import { Link } from "wouter";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen((prev) => !prev);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <div className="text-primary font-bold text-2xl md:text-3xl font-poppins">
              Immadisetty <span className="text-secondary">Crackers</span>
            </div>
            <div className="ml-2 text-secondary font-dancing text-sm md:text-base">Since 1982</div>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-6">
            <a href="#home" className="text-foreground hover:text-primary font-medium transition">Home</a>
            <a href="#products" className="text-foreground hover:text-primary font-medium transition">Products</a>
            <a href="#gallery" className="text-foreground hover:text-primary font-medium transition">Gallery</a>
            <a href="#about" className="text-foreground hover:text-primary font-medium transition">About Us</a>
            <a href="#contact" className="text-foreground hover:text-primary font-medium transition">Contact</a>
          </nav>
          
          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button 
              onClick={toggleMobileMenu}
              className="text-foreground focus:outline-none"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
        
        {/* Mobile Navigation */}
        <div className={`md:hidden pb-4 ${mobileMenuOpen ? 'block' : 'hidden'}`}>
          <a href="#home" onClick={closeMobileMenu} className="block py-2 text-foreground hover:text-primary font-medium">Home</a>
          <a href="#products" onClick={closeMobileMenu} className="block py-2 text-foreground hover:text-primary font-medium">Products</a>
          <a href="#gallery" onClick={closeMobileMenu} className="block py-2 text-foreground hover:text-primary font-medium">Gallery</a>
          <a href="#about" onClick={closeMobileMenu} className="block py-2 text-foreground hover:text-primary font-medium">About Us</a>
          <a href="#contact" onClick={closeMobileMenu} className="block py-2 text-foreground hover:text-primary font-medium">Contact</a>
        </div>
      </div>
    </header>
  );
};

export default Header;
