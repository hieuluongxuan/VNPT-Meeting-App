import React from 'react';
import { useNavigate } from 'react-router-dom';
import BottomNav from '../components/BottomNav';

const Settings: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-background-light dark:bg-background-dark font-display min-h-screen flex flex-col">
      <div className="relative flex-1 flex h-full w-full flex-col overflow-x-hidden max-w-md mx-auto shadow-xl pb-24">
        {/* Header */}
        <div className="flex items-center bg-background-light dark:bg-background-dark p-4 pb-2 justify-between sticky top-0 z-50">
          <div 
            onClick={() => navigate(-1)} 
            className="text-gray-900 dark:text-white flex size-12 shrink-0 items-center justify-center rounded-full hover:bg-black/5 dark:hover:bg-white/10 cursor-pointer transition-colors"
          >
            <span className="material-symbols-outlined" style={{ fontSize: '24px' }}>arrow_back</span>
          </div>
          <h2 className="text-gray-900 dark:text-white text-lg font-bold leading-tight tracking-[-0.015em] flex-1 text-center pr-12">Settings</h2>
        </div>

        {/* Profile Section */}
        <div className="flex p-4 flex-col">
          <div className="bg-white dark:bg-[#1c242f] rounded-xl p-4 shadow-sm">
            <div className="flex flex-col gap-4">
              <div className="flex gap-4 items-center">
                <div 
                  className="bg-center bg-no-repeat aspect-square bg-cover rounded-full h-16 w-16 border-2 border-primary/20" 
                  style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCfXnrmyrj4BaNXtNIvQGl24wLLgFiJ6pGqYC6s6U0_VXk52u8xG3vekZsZckJdNix51hdDPbpUGUwTDBMYM9Q0M9PCkVtbSRhBSGZuTY8DRsHcsxNWAVGx1u0J0emy-aqfgzcMp1r56zSwkihC2R-2tW0z4cLfIlsrktzqU84aQVBWgxo_1sdLgeiU0dI6pkkkBhQ0uszt82YfDbT0eoI892cXOPmW5MXkgXCq4Pn_Fm07zGXWETNesjrzt835UHAUpE-9-2csqc6O")' }}
                ></div>
                <div className="flex flex-col flex-1 justify-center">
                  <div className="flex items-center gap-2">
                    <p className="text-gray-900 dark:text-white text-lg font-bold leading-tight">Nguyen Van A</p>
                    <span className="bg-green-500/20 text-green-600 dark:text-green-400 text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wider">VNPT SSO</span>
                  </div>
                  <p className="text-gray-500 dark:text-[#9dabb9] text-sm font-normal">nguyenvana@vnpt.vn</p>
                  <p className="text-gray-500 dark:text-[#9dabb9] text-sm font-normal">IT Department</p>
                </div>
              </div>
              <button className="flex w-full cursor-pointer items-center justify-center overflow-hidden rounded-full h-10 px-4 bg-gray-100 dark:bg-[#283039] hover:bg-gray-200 dark:hover:bg-[#323b46] text-gray-900 dark:text-white text-sm font-bold leading-normal transition-colors">
                <span className="truncate">Switch Account</span>
              </button>
            </div>
          </div>
        </div>

        {/* Integrations Section */}
        <div className="px-4 pb-2 pt-2">
          <h3 className="text-gray-900 dark:text-white text-base font-bold leading-tight tracking-[-0.015em] mb-3">AI Integrations</h3>
        </div>
        <div className="px-4 space-y-4">
          {/* OpenAI Key */}
          <div className="bg-white dark:bg-[#1c242f] rounded-xl p-4 shadow-sm">
            <div className="flex flex-col gap-2">
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-gray-500 dark:text-[#9dabb9]" style={{ fontSize: '20px' }}>smart_toy</span>
                  <p className="text-gray-900 dark:text-white text-sm font-bold">OpenAI API Key</p>
                </div>
                <div className="h-2 w-2 rounded-full bg-green-500 shadow-[0_0_8px_rgba(34,197,94,0.6)]"></div>
              </div>
              <div className="flex w-full items-stretch rounded-lg mt-1">
                <input className="flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-l-lg text-gray-900 dark:text-white focus:outline-0 focus:ring-0 border border-gray-200 dark:border-[#3b4754] bg-gray-50 dark:bg-[#101922] h-11 placeholder:text-gray-400 dark:placeholder:text-[#9dabb9] px-4 text-sm font-normal font-mono" placeholder="Enter API Key" type="password" defaultValue="sk-proj-••••••••••••••••" />
                <button className="text-gray-500 dark:text-[#9dabb9] flex border border-l-0 border-gray-200 dark:border-[#3b4754] bg-gray-50 dark:bg-[#101922] items-center justify-center px-3 hover:text-primary transition-colors cursor-pointer border-r-0">
                  <span className="material-symbols-outlined" style={{ fontSize: '20px' }}>visibility_off</span>
                </button>
                <button className="text-primary font-semibold text-xs flex border border-l-0 border-gray-200 dark:border-[#3b4754] bg-gray-50 dark:bg-[#101922] items-center justify-center px-3 rounded-r-lg hover:bg-gray-100 dark:hover:bg-[#1c242f] transition-colors cursor-pointer">
                  PASTE
                </button>
              </div>
            </div>
          </div>
          {/* Fireflies Key */}
          <div className="bg-white dark:bg-[#1c242f] rounded-xl p-4 shadow-sm">
            <div className="flex flex-col gap-2">
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-gray-500 dark:text-[#9dabb9]" style={{ fontSize: '20px' }}>bug_report</span>
                  <p className="text-gray-900 dark:text-white text-sm font-bold">Fireflies API Key</p>
                </div>
                <div className="h-2 w-2 rounded-full bg-red-500 shadow-[0_0_8px_rgba(239,68,68,0.6)]"></div>
              </div>
              <div className="flex w-full items-stretch rounded-lg mt-1">
                <input className="flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-l-lg text-gray-900 dark:text-white focus:outline-0 focus:ring-0 border border-gray-200 dark:border-[#3b4754] bg-gray-50 dark:bg-[#101922] h-11 placeholder:text-gray-400 dark:placeholder:text-[#9dabb9] px-4 text-sm font-normal" placeholder="Enter API Key" type="text" />
                <button className="text-primary font-semibold text-xs flex border border-l-0 border-gray-200 dark:border-[#3b4754] bg-gray-50 dark:bg-[#101922] items-center justify-center px-3 rounded-r-lg hover:bg-gray-100 dark:hover:bg-[#1c242f] transition-colors cursor-pointer border-l border-l-gray-200 dark:border-l-[#3b4754]">
                  PASTE
                </button>
              </div>
              <p className="text-xs text-red-500 mt-1 flex items-center gap-1">
                <span className="material-symbols-outlined" style={{ fontSize: '14px' }}>error</span>
                Invalid or missing API key
              </p>
            </div>
          </div>
          <a className="text-primary text-sm font-medium hover:underline flex items-center gap-1 px-1" href="#">
            Where do I find my keys?
            <span className="material-symbols-outlined" style={{ fontSize: '16px' }}>open_in_new</span>
          </a>
        </div>

        {/* Privacy & Data Section */}
        <div className="px-4 pb-2 pt-6">
          <h3 className="text-gray-900 dark:text-white text-base font-bold leading-tight tracking-[-0.015em] mb-3">Recording & Privacy</h3>
        </div>
        <div className="px-4 space-y-3">
          {/* Microphone Permission */}
          <div className="bg-white dark:bg-[#1c242f] rounded-xl p-4 shadow-sm flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="bg-primary/10 p-2 rounded-full text-primary">
                <span className="material-symbols-outlined" style={{ fontSize: '24px' }}>mic</span>
              </div>
              <div>
                <p className="text-gray-900 dark:text-white text-sm font-bold">Microphone Access</p>
                <p className="text-gray-500 dark:text-[#9dabb9] text-xs">Required for recording</p>
              </div>
            </div>
            {/* Toggle Switch */}
            <div className="relative inline-block w-12 mr-2 align-middle select-none transition duration-200 ease-in">
              <input type="checkbox" name="toggle" id="mic-toggle" className="toggle-checkbox absolute block w-6 h-6 rounded-full bg-white border-4 appearance-none cursor-pointer border-gray-300 dark:border-[#3b4754] checked:right-0 checked:border-primary transition-all duration-300" defaultChecked />
              <label htmlFor="mic-toggle" className="toggle-label block overflow-hidden h-6 rounded-full bg-gray-300 dark:bg-[#3b4754] cursor-pointer peer-checked:bg-primary"></label>
            </div>
          </div>
          {/* Data Retention */}
          <div className="bg-white dark:bg-[#1c242f] rounded-xl p-4 shadow-sm">
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-3">
                <div className="bg-primary/10 p-2 rounded-full text-primary">
                  <span className="material-symbols-outlined" style={{ fontSize: '24px' }}>history</span>
                </div>
                <div>
                  <p className="text-gray-900 dark:text-white text-sm font-bold">Auto-delete Recordings</p>
                  <p className="text-gray-500 dark:text-[#9dabb9] text-xs">Manage storage usage</p>
                </div>
              </div>
            </div>
            <div className="flex bg-gray-100 dark:bg-[#101922] p-1 rounded-lg">
              <button className="flex-1 py-1.5 text-xs font-semibold rounded-md text-gray-500 dark:text-[#9dabb9] hover:bg-white dark:hover:bg-[#1c242f] hover:shadow-sm transition-all">7 Days</button>
              <button className="flex-1 py-1.5 text-xs font-semibold rounded-md bg-white dark:bg-[#283039] text-gray-900 dark:text-white shadow-sm transition-all">30 Days</button>
              <button className="flex-1 py-1.5 text-xs font-semibold rounded-md text-gray-500 dark:text-[#9dabb9] hover:bg-white dark:hover:bg-[#1c242f] hover:shadow-sm transition-all">Forever</button>
            </div>
          </div>
        </div>

        {/* Data Management Section */}
        <div className="px-4 pb-2 pt-6">
          <h3 className="text-gray-900 dark:text-white text-base font-bold leading-tight tracking-[-0.015em] mb-3">Data Management</h3>
        </div>
        <div className="px-4 pb-8 space-y-3">
          <button className="w-full bg-white dark:bg-[#1c242f] rounded-xl p-4 shadow-sm flex items-center justify-between group hover:bg-gray-50 dark:hover:bg-[#252d38] transition-colors">
            <div className="flex items-center gap-3">
              <div className="bg-primary/10 p-2 rounded-full text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                <span className="material-symbols-outlined" style={{ fontSize: '24px' }}>file_download</span>
              </div>
              <div className="text-left">
                <p className="text-gray-900 dark:text-white text-sm font-bold">Export Meeting Data</p>
                <p className="text-gray-500 dark:text-[#9dabb9] text-xs">PDF, TXT, or Markdown</p>
              </div>
            </div>
            <span className="material-symbols-outlined text-gray-400 dark:text-[#9dabb9]" style={{ fontSize: '24px' }}>chevron_right</span>
          </button>
          <button className="w-full bg-white dark:bg-[#1c242f] rounded-xl p-4 shadow-sm flex items-center justify-between group hover:bg-gray-50 dark:hover:bg-[#252d38] transition-colors">
            <div className="flex items-center gap-3">
              <div className="bg-primary/10 p-2 rounded-full text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                <span className="material-symbols-outlined" style={{ fontSize: '24px' }}>delete_sweep</span>
              </div>
              <div className="text-left">
                <p className="text-gray-900 dark:text-white text-sm font-bold">Clear App Cache</p>
                <p className="text-gray-500 dark:text-[#9dabb9] text-xs">Free up 124 MB</p>
              </div>
            </div>
            <span className="material-symbols-outlined text-gray-400 dark:text-[#9dabb9]" style={{ fontSize: '24px' }}>chevron_right</span>
          </button>
        </div>

        {/* Sign Out Button */}
        <div className="px-4 pb-8">
          <button className="w-full h-12 rounded-full border border-red-200 dark:border-red-900/30 bg-red-50 dark:bg-red-900/10 text-red-600 dark:text-red-400 text-sm font-bold flex items-center justify-center gap-2 hover:bg-red-100 dark:hover:bg-red-900/20 transition-colors">
            <span className="material-symbols-outlined" style={{ fontSize: '20px' }}>logout</span>
            Sign Out
          </button>
          <div className="mt-6 text-center">
            <p className="text-xs text-gray-400 dark:text-[#5e6b7a]">VNPT Meeting Assistant v1.0.4 (202)</p>
          </div>
        </div>
      </div>
      <BottomNav activeTab="settings" />
    </div>
  );
};

export default Settings;