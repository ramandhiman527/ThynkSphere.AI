
import React from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, Sparkles } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative min-h-screen bg-gradient-to-b from-[#8F87F1] via-[#C68EFD] to-[#E9A5F1] overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(254,210,226,0.3)_1px,transparent_0)] bg-[size:60px_60px]"></div>
      </div>
      
      {/* Floating elements */}
      <div className="absolute top-20 left-10 w-24 h-24 bg-[#FED2E2]/20 rounded-full blur-xl animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-white/10 rounded-full blur-2xl animate-pulse delay-1000"></div>
      <div className="absolute top-1/3 right-1/4 w-16 h-16 bg-[#C68EFD]/30 rounded-lg rotate-45 animate-bounce opacity-60"></div>

      <div className="relative z-10">
        {/* Header */}
        <header className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-br from-white/20 to-[#FED2E2]/30 rounded-xl flex items-center justify-center shadow-lg group hover:shadow-purple transition-all duration-300 backdrop-blur-sm">
                <Sparkles className="w-5 h-5 text-white group-hover:scale-110 transition-transform duration-300" />
              </div>
              <span className="text-xl font-black text-white">
                ThynkSphere<span className="text-[#FED2E2]">AI</span>
              </span>
            </div>
            <nav className="hidden md:flex items-center space-x-6">
              <a href="#features" className="text-white/80 hover:text-white transition-colors font-medium">Features</a>
              <a href="#about" className="text-white/80 hover:text-white transition-colors font-medium">About</a>
              <Button variant="outline" className="border-2 border-white/30 text-white bg-transparent hover:bg-white/20 hover:text-white font-semibold backdrop-blur-sm">
                Contact
              </Button>
            </nav>
          </div>
        </header>

        {/* Main Content */}
        <div className="container mx-auto px-4 pt-12 pb-24">
          <div className="max-w-5xl mx-auto text-center">
            <Badge className="mb-6 bg-white/20 text-white border-white/30 text-sm font-bold px-5 py-2 animate-fade-in backdrop-blur-sm">
              Revolutionary AI Technology • Coming Soon
            </Badge>
            
            {/* Optimized Hero Text */}
            <h1 className="text-4xl lg:text-6xl font-black mb-8 leading-tight animate-fade-in">
              <span className="block text-white mb-3">Create the most</span>
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-white via-[#FED2E2] to-white animate-gradient bg-[length:200%_200%]">
                intelligent hiring
              </span>
              <span className="block text-white/90 font-light text-3xl lg:text-4xl italic mt-3">
                for your company.
              </span>
            </h1>
            
            <p className="text-lg lg:text-xl text-white/80 max-w-4xl mx-auto mb-12 leading-relaxed animate-fade-in font-medium">
              Powered by the most advanced <strong className="font-black text-transparent bg-clip-text bg-gradient-to-r from-[#FED2E2] to-white">Employee Score™</strong> algorithm for talent evaluation.
            </p>
            
            {/* Employee Score Visual */}
            <div className="relative w-64 h-64 mx-auto mb-16 animate-scale-in">
              <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-[#FED2E2]/20 rounded-full blur-2xl animate-pulse"></div>
              
              <div className="absolute inset-6 bg-gradient-to-br from-[#8F87F1]/80 to-[#C68EFD]/80 rounded-full shadow-purple flex items-center justify-center border-4 border-white/30 backdrop-blur-sm">
                <div className="text-center">
                  <div className="text-4xl font-black text-white mb-3 animate-pulse">850</div>
                  <div className="text-lg font-bold text-white mb-1">Employee Score™</div>
                  <div className="text-base text-[#FED2E2] font-bold">Excellent</div>
                </div>
              </div>
              
              <div className="absolute inset-0 border-4 border-transparent bg-gradient-to-r from-white to-[#FED2E2] rounded-full animate-spin opacity-40" style={{ animationDuration: '20s', mask: 'conic-gradient(transparent 270deg, white 360deg)', WebkitMask: 'conic-gradient(transparent 270deg, white 360deg)' }}></div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16 animate-fade-in">
              <Button size="lg" className="bg-white/20 hover:bg-white/30 text-white px-12 py-6 text-lg font-black shadow-purple hover:shadow-soft transition-all duration-300 rounded-2xl transform hover:scale-105 backdrop-blur-sm border border-white/20">
                Get Started For Free
                <ArrowRight className="ml-3 w-6 h-6" />
              </Button>
              <div className="text-center sm:text-left">
                <div className="text-base text-white/60 mt-3 font-medium">No credit card required*</div>
              </div>
            </div>
            
            <div className="flex items-center justify-center gap-12 text-base text-white/80 animate-fade-in">
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 bg-[#FED2E2] rounded-full animate-pulse"></div>
                <span className="font-semibold">AI-Powered Scoring</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 bg-white rounded-full animate-pulse"></div>
                <span className="font-semibold">Transparent Algorithm</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 bg-[#C68EFD] rounded-full animate-pulse"></div>
                <span className="font-semibold">Fair & Objective</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
