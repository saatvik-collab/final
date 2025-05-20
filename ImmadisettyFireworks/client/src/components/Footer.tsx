import { MapPin, Phone, Mail } from "lucide-react";
import { FaFacebookF, FaInstagram, FaYoutube, FaWhatsapp } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-dark text-white pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-bold font-poppins mb-4">Immadisetty Crackers</h3>
            <p className="text-gray-400 mb-4">
              Your trusted partner for high-quality fireworks since 1982. Making your celebrations brighter and more memorable.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-white hover:text-secondary transition">
                <FaFacebookF />
              </a>
              <a href="#" className="text-white hover:text-secondary transition">
                <FaInstagram />
              </a>
              <a href="#" className="text-white hover:text-secondary transition">
                <FaYoutube />
              </a>
              <a href="#" className="text-white hover:text-secondary transition">
                <FaWhatsapp />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-bold font-poppins mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#home" className="text-gray-400 hover:text-white transition">Home</a></li>
              <li><a href="#products" className="text-gray-400 hover:text-white transition">Products</a></li>
              <li><a href="#gallery" className="text-gray-400 hover:text-white transition">Gallery</a></li>
              <li><a href="#about" className="text-gray-400 hover:text-white transition">About Us</a></li>
              <li><a href="#contact" className="text-gray-400 hover:text-white transition">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold font-poppins mb-4">Product Categories</h3>
            <ul className="space-y-2">
              <li><a href="#products" className="text-gray-400 hover:text-white transition">Sparklers</a></li>
              <li><a href="#products" className="text-gray-400 hover:text-white transition">Flower Pots</a></li>
              <li><a href="#products" className="text-gray-400 hover:text-white transition">Rockets</a></li>
              <li><a href="#products" className="text-gray-400 hover:text-white transition">Ground Chakkars</a></li>
              <li><a href="#products" className="text-gray-400 hover:text-white transition">Gift Combos</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold font-poppins mb-4">Contact Info</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin className="text-secondary h-5 w-5 mt-1 mr-3" />
                <span className="text-gray-400">Shop No:3-3-416, Immadisetty's House, Opp: Mahankali Temple, General Bazaar, Secunderabad</span>
              </li>
              <li className="flex items-start">
                <Phone className="text-secondary h-5 w-5 mt-1 mr-3" />
                <span className="text-gray-400">+91 9440407789</span>
              </li>
              <li className="flex items-start">
                <Mail className="text-secondary h-5 w-5 mt-1 mr-3" />
                <span className="text-gray-400">info@immadisetty.com</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-6 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Immadisetty Crackers. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
