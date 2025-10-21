import { useEffect, useState } from 'react';
import { Clock } from 'lucide-react';

interface CountdownTimerProps {
  endTime: Date;
  size?: 'sm' | 'md' | 'lg';
}

export function CountdownTimer({ endTime, size = 'md' }: CountdownTimerProps) {
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  function calculateTimeLeft() {
    const difference = endTime.getTime() - new Date().getTime();
    
    if (difference <= 0) {
      return { hours: 0, minutes: 0, seconds: 0, expired: true };
    }

    return {
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60),
      expired: false,
    };
  }

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, [endTime]);

  const sizeClasses = {
    sm: 'text-xs gap-1',
    md: 'text-sm gap-2',
    lg: 'text-lg gap-3',
  };

  const digitClasses = {
    sm: 'px-1.5 py-0.5 min-w-[24px]',
    md: 'px-2 py-1 min-w-[32px]',
    lg: 'px-3 py-2 min-w-[48px]',
  };

  if (timeLeft.expired) {
    return (
      <div className={`flex items-center gap-2 text-muted-foreground ${sizeClasses[size]}`}>
        <Clock className="w-4 h-4" />
        <span>انتهى العرض</span>
      </div>
    );
  }

  return (
    <div className={`flex items-center ${sizeClasses[size]}`}>
      <Clock className="w-4 h-4 text-[#F57C00]" />
      <span className="text-muted-foreground mr-2">ينتهي خلال:</span>
      <div className="flex items-center gap-1">
        <div className={`bg-[#F57C00] text-white rounded ${digitClasses[size]} text-center tabular-nums`}>
          {String(timeLeft.hours).padStart(2, '0')}
        </div>
        <span className="text-[#F57C00]">:</span>
        <div className={`bg-[#F57C00] text-white rounded ${digitClasses[size]} text-center tabular-nums`}>
          {String(timeLeft.minutes).padStart(2, '0')}
        </div>
        <span className="text-[#F57C00]">:</span>
        <div className={`bg-[#F57C00] text-white rounded ${digitClasses[size]} text-center tabular-nums`}>
          {String(timeLeft.seconds).padStart(2, '0')}
        </div>
      </div>
    </div>
  );
}
