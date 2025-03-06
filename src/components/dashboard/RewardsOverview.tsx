
import React from 'react';
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardHeader, 
  CardTitle 
} from '@/components/ui/card';
import { 
  Tabs, 
  TabsContent, 
  TabsList, 
  TabsTrigger 
} from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  Award, 
  Gift, 
  CreditCard, 
  Calendar, 
  PlusCircle, 
  ChevronRight, 
  Bell
} from 'lucide-react';
import { Progress } from '@/components/ui/progress';

// Mock data
const rewardsData = {
  totalPoints: 143250,
  totalValue: 1432.5,
  expiringCount: 3,
  rewards: [
    {
      id: 1,
      name: 'Starbucks',
      logo: 'SB',
      color: 'green',
      points: 320,
      pointsName: 'Stars',
      value: 32.0,
      expiresIn: '45 days',
      expiring: false
    },
    {
      id: 2,
      name: 'Delta Airlines',
      logo: 'DL',
      color: 'blue',
      points: 54230,
      pointsName: 'Miles',
      value: 542.3,
      expiresIn: '1 year',
      expiring: false
    },
    {
      id: 3,
      name: 'Target',
      logo: 'TG',
      color: 'red',
      points: 45.2,
      pointsName: 'Cashback',
      value: 45.2,
      expiresIn: '30 days',
      expiring: true
    },
    {
      id: 4,
      name: 'Amazon',
      logo: 'AZ',
      color: 'yellow',
      points: 1240,
      pointsName: 'Points',
      value: 12.4,
      expiresIn: '60 days',
      expiring: false
    },
    {
      id: 5,
      name: 'Uber',
      logo: 'UB',
      color: 'black',
      points: 650,
      pointsName: 'Credits',
      value: 6.5,
      expiresIn: '14 days',
      expiring: true
    },
    {
      id: 6,
      name: 'Sephora',
      logo: 'SP',
      color: 'purple',
      points: 1200,
      pointsName: 'Beauty Insider Points',
      value: 24.0,
      expiresIn: '90 days',
      expiring: false
    }
  ],
  giftCards: [
    {
      id: 1,
      name: 'Amazon Gift Card',
      logo: 'AZ',
      color: 'yellow',
      balance: 25.0,
      expiresIn: '5 days',
      expiring: true
    },
    {
      id: 2,
      name: 'Starbucks Gift Card',
      logo: 'SB',
      color: 'green',
      balance: 15.75,
      expiresIn: 'Never',
      expiring: false
    },
    {
      id: 3,
      name: 'Target Gift Card',
      logo: 'TG',
      color: 'red',
      balance: 50.0,
      expiresIn: 'Never',
      expiring: false
    }
  ],
  upcomingRewards: [
    {
      id: 1,
      name: 'Free Coffee',
      program: 'Starbucks',
      logo: 'SB',
      color: 'green',
      pointsNeeded: 400,
      currentPoints: 320,
      progress: 80
    },
    {
      id: 2,
      name: 'Free Domestic Flight',
      program: 'Delta Airlines',
      logo: 'DL',
      color: 'blue',
      pointsNeeded: 60000,
      currentPoints: 54230,
      progress: 90
    },
    {
      id: 3,
      name: '$5 Reward',
      program: 'Target',
      logo: 'TG',
      color: 'red',
      pointsNeeded: 50,
      currentPoints: 45.2,
      progress: 90
    }
  ]
};

