import React from 'react';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { Mail, Twitter, Linkedin, Sparkles, TrendingUp } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-gray-50 to-[#FFF1D5]/30 pt-16 pb-8">
      <div className="container mx-auto px-4">
        {/* CTA Section - Redesigned */}
        <div className="relative mb-16 max-w-4xl mx-auto">
          {/* Radial gradient backdrop */}
          <div className="absolute inset-0 bg-gradient-radial from-white/60 via-[#FFF1D5]/40 to-transparent rounded-3xl blur-xl"></div>
          
          {/* Content container */}
          <div className="relative bg-white/40 backdrop-blur-sm rounded-3xl p-12 border border-white/50 shadow-xl">
            <div className="text-center">
              {/* Icon and heading */}
              <div className="flex items-center justify-center gap-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-[#9FB3DF] to-[#9EC6F3] rounded-2xl flex items-center justify-center shadow-lg">
                  <TrendingUp className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-3xl lg:text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-gray-800 via-[#9FB3DF] to-gray-700">
                  Ready to Transform
                  <span className="block mt-1 text-transparent bg-clip-text bg-gradient-to-r from-[#9FB3DF] to-[#9EC6F3]">
                    Your Future?
                  </span>
                </h2>
              </div>
              
              <p className="text-lg text-gray-600 mb-10 max-w-2xl mx-auto font-medium leading-relaxed">
                Join the recruitment revolution. Be among the first to experience 
                the power of objective professional scoring.
              </p>
              
              {/* Animated pill-shaped buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                <Button 
                  size="lg" 
                  className="group relative overflow-hidden bg-gradient-to-r from-[#9FB3DF] to-[#9EC6F3] hover:from-[#8EA3D3] hover:to-[#8BBAE7] text-white px-10 py-4 text-lg font-semibold rounded-full shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-105 border-0"
                >
                  {/* Glow effect on hover */}
                  <div className="absolute inset-0 bg-gradient-to-r from-[#9FB3DF]/20 to-[#9EC6F3]/20 rounded-full opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500"></div>
                  <span className="relative z-10 group-hover:animate-pulse">Join Our Waitlist</span>
                </Button>
                
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="group relative overflow-hidden border-2 border-[#9FB3DF]/30 bg-white/50 backdrop-blur-sm text-[#9FB3DF] hover:bg-[#9FB3DF] hover:text-white px-10 py-4 text-lg font-semibold rounded-full shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-105"
                >
                  {/* Subtle glow on hover */}
                  <div className="absolute inset-0 bg-[#9FB3DF]/10 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <span className="relative z-10">Stay Updated</span>
                </Button>
              </div>
              
              {/* Status indicators with refined styling */}
              <div className="flex items-center justify-center gap-8 text-sm text-gray-500">
                <div className="flex items-center gap-2 bg-white/60 rounded-full px-4 py-2 backdrop-blur-sm">
                  <div className="w-2 h-2 bg-gradient-to-r from-[#9FB3DF] to-[#9EC6F3] rounded-full animate-pulse shadow-sm" />
                  <span className="font-medium">Early Access Benefits</span>
                </div>
                <div className="flex items-center gap-2 bg-white/60 rounded-full px-4 py-2 backdrop-blur-sm">
                  <div className="w-2 h-2 bg-gradient-to-r from-[#9EC6F3] to-[#BDDDE4] rounded-full animate-pulse delay-500 shadow-sm" />
                  <span className="font-medium">No Cost to Join</span>
                </div>
                <div className="flex items-center gap-2 bg-white/60 rounded-full px-4 py-2 backdrop-blur-sm">
                  <div className="w-2 h-2 bg-gradient-to-r from-[#BDDDE4] to-[#FFF1D5] rounded-full animate-pulse delay-1000 shadow-sm" />
                  <span className="font-medium">Shape the Future</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <Separator className="my-12 bg-[#9FB3DF]/20" />
        
        {/* Footer Content */}
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-8 h-8 bg-gradient-to-br from-[#9FB3DF] to-[#9EC6F3] rounded-lg flex items-center justify-center">
                <Sparkles className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold text-[#9FB3DF]">ThynkSphere<span className="text-[#9EC6F3]">AI</span></span>
            </div>
            <p className="text-gray-600 mb-4">
              Empowering smarter recruitment through cutting-edge AI solutions and objective professional scoring.
            </p>
            <div className="flex gap-3">
              <div className="w-8 h-8 bg-[#9FB3DF]/10 rounded-lg flex items-center justify-center hover:bg-[#9FB3DF]/20 cursor-pointer transition-colors">
                <Twitter className="w-4 h-4 text-[#9FB3DF]" />
              </div>
              <div className="w-8 h-8 bg-[#9EC6F3]/10 rounded-lg flex items-center justify-center hover:bg-[#9EC6F3]/20 cursor-pointer transition-colors">
                <Linkedin className="w-4 h-4 text-[#9EC6F3]" />
              </div>
              <div className="w-8 h-8 bg-[#BDDDE4]/10 rounded-lg flex items-center justify-center hover:bg-[#BDDDE4]/20 cursor-pointer transition-colors">
                <Mail className="w-4 h-4 text-[#BDDDE4]" />
              </div>
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold text-gray-800 mb-4">Product</h4>
            <ul className="space-y-2 text-gray-600">
              <li><a href="#" className="hover:text-[#9FB3DF] transition-colors">Employee Score™</a></li>
              <li><a href="#" className="hover:text-[#9FB3DF] transition-colors">AI Matching</a></li>
              <li><a href="#" className="hover:text-[#9FB3DF] transition-colors">Resume Screening</a></li>
              <li><a href="#" className="hover:text-[#9FB3DF] transition-colors">Smart Scheduling</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold text-gray-800 mb-4">Company</h4>
            <ul className="space-y-2 text-gray-600">
              <li><a href="#" className="hover:text-[#9FB3DF] transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-[#9FB3DF] transition-colors">Contact</a></li>
              <li><a href="#" className="hover:text-[#9FB3DF] transition-colors">Support</a></li>
              <li><a href="#" className="hover:text-[#9FB3DF] transition-colors">Blog</a></li>
            </ul>
          </div>
        </div>
        
        <Separator className="my-8 bg-[#9FB3DF]/20" />
        
        {/* Bottom */}
        <div className="flex flex-col md:flex-row justify-between items-center text-gray-500 text-sm">
          <div>
            © 2024 ThynkSphere AI. All rights reserved. Employee Score™ is a trademark of ThynkSphere AI.
          </div>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-[#9FB3DF] transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-[#9FB3DF] transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
