
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

const TestimonialSection = () => {
  const testimonials = [
    {
      quote: "ThynkSphere AI is really cool. End-to-end talent scoring system (unlike traditional HR), truly data-driven (unlike LinkedIn), and fully transparent (unlike both!)",
      author: "Sarah Johnson",
      role: "Head of Talent Acquisition",
      company: "TechCorp",
      score: 892,
      bgColor: "from-green-400 to-green-600"
    },
    {
      quote: "I've been using Employee Score™ for around 6 months and couldn't be happier with the results. It puts objectivity first but doesn't sacrifice quality, the AI matching works perfectly.",
      author: "Michael Chen",
      role: "Senior Software Engineer",
      company: "InnovateLabs",
      score: 847,
      bgColor: "from-blue-400 to-blue-600"
    },
    {
      quote: "The transparency in scoring helped me understand my professional strengths and areas for improvement. Got matched with my dream job within weeks!",
      author: "Emily Rodriguez",
      role: "Product Manager",
      company: "StartupXYZ",
      score: 823,
      bgColor: "from-purple-400 to-purple-600"
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-[#FFF1D5]/30 to-white overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-8">
            <div className="w-24 h-24 bg-gradient-to-br from-[#FFF1D5] to-[#BDDDE4] rounded-full flex items-center justify-center animate-bounce">
              <div className="w-16 h-16 bg-gradient-to-br from-[#9FB3DF] to-[#9EC6F3] rounded-full flex items-center justify-center">
                <Star className="w-8 h-8 text-white" />
              </div>
            </div>
          </div>
          
          <h2 className="text-5xl lg:text-6xl font-black text-gray-900 mb-6">
            Our
            <span className="relative inline-block ml-4">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#9FB3DF] to-[#9EC6F3]">customers</span>
              <div className="absolute -top-4 -right-8 w-16 h-16 bg-gradient-to-br from-[#FFF1D5] to-[#BDDDE4] rounded-full opacity-60 animate-pulse"></div>
            </span>
            <span className="block">say it best</span>
          </h2>
        </div>

        {/* Testimonials Grid */}
        <div className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto mb-12">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index} 
              className="relative overflow-hidden border-0 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 bg-white rounded-3xl group"
            >
              <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${testimonial.bgColor}`}></div>
              
              <CardContent className="p-8">
                {/* Quote */}
                <div className={`inline-block px-6 py-4 rounded-2xl bg-gradient-to-r ${testimonial.bgColor} text-white mb-6 relative`}>
                  <p className="text-lg font-medium leading-relaxed">
                    "{testimonial.quote}"
                  </p>
                  <div className="absolute -bottom-2 left-8 w-4 h-4 bg-gradient-to-r from-green-400 to-green-600 rotate-45"></div>
                </div>

                {/* Author Info */}
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-bold text-gray-900 text-lg">{testimonial.author}</h4>
                    <p className="text-gray-600 text-sm">{testimonial.role}</p>
                    <p className="text-gray-500 text-xs">{testimonial.company}</p>
                  </div>
                  
                  {/* Score Badge */}
                  <div className="text-right">
                    <Badge className={`bg-gradient-to-r ${testimonial.bgColor} text-white border-0 text-lg font-bold px-3 py-1`}>
                      {testimonial.score}
                    </Badge>
                    <p className="text-xs text-gray-500 mt-1">Employee Score™</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Navigation */}
        <div className="flex items-center justify-center gap-4">
          <button className="w-12 h-12 rounded-full border-2 border-gray-300 flex items-center justify-center hover:border-[#9FB3DF] hover:bg-[#9FB3DF] hover:text-white transition-all duration-300 group">
            <ChevronLeft className="w-5 h-5 group-hover:scale-110 transition-transform" />
          </button>
          <button className="w-12 h-12 rounded-full bg-gradient-to-r from-[#9FB3DF] to-[#9EC6F3] text-white flex items-center justify-center hover:shadow-lg transition-all duration-300 group">
            <ChevronRight className="w-5 h-5 group-hover:scale-110 transition-transform" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