const RewardsOverview: React.FC = () => {
  return (
    <div className="space-y-6">
      {/* Summary cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card className="glass-card">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Total Points Value</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-baseline">
              <span className="text-3xl font-bold">${rewardsData.totalValue.toFixed(2)}</span>
              <span className="ml-2 text-sm text-muted-foreground">USD</span>
            </div>
            <p className="text-xs text-muted-foreground mt-1">
              From {rewardsData.rewards.length} rewards programs
            </p>
          </CardContent>
        </Card>
        
        <Card className="glass-card">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Total Points</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-baseline">
              <span className="text-3xl font-bold">{rewardsData.totalPoints.toLocaleString()}</span>
            </div>
            <p className="text-xs text-muted-foreground mt-1">
              Across all your accounts
            </p>
          </CardContent>
        </Card>
        
        <Card className="glass-card">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Expiring Soon</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center">
              <span className="text-3xl font-bold">{rewardsData.expiringCount}</span>
              <Badge className="ml-2 bg-yellow-500/20 text-yellow-700 dark:text-yellow-400 border-0">
                <Bell className="h-3 w-3 mr-1" />
                Alert
              </Badge>
            </div>
            <p className="text-xs text-muted-foreground mt-1">
              Rewards expiring in the next 30 days
            </p>
          </CardContent>
        </Card>
      </div>
      
      {/* Main content with tabs */}
      <Tabs defaultValue="rewards" className="w-full">
        <TabsList className="mb-6">
          <TabsTrigger value="rewards" className="flex items-center">
            <Award className="h-4 w-4 mr-2" />
            Rewards
          </TabsTrigger>
          <TabsTrigger value="giftcards" className="flex items-center">
            <Gift className="h-4 w-4 mr-2" />
            Gift Cards
          </TabsTrigger>
          <TabsTrigger value="upcoming" className="flex items-center">
            <Calendar className="h-4 w-4 mr-2" />
            Upcoming
          </TabsTrigger>
        </TabsList>
        
        {/* Rewards Tab */}
        <TabsContent value="rewards" className="animate-fade-in">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-semibold">Your Reward Programs</h3>
            <Button size="sm" variant="outline" className="flex items-center">
              <PlusCircle className="h-4 w-4 mr-2" />
              Add Program
            </Button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {rewardsData.rewards.map((reward) => (
              <Card key={reward.id} className={`glass-card overflow-hidden transition-all duration-300 hover:translate-y-[-5px] hover:shadow-lg ${reward.expiring ? 'border-yellow-500/50' : ''}`}>
                <CardContent className="p-0">
                  <div className="flex items-center p-4">
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center mr-3 bg-${reward.color}-100 text-${reward.color}-800`}>
                      <span className="text-xs font-bold">{reward.logo}</span>
                    </div>
                    <div>
                      <h4 className="font-medium">{reward.name}</h4>
                      <p className="text-xs text-muted-foreground">Expires in {reward.expiresIn}</p>
                    </div>
                    {reward.expiring && (
                      <Badge className="ml-auto bg-yellow-500/20 text-yellow-700 dark:text-yellow-400 border-0">
                        Expiring Soon
                      </Badge>
                    )}
                  </div>
                  
                  <div className="border-t border-border p-4">
                    <div className="flex justify-between items-baseline mb-1">
                      <div className="text-2xl font-bold">{typeof reward.points === 'number' ? reward.points.toLocaleString() : reward.points}</div>
                      <div className="text-sm text-muted-foreground">${reward.value.toFixed(2)} value</div>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-xs text-muted-foreground">{reward.pointsName}</span>
                      <Button variant="ghost" size="sm" className="h-8 px-2 text-xs">
                        Details <ChevronRight className="h-3 w-3 ml-1" />
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>
        
        {/* Gift Cards Tab */}
        <TabsContent value="giftcards" className="animate-fade-in">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-semibold">Your Gift Cards</h3>
            <Button size="sm" variant="outline" className="flex items-center">
              <PlusCircle className="h-4 w-4 mr-2" />
              Add Gift Card
            </Button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {rewardsData.giftCards.map((card) => (
              <Card key={card.id} className={`glass-card overflow-hidden transition-all duration-300 hover:translate-y-[-5px] hover:shadow-lg ${card.expiring ? 'border-yellow-500/50' : ''}`}>
                <CardContent className="p-0">
                  <div className="flex items-center p-4">
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center mr-3 bg-${card.color}-100 text-${card.color}-800`}>
                      <span className="text-xs font-bold">{card.logo}</span>
                    </div>
                    <div>
                      <h4 className="font-medium">{card.name}</h4>
                      <p className="text-xs text-muted-foreground">
                        {card.expiresIn === 'Never' ? 'No expiration' : `Expires in ${card.expiresIn}`}
                      </p>
                    </div>
                    {card.expiring && (
                      <Badge className="ml-auto bg-yellow-500/20 text-yellow-700 dark:text-yellow-400 border-0">
                        Expiring Soon
                      </Badge>
                    )}
                  </div>
                  
                  <div className="border-t border-border p-4">
                    <div className="flex justify-between items-baseline mb-1">
                      <div className="text-2xl font-bold">${card.balance.toFixed(2)}</div>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-xs text-muted-foreground">Balance</span>
                      <Button variant="ghost" size="sm" className="h-8 px-2 text-xs">
                        Use Card <ChevronRight className="h-3 w-3 ml-1" />
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
            
            <Card className="glass-card border-dashed flex items-center justify-center p-6 transition-all duration-300 hover:bg-secondary/30">
              <Button variant="outline" className="flex items-center">
                <PlusCircle className="h-4 w-4 mr-2" />
                Add New Gift Card
              </Button>
            </Card>
          </div>
        </TabsContent>
        
        {/* Upcoming Tab */}
        <TabsContent value="upcoming" className="animate-fade-in">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-semibold">Upcoming Rewards</h3>
            <Button size="sm" variant="outline" className="flex items-center">
              <CreditCard className="h-4 w-4 mr-2" />
              View All
            </Button>
          </div>
          
          <div className="grid grid-cols-1 gap-4">
            {rewardsData.upcomingRewards.map((reward) => (
              <Card key={reward.id} className="glass-card">
                <CardContent className="p-4">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center">
                      <div className={`w-10 h-10 rounded-full flex items-center justify-center mr-3 bg-${reward.color}-100 text-${reward.color}-800`}>
                        <span className="text-xs font-bold">{reward.logo}</span>
                      </div>
                      <div>
                        <h4 className="font-medium">{reward.name}</h4>
                        <p className="text-xs text-muted-foreground">{reward.program}</p>
                      </div>
                    </div>
                    <Button variant="ghost" size="sm" className="h-8 px-2 text-xs">
                      Details
                    </Button>
                  </div>
                  
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Progress</span>
                      <span>
                        {reward.currentPoints.toLocaleString()} / {reward.pointsNeeded.toLocaleString()} {reward.program === 'Target' ? '$' : ''}
                      </span>
                    </div>
                    <Progress value={reward.progress} className="h-2" />
                    <p className="text-xs text-right text-muted-foreground">
                      {100 - reward.progress}% more to go
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default RewardsOverview;
