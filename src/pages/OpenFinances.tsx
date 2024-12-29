import React from 'react';
import { FinancialOverview } from '@/components/finances/FinancialOverview';
import { TradingCapital } from '@/components/finances/TradingCapital';
import { PayoutHistory } from '@/components/finances/PayoutHistory';
import { CompanyMetrics } from '@/components/finances/CompanyMetrics';

const OpenFinances = () => {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold">Open Finances</h1>
          <p className="mt-4 text-gray-600">Complete transparency of our financial operations</p>
        </div>
        
        <div className="space-y-12">
          <FinancialOverview />
          <TradingCapital />
          <PayoutHistory />
          <CompanyMetrics />
        </div>
      </div>
    </div>
  );
};

export default OpenFinances;