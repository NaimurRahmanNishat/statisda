"use client";

import { Card, CardContent } from '@/components/ui/card';

const TaskCreationSection = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              Create your task
            </h2>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Statisda is a school management solution that offers a personalized portal to each type of user, managing that your institution is always aligned with standards.
            </p>
            
            <div className="space-y-4 mb-8">
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                <span className="text-gray-700">Create your task</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                <span className="text-gray-700">Create your task</span>
              </div>
            </div>
            
            <Card className="bg-blue-600 border-0 text-white">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-3">
                  Manage the task easily and clearly
                </h3>
                <p className="text-blue-100 text-sm leading-relaxed">
                  Statisda is a school management solution that offers a personalized portal to each type of user, managing that your institution is always aligned with standards.
                </p>
              </CardContent>
            </Card>
          </div>
          
          {/* Right Content - Mobile App Preview */}
          <div className="relative flex justify-center">
            <div className="relative">
              {/* Hand holding phone mockup */}
              <div className="relative">
                <div className="w-80 h-96 bg-gradient-to-br from-amber-100 to-amber-200 rounded-3xl flex items-end justify-center p-8">
                  {/* Phone mockup */}
                  <div className="w-64 h-80 bg-black rounded-3xl p-2 shadow-2xl">
                    <div className="w-full h-full bg-white rounded-2xl overflow-hidden">
                      {/* Phone screen content */}
                      <div className="p-4 space-y-4">
                        <div className="text-center">
                          <h4 className="text-lg font-semibold text-gray-900 mb-2">
                            Create your task
                          </h4>
                          <p className="text-sm text-gray-600 mb-4">
                            Statisda is a school management solution that offers a personalized portal to each type of user.
                          </p>
                        </div>
                        
                        <div className="space-y-3">
                          <div className="flex items-center space-x-2">
                            <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                            <span className="text-sm text-gray-700">Create your task</span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                            <span className="text-sm text-gray-700">Create your task</span>
                          </div>
                        </div>
                        
                        <div className="bg-blue-600 text-white p-4 rounded-lg">
                          <h5 className="font-semibold text-sm mb-2">
                            Manage the task easily and clearly
                          </h5>
                          <p className="text-xs text-blue-100">
                            Statisda is a school management solution that offers a personalized portal.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TaskCreationSection;