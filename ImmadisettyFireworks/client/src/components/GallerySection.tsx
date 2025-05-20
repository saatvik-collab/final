import { useState } from "react";
import { galleryImages } from "@/lib/data";
import GalleryItem from "@/components/ui/gallery-item";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

const GallerySection = () => {
  const [visibleImages, setVisibleImages] = useState(6);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const displayedImages = galleryImages.slice(0, visibleImages);

  const viewMoreImages = () => {
    setVisibleImages(prev => prev + 3);
  };

  return (
    <section id="gallery" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center font-poppins mb-4">
          Gallery
        </h2>
        <p className="text-gray-600 text-center max-w-2xl mx-auto mb-12">
          See our products in action and the joy they bring to celebrations
        </p>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {displayedImages.map((image) => (
            <Dialog key={image.id}>
              <DialogTrigger asChild>
                <div onClick={() => setSelectedImage(image.image)}>
                  <GalleryItem image={image} />
                </div>
              </DialogTrigger>
              <DialogContent className="max-w-4xl p-0 bg-transparent border-none">
                <img 
                  src={image.image} 
                  alt={image.alt} 
                  className="w-full h-auto rounded-lg" 
                />
              </DialogContent>
            </Dialog>
          ))}
        </div>
        
        {visibleImages < galleryImages.length && (
          <div className="mt-10 text-center">
            <Button 
              onClick={viewMoreImages}
              className="bg-secondary hover:bg-opacity-90 text-white px-8 py-3 rounded-full font-medium transition"
            >
              View More Photos
            </Button>
          </div>
        )}
      </div>
    </section>
  );
};

export default GallerySection;
