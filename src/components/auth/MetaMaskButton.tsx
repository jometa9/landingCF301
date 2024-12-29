import React, { useState } from 'react';
import { Wallet, AlertCircle } from 'lucide-react';
import { useMetaMask } from '../../lib/web3/hooks';
import { Button } from '@/components/ui/button';
import { useAuth } from '../../contexts/AuthContext';

interface MetaMaskButtonProps {
  onSuccess: () => void;
}

const MetaMaskButton: React.FC<MetaMaskButtonProps> = ({ onSuccess }) => {
  const { connectWallet, isConnected } = useMetaMask();
  const { login } = useAuth();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleConnect = async () => {
    if (isConnected) {
      onSuccess();
      return;
    }

    setIsLoading(true);
    setError(null);
    
    try {
      const result = await connectWallet();
      if (result?.address) {
        await login(result.address);
        onSuccess();
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to connect to MetaMask');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="space-y-4">
      <Button
        onClick={handleConnect}
        disabled={isLoading}
        className="w-full"
        size="lg"
      >
        <Wallet className="w-5 h-5 mr-2" />
        {isLoading ? 'Connecting...' : isConnected ? 'Connected' : 'Connect with MetaMask'}
      </Button>
      
      {error && (
        <div className="bg-red-50 border border-red-200 rounded-md p-4">
          <div className="flex">
            <AlertCircle className="h-5 w-5 text-red-400" />
            <div className="ml-3">
              <p className="text-sm text-red-700">{error}</p>
            </div>
          </div>
        </div>
      )}

      {!error && (
        <p className="text-sm text-center text-gray-500">
          {isConnected ? 
            'You are connected to MetaMask' : 
            'Connect your MetaMask wallet to continue'}
        </p>
      )}
    </div>
  );
};

export default MetaMaskButton;