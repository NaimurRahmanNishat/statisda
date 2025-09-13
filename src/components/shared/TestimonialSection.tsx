"use client";

import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const TestimonialSection = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          {/* Left Content */}
          <div>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              Interesting option from customer
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus odio pellentesque pellentesque a. Amet
            </p>
          </div>
          
          {/* Right Content - Video Testimonial */}
          <div className="relative">
            <Card className="bg-gradient-to-br from-blue-900 to-purple-900 border-0 overflow-hidden">
              <CardContent className="p-8">
                <div className="flex items-start space-x-6">
                  {/* Video Preview */}
                  <div className="relative flex-shrink-0">
                    <div className="w-48 h-36 bg-gray-800 rounded-lg overflow-hidden relative">
                      {/* Placeholder for video thumbnail */}
                      <div className="absolute inset-0 bg-gradient-to-br from-green-400 to-green-600 flex items-center justify-center">
                        <div className="w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
                          <div className="w-0 h-0 border-l-[12px] border-l-white border-t-[8px] border-t-transparent border-b-[8px] border-b-transparent ml-1"></div>
                        </div>
                      </div>
                      
                      {/* Person in video */}
                      <div className="absolute bottom-2 left-2 right-2">
                        <div className="bg-black bg-opacity-50 rounded p-2 text-white text-xs">
                          <div className="flex items-center space-x-2">
                            <div className="w-6 h-6 bg-gray-400 rounded-full"></div>
                            <span>Customer Review</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Testimonial Content */}
                  <div className="flex-1">
                    <Badge className="bg-blue-500 text-white hover:bg-blue-600 mb-4">
                      Standard
                    </Badge>
                    
                    <p className="text-blue-100 text-sm mb-6 leading-relaxed">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus odio pellentesque pellentesque a. Amet
                    </p>
                    
                    <div className="mb-6">
                      <span className="text-3xl font-bold text-white">$15</span>
                      <span className="text-blue-200 ml-2">/Month</span>
                    </div>
                    
                    <Button className="bg-blue-500 hover:bg-blue-600 text-white px-8">
                      Choose
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;