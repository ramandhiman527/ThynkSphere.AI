
import React from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, Sparkles } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative min-h-screen bg-gradient-to-b from-[#12372A] via-[#436850] to-[#ADBC9F] overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(251,250,218,0.3)_1px,transparent_0)] bg-[size:60px_60px]"></div>
      </div>
      
      {/* Floating elements */}
      <div className="absolute top-20 left-10 w-24 h-24 bg-[#ADBC9F]/20 rounded-full blur-xl animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-[#FBFADA]/10 rounded-full blur-2xl animate-pulse delay-1000"></div>
      <div className="absolute top-1/3 right-1/4 w-16 h-16 bg-[#436850]/30 rounded-lg rotate-45 animate-bounce opacity-60"></div>

      <div className="relative z-10">
        {/* Header */}
        <header className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-br from-[#436850] to-[#ADBC9F] rounded-xl flex items-center justify-center shadow-lg group hover:shadow-earth transition-all duration-300">
                <Sparkles className="w-5 h-5 text-[#FBFADA] group-hover:scale-110 transition-transform duration-300" />
              </div>
              <span className="text-xl font-black text-[#FBFADA]">
                ThynkSphere<span className="text-[#ADBC9F]">AI</span>
              </span>
            </div>
            <nav className="hidden md:flex items-center space-x-6">
              <a href="#features" className="text-[#FBFADA]/80 hover:text-[#FBFADA] transition-colors font-medium">Features</a>
              <a href="#about" className="text-[#FBFADA]/80 hover:text-[#FBFADA] transition-colors font-medium">About</a>
              <Button variant="outline" className="border-2 border-[#ADBC9F] text-[#FBFADA] bg-transparent hover:bg-[#ADBC9F] hover:text-[#12372A] font-semibold">
                Contact
              </Button>
            </nav>
          </div>
        </header>

        {/* Main Content */}
        <div className="container mx-auto px-4 pt-12 pb-24">
          <div className="max-w-5xl mx-auto text-center">
            <Badge className="mb-6 bg-[#436850]/20 text-[#FBFADA] border-[#ADBC9F]/30 text-sm font-bold px-5 py-2 animate-fade-in backdrop-blur-sm">
              Revolutionary AI Technology • Coming Soon
            </Badge>
            
            {/* Optimized Hero Text */}
            <h1 className="text-5xl lg:text-7xl font-black mb-8 leading-tight animate-fade-in">
              <span className="block text-[#FBFADA] mb-3">Create the most</span>
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#ADBC9F] via-[#FBFADA] to-[#ADBC9F] animate-gradient bg-[length:200%_200%]">
                intelligent hiring
              </span>
              <span className="block text-[#FBFADA]/90 font-light text-4xl lg:text-5xl italic mt-3">
                for your company.
              </span>
            </h1>
            
            <p className="text-lg lg:text-xl text-[#FBFADA]/80 max-w-4xl mx-auto mb-12 leading-relaxed animate-fade-in font-medium">
              Powered by the most advanced <strong className="font-black text-transparent bg-clip-text bg-gradient-to-r from-[#ADBC9F] to-[#FBFADA]">Employee Score™</strong> algorithm for talent evaluation.
            </p>
            
            {/* Employee Score Visual */}
            <div className="relative w-72 h-72 mx-auto mb-16 animate-scale-in">
              <div className="absolute inset-0 bg-gradient-to-br from-[#ADBC9F]/30 to-[#436850]/30 rounded-full blur-2xl animate-pulse"></div>
              
              <div className="absolute inset-6 bg-gradient-to-br from-[#12372A]/90 to-[#436850]/90 rounded-full shadow-earth flex items-center justify-center border-4 border-[#ADBC9F]/50 backdrop-blur-sm">
                <div className="text-center">
                  <div className="text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-[#ADBC9F] to-[#FBFADA] mb-3 animate-pulse">850</div>
                  <div className="text-lg font-bold text-[#FBFADA] mb-1">Employee Score™</div>
                  <div className="text-base text-[#ADBC9F] font-bold">Excellent</div>
                </div>
              </div>
              
              <div className="absolute inset-0 border-4 border-transparent bg-gradient-to-r from-[#ADBC9F] to-[#FBFADA] rounded-full animate-spin opacity-40" style={{ animationDuration: '20s', mask: 'conic-gradient(transparent 270deg, white 360deg)', WebkitMask: 'conic-gradient(transparent 270deg, white 360deg)' }}></div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16 animate-fade-in">
              <Button size="lg" className="bg-gradient-to-r from-[#436850] to-[#ADBC9F] hover:from-[#12372A] hover:to-[#436850] text-[#FBFADA] px-12 py-6 text-lg font-black shadow-earth hover:shadow-soft transition-all duration-300 rounded-2xl transform hover:scale-105">
                Get Started For Free
                <ArrowRight className="ml-3 w-6 h-6" />
              </Button>
              <div className="text-center sm:text-left">
                <div className="text-base text-[#FBFADA]/60 mt-3 font-medium">No credit card required*</div>
              </div>
            </div>
            
            <div className="flex items-center justify-center gap-12 text-base text-[#FBFADA]/80 animate-fade-in">
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 bg-[#ADBC9F] rounded-full animate-pulse"></div>
                <span className="font-semibold">AI-Powered Scoring</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 bg-[#FBFADA] rounded-full animate-pulse"></div>
                <span className="font-semibold">Transparent Algorithm</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 bg-[#436850] rounded-full animate-pulse"></div>
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
