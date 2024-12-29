import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

export const HowItWorks = () => {
  const steps = [
    {
      number: '1',
      title: 'Connect your wallet',
      description: 'Connect with MetaMask to start trading'
    },
    {
      number: '2',
      title: 'Select and start your challenge',
      description: 'showing your skills on demo trading'
    },
    {
      number: '3',
      title: 'Get funded',
      description: 'Start trading with real capital'
    }
  ];

  const features = [
    {
      title: 'Zero commissions and fees',
      description: 'Trade without any hidden costs or additional fees'
    },
    {
      title: 'No hidden rules',
      description: 'Clear and transparent trading conditions'
    },
    {
      title: 'Scale up to 1 millon',
      description: 'Grow your account based on performance'
    }
  ];

  return (
    <div className="py-24 bg-[#202020] text-white">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16">How it works?</h2>

        {/* Steps */}
        <div className="flex justify-center items-start gap-16 mb-16">
          {steps.map((step, i) => (
            <div key={i} className="text-center max-w-[250px]">
              <div className="w-16 h-16 rounded-full border-2 border-white flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold">{step.number}</span>
              </div>
              <h3 className="font-medium mb-2">{step.title}</h3>
              <p className="text-gray-400 text-sm">{step.description}</p>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="text-center mb-16">
          <Link to="/challenge/register">
            <Button 
              size="lg"
              className="bg-white text-black hover:bg-gray-100"
            >
              Start now
            </Button>
          </Link>
        </div>

        {/* Challenges Section */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-center mb-8">Challenges</h3>
          <div className="bg-[#2A2A2A] rounded-2xl p-8">
            <p className="text-center text-gray-400">
              Sección de challenges que ya tenemos
            </p>
          </div>
        </div>

        {/* Second CTA Button */}
        <div className="text-center mb-16">
          <Link to="/challenge/register">
            <Button 
              size="lg"
              className="bg-white text-black hover:bg-gray-100"
            >
              Start now
            </Button>
          </Link>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {features.map((feature, i) => (
            <div key={i} className="bg-[#2A2A2A] rounded-xl p-6">
              <h4 className="font-bold mb-2">{feature.title}</h4>
              <p className="text-gray-400 text-sm">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* Trading Demo Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          <div className="bg-[#2A2A2A] rounded-xl p-6">
            <h4 className="font-bold mb-4">Trade directly in DOM</h4>
            <div className="space-y-2">
              {Array(7).fill(null).map((_, i) => (
                <div key={i} className="h-1 bg-gray-700 rounded" />
              ))}
            </div>
          </div>
          <div className="bg-[#2A2A2A] rounded-xl p-6 flex items-center justify-center">
            <p className="text-gray-400">GIF MOSTRANDO COMO SE OPERA</p>
          </div>
        </div>

        {/* Coming Soon */}
        <p className="text-center text-gray-400">
          Coming soon TradingView charts!
        </p>
      </div>
    </div>
  );
};