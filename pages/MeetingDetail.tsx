import React from 'react';
import { useNavigate } from 'react-router-dom';

const MeetingDetail: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-background-light dark:bg-background-dark text-slate-900 dark:text-white font-display antialiased selection:bg-primary/30 min-h-screen flex flex-col items-center">
      <div className="relative flex h-full min-h-screen w-full flex-col overflow-x-hidden pb-24 max-w-md mx-auto">
        {/* Sticky Header */}
        <header className="sticky top-0 z-50 bg-background-light/95 dark:bg-background-dark/95 backdrop-blur-md border-b border-gray-200 dark:border-gray-800 transition-colors duration-300">
          <div className="flex items-center p-4 justify-between">
            <button 
              onClick={() => navigate(-1)}
              className="text-slate-900 dark:text-white flex size-10 shrink-0 items-center justify-center rounded-full hover:bg-gray-200 dark:hover:bg-gray-800 transition-colors"
            >
              <span className="material-symbols-outlined text-[24px]">arrow_back</span>
            </button>
            <h2 className="text-slate-900 dark:text-white text-lg font-bold leading-tight tracking-[-0.015em] flex-1 text-center truncate px-2">
              Weekly Infrastructure Sync
            </h2>
            <div className="flex w-10 items-center justify-end"></div>
          </div>
          <div className="pb-3 text-center">
            <p className="text-slate-500 dark:text-gray-400 text-sm font-medium">Oct 24, 14:00 - 15:30</p>
          </div>
        </header>

        {/* Main Content */}
        <main className="flex-1 flex flex-col w-full">
          {/* Audio Playback Floating Bar */}
          <div className="px-4 pt-4 pb-2">
            <div className="bg-surface-light dark:bg-surface-dark rounded-full p-2 pr-4 flex items-center justify-between shadow-md ring-1 ring-gray-900/5 dark:ring-white/10">
              <div className="flex items-center gap-3">
                <button className="bg-primary text-white size-10 rounded-full flex items-center justify-center shadow-lg hover:bg-blue-600 transition-colors">
                  <span className="material-symbols-outlined fill-1">play_arrow</span>
                </button>
                <div className="flex flex-col">
                  <span className="text-xs font-bold text-slate-900 dark:text-white uppercase tracking-wider">Recording</span>
                  <span className="text-xs text-slate-500 dark:text-gray-400">01:30:00 • 24MB</span>
                </div>
              </div>
              <div className="flex items-center gap-[2px] h-6">
                <div className="w-1 bg-primary/40 h-3 rounded-full"></div>
                <div className="w-1 bg-primary/60 h-5 rounded-full"></div>
                <div className="w-1 bg-primary h-6 rounded-full"></div>
                <div className="w-1 bg-primary/80 h-4 rounded-full"></div>
                <div className="w-1 bg-primary/40 h-2 rounded-full"></div>
                <div className="w-1 bg-primary/30 h-3 rounded-full"></div>
              </div>
            </div>
          </div>

          {/* Segmented Control */}
          <div className="px-4 py-3 sticky top-[100px] z-40 bg-background-light dark:bg-background-dark">
            <div className="flex h-12 w-full items-center justify-between rounded-full bg-gray-200 dark:bg-[#283039] p-1">
              <button className="flex-1 h-full rounded-full bg-primary shadow-sm text-white text-sm font-bold leading-normal transition-all duration-200">
                Overview
              </button>
              <button className="flex-1 h-full rounded-full text-slate-600 dark:text-[#9dabb9] text-sm font-medium leading-normal hover:text-slate-900 dark:hover:text-white transition-colors">
                Action Items
              </button>
              <button className="flex-1 h-full rounded-full text-slate-600 dark:text-[#9dabb9] text-sm font-medium leading-normal hover:text-slate-900 dark:hover:text-white transition-colors">
                KTHT Analysis
              </button>
            </div>
          </div>

          {/* Overview Content */}
          <div className="flex flex-col gap-6 px-4 pb-6 pt-2 animate-in fade-in slide-in-from-bottom-4 duration-500">
            {/* AI Summary Card */}
            <div className="relative overflow-hidden rounded-xl bg-surface-light dark:bg-surface-dark shadow-sm ring-1 ring-gray-900/5 dark:ring-white/5">
              <div 
                className="h-40 w-full bg-cover bg-center" 
                style={{ backgroundImage: 'linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(16, 25, 34, 1) 100%), url("https://lh3.googleusercontent.com/aida-public/AB6AXuAw9sM1KkC7OHnBDQrSccMJZMEmZz53Yg9wFNGpGsx6er19a2FSlw-WYWmjmNlI-Lb9C7APxsBWRgbW4BSPwiYJRrigyvK5MAGGMYqzyRkahUsJea-_6hJt97ecfWsBX5NIbHnNfhb0f5ne61rG9EoHDOud-yapB_Zdmt7YHcx0z9G1fxYn54wO77h8EDie2ge1hOmVbsHso-I9TVnlQmvTTAEJ_H_6DIXtrWLjT4T6FHotXQu3b_zSpFoQ6-6SmqMi-Kjjl_S_oETq")' }}
              >
                <div className="absolute top-3 right-3">
                  <span className="inline-flex items-center gap-1 rounded-full bg-black/40 backdrop-blur-md px-2 py-1 text-xs font-medium text-white ring-1 ring-white/20">
                    <span className="material-symbols-outlined text-[14px] text-primary">auto_awesome</span>
                    AI Summary
                  </span>
                </div>
              </div>
              <div className="p-5 -mt-6 relative z-10">
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">Network Rollout & Constraints</h3>
                <p className="text-slate-600 dark:text-gray-300 text-sm leading-relaxed">
                  The team discussed the rollout of the 5G core network in the northern region, highlighting budget approval status and confirming significant vendor delays impacting Q4 timelines.
                </p>
              </div>
            </div>

            {/* Key Highlights */}
            <div>
              <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-3 flex items-center gap-2">
                <span className="material-symbols-outlined text-primary">bolt</span> Key Highlights
              </h3>
              <div className="flex flex-col gap-3">
                <div className="flex items-start gap-3 p-3 rounded-lg bg-surface-light dark:bg-surface-dark ring-1 ring-gray-900/5 dark:ring-white/5">
                  <span className="material-symbols-outlined text-green-500 text-[20px] mt-0.5">check_circle</span>
                  <span className="text-sm font-medium text-slate-700 dark:text-gray-200">Budget for Northern Region approved by Finance.</span>
                </div>
                <div className="flex items-start gap-3 p-3 rounded-lg bg-surface-light dark:bg-surface-dark ring-1 ring-gray-900/5 dark:ring-white/5">
                  <span className="material-symbols-outlined text-amber-500 text-[20px] mt-0.5">warning</span>
                  <span className="text-sm font-medium text-slate-700 dark:text-gray-200">Vendor confirmed 3-week delay on hardware shipment.</span>
                </div>
                <div className="flex items-start gap-3 p-3 rounded-lg bg-surface-light dark:bg-surface-dark ring-1 ring-gray-900/5 dark:ring-white/5">
                  <span className="material-symbols-outlined text-primary text-[20px] mt-0.5">info</span>
                  <span className="text-sm font-medium text-slate-700 dark:text-gray-200">New firewall policy to be drafted by Security Team.</span>
                </div>
              </div>
            </div>

            {/* Talking Points Chips */}
            <div>
              <h3 className="text-sm font-semibold text-slate-500 dark:text-gray-400 uppercase tracking-wider mb-3">Talking Points</h3>
              <div className="flex gap-2 overflow-x-auto no-scrollbar pb-1">
                <span className="whitespace-nowrap rounded-full bg-gray-200 dark:bg-surface-dark px-4 py-2 text-xs font-bold text-slate-700 dark:text-gray-200 ring-1 ring-inset ring-gray-900/5 dark:ring-white/10">5G Core</span>
                <span className="whitespace-nowrap rounded-full bg-gray-200 dark:bg-surface-dark px-4 py-2 text-xs font-bold text-slate-700 dark:text-gray-200 ring-1 ring-inset ring-gray-900/5 dark:ring-white/10">Budgeting</span>
                <span className="whitespace-nowrap rounded-full bg-gray-200 dark:bg-surface-dark px-4 py-2 text-xs font-bold text-slate-700 dark:text-gray-200 ring-1 ring-inset ring-gray-900/5 dark:ring-white/10">Vendor Relations</span>
                <span className="whitespace-nowrap rounded-full bg-gray-200 dark:bg-surface-dark px-4 py-2 text-xs font-bold text-slate-700 dark:text-gray-200 ring-1 ring-inset ring-gray-900/5 dark:ring-white/10">Security</span>
              </div>
            </div>

            {/* Preview: Action Items */}
            <div className="my-4 flex items-center gap-4">
              <div className="h-[1px] bg-gray-300 dark:bg-gray-700 flex-1"></div>
              <span className="text-xs text-gray-500 uppercase font-bold">Preview: Action Items Tab</span>
              <div className="h-[1px] bg-gray-300 dark:bg-gray-700 flex-1"></div>
            </div>

            <div className="flex flex-col gap-4">
              <div className="bg-surface-light dark:bg-surface-dark rounded-xl p-4 shadow-sm ring-1 ring-gray-900/5 dark:ring-white/5">
                <div className="flex justify-between items-start mb-3">
                  <div className="flex items-center gap-3">
                    <div className="size-8 rounded-full bg-blue-900 flex items-center justify-center text-xs font-bold text-blue-200 border border-blue-700">IT</div>
                    <div>
                      <p className="text-xs text-slate-500 dark:text-gray-400">Assignee</p>
                      <p className="text-sm font-bold text-slate-900 dark:text-white">IT Security Unit</p>
                    </div>
                  </div>
                  <div className="rounded-full bg-red-500/10 px-2 py-1 text-[10px] font-bold text-red-500 ring-1 ring-inset ring-red-500/20">HIGH</div>
                </div>
                <p className="text-slate-800 dark:text-gray-200 font-medium text-sm mb-4">Update firewall configurations to allow new 5G protocol traffic.</p>
                <div className="flex items-center gap-2 text-slate-500 dark:text-gray-400 text-xs">
                  <span className="material-symbols-outlined text-[16px]">calendar_today</span>
                  <span>Due Oct 30</span>
                </div>
              </div>
            </div>

            {/* Preview: Analysis */}
            <div className="my-4 flex items-center gap-4">
              <div className="h-[1px] bg-gray-300 dark:bg-gray-700 flex-1"></div>
              <span className="text-xs text-gray-500 uppercase font-bold">Preview: KTHT Analysis Tab</span>
              <div className="h-[1px] bg-gray-300 dark:bg-gray-700 flex-1"></div>
            </div>

            <div className="flex flex-col gap-4">
              <div className="bg-red-500/5 dark:bg-red-500/5 border border-red-500/20 rounded-xl p-4">
                <div className="flex items-center justify-between mb-3">
                  <h4 className="text-red-600 dark:text-red-400 font-bold text-sm flex items-center gap-2">
                    <span className="material-symbols-outlined">warning</span> High Infrastructure Risk
                  </h4>
                  <span className="text-xs font-mono text-red-600 dark:text-red-400">LEVEL 3</span>
                </div>
                <p className="text-sm text-slate-700 dark:text-gray-300 mb-3">Detected latency spikes in Cluster B during peak load.</p>
                <div className="h-2 w-full bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                  <div className="h-full bg-red-500 w-[85%]"></div>
                </div>
              </div>
            </div>

          </div>
          <div className="h-20"></div>
        </main>

        {/* Fixed Bottom Action Bar */}
        <div className="fixed bottom-0 left-0 w-full bg-surface-light dark:bg-surface-dark border-t border-gray-200 dark:border-gray-800 p-4 pb-8 z-50">
          <div className="flex gap-3 max-w-md mx-auto">
            <button className="flex-1 flex items-center justify-center gap-2 rounded-xl bg-gray-200 dark:bg-gray-800 hover:bg-gray-300 dark:hover:bg-gray-700 text-slate-900 dark:text-white h-12 text-sm font-bold transition-colors">
              <span className="material-symbols-outlined text-[20px]">ios_share</span> Share
            </button>
            <button className="flex-1 flex items-center justify-center gap-2 rounded-xl bg-gray-200 dark:bg-gray-800 hover:bg-gray-300 dark:hover:bg-gray-700 text-slate-900 dark:text-white h-12 text-sm font-bold transition-colors">
              <span className="material-symbols-outlined text-[20px]">picture_as_pdf</span> PDF
            </button>
            <button className="flex-[1.5] flex items-center justify-center gap-2 rounded-xl bg-primary text-white h-12 text-sm font-bold shadow-lg shadow-primary/20 transition-transform active:scale-95">
              <span className="material-symbols-outlined text-[20px]">sync</span> Sync Fireflies
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MeetingDetail;