import { ArrowRight } from "lucide-react";
import { categories } from "@/lib/data";
import CategoryCard from "@/components/ui/category-card";

const CategoriesSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center font-poppins mb-4">
          Popular Categories
        </h2>
        <p className="text-gray-600 text-center max-w-2xl mx-auto mb-12">
          Explore our wide range of fireworks perfect for any celebration or event
        </p>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category) => (
            <CategoryCard key={category.id} category={category} />
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <a 
            href="#products" 
            className="inline-block bg-secondary hover:bg-opacity-90 text-white px-8 py-3 rounded-full font-medium transition"
          >
            View All Categories
          </a>
        </div>
      </div>
    </section>
  );
};

export default CategoriesSection;
