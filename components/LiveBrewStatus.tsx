"use client";

import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Coffee, Activity } from 'lucide-react';
import { useBrewData } from '@/hooks/useBrewData';

const LiveBrewStatus = () => {
  const { data, startBrewing, stopBrewing } = useBrewData();

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <div className="p-8 h-full flex flex-col bg-white">
      <div className="flex justify-between items-start mb-8">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <motion.div 
              animate={{ opacity: data.isBrewing ? [1, 0.4, 1] : 1 }}
              transition={{ repeat: Infinity, duration: 1.5 }}
              className={`h-1.5 w-1.5 rounded-full ${data.isBrewing ? 'bg-accent-blue' : 'bg-stone-300'}`} 
            />
            <h3 className="text-[10px] font-bold uppercase tracking-wider text-stone-400">
              Live Telemetry
            </h3>
          </div>
          <h2 className="text-3xl font-light text-stone-800 tracking-tight">
            Live Brew Status
          </h2>
        </div>
        <button 
          onClick={data.isBrewing ? stopBrewing : startBrewing}
          className="group relative"
          aria-label={data.isBrewing ? "Stop Brewing" : "Start Brewing"}
        >
          <Coffee className={`w-6 h-6 transition-colors duration-500 ${data.isBrewing ? 'text-accent-blue' : 'text-stone-200 group-hover:text-accent-coffee'}`} />
        </button>
      </div>
      
      <div className="flex-1 rounded-2xl bg-stone-50 border border-divider/40 overflow-hidden relative group-hover:border-accent-blue/20 transition-colors duration-500">
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <AnimatePresence mode="wait">
            {!data.isBrewing && data.time === 0 ? (
              <motion.div 
                key="waiting"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="text-center"
              >
                <Activity className="w-8 h-8 text-stone-200 mb-3 mx-auto" strokeWidth={1} />
                <p className="text-stone-300 text-xs font-light tracking-wide italic">
                  Waiting for brewing data...
                </p>
                <button 
                  onClick={startBrewing}
                  className="mt-4 px-4 py-1.5 text-[10px] uppercase font-bold tracking-widest text-accent-blue border border-accent-blue/20 rounded-full hover:bg-accent-blue hover:text-white transition-all duration-300"
                >
                  Start Simulation
                </button>
              </motion.div>
            ) : (
              <motion.div 
                key="active"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="w-full h-full flex flex-col p-6"
              >
                {/* Central Visualization */}
                <div className="flex-1 relative flex items-center justify-center">
                  <motion.div
                    animate={{ 
                      scale: data.isBrewing ? [1, 1.05, 1] : 1,
                      opacity: data.isBrewing ? [0.1, 0.2, 0.1] : 0.1
                    }}
                    transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
                    className="absolute w-40 h-40 md:w-48 md:h-48 rounded-full border-2 border-accent-blue"
                  />
                  <div className="text-center z-10">
                    <span className="text-[10px] uppercase font-bold tracking-[0.2em] text-stone-400 block mb-1">Yield</span>
                    <span className="text-5xl font-extralight text-stone-800 font-mono tracking-tighter" id="brew-yield">
                      {data.yield.toFixed(1)}<span className="text-xl ml-1 text-stone-400">g</span>
                    </span>
                  </div>
                  
                  {/* Flow Rate indicator */}
                  <svg className="absolute inset-0 w-full h-full overflow-visible pointer-events-none">
                     <motion.circle
                        cx="50%"
                        cy="50%"
                        r="80"
                        fill="none"
                        stroke="url(#blue-gradient)"
                        strokeWidth="1"
                        strokeDasharray="4 8"
                        animate={{ rotate: data.isBrewing ? 360 : 0 }}
                        transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                     />
                     <defs>
                        <linearGradient id="blue-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                          <stop offset="0%" stopColor="#00D1FF" stopOpacity="0" />
                          <stop offset="50%" stopColor="#00D1FF" stopOpacity="1" />
                          <stop offset="100%" stopColor="#00D1FF" stopOpacity="0" />
                        </linearGradient>
                     </defs>
                  </svg>
                </div>

                {/* Metrics Grid */}
                <div className="grid grid-cols-3 gap-4 pt-4 border-t border-divider/40">
                  <div className="space-y-1">
                    <span className="text-[8px] uppercase font-bold tracking-widest text-stone-400 flex items-center gap-1">
                      <Activity className="w-2.5 h-2.5" /> Temp
                    </span>
                    <p className="text-lg font-light text-stone-800 font-mono" id="brew-temp">
                      {data.temperature.toFixed(1)}°C
                    </p>
                  </div>
                  <div className="space-y-1 border-x border-divider/20 px-4">
                    <span className="text-[8px] uppercase font-bold tracking-widest text-stone-400">Time</span>
                    <p className="text-lg font-light text-stone-800 font-mono" id="brew-time">
                      {formatTime(data.time)}
                    </p>
                  </div>
                  <div className="space-y-1 pl-4">
                    <span className="text-[8px] uppercase font-bold tracking-widest text-stone-400">Flow</span>
                    <p className="text-lg font-light text-stone-800 font-mono flex items-baseline gap-1" id="brew-flow">
                      {data.flowRate.toFixed(1)} <span className="text-[10px] text-stone-400">g/s</span>
                    </p>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
        {/* Subtle grid pattern */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/grid-me.png')]" />
      </div>
    </div>
  );
};

export default LiveBrewStatus;
