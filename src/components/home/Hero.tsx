
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Gift, Award, CreditCard } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero: React.FC = () => {
  return (
    <div className="relative overflow-hidden bg-gradient-to-b from-background to-secondary/30 pt-32 pb-20">
      {/* Background decoration elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-[30%] -right-[10%] w-[60%] h-[70%] bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute top-[60%] -left-[10%] w-[50%] h-[60%] bg-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-primary/10 text-primary mb-6 animate-fade-in">
            <span className="flex items-center">
              <Award className="w-4 h-4 mr-2" />
              Simplify your rewards experience
            </span>
          </div>
          
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-6 animate-fade-in">
            All Your Rewards,
            <br />
            <span className="text-primary">One Beautiful Place</span>
          </h1>
          
          <p className="text-xl text-muted-foreground mb-10 animate-fade-in">
            PerkPal brings all your loyalty points, gift cards, and offers together in one elegant, easy-to-use dashboard.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4 animate-fade-in">
            <Link to="/dashboard">
              <Button size="lg" className="w-full sm:w-auto">
                Get Started <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </Link>
            <Link to="#features">
              <Button size="lg" variant="outline" className="w-full sm:w-auto">
                How It Works
              </Button>
            </Link>
          </div>
        </div>

        {/* Hero image/mockup */}
        <div className="mt-20 relative">
          <div className="glass-card rounded-2xl overflow-hidden shadow-xl mx-auto max-w-4xl animate-slide-up">
            <div className="relative">
              {/* Dashboard mockup */}
              <div className="bg-gradient-to-br from-background to-secondary p-6 rounded-t-2xl">
                <div className="flex justify-between items-center mb-6">
                  <div className="space-y-1">
                    <h2 className="text-xl font-semibold">Your Rewards Dashboard</h2>
                    <p className="text-sm text-muted-foreground">Track all your points in one place</p>
                  </div>
                  <div className="flex space-x-2">
                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {/* Cards */}
                  <div className="frosted-glass p-4 rounded-lg card-hover">
                    <div className="flex items-start justify-between">
                      <div>
                        <div className="flex items-center">
                          <CreditCard className="w-5 h-5 text-primary mr-2" />
                          <span className="font-medium">Starbucks</span>
                        </div>
                        <h3 className="text-2xl font-bold mt-2">320</h3>
                        <p className="text-xs text-muted-foreground">Stars</p>
                      </div>
                      <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center">
                        <span className="text-green-800 text-xs font-bold">SB</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="frosted-glass p-4 rounded-lg card-hover">
                    <div className="flex items-start justify-between">
                      <div>
                        <div className="flex items-center">
                          <CreditCard className="w-5 h-5 text-primary mr-2" />
                          <span className="font-medium">Delta Airlines</span>
                        </div>
                        <h3 className="text-2xl font-bold mt-2">54,230</h3>
                        <p className="text-xs text-muted-foreground">Miles</p>
                      </div>
                      <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center">
                        <span className="text-blue-800 text-xs font-bold">DL</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="frosted-glass p-4 rounded-lg card-hover">
                    <div className="flex items-start justify-between">
                      <div>
                        <div className="flex items-center">
                          <CreditCard className="w-5 h-5 text-primary mr-2" />
                          <span className="font-medium">Target</span>
                        </div>
                        <h3 className="text-2xl font-bold mt-2">$45.20</h3>
                        <p className="text-xs text-muted-foreground">Cashback</p>
                      </div>
                      <div className="w-10 h-10 rounded-full bg-red-100 flex items-center justify-center">
                        <span className="text-red-800 text-xs font-bold">TG</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="mt-6 frosted-glass p-4 rounded-lg">
                  <div className="flex justify-between items-center mb-3">
                    <h3 className="font-medium">Expiring Soon</h3>
                    <Button variant="ghost" size="sm">View All</Button>
                  </div>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center p-2 bg-background/50 rounded-md">
                      <div className="flex items-center">
                        <Gift className="w-4 h-4 text-primary mr-2" />
                        <span className="text-sm">Amazon Gift Card</span>
                      </div>
                      <div className="text-sm font-medium">Expires in 5 days</div>
                    </div>
                    <div className="flex justify-between items-center p-2 bg-background/50 rounded-md">
                      <div className="flex items-center">
                        <Award className="w-4 h-4 text-primary mr-2" />
                        <span className="text-sm">Coffee Reward</span>
                      </div>
                      <div className="text-sm font-medium">Expires in 2 weeks</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Decorative elements */}
          <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-primary/10 rounded-full blur-3xl animate-pulse" />
          <div className="absolute -top-10 -left-10 w-40 h-40 bg-primary/10 rounded-full blur-3xl animate-pulse" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
