
import React from 'react';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { Mail, Twitter, Linkedin, Sparkles, TrendingUp } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-[#FBFADA] to-[#ADBC9F] pt-12 pb-6">
      <div className="container mx-auto px-4">
        {/* CTA Section */}
        <div className="relative mb-12 max-w-3xl mx-auto">
          <div className="absolute inset-0 bg-gradient-radial from-[#FBFADA]/80 via-[#ADBC9F]/40 to-transparent rounded-3xl blur-xl"></div>
          
          <div className="relative bg-[#FBFADA]/60 backdrop-blur-sm rounded-3xl p-10 border border-[#ADBC9F]/30 shadow-earth">
            <div className="text-center">
              <div className="flex items-center justify-center gap-3 mb-5">
                <div className="w-10 h-10 bg-gradient-to-br from-[#436850] to-[#ADBC9F] rounded-2xl flex items-center justify-center shadow-soft">
                  <TrendingUp className="w-5 h-5 text-[#FBFADA]" />
                </div>
                <h2 className="text-2xl lg:text-3xl font-black text-[#12372A]">
                  Ready to Transform
                  <span className="block mt-1 text-transparent bg-clip-text bg-gradient-to-r from-[#436850] to-[#12372A]">
                    Your Future?
                  </span>
                </h2>
              </div>
              
              <p className="text-base text-[#12372A]/80 mb-8 max-w-xl mx-auto font-medium leading-relaxed">
                Join the recruitment revolution. Be among the first to experience 
                the power of objective professional scoring.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-3 justify-center mb-6">
                <Button 
                  size="lg" 
                  className="group relative overflow-hidden bg-gradient-to-r from-[#436850] to-[#ADBC9F] hover:from-[#12372A] hover:to-[#436850] text-[#FBFADA] px-8 py-3 text-base font-semibold rounded-full shadow-soft hover:shadow-earth transition-all duration-500 hover:scale-105 border-0"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-[#436850]/20 to-[#ADBC9F]/20 rounded-full opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500"></div>
                  <span className="relative z-10 group-hover:animate-pulse">Join Our Waitlist</span>
                </Button>
                
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="group relative overflow-hidden border-2 border-[#436850]/30 bg-[#FBFADA]/50 backdrop-blur-sm text-[#436850] hover:bg-[#436850] hover:text-[#FBFADA] px-8 py-3 text-base font-semibold rounded-full shadow-soft hover:shadow-earth transition-all duration-500 hover:scale-105"
                >
                  <div className="absolute inset-0 bg-[#436850]/10 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <span className="relative z-10">Stay Updated</span>
                </Button>
              </div>
              
              <div className="flex items-center justify-center gap-6 text-sm text-[#12372A]/70">
                <div className="flex items-center gap-2 bg-[#FBFADA]/80 rounded-full px-4 py-2 backdrop-blur-sm border border-[#ADBC9F]/20">
                  <div className="w-2 h-2 bg-[#436850] rounded-full animate-pulse shadow-sm" />
                  <span className="font-medium">Early Access Benefits</span>
                </div>
                <div className="flex items-center gap-2 bg-[#FBFADA]/80 rounded-full px-4 py-2 backdrop-blur-sm border border-[#ADBC9F]/20">
                  <div className="w-2 h-2 bg-[#ADBC9F] rounded-full animate-pulse delay-500 shadow-sm" />
                  <span className="font-medium">No Cost to Join</span>
                </div>
                <div className="flex items-center gap-2 bg-[#FBFADA]/80 rounded-full px-4 py-2 backdrop-blur-sm border border-[#ADBC9F]/20">
                  <div className="w-2 h-2 bg-[#12372A] rounded-full animate-pulse delay-1000 shadow-sm" />
                  <span className="font-medium">Shape the Future</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <Separator className="my-8 bg-[#436850]/20" />
        
        {/* Footer Content */}
        <div className="grid md:grid-cols-3 gap-6 mb-6">
          <div>
            <div className="flex items-center space-x-3 mb-3">
              <div className="w-6 h-6 bg-gradient-to-br from-[#436850] to-[#ADBC9F] rounded-lg flex items-center justify-center">
                <Sparkles className="w-4 h-4 text-[#FBFADA]" />
              </div>
              <span className="text-lg font-bold text-[#12372A]">ThynkSphere<span className="text-[#436850]">AI</span></span>
            </div>
            <p className="text-[#12372A]/80 mb-3 text-sm">
              Empowering smarter recruitment through cutting-edge AI solutions and objective professional scoring.
            </p>
            <div className="flex gap-2">
              <div className="w-6 h-6 bg-[#436850]/10 rounded-lg flex items-center justify-center hover:bg-[#436850]/20 cursor-pointer transition-colors">
                <Twitter className="w-3 h-3 text-[#436850]" />
              </div>
              <div className="w-6 h-6 bg-[#ADBC9F]/10 rounded-lg flex items-center justify-center hover:bg-[#ADBC9F]/20 cursor-pointer transition-colors">
                <Linkedin className="w-3 h-3 text-[#436850]" />
              </div>
              <div className="w-6 h-6 bg-[#12372A]/10 rounded-lg flex items-center justify-center hover:bg-[#12372A]/20 cursor-pointer transition-colors">
                <Mail className="w-3 h-3 text-[#12372A]" />
              </div>
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold text-[#12372A] mb-3 text-base">Product</h4>
            <ul className="space-y-1 text-[#12372A]/80 text-sm">
              <li><a href="#" className="hover:text-[#436850] transition-colors">Employee Score™</a></li>
              <li><a href="#" className="hover:text-[#436850] transition-colors">AI Matching</a></li>
              <li><a href="#" className="hover:text-[#436850] transition-colors">Resume Screening</a></li>
              <li><a href="#" className="hover:text-[#436850] transition-colors">Smart Scheduling</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold text-[#12372A] mb-3 text-base">Company</h4>
            <ul className="space-y-1 text-[#12372A]/80 text-sm">
              <li><a href="#" className="hover:text-[#436850] transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-[#436850] transition-colors">Contact</a></li>
              <li><a href="#" className="hover:text-[#436850] transition-colors">Support</a></li>
              <li><a href="#" className="hover:text-[#436850] transition-colors">Blog</a></li>
            </ul>
          </div>
        </div>
        
        <Separator className="my-6 bg-[#436850]/20" />
        
        {/* Bottom */}
        <div className="flex flex-col md:flex-row justify-between items-center text-[#12372A]/70 text-xs">
          <div>
            © 2024 ThynkSphere AI. All rights reserved. Employee Score™ is a trademark of ThynkSphere AI.
          </div>
          <div className="flex gap-4 mt-3 md:mt-0">
            <a href="#" className="hover:text-[#436850] transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-[#436850] transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
