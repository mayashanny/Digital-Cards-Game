import React, { useState } from 'react';
import { Button } from './Button';
import { Profile } from '../types/Profile';

interface ProfileFormProps {
  onSubmit: (data: Omit<Profile, 'id'>) => void;
  onClose: () => void;
  initialData?: Profile;
  title: string;
}

export const ProfileForm: React.FC<ProfileFormProps> = ({ 
  onSubmit, 
  onClose, 
  initialData,
  title 
}) => {
  const [formData, setFormData] = useState({
    name: initialData?.name || '',
    imageUrl: initialData?.imageUrl || '',
    about: initialData?.about || ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
    onClose();
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <h2 className="text-xl font-bold text-gray-100 mb-4">{title}</h2>
      
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">
          Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          required
          value={formData.name}
          onChange={handleChange}
          className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md text-gray-100 focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />
      </div>

      <div>
        <label htmlFor="imageUrl" className="block text-sm font-medium text-gray-300 mb-1">
          Image URL
        </label>
        <input
          type="url"
          id="imageUrl"
          name="imageUrl"
          required
          value={formData.imageUrl}
          onChange={handleChange}
          className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md text-gray-100 focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />
      </div>

      <div>
        <label htmlFor="about" className="block text-sm font-medium text-gray-300 mb-1">
          About
        </label>
        <textarea
          id="about"
          name="about"
          required
          value={formData.about}
          onChange={handleChange}
          rows={4}
          className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md text-gray-100 focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />
      </div>

      <div className="flex justify-end gap-3">
        <Button type="button" variant="secondary" onClick={onClose}>
          Cancel
        </Button>
        <Button type="submit">
          {initialData ? 'Save Changes' : 'Add Profile'}
        </Button>
      </div>
    </form>
  );
};