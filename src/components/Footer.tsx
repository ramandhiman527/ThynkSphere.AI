
import React from 'react';
import { Button } from '@/components/ui/button';
import { Sparkles, TrendingUp } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="relative overflow-hidden">
      {/* Main CTA Section - matching Shipable's centered layout */}
      <div className="relative bg-gradient-to-br from-[#12372A] via-[#1a4a35] to-[#436850] py-24">
        {/* Subtle lighting effect similar to Shipable's blue/purple blur */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#ADBC9F]/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-[#FBFADA]/10 rounded-full blur-3xl"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            {/* Logo and company name */}
            <div className="flex items-center justify-center space-x-3 mb-8">
              <div className="w-8 h-8 bg-gradient-to-br from-[#ADBC9F] to-[#FBFADA] rounded-lg flex items-center justify-center">
                <Sparkles className="w-5 h-5 text-[#12372A]" />
              </div>
              <span className="text-2xl font-bold text-white">ThynkSphere<span className="text-[#ADBC9F]">AI</span></span>
            </div>
            
            {/* Main heading - matching Shipable's style */}
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
              Ready to transform your recruitment?
            </h2>
            
            {/* Subtitle */}
            <p className="text-lg text-[#ADBC9F] mb-8 max-w-2xl mx-auto">
              Deploy AI-powered talent scoring instantly. Start today.
            </p>
            
            {/* CTA Button - matching Shipable's pill style */}
            <Button 
              size="lg" 
              className="bg-white hover:bg-gray-100 text-[#12372A] px-8 py-4 text-lg font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border-0"
            >
              Get Started Now
            </Button>
          </div>
        </div>
      </div>

      {/* Bottom Navigation Section - matching Shipable's layout */}
      <div className="bg-[#0a1f15] rounded-t-3xl relative -mt-6 pt-12 pb-8">
        <div className="container mx-auto px-4">
          {/* Navigation and Logo Row */}
          <div className="flex flex-col md:flex-row justify-between items-center mb-8">
            {/* Logo */}
            <div className="flex items-center space-x-3 mb-6 md:mb-0">
              <div className="w-6 h-6 bg-gradient-to-br from-[#ADBC9F] to-[#FBFADA] rounded-lg flex items-center justify-center">
                <Sparkles className="w-4 h-4 text-[#12372A]" />
              </div>
              <span className="text-lg font-bold text-white">ThynkSphere<span className="text-[#ADBC9F]">AI</span></span>
            </div>
            
            {/* Navigation Links */}
            <nav className="flex space-x-8">
              <a href="#" className="text-[#ADBC9F] hover:text-white transition-colors text-sm font-medium">Home</a>
              <a href="#" className="text-[#ADBC9F] hover:text-white transition-colors text-sm font-medium">Documentation</a>
              <a href="#" className="text-[#ADBC9F] hover:text-white transition-colors text-sm font-medium">Pricing</a>
              <a href="#" className="text-[#ADBC9F] hover:text-white transition-colors text-sm font-medium">Blog</a>
            </nav>
          </div>
          
          {/* Bottom text row */}
          <div className="flex flex-col md:flex-row justify-between items-center text-[#ADBC9F] text-sm border-t border-[#436850]/30 pt-6">
            <div>
              © 2024 ThynkSphere AI. All rights reserved.
            </div>
            <div className="flex space-x-6 mt-4 md:mt-0">
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
