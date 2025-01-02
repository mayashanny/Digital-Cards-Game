import { create } from 'zustand';
import { Profile } from '../types/Profile';
import { profiles as initialProfiles } from '../data/profiles';

interface ProfileStore {
  profiles: Profile[];
  addProfile: (profile: Omit<Profile, 'id'>) => void;
  updateProfile: (id: string, profile: Omit<Profile, 'id'>) => void;
}

export const useProfileStore = create<ProfileStore>((set) => ({
  profiles: initialProfiles,
  addProfile: (profile) => set((state) => ({
    profiles: [...state.profiles, {
      ...profile,
      id: crypto.randomUUID()
    }]
  })),
  updateProfile: (id, profile) => set((state) => ({
    profiles: state.profiles.map(p => 
      p.id === id ? { ...profile, id } : p
    )
  }))
}));