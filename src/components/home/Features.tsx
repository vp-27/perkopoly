
import React from 'react';
import { 
  Smartphone, 
  CreditCard, 
  Bell, 
  Gift, 
  RefreshCw, 
  Lock,
  BadgeDollarSign,
  Share2,
  Clock
} from 'lucide-react';

const Features: React.FC = () => {
  const features = [
    {
      icon: <CreditCard className="h-8 w-8 text-primary" />,
      title: 'All Cards in One Place',
      description: 'Link all your loyalty cards and gift cards to manage them from a single dashboard.'
    },
    {
      icon: <RefreshCw className="h-8 w-8 text-primary" />,
      title: 'Automatic Syncing',
      description: 'Your rewards and points automatically sync across accounts whenever you use them.'
    },
    {
      icon: <Bell className="h-8 w-8 text-primary" />,
      title: 'Expiration Alerts',
      description: 'Receive timely notifications before your rewards or points expire.'
    },
    {
      icon: <Lock className="h-8 w-8 text-primary" />,
      title: 'Secure Storage',
      description: 'Your data is encrypted and protected with bank-level security standards.'
    },
    {
      icon: <Gift className="h-8 w-8 text-primary" />,
      title: 'Special Offers',
      description: 'Get personalized offers and deals from your favorite brands and stores.'
    },
    {
      icon: <Smartphone className="h-8 w-8 text-primary" />,
      title: 'Mobile Access',
      description: 'Access your rewards on the go with our responsive web and mobile applications.'
    },
    {
      icon: <BadgeDollarSign className="h-8 w-8 text-primary" />,
      title: 'Point Valuation',
      description: 'See the real dollar value of your points and miles across different programs.'
    },
    {
      icon: <Share2 className="h-8 w-8 text-primary" />,
      title: 'Easy Sharing',
      description: 'Share gift cards and rewards with family and friends with just a few taps.'
    },
    {
      icon: <Clock className="h-8 w-8 text-primary" />,
      title: 'Usage History',
      description: 'Track when and where you've used your rewards for better management.'
    }
  ];

  return (
    <section id="features" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold tracking-tight mb-4">
            Everything You Need for <span className="text-primary">Reward Management</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            PerkPal combines beautiful design with powerful features to make managing rewards simple and delightful.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="frosted-glass p-6 rounded-xl transition-all duration-300 hover:translate-y-[-5px] hover:shadow-lg"
            >
              <div className="rounded-full w-14 h-14 flex items-center justify-center bg-primary/10 mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
