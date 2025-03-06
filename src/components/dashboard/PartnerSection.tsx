
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

interface Partner {
  name: string;
  logo: string;
  category: string;
}

const PartnerSection: React.FC = () => {
  // Example partners - in a real app these would come from an API
  const partners: Partner[] = [
    {
      name: 'Starbucks',
      logo: '🌟', // In a real app, use actual image URLs
      category: 'Food & Drink'
    },
    {
      name: 'Delta Airlines',
      logo: '✈️',
      category: 'Travel'
    },
    {
      name: 'Target',
      logo: '🎯',
      category: 'Retail'
    },
    {
      name: 'Amazon',
      logo: '📦',
      category: 'Online Shopping'
    },
    {
      name: 'Best Buy',
      logo: '🔌',
      category: 'Electronics'
    },
    {
      name: 'Marriott',
      logo: '🏨',
      category: 'Hotels'
    }
  ];

  const categories = Array.from(new Set(partners.map(partner => partner.category)));

  return (
    <div className="my-10">
      <h2 className="text-2xl font-bold mb-6">Our Partners</h2>
      
      {categories.map(category => (
        <div key={category} className="mb-8">
          <h3 className="text-lg font-semibold mb-4 text-primary">{category}</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {partners
              .filter(partner => partner.category === category)
              .map(partner => (
                <Card key={partner.name} className="frosted-glass card-hover cursor-pointer">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg flex items-center">
                      <span className="text-2xl mr-2">{partner.logo}</span>
                      {partner.name}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      Connect your {partner.name} account to track rewards
                    </p>
                    <div className="w-full mt-3">
                      <div className="h-2 bg-primary/20 rounded-full">
                        <div 
                          className="h-2 bg-primary rounded-full" 
                          style={{ width: `${Math.floor(Math.random() * 100)}%` }}
                        ></div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default PartnerSection;
