import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import runnerAvatar from '@/assets/runner-avatar.png';
import designerAvatar from '@/assets/designer-avatar.png';
import strengthIcon from '@/assets/strength-icon.png';
import executiveAvatar from '@/assets/executive-avatar.png';

const testimonials = [
  {
    id: 1,
    name: "Alex Chen",
    role: "Professional Runner",
    avatar: runnerAvatar,
    rating: 5,
    quote: "These shoes revolutionized my training. The energy return is incredible, and after 500+ miles, they still feel brand new. Worth every penny.",
    highlight: "500+ miles"
  },
  {
    id: 2,
    name: "Sarah Williams",
    role: "Fashion Designer",
    avatar: designerAvatar,
    rating: 5,
    quote: "Finally, a shoe that combines cutting-edge performance with stunning aesthetics. The design details are absolutely exquisite.",
    highlight: "Stunning aesthetics"
  },
  {
    id: 3,
    name: "Marcus Johnson",
    role: "Fitness Coach",
    avatar: strengthIcon,
    rating: 5,
    quote: "I've tested hundreds of athletic shoes. The Velocity Noir's technology and comfort level is unmatched. My clients love them too.",
    highlight: "Unmatched comfort"
  },
  {
    id: 4,
    name: "Emma Rodriguez",
    role: "Tech Executive",
    avatar: executiveAvatar,
    rating: 5,
    quote: "Perfect for my busy lifestyle. From boardroom to gym, these shoes adapt seamlessly. The quality is exceptional.",
    highlight: "Exceptional quality"
  }
];

const Testimonials = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="section-padding bg-background relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[linear-gradient(45deg,_hsl(var(--primary))_1px,_transparent_1px),_linear-gradient(-45deg,_hsl(var(--primary))_1px,_transparent_1px)] bg-[size:30px_30px]" />
      </div>

      <div className="container-premium relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-section text-gradient-primary mb-6">
            Loved by Professionals
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Join thousands of satisfied customers who've experienced the difference. 
            See what industry professionals are saying about Velocity Noir.
          </p>
        </motion.div>

        {/* Main Testimonial */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto mb-16"
        >
          <div className="card-premium text-center relative">
            {/* Quote Icon */}
            <motion.div
              className="absolute -top-6 left-1/2 transform -translate-x-1/2 w-12 h-12 bg-primary rounded-full flex items-center justify-center"
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <Quote className="w-6 h-6 text-primary-foreground" />
            </motion.div>

            {/* Avatar */}
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              <img 
                src={testimonials[currentIndex].avatar} 
                alt={testimonials[currentIndex].name}
                className="w-24 h-24 rounded-full object-cover mx-auto mb-6 mt-8"
              />
            </motion.div>

            {/* Quote */}
            <motion.blockquote
              key={`quote-${currentIndex}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-2xl md:text-3xl font-light text-foreground mb-8 leading-relaxed italic"
            >
              "{testimonials[currentIndex].quote}"
            </motion.blockquote>

            {/* Rating */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="flex justify-center gap-1 mb-6"
            >
              {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.3 + i * 0.1 }}
                >
                  <Star className="w-6 h-6 fill-primary text-primary" />
                </motion.div>
              ))}
            </motion.div>

            {/* Author */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-center"
            >
              <h4 className="text-xl font-semibold text-foreground mb-1">
                {testimonials[currentIndex].name}
              </h4>
              <p className="text-muted-foreground mb-2">
                {testimonials[currentIndex].role}
              </p>
              <div className="inline-flex items-center px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium">
                {testimonials[currentIndex].highlight}
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Navigation */}
        <div className="flex justify-center items-center gap-6 mb-12">
          <Button
            variant="outline"
            size="icon"
            onClick={prevTestimonial}
            className="rounded-full border-primary/30 hover:border-primary hover:bg-primary/10"
          >
            <ChevronLeft className="w-4 h-4" />
          </Button>

          {/* Indicators */}
          <div className="flex gap-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all ${
                  index === currentIndex ? 'bg-primary scale-125' : 'bg-primary/30'
                }`}
              />
            ))}
          </div>

          <Button
            variant="outline"
            size="icon"
            onClick={nextTestimonial}
            className="rounded-full border-primary/30 hover:border-primary hover:bg-primary/10"
          >
            <ChevronRight className="w-4 h-4" />
          </Button>
        </div>

        {/* Community Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center"
        >
          <div className="p-6 rounded-2xl bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/20">
            <div className="text-3xl font-bold text-primary mb-2">15,000+</div>
            <div className="text-muted-foreground">Happy Customers</div>
          </div>
          
          <div className="p-6 rounded-2xl bg-gradient-to-br from-secondary/10 to-secondary/5 border border-secondary/20">
            <div className="text-3xl font-bold text-secondary mb-2">4.9/5</div>
            <div className="text-muted-foreground">Average Rating</div>
          </div>
          
          <div className="p-6 rounded-2xl bg-gradient-to-br from-accent/10 to-accent/5 border border-accent/20">
            <div className="text-3xl font-bold text-accent mb-2">98%</div>
            <div className="text-muted-foreground">Would Recommend</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;