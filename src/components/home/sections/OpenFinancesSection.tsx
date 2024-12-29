import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight, TrendingUp, DollarSign, LineChart } from 'lucide-react';
import { t } from '@/lib/i18n';
import { Card, CardContent } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';

export const OpenFinancesSection = () => {
  return (
    <div className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold">{t('finances.title')}</h2>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            {t('finances.subtitle')}
          </p>
        </div>

        {/* Key Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {[
            {
              icon: DollarSign,
              title: t('finances.metrics.aum'),
              value: '$245.8M',
              change: '+12.3%'
            },
            {
              icon: TrendingUp,
              title: t('finances.metrics.monthlyPayouts'),
              value: '$3.2M',
              change: '+8.2%'
            },
            {
              icon: LineChart,
              title: t('finances.metrics.profitShare'),
              value: '90%',
              change: 'Industry Leading'
            }
          ].map((metric, i) => {
            const Icon = metric.icon;
            return (
              <Card key={i} className="overflow-hidden">
                <CardContent className="p-6">
                  <div className="flex items-start justify-between">
                    <div>
                      <p className="text-sm font-medium text-gray-500">{metric.title}</p>
                      <p className="text-2xl font-bold mt-2">{metric.value}</p>
                    </div>
                    <div className="bg-black/5 p-3 rounded-lg">
                      <Icon className="h-6 w-6" />
                    </div>
                  </div>
                  <p className="text-sm text-gray-600 mt-2">{metric.change}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Capital Allocation */}
        <Card className="mb-12">
          <CardContent className="p-6">
            <h3 className="text-lg font-semibold mb-6">{t('finances.allocation.title')}</h3>
            <div className="space-y-6">
              {[
                { label: t('finances.allocation.funded'), value: 66.5, color: 'bg-blue-500' },
                { label: t('finances.allocation.reserve'), value: 20, color: 'bg-green-500' },
                { label: t('finances.allocation.available'), value: 13.5, color: 'bg-purple-500' }
              ].map((item, i) => (
                <div key={i}>
                  <div className="flex justify-between mb-2">
                    <span className="text-sm font-medium">{item.label}</span>
                    <span className="text-sm text-gray-600">{item.value}%</span>
                  </div>
                  <Progress value={item.value} className={`h-2 ${item.color}`} />
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* CTA */}
        <div className="text-center">
          <Link to="/open-finances">
            <Button size="lg" className="bg-black text-white hover:bg-gray-800">
              {t('finances.viewAll')}
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};