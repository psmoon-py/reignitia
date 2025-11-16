import React from 'react';
import { Navbar } from './Navbar';
import { Footer } from './Footer';

interface LayoutProps {
  children: React.ReactNode;
  showNav?: boolean;
  showFooter?: boolean;
}

export const Layout: React.FC<LayoutProps> = ({ 
  children, 
  showNav = true, 
  showFooter = true 
}) => {
  return (
    <div className="min-h-screen flex flex-col bg-space-dark">
      {showNav && <Navbar />}
      <main className={`flex-grow ${showNav ? 'pt-16' : ''}`}>
        {children}
      </main>
      {showFooter && <Footer />}
    </div>
  );
};