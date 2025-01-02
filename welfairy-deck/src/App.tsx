import React from 'react';
import { Shuffle, Square } from 'lucide-react';
import { Button } from './components/Button';
import { CardStack } from './components/CardStack';
import { DrawnCard } from './components/DrawnCard';
import { useDeckStore } from './store/deckStore';

function App() {
  const { cards, drawnCard, shuffle, drawCard, resetDeck } = useDeckStore();

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-900 via-accent-900 to-primary-900 py-12">
      <div className="max-w-4xl mx-auto px-4">
        <div className="flex flex-col items-center space-y-8">
          <h1 className="text-4xl font-bold text-primary-100">Digital Deck of Cards</h1>
          
          <div className="flex flex-wrap items-center justify-center gap-12">
            <div className="flex flex-col items-center space-y-4">
              <CardStack cards={cards} />
              <p className="text-primary-200">{cards.length} cards remaining</p>
            </div>

            {drawnCard && (
              <div className="flex flex-col items-center space-y-4">
                <DrawnCard card={drawnCard} />
                <p className="text-primary-200">Drawn Card</p>
              </div>
            )}
          </div>

          <div className="flex gap-4">
            <Button
              onClick={shuffle}
              className="flex items-center gap-2"
              disabled={cards.length === 0}
            >
              <Shuffle className="w-4 h-4" />
              Shuffle Deck
            </Button>
            <Button
              onClick={drawCard}
              className="flex items-center gap-2"
              disabled={cards.length === 0}
            >
              <Square className="w-4 h-4" />
              Draw Card
            </Button>
            {cards.length === 0 && (
              <Button onClick={resetDeck} variant="secondary">
                Reset Deck
              </Button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;