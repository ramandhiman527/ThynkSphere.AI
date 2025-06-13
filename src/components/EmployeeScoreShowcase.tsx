
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Brain, Target, Shield, TrendingUp, Sparkles } from 'lucide-react';

const EmployeeScoreShowcase = () => {
  const scoreFactors = [
    { name: 'Work History', weight: 30, score: 85, icon: TrendingUp, color: 'from-[#C68EFD] to-[#E9A5F1]', bgGlow: 'soft' },
    { name: 'Skills Proficiency', weight: 30, score: 92, icon: Target, color: 'from-[#8F87F1] to-[#C68EFD]', bgGlow: 'purple' },
    { name: 'Education', weight: 15, score: 78, icon: Brain, color: 'from-[#E9A5F1] to-[#FED2E2]', bgGlow: 'soft' },
    { name: 'Certifications', weight: 15, score: 88, icon: Shield, color: 'from-[#C68EFD] to-[#FED2E2]', bgGlow: 'purple' },
    { name: 'Resume Quality', weight: 10, score: 95, icon: Sparkles, color: 'from-[#8F87F1] to-[#E9A5F1]', bgGlow: 'soft' }
  ];

  const features = [
    {
      icon: Brain,
      title: 'AI-Driven Matchmaking',
      description: 'Advanced algorithms analyze countless data points to match candidates with opportunities that align perfectly with their skills and career trajectory.',
      gradient: 'from-[#8F87F1] to-[#C68EFD]',
      glow: 'purple'
    },
    {
      icon: Target,
      title: 'Automated Resume Screening',
      description: 'Eliminate unconscious bias with intelligent screening that focuses on relevant skills, achievements, and potential rather than subjective criteria.',
      gradient: 'from-[#C68EFD] to-[#E9A5F1]',
      glow: 'soft'
    },
    {
      icon: Shield,
      title: 'Smart Interview Scheduling',
      description: 'Streamline your hiring process with AI-powered scheduling that considers availability, time zones, and candidate preferences automatically.',
      gradient: 'from-[#E9A5F1] to-[#FED2E2]',
      glow: 'purple'
    }
  ];

  return (
    <section id="features" className="py-16 bg-gradient-to-b from-[#E9A5F1] to-[#FED2E2] overflow-hidden relative">
      {/* Subtle background elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(143,135,241,0.2)_1px,transparent_0)] bg-[size:50px_50px]"></div>
      </div>
      
      <div className="absolute top-10 left-1/4 w-48 h-48 bg-[#8F87F1]/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-10 right-1/4 w-64 h-64 bg-[#C68EFD]/10 rounded-full blur-3xl animate-pulse delay-1000"></div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-8">
            <div className="w-16 h-16 bg-gradient-to-br from-[#8F87F1]/20 to-[#C68EFD]/20 rounded-full flex items-center justify-center animate-bounce backdrop-blur-sm border border-[#8F87F1]/30">
              <div className="w-12 h-12 bg-gradient-to-br from-[#8F87F1] to-[#C68EFD] rounded-full flex items-center justify-center shadow-purple">
                <Brain className="w-6 h-6 text-white" />
              </div>
            </div>
          </div>
          
          <Badge className="mb-6 bg-white/20 text-[#1A1A1A] border-white/30 text-base font-bold px-6 py-3 animate-fade-in backdrop-blur-sm">
            Core Innovation • AI Technology
          </Badge>
          
          <h2 className="text-3xl lg:text-5xl font-black text-white mb-6 leading-tight text-white-shadow">
            How the
            <span className="relative inline-block ml-4">
              <span className="text-white animate-gradient text-white-shadow">Employee</span>
            </span>
            <span className="block text-white font-light text-2xl lg:text-3xl italic mt-2 text-white-shadow">
              Score™ Works
            </span>
          </h2>
          
          <p className="text-lg text-[#1A1A1A] max-w-4xl mx-auto leading-relaxed animate-fade-in font-medium">
            Our proprietary algorithm analyzes multiple factors to create an <strong className="font-black text-[#1A1A1A]">objective, comprehensive score</strong> that represents your professional value.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto mb-12">
          {/* Score Visualization */}
          <div className="relative animate-scale-in">
            <div className="relative w-full max-w-md mx-auto">
              <div className="absolute inset-0 bg-gradient-to-br from-[#8F87F1]/20 to-[#C68EFD]/20 rounded-3xl blur-2xl animate-pulse"></div>
              
              <div className="relative bg-gradient-to-br from-white/95 to-white/90 rounded-3xl shadow-purple p-8 border border-[#8F87F1]/20 backdrop-blur-sm">
                <div className="text-center mb-8">
                  <div className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-[#8F87F1] to-[#C68EFD] mb-3 animate-pulse">750</div>
                  <div className="text-xl font-bold text-[#1A1A1A] mb-1">Employee Score™</div>
                  <div className="text-lg text-[#8F87F1] font-bold">Good</div>
                </div>
                
                <div className="space-y-4">
                  {scoreFactors.map((factor, index) => (
                    <div key={factor.name} className="group">
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center gap-3">
                          <div className={`w-8 h-8 rounded-xl bg-gradient-to-r ${factor.color} flex items-center justify-center shadow-${factor.bgGlow} group-hover:scale-110 transition-all duration-300`}>
                            <factor.icon className="w-4 h-4 text-white" />
                          </div>
                          <div>
                            <div className="font-bold text-[#1A1A1A] text-sm">{factor.name}</div>
                            <div className="text-xs text-[#8F87F1]">{factor.weight}% weight</div>
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="font-black text-[#1A1A1A] text-lg">{factor.score}</div>
                        </div>
                      </div>
                      <div className="w-full h-2 bg-[#E9A5F1]/30 rounded-full overflow-hidden">
                        <div 
                          className={`h-2 rounded-full bg-gradient-to-r ${factor.color} transition-all duration-1000 shadow-sm`}
                          style={{ width: `${factor.score}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Features Grid */}
          <div className="space-y-5">
            {features.map((feature, index) => (
              <Card 
                key={index} 
                className="relative overflow-hidden border-0 shadow-soft hover:shadow-purple transition-all duration-500 hover:-translate-y-1 bg-gradient-to-br from-white/90 to-white/80 rounded-2xl group backdrop-blur-sm border border-white/30"
              >
                <div className={`absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500 bg-gradient-to-br ${feature.gradient} blur-xl`}></div>
                
                <CardContent className="p-5 relative z-10">
                  <div className="flex items-center gap-4 mb-3">
                    <div className={`w-10 h-10 bg-gradient-to-br ${feature.gradient} rounded-2xl flex items-center justify-center shadow-${feature.glow} group-hover:scale-110 transition-all duration-300`}>
                      <feature.icon className="w-5 h-5 text-white" />
                    </div>
                    <h3 className="text-lg font-black text-white group-hover:text-white transition-all duration-300 text-white-shadow">
                      {feature.title}
                    </h3>
                  </div>
                  <p className="text-[#1A1A1A] text-sm leading-relaxed font-medium">
                    {feature.description}
                  </p>
                </CardContent>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom accent */}
        <div className="flex items-center justify-center">
          <div className="flex items-center gap-6 text-sm text-[#1A1A1A] animate-fade-in">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-[#8F87F1] rounded-full animate-pulse"></div>
              <span className="font-semibold">Transparent Algorithm</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-[#C68EFD] rounded-full animate-pulse"></div>
              <span className="font-semibold">Fair & Objective</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-[#E9A5F1] rounded-full animate-pulse"></div>
              <span className="font-semibold">AI-Powered Precision</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EmployeeScoreShowcase;
