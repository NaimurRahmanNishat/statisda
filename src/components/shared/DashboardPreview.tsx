"use client";

import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Plus } from 'lucide-react';

const DashboardPreview = () => {
  const projects = [
    {
      name: 'Restricted Information 14.6',
      progress: 75,
      status: 'In Progress',
      team: ['AB', 'CD', 'EF', 'GH'],
      priority: 'high'
    },
    {
      name: 'Direct Multiservice Template',
      progress: 45,
      status: 'Planning',
      team: ['AB', 'CD', 'EF'],
      priority: 'medium'
    },
    {
      name: 'Comprendra blend',
      progress: 90,
      status: 'Review',
      team: ['AB', 'CD'],
      priority: 'low'
    }
  ];

  return (
    <Card className="w-full max-w-2xl mx-auto bg-white shadow-2xl rounded-xl overflow-hidden">
      {/* Dashboard Header */}
      <div className="bg-gray-50 border-b border-gray-200 p-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-2">
              <div className="w-6 h-6 bg-green-500 rounded flex items-center justify-center">
                <span className="text-white text-xs font-bold">B</span>
              </div>
              <span className="font-semibold text-gray-900">Boxboard</span>
            </div>
            <span className="text-gray-600">Projects</span>
          </div>
          <div className="flex items-center space-x-2">
            <Button size="sm" className="bg-blue-600 hover:bg-blue-700 text-white">
              <Plus size={16} className="mr-1" />
              Add Project
            </Button>
            <Avatar className="w-8 h-8">
              <AvatarFallback>U</AvatarFallback>
            </Avatar>
          </div>
        </div>
      </div>

      {/* Dashboard Content */}
      <CardContent className="p-6">
        <div className="space-y-6">
          {/* Filter tabs */}
          <div className="flex items-center space-x-6 text-sm">
            <span className="text-gray-500">All Projects</span>
            <span className="text-gray-500">Due Time</span>
          </div>

          {/* Projects List */}
          <div className="space-y-4">
            {projects.map((project, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-4 hover:bg-gray-100 transition-colors">
                <div className="flex items-center justify-between mb-3">
                  <h4 className="font-medium text-gray-900">{project.name}</h4>
                  <Badge 
                    variant={
                      project.priority === 'high' ? 'destructive' :
                      project.priority === 'medium' ? 'default' : 'secondary'
                    }
                  >
                    {project.status}
                  </Badge>
                </div>
                <Progress value={project.progress} className="mb-3" />
                <div className="flex items-center justify-between">
                  <div className="flex -space-x-2">
                    {project.team.map((member, memberIndex) => (
                      <Avatar key={memberIndex} className="w-6 h-6 border-2 border-white">
                        <AvatarFallback className="text-xs">{member}</AvatarFallback>
                      </Avatar>
                    ))}
                  </div>
                  <span className="text-sm text-gray-500">{project.progress}%</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default DashboardPreview;