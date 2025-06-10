
import React from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';

const Footer = () => {
  return (
    <footer className="bg-slate-900 pt-20 pb-8">
      <div className="container mx-auto px-4">
        {/* CTA Section */}
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-amber-500/20 text-amber-300 border-amber-500/30 text-sm font-medium px-4 py-2">
            Join the Revolution • Limited Beta Access
          </Badge>
          
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Ready to Transform
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-blue-400">
              {' '}Your Career?
            </span>
          </h2>
          
          <p className="text-xl text-slate-300 max-w-2xl mx-auto mb-8">
            Be among the first to experience the power of the Employee Score™. 
            Your competitive advantage starts today.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Button size="lg" className="bg-teal-600 hover:bg-teal-700 text-white px-8 py-4 text-lg font-medium">
              Claim Your Employee Score™
            </Button>
            <Button variant="outline" size="lg" className="border-slate-600 text-slate-300 hover:bg-slate-800 px-8 py-4 text-lg">
              Request Demo for Teams
            </Button>
          </div>
          
          <div className="flex items-center justify-center gap-6 text-sm text-slate-400">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
              <span>Free Score Analysis</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-amber-400 rounded-full animate-pulse" />
              <span>No Credit Card Required</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse" />
              <span>Instant Access</span>
            </div>
          </div>
        </div>
        
        <Separator className="my-16 bg-slate-700" />
        
        {/* Footer Links */}
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          <div>
            <h3 className="text-2xl font-bold text-white mb-4">
              ThynkSphere<span className="text-teal-400">AI</span>
            </h3>
            <p className="text-slate-400 mb-4">
              Revolutionizing recruitment with the world's first Employee Score™ system.
            </p>
            <div className="flex gap-4">
              <div className="w-8 h-8 bg-slate-800 rounded-full flex items-center justify-center hover:bg-slate-700 cursor-pointer">
                <span className="text-slate-400">𝕏</span>
              </div>
              <div className="w-8 h-8 bg-slate-800 rounded-full flex items-center justify-center hover:bg-slate-700 cursor-pointer">
                <span className="text-slate-400">in</span>
              </div>
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold text-white mb-4">Product</h4>
            <ul className="space-y-2 text-slate-400">
              <li><a href="#" className="hover:text-white transition-colors">Employee Score™</a></li>
              <li><a href="#" className="hover:text-white transition-colors">AI Matching</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Skill Verification</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Analytics Dashboard</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold text-white mb-4">Solutions</h4>
            <ul className="space-y-2 text-slate-400">
              <li><a href="#" className="hover:text-white transition-colors">For Job Seekers</a></li>
              <li><a href="#" className="hover:text-white transition-colors">For Recruiters</a></li>
              <li><a href="#" className="hover:text-white transition-colors">For Enterprises</a></li>
              <li><a href="#" className="hover:text-white transition-colors">API Integration</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold text-white mb-4">Company</h4>
            <ul className="space-y-2 text-slate-400">
              <li><a href="#" className="hover:text-white transition-colors">About</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>
        </div>
        
        <Separator className="my-8 bg-slate-700" />
        
        {/* Bottom */}
        <div className="flex flex-col md:flex-row justify-between items-center text-slate-400 text-sm">
          <div>
            © 2024 ThynkSphere AI. All rights reserved. Employee Score™ is a trademark of ThynkSphere AI.
          </div>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
