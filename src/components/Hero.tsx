
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const Hero = () => {
  const [score, setScore] = useState(0);
  const [betaCount, setBetaCount] = useState(487);

  useEffect(() => {
    // Animate score counter on load
    const timer = setTimeout(() => {
      let current = 0;
      const target = 785;
      const increment = target / 50;
      const scoreTimer = setInterval(() => {
        current += increment;
        if (current >= target) {
          setScore(target);
          clearInterval(scoreTimer);
        } else {
          setScore(Math.floor(current));
        }
      }, 30);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  const scorePercentage = (score / 900) * 100;

  return (
    <section className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:50px_50px]" />
      
      <div className="container mx-auto px-4 pt-20 pb-16">
        <div className="flex flex-col lg:flex-row items-center justify-between min-h-[80vh]">
          {/* Left Content */}
          <div className="flex-1 text-center lg:text-left mb-12 lg:mb-0">
            <Badge className="mb-6 bg-amber-500/20 text-amber-300 border-amber-500/30 text-sm font-medium px-4 py-2">
              Revolutionary Launch • Only {betaCount} Beta Spots Left
            </Badge>
            
            <h1 className="text-5xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              Your Professional Value,{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-blue-400">
                Quantified
              </span>
            </h1>
            
            <p className="text-xl lg:text-2xl text-slate-300 mb-8 max-w-2xl">
              Join the recruitment revolution that brings CIBIL-like scoring to your career with our proprietary{' '}
              <span className="text-amber-400 font-semibold">Employee Score™</span>
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
              <Button size="lg" className="bg-teal-600 hover:bg-teal-700 text-white px-8 py-4 text-lg font-medium">
                Get Your Score First
              </Button>
              <Button variant="outline" size="lg" className="border-slate-600 text-slate-300 hover:bg-slate-800 px-8 py-4 text-lg">
                Access Pre-Scored Talent
              </Button>
            </div>
            
            <div className="flex items-center justify-center lg:justify-start gap-4 text-sm text-slate-400">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                <span>Live Beta Access</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-amber-400 rounded-full animate-pulse" />
                <span>Free Score Optimization</span>
              </div>
            </div>
          </div>
          
          {/* Right Content - Score Visualization */}
          <div className="flex-1 flex justify-center lg:justify-end">
            <div className="relative">
              {/* Main Score Circle */}
              <div className="relative w-80 h-80 lg:w-96 lg:h-96">
                {/* Background Circle */}
                <svg className="w-full h-full transform -rotate-90" viewBox="0 0 200 200">
                  <circle
                    cx="100"
                    cy="100"
                    r="80"
                    stroke="currentColor"
                    strokeWidth="8"
                    fill="none"
                    className="text-slate-700"
                  />
                  {/* Progress Circle */}
                  <circle
                    cx="100"
                    cy="100"
                    r="80"
                    stroke="url(#scoreGradient)"
                    strokeWidth="8"
                    fill="none"
                    strokeLinecap="round"
                    strokeDasharray={`${(scorePercentage * 502.4) / 100} 502.4`}
                    className="transition-all duration-1000 ease-out"
                  />
                  <defs>
                    <linearGradient id="scoreGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#14b8a6" />
                      <stop offset="100%" stopColor="#06b6d4" />
                    </linearGradient>
                  </defs>
                </svg>
                
                {/* Score Display */}
                <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
                  <div className="text-6xl lg:text-7xl font-bold font-mono">{score}</div>
                  <div className="text-slate-400 text-lg mt-2">Employee Score™</div>
                  <div className="text-sm text-slate-500 mt-1">out of 900</div>
                </div>
              </div>
              
              {/* Floating Score Factors */}
              <div className="absolute -left-8 top-16 bg-slate-800/80 backdrop-blur-sm rounded-lg p-3 border border-slate-600">
                <div className="text-xs text-slate-400">Resume Quality</div>
                <div className="text-lg font-bold text-white">85/100</div>
              </div>
              
              <div className="absolute -right-8 top-32 bg-slate-800/80 backdrop-blur-sm rounded-lg p-3 border border-slate-600">
                <div className="text-xs text-slate-400">Skills Match</div>
                <div className="text-lg font-bold text-white">92/100</div>
              </div>
              
              <div className="absolute -left-4 bottom-20 bg-slate-800/80 backdrop-blur-sm rounded-lg p-3 border border-slate-600">
                <div className="text-xs text-slate-400">Experience</div>
                <div className="text-lg font-bold text-white">78/100</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
