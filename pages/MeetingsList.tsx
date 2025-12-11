import React from 'react';
import { useNavigate } from 'react-router-dom';
import BottomNav from '../components/BottomNav';

const MeetingsList: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-background-light dark:bg-background-dark font-display text-[#111418] dark:text-white overflow-x-hidden selection:bg-primary selection:text-white flex flex-col min-h-screen">
      <div className="relative flex-1 flex flex-col max-w-md mx-auto w-full bg-background-light dark:bg-background-dark shadow-2xl overflow-hidden border-x border-[#283039]/50">
        {/* Top App Bar */}
        <div className="flex flex-col gap-2 p-4 pb-2 pt-6">
          <div className="flex items-center h-12 justify-between">
            <div className="flex items-center gap-2"></div>
            <div className="flex items-center justify-end">
              <div className="h-10 w-10 rounded-full overflow-hidden border-2 border-[#283039] bg-[#283039]">
                <img 
                  alt="User Profile" 
                  className="h-full w-full object-cover" 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDu_ypGS6T_cg9Pnmwb8l8PMoSnHZYnf0WFM9ATSTKjYSu8hyoBRxOoM8cjj7aZxSYBDBs-vZuzFJPdTWBZJF5CqkompoqKMLah7r_z5EqZOrM0t3etNP1mMyzNJFVCgVXNXcQCIJHK7z6CkPu4ejWkzSMaWdK_PkVipRZKUhrdnShboFwND49SC84wSW1xm9rZItl_WRsPu9tJbtQK3yZcUjjRQ2IK8EndB-7a8O53WKbgjaPMmeBZq6XDzsRt0WsI2U5CI7Nb_Bc_" 
                />
              </div>
            </div>
          </div>
          <h1 className="text-[#111418] dark:text-white tracking-tight text-[32px] font-bold leading-tight">Meetings</h1>
        </div>

        {/* Search Bar */}
        <div className="px-4 py-2">
          <label className="flex flex-col h-12 w-full">
            <div className="flex w-full flex-1 items-stretch rounded-xl h-full bg-[#E8EDF2] dark:bg-[#283039] group focus-within:ring-2 focus-within:ring-primary/50 transition-all">
              <div className="text-[#637588] dark:text-[#9dabb9] flex border-none items-center justify-center pl-4 rounded-l-xl">
                <span className="material-symbols-outlined text-[24px]">search</span>
              </div>
              <input className="flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-[#111418] dark:text-white focus:outline-0 focus:ring-0 border-none bg-transparent focus:border-none h-full placeholder:text-[#637588] dark:placeholder:text-[#9dabb9] px-4 rounded-l-none pl-2 text-base font-normal leading-normal" placeholder="Search by name or date" />
            </div>
          </label>
        </div>

        {/* Filter Chips */}
        <div className="flex gap-3 px-4 py-3 overflow-x-auto no-scrollbar mask-gradient-right">
          <button className="flex h-9 shrink-0 items-center justify-center gap-x-2 rounded-full bg-primary pl-5 pr-5 shadow-lg shadow-primary/25 transition-transform active:scale-95">
            <p className="text-white text-sm font-semibold leading-normal">All</p>
          </button>
          <button className="flex h-9 shrink-0 items-center justify-center gap-x-2 rounded-full bg-[#E8EDF2] dark:bg-[#283039] border border-transparent dark:hover:border-[#9dabb9]/30 pl-5 pr-5 transition-all active:scale-95">
            <p className="text-[#111418] dark:text-white text-sm font-medium leading-normal">Processing</p>
          </button>
          <button className="flex h-9 shrink-0 items-center justify-center gap-x-2 rounded-full bg-[#E8EDF2] dark:bg-[#283039] border border-transparent dark:hover:border-[#9dabb9]/30 pl-5 pr-5 transition-all active:scale-95">
            <p className="text-[#111418] dark:text-white text-sm font-medium leading-normal">Done</p>
          </button>
          <button className="flex h-9 shrink-0 items-center justify-center gap-x-2 rounded-full bg-[#E8EDF2] dark:bg-[#283039] border border-transparent dark:hover:border-[#9dabb9]/30 pl-5 pr-5 transition-all active:scale-95">
            <p className="text-[#111418] dark:text-white text-sm font-medium leading-normal">Failed</p>
          </button>
        </div>

        {/* Meeting List */}
        <div className="flex flex-col flex-1 pb-28">
          {/* Section Header */}
          <div className="px-6 py-3 mt-1 flex justify-between items-end">
            <h3 className="text-[#637588] dark:text-[#9dabb9] text-xs font-bold uppercase tracking-widest">This Week</h3>
            <span className="text-xs text-primary font-medium cursor-pointer">View Calendar</span>
          </div>

          {/* Item 1 */}
          <div className="group relative" onClick={() => navigate('/meeting-detail')}>
            <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-[#E8EDF2] dark:bg-[#283039] -z-10 group-last:hidden"></div>
            <div className="flex items-center gap-4 px-4 min-h-[84px] py-2 justify-between hover:bg-[#F0F4F8] dark:hover:bg-[#1C252E] transition-colors cursor-pointer rounded-xl mx-2 border border-transparent dark:hover:border-[#283039]">
              <div className="flex items-center gap-4">
                <div className="relative text-primary flex items-center justify-center rounded-lg bg-primary/10 shrink-0 h-12 w-12 shadow-inner shadow-black/20">
                  <span className="material-symbols-outlined text-[24px] animate-pulse-subtle">graphic_eq</span>
                  <div className="absolute -top-1 -right-1 h-3 w-3 bg-amber-500 rounded-full border-2 border-[#111418]"></div>
                </div>
                <div className="flex flex-col justify-center">
                  <p className="text-[#111418] dark:text-white text-base font-bold leading-normal line-clamp-1 group-hover:text-primary transition-colors">Q3 Financial Review</p>
                  <div className="flex items-center gap-1.5 mt-0.5">
                    <span className="text-[#637588] dark:text-[#9dabb9] text-sm font-medium leading-normal">Oct 24, 10:00 AM</span>
                    <span className="h-1 w-1 rounded-full bg-[#637588] dark:bg-[#9dabb9]"></span>
                    <span className="text-[#637588] dark:text-[#9dabb9] text-sm font-medium leading-normal">12 Blocks</span>
                  </div>
                </div>
              </div>
              <div className="shrink-0 flex items-center gap-3">
                <div className="flex items-center justify-center rounded-full h-7 px-3 bg-amber-500/10 text-amber-600 dark:text-amber-500 text-xs font-bold uppercase tracking-wide border border-amber-500/20">
                  <span className="truncate">Processing</span>
                </div>
              </div>
            </div>
            <div className="ml-[76px] h-[1px] bg-[#E8EDF2] dark:bg-[#283039] pr-4"></div>
          </div>

          {/* Item 2 */}
          <div className="group relative" onClick={() => navigate('/meeting-detail')}>
            <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-[#E8EDF2] dark:bg-[#283039] -z-10 group-last:hidden"></div>
            <div className="flex items-center gap-4 px-4 min-h-[84px] py-2 justify-between hover:bg-[#F0F4F8] dark:hover:bg-[#1C252E] transition-colors cursor-pointer rounded-xl mx-2 border border-transparent dark:hover:border-[#283039]">
              <div className="flex items-center gap-4">
                <div className="text-[#111418] dark:text-white flex items-center justify-center rounded-lg bg-[#E8EDF2] dark:bg-[#283039] shrink-0 h-12 w-12">
                  <span className="material-symbols-outlined text-[24px]">check_circle</span>
                </div>
                <div className="flex flex-col justify-center">
                  <p className="text-[#111418] dark:text-white text-base font-bold leading-normal line-clamp-1 group-hover:text-primary transition-colors">VNPT Tech Sync</p>
                  <div className="flex items-center gap-1.5 mt-0.5">
                    <span className="text-[#637588] dark:text-[#9dabb9] text-sm font-medium leading-normal">Oct 23, 2:30 PM</span>
                    <span className="h-1 w-1 rounded-full bg-[#637588] dark:bg-[#9dabb9]"></span>
                    <span className="text-[#637588] dark:text-[#9dabb9] text-sm font-medium leading-normal">4 Blocks</span>
                  </div>
                </div>
              </div>
              <div className="shrink-0 flex items-center gap-3">
                <div className="flex items-center justify-center rounded-full h-7 px-3 bg-emerald-500/10 text-emerald-600 dark:text-emerald-500 text-xs font-bold uppercase tracking-wide border border-emerald-500/20">
                  <span className="truncate">Done</span>
                </div>
              </div>
            </div>
            <div className="ml-[76px] h-[1px] bg-[#E8EDF2] dark:bg-[#283039] pr-4"></div>
          </div>

          <div className="px-6 py-3 mt-4">
            <h3 className="text-[#637588] dark:text-[#9dabb9] text-xs font-bold uppercase tracking-widest">Last Week</h3>
          </div>

          {/* Item 3 */}
          <div className="group relative" onClick={() => navigate('/meeting-detail')}>
            <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-[#E8EDF2] dark:bg-[#283039] -z-10 group-last:hidden"></div>
            <div className="flex items-center gap-4 px-4 min-h-[84px] py-2 justify-between hover:bg-[#F0F4F8] dark:hover:bg-[#1C252E] transition-colors cursor-pointer rounded-xl mx-2 border border-transparent dark:hover:border-[#283039]">
              <div className="flex items-center gap-4">
                <div className="text-[#111418] dark:text-white flex items-center justify-center rounded-lg bg-[#E8EDF2] dark:bg-[#283039] shrink-0 h-12 w-12">
                  <span className="material-symbols-outlined text-[24px]">group</span>
                </div>
                <div className="flex flex-col justify-center">
                  <div className="flex items-center gap-2">
                    <p className="text-[#111418] dark:text-white text-base font-bold leading-normal line-clamp-1 group-hover:text-primary transition-colors">Client Onboarding</p>
                    <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#1C252E] border border-primary/30" title="Synced with Fireflies">
                      <span className="material-symbols-outlined text-primary text-[12px]">bolt</span>
                    </span>
                  </div>
                  <div className="flex items-center gap-1.5 mt-0.5">
                    <span className="text-[#637588] dark:text-[#9dabb9] text-sm font-medium leading-normal">Oct 20, 9:00 AM</span>
                    <span className="h-1 w-1 rounded-full bg-[#637588] dark:bg-[#9dabb9]"></span>
                    <span className="text-[#637588] dark:text-[#9dabb9] text-sm font-medium leading-normal">8 Blocks</span>
                  </div>
                </div>
              </div>
              <div className="shrink-0 flex items-center gap-3">
                <div className="flex items-center justify-center rounded-full h-7 px-3 bg-emerald-500/10 text-emerald-600 dark:text-emerald-500 text-xs font-bold uppercase tracking-wide border border-emerald-500/20">
                  <span className="truncate">Done</span>
                </div>
              </div>
            </div>
            <div className="ml-[76px] h-[1px] bg-[#E8EDF2] dark:bg-[#283039] pr-4"></div>
          </div>
        </div>

        {/* Floating Action Button */}
        <button className="fixed bottom-24 right-6 max-w-md:absolute max-w-md:bottom-24 max-w-md:right-6 shadow-2xl shadow-primary/40 bg-primary hover:bg-blue-600 text-white rounded-full p-4 flex items-center justify-center transition-all active:scale-95 z-30 group">
          <span className="material-symbols-outlined text-[32px] group-hover:rotate-90 transition-transform">add</span>
        </button>

        <BottomNav activeTab="history" />
      </div>
    </div>
  );
};

export default MeetingsList;