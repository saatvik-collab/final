import { Button } from "@/components/ui/button";
import { Product } from "@/lib/data";
import { useToast } from "@/hooks/use-toast";

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  const { toast } = useToast();

  const handleAddToCart = () => {
    toast({
      title: "Added to cart",
      description: `${product.name} has been added to your cart.`,
    });
  };

  return (
    <div className="product-card bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition">
      <div className="h-56 overflow-hidden">
        <img 
          src={product.image} 
          alt={product.name} 
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-4">
        <div className="flex justify-between items-start mb-2">
          <h3 className="font-poppins font-bold text-lg">{product.name}</h3>
          <span className={`${product.type === 'Retail' ? 'bg-secondary' : 'bg-primary'} text-white text-xs px-2 py-1 rounded-full uppercase`}>
            {product.type}
          </span>
        </div>
        <p className="text-gray-600 text-sm mb-3">
          {product.description}
        </p>
        <div className="flex justify-between items-center">
          <span className="text-primary font-bold text-lg">₹{product.price.toLocaleString('en-IN')}</span>
          <Button 
            onClick={handleAddToCart}
            className="bg-primary hover:bg-opacity-90 text-white px-3 py-1 rounded-md text-sm font-medium transition"
          >
            Add to Cart
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
