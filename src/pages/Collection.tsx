import { motion } from 'framer-motion';
import { useState } from 'react';
import { ArrowLeft, Filter, Search, Heart, ShoppingCart, Eye } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useCart } from '@/contexts/CartContext';
import { Link } from 'react-router-dom';
import blackShoe from '@/assets/black-shoe.png';
import electricBlueShoe from '@/assets/electric-blue-shoe.png';
import goldShoe from '@/assets/gold-shoe.png';
import ghostShoe from '@/assets/ghost-shoe.png';
import velocityNoirShoe from '@/assets/velocity-noir-shoe.png';

const allProducts = [
  {
    id: 1,
    name: "Velocity Noir - Classic",
    price: "$299",
    priceNumber: 299,
    image: blackShoe,
    description: "The original design in midnight black with gold accents",
    features: ["Carbon Fiber Sole", "Premium Leather", "Limited Edition"],
    gradient: "from-gray-900 to-black",
    category: "Classic",
    inStock: true
  },
  {
    id: 2,
    name: "Velocity Noir - Electric",
    price: "$319",
    priceNumber: 319,
    image: electricBlueShoe,
    description: "Electric blue variant with enhanced energy return technology",
    features: ["Boost+ Technology", "Reflective Details", "Glow Elements"],
    gradient: "from-blue-900 to-cyan-600",
    category: "Electric",
    inStock: true
  },
  {
    id: 3,
    name: "Velocity Noir - Gold",
    price: "$349",
    priceNumber: 349,
    image: goldShoe,
    description: "Luxurious gold edition with hand-finished details",
    features: ["24k Gold Accents", "Italian Leather", "Collectors Edition"],
    gradient: "from-amber-600 to-yellow-500",
    category: "Premium",
    inStock: true
  },
  {
    id: 4,
    name: "Velocity Noir - Ghost",
    price: "$279",
    priceNumber: 279,
    image: ghostShoe,
    description: "Minimalist white design with transparent elements",
    features: ["Ghost Protocol", "Translucent Upper", "Clean Aesthetic"],
    gradient: "from-gray-100 to-white",
    category: "Minimalist",
    inStock: true
  },
  {
    id: 5,
    name: "Velocity Noir - Original",
    price: "$329",
    priceNumber: 329,
    image: velocityNoirShoe,
    description: "The flagship model that started it all",
    features: ["Signature Design", "Performance Grade", "Icon Status"],
    gradient: "from-slate-900 to-gray-800",
    category: "Original",
    inStock: true
  }
];

const categories = ["All", "Classic", "Electric", "Premium", "Minimalist", "Original"];
const sortOptions = ["Featured", "Price: Low to High", "Price: High to Low", "Newest"];

const Collection = () => {
  const { addToCart, addToWishlist, state } = useCart();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [sortBy, setSortBy] = useState('Featured');
  const [hoveredItem, setHoveredItem] = useState<number | null>(null);

  const filteredProducts = allProducts
    .filter(product => {
      const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           product.description.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = selectedCategory === 'All' || product.category === selectedCategory;
      return matchesSearch && matchesCategory;
    })
    .sort((a, b) => {
      switch (sortBy) {
        case 'Price: Low to High':
          return a.priceNumber - b.priceNumber;
        case 'Price: High to Low':
          return b.priceNumber - a.priceNumber;
        case 'Newest':
          return b.id - a.id;
        default:
          return 0;
      }
    });

  const isInWishlist = (productId: number) => {
    return state.wishlist.some(item => item.id === productId);
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
          <h1 className="text-4xl font-bold text-foreground mb-4">Explore Collection</h1>
          <p className="text-xl text-muted-foreground">
            Discover our complete range of innovative sneakers designed for the modern lifestyle.
          </p>
        </motion.div>

        {/* Search and Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-8 space-y-4"
        >
          {/* Search Bar */}
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
            <Input
              type="text"
              placeholder="Search products..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>

          {/* Filters */}
          <div className="flex flex-wrap gap-4 items-center justify-between">
            <div className="flex flex-wrap gap-2">
              {categories.map(category => (
                <Button
                  key={category}
                  variant={selectedCategory === category ? "default" : "outline"}
                  onClick={() => setSelectedCategory(category)}
                  className={selectedCategory === category ? "btn-premium" : ""}
                >
                  {category}
                </Button>
              ))}
            </div>

            <div className="flex items-center gap-2">
              <Filter className="w-4 h-4 text-muted-foreground" />
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="border border-input rounded-md px-3 py-2 bg-background text-foreground"
              >
                {sortOptions.map(option => (
                  <option key={option} value={option}>{option}</option>
                ))}
              </select>
            </div>
          </div>
        </motion.div>

        {/* Products Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredProducts.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="card-premium group cursor-pointer relative"
              onMouseEnter={() => setHoveredItem(product.id)}
              onMouseLeave={() => setHoveredItem(null)}
            >
              {/* Wishlist Button */}
              <button
                onClick={() => addToWishlist(product)}
                className={`absolute top-4 right-4 z-10 p-2 rounded-full shadow-md transition-colors ${
                  isInWishlist(product.id) 
                    ? 'bg-red-500 text-white' 
                    : 'bg-white/90 hover:bg-white text-gray-600 hover:text-red-500'
                }`}
              >
                <Heart className={`w-4 h-4 ${isInWishlist(product.id) ? 'fill-current' : ''}`} />
              </button>

              <div className={`w-full h-64 rounded-xl bg-gradient-to-br ${product.gradient} mb-6 flex items-center justify-center relative overflow-hidden`}>
                <motion.img
                  src={product.image}
                  alt={product.name}
                  className="w-40 h-40 object-contain"
                  animate={{
                    scale: hoveredItem === product.id ? 1.1 : 1,
                    rotateY: hoveredItem === product.id ? [0, 15, -15, 0] : 0,
                  }}
                  transition={{ duration: 0.3 }}
                />
                
                {/* Hover Overlay */}
                <motion.div
                  className="absolute inset-0 bg-black/50 flex items-center justify-center gap-2"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: hoveredItem === product.id ? 1 : 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <Button size="sm" variant="secondary">
                    <Eye className="w-4 h-4" />
                  </Button>
                  <Button 
                    size="sm" 
                    className="bg-primary"
                    onClick={(e) => {
                      e.stopPropagation();
                      addToCart(product);
                    }}
                  >
                    <ShoppingCart className="w-4 h-4" />
                  </Button>
                </motion.div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-semibold text-foreground mb-2">{product.name}</h3>
                <p className="text-muted-foreground text-sm mb-3">{product.description}</p>
                
                {/* Features */}
                <div className="mb-4">
                  <div className="flex flex-wrap gap-1 mb-2">
                    {product.features.slice(0, 2).map((feature, idx) => (
                      <span 
                        key={idx}
                        className="text-xs bg-muted px-2 py-1 rounded text-muted-foreground"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <p className="text-2xl font-bold text-primary">{product.price}</p>
                  <div className="flex gap-2">
                    <Button
                      onClick={() => addToCart(product)}
                      className="btn-premium"
                      size="sm"
                    >
                      <ShoppingCart className="w-4 h-4 mr-1" />
                      Add to Cart
                    </Button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* No Results */}
        {filteredProducts.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-16"
          >
            <h3 className="text-2xl font-semibold text-foreground mb-2">No products found</h3>
            <p className="text-muted-foreground mb-4">
              Try adjusting your search terms or filters.
            </p>
            <Button 
              onClick={() => {
                setSearchTerm('');
                setSelectedCategory('All');
                setSortBy('Featured');
              }}
              variant="outline"
            >
              Clear Filters
            </Button>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default Collection;