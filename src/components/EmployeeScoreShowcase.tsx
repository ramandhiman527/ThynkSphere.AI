
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Brain, Target, Shield, TrendingUp, Sparkles } from 'lucide-react';

const EmployeeScoreShowcase = () => {
  const scoreFactors = [
    { name: 'Work History', weight: 30, score: 85, icon: TrendingUp, color: 'from-[#ADBC9F] to-[#436850]', bgGlow: 'soft' },
    { name: 'Skills Proficiency', weight: 30, score: 92, icon: Target, color: 'from-[#436850] to-[#ADBC9F]', bgGlow: 'earth' },
    { name: 'Education', weight: 15, score: 78, icon: Brain, color: 'from-[#FBFADA] to-[#ADBC9F]', bgGlow: 'soft' },
    { name: 'Certifications', weight: 15, score: 88, icon: Shield, color: 'from-[#ADBC9F] to-[#FBFADA]', bgGlow: 'earth' },
    { name: 'Resume Quality', weight: 10, score: 95, icon: Sparkles, color: 'from-[#436850] to-[#FBFADA]', bgGlow: 'soft' }
  ];

  const features = [
    {
      icon: Brain,
      title: 'AI-Driven Matchmaking',
      description: 'Advanced algorithms analyze countless data points to match candidates with opportunities that align perfectly with their skills and career trajectory.',
      gradient: 'from-[#436850] to-[#ADBC9F]',
      glow: 'earth'
    },
    {
      icon: Target,
      title: 'Automated Resume Screening',
      description: 'Eliminate unconscious bias with intelligent screening that focuses on relevant skills, achievements, and potential rather than subjective criteria.',
      gradient: 'from-[#ADBC9F] to-[#FBFADA]',
      glow: 'soft'
    },
    {
      icon: Shield,
      title: 'Smart Interview Scheduling',
      description: 'Streamline your hiring process with AI-powered scheduling that considers availability, time zones, and candidate preferences automatically.',
      gradient: 'from-[#FBFADA] to-[#ADBC9F]',
      glow: 'earth'
    }
  ];

  return (
    <section id="features" className="py-20 bg-gradient-to-b from-[#ADBC9F] via-[#ADBC9F] to-[#FBFADA] overflow-hidden relative">
      {/* Subtle background elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(18,55,42,0.2)_1px,transparent_0)] bg-[size:50px_50px]"></div>
      </div>
      
      <div className="absolute top-10 left-1/4 w-48 h-48 bg-[#436850]/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-10 right-1/4 w-64 h-64 bg-[#12372A]/5 rounded-full blur-3xl animate-pulse delay-1000"></div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-8">
            <div className="w-20 h-20 bg-gradient-to-br from-[#436850]/20 to-[#12372A]/20 rounded-full flex items-center justify-center animate-bounce backdrop-blur-sm border border-[#436850]/30">
              <div className="w-14 h-14 bg-gradient-to-br from-[#436850] to-[#12372A] rounded-full flex items-center justify-center shadow-earth">
                <Brain className="w-7 h-7 text-[#FBFADA]" />
              </div>
            </div>
          </div>
          
          <Badge className="mb-6 bg-[#436850]/20 text-[#12372A] border-[#436850]/30 text-base font-bold px-6 py-3 animate-fade-in backdrop-blur-sm">
            Core Innovation • AI Technology
          </Badge>
          
          <h2 className="text-4xl lg:text-6xl font-black text-[#12372A] mb-6 leading-tight">
            How the
            <span className="relative inline-block ml-4">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#436850] to-[#12372A] animate-gradient bg-[length:200%_200%]">Employee</span>
            </span>
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#436850] to-[#ADBC9F] font-light text-3xl lg:text-4xl italic mt-2">
              Score™ Works
            </span>
          </h2>
          
          <p className="text-lg lg:text-xl text-[#12372A]/80 max-w-4xl mx-auto leading-relaxed animate-fade-in font-medium">
            Our proprietary algorithm analyzes multiple factors to create an <strong className="font-black text-[#436850]">objective, comprehensive score</strong> that represents your professional value.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto mb-16">
          {/* Score Visualization */}
          <div className="relative animate-scale-in">
            <div className="relative w-full max-w-md mx-auto">
              <div className="absolute inset-0 bg-gradient-to-br from-[#436850]/20 to-[#12372A]/20 rounded-3xl blur-2xl animate-pulse"></div>
              
              <div className="relative bg-gradient-to-br from-[#FBFADA]/95 to-[#ADBC9F]/95 rounded-3xl shadow-earth p-8 border border-[#436850]/20 backdrop-blur-sm">
                <div className="text-center mb-8">
                  <div className="text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-[#436850] to-[#12372A] mb-3 animate-pulse">750</div>
                  <div className="text-xl font-bold text-[#12372A] mb-1">Employee Score™</div>
                  <div className="text-lg text-[#436850] font-bold">Good</div>
                </div>
                
                <div className="space-y-5">
                  {scoreFactors.map((factor, index) => (
                    <div key={factor.name} className="group">
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center gap-3">
                          <div className={`w-10 h-10 rounded-xl bg-gradient-to-r ${factor.color} flex items-center justify-center shadow-${factor.bgGlow} group-hover:scale-110 transition-all duration-300`}>
                            <factor.icon className="w-5 h-5 text-[#FBFADA]" />
                          </div>
                          <div>
                            <div className="font-bold text-[#12372A] text-base">{factor.name}</div>
                            <div className="text-sm text-[#436850]">{factor.weight}% weight</div>
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="font-black text-[#12372A] text-xl">{factor.score}</div>
                        </div>
                      </div>
                      <div className="w-full h-2 bg-[#ADBC9F]/30 rounded-full overflow-hidden">
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
          <div className="space-y-6">
            {features.map((feature, index) => (
              <Card 
                key={index} 
                className="relative overflow-hidden border-0 shadow-soft hover:shadow-earth transition-all duration-500 hover:-translate-y-1 bg-gradient-to-br from-[#FBFADA]/90 to-[#ADBC9F]/30 rounded-2xl group backdrop-blur-sm border border-[#436850]/10"
              >
                <div className={`absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500 bg-gradient-to-br ${feature.gradient} blur-xl`}></div>
                
                <CardContent className="p-6 relative z-10">
                  <div className="flex items-center gap-5 mb-4">
                    <div className={`w-12 h-12 bg-gradient-to-br ${feature.gradient} rounded-2xl flex items-center justify-center shadow-${feature.glow} group-hover:scale-110 transition-all duration-300`}>
                      <feature.icon className="w-6 h-6 text-[#FBFADA]" />
                    </div>
                    <h3 className="text-xl font-black text-[#12372A] group-hover:text-[#436850] transition-all duration-300">
                      {feature.title}
                    </h3>
                  </div>
                  <p className="text-[#12372A]/80 text-base leading-relaxed font-medium">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Bottom accent */}
        <div className="flex items-center justify-center">
          <div className="flex items-center gap-6 text-base text-[#12372A]/70 animate-fade-in">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-[#436850] rounded-full animate-pulse"></div>
              <span className="font-semibold">Transparent Algorithm</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-[#ADBC9F] rounded-full animate-pulse"></div>
              <span className="font-semibold">Fair & Objective</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-[#12372A] rounded-full animate-pulse"></div>
              <span className="font-semibold">AI-Powered Precision</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EmployeeScoreShowcase;
