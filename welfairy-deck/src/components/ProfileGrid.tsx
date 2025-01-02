import React, { useState } from 'react';
import { Plus } from 'lucide-react';
import { ProfileCard } from './ProfileCard';
import { Button } from './Button';
import { Modal } from './Modal';
import { ProfileForm } from './ProfileForm';
import { useProfileStore } from '../store/profileStore';

export const ProfileGrid: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const profiles = useProfileStore(state => state.profiles);
  const addProfile = useProfileStore(state => state.addProfile);

  return (
    <div className="space-y-6">
      <div className="flex justify-end px-6">
        <Button 
          className="flex items-center gap-2"
          onClick={() => setIsModalOpen(true)}
        >
          <Plus className="h-4 w-4" />
          Add Profile
        </Button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 p-6">
        {profiles.map((profile) => (
          <ProfileCard key={profile.id} profile={profile} />
        ))}
      </div>

      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <ProfileForm
          title="Add New Profile"
          onSubmit={addProfile}
          onClose={() => setIsModalOpen(false)}
        />
      </Modal>
    </div>
  );
};