
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
    <section className="py-20 bg-gradient-to-b from-[#FBFADA] to-[#FBFADA] relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-1/4 w-64 h-64 bg-[#ADBC9F]/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-1/4 w-48 h-48 bg-[#436850]/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#ADBC9F]/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <Badge className="mb-6 bg-gradient-to-r from-[#436850] to-[#ADBC9F] text-[#FBFADA] border-0 text-base font-bold px-6 py-3 shadow-soft backdrop-blur-sm">
            Limited Time • Early Access
          </Badge>
          <h2 className="text-4xl lg:text-5xl font-black text-[#12372A] mb-6 leading-tight">
            Join the Future of
            <span className="block mt-2">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#436850] to-[#12372A] animate-gradient bg-[length:200%_200%]">
                Recruitment Today
              </span>
            </span>
          </h2>
          <p className="text-lg lg:text-xl text-[#12372A]/80 max-w-3xl mx-auto leading-relaxed font-medium">
            Be part of the revolutionary change in talent acquisition. 
            <strong className="text-[#436850] font-black"> Early adopters</strong> get exclusive benefits and shape the platform's evolution.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-10 max-w-5xl mx-auto">
          {/* Job Seekers */}
          <Card className="group relative overflow-hidden border-0 bg-[#FBFADA]/95 backdrop-blur-sm shadow-soft hover:shadow-earth transition-all duration-500 hover:-translate-y-2 rounded-3xl animate-fade-in border border-[#ADBC9F]/20">
            <div className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500 bg-gradient-to-br from-[#436850] to-[#ADBC9F] blur-xl"></div>
            
            <CardContent className="p-8 relative z-10">
              <div className="text-center mb-8">
                <div className="w-16 h-16 bg-gradient-to-br from-[#436850] to-[#ADBC9F] rounded-3xl flex items-center justify-center mx-auto mb-4 shadow-earth group-hover:scale-110 transition-transform duration-300">
                  <Users className="w-8 h-8 text-[#FBFADA]" />
                </div>
                <h3 className="text-2xl font-black text-[#12372A] mb-2">For Job Seekers</h3>
                <p className="text-[#436850] text-base font-medium">Get your professional score and stand out</p>
              </div>
              
              <div className="space-y-6 mb-8">
                {jobSeekerBenefits.map((benefit, index) => (
                  <div 
                    key={benefit.title} 
                    className="flex items-start gap-4 animate-fade-in"
                    style={{ animationDelay: `${index * 80}ms` }}
                  >
                    <div className="w-10 h-10 bg-gradient-to-br from-[#436850]/10 to-[#ADBC9F]/10 rounded-xl flex items-center justify-center flex-shrink-0 shadow-soft">
                      <benefit.icon className="w-5 h-5 text-[#436850]" />
                    </div>
                    <div>
                      <h4 className="font-bold text-[#12372A] mb-1 text-base">{benefit.title}</h4>
                      <p className="text-[#12372A]/80 font-medium text-sm">{benefit.description}</p>
                    </div>
                  </div>
                ))}
              </div>
              
              <Button className="w-full bg-gradient-to-r from-[#436850] to-[#ADBC9F] hover:from-[#12372A] hover:to-[#436850] text-[#FBFADA] text-base font-bold py-5 rounded-2xl shadow-soft hover:shadow-earth transition-all duration-300 hover:scale-[1.02] group">
                <span className="group-hover:animate-bounce">Get Your Score First</span>
              </Button>
            </CardContent>
          </Card>

          {/* Recruiters */}
          <Card className="group relative overflow-hidden border-0 bg-[#FBFADA]/95 backdrop-blur-sm shadow-soft hover:shadow-earth transition-all duration-500 hover:-translate-y-2 rounded-3xl animate-fade-in border border-[#ADBC9F]/20">
            <div className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500 bg-gradient-to-br from-[#ADBC9F] to-[#436850] blur-xl"></div>
            
            <CardContent className="p-8 relative z-10">
              <div className="text-center mb-8">
                <div className="w-16 h-16 bg-gradient-to-br from-[#ADBC9F] to-[#436850] rounded-3xl flex items-center justify-center mx-auto mb-4 shadow-earth group-hover:scale-110 transition-transform duration-300">
                  <Zap className="w-8 h-8 text-[#FBFADA]" />
                </div>
                <h3 className="text-2xl font-black text-[#12372A] mb-2">For Recruiters</h3>
                <p className="text-[#436850] text-base font-medium">Access pre-scored talent efficiently</p>
              </div>
              
              <div className="space-y-6 mb-8">
                {recruiterBenefits.map((benefit, index) => (
                  <div 
                    key={benefit.title} 
                    className="flex items-start gap-4 animate-fade-in"
                    style={{ animationDelay: `${index * 80}ms` }}
                  >
                    <div className="w-10 h-10 bg-gradient-to-br from-[#ADBC9F]/10 to-[#436850]/10 rounded-xl flex items-center justify-center flex-shrink-0 shadow-soft">
                      <benefit.icon className="w-5 h-5 text-[#436850]" />
                    </div>
                    <div>
                      <h4 className="font-bold text-[#12372A] mb-1 text-base">{benefit.title}</h4>
                      <p className="text-[#12372A]/80 font-medium text-sm">{benefit.description}</p>
                    </div>
                  </div>
                ))}
              </div>
              
              <Button className="w-full bg-gradient-to-r from-[#ADBC9F] to-[#436850] hover:from-[#436850] hover:to-[#12372A] text-[#FBFADA] text-base font-bold py-5 rounded-2xl shadow-soft hover:shadow-earth transition-all duration-300 hover:scale-[1.02] group">
                <span className="group-hover:animate-bounce">Access Pre-Scored Talent</span>
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Urgency Indicator */}
        <div className="text-center mt-12 animate-fade-in">
          <div className="inline-flex items-center gap-2 bg-[#ADBC9F]/20 backdrop-blur-md rounded-full px-6 py-3 border border-[#436850]/20 shadow-soft">
            <div className="w-2 h-2 bg-[#436850] rounded-full animate-pulse shadow-sm"></div>
            <span className="text-[#12372A] font-bold text-base">Limited spots available • Join 500+ early adopters</span>
            <div className="w-2 h-2 bg-[#ADBC9F] rounded-full animate-pulse delay-500 shadow-sm"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EarlyAdopterBenefits;
