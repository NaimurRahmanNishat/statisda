"use client";

import { Button } from '@/components/ui/button';
import { ChevronRight } from 'lucide-react';
import DashboardPreview from './DashboardPreview';

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-blue-800 via-blue-900 to-purple-900 min-h-screen flex items-center">
      {/* Background decorative elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-yellow-400 rounded-full opacity-20 animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-24 h-24 bg-yellow-400 rounded-full opacity-30"></div>
      <div className="absolute top-1/3 left-1/4 w-16 h-16 bg-orange-400 rounded-full opacity-25"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left">
            {/* Top Banner */}
            <div className="inline-flex items-center bg-orange-500 text-white px-4 py-2 rounded-full text-sm font-medium mb-8 hover:bg-orange-600 transition-colors cursor-pointer">
              Get Your Free Consultation Now
              <ChevronRight size={16} className="ml-2" />
            </div>

            {/* Main Heading */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              Manage your team{' '}
              <span className="block">easily with task man</span>
            </h1>

            {/* Description */}
            <p className="text-lg sm:text-xl text-blue-100 mb-8 max-w-2xl mx-auto lg:mx-0">
              Statisda is a school management solution that offers a personalized portal to each type of user.
            </p>

            {/* CTA Button */}
            <Button 
              size="lg" 
              className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-3 text-lg font-medium rounded-lg transition-all duration-200 hover:scale-105 shadow-lg"
            >
              Get Started
            </Button>
          </div>

          {/* Right Content - Dashboard Preview */}
          <div className="relative">
            <DashboardPreview />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;