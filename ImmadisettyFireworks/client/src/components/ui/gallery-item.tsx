import { GalleryImage } from "@/lib/data";

interface GalleryItemProps {
  image: GalleryImage;
}

const GalleryItem = ({ image }: GalleryItemProps) => {
  return (
    <div className="gallery-item overflow-hidden rounded-lg cursor-pointer">
      <img 
        src={image.image} 
        alt={image.alt} 
        className="w-full h-64 object-cover" 
      />
    </div>
  );
};

export default GalleryItem;
