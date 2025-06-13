
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Brain, Target, Shield, TrendingUp, Sparkles } from 'lucide-react';

const EmployeeScoreShowcase = () => {
  const scoreFactors = [
    { name: 'Work History', weight: 30, score: 85, icon: TrendingUp, color: 'from-emerald-400 to-teal-500', bgGlow: 'emerald' },
    { name: 'Skills Proficiency', weight: 30, score: 92, icon: Target, color: 'from-blue-400 to-cyan-500', bgGlow: 'blue' },
    { name: 'Education', weight: 15, score: 78, icon: Brain, color: 'from-purple-400 to-indigo-500', bgGlow: 'purple' },
    { name: 'Certifications', weight: 15, score: 88, icon: Shield, color: 'from-orange-400 to-pink-500', bgGlow: 'orange' },
    { name: 'Resume Quality', weight: 10, score: 95, icon: Sparkles, color: 'from-cyan-400 to-blue-500', bgGlow: 'cyan' }
  ];

  const features = [
    {
      icon: Brain,
      title: 'AI-Driven Matchmaking',
      description: 'Advanced algorithms analyze countless data points to match candidates with opportunities that align perfectly with their skills and career trajectory.',
      gradient: 'from-[#9FB3DF] to-[#9EC6F3]',
      glow: 'cyan'
    },
    {
      icon: Target,
      title: 'Automated Resume Screening',
      description: 'Eliminate unconscious bias with intelligent screening that focuses on relevant skills, achievements, and potential rather than subjective criteria.',
      gradient: 'from-[#9EC6F3] to-[#BDDDE4]',
      glow: 'blue'
    },
    {
      icon: Shield,
      title: 'Smart Interview Scheduling',
      description: 'Streamline your hiring process with AI-powered scheduling that considers availability, time zones, and candidate preferences automatically.',
      gradient: 'from-[#BDDDE4] to-[#9FB3DF]',
      glow: 'purple'
    }
  ];

  return (
    <section id="features" className="py-32 bg-gradient-to-br from-slate-700 via-slate-600 to-slate-500 overflow-hidden relative">
      {/* Tech background elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.15)_1px,transparent_0)] bg-[size:40px_40px]"></div>
      </div>
      
      {/* Floating gradient orbs */}
      <div className="absolute top-10 left-1/4 w-64 h-64 bg-gradient-to-br from-[#9FB3DF]/20 to-[#9EC6F3]/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-10 right-1/4 w-80 h-80 bg-gradient-to-br from-[#9EC6F3]/15 to-[#BDDDE4]/15 rounded-full blur-3xl animate-pulse delay-1000"></div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="flex items-center justify-center mb-10">
            <div className="w-24 h-24 bg-gradient-to-br from-slate-600/50 to-slate-700/50 rounded-full flex items-center justify-center animate-bounce backdrop-blur-sm border border-[#9FB3DF]/30">
              <div className="w-16 h-16 bg-gradient-to-br from-[#9FB3DF] to-[#9EC6F3] rounded-full flex items-center justify-center shadow-2xl">
                <Brain className="w-8 h-8 text-white" />
              </div>
            </div>
          </div>
          
          <Badge className="mb-8 bg-gradient-to-r from-[#9FB3DF]/20 to-[#9EC6F3]/20 text-cyan-300 border-cyan-400/30 text-lg font-bold px-8 py-4 animate-fade-in backdrop-blur-sm">
            Core Innovation • AI Technology
          </Badge>
          
          <h2 className="text-6xl lg:text-8xl font-black text-white mb-8 leading-tight">
            How the
            <span className="relative inline-block ml-6">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-pink-500 to-purple-600 animate-gradient bg-[length:200%_200%]">Employee</span>
              <div className="absolute -top-4 -right-8 w-16 h-16 bg-gradient-to-br from-cyan-400/20 to-purple-500/20 rounded-full opacity-60 animate-pulse"></div>
            </span>
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#9FB3DF] via-[#9EC6F3] to-[#BDDDE4] font-light text-5xl lg:text-6xl italic mt-4">
              Score™ Works
            </span>
          </h2>
          
          <p className="text-2xl lg:text-3xl text-slate-200 max-w-5xl mx-auto leading-relaxed animate-fade-in font-light">
            Our proprietary algorithm analyzes multiple factors to create an <strong className="font-black text-transparent bg-clip-text bg-gradient-to-r from-[#9FB3DF] to-[#9EC6F3]">objective, comprehensive score</strong> that represents your professional value.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center max-w-7xl mx-auto mb-20">
          {/* Enhanced Score Visualization */}
          <div className="relative animate-scale-in">
            <div className="relative w-full max-w-lg mx-auto">
              {/* Outer glow ring */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#9FB3DF]/30 to-[#9EC6F3]/30 rounded-3xl blur-2xl animate-pulse"></div>
              
              {/* Main score card */}
              <div className="relative bg-gradient-to-br from-slate-800/90 to-slate-900/90 rounded-3xl shadow-2xl p-10 border border-[#9FB3DF]/30 backdrop-blur-sm">
                <div className="text-center mb-10">
                  <div className="text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-[#9FB3DF] via-cyan-400 to-[#9EC6F3] mb-4 animate-pulse">750</div>
                  <div className="text-2xl font-bold text-white mb-2">Employee Score™</div>
                  <div className="text-xl text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-500 font-bold">Good</div>
                </div>
                
                <div className="space-y-6">
                  {scoreFactors.map((factor, index) => (
                    <div key={factor.name} className="group">
                      <div className="flex items-center justify-between mb-3">
                        <div className="flex items-center gap-4">
                          <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${factor.color} flex items-center justify-center shadow-lg group-hover:shadow-${factor.bgGlow}-500/25 transition-all duration-300 group-hover:scale-110`}>
                            <factor.icon className="w-6 h-6 text-white" />
                          </div>
                          <div>
                            <div className="font-bold text-white text-lg">{factor.name}</div>
                            <div className="text-sm text-slate-400">{factor.weight}% weight</div>
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="font-black text-white text-2xl">{factor.score}</div>
                        </div>
                      </div>
                      <div className="w-full h-3 bg-slate-700 rounded-full overflow-hidden">
                        <div 
                          className={`h-3 rounded-full bg-gradient-to-r ${factor.color} transition-all duration-1000 shadow-lg`}
                          style={{ width: `${factor.score}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Enhanced Features Grid */}
          <div className="space-y-8">
            {features.map((feature, index) => (
              <Card 
                key={index} 
                className="relative overflow-hidden border-0 shadow-2xl hover:shadow-cyan-500/25 transition-all duration-500 hover:-translate-y-2 bg-gradient-to-br from-slate-800/90 to-slate-900/90 rounded-2xl group backdrop-blur-sm border border-slate-600/50"
              >
                {/* Glow effect */}
                <div className={`absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500 bg-gradient-to-br ${feature.gradient} blur-xl`}></div>
                
                <CardContent className="p-8 relative z-10">
                  <div className="flex items-center gap-6 mb-6">
                    <div className={`w-16 h-16 bg-gradient-to-br ${feature.gradient} rounded-2xl flex items-center justify-center shadow-2xl group-hover:shadow-${feature.glow}-500/25 transition-all duration-300 group-hover:scale-110`}>
                      <feature.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-black text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-cyan-300 transition-all duration-300">
                      {feature.title}
                    </h3>
                  </div>
                  <p className="text-slate-300 text-lg leading-relaxed font-medium">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Bottom accent */}
        <div className="flex items-center justify-center">
          <div className="flex items-center gap-8 text-lg text-slate-300 animate-fade-in">
            <div className="flex items-center gap-3">
              <div className="w-4 h-4 bg-gradient-to-r from-[#9FB3DF] to-[#9EC6F3] rounded-full animate-pulse"></div>
              <span className="font-semibold">Transparent Algorithm</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-4 h-4 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full animate-pulse"></div>
              <span className="font-semibold">Fair & Objective</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-4 h-4 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full animate-pulse"></div>
              <span className="font-semibold">AI-Powered Precision</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EmployeeScoreShowcase;
