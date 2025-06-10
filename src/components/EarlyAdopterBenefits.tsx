
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';

const EarlyAdopterBenefits = () => {
  const jobSeekerBenefits = [
    {
      title: 'Exclusive Beta Access',
      description: 'Be among the first to receive your official Employee Score™',
      icon: '🎯',
      highlight: true
    },
    {
      title: 'Score Optimization Coaching',
      description: 'Free AI-powered guidance to improve your score',
      icon: '🚀',
      highlight: false
    },
    {
      title: 'Priority Matching',
      description: 'Early users get featured placement in employer searches',
      icon: '⭐',
      highlight: false
    },
    {
      title: 'Founding Member Badge',
      description: 'Lifetime profile distinction for early adopters',
      icon: '🏆',
      highlight: true
    },
    {
      title: 'Score Improvement Tracking',
      description: 'Visual dashboard showing progress over time',
      icon: '📈',
      highlight: false
    }
  ];

  const recruiterBenefits = [
    {
      title: 'Free Trial Period',
      description: '3 months of unlimited access to the full platform',
      icon: '🎁',
      highlight: true
    },
    {
      title: 'Candidate Pipeline Boost',
      description: 'Access to our growing pool of pre-scored candidates',
      icon: '👥',
      highlight: false
    },
    {
      title: 'Custom Scoring Weights',
      description: 'Tailor the Employee Score™ algorithm to your priorities',
      icon: '⚙️',
      highlight: true
    },
    {
      title: 'Integration Support',
      description: 'Free technical assistance connecting to your existing ATS',
      icon: '🔗',
      highlight: false
    },
    {
      title: 'Hiring Analytics Dashboard',
      description: 'Track quality of hire improvements with our metrics',
      icon: '📊',
      highlight: false
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-slate-900 to-slate-800">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-amber-500/20 text-amber-300 border-amber-500/30 text-sm font-medium px-4 py-2">
            Limited Time • Early Adopter Program
          </Badge>
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Exclusive Benefits for
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-400">
              {' '}Pioneers
            </span>
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Join the recruitment revolution early and unlock exclusive advantages that will 
            give you a competitive edge in the evolving job market.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Job Seekers Benefits */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 bg-gradient-to-r from-teal-500 to-blue-500 rounded-full flex items-center justify-center">
                <span className="text-2xl">👤</span>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white">For Job Seekers</h3>
                <p className="text-slate-400">Stand out with objective credentials</p>
              </div>
            </div>

            <div className="space-y-4">
              {jobSeekerBenefits.map((benefit, index) => (
                <Card 
                  key={index} 
                  className={`bg-slate-800/50 border-slate-700 hover:bg-slate-800/70 transition-colors ${
                    benefit.highlight ? 'ring-2 ring-amber-500/50' : ''
                  }`}
                >
                  <CardContent className="p-4">
                    <div className="flex items-start gap-4">
                      <div className="text-2xl">{benefit.icon}</div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <h4 className="font-semibold text-white">{benefit.title}</h4>
                          {benefit.highlight && (
                            <Badge className="bg-amber-500/20 text-amber-300 text-xs">
                              Featured
                            </Badge>
                          )}
                        </div>
                        <p className="text-slate-400 text-sm">{benefit.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <Button className="w-full mt-6 bg-teal-600 hover:bg-teal-700 text-white py-3 text-lg font-medium">
              Claim Your Early Access
            </Button>
          </div>

          {/* Recruiters Benefits */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
                <span className="text-2xl">🏢</span>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white">For Recruiters</h3>
                <p className="text-slate-400">Access pre-scored talent pools</p>
              </div>
            </div>

            <div className="space-y-4">
              {recruiterBenefits.map((benefit, index) => (
                <Card 
                  key={index} 
                  className={`bg-slate-800/50 border-slate-700 hover:bg-slate-800/70 transition-colors ${
                    benefit.highlight ? 'ring-2 ring-amber-500/50' : ''
                  }`}
                >
                  <CardContent className="p-4">
                    <div className="flex items-start gap-4">
                      <div className="text-2xl">{benefit.icon}</div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <h4 className="font-semibold text-white">{benefit.title}</h4>
                          {benefit.highlight && (
                            <Badge className="bg-amber-500/20 text-amber-300 text-xs">
                              Premium
                            </Badge>
                          )}
                        </div>
                        <p className="text-slate-400 text-sm">{benefit.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <Button className="w-full mt-6 bg-purple-600 hover:bg-purple-700 text-white py-3 text-lg font-medium">
              Start Free Trial
            </Button>
          </div>
        </div>

        {/* Scarcity Indicators */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-4 bg-slate-800/80 backdrop-blur-sm rounded-full px-6 py-3 border border-slate-600">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-red-400 rounded-full animate-pulse" />
              <span className="text-white font-medium">487 Beta Spots Remaining</span>
            </div>
            <Separator orientation="vertical" className="h-4 bg-slate-600" />
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
              <span className="text-slate-400">2,143 Already Joined</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EarlyAdopterBenefits;
