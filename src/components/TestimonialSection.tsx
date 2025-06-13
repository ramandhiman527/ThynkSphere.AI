
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
      bgGradient: "from-[#8F87F1] to-[#C68EFD]",
      glowColor: "purple"
    },
    {
      quote: "I've been using Employee Score™ for around 6 months and couldn't be happier with the results. It puts objectivity first but doesn't sacrifice quality, the AI matching works perfectly.",
      author: "Michael Chen",
      role: "Senior Software Engineer",
      company: "InnovateLabs",
      score: 847,
      bgGradient: "from-[#C68EFD] to-[#E9A5F1]",
      glowColor: "soft"
    },
    {
      quote: "The transparency in scoring helped me understand my professional strengths and areas for improvement. Got matched with my dream job within weeks!",
      author: "Emily Rodriguez",
      role: "Product Manager",
      company: "StartupXYZ",
      score: 823,
      bgGradient: "from-[#E9A5F1] to-[#FED2E2]",
      glowColor: "purple"
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-b from-[#FED2E2] to-[#FED2E2] overflow-hidden relative">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(143,135,241,0.2)_1px,transparent_0)] bg-[size:40px_40px]"></div>
      </div>
      
      {/* Floating elements */}
      <div className="absolute top-0 left-1/4 w-48 h-48 bg-[#8F87F1]/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-[#C68EFD]/10 rounded-full blur-3xl animate-pulse delay-1000"></div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-8">
            <div className="w-16 h-16 bg-gradient-to-br from-[#8F87F1]/20 to-[#C68EFD]/20 rounded-full flex items-center justify-center animate-bounce backdrop-blur-sm border border-[#C68EFD]/30">
              <div className="w-12 h-12 bg-gradient-to-br from-[#C68EFD] to-[#E9A5F1] rounded-full flex items-center justify-center shadow-purple">
                <Star className="w-6 h-6 text-white" />
              </div>
            </div>
          </div>
          
          <h2 className="text-3xl lg:text-5xl font-black text-[#8F87F1] mb-6 leading-tight">
            Our
            <span className="relative inline-block ml-4">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#C68EFD] to-[#8F87F1] animate-gradient bg-[length:200%_200%]">customers</span>
            </span>
            <span className="block text-[#8F87F1]/80 text-2xl lg:text-3xl mt-2">say it best</span>
          </h2>
        </div>

        {/* Testimonials Grid */}
        <div className="grid lg:grid-cols-3 gap-6 max-w-6xl mx-auto mb-8">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index} 
              className="relative overflow-hidden border-0 shadow-soft hover:shadow-purple transition-all duration-500 hover:-translate-y-2 bg-gradient-to-br from-white/95 to-[#FED2E2]/30 rounded-3xl group backdrop-blur-sm border border-[#C68EFD]/20"
            >
              <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${testimonial.bgGradient}`}></div>
              
              <div className={`absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500 bg-gradient-to-br ${testimonial.bgGradient} blur-xl`}></div>
              
              <CardContent className="p-6 relative z-10">
                {/* Quote */}
                <div className={`inline-block px-5 py-3 rounded-2xl bg-gradient-to-r ${testimonial.bgGradient} text-white mb-5 relative shadow-soft`}>
                  <p className="text-sm font-semibold leading-relaxed">
                    "{testimonial.quote}"
                  </p>
                  <div className={`absolute -bottom-2 left-8 w-4 h-4 bg-gradient-to-r ${testimonial.bgGradient} rotate-45`}></div>
                </div>

                {/* Author Info */}
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-black text-[#8F87F1] text-base mb-1">{testimonial.author}</h4>
                    <p className="text-[#C68EFD] text-sm font-medium">{testimonial.role}</p>
                    <p className="text-[#C68EFD]/70 text-xs">{testimonial.company}</p>
                  </div>
                  
                  {/* Score Badge */}
                  <div className="text-right">
                    <Badge className={`bg-gradient-to-r ${testimonial.bgGradient} text-white border-0 text-base font-black px-3 py-1 shadow-soft`}>
                      {testimonial.score}
                    </Badge>
                    <p className="text-xs text-[#C68EFD] mt-1 font-medium">Employee Score™</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Navigation */}
        <div className="flex items-center justify-center gap-4">
          <button className="w-10 h-10 rounded-full border-2 border-[#C68EFD]/30 bg-white/50 backdrop-blur-sm flex items-center justify-center hover:border-[#C68EFD] hover:bg-[#C68EFD] hover:text-white text-[#8F87F1] transition-all duration-300 group">
            <ChevronLeft className="w-4 h-4 group-hover:scale-110 transition-transform" />
          </button>
          <button className="w-10 h-10 rounded-full bg-gradient-to-r from-[#8F87F1] to-[#C68EFD] text-white flex items-center justify-center hover:shadow-purple transition-all duration-300 group transform hover:scale-110">
            <ChevronRight className="w-4 h-4 group-hover:scale-110 transition-transform" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
