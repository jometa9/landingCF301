import React from 'react';
import { Shield, Wallet, LineChart } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

export const WhyDifferent = () => {
  return (
    <div className="relative py-32 bg-[#202020] overflow-hidden">
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

      <div className="relative max-w-7xl mx-auto px-4">
        <div className="text-center mb-20">
          <h2 className="text-5xl font-bold text-white mb-6 font-satoshi">
            Why We Are Different
          </h2>
          <div className="w-24 h-0.5 bg-purple-600 mx-auto" />
        </div>

        <div className="grid lg:grid-cols-2 gap-16 mb-24">
          {/* Left Feature */}
          <div className="space-y-6">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-purple-600/10">
              <Shield className="w-8 h-8 text-purple-400" />
            </div>
            <h3 className="text-2xl font-bold text-white">Total Anonymity</h3>
            <p className="text-gray-400 text-lg leading-relaxed">
              Connect your Metamask wallet, without KYC. Trade with complete privacy and security.
            </p>
          </div>

          {/* Right Feature */}
          <div className="space-y-6">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-blue-600/10">
              <LineChart className="w-8 h-8 text-blue-400" />
            </div>
            <h3 className="text-2xl font-bold text-white">Financial Transparency</h3>
            <p className="text-gray-400 text-lg leading-relaxed">
              Finances audited and recorded on the blockchain. Full transparency on all operations.
            </p>
          </div>
        </div>

        {/* Bottom Feature */}
        <div className="max-w-3xl mx-auto text-center space-y-6">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-green-600/10">
            <Wallet className="w-8 h-8 text-green-400" />
          </div>
          <h3 className="text-2xl font-bold text-white">Smart Payout Management</h3>
          <p className="text-gray-400 text-lg leading-relaxed">
            Our public finance management system ensures that every trader receives their 
            payout even in critical scenarios. If available funds are limited, we apply an 
            equitable distribution system based on your contribution and the requested 
            withdrawal amount, informing you exactly when you will receive your payment.
          </p>
        </div>

        {/* Video Section */}
        <div className="mt-24 max-w-4xl mx-auto">
          <div className="aspect-video rounded-2xl overflow-hidden bg-gray-900/50 border border-gray-800">
            <div className="w-full h-full flex items-center justify-center">
              <p className="text-gray-500">Explanatory Video Coming Soon</p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <Link to="/open-finances">
            <Button 
              size="lg"
              className="bg-purple-600 hover:bg-purple-700 text-white px-8"
            >
              OPEN FINANCES
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};