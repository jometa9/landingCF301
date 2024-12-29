import React from 'react';
import { AccountCard } from '@/components/dashboard/AccountCard';
import { NewChallengeCard } from '@/components/dashboard/NewChallengeCard';

interface TradingAccount {
  id: string;
  login: string;
  balance: number;
  status: 'funded' | '1step' | '2step' | 'not_passed';
}

const accounts: TradingAccount[] = [
  {
    id: '1',
    login: '1520246170',
    balance: 50601.46,
    status: 'funded'
  },
  {
    id: '2',
    login: '1520246171',
    balance: 25000.00,
    status: '1step'
  },
  {
    id: '3',
    login: '1520246172',
    balance: 100000.00,
    status: '2step'
  }
];

const Dashboard = () => {
  return (
    <div className="max-w-7xl mx-auto px-4">
      <h1 className="text-2xl font-bold text-gray-900 mb-8">Trading Accounts</h1>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <NewChallengeCard />
        {accounts.map((account) => (
          <AccountCard
            key={account.id}
            id={account.id}
            login={account.login}
            balance={account.balance}
            status={account.status}
          />
        ))}
      </div>
    </div>
  );
};

export default Dashboard;