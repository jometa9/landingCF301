import React from 'react';
import { Check } from 'lucide-react';

export const ChallengeSteps = () => {
  return (
    <div className="hidden sm:block">
      <div className="grid grid-cols-3 gap-px bg-gray-200">
        {['FTMO CHALLENGE', 'VERIFICATION', 'FUNDED TRADER'].map((step, index) => (
          <div key={step} className="bg-white p-6">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold">
                {index + 1}
              </div>
              <div className="font-semibold text-gray-900">{step}</div>
            </div>
            <div className="space-y-2 pl-11">
              {[
                'Trade demo account',
                'Follow trading objectives',
                'Show consistent results'
              ].map((detail, i) => (
                <div key={i} className="flex items-center gap-2 text-sm text-gray-600">
                  <Check className="h-4 w-4 text-green-500" />
                  <span>{detail}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};