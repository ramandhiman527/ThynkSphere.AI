
import React from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, Sparkles } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-background via-[#FFF1D5] to-[#BDDDE4]/20 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-64 h-64 bg-[#9FB3DF]/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#9EC6F3]/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-[#BDDDE4]/10 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      <div className="relative z-10">
        {/* Header */}
        <header className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-br from-[#9FB3DF] to-[#9EC6F3] rounded-lg flex items-center justify-center shadow-lg group hover:shadow-xl transition-all duration-300">
                <Sparkles className="w-6 h-6 text-white group-hover:scale-110 transition-transform duration-300" />
              </div>
              <span className="text-2xl font-bold text-[#9FB3DF]">ThynkSphere<span className="text-[#9EC6F3]">AI</span></span>
            </div>
            <nav className="hidden md:flex items-center space-x-8">
              <a href="#features" className="text-gray-600 hover:text-[#9FB3DF] transition-colors">Features</a>
              <a href="#about" className="text-gray-600 hover:text-[#9FB3DF] transition-colors">About</a>
              <Button variant="outline" className="border-[#9FB3DF] text-[#9FB3DF] hover:bg-[#9FB3DF] hover:text-white">
                Contact
              </Button>
            </nav>
          </div>
        </header>

        {/* Main Content */}
        <div className="container mx-auto px-4 pt-20 pb-32">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-6 bg-[#9FB3DF]/20 text-[#9FB3DF] border-[#9FB3DF]/30 text-sm font-medium px-4 py-2 animate-fade-in">
              Revolutionary AI Technology • Coming Soon
            </Badge>
            
            <h1 className="text-5xl lg:text-7xl font-bold text-gray-800 mb-6 animate-fade-in">
              Your Professional Value,
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#9FB3DF] to-[#9EC6F3]">
                Quantified
              </span>
            </h1>
            
            <p className="text-xl lg:text-2xl text-gray-600 max-w-3xl mx-auto mb-8 leading-relaxed animate-fade-in">
              Introducing the <strong className="text-[#9FB3DF]">Employee Score™</strong> - the world's first CIBIL-like scoring system for professional talent. Bringing objectivity, transparency, and precision to recruitment.
            </p>
            
            {/* Employee Score Visual */}
            <div className="relative w-64 h-64 mx-auto mb-12 animate-scale-in">
              <div className="absolute inset-0 bg-gradient-to-br from-[#9FB3DF] to-[#9EC6F3] rounded-full opacity-20 animate-pulse"></div>
              <div className="absolute inset-4 bg-white rounded-full shadow-2xl flex items-center justify-center">
                <div className="text-center">
                  <div className="text-4xl font-bold text-[#9FB3DF] mb-2">850</div>
                  <div className="text-sm text-gray-600">Employee Score™</div>
                  <div className="text-xs text-gray-400 mt-1">Excellent</div>
                </div>
              </div>
              <div className="absolute inset-0 border-4 border-[#9FB3DF]/30 rounded-full"></div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 animate-fade-in">
              <Button size="lg" className="bg-gradient-to-r from-[#9FB3DF] to-[#9EC6F3] hover:from-[#8EA3D3] hover:to-[#8BBAE7] text-white px-8 py-4 text-lg font-medium shadow-lg hover:shadow-xl transition-all duration-300">
                Join Our Waitlist
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button variant="outline" size="lg" className="border-[#9FB3DF] text-[#9FB3DF] hover:bg-[#9FB3DF] hover:text-white px-8 py-4 text-lg transition-all duration-300">
                Stay Updated
              </Button>
            </div>
            
            <div className="flex items-center justify-center gap-8 text-sm text-gray-500 animate-fade-in">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-[#9FB3DF] rounded-full animate-pulse"></div>
                <span>AI-Powered Scoring</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-[#9EC6F3] rounded-full animate-pulse"></div>
                <span>Transparent Algorithm</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-[#BDDDE4] rounded-full animate-pulse"></div>
                <span>Fair & Objective</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
