
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import { ArrowRight, Mail } from 'lucide-react';

const WaitlistForm = () => {
  const [email, setEmail] = useState('');
  const [role, setRole] = useState('job-seeker');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    console.log('Waitlist submission:', { email, role });
    setIsSubmitting(false);
    setEmail('');
  };

  return (
    <div className="max-w-md mx-auto animate-fade-in">
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Email Input */}
        <div className="relative">
          <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-deep-plum/70">
            <Mail className="w-4 h-4" />
          </div>
          <Input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="pl-10 h-12 bg-white/90 backdrop-blur-sm border-2 border-white/30 rounded-xl text-deep-plum placeholder:text-deep-plum/60 focus:border-[#8F87F1] focus:ring-2 focus:ring-[#8F87F1]/20 transition-all duration-300 hover:bg-white/95"
          />
        </div>

        {/* Role Selection */}
        <div className="bg-white/80 backdrop-blur-sm rounded-xl p-4 border border-white/30">
          <Label className="text-sm font-bold-strong text-deep-plum mb-3 block">I am a:</Label>
          <RadioGroup 
            value={role} 
            onValueChange={setRole} 
            className="flex flex-col space-y-2"
          >
            <div className="flex items-center space-x-3 p-2 rounded-lg hover:bg-white/50 transition-colors duration-200">
              <RadioGroupItem value="hr-recruiter" id="hr-recruiter" className="border-[#8F87F1] text-[#8F87F1]" />
              <Label htmlFor="hr-recruiter" className="text-sm font-medium-bold text-deep-plum cursor-pointer">
                HR Recruiter
              </Label>
            </div>
            <div className="flex items-center space-x-3 p-2 rounded-lg hover:bg-white/50 transition-colors duration-200">
              <RadioGroupItem value="job-seeker" id="job-seeker" className="border-[#8F87F1] text-[#8F87F1]" />
              <Label htmlFor="job-seeker" className="text-sm font-medium-bold text-deep-plum cursor-pointer">
                Job Seeker
              </Label>
            </div>
          </RadioGroup>
        </div>

        {/* Submit Button */}
        <Button 
          type="submit"
          disabled={!email || isSubmitting}
          size="lg" 
          className="w-full bg-white/20 hover:bg-white/30 text-white-shadow px-8 py-5 text-lg font-bold-strong shadow-purple hover:shadow-soft transition-all duration-300 rounded-xl transform hover:scale-105 backdrop-blur-sm border border-white/20 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
        >
          {isSubmitting ? (
            <>
              <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin mr-3"></div>
              Joining Waitlist...
            </>
          ) : (
            <>
              Join Waitlist
              <ArrowRight className="ml-3 w-5 h-5" />
            </>
          )}
        </Button>
      </form>
      
      <div className="text-center mt-4">
        <div className="text-sm text-light-lilac font-medium-bold">No spam, ever • Early access priority</div>
      </div>
    </div>
  );
};

export default WaitlistForm;
