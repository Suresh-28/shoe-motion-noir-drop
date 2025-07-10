import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Check, Star, Zap, Crown, ShoppingCart, Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';

const pricingPlans = [
  {
    id: 'classic',
    name: 'Velocity Classic',
    price: 299,
    originalPrice: 349,
    badge: 'Popular',
    color: 'primary',
    icon: '🖤',
    features: [
      'Carbon Fiber Sole Technology',
      'Premium Leather Upper',
      'Energy Return Foam',
      'Water Resistant Coating',
      '2-Year Warranty',
      'Free Shipping & Returns'
    ],
    cta: 'Order Now'
  },
  {
    id: 'electric',
    name: 'Velocity Electric',
    price: 319,
    originalPrice: 369,
    badge: 'Tech Edition',
    color: 'secondary',
    icon: '⚡',
    features: [
      'Everything in Classic',
      'Boost+ Energy Technology',
      'Reflective Safety Details',
      'Glow-in-Dark Elements',
      'Smart Grip Adaptive Sole',
      'Wireless Charging Case'
    ],
    cta: 'Pre-Order'
  },
  {
    id: 'gold',
    name: 'Velocity Gold',
    price: 449,
    originalPrice: 499,
    badge: 'Limited Edition',
    color: 'accent',
    icon: '✨',
    features: [
      'Everything in Electric',
      '24k Gold Accents',
      'Hand-Finished Italian Leather',
      'Numbered Certificate',
      'Luxury Presentation Box',
      'Lifetime Warranty',
      'Personal Concierge Service'
    ],
    cta: 'Reserve Yours'
  }
];

const Pricing = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const [selectedSize, setSelectedSize] = useState(9);

  const sizes = [7, 7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11, 11.5, 12];

  return (
    <section className="section-padding bg-muted/20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-secondary/10 rounded-full blur-3xl" />
      </div>

      <div className="container-premium relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-section text-gradient-primary mb-6">
            Choose Your Perfect Fit
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Three distinct collections, each offering unparalleled craftsmanship and technology. 
            Limited quantities available.
          </p>

          {/* Size Selector */}
          <div className="max-w-2xl mx-auto">
            <p className="text-sm text-muted-foreground mb-4">Select your size:</p>
            <div className="flex flex-wrap justify-center gap-2">
              {sizes.map((size) => (
                <button
                  key={size}
                  onClick={() => setSelectedSize(size)}
                  className={`px-4 py-2 rounded-lg border transition-all ${
                    selectedSize === size
                      ? 'border-primary bg-primary text-primary-foreground'
                      : 'border-border hover:border-primary/50'
                  }`}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {pricingPlans.map((plan, index) => (
            <motion.div
              key={plan.id}
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              animate={isInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 20, scale: 0.95 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className={`relative ${index === 1 ? 'md:-mt-4 md:scale-105' : ''}`}
            >
              <div className="card-premium h-full relative overflow-hidden group">
                {/* Badge */}
                {plan.badge && (
                  <div className={`absolute -top-3 left-1/2 transform -translate-x-1/2 px-4 py-1 rounded-full text-xs font-semibold z-10 ${
                    plan.color === 'primary' ? 'bg-primary text-primary-foreground' :
                    plan.color === 'secondary' ? 'bg-secondary text-white' :
                    'bg-gradient-to-r from-primary to-secondary text-white'
                  }`}>
                    {plan.badge}
                  </div>
                )}

                {/* Header */}
                <div className="text-center mb-6">
                  <div className="text-4xl mb-4">{plan.icon}</div>
                  <h3 className="text-2xl font-bold text-foreground mb-2">{plan.name}</h3>
                  
                  <div className="space-y-1">
                    <div className="flex items-center justify-center gap-2">
                      <span className="text-3xl font-bold text-foreground">${plan.price}</span>
                      <span className="text-lg text-muted-foreground line-through">${plan.originalPrice}</span>
                    </div>
                    <p className="text-sm text-muted-foreground">Limited time pricing</p>
                  </div>
                </div>

                {/* Features */}
                <div className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <motion.div
                      key={feature}
                      initial={{ opacity: 0, x: -10 }}
                      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }}
                      transition={{ delay: 0.3 + featureIndex * 0.05 }}
                      className="flex items-center gap-3"
                    >
                      <div className={`w-5 h-5 rounded-full flex items-center justify-center ${
                        plan.color === 'primary' ? 'bg-primary/20' :
                        plan.color === 'secondary' ? 'bg-secondary/20' :
                        'bg-gradient-to-r from-primary/20 to-secondary/20'
                      }`}>
                        <Check className={`w-3 h-3 ${
                          plan.color === 'primary' ? 'text-primary' :
                          plan.color === 'secondary' ? 'text-secondary' :
                          'text-primary'
                        }`} />
                      </div>
                      <span className="text-sm text-foreground">{feature}</span>
                    </motion.div>
                  ))}
                </div>

                {/* CTA Buttons */}
                <div className="space-y-3 mt-auto">
                  <Button 
                    className={`w-full ${
                      plan.color === 'primary' ? 'btn-premium' :
                      plan.color === 'secondary' ? 'btn-secondary-premium' :
                      'bg-gradient-to-r from-primary to-secondary text-white hover:opacity-90'
                    }`}
                  >
                    <ShoppingCart className="w-4 h-4 mr-2" />
                    {plan.cta}
                  </Button>
                  
                  <Button variant="outline" className="w-full border-primary/30 hover:border-primary">
                    <Heart className="w-4 h-4 mr-2" />
                    Add to Wishlist
                  </Button>
                </div>

                {/* Hover Effect */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center mt-16"
        >
          <div className="max-w-2xl mx-auto p-8 rounded-3xl bg-gradient-to-r from-primary/10 to-secondary/10 border border-primary/20">
            <div className="flex items-center justify-center gap-2 mb-4">
              <Crown className="w-6 h-6 text-primary" />
              <span className="text-lg font-semibold text-foreground">Exclusive Launch Offer</span>
            </div>
            <p className="text-muted-foreground mb-6">
              First 100 customers receive a complimentary premium care kit ($75 value) 
              and access to our VIP customer service program.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="btn-premium">
                <Zap className="w-4 h-4 mr-2" />
                Claim Launch Bonus
              </Button>
              <Button variant="outline" className="border-primary/30">
                Learn More
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Pricing;