import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Feather, Shield, Zap, Droplets, Wind, Star } from 'lucide-react';

const features = [
  {
    icon: Feather,
    title: "Ultra-Lightweight",
    description: "Revolutionary foam technology reduces weight by 40% without compromising support.",
    gradient: "from-primary to-amber-400"
  },
  {
    icon: Shield,
    title: "Premium Protection",
    description: "Advanced impact absorption with military-grade materials for ultimate durability.",
    gradient: "from-secondary to-blue-500"
  },
  {
    icon: Zap,
    title: "Energy Return",
    description: "Responsive midsole technology that returns 85% of energy with every step.",
    gradient: "from-purple-500 to-pink-500"
  },
  {
    icon: Droplets,
    title: "Water Resistant",
    description: "Hydrophobic coating repels water while maintaining breathability.",
    gradient: "from-cyan-500 to-blue-600"
  },
  {
    icon: Wind,
    title: "Breathable Design",
    description: "Engineered mesh upper with strategic ventilation zones for optimal airflow.",
    gradient: "from-green-500 to-emerald-600"
  },
  {
    icon: Star,
    title: "Limited Edition",
    description: "Exclusive colorways and premium materials available only in this collection.",
    gradient: "from-primary to-secondary"
  }
];

const Features = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20, scale: 0.95 },
    visible: { opacity: 1, y: 0, scale: 1 }
  };

  return (
    <section className="section-padding bg-background relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,_hsl(var(--primary))_1px,_transparent_0)] bg-[size:24px_24px]" />
      </div>

      <div className="container-premium relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-section text-gradient-primary mb-6">
            Engineered for Excellence
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Every detail meticulously crafted using cutting-edge technology 
            and premium materials to deliver unmatched performance.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          transition={{
            staggerChildren: 0.1,
            delayChildren: 0.3
          }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              variants={itemVariants}
              className="card-premium group cursor-pointer"
              whileHover={{ 
                scale: 1.03,
                rotateY: 5,
                rotateX: 5,
              }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              {/* Icon with Gradient Background */}
              <div className="relative mb-6">
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${feature.gradient} p-1`}>
                  <div className="w-full h-full bg-card rounded-xl flex items-center justify-center">
                    <feature.icon className="w-8 h-8 text-primary group-hover:scale-110 transition-transform" />
                  </div>
                </div>
                
                {/* Floating Badge */}
                <motion.div
                  className="absolute -top-2 -right-2 w-6 h-6 bg-primary rounded-full flex items-center justify-center"
                  animate={{
                    scale: [1, 1.2, 1],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: index * 0.2,
                  }}
                >
                  <div className="w-2 h-2 bg-primary-foreground rounded-full" />
                </motion.div>
              </div>

              <h3 className="text-xl font-semibold mb-3 text-foreground group-hover:text-primary transition-colors">
                {feature.title}
              </h3>
              
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>

              {/* Shimmer Effect */}
              <div className="absolute inset-0 rounded-2xl overflow-hidden">
                <motion.div
                  className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-primary/10 to-transparent -translate-x-full"
                  animate={{
                    translateX: ["100%", "100%"],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    repeatDelay: 3,
                  }}
                />
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-16"
        >
          <div className="inline-flex items-center gap-4 px-6 py-3 rounded-full bg-primary/10 border border-primary/30">
            <Star className="w-5 h-5 text-primary" />
            <span className="text-primary font-medium">Premium Materials • Lifetime Warranty • Expert Craftsmanship</span>
            <Star className="w-5 h-5 text-primary" />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Features;