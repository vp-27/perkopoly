
import React, { useState } from 'react';
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardHeader, 
  CardTitle 
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { 
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { 
  Link, 
  Unlink, 
  Plus, 
  Search, 
  RefreshCw, 
  Check, 
  X, 
  AlertCircle,
  Coffee,
  ShoppingCart,
  Plane,
  Car,
  Hotel,
  UtensilsCrossed
} from 'lucide-react';
import { Badge } from '@/components/ui/badge';

// Mock data
const accountsData = {
  connected: [
    {
      id: 1,
      name: 'Starbucks',
      category: 'Coffee',
      icon: Coffee,
      status: 'connected',
      lastSynced: '10 minutes ago',
      username: 'user@example.com'
    },
    {
      id: 2,
      name: 'Target',
      category: 'Retail',
      icon: ShoppingCart,
      status: 'connected',
      lastSynced: '2 hours ago',
      username: 'user@example.com'
    },
    {
      id: 3,
      name: 'Delta Airlines',
      category: 'Travel',
      icon: Plane,
      status: 'connected',
      lastSynced: '1 day ago',
      username: 'user@example.com'
    },
    {
      id: 4,
      name: 'Uber',
      category: 'Transportation',
      icon: Car,
      status: 'error',
      lastSynced: '3 days ago',
      username: 'user@example.com',
      error: 'Authentication failed'
    }
  ],
  suggested: [
    {
      id: 5,
      name: 'Marriott Bonvoy',
      category: 'Hotels',
      icon: Hotel,
      status: 'suggested'
    },
    {
      id: 6,
      name: 'Chipotle',
      category: 'Dining',
      icon: UtensilsCrossed,
      status: 'suggested'
    }
  ]
};

const AccountsSection: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [isAddingAccount, setIsAddingAccount] = useState(false);
  const [isSyncingAll, setIsSyncingAll] = useState(false);
  
  const handleSync = () => {
    setIsSyncingAll(true);
    setTimeout(() => {
      setIsSyncingAll(false);
    }, 2000);
  };
  
  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };
  
  const filteredConnected = accountsData.connected.filter(account => 
    account.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    account.category.toLowerCase().includes(searchQuery.toLowerCase())
  );
  
  const filteredSuggested = accountsData.suggested.filter(account => 
    account.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    account.category.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h2 className="text-2xl font-bold">Linked Accounts</h2>
          <p className="text-muted-foreground">Manage your connected loyalty programs</p>
        </div>
        <div className="flex space-x-2">
          <Button 
            variant="outline"
            className="flex items-center" 
            onClick={handleSync}
            disabled={isSyncingAll}
          >
            {isSyncingAll ? (
              <>
                <svg className="animate-spin -ml-1 mr-2 h-4 w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Syncing...
              </>
            ) : (
              <>
                <RefreshCw className="mr-2 h-4 w-4" />
                Sync All
              </>
            )}
          </Button>
          <Dialog open={isAddingAccount} onOpenChange={setIsAddingAccount}>
            <DialogTrigger asChild>
              <Button className="flex items-center">
                <Plus className="mr-2 h-4 w-4" />
                Add Account
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-md">
              <DialogHeader>
                <DialogTitle>Add New Account</DialogTitle>
                <DialogDescription>
                  Connect to a loyalty program to track your rewards
                </DialogDescription>
              </DialogHeader>
              <div className="py-4">
                <div className="mb-4">
                  <Input 
                    placeholder="Search for a loyalty program..."
                    className="w-full"
                    onChange={handleSearch}
                    value={searchQuery}
                  />
                </div>
                <div className="space-y-2 max-h-60 overflow-y-auto">
                  {filteredSuggested.map(account => (
                    <div 
                      key={account.id}
                      className="flex items-center justify-between p-3 rounded-md hover:bg-secondary/50 cursor-pointer"
                    >
                      <div className="flex items-center">
                        <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center mr-3">
                          <account.icon className="h-5 w-5 text-primary" />
                        </div>
                        <div>
                          <h4 className="font-medium">{account.name}</h4>
                          <p className="text-xs text-muted-foreground">{account.category}</p>
                        </div>
                      </div>
                      <Button size="sm" variant="outline">Connect</Button>
                    </div>
                  ))}
                  <div className="flex items-center justify-between p-3 rounded-md hover:bg-secondary/50 cursor-pointer">
                    <div className="flex items-center">
                      <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center mr-3">
                        <Plus className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-medium">Can't find your program?</h4>
                        <p className="text-xs text-muted-foreground">Request a new integration</p>
                      </div>
                    </div>
                    <Button size="sm" variant="outline">Request</Button>
                  </div>
                </div>
              </div>
              <DialogFooter className="sm:justify-start">
                <Button
                  type="button"
                  variant="secondary"
                  onClick={() => setIsAddingAccount(false)}
                >
                  Close
                </Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </div>
      </div>
      
      {/* Search */}
      <div className="relative">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
        <Input 
          placeholder="Search accounts..." 
          className="pl-10" 
          value={searchQuery}
          onChange={handleSearch}
        />
      </div>
      
      {/* Connected Accounts */}
      <div>
        <h3 className="text-lg font-semibold mb-4">Connected Accounts ({filteredConnected.length})</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {filteredConnected.map(account => (
            <Card key={account.id} className={`glass-card transition-all duration-300 hover:shadow-md ${account.status === 'error' ? 'border-red-500/50' : ''}`}>
              <CardContent className="p-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center mr-3">
                      <account.icon className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-medium">{account.name}</h4>
                      <p className="text-xs text-muted-foreground">{account.category}</p>
                    </div>
                  </div>
                  {account.status === 'connected' ? (
                    <Badge className="bg-green-500/20 text-green-700 dark:text-green-400 border-0">
                      <Check className="h-3 w-3 mr-1" />
                      Connected
                    </Badge>
                  ) : (
                    <Badge className="bg-red-500/20 text-red-700 dark:text-red-400 border-0">
                      <X className="h-3 w-3 mr-1" />
                      Error
                    </Badge>
                  )}
                </div>
                
                <div className="mt-4 flex items-center justify-between">
                  <div className="text-xs text-muted-foreground">
                    {account.status === 'connected' ? (
                      <>Last synced {account.lastSynced}</>
                    ) : (
                      <div className="flex items-center text-red-600 dark:text-red-400">
                        <AlertCircle className="h-3 w-3 mr-1" />
                        {account.error}
                      </div>
                    )}
                  </div>
                  <div className="flex space-x-2">
                    <Button size="sm" variant="ghost" className="h-8 px-2 text-xs">
                      <RefreshCw className="h-3 w-3 mr-1" />
                      Sync
                    </Button>
                    <Button size="sm" variant="ghost" className="h-8 px-2 text-xs">
                      <Unlink className="h-3 w-3 mr-1" />
                      Unlink
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
      
      {/* Suggested Accounts */}
      {filteredSuggested.length > 0 && (
        <div>
          <h3 className="text-lg font-semibold mb-4">Suggested Accounts</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {filteredSuggested.map(account => (
              <Card key={account.id} className="glass-card transition-all duration-300 hover:shadow-md">
                <CardContent className="p-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center mr-3">
                        <account.icon className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-medium">{account.name}</h4>
                        <p className="text-xs text-muted-foreground">{account.category}</p>
                      </div>
                    </div>
                    <Button size="sm" className="flex items-center">
                      <Link className="h-4 w-4 mr-1" />
                      Connect
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
            
            <Card className="glass-card border-dashed flex items-center justify-center p-6 transition-all duration-300 hover:bg-secondary/30">
              <Dialog open={isAddingAccount} onOpenChange={setIsAddingAccount}>
                <DialogTrigger asChild>
                  <Button variant="outline" className="flex items-center">
                    <Plus className="h-4 w-4 mr-2" />
                    Add More Accounts
                  </Button>
                </DialogTrigger>
              </Dialog>
            </Card>
          </div>
        </div>
      )}
    </div>
  );
};

export default AccountsSection;
