import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, User, Pencil } from 'lucide-react';
import { Button } from '../components/Button';
import { Modal } from '../components/Modal';
import { ProfileForm } from '../components/ProfileForm';
import { useProfileStore } from '../store/profileStore';

export const ProfilePage: React.FC = () => {
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const { id } = useParams<{ id: string }>();
  const profiles = useProfileStore(state => state.profiles);
  const updateProfile = useProfileStore(state => state.updateProfile);
  const profile = profiles.find(p => p.id === id);

  if (!profile) {
    return (
      <div className="min-h-screen bg-gray-900 flex items-center justify-center">
        <p className="text-xl text-gray-400">Profile not found</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-900">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <div className="flex items-center justify-between mb-8">
          <Link
            to="/"
            className="inline-flex items-center text-indigo-400 hover:text-indigo-300"
          >
            <ArrowLeft className="h-5 w-5 mr-2" />
            Back to Gallery
          </Link>
          <Button 
            className="flex items-center gap-2"
            onClick={() => setIsEditModalOpen(true)}
          >
            <Pencil className="h-4 w-4" />
            Edit Profile
          </Button>
        </div>

        <div className="bg-gray-800 rounded-xl shadow-xl overflow-hidden border border-gray-700">
          <div className="aspect-video w-full overflow-hidden">
            <img
              src={profile.imageUrl}
              alt={profile.name}
              className="w-full h-full object-cover"
            />
          </div>
          
          <div className="p-8">
            <div className="flex items-center gap-3 mb-6">
              <User className="h-8 w-8 text-indigo-400" />
              <h1 className="text-3xl font-bold text-gray-100">{profile.name}</h1>
            </div>
            
            <div className="prose max-w-none">
              <p className="text-gray-300 text-lg leading-relaxed">{profile.about}</p>
            </div>
          </div>
        </div>

        <Modal isOpen={isEditModalOpen} onClose={() => setIsEditModalOpen(false)}>
          <ProfileForm
            title="Edit Profile"
            initialData={profile}
            onSubmit={(data) => updateProfile(profile.id, data)}
            onClose={() => setIsEditModalOpen(false)}
          />
        </Modal>
      </div>
    </div>
  );
};