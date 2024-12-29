import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { DollarSign, Users, TrendingUp, Wallet } from 'lucide-react';

export const FinancialOverview = () => {
  const stats = [
    {
      title: 'Total Assets Under Management',
      value: '$245.8M',
      change: '+12.3%',
      icon: DollarSign
    },
    {
      title: 'Active Funded Traders',
      value: '1,247',
      change: '+23.1%',
      icon: Users
    },
    {
      title: 'Monthly Payouts',
      value: '$3.2M',
      change: '+8.2%',
      icon: TrendingUp
    },
    {
      title: 'Available Capital',
      value: '$82.4M',
      change: '+15.3%',
      icon: Wallet
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {stats.map((stat, i) => {
        const Icon = stat.icon;
        return (
          <Card key={i}>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-gray-500">
                {stat.title}
              </CardTitle>
              <Icon className="h-4 w-4 text-gray-400" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stat.value}</div>
              <p className={`text-sm ${
                stat.change.startsWith('+') ? 'text-green-600' : 'text-red-600'
              }`}>
                {stat.change} from last month
              </p>
            </CardContent>
          </Card>
        );
      })}
    </div>
  );
};