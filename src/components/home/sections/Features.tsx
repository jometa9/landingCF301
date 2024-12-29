import React from 'react';
import { LineChart, Shield, Clock, Award, ArrowRight, Zap, Users, Wallet } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { FeatureCard } from './features/FeatureCard';

export const Features = () => {
  const features = [
    {
      icon: LineChart,
      title: 'Professional Trading Platform',
      description: 'Trade with institutional-grade charting, advanced order types, and real-time market data.',
      color: 'text-blue-600',
      gradient: 'bg-gradient-to-br from-blue-50 to-indigo-50'
    },
    {
      icon: Shield,
      title: 'Secure & Transparent',
      description: 'Your funds are held in segregated accounts with top-tier banks. Full transparency on all operations.',
      color: 'text-green-600',
      gradient: 'bg-gradient-to-br from-green-50 to-emerald-50'
    },
    {
      icon: Zap,
      title: 'Instant Execution',
      description: 'Execute trades with lightning speed. No requotes or slippage on major pairs.',
      color: 'text-yellow-600',
      gradient: 'bg-gradient-to-br from-yellow-50 to-amber-50'
    },
    {
      icon: Users,
      title: 'Community Support',
      description: 'Join a community of successful traders. Share strategies and learn from the best.',
      color: 'text-purple-600',
      gradient: 'bg-gradient-to-br from-purple-50 to-fuchsia-50'
    },
    {
      icon: Clock,
      title: 'Fast Withdrawals',
      description: 'Get your profits within 24 hours. No delays, no complicated processes.',
      color: 'text-rose-600',
      gradient: 'bg-gradient-to-br from-rose-50 to-pink-50'
    },
    {
      icon: Wallet,
      title: 'Scaling Program',
      description: 'Grow your account size up to $2,000,000 based on consistent performance.',
      color: 'text-cyan-600',
      gradient: 'bg-gradient-to-br from-cyan-50 to-sky-50'
    },
    {
      icon: Award,
      title: 'Expert Support',
      description: '24/7 dedicated support from our team of professional traders and analysts.',
      color: 'text-orange-600',
      gradient: 'bg-gradient-to-br from-orange-50 to-amber-50'
    },
    {
      icon: Shield,
      title: 'Risk Management',
      description: 'Advanced risk management tools to help you protect your capital and maximize returns.',
      color: 'text-teal-600',
      gradient: 'bg-gradient-to-br from-teal-50 to-emerald-50'
    }
  ];

  return (
    <div className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Everything You Need to Succeed
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Our platform provides all the tools and support you need to become a successful funded trader
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {features.map((feature, i) => (
            <FeatureCard key={i} {...feature} />
          ))}
        </div>

        <div className="text-center">
          <Link to="/features">
            <Button 
              variant="outline" 
              size="lg"
              className="bg-gradient-to-r from-gray-50 to-gray-100 hover:from-gray-100 hover:to-gray-200"
            >
              Explore All Features
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};