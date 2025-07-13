import { motion } from 'framer-motion';
import { Heart, ShoppingCart, ArrowLeft, Trash2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useCart } from '@/contexts/CartContext';
import { Link } from 'react-router-dom';

const Wishlist = () => {
  const { state, removeFromWishlist, addToCart } = useCart();

  const handleAddToCart = (product: any) => {
    addToCart(product);
    removeFromWishlist(product.id);
  };

  if (state.wishlist.length === 0) {
    return (
      <div className="min-h-screen bg-background">
        <div className="container-premium py-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <Heart className="w-24 h-24 mx-auto text-muted-foreground mb-6" />
            <h2 className="text-3xl font-bold text-foreground mb-4">Your wishlist is empty</h2>
            <p className="text-muted-foreground mb-8">Save items you love for later.</p>
            <Link to="/">
              <Button className="btn-premium">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Start Shopping
              </Button>
            </Link>
          </motion.div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="container-premium py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <Link to="/" className="inline-flex items-center text-muted-foreground hover:text-foreground mb-4">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Continue Shopping
          </Link>
          <h1 className="text-4xl font-bold text-foreground">My Wishlist</h1>
          <p className="text-muted-foreground mt-2">{state.wishlist.length} items saved</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {state.wishlist.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="card-premium group relative"
            >
              <button
                onClick={() => removeFromWishlist(item.id)}
                className="absolute top-4 right-4 z-10 p-2 bg-white/90 hover:bg-white rounded-full shadow-md transition-colors"
              >
                <Trash2 className="w-4 h-4 text-red-500" />
              </button>

              <div className={`w-full h-64 rounded-xl bg-gradient-to-br ${item.gradient} mb-4 flex items-center justify-center relative overflow-hidden`}>
                <img src={item.image} alt={item.name} className="w-32 h-32 object-contain" />
              </div>

              <div className="p-4">
                <h3 className="text-xl font-semibold text-foreground mb-2">{item.name}</h3>
                <p className="text-muted-foreground text-sm mb-3">{item.description}</p>
                <p className="text-2xl font-bold text-primary mb-4">{item.price}</p>

                <div className="space-y-2">
                  <Button
                    onClick={() => handleAddToCart(item)}
                    className="btn-premium w-full"
                  >
                    <ShoppingCart className="w-4 h-4 mr-2" />
                    Add to Cart
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Wishlist;