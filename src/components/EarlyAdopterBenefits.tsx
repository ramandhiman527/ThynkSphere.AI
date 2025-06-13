
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Star, Users, Zap, Gift, Award, Target } from 'lucide-react';

const EarlyAdopterBenefits = () => {
  const jobSeekerBenefits = [
    {
      icon: Star,
      title: 'Exclusive Beta Access',
      description: 'Be among the first to receive your official Employee Score™'
    },
    {
      icon: Zap,
      title: 'Score Optimization Coaching',
      description: 'Free AI-powered guidance to improve your professional score'
    },
    {
      icon: Users,
      title: 'Priority Matching',
      description: 'Early users get featured placement in employer searches'
    },
    {
      icon: Award,
      title: 'Founding Member Badge',
      description: 'Lifetime profile distinction for early adopters'
    }
  ];

  const recruiterBenefits = [
    {
      icon: Gift,
      title: 'Free Trial Period',
      description: '3 months of unlimited access to the full platform'
    },
    {
      icon: Target,
      title: 'Pre-Scored Talent Pool',
      description: 'Access to our growing pool of scored candidates'
    },
    {
      icon: Zap,
      title: 'Custom Scoring Weights',
      description: 'Tailor the Employee Score™ algorithm to your needs'
    },
    {
      icon: Star,
      title: 'Integration Support',
      description: 'Free technical assistance connecting to your ATS'
    }
  ];

  return (
    <section className="py-32 bg-gradient-to-b from-[#BDDDE4] via-[#E8F2F5] to-[#FFF1D5] relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-1/4 w-96 h-96 bg-gradient-to-br from-[#9FB3DF]/10 to-[#9EC6F3]/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-1/4 w-80 h-80 bg-gradient-to-br from-[#9EC6F3]/8 to-[#BDDDE4]/8 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-br from-white/20 to-transparent rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-20 animate-fade-in">
          <Badge className="mb-8 bg-gradient-to-r from-[#9FB3DF] to-[#9EC6F3] text-white border-0 text-lg font-bold px-8 py-4 shadow-lg backdrop-blur-sm">
            Limited Time • Early Access
          </Badge>
          <h2 className="text-5xl lg:text-7xl font-black text-white mb-8 leading-tight drop-shadow-lg">
            Join the Future of
            <span className="block mt-4">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#9FB3DF] via-[#9EC6F3] to-white animate-gradient bg-[length:200%_200%]">
                Recruitment Today
              </span>
            </span>
          </h2>
          <p className="text-xl lg:text-2xl text-white/90 max-w-4xl mx-auto leading-relaxed font-medium drop-shadow-md">
            Be part of the revolutionary change in talent acquisition. 
            <strong className="text-white font-black"> Early adopters</strong> get exclusive benefits and shape the platform's evolution.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Job Seekers */}
          <Card className="group relative overflow-hidden border-0 bg-white/90 backdrop-blur-sm shadow-2xl hover:shadow-3xl transition-all duration-500 hover:-translate-y-3 rounded-3xl animate-fade-in">
            {/* Glow effect */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-500 bg-gradient-to-br from-[#9FB3DF] to-[#9EC6F3] blur-xl"></div>
            
            <CardContent className="p-10 relative z-10">
              <div className="text-center mb-10">
                <div className="w-20 h-20 bg-gradient-to-br from-[#9FB3DF] to-[#9EC6F3] rounded-3xl flex items-center justify-center mx-auto mb-6 shadow-xl group-hover:scale-110 transition-transform duration-300">
                  <Users className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-3xl font-black text-slate-800 mb-3">For Job Seekers</h3>
                <p className="text-slate-600 text-lg font-medium">Get your professional score and stand out</p>
              </div>
              
              <div className="space-y-8 mb-10">
                {jobSeekerBenefits.map((benefit, index) => (
                  <div 
                    key={benefit.title} 
                    className="flex items-start gap-5 animate-fade-in"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <div className="w-12 h-12 bg-gradient-to-br from-[#9FB3DF]/10 to-[#9EC6F3]/10 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg">
                      <benefit.icon className="w-6 h-6 text-[#9FB3DF]" />
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-800 mb-2 text-lg">{benefit.title}</h4>
                      <p className="text-slate-600 font-medium">{benefit.description}</p>
                    </div>
                  </div>
                ))}
              </div>
              
              <Button className="w-full bg-gradient-to-r from-[#9FB3DF] to-[#9EC6F3] hover:from-[#8EA3D3] hover:to-[#8BBAE7] text-white text-lg font-bold py-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02] group">
                <span className="group-hover:animate-bounce">Get Your Score First</span>
              </Button>
            </CardContent>
          </Card>

          {/* Recruiters */}
          <Card className="group relative overflow-hidden border-0 bg-white/90 backdrop-blur-sm shadow-2xl hover:shadow-3xl transition-all duration-500 hover:-translate-y-3 rounded-3xl animate-fade-in">
            {/* Glow effect */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-500 bg-gradient-to-br from-[#9EC6F3] to-[#BDDDE4] blur-xl"></div>
            
            <CardContent className="p-10 relative z-10">
              <div className="text-center mb-10">
                <div className="w-20 h-20 bg-gradient-to-br from-[#9EC6F3] to-[#BDDDE4] rounded-3xl flex items-center justify-center mx-auto mb-6 shadow-xl group-hover:scale-110 transition-transform duration-300">
                  <Zap className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-3xl font-black text-slate-800 mb-3">For Recruiters</h3>
                <p className="text-slate-600 text-lg font-medium">Access pre-scored talent efficiently</p>
              </div>
              
              <div className="space-y-8 mb-10">
                {recruiterBenefits.map((benefit, index) => (
                  <div 
                    key={benefit.title} 
                    className="flex items-start gap-5 animate-fade-in"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <div className="w-12 h-12 bg-gradient-to-br from-[#9EC6F3]/10 to-[#BDDDE4]/10 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg">
                      <benefit.icon className="w-6 h-6 text-[#9EC6F3]" />
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-800 mb-2 text-lg">{benefit.title}</h4>
                      <p className="text-slate-600 font-medium">{benefit.description}</p>
                    </div>
                  </div>
                ))}
              </div>
              
              <Button className="w-full bg-gradient-to-r from-[#9EC6F3] to-[#BDDDE4] hover:from-[#8BBAE7] hover:to-[#A8D1D8] text-white text-lg font-bold py-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02] group">
                <span className="group-hover:animate-bounce">Access Pre-Scored Talent</span>
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Urgency Indicator */}
        <div className="text-center mt-16 animate-fade-in">
          <div className="inline-flex items-center gap-3 bg-white/20 backdrop-blur-md rounded-full px-8 py-4 border border-white/30 shadow-xl">
            <div className="w-3 h-3 bg-gradient-to-r from-[#9FB3DF] to-[#9EC6F3] rounded-full animate-pulse shadow-lg"></div>
            <span className="text-white font-bold text-lg drop-shadow-md">Limited spots available • Join 500+ early adopters</span>
            <div className="w-3 h-3 bg-gradient-to-r from-[#9EC6F3] to-[#BDDDE4] rounded-full animate-pulse delay-500 shadow-lg"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EarlyAdopterBenefits;
