import { motion } from 'framer-motion';
import { Package, Truck, CheckCircle, ArrowLeft, Eye } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useCart } from '@/contexts/CartContext';
import { Link } from 'react-router-dom';

const Orders = () => {
  const { state } = useCart();

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'pending':
        return <Package className="w-4 h-4" />;
      case 'processing':
        return <Package className="w-4 h-4 text-blue-600" />;
      case 'shipped':
        return <Truck className="w-4 h-4 text-orange-600" />;
      case 'delivered':
        return <CheckCircle className="w-4 h-4 text-green-600" />;
      default:
        return <Package className="w-4 h-4" />;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'pending':
        return 'text-gray-600 bg-gray-100';
      case 'processing':
        return 'text-blue-600 bg-blue-100';
      case 'shipped':
        return 'text-orange-600 bg-orange-100';
      case 'delivered':
        return 'text-green-600 bg-green-100';
      default:
        return 'text-gray-600 bg-gray-100';
    }
  };

  if (state.orders.length === 0) {
    return (
      <div className="min-h-screen bg-background">
        <div className="container-premium py-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <Package className="w-24 h-24 mx-auto text-muted-foreground mb-6" />
            <h2 className="text-3xl font-bold text-foreground mb-4">No orders yet</h2>
            <p className="text-muted-foreground mb-8">Start shopping to see your orders here.</p>
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
            Back to Home
          </Link>
          <h1 className="text-4xl font-bold text-foreground">Your Orders</h1>
          <p className="text-muted-foreground mt-2">{state.orders.length} orders found</p>
        </motion.div>

        <div className="space-y-6">
          {state.orders.map((order, index) => (
            <motion.div
              key={order.orderId}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="card-premium p-6"
            >
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-lg font-semibold text-foreground">Order #{order.orderId}</h3>
                  <p className="text-sm text-muted-foreground">
                    Placed on {new Date(order.orderDate).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric'
                    })}
                  </p>
                </div>
                <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(order.status)}`}>
                  {getStatusIcon(order.status)}
                  {order.status.charAt(0).toUpperCase() + order.status.slice(1)}
                </div>
              </div>

              <div className="flex items-center gap-6">
                <div className={`w-20 h-20 rounded-xl bg-gradient-to-br ${order.gradient} flex items-center justify-center flex-shrink-0`}>
                  <img src={order.image} alt={order.name} className="w-12 h-12 object-contain" />
                </div>
                
                <div className="flex-1">
                  <h4 className="text-xl font-semibold text-foreground mb-1">{order.name}</h4>
                  <p className="text-muted-foreground mb-2">{order.description}</p>
                  <div className="flex items-center gap-4">
                    <p className="text-sm text-muted-foreground">Quantity: {order.quantity}</p>
                    <p className="text-lg font-semibold text-primary">${order.total.toFixed(2)}</p>
                  </div>
                </div>
                
                <div className="flex flex-col gap-2">
                  <Button variant="outline" size="sm">
                    <Eye className="w-4 h-4 mr-2" />
                    Track Order
                  </Button>
                  {order.status === 'delivered' && (
                    <Button variant="outline" size="sm">
                      Buy Again
                    </Button>
                  )}
                </div>
              </div>

              {/* Order Progress */}
              <div className="mt-6 pt-4 border-t">
                <div className="flex items-center justify-between">
                  <div className={`flex items-center gap-2 ${order.status === 'pending' || order.status === 'processing' || order.status === 'shipped' || order.status === 'delivered' ? 'text-green-600' : 'text-muted-foreground'}`}>
                    <CheckCircle className="w-4 h-4" />
                    <span className="text-sm">Order Confirmed</span>
                  </div>
                  
                  <div className={`flex items-center gap-2 ${order.status === 'processing' || order.status === 'shipped' || order.status === 'delivered' ? 'text-blue-600' : 'text-muted-foreground'}`}>
                    <Package className="w-4 h-4" />
                    <span className="text-sm">Processing</span>
                  </div>
                  
                  <div className={`flex items-center gap-2 ${order.status === 'shipped' || order.status === 'delivered' ? 'text-orange-600' : 'text-muted-foreground'}`}>
                    <Truck className="w-4 h-4" />
                    <span className="text-sm">Shipped</span>
                  </div>
                  
                  <div className={`flex items-center gap-2 ${order.status === 'delivered' ? 'text-green-600' : 'text-muted-foreground'}`}>
                    <CheckCircle className="w-4 h-4" />
                    <span className="text-sm">Delivered</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Orders;