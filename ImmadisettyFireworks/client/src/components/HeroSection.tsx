import { Shield, Truck, Medal } from "lucide-react";

const HeroSection = () => {
  return (
    <section id="home" className="relative overflow-hidden">
      {/* Hero background with parallax effect */}
      <div 
        className="hero-parallax h-[80vh] bg-cover bg-center" 
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1498931299472-f7a63a5a1cfa?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=1080')" }}
      >
        <div className="absolute inset-0 bg-dark bg-opacity-50"></div>
        <div className="container mx-auto px-4 h-full flex items-center relative z-10">
          <div className="text-white max-w-xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-poppins mb-4">
              Light Up Your <span className="text-accent">Celebrations</span>
            </h1>
            <p className="text-lg md:text-xl mb-8">
              Premium fireworks for weddings, festivals, and special events near Mahankali Temple, Secunderabad.
            </p>
            <div className="flex flex-wrap gap-4">
              <a 
                href="#products" 
                className="bg-primary hover:bg-opacity-90 px-6 py-3 rounded-full font-medium text-white transition"
              >
                Explore Products
              </a>
              <a 
                href="#contact" 
                className="bg-white text-primary hover:bg-opacity-90 px-6 py-3 rounded-full font-medium transition"
              >
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </div>
      
      {/* Features bar */}
      <div className="bg-gradient-to-r from-primary to-secondary py-4 text-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center">
              <Shield className="h-6 w-6 mr-3" />
              <span className="font-medium">Safety Certified Products</span>
            </div>
            <div className="flex items-center">
              <Truck className="h-6 w-6 mr-3" />
              <span className="font-medium">Free Delivery on Bulk Orders</span>
            </div>
            <div className="flex items-center">
              <Medal className="h-6 w-6 mr-3" />
              <span className="font-medium">Premium Quality Guaranteed</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
