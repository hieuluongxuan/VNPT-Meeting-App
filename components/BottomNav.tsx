import React from 'react';
import { Link, useLocation } from 'react-router-dom';

interface BottomNavProps {
  activeTab?: 'home' | 'history' | 'settings' | 'fireflies';
}

const BottomNav: React.FC<BottomNavProps> = ({ activeTab = 'home' }) => {
  const location = useLocation();

  const getLinkClass = (tabName: string) => {
    const isActive = activeTab === tabName;
    const baseClass = "flex flex-col items-center justify-center w-full h-full gap-1 transition-colors cursor-pointer";
    const activeText = "text-primary";
    const inactiveText = "text-slate-400 hover:text-slate-600 dark:hover:text-slate-200";
    return `${baseClass} ${isActive ? activeText : inactiveText}`;
  };

  return (
    <nav className="fixed bottom-0 left-0 w-full bg-background-light/95 dark:bg-surface-dark/95 backdrop-blur-lg border-t border-slate-200 dark:border-border-dark pb-safe z-50">
      <div className="flex justify-around items-center h-16 max-w-md mx-auto px-4">
        <Link to="/" className={getLinkClass('home')}>
          <span className={`material-symbols-outlined ${activeTab === 'home' ? 'filled' : ''}`}>home</span>
          <span className="text-[10px] font-bold">Home</span>
        </Link>
        
        <Link to="/meetings" className={getLinkClass('history')}>
          <span className={`material-symbols-outlined ${activeTab === 'history' ? 'filled' : ''}`}>history</span>
          <span className="text-[10px] font-medium">History</span>
        </Link>

        <Link to="/fireflies-sync" className={getLinkClass('fireflies')}>
          <span className={`material-symbols-outlined ${activeTab === 'fireflies' ? 'filled' : ''}`}>hub</span>
          <span className="text-[10px] font-medium">Fireflies</span>
        </Link>
        
        <Link to="/settings" className={getLinkClass('settings')}>
          <span className={`material-symbols-outlined ${activeTab === 'settings' ? 'filled' : ''}`}>settings</span>
          <span className="text-[10px] font-medium">Settings</span>
        </Link>
      </div>
    </nav>
  );
};

export default BottomNav;