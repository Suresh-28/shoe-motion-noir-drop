import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Instagram, 
  Twitter, 
  Facebook, 
  Youtube,
  ArrowRight,
  Heart,
  Shield,
  Truck,
  RefreshCw
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const Footer = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  const quickLinks = [
    { name: 'About Us', href: '#' },
    { name: 'Technology', href: '#' },
    { name: 'Sustainability', href: '#' },
    { name: 'Size Guide', href: '#' },
    { name: 'Care Instructions', href: '#' },
    { name: 'Warranty', href: '#' }
  ];

  const support = [
    { name: 'Contact Support', href: '#' },
    { name: 'Shipping Info', href: '#' },
    { name: 'Returns & Exchanges', href: '#' },
    { name: 'FAQ', href: '#' },
    { name: 'Track Order', href: '#' },
    { name: 'Store Locator', href: '#' }
  ];

  const socialLinks = [
    { name: 'Instagram', icon: Instagram, href: '#', count: '250K' },
    { name: 'Twitter', icon: Twitter, href: '#', count: '180K' },
    { name: 'Facebook', icon: Facebook, href: '#', count: '320K' },
    { name: 'YouTube', icon: Youtube, href: '#', count: '95K' }
  ];

  const benefits = [
    { icon: Truck, title: 'Free Shipping', description: 'On orders over $200' },
    { icon: RefreshCw, title: 'Easy Returns', description: '30-day return policy' },
    { icon: Shield, title: 'Warranty', description: 'Up to 2-year coverage' },
    { icon: Heart, title: 'Support', description: '24/7 customer care' }
  ];

  return (
    <footer className="bg-card border-t border-border relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_2px_2px,_hsl(var(--primary))_1px,_transparent_0)] bg-[size:40px_40px]" />
      </div>

      <div className="container-premium relative z-10" ref={ref}>
        
        {/* Benefits Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 py-16 border-b border-border"
        >
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: index * 0.1 }}
              className="text-center group"
            >
              <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                <benefit.icon className="w-8 h-8 text-primary group-hover:scale-110 transition-transform" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">{benefit.title}</h3>
              <p className="text-sm text-muted-foreground">{benefit.description}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Main Footer Content */}
        <div className="py-16 grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-4"
          >
            <motion.div
              className="text-3xl font-bold text-gradient-primary mb-6"
              animate={{
                backgroundPosition: ['0%', '100%', '0%'],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
              }}
            >
              VELOCITY NOIR
            </motion.div>
            
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Pioneering the future of premium footwear through innovative technology, 
              sustainable practices, and uncompromising quality. Join the revolution.
            </p>

            {/* Newsletter */}
            <div className="space-y-4">
              <h4 className="font-semibold text-foreground">Stay Updated</h4>
              <div className="flex gap-2">
                <Input 
                  placeholder="Enter your email" 
                  className="bg-background border-border focus:border-primary"
                />
                <Button className="bg-primary hover:bg-primary/90">
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </div>
              <p className="text-xs text-muted-foreground">
                Get exclusive updates on new drops and special offers
              </p>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-2"
          >
            <h4 className="font-semibold text-foreground mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <motion.li
                  key={link.name}
                  initial={{ opacity: 0, x: -10 }}
                  animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }}
                  transition={{ delay: 0.2 + index * 0.05 }}
                >
                  <a 
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.name}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Support */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-2"
          >
            <h4 className="font-semibold text-foreground mb-6">Support</h4>
            <ul className="space-y-3">
              {support.map((link, index) => (
                <motion.li
                  key={link.name}
                  initial={{ opacity: 0, x: -10 }}
                  animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }}
                  transition={{ delay: 0.3 + index * 0.05 }}
                >
                  <a 
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.name}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Contact & Social */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="lg:col-span-4"
          >
            <h4 className="font-semibold text-foreground mb-6">Get in Touch</h4>
            
            {/* Contact Info */}
            <div className="space-y-4 mb-8">
              <div className="flex items-center gap-3 text-muted-foreground">
                <Mail className="w-5 h-5 text-primary" />
                <span>support@velocitynoir.com</span>
              </div>
              <div className="flex items-center gap-3 text-muted-foreground">
                <Phone className="w-5 h-5 text-primary" />
                <span>1-800-VELOCITY</span>
              </div>
              <div className="flex items-center gap-3 text-muted-foreground">
                <MapPin className="w-5 h-5 text-primary" />
                <span>San Francisco, California</span>
              </div>
            </div>

            {/* Social Links */}
            <div>
              <h5 className="font-medium text-foreground mb-4">Follow Us</h5>
              <div className="grid grid-cols-2 gap-3">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.name}
                    href={social.href}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                    transition={{ delay: 0.4 + index * 0.1 }}
                    className="flex items-center gap-3 p-3 rounded-xl border border-border hover:border-primary/50 hover:bg-primary/5 transition-all group"
                  >
                    <social.icon className="w-5 h-5 text-primary group-hover:scale-110 transition-transform" />
                    <div>
                      <div className="text-sm font-medium text-foreground">{social.name}</div>
                      <div className="text-xs text-muted-foreground">{social.count} followers</div>
                    </div>
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="py-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4"
        >
          <div className="text-sm text-muted-foreground">
            © 2024 Velocity Noir. All rights reserved. | Privacy Policy | Terms of Service
          </div>
          <div className="text-sm text-muted-foreground">
            Made with <Heart className="w-4 h-4 inline text-primary" /> for sneaker enthusiasts
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;