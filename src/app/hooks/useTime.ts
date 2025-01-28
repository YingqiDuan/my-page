import { useState, useEffect } from 'react';
import { TimeState } from '../types/index';

const useTime = () => {
  const [time, setTime] = useState<TimeState>({
    sanJose: '--:--:--',
    shanghai: '--:--:--',
    montreal: '--:--:--',
  });

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTime({
        sanJose: new Intl.DateTimeFormat('en-US', {
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit',
          hour12: false,
          timeZone: 'America/Los_Angeles',
        }).format(now),
        shanghai: new Intl.DateTimeFormat('en-US', {
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit',
          hour12: false,
          timeZone: 'Asia/Shanghai',
        }).format(now),
        montreal: new Intl.DateTimeFormat('en-US', {
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit',
          hour12: false,
          timeZone: 'America/Toronto',
        }).format(now),
      });
    };

    updateTime();
    const timer = setInterval(updateTime, 1000);

    return () => clearInterval(timer);
  }, []);

  return time;
};

export default useTime;
