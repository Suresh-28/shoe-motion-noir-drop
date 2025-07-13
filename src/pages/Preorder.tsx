import { motion } from 'framer-motion';
import { Calendar, Clock, Star, ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { toast } from '@/hooks/use-toast';
import velocityNoirShoe from '@/assets/velocity-noir-shoe.png';

const preorderItems = [
  {
    id: 1,
    name: "Velocity Noir - Future Edition",
    price: "$399",
    originalPrice: "$449",
    image: velocityNoirShoe,
    description: "Next-generation sneaker with AI-powered comfort adjustment",
    features: ["Smart Fit Technology", "Self-Cleaning Material", "Wireless Charging", "Limited Edition"],
    gradient: "from-purple-900 to-indigo-600",
    releaseDate: "2024-12-15",
    estimatedShipping: "Q1 2025",
    discount: "11% OFF"
  },
  {
    id: 2,
    name: "Velocity Noir - Carbon Fiber Pro",
    price: "$349",
    originalPrice: "$399",
    image: velocityNoirShoe,
    description: "Ultra-lightweight professional sports edition",
    features: ["Carbon Fiber Sole", "Professional Grade", "Tournament Ready", "Aerodynamic Design"],
    gradient: "from-gray-900 to-slate-600",
    releaseDate: "2024-11-30",
    estimatedShipping: "December 2024",
    discount: "13% OFF"
  }
];

const Preorder = () => {
  const handlePreorder = (item: any) => {
    toast({
      title: "Preorder placed!",
      description: `Your preorder for ${item.name} has been confirmed. You'll be charged when the item ships.`,
    });
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="container-premium py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12"
        >
          <Link to="/" className="inline-flex items-center text-muted-foreground hover:text-foreground mb-4">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Link>
          <h1 className="text-4xl font-bold text-foreground mb-4">Preorder Collection</h1>
          <p className="text-xl text-muted-foreground">
            Be the first to get the latest innovations. Secure your pair before the official release.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {preorderItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="card-premium relative overflow-hidden"
            >
              {/* Discount Badge */}
              <div className="absolute top-4 left-4 z-10 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                {item.discount}
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6">
                {/* Product Image */}
                <div className={`rounded-xl bg-gradient-to-br ${item.gradient} p-8 flex items-center justify-center relative`}>
                  <motion.img
                    src={item.image}
                    alt={item.name}
                    className="w-40 h-40 object-contain"
                    animate={{
                      rotateY: [0, 15, -15, 0],
                      scale: [1, 1.05, 1],
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                    }}
                  />
                  <div className="absolute top-4 right-4 bg-primary text-primary-foreground px-2 py-1 rounded text-xs font-medium">
                    Preorder
                  </div>
                </div>

                {/* Product Details */}
                <div className="space-y-4">
                  <div>
                    <h3 className="text-2xl font-bold text-foreground mb-2">{item.name}</h3>
                    <p className="text-muted-foreground">{item.description}</p>
                  </div>

                  <div className="flex items-center gap-3">
                    <span className="text-3xl font-bold text-primary">{item.price}</span>
                    <span className="text-lg text-muted-foreground line-through">{item.originalPrice}</span>
                  </div>

                  {/* Release Info */}
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Calendar className="w-4 h-4" />
                      <span>Release Date: {new Date(item.releaseDate).toLocaleDateString()}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Clock className="w-4 h-4" />
                      <span>Estimated Shipping: {item.estimatedShipping}</span>
                    </div>
                  </div>

                  {/* Features */}
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Features:</h4>
                    <ul className="space-y-1">
                      {item.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center gap-2 text-sm text-muted-foreground">
                          <Star className="w-3 h-3 text-primary" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Button
                    onClick={() => handlePreorder(item)}
                    className="btn-premium w-full"
                    size="lg"
                  >
                    Preorder Now - {item.price}
                  </Button>

                  <div className="text-xs text-muted-foreground text-center">
                    * You'll be charged when the item ships. Free cancellation anytime.
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Preorder Benefits */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="mt-16"
        >
          <h2 className="text-3xl font-bold text-foreground text-center mb-8">Preorder Benefits</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">Early Access</h3>
              <p className="text-muted-foreground">Be among the first to experience our latest innovations</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">💰</span>
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">Special Pricing</h3>
              <p className="text-muted-foreground">Exclusive preorder discounts up to 15% off retail price</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🎁</span>
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">Exclusive Extras</h3>
              <p className="text-muted-foreground">Limited edition accessories and special packaging</p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Preorder;