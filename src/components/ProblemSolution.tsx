
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
      color: 'from-emerald-400 to-teal-500',
      glow: 'emerald'
    },
    {
      icon: Target,
      title: 'Quality Match',
      value: '90%',
      description: 'Improved candidate-role fit',
      color: 'from-blue-400 to-cyan-500',
      glow: 'blue'
    },
    {
      icon: Users,
      title: 'Retention Rate',
      value: '85%',
      description: 'Higher employee retention',
      color: 'from-purple-400 to-indigo-500',
      glow: 'purple'
    },
    {
      icon: Zap,
      title: 'Cost Savings',
      value: '60%',
      description: 'Reduced recruitment costs',
      color: 'from-orange-400 to-pink-500',
      glow: 'orange'
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
    <section className="py-32 bg-gradient-to-b from-slate-50 via-[#FFF1D5]/30 to-[#FFF1D5] relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-1/4 w-96 h-96 bg-gradient-to-br from-[#9FB3DF]/10 to-[#9EC6F3]/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-1/4 w-80 h-80 bg-gradient-to-br from-[#9EC6F3]/8 to-[#BDDDE4]/8 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20 animate-fade-in">
          <Badge className="mb-8 bg-gradient-to-r from-[#9FB3DF]/20 to-[#9EC6F3]/20 text-slate-700 border-[#9FB3DF]/30 text-lg font-bold px-8 py-4 backdrop-blur-sm">
            Impact Analytics • Proven Results
          </Badge>
          
          <h2 className="text-5xl lg:text-7xl font-black text-slate-800 mb-8 leading-tight">
            Transforming Recruitment with
            <span className="block mt-4">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#9FB3DF] via-[#9EC6F3] to-[#BDDDE4] animate-gradient bg-[length:200%_200%]">
                Measurable Impact
              </span>
            </span>
          </h2>
          
          <p className="text-xl lg:text-2xl text-slate-600 max-w-4xl mx-auto leading-relaxed font-medium">
            Our AI-powered platform delivers <strong className="text-[#9FB3DF] font-black">quantifiable results</strong> that transform how organizations discover and hire top talent.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-24">
          {stats.map((stat, index) => (
            <Card 
              key={index}
              className="group relative overflow-hidden border-0 bg-white/70 backdrop-blur-sm shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 rounded-2xl animate-fade-in"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              {/* Glow effect */}
              <div className={`absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-500 bg-gradient-to-br ${stat.color} blur-xl`}></div>
              
              <CardContent className="p-8 text-center relative z-10">
                <div className="mb-6 flex justify-center">
                  <div className={`w-16 h-16 bg-gradient-to-br ${stat.color} rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-${stat.glow}-500/25 transition-all duration-300 group-hover:scale-110`}>
                    <stat.icon className="w-8 h-8 text-white" />
                  </div>
                </div>
                
                <div className="mb-4">
                  <div className="text-4xl font-black text-slate-800 mb-2">{stat.value}</div>
                  <h3 className="text-xl font-bold text-slate-700 mb-2">{stat.title}</h3>
                  <p className="text-slate-600 font-medium">{stat.description}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Problem-Solution Grid */}
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h3 className="text-4xl lg:text-5xl font-black text-slate-800 mb-6">
              From <span className="text-red-500">Problems</span> to <span className="text-[#9FB3DF]">Solutions</span>
            </h3>
            <p className="text-xl text-slate-600 font-medium">
              See how our AI-driven approach solves traditional recruitment challenges
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {problems.map((item, index) => (
              <Card 
                key={index}
                className="group relative overflow-hidden border-0 bg-white/80 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-300 rounded-2xl animate-fade-in"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <CardContent className="p-8">
                  <div className="mb-6">
                    <div className="w-14 h-14 bg-gradient-to-br from-red-400 to-orange-500 rounded-xl flex items-center justify-center shadow-lg mb-4 group-hover:scale-110 transition-transform duration-300">
                      <item.icon className="w-7 h-7 text-white" />
                    </div>
                    <h4 className="text-xl font-bold text-slate-800 mb-3">{item.title}</h4>
                    <p className="text-slate-600 mb-4 font-medium">{item.description}</p>
                  </div>
                  
                  <div className="border-t border-slate-200 pt-4">
                    <div className="flex items-center gap-3 mb-2">
                      <CheckCircle className="w-5 h-5 text-[#9FB3DF]" />
                      <span className="font-bold text-[#9FB3DF] text-sm uppercase tracking-wide">Solution</span>
                    </div>
                    <p className="text-slate-700 font-semibold">{item.solution}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-20 animate-fade-in">
          <div className="inline-flex items-center gap-4 text-lg text-slate-600 font-medium">
            <div className="w-3 h-3 bg-gradient-to-r from-[#9FB3DF] to-[#9EC6F3] rounded-full animate-pulse"></div>
            <span>Powered by Advanced AI Technology</span>
            <div className="w-3 h-3 bg-gradient-to-r from-emerald-400 to-teal-500 rounded-full animate-pulse"></div>
            <span>Trusted by Forward-Thinking Companies</span>
            <div className="w-3 h-3 bg-gradient-to-r from-purple-400 to-indigo-500 rounded-full animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSolution;
