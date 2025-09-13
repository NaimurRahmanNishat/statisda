"use client";

import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Check } from 'lucide-react';

const PricingPlansSection = () => {
  const plans = [
    {
      name: 'Standard',
      price: 15,
      period: 'Month',
      features: [
        'For 1 - 10 people in a team',
        'For 1 - 10 people in a team',
        'For 1 - 10 people in a team'
      ],
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus odio pellentesque pellentesque a. Amet',
      isPopular: false
    },
    {
      name: 'Standard',
      price: 15,
      period: 'Month',
      features: [
        'For 1 - 10 people in a team',
        'For 1 - 10 people in a team',
        'For 1 - 10 people in a team'
      ],
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus odio pellentesque pellentesque a. Amet',
      isPopular: true
    },
    {
      name: 'Standard',
      price: 15,
      period: 'Month',
      features: [
        'For 1 - 10 people in a team',
        'For 1 - 10 people in a team',
        'For 1 - 10 people in a team'
      ],
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus odio pellentesque pellentesque a. Amet',
      isPopular: false
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <Card 
              key={index} 
              className={`relative overflow-hidden transition-all duration-300 hover:shadow-xl ${
                plan.isPopular 
                  ? 'bg-gradient-to-br from-blue-900 to-purple-900 text-white border-0 scale-105' 
                  : 'bg-white border border-gray-200 hover:border-blue-300'
              }`}
            >
              {plan.isPopular && (
                <div className="absolute top-0 left-0 right-0">
                  <div className="bg-blue-500 text-white text-center py-2 text-sm font-medium">
                    Most Popular
                  </div>
                </div>
              )}
              
              <CardContent className={`p-8 ${plan.isPopular ? 'pt-12' : ''}`}>
                <div className="text-center mb-6">
                  <Badge 
                    className={`mb-4 ${
                      plan.isPopular 
                        ? 'bg-blue-500 text-white hover:bg-blue-600' 
                        : 'bg-blue-100 text-blue-800 hover:bg-blue-200'
                    }`}
                  >
                    {plan.name}
                  </Badge>
                  
                  <p className={`text-sm mb-6 leading-relaxed ${
                    plan.isPopular ? 'text-blue-100' : 'text-gray-600'
                  }`}>
                    {plan.description}
                  </p>
                  
                  <div className="mb-6">
                    <span className="text-4xl font-bold">${plan.price}</span>
                    <span className={`text-lg ml-2 ${
                      plan.isPopular ? 'text-blue-200' : 'text-gray-500'
                    }`}>
                      /{plan.period}
                    </span>
                  </div>
                </div>
                
                <div className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center space-x-3">
                      <Check 
                        size={16} 
                        className={`${
                          plan.isPopular ? 'text-blue-300' : 'text-green-500'
                        }`} 
                      />
                      <span className={`text-sm ${
                        plan.isPopular ? 'text-blue-100' : 'text-gray-700'
                      }`}>
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>
                
                <Button 
                  className={`w-full py-3 font-medium transition-all duration-200 ${
                    plan.isPopular
                      ? 'bg-blue-500 hover:bg-blue-600 text-white'
                      : 'bg-blue-600 hover:bg-blue-700 text-white'
                  }`}
                >
                  Choose
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingPlansSection;