import React from 'react';
import { Users } from 'lucide-react';
import { ProfileGrid } from '../components/ProfileGrid';

export const HomePage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-900">
      <header className="bg-gray-800 border-b border-gray-700">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex items-center gap-2">
            <Users className="h-8 w-8 text-indigo-400" />
            <h1 className="text-3xl font-bold text-gray-100">Profile Gallery</h1>
          </div>
        </div>
      </header>
      <main className="max-w-7xl mx-auto">
        <ProfileGrid />
      </main>
    </div>
  );
};