'use client';

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { X } from 'lucide-react';

const COUNTDOWN_DURATION = 72 * 60 * 60 * 1000; // 72 hours in milliseconds

export default function CountdownBanner() {
  const [timeLeft, setTimeLeft] = useState(COUNTDOWN_DURATION);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const storedEndTime = localStorage.getItem('countdownEndTime');
    const now = new Date().getTime();
    let endTime;

    if (storedEndTime) {
      endTime = parseInt(storedEndTime, 10);
    } else {
      endTime = now + COUNTDOWN_DURATION;
      localStorage.setItem('countdownEndTime', endTime.toString());
    }
    
    const bannerDismissed = localStorage.getItem('bannerDismissed');
    if(bannerDismissed === 'true' || now > endTime) {
        setIsVisible(false);
        return;
    }

    setIsVisible(true);

    const interval = setInterval(() => {
      const newNow = new Date().getTime();
      const distance = endTime - newNow;

      if (distance < 0) {
        clearInterval(interval);
        setTimeLeft(0);
        setIsVisible(false);
        localStorage.setItem('bannerDismissed', 'true');
      } else {
        setTimeLeft(distance);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const handleDismiss = () => {
    setIsVisible(false);
    localStorage.setItem('bannerDismissed', 'true');
  };

  if (!isVisible || timeLeft <= 0) return null;

  const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

  return (
    <div className="relative bg-primary text-primary-foreground text-center p-2 text-sm">
      <p>
        <strong>Limited Time Offer:</strong> Get your free plan now! Offer ends in:{' '}
        <span className="font-mono font-bold">
          {String(hours).padStart(2, '0')}:{String(minutes).padStart(2, '0')}:{String(seconds).padStart(2, '0')}
        </span>
      </p>
      <Button
        variant="ghost"
        size="icon"
        className="absolute top-1/2 right-2 -translate-y-1/2 h-6 w-6 text-primary-foreground hover:bg-primary/80 hover:text-primary-foreground"
        onClick={handleDismiss}
      >
        <X className="h-4 w-4" />
        <span className="sr-only">Dismiss</span>
      </Button>
    </div>
  );
}
