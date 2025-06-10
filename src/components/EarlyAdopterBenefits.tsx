
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Star, Users, Zap, Gift } from 'lucide-react';

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
      icon: Gift,
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
      icon: Users,
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
    <section className="py-20 bg-gradient-to-br from-white to-[#9FB3DF]/5">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-gradient-to-r from-[#9FB3DF] to-[#9EC6F3] text-white border-0">
            Limited Time • Early Access
          </Badge>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-6">
            Join the Future of
            <span className="block text-[#9FB3DF]">Recruitment Today</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Be part of the revolutionary change in talent acquisition. 
            Early adopters get exclusive benefits and shape the platform's evolution.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Job Seekers */}
          <Card className="border-[#9FB3DF]/20 hover:border-[#9FB3DF]/40 transition-all duration-300 hover:shadow-xl">
            <CardContent className="p-8">
              <div className="text-center mb-8">
                <div className="w-16 h-16 bg-gradient-to-br from-[#9FB3DF] to-[#9EC6F3] rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-2">For Job Seekers</h3>
                <p className="text-gray-600">Get your professional score and stand out</p>
              </div>
              
              <div className="space-y-6 mb-8">
                {jobSeekerBenefits.map((benefit, index) => (
                  <div key={benefit.title} className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-[#9FB3DF]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <benefit.icon className="w-5 h-5 text-[#9FB3DF]" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-1">{benefit.title}</h4>
                      <p className="text-gray-600 text-sm">{benefit.description}</p>
                    </div>
                  </div>
                ))}
              </div>
              
              <Button className="w-full bg-gradient-to-r from-[#9FB3DF] to-[#9EC6F3] hover:from-[#8EA3D3] hover:to-[#8BBAE7] text-white">
                Get Your Score First
              </Button>
            </CardContent>
          </Card>

          {/* Recruiters */}
          <Card className="border-[#9EC6F3]/20 hover:border-[#9EC6F3]/40 transition-all duration-300 hover:shadow-xl">
            <CardContent className="p-8">
              <div className="text-center mb-8">
                <div className="w-16 h-16 bg-gradient-to-br from-[#9EC6F3] to-[#BDDDE4] rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Zap className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-2">For Recruiters</h3>
                <p className="text-gray-600">Access pre-scored talent efficiently</p>
              </div>
              
              <div className="space-y-6 mb-8">
                {recruiterBenefits.map((benefit, index) => (
                  <div key={benefit.title} className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-[#9EC6F3]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <benefit.icon className="w-5 h-5 text-[#9EC6F3]" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-1">{benefit.title}</h4>
                      <p className="text-gray-600 text-sm">{benefit.description}</p>
                    </div>
                  </div>
                ))}
              </div>
              
              <Button className="w-full bg-gradient-to-r from-[#9EC6F3] to-[#BDDDE4] hover:from-[#8BBAE7] hover:to-[#A8D1D8] text-white">
                Access Pre-Scored Talent
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Urgency Indicator */}
        <div className="text-center mt-12">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-[#9FB3DF]/10 to-[#9EC6F3]/10 rounded-full px-6 py-3 border border-[#9FB3DF]/20">
            <div className="w-2 h-2 bg-[#9FB3DF] rounded-full animate-pulse"></div>
            <span className="text-[#9FB3DF] font-medium">Limited spots available • Join 500+ early adopters</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EarlyAdopterBenefits;
