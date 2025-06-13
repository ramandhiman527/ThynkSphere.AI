
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { TrendingUp, Clock, Users, CheckCircle, Target, Zap } from 'lucide-react';

const ProblemSolution = () => {
  const stats = [
    {
      icon: TrendingUp,
      title: 'Hiring Efficiency',
      value: '75%',
      description: 'Reduction in time-to-hire',
      color: 'from-[#436850] to-[#ADBC9F]',
      glow: 'earth'
    },
    {
      icon: Target,
      title: 'Quality Match',
      value: '90%',
      description: 'Improved candidate-role fit',
      color: 'from-[#ADBC9F] to-[#FBFADA]',
      glow: 'soft'
    },
    {
      icon: Users,
      title: 'Retention Rate',
      value: '85%',
      description: 'Higher employee retention',
      color: 'from-[#12372A] to-[#436850]',
      glow: 'earth'
    },
    {
      icon: Zap,
      title: 'Cost Savings',
      value: '60%',
      description: 'Reduced recruitment costs',
      color: 'from-[#436850] to-[#FBFADA]',
      glow: 'soft'
    }
  ];

  const problems = [
    {
      icon: Clock,
      title: 'Time-Consuming Screening',
      description: 'Manual resume review takes countless hours',
      solution: 'AI-powered instant screening and ranking'
    },
    {
      icon: Users,
      title: 'Unconscious Bias',
      description: 'Human bias affects hiring decisions',
      solution: 'Objective, data-driven candidate evaluation'
    },
    {
      icon: CheckCircle,
      title: 'Inconsistent Evaluation',
      description: 'Different standards across hiring teams',
      solution: 'Standardized scoring methodology'
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-b from-[#FED2E2] via-[#E9A5F1] to-[#C68EFD] relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-1/4 w-64 h-64 bg-[#8F87F1]/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-1/4 w-48 h-48 bg-white/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12 animate-fade-in">
          <Badge className="mb-6 bg-[#8F87F1]/20 text-[#8F87F1] border-[#8F87F1]/30 text-base font-bold px-6 py-3 backdrop-blur-sm">
            Impact Analytics • Proven Results
          </Badge>
          
          <h2 className="text-3xl lg:text-4xl font-black text-[#8F87F1] mb-6 leading-tight">
            Transforming Recruitment with
            <span className="block mt-2">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#C68EFD] to-[#8F87F1] animate-gradient bg-[length:200%_200%]">
                Measurable Impact
              </span>
            </span>
          </h2>
          
          <p className="text-lg text-[#8F87F1]/80 max-w-3xl mx-auto leading-relaxed font-medium">
            Our AI-powered platform delivers <strong className="text-[#8F87F1] font-black">quantifiable results</strong> that transform how organizations discover and hire top talent.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5 mb-16">
          {stats.map((stat, index) => (
            <Card 
              key={index}
              className="group relative overflow-hidden border-0 bg-white/80 backdrop-blur-sm shadow-soft hover:shadow-purple transition-all duration-500 hover:-translate-y-1 rounded-2xl animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className={`absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500 bg-gradient-to-br ${stat.color} blur-xl`}></div>
              
              <CardContent className="p-5 text-center relative z-10">
                <div className="mb-3 flex justify-center">
                  <div className={`w-10 h-10 bg-gradient-to-br ${stat.color} rounded-2xl flex items-center justify-center shadow-${stat.glow} group-hover:scale-110 transition-all duration-300`}>
                    <stat.icon className="w-5 h-5 text-white" />
                  </div>
                </div>
                
                <div className="mb-2">
                  <div className="text-2xl font-black text-[#8F87F1] mb-1">{stat.value}</div>
                  <h3 className="text-base font-bold text-[#8F87F1] mb-1">{stat.title}</h3>
                  <p className="text-[#C68EFD] font-medium text-sm">{stat.description}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Problem-Solution Grid */}
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-8">
            <h3 className="text-2xl lg:text-3xl font-black text-[#8F87F1] mb-4">
              From <span className="text-red-500">Problems</span> to <span className="text-[#C68EFD]">Solutions</span>
            </h3>
            <p className="text-base text-[#8F87F1]/80 font-medium">
              See how our AI-driven approach solves traditional recruitment challenges
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-5">
            {problems.map((item, index) => (
              <Card 
                key={index}
                className="group relative overflow-hidden border-0 bg-white/90 backdrop-blur-sm shadow-soft hover:shadow-purple transition-all duration-300 rounded-2xl animate-fade-in"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <CardContent className="p-5">
                  <div className="mb-4">
                    <div className="w-8 h-8 bg-gradient-to-br from-red-500 to-orange-600 rounded-xl flex items-center justify-center shadow-soft mb-3 group-hover:scale-110 transition-transform duration-300">
                      <item.icon className="w-4 h-4 text-white" />
                    </div>
                    <h4 className="text-base font-bold text-[#8F87F1] mb-2">{item.title}</h4>
                    <p className="text-[#8F87F1]/80 mb-3 font-medium text-sm">{item.description}</p>
                  </div>
                  
                  <div className="border-t border-[#C68EFD]/30 pt-3">
                    <div className="flex items-center gap-2 mb-1">
                      <CheckCircle className="w-3 h-3 text-[#C68EFD]" />
                      <span className="font-bold text-[#C68EFD] text-xs uppercase tracking-wide">Solution</span>
                    </div>
                    <p className="text-[#8F87F1] font-semibold text-sm">{item.solution}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12 animate-fade-in">
          <div className="inline-flex items-center gap-3 text-sm text-[#8F87F1]/70 font-medium">
            <div className="w-2 h-2 bg-[#8F87F1] rounded-full animate-pulse"></div>
            <span>Powered by Advanced AI Technology</span>
            <div className="w-2 h-2 bg-[#C68EFD] rounded-full animate-pulse"></div>
            <span>Trusted by Forward-Thinking Companies</span>
            <div className="w-2 h-2 bg-[#E9A5F1] rounded-full animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSolution;
