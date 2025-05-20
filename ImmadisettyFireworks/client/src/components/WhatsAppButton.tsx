import { FaWhatsapp } from "react-icons/fa";

const WhatsAppButton = () => {
  const phoneNumber = "919440407789";
  const message = "Hi, I'm interested in buying crackers from Immadisetty Crackers. Please share details.";
  
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
  
  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-center">
      <div className="mb-2 bg-white px-3 py-1 rounded-full text-sm font-medium shadow-md">
        Chat with us on WhatsApp
      </div>
      <a 
        href={whatsappUrl} 
        target="_blank" 
        rel="noopener noreferrer" 
        className="whatsapp-btn bg-green-500 text-white w-14 h-14 rounded-full flex items-center justify-center shadow-lg"
        aria-label="Contact us on WhatsApp"
      >
        <FaWhatsapp className="text-2xl" />
      </a>
    </div>
  );
};

export default WhatsAppButton;
