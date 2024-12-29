import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { LanguageToggle } from '@/components/LanguageToggle';

const HeroSection = () => {
  return (
    <div className="relative min-h-screen bg-[#202020] flex items-center">
      {/* Background Pattern */}
      <div 
        className="absolute inset-0 bg-[linear-gradient(to_right,#2A2A2A_1px,transparent_1px),linear-gradient(to_bottom,#2A2A2A_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_110%)]"
        aria-hidden="true"
      />

      {/* Purple Gradient Accent */}
      <div 
        className="absolute top-0 right-0 w-1/3 h-1/3 bg-purple-600/10 blur-[120px] rounded-full"
        aria-hidden="true"
      />

      <div className="relative max-w-7xl mx-auto px-4 py-32">
        <div className="absolute top-8 right-8">
          <LanguageToggle />
        </div>

        <div className="max-w-3xl">
          <h1 className="text-6xl sm:text-7xl lg:text-8xl font-bold text-white mb-8 leading-[1.1]">
            The future of
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-purple-600 block">
              propfirm
            </span>
          </h1>
          
          <p className="text-xl text-gray-400 mb-12 leading-relaxed max-w-2xl">
            Anonymous demo trading, open finances, open transactions powered by blockchain technology
          </p>
          
          <Link to="/challenge/select">
            <Button 
              size="lg" 
              className="bg-white text-black hover:bg-gray-100 text-lg px-8 h-14"
            >
              Start now
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;