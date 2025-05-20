import { useState } from "react";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

const formSchema = z.object({
  name: z.string().min(2, { message: "Name is required" }),
  phone: z.string().min(10, { message: "Valid phone number is required" }),
  eventType: z.string().min(1, { message: "Please select an event type" }),
});

type FormValues = z.infer<typeof formSchema>;

const CTASection = () => {
  const { toast } = useToast();
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      phone: "",
      eventType: "",
    },
  });

  const onSubmit = (data: FormValues) => {
    toast({
      title: "Inquiry Submitted",
      description: "We'll contact you shortly to discuss your requirements.",
    });
    form.reset();
  };

  return (
    <section className="py-16 bg-gradient-to-r from-primary to-secondary text-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="mb-8 md:mb-0 md:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold font-poppins mb-4">Planning an Event?</h2>
            <p className="text-white text-opacity-90 mb-6 max-w-md">
              We provide premium fireworks packages for weddings, corporate events, and religious ceremonies.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="#contact" className="bg-white text-primary hover:bg-opacity-90 px-6 py-3 rounded-full font-medium transition">
                Book Event Order
              </a>
              <a href="#products" className="bg-transparent border-2 border-white hover:bg-white hover:bg-opacity-10 px-6 py-3 rounded-full font-medium transition">
                Buy in Bulk
              </a>
            </div>
          </div>
          
          <div className="md:w-1/2 max-w-md">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-primary text-xl font-bold mb-4 font-poppins">Quick Inquiry</h3>
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <Input placeholder="Your Name" {...field} className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="phone"
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <Input placeholder="Phone Number" type="tel" {...field} className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="eventType"
                    render={({ field }) => (
                      <FormItem>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary">
                              <SelectValue placeholder="Select Event Type" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="wedding">Wedding</SelectItem>
                            <SelectItem value="corporate">Corporate Event</SelectItem>
                            <SelectItem value="festival">Festival Celebration</SelectItem>
                            <SelectItem value="religious">Religious Ceremony</SelectItem>
                            <SelectItem value="other">Other</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <Button 
                    type="submit" 
                    className="w-full bg-primary hover:bg-opacity-90 text-white font-medium px-4 py-2 rounded-md transition"
                  >
                    Submit Inquiry
                  </Button>
                </form>
              </Form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
