
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Clock, Users, TrendingUp } from 'lucide-react';

const ProblemSolution = () => {
  const benefits = [
    {
      icon: Clock,
      title: 'Reduced Hiring Time',
      value: '50%',
      description: 'Cut your recruitment timeline in half with intelligent automation',
      color: '#9FB3DF'
    },
    {
      icon: Users,
      title: 'Enhanced Candidate Quality',
      value: '3x',
      description: 'Better candidate-role matching through AI-powered scoring',
      color: '#9EC6F3'
    },
    {
      icon: TrendingUp,
      title: 'Improved Retention',
      value: '40%',
      description: 'Higher job satisfaction through precise role matching',
      color: '#BDDDE4'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-[#FFF1D5]/30 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-[#9EC6F3]/20 text-[#9EC6F3] border-[#9EC6F3]/30">
            Proven Results
          </Badge>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-6">
            Transforming Recruitment with
            <span className="block text-[#9FB3DF]">Measurable Impact</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our AI-powered platform delivers tangible results that benefit both 
            job seekers and recruiters, creating a more efficient hiring ecosystem.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-16">
          {benefits.map((benefit, index) => (
            <Card key={benefit.title} className="text-center border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-white">
              <CardContent className="p-8">
                <div 
                  className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6"
                  style={{ backgroundColor: `${benefit.color}20` }}
                >
                  <benefit.icon 
                    className="w-8 h-8" 
                    style={{ color: benefit.color }}
                  />
                </div>
                <div 
                  className="text-4xl font-bold mb-2"
                  style={{ color: benefit.color }}
                >
                  {benefit.value}
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div id="about" className="bg-white rounded-2xl shadow-xl p-8 lg:p-12 max-w-4xl mx-auto border border-[#9FB3DF]/10">
          <div className="text-center">
            <h3 className="text-3xl font-bold text-gray-800 mb-6">Our Vision</h3>
            <p className="text-xl text-gray-600 leading-relaxed">
              Empowering smarter recruitment through cutting-edge AI solutions. 
              We're building a future where talent discovery is objective, transparent, 
              and accessible to everyone.
            </p>
            <div className="mt-8 flex items-center justify-center">
              <div className="w-24 h-1 bg-gradient-to-r from-[#9FB3DF] to-[#9EC6F3] rounded-full"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSolution;
