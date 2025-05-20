import { ArrowRight } from "lucide-react";
import { Category } from "@/lib/data";

interface CategoryCardProps {
  category: Category;
}

const CategoryCard = ({ category }: CategoryCardProps) => {
  return (
    <div className="group rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition card-zoom">
      <div className="h-48 overflow-hidden">
        <img 
          src={category.image} 
          alt={`${category.name} Category`} 
          className="w-full h-full object-cover transition"
        />
      </div>
      <div className="p-5 bg-white border-t-4 border-primary">
        <h3 className="font-poppins font-bold text-xl mb-2">{category.name}</h3>
        <p className="text-gray-600 text-sm mb-4">{category.description}</p>
        <a 
          href="#products" 
          className="inline-block text-primary font-medium group-hover:text-secondary transition flex items-center"
        >
          View Products <ArrowRight className="ml-1 h-4 w-4" />
        </a>
      </div>
    </div>
  );
};

export default CategoryCard;
