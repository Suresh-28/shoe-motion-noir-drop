import { motion } from 'framer-motion';
import { useState } from 'react';
import { Gift, Star, Trophy, ArrowLeft, Check, Copy } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Link } from 'react-router-dom';
import { toast } from '@/hooks/use-toast';
import velocityNoirShoe from '@/assets/velocity-noir-shoe.png';

const bonusRewards = [
  {
    id: 1,
    title: "20% Launch Discount",
    description: "Exclusive discount on your first Velocity Noir purchase",
    icon: "💰",
    claimed: false,
    code: "LAUNCH20"
  },
  {
    id: 2,
    title: "Free Premium Laces",
    description: "Complimentary set of premium gold-threaded laces",
    icon: "🎁",
    claimed: false,
    code: "FREELACES"
  },
  {
    id: 3,
    title: "VIP Access",
    description: "Early access to future releases and exclusive drops",
    icon: "⭐",
    claimed: false,
    code: "VIPACCESS"
  },
  {
    id: 4,
    title: "Limited Edition Box",
    description: "Special collector's edition packaging for your order",
    icon: "📦",
    claimed: false,
    code: "LIMITEDBOX"
  }
];

const ClaimLaunchBonus = () => {
  const [email, setEmail] = useState('');
  const [claimedRewards, setClaimedRewards] = useState<number[]>([]);
  const [isEligible, setIsEligible] = useState<boolean | null>(null);

  const checkEligibility = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email) {
      toast({
        title: "Email required",
        description: "Please enter your email address to check eligibility.",
        variant: "destructive"
      });
      return;
    }

    // Simulate checking eligibility (in real app, this would be an API call)
    setTimeout(() => {
      setIsEligible(true);
      toast({
        title: "Congratulations! 🎉",
        description: "You're eligible for all launch bonuses! Start claiming your rewards.",
      });
    }, 1000);
  };

  const claimReward = (rewardId: number, code: string) => {
    if (claimedRewards.includes(rewardId)) return;

    setClaimedRewards([...claimedRewards, rewardId]);
    
    // Copy code to clipboard
    navigator.clipboard.writeText(code);
    
    toast({
      title: "Reward claimed! 🎉",
      description: `Code "${code}" has been copied to your clipboard.`,
    });
  };

  const copyAllCodes = () => {
    const allCodes = bonusRewards.map(reward => `${reward.title}: ${reward.code}`).join('\n');
    navigator.clipboard.writeText(allCodes);
    
    toast({
      title: "All codes copied!",
      description: "All reward codes have been copied to your clipboard.",
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
          <h1 className="text-4xl font-bold text-foreground mb-4">Launch Bonus Campaign</h1>
          <p className="text-xl text-muted-foreground">
            Celebrate the launch of Velocity Noir with exclusive rewards and bonuses!
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Campaign Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-6"
          >
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Trophy className="w-6 h-6 text-primary" />
                  Launch Campaign
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-center space-y-4">
                  <div className="w-32 h-32 bg-gradient-to-br from-gray-900 to-black rounded-2xl flex items-center justify-center mx-auto">
                    <img src={velocityNoirShoe} alt="Velocity Noir" className="w-24 h-24 object-contain" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground">Velocity Noir Launch</h3>
                  <p className="text-muted-foreground">
                    To celebrate our revolutionary new sneaker, we're giving away exclusive bonuses to our early supporters!
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Eligibility Check */}
            {isEligible === null && (
              <Card>
                <CardHeader>
                  <CardTitle>Check Your Eligibility</CardTitle>
                </CardHeader>
                <CardContent>
                  <form onSubmit={checkEligibility} className="space-y-4">
                    <div>
                      <Label htmlFor="email">Email Address</Label>
                      <Input
                        id="email"
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="your@email.com"
                        required
                      />
                    </div>
                    <Button type="submit" className="btn-premium w-full">
                      <Gift className="w-4 h-4 mr-2" />
                      Check Eligibility
                    </Button>
                  </form>
                  
                  <div className="mt-4 p-4 bg-muted/50 rounded-lg">
                    <h4 className="font-semibold text-foreground mb-2">Eligibility Requirements:</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Newsletter subscriber before launch date</li>
                      <li>• First-time Velocity customer</li>
                      <li>• Valid email address</li>
                      <li>• Campaign valid until limited quantities last</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
            )}

            {/* Campaign Stats */}
            {isEligible && (
              <Card>
                <CardHeader>
                  <CardTitle>Campaign Progress</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-4 text-center">
                    <div>
                      <h4 className="text-2xl font-bold text-primary">1,247</h4>
                      <p className="text-sm text-muted-foreground">Rewards Claimed</p>
                    </div>
                    <div>
                      <h4 className="text-2xl font-bold text-primary">72%</h4>
                      <p className="text-sm text-muted-foreground">Participation Rate</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            )}
          </motion.div>

          {/* Rewards Section */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-6"
          >
            {isEligible === null ? (
              <Card>
                <CardContent className="text-center py-12">
                  <Gift className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-foreground mb-2">Ready to Claim Your Rewards?</h3>
                  <p className="text-muted-foreground">
                    Check your eligibility first to unlock all available launch bonuses.
                  </p>
                </CardContent>
              </Card>
            ) : (
              <>
                <div className="flex items-center justify-between">
                  <h2 className="text-2xl font-bold text-foreground">Your Rewards</h2>
                  {claimedRewards.length > 0 && (
                    <Button variant="outline" onClick={copyAllCodes} size="sm">
                      <Copy className="w-4 h-4 mr-2" />
                      Copy All Codes
                    </Button>
                  )}
                </div>

                <div className="space-y-4">
                  {bonusRewards.map((reward, index) => {
                    const isClaimed = claimedRewards.includes(reward.id);
                    
                    return (
                      <motion.div
                        key={reward.id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                      >
                        <Card className={`${isClaimed ? 'bg-green-50 border-green-200' : ''}`}>
                          <CardContent className="p-6">
                            <div className="flex items-center justify-between">
                              <div className="flex items-center gap-4">
                                <div className="text-3xl">{reward.icon}</div>
                                <div>
                                  <h3 className="text-lg font-semibold text-foreground">{reward.title}</h3>
                                  <p className="text-muted-foreground">{reward.description}</p>
                                  {isClaimed && (
                                    <p className="text-sm text-green-600 font-medium mt-1">
                                      Code: {reward.code}
                                    </p>
                                  )}
                                </div>
                              </div>
                              
                              <Button
                                onClick={() => claimReward(reward.id, reward.code)}
                                disabled={isClaimed}
                                className={isClaimed ? "bg-green-600 hover:bg-green-600" : "btn-premium"}
                              >
                                {isClaimed ? (
                                  <>
                                    <Check className="w-4 h-4 mr-2" />
                                    Claimed
                                  </>
                                ) : (
                                  "Claim"
                                )}
                              </Button>
                            </div>
                          </CardContent>
                        </Card>
                      </motion.div>
                    );
                  })}
                </div>

                {claimedRewards.length === bonusRewards.length && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center p-8 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-xl"
                  >
                    <Trophy className="w-16 h-16 text-primary mx-auto mb-4" />
                    <h3 className="text-2xl font-bold text-foreground mb-2">Congratulations! 🎉</h3>
                    <p className="text-muted-foreground mb-4">
                      You've claimed all available launch bonuses! Don't forget to use your codes at checkout.
                    </p>
                    <Link to="/">
                      <Button className="btn-premium">
                        Start Shopping
                      </Button>
                    </Link>
                  </motion.div>
                )}
              </>
            )}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ClaimLaunchBonus;