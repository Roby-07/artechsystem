import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Data Director",
    company: "TechCorp Solutions",
    content: "Artech Systems transformed our data infrastructure completely. Their expertise in data engineering and visualization helped us make data-driven decisions that increased our operational efficiency by 40%. The team's attention to detail and commitment to quality is exceptional.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80"
  },
  {
    name: "Michael Chen",
    role: "Research Manager",
    company: "Global Research Institute",
    content: "Working with Artech on our GIS mapping project was outstanding. They delivered a comprehensive spatial analysis solution that exceeded our expectations. Their ability to translate complex data into actionable insights is remarkable.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80"
  },
  {
    name: "Dr. Emily Rodriguez",
    role: "Chief Analytics Officer",
    company: "HealthData Analytics",
    content: "The AI models developed by Artech have revolutionized our predictive analytics capabilities. Their machine learning solutions helped us identify patterns in healthcare data that were previously impossible to detect. Highly recommended!",
    rating: 5,
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80"
  }
];

export default function Testimonial() {
  return (
    <section className="py-20 bg-gradient-to-br from-muted/40 to-muted/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-heading text-3xl md:text-4xl font-semibold tracking-tight mb-4">
            What Our Clients Say
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Don't just take our word for it. Here's what our clients have to say about working with us.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative bg-card border border-border rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="absolute top-4 right-4 text-gold/20">
                <Quote className="h-8 w-8" />
              </div>
              
              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-gold text-gold" />
                ))}
              </div>

              <blockquote className="text-muted-foreground leading-relaxed">
                "{testimonial.content}"
              </blockquote>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="inline-flex items-center gap-2 text-sm text-muted-foreground">
            <Star className="h-4 w-4 fill-gold text-gold" />
            <span>4.9/5 average rating from 50+ clients</span>
          </div>
        </div>
      </div>
    </section>
  );
}
