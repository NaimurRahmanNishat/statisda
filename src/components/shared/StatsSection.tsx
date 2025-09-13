"use client";

import { Users } from 'lucide-react';

const StatsSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </h2>
            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus odio pellentesque pellentesque a. Amet ut lobortis pellentesque a, luctus malesuada.
              </p>
              <p>
                Feugiat sed enim vitae viverra cras tristique eu. Pellentesque bibendum volutpat metus dictum.
              </p>
            </div>
          </div>
          
          {/* Right Content - Stats */}
          <div className="flex justify-center lg:justify-end">
            <div className="text-center">
              <div className="flex items-center justify-center mb-4">
                <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center">
                  <Users size={32} className="text-gray-600" />
                </div>
              </div>
              <div className="text-4xl lg:text-5xl font-bold text-gray-900 mb-2">
                80,000K
              </div>
              <p className="text-gray-600">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;