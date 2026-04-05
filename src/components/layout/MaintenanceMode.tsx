import React from 'react';

const MaintenanceMode = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-slate-950 text-white p-6 md:p-12 overflow-hidden relative font-sans">
      {/* Decorative gradient orb background elements */}
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-blue-600/20 blur-[120px] animate-pulse" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-cyan-600/10 blur-[120px]" />

      <div className="max-w-4xl w-full text-center space-y-10 relative z-10">
        {/* Animated Icon Section */}
        <div className="flex justify-center flex-col items-center">
          <div className="relative group">
            <div className="absolute -inset-4 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-full blur-2xl opacity-20 group-hover:opacity-40 transition-opacity duration-1000" />
            <div className="relative bg-slate-900/50 p-8 rounded-full border border-slate-800 backdrop-blur-xl">
              <svg 
                className="w-16 h-16 text-blue-400 animate-[spin_8s_linear_infinite]" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={1.5} 
                  d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" 
                />
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={1.5} 
                  d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" 
                />
              </svg>
            </div>
          </div>
          
          <div className="mt-8 space-y-4">
             <div className="inline-flex items-center px-4 py-2 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-400 text-xs font-semibold uppercase tracking-wider">
                <span className="relative flex h-2 w-2 mr-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
                </span>
                Scheduled Maintenance
              </div>
          </div>
        </div>

        {/* Text Content */}
        <div className="space-y-6">
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight">
            <span className="block text-slate-100">Better Experience</span>
            <span className="block bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-300 pb-2">
              Is Coming Soon.
            </span>
          </h1>
          
          <p className="text-slate-400 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed font-light">
            We are currently optimizing our systems to enhance your secure payment experience 
            and improve risk intelligence. DATZEN will be back online shortly.
          </p>
        </div>

        {/* Progress Bar Section */}
        {/* <div className="space-y-4 pt-4"> */}
          {/* <div className="flex justify-between text-xs font-medium text-slate-500 max-w-xs mx-auto mb-2 uppercase tracking-widest">
            <span>Progress</span>
            <span>75%</span>
          </div> */}
          {/* <div className="h-2 w-full max-w-xs mx-auto bg-slate-900 border border-slate-800 rounded-full overflow-hidden">
            <div 
              className="h-full bg-gradient-to-r from-blue-600 to-cyan-500 rounded-full relative transition-all duration-1000 ease-in-out"
              style={{ width: '75%' }}
            >
              <div className="absolute inset-0 bg-white/20 animate-[pulse_2s_ease-in-out_infinite]" />
            </div>
          </div>
        </div> 

        {/* Footer Brand info */}
        <div className="pt-12 border-t border-slate-900/50">
          <div className="flex items-center justify-center space-x-2 text-slate-500">
            <span className="font-bold tracking-tighter text-slate-300 text-xl">DATZEN</span>
            <span className="text-xs font-light">| SECURE INFRASTRUCTURE</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MaintenanceMode;
