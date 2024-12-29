import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ChallengeHeader } from './ChallengeHeader';
import { ChallengeSteps } from './ChallengeSteps';
import { ChallengeDetails } from './ChallengeDetails';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

export const ChallengeComparison = () => {
  const [selectedBalance, setSelectedBalance] = useState(10000);
  const navigate = useNavigate();

  const handleStartChallenge = () => {
    navigate(`/challenge/register?balance=${selectedBalance}`);
  };

  return (
    <div className="relative py-24 bg-gradient-to-b from-gray-50 to-white">
      {/* Background Pattern */}
      <div 
        className="absolute inset-0 bg-[linear-gradient(to_right,#f1f5f9_1px,transparent_1px),linear-gradient(to_bottom,#f1f5f9_1px,transparent_1px)] bg-[size:4rem_4rem]"
        aria-hidden="true"
      />

      <div className="relative max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Trading Challenges</h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Choose your account size and start your journey to becoming a funded trader
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-xl overflow-hidden border">
          {/* Account Size Selection */}
          <div className="p-6 bg-gradient-to-r from-gray-50 to-white border-b">
            <ChallengeHeader 
              selectedBalance={selectedBalance} 
              onBalanceChange={setSelectedBalance} 
            />
          </div>

          {/* Challenge Steps */}
          <div className="border-b">
            <ChallengeSteps />
          </div>

          {/* Challenge Details */}
          <ChallengeDetails selectedBalance={selectedBalance} />
          
          {/* CTA Section */}
          <div className="p-8 bg-gradient-to-b from-white to-gray-50 border-t">
            <div className="max-w-3xl mx-auto text-center">
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button 
                  onClick={handleStartChallenge}
                  size="lg"
                  className="w-full sm:w-auto min-w-[200px] bg-blue-600 hover:bg-blue-700"
                >
                  Start Challenge
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <p className="text-sm text-gray-500">
                  No time limit • Instant activation • 24/7 support
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Additional Info */}
        <div className="mt-12 grid md:grid-cols-3 gap-8 text-center">
          {[
            {
              title: 'Risk Free',
              description: 'Your initial fee is fully refundable upon successful completion'
            },
            {
              title: 'Unlimited Time',
              description: 'Take your time to complete the challenge, no rush or pressure'
            },
            {
              title: 'Scale Up',
              description: 'Grow your account size up to $2,000,000 based on performance'
            }
          ].map((item, i) => (
            <div key={i} className="p-6 rounded-xl bg-white shadow-sm border">
              <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
              <p className="text-gray-600">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};