import { testimonials } from "@/lib/data";
import TestimonialCard from "@/components/ui/testimonial-card";

const TestimonialsSection = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center font-poppins mb-4">
          What Our Customers Say
        </h2>
        <p className="text-gray-600 text-center max-w-2xl mx-auto mb-12">
          Don't just take our word for it - hear from our satisfied customers
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial) => (
            <TestimonialCard key={testimonial.id} testimonial={testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
