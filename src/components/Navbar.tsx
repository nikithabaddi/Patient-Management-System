import React from 'react';
import { Link } from 'react-router-dom';
import { Menu, Activity } from 'lucide-react';

interface NavbarProps {
  onMenuClick: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ onMenuClick }) => {
  return (
    <nav className="bg-pink-300 border-b border-pink-400 shadow-sm text-pink-900">
      <div className="max-w-7xl lg:max-w-full mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <button
              type="button"
              className="md:hidden inline-flex items-center justify-center p-2 rounded-md text-pink-900 hover:text-pink-700 hover:bg-pink-200 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-pink-500"
              onClick={onMenuClick}
            >
              <span className="sr-only">Open sidebar</span>
              <Menu className="h-6 w-6" aria-hidden="true" />
            </button>
            <div className="flex-shrink-0 flex items-center mx-4">
              <Link to="/" className="flex items-center text-pink-900">
                <Activity className="h-8 w-8 text-pink-900" />
                <span className="ml-2 text-xl font-bold">Med Blocks</span>
              </Link>
            </div>
          </div>
          <div className="flex items-center">
            <div className="ml-3 relative">
              <div className="flex items-center">
                <div className="h-8 w-8 rounded-full bg-white flex items-center justify-center text-pink-600 font-medium">
                  DR
                </div>
                <span className="ml-2 text-sm font-medium text-pink-900 hidden md:block">
                  Nikitha
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
