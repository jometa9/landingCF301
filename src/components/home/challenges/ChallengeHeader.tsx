import React from 'react';
import { cn } from '@/lib/utils';

interface ChallengeHeaderProps {
  selectedBalance: number;
  onBalanceChange: (balance: number) => void;
}

const balanceOptions = [
  { value: 10000, label: '10K', type: 'Standard' },
  { value: 25000, label: '25K', type: 'Standard' },
  { value: 50000, label: '50K', type: 'Standard' },
  { value: 100000, label: '100K', type: 'Professional' },
  { value: 200000, label: '200K', type: 'Professional' },
  { value: 500000, label: '500K', type: 'Elite' },
  { value: 1000000, label: '1M', type: 'Elite' }
];

export const ChallengeHeader: React.FC<ChallengeHeaderProps> = ({
  selectedBalance,
  onBalanceChange,
}) => {
  return (
    <div>
      <h3 className="text-lg font-semibold mb-4">Select Account Size</h3>
      <div className="flex flex-wrap gap-3">
        {balanceOptions.map((option) => (
          <button
            key={option.value}
            onClick={() => onBalanceChange(option.value)}
            className={cn(
              "relative px-4 py-3 rounded-lg font-medium transition-all duration-200",
              "hover:shadow-md",
              selectedBalance === option.value
                ? "bg-blue-600 text-white shadow-lg"
                : "bg-white text-gray-900 border hover:border-blue-200"
            )}
          >
            <div className="text-lg font-bold">
              {option.label}
            </div>
            <div className={cn(
              "text-xs",
              selectedBalance === option.value 
                ? "text-blue-100" 
                : "text-gray-500"
            )}>
              {option.type}
            </div>
          </button>
        ))}
      </div>
    </div>
  );
};