import React from 'react';
import { Outlet } from 'react-router-dom';
import { PublicNav } from '../navigation/PublicNav';
import Footer from '../footer/Footer';

export const PublicLayout = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <PublicNav />
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};