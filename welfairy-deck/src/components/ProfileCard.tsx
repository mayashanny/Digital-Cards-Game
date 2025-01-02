import React from 'react';
import { Link } from 'react-router-dom';
import { Pencil } from 'lucide-react';
import { Profile } from '../types/Profile';
import { Button } from './Button';

interface ProfileCardProps {
  profile: Profile;
}

export const ProfileCard: React.FC<ProfileCardProps> = ({ profile }) => {
  return (
    <div className="bg-gray-800 rounded-lg overflow-hidden shadow-xl group">
      <Link to={`/profile/${profile.id}`}>
        <div className="aspect-square overflow-hidden">
          <img
            src={profile.imageUrl}
            alt={profile.name}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </div>
      </Link>
      <div className="p-4 flex items-center justify-between">
        <Link to={`/profile/${profile.id}`}>
          <h3 className="text-lg font-medium text-gray-100 group-hover:text-indigo-400 transition-colors">
            {profile.name}
          </h3>
        </Link>
        <Button 
          variant="secondary"
          className="opacity-0 group-hover:opacity-100 transition-opacity"
          aria-label="Edit profile"
        >
          <Pencil className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
};