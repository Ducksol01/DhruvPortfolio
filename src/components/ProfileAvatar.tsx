
import React from 'react';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';

type ProfileAvatarProps = {
  imagePath: string;
  altText: string;
  fallbackText: string;
  size?: string;
};

const ProfileAvatar = ({
  imagePath,
  altText,
  fallbackText,
  size = "w-32 h-32"
}: ProfileAvatarProps) => {
  return (
    <div className="animate-fade-in opacity-0">
      <Avatar className={`${size} mx-auto border-4 border-primary`}>
        <AvatarImage src={imagePath} alt={altText} />
        <AvatarFallback>{fallbackText}</AvatarFallback>
      </Avatar>
    </div>
  );
};

export default ProfileAvatar;
