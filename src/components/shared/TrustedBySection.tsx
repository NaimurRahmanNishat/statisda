"use client";

import { 
  BarChart3,
  Users,
  Calendar,
  Settings
} from 'lucide-react';

const TrustedBySection = () => {
  const companyLogos = [
    { name: 'Company 1', icon: BarChart3 },
    { name: 'Company 2', icon: Users },
    { name: 'Company 3', icon: Calendar },
    { name: 'Company 4', icon: Settings },
    { name: 'Company 5', icon: BarChart3 },
    { name: 'Company 6', icon: Users }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold text-center text-gray-900 mb-12">
          Trusted by company like
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center justify-items-center">
          {companyLogos.map((company, index) => {
            const IconComponent = company.icon;
            return (
              <div 
                key={index}
                className="flex items-center justify-center w-24 h-16 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow cursor-pointer"
              >
                <IconComponent size={32} className="text-gray-400" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default TrustedBySection;