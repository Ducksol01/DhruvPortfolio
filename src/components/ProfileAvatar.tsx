
import React from 'react';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';

type ProfileAvatarProps = {
  imagePath: string;
  altText: string;
  fallbackText: string;
  size?: string;
  className?: string;
};

const ProfileAvatar = ({
  imagePath,
  altText,
  fallbackText,
  size = "w-36 h-36", // Increased size for better appearance
  className = ""
}: ProfileAvatarProps) => {
  return (
    <div className="animate-fade-in opacity-0">
      <Avatar className={`${size} mx-auto border-4 border-primary shadow-lg ${className}`}>
        <AvatarImage src={imagePath} alt={altText} className="object-cover" />
        <AvatarFallback className="text-lg font-semibold">{fallbackText}</AvatarFallback>
      </Avatar>
    </div>
  );
};

export default ProfileAvatar;
