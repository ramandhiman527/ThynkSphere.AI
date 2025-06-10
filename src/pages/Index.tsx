
import React from 'react';
import Hero from '@/components/Hero';
import EmployeeScoreShowcase from '@/components/EmployeeScoreShowcase';
import ProblemSolution from '@/components/ProblemSolution';
import EarlyAdopterBenefits from '@/components/EarlyAdopterBenefits';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <EmployeeScoreShowcase />
      <ProblemSolution />
      <EarlyAdopterBenefits />
      <Footer />
    </div>
  );
};

export default Index;
