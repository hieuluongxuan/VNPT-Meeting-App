import React from 'react';
import { useNavigate } from 'react-router-dom';
import BottomNav from '../components/BottomNav';

const Home: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col min-h-screen bg-background-light dark:bg-background-dark">
      {/* Top App Bar */}
      <header className="sticky top-0 z-50 flex items-center justify-between p-4 bg-background-light/95 dark:bg-background-dark/95 backdrop-blur-md border-b border-transparent dark:border-border-dark/50">
        <button className="flex items-center justify-center w-10 h-10 rounded-full hover:bg-black/5 dark:hover:bg-white/10 transition-colors">
          <span className="material-symbols-outlined text-2xl">menu</span>
        </button>
        <h1 className="text-lg font-bold tracking-tight text-center flex-1 truncate px-2">
          VNPT-IT AI Co-Pilot
        </h1>
        <button className="flex items-center justify-center w-10 h-10 rounded-full hover:bg-black/5 dark:hover:bg-white/10 transition-colors relative">
          <span className="material-symbols-outlined text-2xl">notifications</span>
          <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full ring-2 ring-background-light dark:ring-background-dark"></span>
        </button>
      </header>

      {/* Main Content Scroll Area */}
      <main className="flex-1 flex flex-col w-full max-w-md mx-auto px-4 pb-24 pt-2">
        {/* Meeting Selector */}
        <div className="mt-2 mb-6">
          <label className="block mb-2 text-sm font-medium text-slate-500 dark:text-slate-400 ml-1">Current Session</label>
          <div className="relative group">
            <div className="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none z-10">
              <span className="material-symbols-outlined text-primary">calendar_month</span>
            </div>
            <select className="w-full h-14 pl-12 pr-10 bg-surface-light dark:bg-surface-dark border-0 rounded-2xl text-base font-medium shadow-sm ring-1 ring-inset ring-slate-200 dark:ring-border-dark focus:ring-2 focus:ring-primary appearance-none transition-shadow cursor-pointer truncate text-slate-900 dark:text-white">
              <option value="current">Project Alpha Sync - 10:00 AM</option>
              <option value="new">+ Create New Meeting</option>
              <option value="prev1">Weekly Architecture Review</option>
            </select>
            <div className="absolute inset-y-0 right-0 flex items-center pr-4 pointer-events-none">
              <span className="material-symbols-outlined text-slate-400">expand_more</span>
            </div>
          </div>
        </div>

        {/* Hero Recording Section */}
        <div className="flex-1 flex flex-col items-center justify-center min-h-[300px] py-8">
          <div className="relative flex items-center justify-center group cursor-pointer active:scale-95 transition-transform duration-200" onClick={() => navigate('/block-detail')}>
            {/* Pulsing Rings (Decorative) */}
            <div className="absolute w-48 h-48 rounded-full bg-primary/10 animate-ping opacity-75"></div>
            <div className="absolute w-40 h-40 rounded-full bg-primary/20 animate-pulse"></div>
            {/* Main Button */}
            <button className="relative flex items-center justify-center w-32 h-32 rounded-full bg-gradient-to-br from-primary to-[#0062cc] text-white shadow-glow hover:shadow-[0_0_60px_-10px_rgba(19,127,236,0.6)] transition-all z-10">
              <span className="material-symbols-outlined text-5xl" style={{ fontSize: '48px' }}>mic</span>
            </button>
          </div>
          <div className="mt-8 text-center space-y-2">
            <h2 className="text-2xl font-bold tracking-tight">Tap to Start Block</h2>
            <p className="text-slate-500 dark:text-slate-400 text-sm max-w-[200px] mx-auto">
              AI will transcribe and summarize in real-time
            </p>
          </div>
        </div>

        {/* Recent Blocks List */}
        <div className="mt-4">
          <div className="flex items-center justify-between mb-4 px-1">
            <h3 className="text-lg font-bold">Last 3 Blocks</h3>
            <button className="text-sm font-semibold text-primary hover:text-primary/80">View All</button>
          </div>
          <div className="space-y-3">
            {/* Card 1 */}
            <div className="p-4 rounded-2xl bg-surface-light dark:bg-surface-dark border border-transparent hover:border-slate-200 dark:hover:border-border-dark transition-colors shadow-sm cursor-pointer group" onClick={() => navigate('/block-detail')}>
              <div className="flex justify-between items-start mb-2">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400">
                    Action Item
                  </span>
                  <span className="text-xs text-slate-400 font-medium">09:45 AM</span>
                </div>
                <span className="material-symbols-outlined text-slate-400 group-hover:text-primary transition-colors text-xl">chevron_right</span>
              </div>
              <p className="text-sm font-medium text-slate-700 dark:text-slate-200 line-clamp-2">
                Discussed API integration timeline with the backend team. Need to finalize the Swagger docs by EOD Friday.
              </p>
            </div>
            {/* Card 2 */}
            <div className="p-4 rounded-2xl bg-surface-light dark:bg-surface-dark border border-transparent hover:border-slate-200 dark:hover:border-border-dark transition-colors shadow-sm cursor-pointer group">
              <div className="flex justify-between items-start mb-2">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-indigo-100 text-indigo-700 dark:bg-indigo-900/30 dark:text-indigo-400">
                    Technical
                  </span>
                  <span className="text-xs text-slate-400 font-medium">09:42 AM</span>
                </div>
                <span className="material-symbols-outlined text-slate-400 group-hover:text-primary transition-colors text-xl">chevron_right</span>
              </div>
              <p className="text-sm font-medium text-slate-700 dark:text-slate-200 line-clamp-2">
                Database schema update required for the new user profile module. Migration script pending review.
              </p>
            </div>
            {/* Card 3 */}
            <div className="p-4 rounded-2xl bg-surface-light dark:bg-surface-dark border border-transparent hover:border-slate-200 dark:hover:border-border-dark transition-colors shadow-sm cursor-pointer group">
              <div className="flex justify-between items-start mb-2">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400">
                    Suggestion
                  </span>
                  <span className="text-xs text-slate-400 font-medium">09:38 AM</span>
                </div>
                <span className="material-symbols-outlined text-slate-400 group-hover:text-primary transition-colors text-xl">chevron_right</span>
              </div>
              <p className="text-sm font-medium text-slate-700 dark:text-slate-200 line-clamp-2">
                Consider syncing these notes with Fireflies for broader team visibility before the sprint planning.
              </p>
            </div>
          </div>
        </div>
      </main>

      <BottomNav activeTab="home" />
    </div>
  );
};

export default Home;