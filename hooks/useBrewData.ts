import { useState, useEffect } from 'react';

export interface BrewData {
  temperature: number;
  time: string;
  yield: number;
  status: string;
  beanName: string;
}

export function useBrewData() {
  const [data, setData] = useState<BrewData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/data/brew.json');
        const json = await response.json();
        setData({
          temperature: json.parameters.temperature,
          time: json.parameters.time,
          yield: json.parameters.yield,
          status: json.status,
          beanName: json.currentBean.name
        });
      } catch (error) {
        console.error('Error fetching brew data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
    // Refresh every 30 seconds
    const interval = setInterval(fetchData, 30000);
    return () => clearInterval(interval);
  }, []);

  return { data, loading };
}
