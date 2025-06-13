
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
      bgGradient: "from-emerald-500 via-teal-500 to-cyan-500",
      glowColor: "emerald"
    },
    {
      quote: "I've been using Employee Score™ for around 6 months and couldn't be happier with the results. It puts objectivity first but doesn't sacrifice quality, the AI matching works perfectly.",
      author: "Michael Chen",
      role: "Senior Software Engineer",
      company: "InnovateLabs",
      score: 847,
      bgGradient: "from-blue-500 via-indigo-500 to-purple-500",
      glowColor: "blue"
    },
    {
      quote: "The transparency in scoring helped me understand my professional strengths and areas for improvement. Got matched with my dream job within weeks!",
      author: "Emily Rodriguez",
      role: "Product Manager",
      company: "StartupXYZ",
      score: 823,
      bgGradient: "from-purple-500 via-pink-500 to-rose-500",
      glowColor: "purple"
    }
  ];

  return (
    <section className="py-32 bg-gradient-to-br from-slate-800 via-slate-900 to-indigo-900 overflow-hidden relative">
      {/* Tech background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.15)_1px,transparent_0)] bg-[size:50px_50px]"></div>
      </div>
      
      {/* Floating gradient orbs */}
      <div className="absolute top-0 left-1/4 w-72 h-72 bg-gradient-to-br from-cyan-400/10 to-blue-600/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gradient-to-br from-purple-400/10 to-pink-600/10 rounded-full blur-3xl animate-pulse delay-1000"></div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="flex items-center justify-center mb-10">
            <div className="w-28 h-28 bg-gradient-to-br from-slate-700/50 to-slate-800/50 rounded-full flex items-center justify-center animate-bounce backdrop-blur-sm border border-cyan-400/30">
              <div className="w-20 h-20 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-full flex items-center justify-center shadow-2xl">
                <Star className="w-10 h-10 text-white" />
              </div>
            </div>
          </div>
          
          <h2 className="text-6xl lg:text-8xl font-black text-white mb-8 leading-tight">
            Our
            <span className="relative inline-block ml-6">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-pink-500 to-purple-600 animate-gradient bg-[length:200%_200%]">customers</span>
              <div className="absolute -top-6 -right-10 w-20 h-20 bg-gradient-to-br from-cyan-400/20 to-purple-500/20 rounded-full opacity-60 animate-pulse"></div>
            </span>
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-600">say it best</span>
          </h2>
        </div>

        {/* Testimonials Grid */}
        <div className="grid lg:grid-cols-3 gap-10 max-w-8xl mx-auto mb-16">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index} 
              className="relative overflow-hidden border-0 shadow-2xl hover:shadow-cyan-500/25 transition-all duration-500 hover:-translate-y-3 bg-gradient-to-br from-slate-800/90 to-slate-900/90 rounded-3xl group backdrop-blur-sm border border-slate-700/50"
            >
              <div className={`absolute top-0 left-0 right-0 h-2 bg-gradient-to-r ${testimonial.bgGradient}`}></div>
              
              {/* Glow effect */}
              <div className={`absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-500 bg-gradient-to-br ${testimonial.bgGradient} blur-xl`}></div>
              
              <CardContent className="p-10 relative z-10">
                {/* Quote */}
                <div className={`inline-block px-8 py-6 rounded-2xl bg-gradient-to-r ${testimonial.bgGradient} text-white mb-8 relative shadow-2xl`}>
                  <p className="text-xl font-semibold leading-relaxed">
                    "{testimonial.quote}"
                  </p>
                  <div className={`absolute -bottom-3 left-10 w-6 h-6 bg-gradient-to-r ${testimonial.bgGradient} rotate-45`}></div>
                </div>

                {/* Author Info */}
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-black text-white text-xl mb-1">{testimonial.author}</h4>
                    <p className="text-slate-300 text-base font-medium">{testimonial.role}</p>
                    <p className="text-slate-400 text-sm">{testimonial.company}</p>
                  </div>
                  
                  {/* Score Badge */}
                  <div className="text-right">
                    <Badge className={`bg-gradient-to-r ${testimonial.bgGradient} text-white border-0 text-2xl font-black px-4 py-2 shadow-lg`}>
                      {testimonial.score}
                    </Badge>
                    <p className="text-sm text-slate-400 mt-2 font-medium">Employee Score™</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Navigation */}
        <div className="flex items-center justify-center gap-6">
          <button className="w-16 h-16 rounded-full border-2 border-slate-600 bg-slate-800/50 backdrop-blur-sm flex items-center justify-center hover:border-cyan-400 hover:bg-cyan-400/20 hover:text-cyan-300 text-white transition-all duration-300 group">
            <ChevronLeft className="w-6 h-6 group-hover:scale-110 transition-transform" />
          </button>
          <button className="w-16 h-16 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 text-white flex items-center justify-center hover:shadow-cyan-500/50 hover:shadow-2xl transition-all duration-300 group transform hover:scale-110">
            <ChevronRight className="w-6 h-6 group-hover:scale-110 transition-transform" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
