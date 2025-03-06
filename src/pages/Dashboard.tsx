
import React from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import RewardsOverview from '@/components/dashboard/RewardsOverview';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Dashboard as DashboardIcon, CreditCard, Settings, Bell } from 'lucide-react';
import AuthForm from '@/components/auth/AuthForm';

const Dashboard: React.FC = () => {
  const [isAuthenticated, setIsAuthenticated] = React.useState(true); // Normally would come from auth context

  // For demo purposes, allow toggling auth state
  const toggleAuth = () => {
    setIsAuthenticated(!isAuthenticated);
  };

  return (
    <div className="min-h-screen flex flex-col bg-background page-transition">
      <Navbar />
      <main className="flex-grow pt-24 pb-12">
        {isAuthenticated ? (
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-8">
              <h1 className="text-3xl font-bold">Your Rewards Dashboard</h1>
              <p className="text-muted-foreground">
                Track and manage all your loyalty programs in one place
              </p>
            </div>
            
            <Tabs defaultValue="overview" className="space-y-8">
              <TabsList className="bg-secondary/50 backdrop-blur-sm">
                <TabsTrigger value="overview" className="flex items-center">
                  <DashboardIcon className="h-4 w-4 mr-2" />
                  Overview
                </TabsTrigger>
                <TabsTrigger value="cards" className="flex items-center">
                  <CreditCard className="h-4 w-4 mr-2" />
                  Cards
                </TabsTrigger>
                <TabsTrigger value="notifications" className="flex items-center">
                  <Bell className="h-4 w-4 mr-2" />
                  Notifications
                </TabsTrigger>
                <TabsTrigger value="settings" className="flex items-center">
                  <Settings className="h-4 w-4 mr-2" />
                  Settings
                </TabsTrigger>
              </TabsList>
              
              <TabsContent value="overview" className="animate-fade-in">
                <RewardsOverview />
              </TabsContent>
              
              <TabsContent value="cards" className="animate-fade-in">
                <div className="glass-card p-8 rounded-xl text-center">
                  <h3 className="text-xl font-semibold mb-4">Cards Management</h3>
                  <p className="text-muted-foreground">
                    This section is under development. Check back soon for managing your physical and digital cards.
                  </p>
                </div>
              </TabsContent>
              
              <TabsContent value="notifications" className="animate-fade-in">
                <div className="glass-card p-8 rounded-xl text-center">
                  <h3 className="text-xl font-semibold mb-4">Notifications Center</h3>
                  <p className="text-muted-foreground">
                    This section is under development. Soon you'll be able to configure notifications for expiring rewards and special offers.
                  </p>
                </div>
              </TabsContent>
              
              <TabsContent value="settings" className="animate-fade-in">
                <div className="glass-card p-8 rounded-xl text-center">
                  <h3 className="text-xl font-semibold mb-4">Account Settings</h3>
                  <p className="text-muted-foreground mb-4">
                    This section is under development. Soon you'll be able to customize your preferences and manage your account settings.
                  </p>
                  <button 
                    onClick={toggleAuth}
                    className="text-primary hover:underline"
                  >
                    Sign Out (Demo)
                  </button>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        ) : (
          <div className="max-w-md mx-auto px-4">
            <AuthForm />
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
};

export default Dashboard;
