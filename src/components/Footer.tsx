
import React from 'react';
import { Button } from '@/components/ui/button';
import { Sparkles } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="relative overflow-hidden">
      {/* Main CTA Section */}
      <div className="relative bg-gradient-to-br from-[#8F87F1] via-[#C68EFD] to-[#E9A5F1] py-16">
        {/* Subtle lighting effect */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-[#FED2E2]/20 rounded-full blur-3xl"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            {/* Logo and company name */}
            <div className="flex items-center justify-center space-x-3 mb-6">
              <div className="w-8 h-8 bg-gradient-to-br from-white/30 to-[#FED2E2]/30 rounded-lg flex items-center justify-center backdrop-blur-sm">
                <Sparkles className="w-5 h-5 text-white-shadow" />
              </div>
              <span className="text-xl font-bold-strong text-white-shadow">ThynkSphere<span className="text-[#FED2E2]">AI</span></span>
            </div>
            
            {/* Main heading */}
            <h2 className="text-2xl lg:text-3xl font-bold-strong text-white-shadow mb-5 leading-tight">
              Ready to transform your recruitment?
            </h2>
            
            {/* Subtitle */}
            <p className="text-base text-light-lilac mb-6 max-w-2xl mx-auto">
              Deploy AI-powered talent scoring instantly. Start today.
            </p>
            
            {/* CTA Button */}
            <Button 
              size="lg" 
              className="bg-white hover:bg-white/90 text-deep-plum px-8 py-4 text-base font-bold-strong rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border-0"
            >
              Get Started Now
            </Button>
          </div>
        </div>
      </div>

      {/* Bottom Navigation Section */}
      <div className="bg-[#8F87F1] rounded-t-3xl relative -mt-6 pt-10 pb-6">
        <div className="container mx-auto px-4">
          {/* Navigation and Logo Row */}
          <div className="flex flex-col md:flex-row justify-between items-center mb-6">
            {/* Logo */}
            <div className="flex items-center space-x-3 mb-4 md:mb-0">
              <div className="w-6 h-6 bg-gradient-to-br from-white/30 to-[#FED2E2]/30 rounded-lg flex items-center justify-center backdrop-blur-sm">
                <Sparkles className="w-4 h-4 text-white-shadow" />
              </div>
              <span className="text-base font-bold-strong text-white-shadow">ThynkSphere<span className="text-[#FED2E2]">AI</span></span>
            </div>
            
            {/* Navigation Links */}
            <nav className="flex space-x-6">
              <a href="#" className="text-light-lilac hover:text-white transition-colors text-sm font-medium-bold">Home</a>
              <a href="#" className="text-light-lilac hover:text-white transition-colors text-sm font-medium-bold">Documentation</a>
              <a href="#" className="text-light-lilac hover:text-white transition-colors text-sm font-medium-bold">Pricing</a>
              <a href="#" className="text-light-lilac hover:text-white transition-colors text-sm font-medium-bold">Blog</a>
            </nav>
          </div>
          
          {/* Bottom text row */}
          <div className="flex flex-col md:flex-row justify-between items-center text-light-lilac text-xs border-t border-white/20 pt-4">
            <div>
              © 2024 ThynkSphere AI. All rights reserved.
            </div>
            <div className="flex space-x-4 mt-3 md:mt-0">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms & Conditions</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
