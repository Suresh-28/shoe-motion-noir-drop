import { motion } from 'framer-motion';
import { useState } from 'react';
import { Clock, MapPin, Calendar, ArrowLeft, Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Link } from 'react-router-dom';
import { toast } from '@/hooks/use-toast';
import velocityNoirShoe from '@/assets/velocity-noir-shoe.png';

const reservationSlots = [
  { time: "10:00 AM", available: true },
  { time: "11:00 AM", available: true },
  { time: "12:00 PM", available: false },
  { time: "1:00 PM", available: true },
  { time: "2:00 PM", available: true },
  { time: "3:00 PM", available: false },
  { time: "4:00 PM", available: true },
  { time: "5:00 PM", available: true },
];

const stores = [
  {
    id: 1,
    name: "Velocity Flagship Store",
    address: "123 Fashion Ave, New York, NY 10001",
    phone: "(555) 123-4567",
    image: "🏢"
  },
  {
    id: 2,
    name: "Velocity Beverly Hills",
    address: "456 Rodeo Drive, Beverly Hills, CA 90210",
    phone: "(555) 987-6543",
    image: "🌴"
  },
  {
    id: 3,
    name: "Velocity Chicago Loop",
    address: "789 Michigan Ave, Chicago, IL 60601",
    phone: "(555) 456-7890",
    image: "🏙️"
  }
];

const Reserve = () => {
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');
  const [selectedStore, setSelectedStore] = useState('');
  const [customerInfo, setCustomerInfo] = useState({
    name: '',
    email: '',
    phone: '',
    size: '',
    notes: ''
  });

  const handleReservation = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!selectedDate || !selectedTime || !selectedStore || !customerInfo.name || !customerInfo.email) {
      toast({
        title: "Missing information",
        description: "Please fill in all required fields to complete your reservation.",
        variant: "destructive"
      });
      return;
    }

    toast({
      title: "Reservation confirmed!",
      description: `Your fitting appointment has been scheduled for ${selectedDate} at ${selectedTime}. We'll send a confirmation email shortly.`,
    });

    // Reset form
    setSelectedDate('');
    setSelectedTime('');
    setSelectedStore('');
    setCustomerInfo({
      name: '',
      email: '',
      phone: '',
      size: '',
      notes: ''
    });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setCustomerInfo({
      ...customerInfo,
      [e.target.name]: e.target.value
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
          <h1 className="text-4xl font-bold text-foreground mb-4">Reserve Your Fitting</h1>
          <p className="text-xl text-muted-foreground">
            Book a personalized fitting session at one of our stores. Try before you buy.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Product Preview */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-6"
          >
            <Card>
              <CardHeader>
                <CardTitle>What You'll Try</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center gap-4">
                  <div className="w-24 h-24 bg-gradient-to-br from-gray-900 to-black rounded-xl flex items-center justify-center">
                    <img src={velocityNoirShoe} alt="Velocity Noir" className="w-16 h-16 object-contain" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-foreground">Velocity Noir Collection</h3>
                    <p className="text-muted-foreground">All variants available for trying</p>
                    <p className="text-primary font-semibold">Starting from $279</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Benefits */}
            <Card>
              <CardHeader>
                <CardTitle>Fitting Session Benefits</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-green-600" />
                  <span>Try all sizes and variants</span>
                </div>
                <div className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-green-600" />
                  <span>Personal styling consultation</span>
                </div>
                <div className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-green-600" />
                  <span>Gait analysis and recommendations</span>
                </div>
                <div className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-green-600" />
                  <span>30-minute dedicated session</span>
                </div>
                <div className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-green-600" />
                  <span>No obligation to purchase</span>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Reservation Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <Card>
              <CardHeader>
                <CardTitle>Book Your Appointment</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleReservation} className="space-y-6">
                  {/* Store Selection */}
                  <div>
                    <Label className="text-base font-semibold mb-3 block">Select Store</Label>
                    <div className="space-y-2">
                      {stores.map(store => (
                        <label key={store.id} className="flex items-center gap-3 p-3 border rounded-lg cursor-pointer hover:bg-muted/50">
                          <input
                            type="radio"
                            name="store"
                            value={store.id}
                            checked={selectedStore === store.id.toString()}
                            onChange={(e) => setSelectedStore(e.target.value)}
                            className="text-primary"
                          />
                          <div className="text-2xl">{store.image}</div>
                          <div className="flex-1">
                            <h4 className="font-medium text-foreground">{store.name}</h4>
                            <p className="text-sm text-muted-foreground">{store.address}</p>
                            <p className="text-sm text-muted-foreground">{store.phone}</p>
                          </div>
                        </label>
                      ))}
                    </div>
                  </div>

                  {/* Date Selection */}
                  <div>
                    <Label htmlFor="date" className="text-base font-semibold">Select Date</Label>
                    <Input
                      id="date"
                      type="date"
                      value={selectedDate}
                      onChange={(e) => setSelectedDate(e.target.value)}
                      min={new Date().toISOString().split('T')[0]}
                      className="mt-2"
                      required
                    />
                  </div>

                  {/* Time Selection */}
                  <div>
                    <Label className="text-base font-semibold mb-3 block">Select Time</Label>
                    <div className="grid grid-cols-4 gap-2">
                      {reservationSlots.map(slot => (
                        <button
                          key={slot.time}
                          type="button"
                          disabled={!slot.available}
                          onClick={() => setSelectedTime(slot.time)}
                          className={`p-2 text-sm rounded border ${
                            selectedTime === slot.time
                              ? 'bg-primary text-primary-foreground border-primary'
                              : slot.available
                              ? 'border-muted hover:border-primary hover:bg-muted/50'
                              : 'border-muted bg-muted text-muted-foreground cursor-not-allowed'
                          }`}
                        >
                          {slot.time}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Customer Information */}
                  <div className="space-y-4">
                    <h3 className="text-base font-semibold">Your Information</h3>
                    
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="name">Full Name *</Label>
                        <Input
                          id="name"
                          name="name"
                          value={customerInfo.name}
                          onChange={handleInputChange}
                          required
                          placeholder="John Doe"
                        />
                      </div>
                      <div>
                        <Label htmlFor="email">Email *</Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={customerInfo.email}
                          onChange={handleInputChange}
                          required
                          placeholder="john@example.com"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="phone">Phone Number</Label>
                        <Input
                          id="phone"
                          name="phone"
                          value={customerInfo.phone}
                          onChange={handleInputChange}
                          placeholder="(555) 123-4567"
                        />
                      </div>
                      <div>
                        <Label htmlFor="size">Preferred Size</Label>
                        <Input
                          id="size"
                          name="size"
                          value={customerInfo.size}
                          onChange={handleInputChange}
                          placeholder="US 9.5"
                        />
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="notes">Special Requests</Label>
                      <textarea
                        id="notes"
                        name="notes"
                        value={customerInfo.notes}
                        onChange={handleInputChange}
                        className="w-full p-3 border border-input rounded-md bg-background"
                        rows={3}
                        placeholder="Any specific requirements or questions..."
                      />
                    </div>
                  </div>

                  <Button type="submit" className="btn-premium w-full" size="lg">
                    <Calendar className="w-4 h-4 mr-2" />
                    Confirm Reservation
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Reserve;