import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Checkbox } from '@/components/ui/checkbox';

interface Account {
  id: string;
  login: string;
  balance: number;
  status: 'funded' | '1step' | '2step';
}

interface AccountSelectorProps {
  accounts: Account[];
  selectedAccounts: string[];
  onAccountSelect: (accountId: string) => void;
}

export const AccountSelector: React.FC<AccountSelectorProps> = ({
  accounts,
  selectedAccounts,
  onAccountSelect,
}) => {
  const getStatusBadge = (status: Account['status']) => {
    switch (status) {
      case 'funded':
        return <Badge className="bg-green-500">Funded</Badge>;
      case '1step':
        return <Badge variant="outline" className="text-white">1 Step</Badge>;
      case '2step':
        return <Badge variant="outline" className="text-white">2 Step</Badge>;
    }
  };

  return (
    <Card className="bg-[#202020] border-gray-800">
      <CardHeader>
        <CardTitle className="text-white">Select Trading Accounts</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {accounts.map((account) => (
            <div
              key={account.id}
              className="flex items-center justify-between p-4 border border-gray-800 rounded-lg hover:bg-gray-900"
            >
              <div className="flex items-center space-x-4">
                <Checkbox
                  id={account.id}
                  checked={selectedAccounts.includes(account.id)}
                  onCheckedChange={() => onAccountSelect(account.id)}
                />
                <div>
                  <label
                    htmlFor={account.id}
                    className="text-sm font-medium text-white cursor-pointer"
                  >
                    Account {account.login}
                  </label>
                  <p className="text-sm text-gray-400">
                    Balance: ${account.balance.toLocaleString()}
                  </p>
                </div>
              </div>
              {getStatusBadge(account.status)}
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};