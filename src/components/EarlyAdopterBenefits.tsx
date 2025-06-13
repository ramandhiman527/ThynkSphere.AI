
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
    <section className="py-12 bg-gradient-to-b from-[#C68EFD] to-[#8F87F1] relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-1/4 w-64 h-64 bg-[#E9A5F1]/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-1/4 w-48 h-48 bg-[#FED2E2]/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#C68EFD]/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-10 animate-fade-in">
          <Badge className="mb-5 bg-gradient-to-r from-white/20 to-[#FED2E2]/20 text-white-shadow border-0 text-sm font-bold-strong px-5 py-2 shadow-soft backdrop-blur-sm">
            Limited Time • Early Access
          </Badge>
          <h2 className="text-2xl lg:text-3xl font-bold-strong text-white-shadow mb-5 leading-tight">
            Join the Future of
            <span className="block mt-2">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FED2E2] to-white animate-gradient bg-[length:200%_200%]">
                Recruitment Today
              </span>
            </span>
          </h2>
          <p className="text-base text-light-lilac max-w-3xl mx-auto leading-relaxed font-medium-bold">
            Be part of the revolutionary change in talent acquisition. 
            <strong className="text-white-shadow font-bold-strong"> Early adopters</strong> get exclusive benefits and shape the platform's evolution.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {/* Job Seekers */}
          <Card className="group relative overflow-hidden border-0 bg-white/95 backdrop-blur-sm shadow-soft hover:shadow-purple transition-all duration-500 hover:-translate-y-2 rounded-3xl animate-fade-in border border-white/20">
            <div className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500 bg-gradient-to-br from-[#8F87F1] to-[#C68EFD] blur-xl"></div>
            
            <CardContent className="p-5 relative z-10">
              <div className="text-center mb-5">
                <div className="w-10 h-10 bg-gradient-to-br from-[#8F87F1] to-[#C68EFD] rounded-3xl flex items-center justify-center mx-auto mb-3 shadow-purple group-hover:scale-110 transition-transform duration-300">
                  <Users className="w-5 h-5 text-white-shadow" />
                </div>
                <h3 className="text-lg font-bold-strong text-dark-charcoal mb-2">For Job Seekers</h3>
                <p className="text-deep-plum text-xs font-medium-bold">Get your professional score and stand out</p>
              </div>
              
              <div className="space-y-3 mb-5">
                {jobSeekerBenefits.map((benefit, index) => (
                  <div 
                    key={benefit.title} 
                    className="flex items-start gap-3 animate-fade-in"
                    style={{ animationDelay: `${index * 80}ms` }}
                  >
                    <div className="w-7 h-7 bg-gradient-to-br from-[#8F87F1]/10 to-[#C68EFD]/10 rounded-xl flex items-center justify-center flex-shrink-0 shadow-soft">
                      <benefit.icon className="w-3 h-3 text-deep-plum" />
                    </div>
                    <div>
                      <h4 className="font-bold-strong text-dark-charcoal mb-1 text-xs">{benefit.title}</h4>
                      <p className="text-dark-charcoal/80 font-medium-bold text-xs">{benefit.description}</p>
                    </div>
                  </div>
                ))}
              </div>
              
              <Button className="w-full bg-gradient-to-r from-[#8F87F1] to-[#C68EFD] hover:from-[#8F87F1]/80 hover:to-[#C68EFD]/80 text-white-shadow text-xs font-bold-strong py-3 rounded-2xl shadow-soft hover:shadow-purple transition-all duration-300 hover:scale-[1.02] group">
                <span className="group-hover:animate-bounce">Get Your Score First</span>
              </Button>
            </CardContent>
          </Card>

          {/* Recruiters */}
          <Card className="group relative overflow-hidden border-0 bg-white/95 backdrop-blur-sm shadow-soft hover:shadow-purple transition-all duration-500 hover:-translate-y-2 rounded-3xl animate-fade-in border border-white/20">
            <div className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500 bg-gradient-to-br from-[#C68EFD] to-[#E9A5F1] blur-xl"></div>
            
            <CardContent className="p-5 relative z-10">
              <div className="text-center mb-5">
                <div className="w-10 h-10 bg-gradient-to-br from-[#C68EFD] to-[#E9A5F1] rounded-3xl flex items-center justify-center mx-auto mb-3 shadow-purple group-hover:scale-110 transition-transform duration-300">
                  <Zap className="w-5 h-5 text-white-shadow" />
                </div>
                <h3 className="text-lg font-bold-strong text-dark-charcoal mb-2">For Recruiters</h3>
                <p className="text-deep-plum text-xs font-medium-bold">Access pre-scored talent efficiently</p>
              </div>
              
              <div className="space-y-3 mb-5">
                {recruiterBenefits.map((benefit, index) => (
                  <div 
                    key={benefit.title} 
                    className="flex items-start gap-3 animate-fade-in"
                    style={{ animationDelay: `${index * 80}ms` }}
                  >
                    <div className="w-7 h-7 bg-gradient-to-br from-[#C68EFD]/10 to-[#E9A5F1]/10 rounded-xl flex items-center justify-center flex-shrink-0 shadow-soft">
                      <benefit.icon className="w-3 h-3 text-deep-plum" />
                    </div>
                    <div>
                      <h4 className="font-bold-strong text-dark-charcoal mb-1 text-xs">{benefit.title}</h4>
                      <p className="text-dark-charcoal/80 font-medium-bold text-xs">{benefit.description}</p>
                    </div>
                  </div>
                ))}
              </div>
              
              <Button className="w-full bg-gradient-to-r from-[#C68EFD] to-[#E9A5F1] hover:from-[#C68EFD]/80 hover:to-[#E9A5F1]/80 text-white-shadow text-xs font-bold-strong py-3 rounded-2xl shadow-soft hover:shadow-purple transition-all duration-300 hover:scale-[1.02] group">
                <span className="group-hover:animate-bounce">Access Pre-Scored Talent</span>
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Urgency Indicator */}
        <div className="text-center mt-6 animate-fade-in">
          <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-md rounded-full px-5 py-2 border border-white/20 shadow-soft">
            <div className="w-2 h-2 bg-[#FED2E2] rounded-full animate-pulse shadow-sm"></div>
            <span className="text-light-lilac font-medium-bold text-xs">Limited spots available • Join 500+ early adopters</span>
            <div className="w-2 h-2 bg-white rounded-full animate-pulse delay-500 shadow-sm"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EarlyAdopterBenefits;
