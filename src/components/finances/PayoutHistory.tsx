import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export const PayoutHistory = () => {
  const payouts = [
    { month: 'March 2024', amount: 3245000, traders: 892 },
    { month: 'February 2024', amount: 2980000, traders: 845 },
    { month: 'January 2024', amount: 2850000, traders: 812 },
    { month: 'December 2023', amount: 2760000, traders: 798 }
  ];

  return (
    <Card>
      <CardHeader>
        <CardTitle>Recent Payouts</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="relative overflow-x-auto">
          <table className="w-full text-sm text-left">
            <thead className="text-xs uppercase bg-gray-50">
              <tr>
                <th className="px-6 py-3">Month</th>
                <th className="px-6 py-3">Total Payout</th>
                <th className="px-6 py-3">Profitable Traders</th>
                <th className="px-6 py-3">Average Payout</th>
              </tr>
            </thead>
            <tbody>
              {payouts.map((payout, i) => (
                <tr key={i} className="border-b">
                  <td className="px-6 py-4">{payout.month}</td>
                  <td className="px-6 py-4">
                    ${(payout.amount / 1000000).toFixed(2)}M
                  </td>
                  <td className="px-6 py-4">{payout.traders}</td>
                  <td className="px-6 py-4">
                    ${Math.round(payout.amount / payout.traders).toLocaleString()}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </CardContent>
    </Card>
  );
};