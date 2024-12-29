import React, { useState } from 'react';
import { TradingSymbolList } from '@/components/trading/TradingSymbolList';
import { TradingAccountInfo } from '@/components/trading/TradingAccountInfo';
import { TradingPositions } from '@/components/trading/TradingPositions';
import { AccountSelector } from '@/components/trading/AccountSelector';
import { OrderForm } from '@/components/trading/OrderForm';

const accounts = [
  {
    id: '1',
    login: '1520246170',
    balance: 50601.46,
    status: 'funded' as const
  },
  {
    id: '2',
    login: '1520246171',
    balance: 25000.00,
    status: '1step' as const
  },
  {
    id: '3',
    login: '1520246172',
    balance: 100000.00,
    status: '2step' as const
  }
];

const Trading = () => {
  const [selectedSymbol, setSelectedSymbol] = useState('XAUUSD');
  const [selectedAccounts, setSelectedAccounts] = useState<string[]>([]);

  const handleAccountSelect = (accountId: string) => {
    setSelectedAccounts(prev => 
      prev.includes(accountId)
        ? prev.filter(id => id !== accountId)
        : [...prev, accountId]
    );
  };

  return (
    <div className="max-w-7xl mx-auto px-4">
      <div className="grid grid-cols-12 gap-6">
        {/* Left Column */}
        <div className="col-span-3 space-y-6">
          <AccountSelector
            accounts={accounts}
            selectedAccounts={selectedAccounts}
            onAccountSelect={handleAccountSelect}
          />
          <TradingSymbolList
            selectedSymbol={selectedSymbol}
            onSymbolSelect={setSelectedSymbol}
          />
        </div>

        {/* Right Column */}
        <div className="col-span-9 space-y-6">
          {selectedAccounts.map(accountId => (
            <TradingAccountInfo key={accountId} accountId={accountId} />
          ))}
          
          {selectedAccounts.length > 0 ? (
            <>
              <OrderForm symbol={selectedSymbol} price={1234.56} />
              <TradingPositions />
            </>
          ) : (
            <div className="text-center py-12 bg-white rounded-lg border">
              <p className="text-gray-500">
                Please select at least one account to start trading
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Trading;