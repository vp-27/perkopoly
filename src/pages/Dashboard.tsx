
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { LayoutDashboard, LogOut, User, Award, Bell, CreditCard } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';
import { Badge } from '@/components/ui/badge';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import RewardsOverview from '@/components/dashboard/RewardsOverview';
import AccountsSection from '@/components/dashboard/AccountsSection';
import PartnerSection from '@/components/dashboard/PartnerSection';

interface UserData {
  name: string;
  email: string;
  id: string;
}

// Mock data for dashboard metrics
const rewardsData = {
  totalPoints: 143250,
  totalValue: 1432.5,
  expiringCount: 3,
};

const Dashboard: React.FC = () => {
  const [userData, setUserData] = useState<UserData | null>(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const { toast } = useToast();

  useEffect(() => {
    // Check if the user is logged in
    const storedUser = localStorage.getItem('perkpal_user');
    
    if (storedUser) {
      try {
        const parsedUser = JSON.parse(storedUser);
        setUserData(parsedUser);
      } catch (error) {
        console.error('Failed to parse user data:', error);
      }
    } else {
      // Redirect to sign-in if not logged in
      toast({
        title: "Authentication required",
        description: "Please sign in to access your dashboard.",
        variant: "destructive",
      });
      navigate('/signin');
    }
    
    setLoading(false);
  }, [navigate, toast]);

  const handleSignOut = () => {
    localStorage.removeItem('perkpal_user');
    toast({
      title: "Signed out",
      description: "You have been successfully signed out.",
    });
    navigate('/signin');
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col page-transition">
      <Navbar />
      <main className="flex-grow py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
        {userData && (
          <>
            <div className="frosted-glass rounded-xl p-6 mb-8">
              <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
                <div className="lg:col-span-4 xl:col-span-1">
                  <div className="flex items-center gap-4">
                    <div className="bg-primary/10 rounded-full p-3">
                      <User className="h-8 w-8 text-primary" />
                    </div>
                    <div>
                      <h1 className="text-2xl font-bold">Welcome, {userData.name}</h1>
                      <p className="text-muted-foreground">{userData.email}</p>
                    </div>
                  </div>
                  <div className="flex gap-2 mt-4 lg:mt-6">
                    <Button variant="outline" onClick={() => navigate('/profile')}>
                      <User className="h-4 w-4 mr-2" />
                      Profile
                    </Button>
                    <Button variant="outline" onClick={handleSignOut}>
                      <LogOut className="h-4 w-4 mr-2" />
                      Sign Out
                    </Button>
                  </div>
                </div>
                
                {/* Stats Section - Integrated into the top island */}
                <div className="lg:col-span-1">
                  <div className="flex flex-col h-full p-4 bg-primary/5 rounded-lg">
                    <div className="flex items-center mb-2">
                      <Award className="h-5 w-5 text-primary mr-2" />
                      <span className="text-sm font-medium text-muted-foreground">Total Points Value</span>
                    </div>
                    <div className="flex items-baseline">
                      <span className="text-2xl font-bold">${rewardsData.totalValue.toFixed(2)}</span>
                      <span className="ml-2 text-xs text-muted-foreground">USD</span>
                    </div>
                  </div>
                </div>
                
                <div className="lg:col-span-1">
                  <div className="flex flex-col h-full p-4 bg-primary/5 rounded-lg">
                    <div className="flex items-center mb-2">
                      <CreditCard className="h-5 w-5 text-primary mr-2" />
                      <span className="text-sm font-medium text-muted-foreground">Total Points</span>
                    </div>
                    <div className="flex items-baseline">
                      <span className="text-2xl font-bold">{rewardsData.totalPoints.toLocaleString()}</span>
                    </div>
                  </div>
                </div>
                
                <div className="lg:col-span-1">
                  <div className="flex flex-col h-full p-4 bg-primary/5 rounded-lg">
                    <div className="flex items-center mb-2">
                      <Bell className="h-5 w-5 text-primary mr-2" />
                      <span className="text-sm font-medium text-muted-foreground">Expiring Soon</span>
                    </div>
                    <div className="flex items-center">
                      <span className="text-2xl font-bold">{rewardsData.expiringCount}</span>
                      <Badge className="ml-2 bg-yellow-500/20 text-yellow-700 dark:text-yellow-400 border-0">
                        <Bell className="h-3 w-3 mr-1" />
                        Alert
                      </Badge>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-6">
              <div>
                <h2 className="text-2xl font-bold mb-6 flex items-center">
                  <LayoutDashboard className="mr-2 h-6 w-6 text-primary" />
                  Your Dashboard
                </h2>
                <RewardsOverview />
              </div>
              
              <AccountsSection />
              
              <PartnerSection />
            </div>
          </>
        )}
      </main>
      <Footer />
    </div>
  );
};

export default Dashboard;
