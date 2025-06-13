
import React from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, Sparkles } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 overflow-hidden">
      {/* Tech-forward animated background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900/90 via-indigo-900/20 to-slate-900/90">
        {/* Geometric grid pattern */}
        <div className="absolute inset-0 opacity-20">
          <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
            <defs>
              <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
                <path d="M 10 0 L 0 0 0 10" fill="none" stroke="currentColor" strokeWidth="0.5" className="text-cyan-400"/>
              </pattern>
            </defs>
            <rect width="100" height="100" fill="url(#grid)" />
          </svg>
        </div>
        
        {/* Floating geometric elements */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-[#9FB3DF]/30 to-[#9EC6F3]/30 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-48 h-48 bg-gradient-to-br from-[#BDDDE4]/20 to-[#9FB3DF]/20 rounded-full blur-2xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-gradient-to-r from-cyan-400/20 to-blue-500/20 rounded-lg rotate-45 animate-bounce"></div>
        
        {/* Subtle gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 via-transparent to-slate-900/30"></div>
      </div>

      <div className="relative z-10">
        {/* Header */}
        <header className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-gradient-to-br from-[#9FB3DF] to-[#9EC6F3] rounded-xl flex items-center justify-center shadow-2xl group hover:shadow-cyan-500/25 transition-all duration-300">
                <Sparkles className="w-7 h-7 text-white group-hover:scale-110 transition-transform duration-300" />
              </div>
              <span className="text-2xl font-black bg-gradient-to-r from-white to-cyan-100 bg-clip-text text-transparent">
                ThynkSphere<span className="text-[#9EC6F3]">AI</span>
              </span>
            </div>
            <nav className="hidden md:flex items-center space-x-8">
              <a href="#features" className="text-slate-300 hover:text-white transition-colors font-medium">Features</a>
              <a href="#about" className="text-slate-300 hover:text-white transition-colors font-medium">About</a>
              <Button variant="outline" className="border-2 border-[#9FB3DF] text-white bg-transparent hover:bg-[#9FB3DF] hover:text-slate-900 font-semibold">
                Contact
              </Button>
            </nav>
          </div>
        </header>

        {/* Main Content */}
        <div className="container mx-auto px-4 pt-16 pb-32">
          <div className="max-w-6xl mx-auto text-center">
            <Badge className="mb-8 bg-gradient-to-r from-[#9FB3DF]/20 to-[#9EC6F3]/20 text-cyan-300 border-cyan-400/30 text-base font-bold px-6 py-3 animate-fade-in backdrop-blur-sm">
              Revolutionary AI Technology • Coming Soon
            </Badge>
            
            {/* Bold Hero Text with Multi-tone Gradient */}
            <h1 className="text-7xl lg:text-9xl font-black mb-12 leading-tight animate-fade-in">
              <span className="block text-white mb-4">Create the most</span>
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-pink-500 to-purple-600 animate-gradient bg-[length:200%_200%]">
                intelligent hiring
              </span>
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-600 font-light text-6xl lg:text-7xl italic mt-4">
                for your company.
              </span>
            </h1>
            
            <p className="text-2xl lg:text-3xl text-slate-200 max-w-5xl mx-auto mb-16 leading-relaxed animate-fade-in font-light">
              Powered by the most advanced <strong className="font-black text-transparent bg-clip-text bg-gradient-to-r from-[#9FB3DF] to-[#9EC6F3]">Employee Score™</strong> algorithm for talent evaluation.
            </p>
            
            {/* Enhanced Employee Score Visual */}
            <div className="relative w-96 h-96 mx-auto mb-20 animate-scale-in">
              {/* Outer glow ring */}
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/30 to-blue-600/30 rounded-full blur-2xl animate-pulse"></div>
              
              {/* Main score circle */}
              <div className="absolute inset-8 bg-gradient-to-br from-slate-800/90 to-slate-900/90 rounded-full shadow-2xl flex items-center justify-center border-4 border-gradient-to-r from-[#9FB3DF] to-[#9EC6F3] backdrop-blur-sm">
                <div className="text-center">
                  <div className="text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-[#9FB3DF] via-cyan-400 to-[#9EC6F3] mb-4 animate-pulse">850</div>
                  <div className="text-xl font-bold text-white mb-2">Employee Score™</div>
                  <div className="text-lg text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-500 font-bold">Excellent</div>
                </div>
              </div>
              
              {/* Rotating border */}
              <div className="absolute inset-0 border-4 border-transparent bg-gradient-to-r from-[#9FB3DF] via-cyan-400 to-[#9EC6F3] rounded-full animate-spin opacity-60" style={{ animationDuration: '20s', mask: 'conic-gradient(transparent 270deg, white 360deg)', WebkitMask: 'conic-gradient(transparent 270deg, white 360deg)' }}></div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-8 justify-center mb-20 animate-fade-in">
              <Button size="lg" className="bg-gradient-to-r from-orange-500 via-pink-500 to-purple-600 hover:from-orange-600 hover:via-pink-600 hover:to-purple-700 text-white px-16 py-8 text-2xl font-black shadow-2xl hover:shadow-purple-500/25 transition-all duration-300 rounded-2xl transform hover:scale-105">
                Get Started For Free
                <ArrowRight className="ml-4 w-8 h-8" />
              </Button>
              <div className="text-center sm:text-left">
                <div className="text-lg text-slate-400 mt-4 font-medium">No credit card required*</div>
              </div>
            </div>
            
            <div className="flex items-center justify-center gap-16 text-lg text-slate-300 animate-fade-in">
              <div className="flex items-center gap-4">
                <div className="w-4 h-4 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full animate-pulse"></div>
                <span className="font-semibold">AI-Powered Scoring</span>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-4 h-4 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full animate-pulse"></div>
                <span className="font-semibold">Transparent Algorithm</span>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-4 h-4 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full animate-pulse"></div>
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
