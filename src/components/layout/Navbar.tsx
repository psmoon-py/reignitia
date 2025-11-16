import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { GraduationCap, Compass, Book, Briefcase, User } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useProfileStore } from '@/store/useProfileStore';
import { cn } from '@/lib/utils';

const navLinks = [
  { to: '/universe', label: 'Universe', icon: Compass },
  { to: '/missions/list', label: 'Missions', icon: GraduationCap },
  { to: '/resources', label: 'Resources', icon: Book },
  { to: '/opportunities', label: 'Opportunities', icon: Briefcase },
];

export const Navbar: React.FC = () => {
  const location = useLocation();
  const { profile } = useProfileStore();

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 bg-space-dark/80 backdrop-blur-md border-b border-space-purple/20"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 group">
            <img 
              src="/assets/Reignitia_logo.jpg" 
              alt="ReIgnitia Logo" 
              className="h-10 w-10 rounded-lg transition-transform group-hover:scale-110"
            />
            <span className="text-2xl font-bold text-white tracking-tight">
              Re<span className="text-accent-cyan">I</span>gnitia
            </span>
          </Link>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-1">
            {navLinks.map((link) => {
              const Icon = link.icon;
              const isActive = location.pathname === link.to;
              
              return (
                <Link
                  key={link.to}
                  to={link.to}
                  className={cn(
                    'flex items-center space-x-2 px-4 py-2 rounded-md transition-all',
                    isActive
                      ? 'bg-accent-cyan/20 text-accent-cyan'
                      : 'text-gray-300 hover:bg-space-purple/20 hover:text-white'
                  )}
                >
                  <Icon className="w-4 h-4" />
                  <span className="text-sm font-medium">{link.label}</span>
                </Link>
              );
            })}
          </div>

          {/* Right side - Profile or Launch CTA */}
          <div className="flex items-center space-x-4">
            {profile ? (
              <Link to="/account">
                <Button variant="ghost" size="sm" className="flex items-center space-x-2">
                  <User className="w-4 h-4" />
                  <span className="hidden sm:inline">Account</span>
                </Button>
              </Link>
            ) : (
              <Link to="/launch">
                <Button variant="primary" size="default">
                  Launch Your Universe
                </Button>
              </Link>
            )}
          </div>
        </div>
      </div>
    </motion.nav>
  );
};