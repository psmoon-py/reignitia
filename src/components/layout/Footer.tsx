import React from 'react';
import { Link } from 'react-router-dom';
import { Github, Heart } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-space-dark border-t border-space-purple/20 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <h3 className="text-xl font-bold text-white mb-2">
              Re<span className="text-accent-cyan">I</span>gnitia
            </h3>
            <p className="text-gray-400 text-sm">
              Free, global mission control for students. No talent wasted.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-3">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-gray-400 hover:text-accent-cyan text-sm transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/resources" className="text-gray-400 hover:text-accent-cyan text-sm transition-colors">
                  Resources
                </Link>
              </li>
              <li>
                <Link to="/opportunities" className="text-gray-400 hover:text-accent-cyan text-sm transition-colors">
                  Opportunities
                </Link>
              </li>
            </ul>
          </div>

          {/* Credits */}
          <div>
            <h4 className="text-white font-semibold mb-3">Open Source</h4>
            <p className="text-gray-400 text-sm mb-3">
              Built with love and free tools for students everywhere.
            </p>
            <div className="flex items-center space-x-4">
              <a
                href="https://github.com/psmoon-py/reignitia"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-accent-cyan transition-colors"
              >
                <Github className="w-5 h-5" />
              </a>
              <Heart className="w-5 h-5 text-accent-magenta" />
            </div>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-space-purple/20 text-center">
          <p className="text-gray-500 text-sm">
            © 2025 ReIgnitia. All resources linked are owned by their respective providers.
          </p>
        </div>
      </div>
    </footer>
  );
};