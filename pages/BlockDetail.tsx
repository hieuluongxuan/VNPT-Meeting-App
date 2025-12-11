import React from 'react';
import { useNavigate } from 'react-router-dom';

const BlockDetail: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-background-light dark:bg-background-dark font-display text-gray-900 dark:text-white min-h-screen flex flex-col items-center">
      <div className="relative flex h-full min-h-screen w-full max-w-md flex-col overflow-x-hidden border-x dark:border-gray-800 border-gray-200">
        {/* TopAppBar */}
        <div className="flex items-center bg-background-light dark:bg-background-dark p-4 pb-2 justify-between sticky top-0 z-50 backdrop-blur-md bg-opacity-90 dark:bg-opacity-90">
          <div 
            onClick={() => navigate(-1)}
            className="text-gray-900 dark:text-white flex size-12 shrink-0 items-center justify-center rounded-full active:bg-gray-200 dark:active:bg-gray-800 transition-colors cursor-pointer"
          >
            <span className="material-symbols-outlined">arrow_back_ios_new</span>
          </div>
          <div className="flex flex-col items-center flex-1">
            <h2 className="text-gray-900 dark:text-white text-lg font-bold leading-tight tracking-tight">Block #4</h2>
            <span className="text-gray-500 dark:text-gray-400 text-xs font-medium">10:42 AM • Processed</span>
          </div>
          <div className="flex size-12 items-center justify-center">
            <button className="text-primary hover:text-blue-400 transition-colors">
              <span className="material-symbols-outlined">ios_share</span>
            </button>
          </div>
        </div>

        {/* Scrollable Content */}
        <div className="flex-1 flex flex-col gap-5 p-4 pt-0">
          {/* MediaPlayer */}
          <div className="flex flex-col gap-3 rounded-[2rem] bg-white dark:bg-[#1e252b] px-4 py-4 shadow-sm">
            <div className="flex items-center gap-4 overflow-hidden">
              <div 
                className="bg-center bg-no-repeat aspect-square bg-cover rounded-xl size-14 shrink-0 relative" 
                style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBpRc0_BrHLczDDa78l8yHKH0tazWL76TXg8R6HMMeEqLP2h0EIWhtz2WyXAHQUMDF-kt8QSdFF3UHKgOKT5rSz_0qmkU9ApFiR6Nse5xiWoVbkCr1eO3N_l03IW2Qc4p9ne7mF59rRCgrQ0HKHWK7AJf2ZZjVIInX-_lKEKlBsDSqzUH3FFQddI4W23ZojWDn9J2I8iag1AAonv-vMFpRwF6g36F2sE15I3VWtlshTIhEro8g2vUb1klRpFyLL6WcpVNZuowNfJnlN")' }}
              >
                <div className="absolute inset-0 bg-primary/20 flex items-center justify-center rounded-xl">
                  <span className="material-symbols-outlined text-white text-2xl drop-shadow-md">graphic_eq</span>
                </div>
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-gray-900 dark:text-white text-base font-bold leading-tight truncate">Meeting Audio Block #4</p>
                <p className="text-gray-500 dark:text-gray-400 text-sm font-normal leading-normal truncate">Network Latency Discussion</p>
              </div>
              <button className="flex shrink-0 items-center justify-center rounded-full size-12 bg-primary text-white shadow-lg shadow-primary/30 active:scale-95 transition-transform">
                <span className="material-symbols-outlined text-[28px]">play_arrow</span>
              </button>
            </div>
            <div className="pt-2">
              {/* Progress Bar */}
              <div className="flex h-2 items-center justify-center gap-1 cursor-pointer group">
                <div className="w-1 h-3 rounded-full bg-primary"></div>
                <div className="w-1 h-5 rounded-full bg-primary"></div>
                <div className="w-1 h-4 rounded-full bg-primary"></div>
                <div className="w-1 h-6 rounded-full bg-primary"></div>
                <div className="w-1 h-3 rounded-full bg-primary"></div>
                <div className="w-1 h-5 rounded-full bg-primary"></div>
                <div className="w-1 h-8 rounded-full bg-primary"></div>
                <div className="w-1 h-4 rounded-full bg-gray-200 dark:bg-gray-700"></div>
                <div className="w-1 h-6 rounded-full bg-gray-200 dark:bg-gray-700"></div>
                <div className="w-1 h-3 rounded-full bg-gray-200 dark:bg-gray-700"></div>
                <div className="w-1 h-5 rounded-full bg-gray-200 dark:bg-gray-700"></div>
                <div className="w-1 h-2 rounded-full bg-gray-200 dark:bg-gray-700"></div>
                <div className="w-1 h-4 rounded-full bg-gray-200 dark:bg-gray-700"></div>
                <div className="w-1 h-3 rounded-full bg-gray-200 dark:bg-gray-700"></div>
                <div className="w-1 h-2 rounded-full bg-gray-200 dark:bg-gray-700"></div>
                <div className="w-1 h-3 rounded-full bg-gray-200 dark:bg-gray-700"></div>
                <div className="w-1 h-5 rounded-full bg-gray-200 dark:bg-gray-700"></div>
                <div className="w-1 h-3 rounded-full bg-gray-200 dark:bg-gray-700"></div>
                <div className="w-1 h-4 rounded-full bg-gray-200 dark:bg-gray-700"></div>
                <div className="w-1 h-2 rounded-full bg-gray-200 dark:bg-gray-700"></div>
              </div>
              <div className="flex items-center justify-between mt-2">
                <p className="text-gray-500 dark:text-gray-400 text-xs font-medium leading-normal tracking-wide">0:45</p>
                <p className="text-gray-500 dark:text-gray-400 text-xs font-medium leading-normal tracking-wide">2:23</p>
              </div>
            </div>
          </div>

          {/* Speech Suggestion Card */}
          <div className="flex flex-col items-stretch justify-start rounded-[2rem] shadow-lg shadow-primary/10 bg-gradient-to-br from-white to-blue-50 dark:from-[#1e252b] dark:to-[#16202a] border border-blue-100 dark:border-blue-900/30 overflow-hidden relative">
            <div className="absolute top-0 right-0 p-3 opacity-10 pointer-events-none">
              <span className="material-symbols-outlined text-6xl text-primary">lightbulb</span>
            </div>
            <div className="flex w-full grow flex-col items-stretch justify-center gap-3 p-5">
              <div className="flex items-center gap-2">
                <div className="size-6 rounded-full bg-primary/20 flex items-center justify-center">
                  <span className="material-symbols-outlined text-primary text-sm">auto_awesome</span>
                </div>
                <p className="text-primary text-sm font-bold uppercase tracking-wider">AI Suggestion</p>
              </div>
              <p className="text-gray-900 dark:text-white text-lg font-medium leading-relaxed italic">
                "Based on the firewall logs showing intermittent drops, we should schedule a review of the ACL rules by EOD."
              </p>
              <div className="flex items-end gap-3 justify-between mt-2">
                <p className="text-gray-500 dark:text-gray-400 text-xs font-normal leading-normal max-w-[60%]">
                  Context: Immediate response to network latency query.
                </p>
                <button className="flex shrink-0 cursor-pointer items-center justify-center overflow-hidden rounded-full h-9 px-4 bg-primary text-white text-sm font-bold leading-normal gap-2 shadow-md active:scale-95 transition-transform">
                  <span className="material-symbols-outlined text-lg">content_copy</span>
                  <span>Copy</span>
                </button>
              </div>
            </div>
          </div>

          {/* Segmented Control */}
          <div className="flex w-full sticky top-[72px] z-40 py-2 bg-background-light dark:bg-background-dark">
            <div className="flex h-12 w-full items-center justify-center rounded-full bg-gray-200 dark:bg-[#283039] p-1">
              <label className="flex cursor-pointer h-full grow items-center justify-center overflow-hidden rounded-full px-2 has-[:checked]:bg-white dark:has-[:checked]:bg-[#111418] has-[:checked]:shadow-sm has-[:checked]:text-primary text-gray-500 dark:text-gray-400 text-sm font-bold leading-normal transition-all">
                <span className="truncate">Content</span>
                <input defaultChecked className="invisible w-0 fixed" name="view_mode" type="radio" value="Content" />
              </label>
              <label className="flex cursor-pointer h-full grow items-center justify-center overflow-hidden rounded-full px-2 has-[:checked]:bg-white dark:has-[:checked]:bg-[#111418] has-[:checked]:shadow-sm has-[:checked]:text-primary text-gray-500 dark:text-gray-400 text-sm font-bold leading-normal transition-all">
                <span className="truncate">Analysis</span>
                <input className="invisible w-0 fixed" name="view_mode" type="radio" value="Analysis" />
              </label>
            </div>
          </div>

          {/* Tab Content Area */}
          <div className="flex flex-col gap-6">
            {/* Summary Section */}
            <div>
              <h3 className="text-gray-900 dark:text-white text-xl font-bold leading-tight px-1 pb-3 flex items-center gap-2">
                <span className="material-symbols-outlined text-primary">summarize</span> Summary
              </h3>
              <div className="bg-white dark:bg-[#1e252b] rounded-[2rem] p-5 shadow-sm">
                <ul className="flex flex-col gap-3">
                  <li className="flex gap-3 items-start">
                    <div className="mt-1.5 size-1.5 rounded-full bg-primary shrink-0"></div>
                    <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">Network latency spiked to 200ms during the 10:00 AM load test.</p>
                  </li>
                  <li className="flex gap-3 items-start">
                    <div className="mt-1.5 size-1.5 rounded-full bg-primary shrink-0"></div>
                    <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">Security team flagged unusual outbound traffic on port 443.</p>
                  </li>
                  <li className="flex gap-3 items-start">
                    <div className="mt-1.5 size-1.5 rounded-full bg-primary shrink-0"></div>
                    <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">Suggested reviewing firewall logs before the next sprint.</p>
                  </li>
                </ul>
              </div>
            </div>

            {/* Transcript Section */}
            <div>
              <h3 className="text-gray-900 dark:text-white text-xl font-bold leading-tight px-1 pb-3 flex items-center gap-2">
                <span className="material-symbols-outlined text-primary">record_voice_over</span> Transcript
              </h3>
              <div className="bg-white dark:bg-[#1e252b] rounded-[2rem] p-5 shadow-sm flex flex-col gap-4">
                <div className="flex gap-3">
                  <div className="bg-gray-200 dark:bg-gray-700 size-8 rounded-full shrink-0 flex items-center justify-center text-xs font-bold text-gray-600 dark:text-gray-300">A</div>
                  <div className="flex flex-col gap-1">
                    <span className="text-xs font-bold text-gray-500 dark:text-gray-400">Speaker A • 00:05</span>
                    <p className="text-gray-800 dark:text-gray-200 text-sm leading-relaxed">So, regarding the latency we saw earlier, do we have any logs from the firewall?</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <div className="bg-blue-100 dark:bg-blue-900/30 size-8 rounded-full shrink-0 flex items-center justify-center text-xs font-bold text-primary">B</div>
                  <div className="flex flex-col gap-1">
                    <span className="text-xs font-bold text-gray-500 dark:text-gray-400">Speaker B • 00:12</span>
                    <p className="text-gray-800 dark:text-gray-200 text-sm leading-relaxed">Yes, I pulled them this morning. It looks like we had some packet drops around the time the load balancers kicked in.</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <div className="bg-gray-200 dark:bg-gray-700 size-8 rounded-full shrink-0 flex items-center justify-center text-xs font-bold text-gray-600 dark:text-gray-300">A</div>
                  <div className="flex flex-col gap-1">
                    <span className="text-xs font-bold text-gray-500 dark:text-gray-400">Speaker A • 00:28</span>
                    <p className="text-gray-800 dark:text-gray-200 text-sm leading-relaxed">Okay, that's critical. If the firewall is throttling internal traffic, that explains the timeouts on the database cluster.</p>
                  </div>
                </div>
              </div>
              <div className="text-center py-4">
                <button className="text-primary text-sm font-bold flex items-center justify-center gap-1 mx-auto">
                  Show full transcript <span className="material-symbols-outlined text-sm">expand_more</span>
                </button>
              </div>
            </div>

            {/* Analysis Section */}
            <div>
              <h3 className="text-gray-900 dark:text-white text-xl font-bold leading-tight px-1 pb-3 flex items-center gap-2">
                <span className="material-symbols-outlined text-primary">analytics</span> Analysis
              </h3>
              <div className="flex flex-col gap-3">
                <div className="bg-white dark:bg-[#1e252b] rounded-[1.5rem] overflow-hidden border-l-4 border-red-500">
                  <div className="p-4 flex items-center justify-between cursor-pointer">
                    <div className="flex items-center gap-3">
                      <div className="bg-red-500/10 p-2 rounded-full">
                        <span className="material-symbols-outlined text-red-500 text-xl">error</span>
                      </div>
                      <div>
                        <h4 className="text-gray-900 dark:text-white font-bold text-sm">Issues Detected</h4>
                        <p className="text-gray-500 dark:text-gray-400 text-xs">2 Critical, 1 Warning</p>
                      </div>
                    </div>
                    <span className="material-symbols-outlined text-gray-400">expand_more</span>
                  </div>
                </div>
                <div className="bg-white dark:bg-[#1e252b] rounded-[1.5rem] overflow-hidden border-l-4 border-orange-400">
                  <div className="p-4 flex items-center justify-between cursor-pointer">
                    <div className="flex items-center gap-3">
                      <div className="bg-orange-400/10 p-2 rounded-full">
                        <span className="material-symbols-outlined text-orange-400 text-xl">warning</span>
                      </div>
                      <div>
                        <h4 className="text-gray-900 dark:text-white font-bold text-sm">Risks Identified</h4>
                        <p className="text-gray-500 dark:text-gray-400 text-xs">Operational & Security</p>
                      </div>
                    </div>
                    <span className="material-symbols-outlined text-gray-400">expand_more</span>
                  </div>
                </div>
                <div className="bg-white dark:bg-[#1e252b] rounded-[1.5rem] overflow-hidden border-l-4 border-green-500">
                  <div className="p-4 flex flex-col gap-3">
                    <div className="flex items-center justify-between cursor-pointer">
                      <div className="flex items-center gap-3">
                        <div className="bg-green-500/10 p-2 rounded-full">
                          <span className="material-symbols-outlined text-green-500 text-xl">check_circle</span>
                        </div>
                        <div>
                          <h4 className="text-gray-900 dark:text-white font-bold text-sm">Recommendations</h4>
                          <p className="text-gray-500 dark:text-gray-400 text-xs">Ban KTHT Standards</p>
                        </div>
                      </div>
                      <span className="material-symbols-outlined text-gray-400 rotate-180">expand_more</span>
                    </div>
                    <div className="pl-[52px] pr-2 pb-2">
                      <div className="bg-background-light dark:bg-background-dark/50 rounded-xl p-3 text-sm text-gray-700 dark:text-gray-300 border border-gray-100 dark:border-gray-800">
                        <p className="font-bold mb-1">Scale Database Cluster</p>
                        <p className="text-xs opacity-80 mb-2">Increase read replicas to handle peak load.</p>
                        <div className="flex gap-2">
                          <span className="text-[10px] bg-green-500/20 text-green-600 dark:text-green-400 px-2 py-0.5 rounded-full font-bold">Standard 4.2</span>
                          <span className="text-[10px] bg-gray-200 dark:bg-gray-700 text-gray-600 dark:text-gray-400 px-2 py-0.5 rounded-full">High Priority</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="h-10"></div>
        </div>

        {/* Sticky Bottom FAB */}
        <div className="fixed bottom-6 right-6 z-50">
          <button className="flex items-center justify-center size-14 rounded-full bg-white dark:bg-[#283039] text-gray-900 dark:text-white shadow-xl shadow-black/20 hover:scale-105 active:scale-95 transition-all">
            <span className="material-symbols-outlined text-2xl">bug_report</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default BlockDetail;