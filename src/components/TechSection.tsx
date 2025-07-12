import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Layers, Cpu, Zap, Shield, ArrowRight } from 'lucide-react';
import velocityNoirShoe from '@/assets/velocity-noir-shoe.png';
import { useBackgroundRemoval } from '@/hooks/useBackgroundRemoval';

const techFeatures = [
  {
    title: "Carbon Fiber Sole",
    description: "Ultra-lightweight yet incredibly strong carbon fiber construction",
    percentage: "40% lighter"
  },
  {
    title: "Energy Foam",
    description: "Proprietary foam technology with 85% energy return",
    percentage: "85% return"
  },
  {
    title: "Smart Grip",
    description: "Adaptive tread pattern for superior traction in any condition",
    percentage: "300% grip"
  },
  {
    title: "Climate Control",
    description: "Temperature regulating materials keep feet comfortable",
    percentage: "24/7 comfort"
  }
];

const TechSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const { processedImage, isProcessing } = useBackgroundRemoval(velocityNoirShoe);

  return (
    <section className="section-padding bg-muted/10 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-secondary/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      </div>

      <div className="container-premium relative z-10" ref={ref}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Side - Tech Visualization */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative">
              {/* Main Shoe Outline */}
              <div className="w-full h-80 bg-gradient-to-br from-card to-muted/50 rounded-3xl border border-primary/20 flex items-center justify-center relative overflow-hidden">
                
                {/* Animated Layers */}
                <motion.div
                  className="absolute inset-8 border-2 border-primary/30 rounded-2xl"
                  animate={{
                    scale: [1, 1.02, 1],
                    borderColor: ['hsl(var(--primary) / 0.3)', 'hsl(var(--primary) / 0.6)', 'hsl(var(--primary) / 0.3)']
                  }}
                  transition={{ duration: 3, repeat: Infinity }}
                />
                
                <motion.div
                  className="absolute inset-12 border-2 border-secondary/30 rounded-xl"
                  animate={{
                    scale: [1, 1.03, 1],
                    borderColor: ['hsl(var(--secondary) / 0.3)', 'hsl(var(--secondary) / 0.6)', 'hsl(var(--secondary) / 0.3)']
                  }}
                  transition={{ duration: 3, repeat: Infinity, delay: 0.5 }}
                />
                
                <motion.div
                  className="absolute inset-16 border-2 border-accent/30 rounded-lg"
                  animate={{
                    scale: [1, 1.04, 1],
                    borderColor: ['hsl(var(--accent) / 0.3)', 'hsl(var(--accent) / 0.6)', 'hsl(var(--accent) / 0.3)']
                  }}
                  transition={{ duration: 3, repeat: Infinity, delay: 1 }}
                />

                {/* Central Icon */}
                <motion.div
                  className="w-48 h-48 flex items-center justify-center"
                  animate={{ rotate: [0, 5, -5, 0] }}
                  transition={{ duration: 4, repeat: Infinity }}
                >
                  <img 
                    src={processedImage} 
                    alt="Velocity Noir Technology"
                    className="w-40 h-40 object-contain"
                    style={{
                      filter: isProcessing ? 'blur(2px)' : 'none',
                      transition: 'filter 0.3s ease'
                    }}
                  />
                </motion.div>

                {/* Tech Icons */}
                <motion.div
                  className="absolute top-4 right-4 p-2 bg-primary/20 rounded-lg"
                  animate={{ y: [0, -5, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <Cpu className="w-6 h-6 text-primary" />
                </motion.div>

                <motion.div
                  className="absolute bottom-4 left-4 p-2 bg-secondary/20 rounded-lg"
                  animate={{ y: [0, -5, 0] }}
                  transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
                >
                  <Zap className="w-6 h-6 text-secondary" />
                </motion.div>

                <motion.div
                  className="absolute top-1/2 left-4 p-2 bg-accent/20 rounded-lg"
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 2, repeat: Infinity, delay: 1 }}
                >
                  <Shield className="w-6 h-6 text-accent" />
                </motion.div>

                <motion.div
                  className="absolute top-1/2 right-4 p-2 bg-primary/20 rounded-lg"
                  animate={{ x: [0, -5, 0] }}
                  transition={{ duration: 2, repeat: Infinity, delay: 1.5 }}
                >
                  <Layers className="w-6 h-6 text-primary" />
                </motion.div>
              </div>

              {/* Floating Data Points */}
              <motion.div
                className="absolute -top-6 left-8 px-4 py-2 bg-primary text-primary-foreground rounded-full text-sm font-semibold"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                Ultra-Tech
              </motion.div>

              <motion.div
                className="absolute -bottom-6 right-8 px-4 py-2 bg-secondary text-white rounded-full text-sm font-semibold"
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 3, repeat: Infinity, delay: 1 }}
              >
                Advanced
              </motion.div>
            </div>
          </motion.div>

          {/* Right Side - Tech Details */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            <div>
              <h2 className="text-section text-gradient-secondary mb-6">
                Advanced Technology
              </h2>
              <p className="text-xl text-muted-foreground mb-8">
                Years of research and development have culminated in our most advanced shoe technology. 
                Every component is engineered for peak performance.
              </p>
            </div>

            {/* Tech Features List */}
            <div className="space-y-4">
              {techFeatures.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ delay: 0.4 + index * 0.1 }}
                  className="flex items-center justify-between p-4 bg-card/50 rounded-xl border border-border/50 hover:border-primary/30 transition-colors group"
                >
                  <div className="flex-1">
                    <h4 className="font-semibold text-foreground mb-1 group-hover:text-primary transition-colors">
                      {feature.title}
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      {feature.description}
                    </p>
                  </div>
                  <div className="ml-4 text-right">
                    <div className="text-lg font-bold text-primary">
                      {feature.percentage}
                    </div>
                  </div>
                  <ArrowRight className="w-4 h-4 ml-3 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />
                </motion.div>
              ))}
            </div>

            {/* Materials Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
              transition={{ delay: 0.8 }}
              className="flex items-center gap-4 p-6 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-2xl border border-primary/20"
            >
              <div className="p-3 bg-primary/20 rounded-xl">
                <Shield className="w-8 h-8 text-primary" />
              </div>
              <div>
                <h4 className="font-semibold text-foreground mb-1">Premium Materials</h4>
                <p className="text-sm text-muted-foreground">
                  Ethically sourced, sustainably produced, built to last a lifetime
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default TechSection;