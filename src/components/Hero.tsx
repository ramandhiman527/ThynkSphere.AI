import React from 'react';
import { Badge } from '@/components/ui/badge';
import { Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import WaitlistForm from './WaitlistForm';

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
                <Sparkles className="w-5 h-5 text-white-shadow group-hover:scale-110 transition-transform duration-300" />
              </div>
              <span className="text-xl font-bold-strong text-white-shadow">
                UltraSphere<span className="text-[#FED2E2]">AI</span>
              </span>
            </div>
            <nav className="hidden md:flex items-center space-x-6">
              <a href="#features" className="text-light-lilac hover:text-white transition-colors font-medium-bold">Features</a>
              <a href="#about" className="text-light-lilac hover:text-white transition-colors font-medium-bold">About</a>
              <Button variant="outline" className="border-2 border-white/30 text-white-shadow bg-transparent hover:bg-white/20 hover:text-white font-medium-bold backdrop-blur-sm">
                Contact
              </Button>
            </nav>
          </div>
        </header>

        {/* Main Content */}
        <div className="container mx-auto px-4 pt-8 pb-16">
          <div className="max-w-5xl mx-auto text-center">
            {/* Optimized Hero Text */}
            <Badge className="mb-6 bg-white/20 text-white-shadow border-white/30 text-sm font-bold-strong px-5 py-2 animate-fade-in backdrop-blur-sm">
              Revolutionary AI Technology • Coming Soon
            </Badge>
            
            <h1 className="text-3xl lg:text-5xl font-bold-strong mb-6 leading-tight animate-fade-in">
              <span className="block text-white-shadow mb-2">Create the most</span>
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-white via-[#FED2E2] to-white animate-gradient bg-[length:200%_200%]">
                intelligent hiring
              </span>
              <span className="block text-light-lilac font-medium-bold text-2xl lg:text-3xl italic mt-2">
                for your company.
              </span>
            </h1>
            
            <p className="text-lg lg:text-xl text-light-lilac max-w-4xl mx-auto mb-10 leading-relaxed animate-fade-in font-medium-bold">
              Powered by the most advanced <strong className="font-bold-strong text-transparent bg-clip-text bg-gradient-to-r from-[#FED2E2] to-white">Employee Score™</strong> algorithm for talent evaluation.
            </p>
            
            {/* Employee Score Visual */}
            <div className="relative w-56 h-56 mx-auto mb-12 animate-scale-in">
              <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-[#FED2E2]/20 rounded-full blur-2xl animate-pulse"></div>
              
              <div className="absolute inset-6 bg-gradient-to-br from-[#8F87F1]/80 to-[#C68EFD]/80 rounded-full shadow-purple flex items-center justify-center border-4 border-white/30 backdrop-blur-sm">
                <div className="text-center">
                  <div className="text-3xl font-bold-strong text-white-shadow mb-2 animate-pulse">850</div>
                  <div className="text-base font-bold-strong text-white-shadow mb-1">Employee Score™</div>
                  <div className="text-sm text-[#FED2E2] font-medium-bold">Excellent</div>
                </div>
              </div>
              
              <div className="absolute inset-0 border-4 border-transparent bg-gradient-to-r from-white to-[#FED2E2] rounded-full animate-spin opacity-40" style={{ animationDuration: '20s', mask: 'conic-gradient(transparent 270deg, white 360deg)', WebkitMask: 'conic-gradient(transparent 270deg, white 360deg)' }}></div>
            </div>
            
            {/* Waitlist Form - replacing the old button */}
            <WaitlistForm />
            
            <div className="flex items-center justify-center gap-8 text-sm text-light-lilac animate-fade-in mt-12">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-[#FED2E2] rounded-full animate-pulse"></div>
                <span className="font-medium-bold">AI-Powered Scoring</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                <span className="font-medium-bold">Transparent Algorithm</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-[#C68EFD] rounded-full animate-pulse"></div>
                <span className="font-medium-bold">Fair & Objective</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
