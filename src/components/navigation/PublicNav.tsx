import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { BarChart2, LogIn } from 'lucide-react';
import { Button } from '@/components/ui/button';

export const PublicNav = () => {
  const location = useLocation();

  return (
    <div className="fixed top-0 left-0 right-0 z-50 px-4 py-4">
      <div className="max-w-7xl mx-auto">
        <div className="rounded-xl border bg-background/95 shadow-sm backdrop-blur supports-[backdrop-filter]:bg-background/60">
          <div className="flex h-14 items-center px-4">
            <div className="flex flex-1 items-center justify-between">
              <Link to="/" className="flex items-center space-x-2">
                <BarChart2 className="h-6 w-6" />
                <span className="font-bold">CF2</span>
              </Link>

              <Link to="/login">
                <Button variant="default" size="sm">
                  <LogIn className="h-4 w-4 mr-2" />
                  Login
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};