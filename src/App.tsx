import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { WagmiConfig } from 'wagmi';
import { QueryClientProvider } from '@tanstack/react-query';
import { config, queryClient } from './lib/web3/config';

// Layouts
import { PublicLayout } from './components/layouts/PublicLayout';
import { AuthLayout } from './components/layouts/AuthLayout';

// Pages
import Home from './pages/Home';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import Trading from './pages/Trading';
import AccountStats from './pages/AccountStats';
import ChallengeRegister from './pages/ChallengeRegister';
import OpenFinances from './pages/OpenFinances';
import PrivateRoute from './components/PrivateRoute';
import { AuthProvider } from './contexts/AuthContext';

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <WagmiConfig config={config}>
        <Router>
          <AuthProvider>
            <Routes>
              {/* Public Routes */}
              <Route element={<PublicLayout />}>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/challenge/register" element={<ChallengeRegister />} />
                <Route path="/open-finances" element={<OpenFinances />} />
              </Route>

              {/* Protected Routes */}
              <Route element={<PrivateRoute><AuthLayout /></PrivateRoute>}>
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/trading" element={<Trading />} />
                <Route path="/account/:accountId/stats" element={<AccountStats />} />
              </Route>
            </Routes>
          </AuthProvider>
        </Router>
      </WagmiConfig>
    </QueryClientProvider>
  );
}

export default App;