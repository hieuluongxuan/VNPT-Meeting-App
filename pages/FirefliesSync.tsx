import React from 'react';
import { useNavigate } from 'react-router-dom';
import BottomNav from '../components/BottomNav';

const FirefliesSync: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="font-display bg-background-light dark:bg-background-dark text-slate-900 dark:text-white overflow-x-hidden min-h-screen flex flex-col">
      {/* Header */}
      <header className="flex items-center justify-between p-4 sticky top-0 z-10 bg-background-light/95 dark:bg-background-dark/95 backdrop-blur-sm border-b border-slate-200 dark:border-slate-800">
        <button onClick={() => navigate(-1)} className="flex items-center justify-center p-2 rounded-full hover:bg-slate-200 dark:hover:bg-slate-800 transition-colors">
          <span className="material-symbols-outlined text-slate-900 dark:text-white text-2xl">arrow_back</span>
        </button>
        <h1 className="text-lg font-bold leading-tight tracking-[-0.015em] flex-1 text-center pr-2">Fireflies Sync</h1>
        <button onClick={() => navigate('/settings')} className="flex items-center justify-center p-2 rounded-full hover:bg-slate-200 dark:hover:bg-slate-800 transition-colors">
          <span className="material-symbols-outlined text-slate-900 dark:text-white text-2xl">settings</span>
        </button>
      </header>

      {/* Main Content */}
      <main className="flex-1 flex flex-col p-4 gap-6 w-full max-w-md mx-auto">
        {/* Hero Section */}
        <section className="flex flex-col gap-4">
          <div className="flex flex-col gap-2">
            <h2 className="text-3xl font-bold tracking-tight leading-tight">Import your transcripts</h2>
            <p className="text-slate-500 dark:text-slate-400 text-base font-normal leading-relaxed">
              Connect with Fireflies to import meeting data for VNPT technical analysis and summaries.
            </p>
          </div>
          <div className="flex flex-col gap-3 mt-2">
            <button className="relative w-full cursor-pointer flex items-center justify-center overflow-hidden rounded-full h-14 bg-primary hover:bg-blue-600 active:scale-[0.98] transition-all text-white gap-3 px-6 shadow-lg shadow-primary/25">
              <span className="material-symbols-outlined text-2xl">sync</span>
              <span className="text-lg font-bold tracking-wide">Sync with Fireflies</span>
            </button>
            <p className="text-slate-400 dark:text-slate-500 text-xs font-medium text-center">
              Last synced: Just now
            </p>
          </div>
        </section>

        <div className="h-px w-full bg-slate-200 dark:bg-slate-800"></div>

        {/* Recent Meetings List */}
        <section className="flex flex-col gap-4">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-bold leading-tight">Recent Meetings</h3>
            <button className="text-primary text-sm font-semibold hover:underline">View All</button>
          </div>
          <div className="flex flex-col gap-3">
            {/* Meeting Item 1: Ready to Import */}
            <div className="group relative flex flex-col bg-white dark:bg-[#1C252E] rounded-2xl p-4 active:scale-[0.99] transition-all border border-slate-100 dark:border-slate-800 shadow-sm">
              <div className="flex items-start justify-between gap-4">
                <div className="flex flex-col gap-1 flex-1">
                  <h4 className="font-bold text-base line-clamp-2">VNPT Core Network Architecture Review</h4>
                  <div className="flex items-center gap-2 text-slate-500 dark:text-slate-400 text-sm">
                    <span className="material-symbols-outlined text-[16px]">calendar_today</span>
                    <span>Today, 10:00 AM</span>
                    <span className="text-xs text-slate-600 dark:text-slate-600">•</span>
                    <span>45m</span>
                  </div>
                </div>
                <div className="flex flex-col items-end gap-2">
                  <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100 dark:bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 text-xs font-bold whitespace-nowrap">
                    <span className="w-1.5 h-1.5 rounded-full bg-current"></span> Ready
                  </div>
                </div>
              </div>
              <div className="mt-4 pt-3 border-t border-slate-100 dark:border-slate-700/50 flex items-center justify-between">
                <div className="flex -space-x-2">
                  <img alt="User" className="w-8 h-8 rounded-full border-2 border-white dark:border-[#1C252E]" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDe1zJR_4Ac_PMljLIy75u1IVjxUXkdVYn6tSKB8Ka5reY1JytATwFgca0-NVQ8mu43O85WnIjeHw0EEqQ9iTJJD7arxre5cHc10CG367gWbjudz9eZXEHR1E56GYWT_GN14PUUGUEcA-VrOSqR5g7fhF7pyZzy9MDM3oOIzDNU8EOszc1FpnBliBRW2e5-ZzfD4EGcpkb1ozuMRLNKHktA2kLUoJs7W0HlbJz3FFctJUntfCQkqYNmVCfOavQLscg5gpHPjv4VQxjo" />
                  <div className="w-8 h-8 rounded-full border-2 border-white dark:border-[#1C252E] bg-slate-100 dark:bg-slate-700 flex items-center justify-center text-[10px] font-bold text-slate-500 dark:text-slate-300">+3</div>
                </div>
                <button className="text-primary text-sm font-bold flex items-center gap-1 hover:gap-2 transition-all">
                  Import Analysis <span className="material-symbols-outlined text-sm">arrow_forward</span>
                </button>
              </div>
            </div>

            {/* Meeting Item 2: Processing */}
            <div className="group relative flex flex-col bg-white dark:bg-[#1C252E] rounded-2xl p-4 active:scale-[0.99] transition-all border border-slate-100 dark:border-slate-800 shadow-sm opacity-80">
              <div className="flex items-start justify-between gap-4">
                <div className="flex flex-col gap-1 flex-1">
                  <h4 className="font-bold text-base line-clamp-1">Q3 Technical Roadmap Sync</h4>
                  <div className="flex items-center gap-2 text-slate-500 dark:text-slate-400 text-sm">
                    <span className="material-symbols-outlined text-[16px]">calendar_today</span>
                    <span>Yesterday, 2:30 PM</span>
                    <span className="text-xs text-slate-600 dark:text-slate-600">•</span>
                    <span>1h 15m</span>
                  </div>
                </div>
                <div className="flex flex-col items-end gap-2">
                  <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-100 dark:bg-amber-500/10 text-amber-700 dark:text-amber-400 text-xs font-bold whitespace-nowrap">
                    <span className="material-symbols-outlined text-[14px] animate-spin">progress_activity</span> Processing
                  </div>
                </div>
              </div>
              <div className="mt-4 pt-1 w-full bg-slate-100 dark:bg-slate-700 rounded-full h-1.5 overflow-hidden">
                <div className="bg-amber-500 h-full w-2/3 rounded-full"></div>
              </div>
              <p className="text-xs text-slate-400 mt-2">Transcribing audio...</p>
            </div>
            
            {/* Meeting Item 3: Completed */}
             <div className="group relative flex flex-col bg-white dark:bg-[#1C252E] rounded-2xl p-4 active:scale-[0.99] transition-all border border-slate-100 dark:border-slate-800 shadow-sm">
              <div className="flex items-start justify-between gap-4">
                <div className="flex flex-col gap-1 flex-1">
                  <h4 className="font-bold text-base line-clamp-1">Project Delta Kickoff</h4>
                  <div className="flex items-center gap-2 text-slate-500 dark:text-slate-400 text-sm">
                    <span className="material-symbols-outlined text-[16px]">calendar_today</span>
                    <span>Oct 24, 9:00 AM</span>
                    <span className="text-xs text-slate-600 dark:text-slate-600">•</span>
                    <span>30m</span>
                  </div>
                </div>
                <div className="flex flex-col items-end gap-2">
                  <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300 text-xs font-bold whitespace-nowrap">
                    <span className="material-symbols-outlined text-[14px]">check_circle</span> Imported
                  </div>
                </div>
              </div>
              <div className="mt-4 pt-3 border-t border-slate-100 dark:border-slate-700/50 flex items-center justify-between">
                <div className="flex gap-2">
                  <span className="px-2 py-0.5 rounded bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 text-[10px] font-bold border border-blue-100 dark:border-blue-900/30">SUMMARY</span>
                  <span className="px-2 py-0.5 rounded bg-purple-50 dark:bg-purple-900/20 text-purple-600 dark:text-purple-400 text-[10px] font-bold border border-purple-100 dark:border-purple-900/30">KTHT</span>
                </div>
                <button className="text-slate-500 dark:text-slate-400 text-sm font-semibold flex items-center gap-1 hover:text-primary transition-colors">
                   View Report
                </button>
              </div>
            </div>

          </div>
        </section>
        <div className="h-8"></div>
      </main>

      <BottomNav activeTab="fireflies" />
    </div>
  );
};

export default FirefliesSync;