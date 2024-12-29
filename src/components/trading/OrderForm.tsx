import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

interface OrderFormProps {
  symbol: string;
  price: number;
}

export const OrderForm: React.FC<OrderFormProps> = ({ symbol, price }) => {
  return (
    <Card className="bg-[#202020] border-gray-800">
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle className="text-white">{symbol} Trading</CardTitle>
        <div className="flex gap-2">
          <Button variant="destructive">Sell</Button>
          <Button variant="default">Buy</Button>
        </div>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="market" className="w-full">
          <TabsList className="w-full bg-gray-900">
            <TabsTrigger value="market" className="flex-1 text-white data-[state=active]:bg-gray-800">Market</TabsTrigger>
            <TabsTrigger value="limit" className="flex-1 text-white data-[state=active]:bg-gray-800">Limit</TabsTrigger>
            <TabsTrigger value="stop" className="flex-1 text-white data-[state=active]:bg-gray-800">Stop</TabsTrigger>
          </TabsList>

          <TabsContent value="market" className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label className="text-white">Volume (Lots)</Label>
                <Input type="number" placeholder="1.00" step="0.01" min="0.01" className="bg-gray-900 border-gray-700 text-white" />
              </div>
              <div className="space-y-2">
                <Label className="text-white">Price</Label>
                <Input type="number" value={price} disabled className="bg-gray-800 border-gray-700 text-gray-400" />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label className="text-white">Take Profit</Label>
                <Input type="number" placeholder="0.00" className="bg-gray-900 border-gray-700 text-white" />
              </div>
              <div className="space-y-2">
                <Label className="text-white">Stop Loss</Label>
                <Input type="number" placeholder="0.00" className="bg-gray-900 border-gray-700 text-white" />
              </div>
            </div>
          </TabsContent>

          {/* Similar updates for limit and stop tabs */}
        </Tabs>
      </CardContent>
    </Card>
  );
};