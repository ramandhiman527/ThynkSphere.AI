
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

const EmployeeScoreShowcase = () => {
  const [activeTab, setActiveTab] = useState('algorithm');

  const scoreFactors = [
    { name: 'Resume Quality', weight: 10, score: 85, color: 'bg-blue-500' },
    { name: 'Work History', weight: 30, score: 78, color: 'bg-green-500' },
    { name: 'Skills Relevance', weight: 30, score: 92, color: 'bg-teal-500' },
    { name: 'Education', weight: 15, score: 88, color: 'bg-purple-500' },
    { name: 'Certifications', weight: 15, score: 95, color: 'bg-amber-500' },
  ];

  const sampleProfiles = [
    {
      name: 'Sarah Chen',
      role: 'Software Engineer',
      score: 785,
      factors: { resume: 88, history: 82, skills: 95, education: 90, certs: 92 },
      tier: 'Excellent',
      color: 'text-green-400'
    },
    {
      name: 'Michael Rodriguez',
      role: 'Product Manager',
      score: 652,
      factors: { resume: 75, history: 68, skills: 85, education: 82, certs: 65 },
      tier: 'Good',
      color: 'text-blue-400'
    },
    {
      name: 'Priya Sharma',
      role: 'UX Designer',
      score: 543,
      factors: { resume: 65, history: 45, skills: 78, education: 85, certs: 70 },
      tier: 'Fair',
      color: 'text-amber-400'
    }
  ];

  return (
    <section className="py-20 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
            Introducing the{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-blue-600">
              Employee Score™
            </span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            The world's first comprehensive professional scoring system that brings objectivity, 
            transparency, and fairness to recruitment.
          </p>
        </div>

        {/* Tabs */}
        <div className="flex justify-center mb-12">
          <div className="bg-white rounded-lg p-2 shadow-lg">
            <Button
              variant={activeTab === 'algorithm' ? 'default' : 'ghost'}
              onClick={() => setActiveTab('algorithm')}
              className={activeTab === 'algorithm' ? 'bg-teal-600 text-white' : 'text-slate-600'}
            >
              Algorithm Breakdown
            </Button>
            <Button
              variant={activeTab === 'examples' ? 'default' : 'ghost'}
              onClick={() => setActiveTab('examples')}
              className={activeTab === 'examples' ? 'bg-teal-600 text-white' : 'text-slate-600'}
            >
              Score Examples
            </Button>
            <Button
              variant={activeTab === 'transparency' ? 'default' : 'ghost'}
              onClick={() => setActiveTab('transparency')}
              className={activeTab === 'transparency' ? 'bg-teal-600 text-white' : 'text-slate-600'}
            >
              Transparency
            </Button>
          </div>
        </div>

        {/* Algorithm Breakdown */}
        {activeTab === 'algorithm' && (
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold text-slate-900 mb-6">
                Five-Factor Scoring Algorithm
              </h3>
              <p className="text-lg text-slate-600 mb-8">
                Our proprietary algorithm evaluates candidates across five key dimensions, 
                each weighted based on extensive industry research and hiring success data.
              </p>
              
              <div className="space-y-6">
                {scoreFactors.map((factor, index) => (
                  <div key={index} className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div className={`w-4 h-4 rounded-full ${factor.color}`} />
                      <div>
                        <div className="font-semibold text-slate-900">{factor.name}</div>
                        <div className="text-sm text-slate-500">{factor.weight}% weight</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="w-32 bg-slate-200 rounded-full h-2">
                        <div 
                          className={`h-full rounded-full ${factor.color}`}
                          style={{ width: `${factor.score}%` }}
                        />
                      </div>
                      <span className="font-mono font-bold text-slate-900 w-8">
                        {factor.score}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-white rounded-2xl shadow-xl p-8 border border-slate-200">
                <div className="text-center mb-6">
                  <div className="text-6xl font-bold font-mono text-slate-900">785</div>
                  <div className="text-slate-500">Employee Score™</div>
                  <Badge className="mt-2 bg-green-100 text-green-800">Excellent</Badge>
                </div>
                
                {/* Radar Chart Visualization */}
                <div className="relative w-64 h-64 mx-auto">
                  <svg viewBox="0 0 200 200" className="w-full h-full">
                    {/* Pentagon Grid */}
                    <polygon
                      points="100,20 180,65 155,155 45,155 20,65"
                      fill="none"
                      stroke="#e2e8f0"
                      strokeWidth="1"
                    />
                    <polygon
                      points="100,50 150,80 135,135 65,135 50,80"
                      fill="none"
                      stroke="#e2e8f0"
                      strokeWidth="1"
                    />
                    
                    {/* Data Polygon */}
                    <polygon
                      points="100,32 165,72 145,140 55,140 35,72"
                      fill="rgba(20, 184, 166, 0.2)"
                      stroke="#14b8a6"
                      strokeWidth="2"
                    />
                    
                    {/* Labels */}
                    <text x="100" y="15" textAnchor="middle" className="text-xs fill-slate-600">Resume</text>
                    <text x="185" y="70" textAnchor="start" className="text-xs fill-slate-600">Skills</text>
                    <text x="160" y="165" textAnchor="middle" className="text-xs fill-slate-600">Certs</text>
                    <text x="40" y="165" textAnchor="middle" className="text-xs fill-slate-600">Education</text>
                    <text x="15" y="70" textAnchor="end" className="text-xs fill-slate-600">History</text>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Score Examples */}
        {activeTab === 'examples' && (
          <div>
            <h3 className="text-3xl font-bold text-slate-900 text-center mb-12">
              Real Profile Examples
            </h3>
            
            <div className="grid md:grid-cols-3 gap-8">
              {sampleProfiles.map((profile, index) => (
                <Card key={index} className="border-2 hover:shadow-lg transition-shadow">
                  <CardHeader className="text-center">
                    <div className="w-16 h-16 bg-gradient-to-r from-slate-400 to-slate-600 rounded-full mx-auto mb-4" />
                    <CardTitle className="text-xl">{profile.name}</CardTitle>
                    <p className="text-slate-600">{profile.role}</p>
                  </CardHeader>
                  
                  <CardContent>
                    <div className="text-center mb-6">
                      <div className={`text-4xl font-bold font-mono ${profile.color}`}>
                        {profile.score}
                      </div>
                      <Badge variant="outline" className="mt-2">
                        {profile.tier}
                      </Badge>
                    </div>
                    
                    <div className="space-y-3">
                      {Object.entries(profile.factors).map(([key, value]) => (
                        <div key={key} className="flex justify-between items-center">
                          <span className="text-sm text-slate-600 capitalize">{key}</span>
                          <div className="flex items-center gap-2">
                            <div className="w-16 bg-slate-200 rounded-full h-1.5">
                              <div 
                                className="h-full bg-teal-500 rounded-full"
                                style={{ width: `${value}%` }}
                              />
                            </div>
                            <span className="text-sm font-mono w-6">{value}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}

        {/* Transparency */}
        {activeTab === 'transparency' && (
          <div className="max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold text-slate-900 text-center mb-12">
              Complete Transparency
            </h3>
            
            <div className="grid md:grid-cols-2 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-green-500 rounded-full" />
                    What We Measure
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 text-slate-600">
                    <li>• Quantifiable skills and achievements</li>
                    <li>• Educational credentials and relevance</li>
                    <li>• Professional certifications</li>
                    <li>• Work history consistency and growth</li>
                    <li>• Resume presentation quality</li>
                  </ul>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-red-500 rounded-full" />
                    What We Don't Consider
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 text-slate-600">
                    <li>• Name, age, or gender</li>
                    <li>• Geographic location bias</li>
                    <li>• Company name prestige</li>
                    <li>• Personal connections</li>
                    <li>• Subjective "culture fit"</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
            
            <div className="mt-12 p-6 bg-blue-50 rounded-lg border border-blue-200">
              <h4 className="font-bold text-blue-900 mb-3">Our Commitment to Fairness</h4>
              <p className="text-blue-800">
                The Employee Score™ is continuously audited for bias by independent third parties. 
                Our algorithm is designed to identify and neutralize unconscious bias, ensuring that 
                every candidate is evaluated purely on merit and potential.
              </p>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default EmployeeScoreShowcase;
