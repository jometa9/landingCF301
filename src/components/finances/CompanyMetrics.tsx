import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export const CompanyMetrics = () => {
  const metrics = [
    {
      title: 'Success Rate',
      value: '8.4%',
      description: 'Traders who pass evaluation'
    },
    {
      title: 'Average Account Size',
      value: '$97,200',
      description: 'Per funded trader'
    },
    {
      title: 'Retention Rate',
      value: '94.3%',
      description: 'Funded traders after 6 months'
    },
    {
      title: 'Risk Management',
      value: '3.2%',
      description: 'Average drawdown per account'
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {metrics.map((metric, i) => (
        <Card key={i}>
          <CardHeader>
            <CardTitle className="text-sm font-medium text-gray-500">
              {metric.title}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{metric.value}</div>
            <p className="text-sm text-gray-600 mt-1">{metric.description}</p>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};