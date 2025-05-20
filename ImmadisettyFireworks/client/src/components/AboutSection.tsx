import { History, Users, Award } from "lucide-react";

const AboutSection = () => {
  return (
    <section id="about" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center">
          <div className="lg:w-1/2 mb-10 lg:mb-0 lg:pr-10">
            <h2 className="text-3xl md:text-4xl font-bold font-poppins mb-6">
              About Immadisetty Crackers
            </h2>
            <p className="text-gray-600 mb-4">
              Established in 1982, Immadisetty Crackers has been a trusted name in fireworks for generations. 
              Located near Mahankali Temple in Secunderabad, our shop has become a landmark for quality 
              fireworks in Hyderabad.
            </p>
            <p className="text-gray-600 mb-4">
              As a family-run business, we take pride in offering only the highest quality, safety-tested 
              fireworks sourced directly from manufacturers. Our expertise lies in curating the perfect 
              fireworks display for any occasion – from intimate family celebrations to grand weddings 
              and corporate events.
            </p>
            <p className="text-gray-600 mb-6">
              Our strategic location near Mahankali Temple in Secunderabad makes us easily accessible to 
              customers from all parts of Hyderabad. We've built our reputation on trust, quality, and 
              exceptional customer service.
            </p>
            <div className="flex flex-wrap gap-4">
              <div className="flex items-center">
                <History className="text-primary h-6 w-6 mr-3" />
                <div>
                  <h4 className="font-medium">40+ Years</h4>
                  <p className="text-gray-500 text-sm">Of Experience</p>
                </div>
              </div>
              <div className="flex items-center">
                <Users className="text-primary h-6 w-6 mr-3" />
                <div>
                  <h4 className="font-medium">10,000+</h4>
                  <p className="text-gray-500 text-sm">Happy Customers</p>
                </div>
              </div>
              <div className="flex items-center">
                <Award className="text-primary h-6 w-6 mr-3" />
                <div>
                  <h4 className="font-medium">Quality</h4>
                  <p className="text-gray-500 text-sm">Guaranteed</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="lg:w-1/2">
            <img 
              src="https://pixabay.com/get/g39fcab478f4c4418b8dc498734acedeb5002aa91e5adfed24fb99f691c1e669c365d0a93052f948e9f6d3f2f9e28d4318ed280a5f647e1752876d88315c45449_1280.jpg" 
              alt="Our fireworks shop" 
              className="w-full h-auto rounded-lg shadow-lg" 
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
