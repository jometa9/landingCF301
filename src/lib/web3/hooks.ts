import { useAccount, useConnect, useDisconnect } from 'wagmi';
import { injected } from 'wagmi/connectors';
import { useEffect } from 'react';

export const useMetaMask = () => {
  const { address, isConnected } = useAccount();
  const { connect, error: connectError, isError, isPending } = useConnect();
  const { disconnect } = useDisconnect();

  // Restore session on page load
  useEffect(() => {
    const savedAddress = localStorage.getItem('walletAddress');
    if (savedAddress && !isConnected) {
      connect({ connector: injected() });
    }
  }, [connect, isConnected]);

  const connectWallet = async () => {
    try {
      if (typeof window.ethereum === 'undefined') {
        throw new Error('MetaMask is not installed. Please install MetaMask to continue.');
      }

      const result = await connect({ 
        connector: injected(),
        chainId: 1 // Ethereum Mainnet
      });

      if (!result?.account) {
        throw new Error('Failed to connect to MetaMask. Please try again.');
      }

      return { address: result.account };
    } catch (error) {
      if (error instanceof Error) {
        throw new Error(error.message);
      }
      throw new Error('Failed to connect to MetaMask. Please try again.');
    }
  };

  const disconnectWallet = () => {
    disconnect();
    localStorage.removeItem('walletAddress');
  };

  return {
    address,
    isConnected,
    connectWallet,
    disconnect: disconnectWallet,
    isLoading: isPending,
    error: connectError,
    isError
  };
};