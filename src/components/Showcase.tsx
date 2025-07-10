import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { ChevronLeft, ChevronRight, Eye, Heart, ShoppingCart } from 'lucide-react';
import { Button } from '@/components/ui/button';

const showcaseItems = [
  {
    id: 1,
    name: "Velocity Noir - Classic",
    price: "$299",
    image: "🖤",
    description: "The original design in midnight black with gold accents",
    features: ["Carbon Fiber Sole", "Premium Leather", "Limited Edition"],
    gradient: "from-gray-900 to-black"
  },
  {
    id: 2,
    name: "Velocity Noir - Electric",
    price: "$319",
    image: "⚡",
    description: "Electric blue variant with enhanced energy return technology",
    features: ["Boost+ Technology", "Reflective Details", "Glow Elements"],
    gradient: "from-blue-900 to-cyan-600"
  },
  {
    id: 3,
    name: "Velocity Noir - Gold",
    price: "$349",
    image: "✨",
    description: "Luxurious gold edition with hand-finished details",
    features: ["24k Gold Accents", "Italian Leather", "Collectors Edition"],
    gradient: "from-amber-600 to-yellow-500"
  },
  {
    id: 4,
    name: "Velocity Noir - Ghost",
    price: "$279",
    image: "👻",
    description: "Minimalist white design with transparent elements",
    features: ["Ghost Protocol", "Translucent Upper", "Clean Aesthetic"],
    gradient: "from-gray-100 to-white"
  }
];

const Showcase = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const [currentIndex, setCurrentIndex] = useState(0);
  const [hoveredItem, setHoveredItem] = useState<number | null>(null);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % showcaseItems.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + showcaseItems.length) % showcaseItems.length);
  };

  return (
    <section className="section-padding bg-muted/20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-3xl" />
      </div>

      <div className="container-premium relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-section text-gradient-secondary mb-6">
            The Complete Collection
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Four distinct variants, each pushing the boundaries of design and performance. 
            Choose your perfect match.
          </p>
        </motion.div>

        {/* Main Showcase */}
        <div className="relative">
          {/* Desktop Grid View */}
          <div className="hidden lg:grid lg:grid-cols-2 gap-12 items-center">
            {/* Featured Product */}
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className={`w-full h-96 rounded-3xl bg-gradient-to-br ${showcaseItems[currentIndex].gradient} p-8 flex items-center justify-center relative overflow-hidden`}>
                <motion.div
                  className="text-9xl"
                  animate={{
                    rotateY: [0, 15, -15, 0],
                    scale: [1, 1.1, 1],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                  }}
                >
                  {showcaseItems[currentIndex].image}
                </motion.div>
                
                {/* Floating Elements */}
                <motion.div
                  className="absolute top-4 right-4 px-3 py-1 bg-primary text-primary-foreground text-sm rounded-full"
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  New
                </motion.div>
              </div>
            </motion.div>

            {/* Product Details */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-6"
            >
              <div>
                <h3 className="text-3xl font-bold text-foreground mb-2">
                  {showcaseItems[currentIndex].name}
                </h3>
                <p className="text-2xl font-semibold text-primary mb-4">
                  {showcaseItems[currentIndex].price}
                </p>
                <p className="text-muted-foreground text-lg">
                  {showcaseItems[currentIndex].description}
                </p>
              </div>

              <div className="space-y-2">
                <h4 className="font-semibold text-foreground">Key Features:</h4>
                <ul className="space-y-1">
                  {showcaseItems[currentIndex].features.map((feature, index) => (
                    <motion.li
                      key={feature}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.1 * index }}
                      className="text-muted-foreground flex items-center gap-2"
                    >
                      <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                      {feature}
                    </motion.li>
                  ))}
                </ul>
              </div>

              <div className="flex gap-4">
                <Button className="btn-premium">
                  <ShoppingCart className="w-4 h-4 mr-2" />
                  Add to Cart
                </Button>
                <Button className="btn-outline-premium">
                  <Heart className="w-4 h-4 mr-2" />
                  Wishlist
                </Button>
              </div>
            </motion.div>
          </div>

          {/* Mobile Carousel */}
          <div className="lg:hidden">
            <div className="relative overflow-hidden rounded-3xl">
              <motion.div
                className="flex transition-transform duration-300"
                style={{ transform: `translateX(-${currentIndex * 100}%)` }}
              >
                {showcaseItems.map((item, index) => (
                  <div key={item.id} className="w-full flex-shrink-0 p-6">
                    <div className={`w-full h-80 rounded-2xl bg-gradient-to-br ${item.gradient} p-6 flex flex-col items-center justify-center text-center`}>
                      <div className="text-6xl mb-4">{item.image}</div>
                      <h3 className="text-xl font-bold text-white mb-2">{item.name}</h3>
                      <p className="text-lg font-semibold text-white/90">{item.price}</p>
                    </div>
                  </div>
                ))}
              </motion.div>
            </div>
          </div>

          {/* Navigation Controls */}
          <div className="flex justify-center items-center gap-4 mt-8">
            <Button
              variant="outline"
              size="icon"
              onClick={prevSlide}
              className="rounded-full border-primary/30 hover:border-primary hover:bg-primary/10"
            >
              <ChevronLeft className="w-4 h-4" />
            </Button>

            {/* Indicators */}
            <div className="flex gap-2">
              {showcaseItems.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all ${
                    index === currentIndex ? 'bg-primary' : 'bg-primary/30'
                  }`}
                />
              ))}
            </div>

            <Button
              variant="outline"
              size="icon"
              onClick={nextSlide}
              className="rounded-full border-primary/30 hover:border-primary hover:bg-primary/10"
            >
              <ChevronRight className="w-4 h-4" />
            </Button>
          </div>
        </div>

        {/* Product Grid */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-20"
        >
          {showcaseItems.map((item, index) => (
            <motion.div
              key={item.id}
              className="card-premium group cursor-pointer relative"
              onHoverStart={() => setHoveredItem(item.id)}
              onHoverEnd={() => setHoveredItem(null)}
              whileHover={{ scale: 1.02, y: -5 }}
              onClick={() => setCurrentIndex(index)}
            >
              <div className={`w-full h-48 rounded-xl bg-gradient-to-br ${item.gradient} mb-4 flex items-center justify-center relative overflow-hidden`}>
                <div className="text-4xl">{item.image}</div>
                
                {/* Hover Overlay */}
                <motion.div
                  className="absolute inset-0 bg-black/50 flex items-center justify-center gap-2"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: hoveredItem === item.id ? 1 : 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <Button size="sm" variant="secondary">
                    <Eye className="w-4 h-4" />
                  </Button>
                  <Button size="sm" className="bg-primary">
                    <ShoppingCart className="w-4 h-4" />
                  </Button>
                </motion.div>
              </div>

              <h4 className="font-semibold text-foreground mb-1">{item.name}</h4>
              <p className="text-primary font-medium">{item.price}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Showcase;