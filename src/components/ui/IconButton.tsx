import React from "react";

interface IIconButton {
  icon: any; // React.ReactNode;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

const IconButton: React.FC<IIconButton> = ({ icon, onClick }) => {
  return (
    <button
      className="p-2 bg-primary rounded-md border-solid border-2 border-gray hover:bg-primary-dark"
      onClick={onClick}
    >
      <img src={icon} alt="iconBtn" />
    </button>
  );
};

export default IconButton;
