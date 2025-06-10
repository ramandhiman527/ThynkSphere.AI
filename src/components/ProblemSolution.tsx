
import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const ProblemSolution = () => {
  const [activeView, setActiveView] = useState('traditional');

  const problems = [
    {
      title: 'Subjective Evaluation',
      description: 'Hiring decisions based on gut feeling and unconscious bias',
      icon: '🤔',
      stat: '67% of hiring decisions are influenced by unconscious bias'
    },
    {
      title: 'Resume Fraud',
      description: 'Candidates exaggerate skills and experience',
      icon: '📄',
      stat: '40% of resumes contain some form of inaccuracy'
    },
    {
      title: 'Time Wasted',
      description: 'Countless hours screening unqualified candidates',
      icon: '⏰',
      stat: 'Average 240 hours spent per hire'
    },
    {
      title: 'Poor Matching',
      description: 'High turnover due to role-candidate misalignment',
      icon: '❌',
      stat: '22% turnover rate in first 45 days'
    }
  ];

  const solutions = [
    {
      title: 'Objective Scoring',
      description: 'AI-powered Employee Score™ eliminates subjective evaluation',
      icon: '🎯',
      stat: '40% better candidate-role fit accuracy',
      improvement: '+40%'
    },
    {
      title: 'Verified Skills',
      description: 'Dynamic micro-assessments authenticate claimed abilities',
      icon: '✅',
      stat: '85% reduction in skill misrepresentation',
      improvement: '-85%'
    },
    {
      title: 'Smart Filtering',
      description: 'Pre-scored candidates save screening time',
      icon: '⚡',
      stat: '70% faster initial screening process',
      improvement: '+70%'
    },
    {
      title: 'Perfect Matches',
      description: 'Algorithm considers growth potential and cultural fit',
      icon: '🎪',
      stat: '60% reduction in early turnover',
      improvement: '-60%'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
            From Recruitment
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-orange-500">
              {' '}Chaos
            </span>
            {' '}to
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-500 to-blue-500">
              {' '}Clarity
            </span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Traditional recruitment is broken. The Employee Score™ system transforms 
            hiring from guesswork into a data-driven science.
          </p>
        </div>

        {/* Toggle Buttons */}
        <div className="flex justify-center mb-12">
          <div className="bg-slate-100 rounded-lg p-2">
            <Button
              variant={activeView === 'traditional' ? 'default' : 'ghost'}
              onClick={() => setActiveView('traditional')}
              className={`px-6 ${activeView === 'traditional' ? 'bg-red-500 text-white' : 'text-slate-600'}`}
            >
              Traditional Problems
            </Button>
            <Button
              variant={activeView === 'solutions' ? 'default' : 'ghost'}
              onClick={() => setActiveView('solutions')}
              className={`px-6 ${activeView === 'solutions' ? 'bg-teal-600 text-white' : 'text-slate-600'}`}
            >
              Employee Score™ Solutions
            </Button>
          </div>
        </div>

        {/* Content */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {activeView === 'traditional' ? (
            problems.map((problem, index) => (
              <Card 
                key={index} 
                className="border-2 border-red-200 hover:border-red-300 transition-colors bg-red-50/50"
              >
                <CardContent className="p-6 text-center">
                  <div className="text-4xl mb-4">{problem.icon}</div>
                  <h3 className="font-bold text-slate-900 mb-3">{problem.title}</h3>
                  <p className="text-slate-600 text-sm mb-4">{problem.description}</p>
                  <Badge variant="outline" className="border-red-300 text-red-700 bg-red-100">
                    {problem.stat}
                  </Badge>
                </CardContent>
              </Card>
            ))
          ) : (
            solutions.map((solution, index) => (
              <Card 
                key={index} 
                className="border-2 border-teal-200 hover:border-teal-300 transition-colors bg-teal-50/50"
              >
                <CardContent className="p-6 text-center">
                  <div className="text-4xl mb-4">{solution.icon}</div>
                  <h3 className="font-bold text-slate-900 mb-3">{solution.title}</h3>
                  <p className="text-slate-600 text-sm mb-4">{solution.description}</p>
                  <div className="space-y-2">
                    <Badge variant="outline" className="border-teal-300 text-teal-700 bg-teal-100">
                      {solution.stat}
                    </Badge>
                    <div className={`inline-flex items-center gap-1 px-2 py-1 rounded text-xs font-bold ${
                      solution.improvement.startsWith('+') 
                        ? 'bg-green-100 text-green-700' 
                        : 'bg-blue-100 text-blue-700'
                    }`}>
                      {solution.improvement} improvement
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))
          )}
        </div>

        {/* Before/After Comparison */}
        <div className="mt-20">
          <h3 className="text-3xl font-bold text-center text-slate-900 mb-12">
            See the Transformation
          </h3>
          
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Before */}
            <Card className="border-2 border-red-200">
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-3 h-3 bg-red-500 rounded-full" />
                  <h4 className="text-xl font-bold text-slate-900">Traditional Recruitment</h4>
                </div>
                
                <div className="space-y-4 mb-6">
                  <div className="flex items-center gap-3">
                    <span className="text-red-500">❌</span>
                    <span className="text-slate-600">Resume screening takes 6+ hours per role</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-red-500">❌</span>
                    <span className="text-slate-600">40% of candidates misrepresent skills</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-red-500">❌</span>
                    <span className="text-slate-600">High risk of unconscious bias</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-red-500">❌</span>
                    <span className="text-slate-600">22% turnover in first 45 days</span>
                  </div>
                </div>
                
                <div className="bg-red-50 p-4 rounded-lg">
                  <div className="text-2xl font-bold text-red-600">240 hours</div>
                  <div className="text-red-700">Average time per hire</div>
                </div>
              </CardContent>
            </Card>

            {/* After */}
            <Card className="border-2 border-teal-200">
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-3 h-3 bg-teal-500 rounded-full" />
                  <h4 className="text-xl font-bold text-slate-900">Employee Score™ System</h4>
                </div>
                
                <div className="space-y-4 mb-6">
                  <div className="flex items-center gap-3">
                    <span className="text-teal-500">✅</span>
                    <span className="text-slate-600">Instant candidate scoring and ranking</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-teal-500">✅</span>
                    <span className="text-slate-600">AI-verified skills and achievements</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-teal-500">✅</span>
                    <span className="text-slate-600">Bias-free objective evaluation</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-teal-500">✅</span>
                    <span className="text-slate-600">60% reduction in early turnover</span>
                  </div>
                </div>
                
                <div className="bg-teal-50 p-4 rounded-lg">
                  <div className="text-2xl font-bold text-teal-600">72 hours</div>
                  <div className="text-teal-700">Average time per hire</div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSolution;
