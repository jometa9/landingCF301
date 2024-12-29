import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';

export const TradingCapital = () => {
  const capitalAllocation = [
    { type: 'Funded Accounts', amount: 163400000, percentage: 66.5 },
    { type: 'Reserve Capital', amount: 49200000, percentage: 20 },
    { type: 'Available for New Traders', amount: 33200000, percentage: 13.5 }
  ];

  return (
    <Card>
      <CardHeader>
        <CardTitle>Trading Capital Allocation</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          {capitalAllocation.map((item, i) => (
            <div key={i}>
              <div className="flex justify-between mb-2">
                <span className="text-sm font-medium">{item.type}</span>
                <span className="text-sm text-gray-600">
                  ${(item.amount / 1000000).toFixed(1)}M ({item.percentage}%)
                </span>
              </div>
              <Progress value={item.percentage} className="h-2" />
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};