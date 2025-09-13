"use client";

import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Calendar } from 'lucide-react';

const FeaturesSection = () => {
  const integrationCards = [
    {
      title: 'Slack integration',
      description: 'Statisda is a school management solution that offers a personalized portal to each type of user, managing that your institution is always aligned with standards.',
      status: 'Development',
      date: '7 Feb 2023',
      avatars: ['JD', 'SM']
    },
    {
      title: 'Slack integration',
      description: 'Statisda is a school management solution that offers a personalized portal to each type of user, managing that your institution is always aligned with standards.',
      status: 'Development',
      date: '7 Feb 2023',
      avatars: ['AB', 'CD']
    },
    {
      title: 'Slack integration',
      description: 'Statisda is a school management solution that offers a personalized portal to each type of user, managing that your institution is always aligned with standards.',
      status: 'Development',
      date: '7 Feb 2023',
      avatars: ['EF', 'GH']
    },
    {
      title: 'Slack integration',
      description: 'Statisda is a school management solution that offers a personalized portal to each type of user, managing that your institution is always aligned with standards.',
      status: 'Development',
      date: '7 Feb 2023',
      avatars: ['IJ', 'KL']
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {integrationCards.map((card, index) => (
            <Card key={index} className="bg-white border border-gray-200 hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6">
                <div className="mb-4">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">
                    {card.title}
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed mb-4">
                    {card.description}
                  </p>
                </div>
                
                <div className="flex items-center justify-between mb-4">
                  <Badge className="bg-orange-100 text-orange-800 hover:bg-orange-200">
                    {card.status}
                  </Badge>
                  <div className="flex -space-x-2">
                    {card.avatars.map((avatar, avatarIndex) => (
                      <Avatar key={avatarIndex} className="w-6 h-6 border-2 border-white">
                        <AvatarFallback className="text-xs bg-blue-500 text-white">
                          {avatar}
                        </AvatarFallback>
                      </Avatar>
                    ))}
                  </div>
                </div>
                
                <div className="flex items-center text-sm text-gray-500">
                  <Calendar size={14} className="mr-2" />
                  {card.date}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;