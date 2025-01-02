import { create } from 'zustand';
import { Card } from '../types/Card';
import { createDeck } from '../utils/deckUtils';

interface DeckStore {
  cards: Card[];
  drawnCard: Card | null;
  shuffle: () => void;
  drawCard: () => void;
  resetDeck: () => void;
}

export const useDeckStore = create<DeckStore>((set) => ({
  cards: createDeck(),
  drawnCard: null,
  shuffle: () => set((state) => ({
    cards: [...state.cards].sort(() => Math.random() - 0.5)
  })),
  drawCard: () => set((state) => ({
    cards: state.cards.slice(1),
    drawnCard: state.cards[0] || null
  })),
  resetDeck: () => set({ cards: createDeck(), drawnCard: null })
}));