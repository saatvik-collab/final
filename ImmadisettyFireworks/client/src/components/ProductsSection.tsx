import { useState } from "react";
import { products } from "@/lib/data";
import ProductCard from "@/components/ui/product-card";
import { Button } from "@/components/ui/button";

const categories = [
  { id: "all", name: "All Products" },
  { id: "sparklers", name: "Sparklers" },
  { id: "flower-pots", name: "Flower Pots" },
  { id: "rockets", name: "Rockets" },
  { id: "ground-chakkars", name: "Ground Chakkars" },
  { id: "bombs", name: "Bombs" },
  { id: "gift-combos", name: "Gift Combos" },
  { id: "kids", name: "Kids Specials" }
];

const ProductsSection = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const [visibleProducts, setVisibleProducts] = useState(8);

  const filteredProducts = activeCategory === "all" 
    ? products 
    : products.filter(product => product.category === activeCategory);

  const displayedProducts = filteredProducts.slice(0, visibleProducts);

  const handleCategoryChange = (categoryId: string) => {
    setActiveCategory(categoryId);
    setVisibleProducts(8);
  };

  const loadMoreProducts = () => {
    setVisibleProducts(prev => prev + 4);
  };

  return (
    <section id="products" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center font-poppins mb-4">
          Our Products
        </h2>
        <p className="text-gray-600 text-center max-w-2xl mx-auto mb-8">
          Explore our wide range of high-quality fireworks for all your celebrations
        </p>
        
        {/* Product Categories Tabs */}
        <div className="mb-12">
          <div className="flex flex-wrap justify-center gap-2 md:gap-4">
            {categories.map((category) => (
              <button
                key={category.id}
                className={`px-4 py-2 rounded-full text-sm md:text-base font-medium transition ${
                  activeCategory === category.id 
                    ? "bg-primary text-white" 
                    : "bg-white text-dark hover:bg-gray-100"
                }`}
                onClick={() => handleCategoryChange(category.id)}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>
        
        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {displayedProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
        
        {displayedProducts.length < filteredProducts.length && (
          <div className="mt-10 text-center">
            <Button 
              onClick={loadMoreProducts}
              className="bg-secondary hover:bg-opacity-90 text-white px-8 py-3 rounded-full font-medium transition"
            >
              Load More Products
            </Button>
          </div>
        )}
      </div>
    </section>
  );
};

export default ProductsSection;
