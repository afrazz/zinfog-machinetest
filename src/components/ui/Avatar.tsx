import { avatarImg } from "constants/assets";
import React from "react";

interface IAvatarProps {
  image: any; //string | React.ReactNode
  label?: string;
}

const Avatar: React.FC<IAvatarProps> = ({ image, label }) => {
  return (
    <div className="flex items-center max-md:hidden">
      <span className="text-base font-semibold text-gray mr-4">{label}</span>
      <img src={image} alt="avatar" />
    </div>
  );
};

export default Avatar;
