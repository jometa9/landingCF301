import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { PlusCircle } from 'lucide-react';

export const NewChallengeCard = () => {
  return (
    <Card className="border-2 border-dashed border-gray-800 bg-[#202020]">
      <CardContent className="p-6">
        <div className="text-center">
          <PlusCircle className="h-12 w-12 mx-auto text-gray-400 mb-4" />
          <h3 className="text-lg font-medium text-white mb-2">
            Start New Challenge
          </h3>
          <p className="text-sm text-gray-400 mb-4">
            Choose your account size and start your journey to becoming a funded trader
          </p>
          <Link to="/challenge/register">
            <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">
              Start Challenge
            </Button>
          </Link>
        </div>
      </CardContent>
    </Card>
  );
};