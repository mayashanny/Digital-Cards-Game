import React, { useState } from 'react';
import { Card as CardType } from '../types/Card';
import { cn } from '../utils/cn';

interface CardStackProps {
  cards: CardType[];
}

export const CardStack: React.FC<CardStackProps> = ({ cards }) => {
  const [isShuffling, setIsShuffling] = useState(false);

  React.useEffect(() => {
    setIsShuffling(true);
    const timer = setTimeout(() => setIsShuffling(false), 500);
    return () => clearTimeout(timer);
  }, [cards]);

  return (
    <div className="relative w-64 h-64">
      {[...Array(Math.min(3, cards.length))].map((_, i) => (
        <div
          key={i}
          className={cn(
            "absolute inset-0 transition-transform duration-500",
            isShuffling && [
              "animate-shuffle-1",
              "animate-shuffle-2",
              "animate-shuffle-3"
            ][i]
          )}
          style={{
            transform: `translateY(${i * 2}px) rotate(${i - 1}deg)`,
            zIndex: 3 - i
          }}
        >
          <div className="w-full h-full rounded-lg shadow-lg border-2 border-primary-300/30 overflow-hidden backdrop-blur-sm">
            <div className="w-full h-full bg-gradient-to-br from-primary-500/90 via-accent-500/90 to-primary-600/90" />
          </div>
        </div>
      ))}
      {cards.length === 0 && (
        <div className="absolute inset-0 flex items-center justify-center">
          <p className="text-primary-200 text-lg">No cards left</p>
        </div>
      )}
    </div>
  );
};