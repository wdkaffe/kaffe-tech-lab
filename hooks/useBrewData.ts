import { useState, useEffect } from 'react';

export interface BrewData {
  temperature: number;
  time: number; // in seconds
  yield: number;
  flowRate: number;
  isBrewing: boolean;
}

export function useBrewData() {
  const [data, setData] = useState<BrewData>({
    temperature: 92.5,
    time: 0,
    yield: 0,
    flowRate: 0,
    isBrewing: false,
  });

  useEffect(() => {
    let interval: NodeJS.Timeout;

    if (data.isBrewing) {
      interval = setInterval(() => {
        setData((prev) => {
          // Simulation logic
          if (prev.time >= 300) { // Stop after 5 minutes
            return { ...prev, isBrewing: false, flowRate: 0 };
          }

          const newTime = prev.time + 1;
          // Slowly increase yield, fluctuate flow rate
          const flowVariation = Math.random() * 0.4 - 0.2;
          const newFlowRate = Math.max(0, 2.2 + flowVariation);
          const newYield = prev.yield + newFlowRate;
          
          // Temperature fluctuates slightly
          const tempVariation = Math.random() * 0.2 - 0.1;
          const newTemp = Math.max(90, Math.min(95, prev.temperature + tempVariation));

          return {
            temperature: newTemp,
            time: newTime,
            yield: newYield,
            flowRate: newFlowRate,
            isBrewing: true,
          };
        });
      }, 1000);
    }

    return () => clearInterval(interval);
  }, [data.isBrewing]);

  const startBrewing = () => {
    setData({
      temperature: 92.5,
      time: 0,
      yield: 0,
      flowRate: 0,
      isBrewing: true,
    });
  };

  const stopBrewing = () => {
    setData((prev) => ({ ...prev, isBrewing: false, flowRate: 0 }));
  };

  return { data, startBrewing, stopBrewing };
}
