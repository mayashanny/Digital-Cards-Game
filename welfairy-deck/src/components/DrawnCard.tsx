import React from 'react';
import { Card as CardType } from '../types/Card';

interface DrawnCardProps {
  card: CardType | null;
}

export const DrawnCard: React.FC<DrawnCardProps> = ({ card }) => {
  if (!card) return null;

  return (
    <div className="w-64">
      <div className="aspect-square overflow-hidden rounded-lg shadow-lg border-2 border-primary-300/30 backdrop-blur-sm">
        <img
          src={card.imageUrl}
          alt="Card"
          className="w-full h-full object-cover transform transition-transform hover:scale-105"
        />
      </div>
    </div>
  );
};