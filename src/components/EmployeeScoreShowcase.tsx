
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Brain, Target, Shield, TrendingUp } from 'lucide-react';

const EmployeeScoreShowcase = () => {
  const scoreFactors = [
    { name: 'Work History', weight: 30, score: 85, icon: TrendingUp, color: '#9FB3DF' },
    { name: 'Skills Proficiency', weight: 30, score: 92, icon: Target, color: '#9EC6F3' },
    { name: 'Education', weight: 15, score: 78, icon: Brain, color: '#BDDDE4' },
    { name: 'Certifications', weight: 15, score: 88, icon: Shield, color: '#9FB3DF' },
    { name: 'Resume Quality', weight: 10, score: 95, icon: Target, color: '#9EC6F3' }
  ];

  return (
    <section id="features" className="py-20 bg-gradient-to-br from-white to-[#FFF1D5]/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-[#9FB3DF]/20 text-[#9FB3DF] border-[#9FB3DF]/30">
            Core Innovation
          </Badge>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-6">
            How the <span className="text-[#9FB3DF]">Employee Score™</span> Works
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our proprietary algorithm analyzes multiple factors to create an objective, 
            comprehensive score that represents your professional value.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          {/* Score Visualization */}
          <div className="relative">
            <div className="bg-white rounded-2xl shadow-2xl p-8 border border-[#9FB3DF]/10">
              <div className="text-center mb-8">
                <div className="text-6xl font-bold text-[#9FB3DF] mb-2">750</div>
                <div className="text-lg text-gray-600">Employee Score™</div>
                <div className="text-sm text-[#9EC6F3] font-medium">Good</div>
              </div>
              
              <div className="space-y-4">
                {scoreFactors.map((factor, index) => (
                  <div key={factor.name} className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div 
                        className="w-8 h-8 rounded-lg flex items-center justify-center"
                        style={{ backgroundColor: `${factor.color}20` }}
                      >
                        <factor.icon 
                          className="w-4 h-4" 
                          style={{ color: factor.color }}
                        />
                      </div>
                      <div>
                        <div className="font-medium text-gray-800">{factor.name}</div>
                        <div className="text-xs text-gray-500">{factor.weight}% weight</div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="font-bold text-gray-800">{factor.score}</div>
                      <div className="w-16 h-2 bg-gray-200 rounded-full">
                        <div 
                          className="h-2 rounded-full transition-all duration-1000"
                          style={{ 
                            width: `${factor.score}%`,
                            backgroundColor: factor.color 
                          }}
                        ></div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Features Grid */}
          <div className="space-y-6">
            <Card className="border-[#9FB3DF]/20 hover:border-[#9FB3DF]/40 transition-all duration-300 hover:shadow-lg">
              <CardContent className="p-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#9FB3DF] to-[#9EC6F3] rounded-xl flex items-center justify-center">
                    <Brain className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-800">AI-Driven Matchmaking</h3>
                </div>
                <p className="text-gray-600">
                  Our advanced AI algorithms analyze countless data points to match candidates 
                  with opportunities that align with their skills, experience, and career goals.
                </p>
              </CardContent>
            </Card>

            <Card className="border-[#9EC6F3]/20 hover:border-[#9EC6F3]/40 transition-all duration-300 hover:shadow-lg">
              <CardContent className="p-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#9EC6F3] to-[#BDDDE4] rounded-xl flex items-center justify-center">
                    <Target className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-800">Automated Resume Screening</h3>
                </div>
                <p className="text-gray-600">
                  Eliminate bias and save time with our intelligent resume screening that 
                  focuses on relevant skills and achievements rather than subjective criteria.
                </p>
              </CardContent>
            </Card>

            <Card className="border-[#BDDDE4]/20 hover:border-[#BDDDE4]/40 transition-all duration-300 hover:shadow-lg">
              <CardContent className="p-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#BDDDE4] to-[#9FB3DF] rounded-xl flex items-center justify-center">
                    <Shield className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-800">Smart Interview Scheduling</h3>
                </div>
                <p className="text-gray-600">
                  Streamline your hiring process with intelligent scheduling that considers 
                  availability, time zones, and candidate preferences automatically.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EmployeeScoreShowcase;
