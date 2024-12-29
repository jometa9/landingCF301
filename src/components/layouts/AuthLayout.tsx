import React from 'react';
import { Outlet } from 'react-router-dom';
import { AuthNav } from '../navigation/AuthNav';

export const AuthLayout = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <AuthNav />
      <main className="pt-6">
        <Outlet />
      </main>
    </div>
  );
};