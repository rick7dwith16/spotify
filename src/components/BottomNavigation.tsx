import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { NavRoute } from '../types';

interface BottomNavigationProps {
  routes: NavRoute[];
}

const BottomNavigation: React.FC<BottomNavigationProps> = ({ routes }) => {
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <div className="bg-zinc-900 border-t border-zinc-800 py-2">
      <div className="max-w-screen-sm mx-auto">
        <div className="flex justify-around items-center">
          {routes.map((route) => {
            const isActive = location.pathname === route.path;
            
            return (
              <button
                key={route.path}
                onClick={() => navigate(route.path)}
                className={`flex flex-col items-center w-1/3 py-2 px-1 transition-all duration-200 ${
                  isActive ? 'text-green-500' : 'text-gray-400 hover:text-gray-200'
                }`}
              >
                <div className="mb-1">{route.icon}</div>
                <span className="text-xs font-medium">{route.label}</span>
                {isActive && (
                  <div className="mt-1 h-1 w-6 bg-green-500 rounded-full" />
                )}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default BottomNavigation;