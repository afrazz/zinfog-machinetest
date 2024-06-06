import React from "react";

type IButtonProps = {
  text: string;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  type?: "primary" | "secondary" | "danger";
  size?: "sm" | "md";
  icon?: any;
  iconPlacement?: "left" | "right";
  disabled?: boolean;
  htmlType?: "submit" | "button";
};

const Button: React.FC<IButtonProps> = ({
  text,
  onClick,
  type = "primary",
  size = "md",
  icon,
  iconPlacement = "right",
  disabled = false,
  htmlType = "submit",
}) => {
  return (
    <button
      disabled={disabled}
      className={`${type === "danger" ? "bg-danger" : `bg-${type}`}  ${
        size === "md" ? "py-2 px-9 text-lg" : "py-1 px-4 text-base" //py-2 px-3
      }  text-white rounded-md hover:bg-${type}-dark flex items-center justify-center flex-nowrap whitespace-nowrap`}
      onClick={onClick}
      type={htmlType}
    >
      {icon && iconPlacement === "left" && <img src={icon} alt="filter icon" />}
      <span
        className={icon ? (iconPlacement === "left" ? "ml-2.5" : "mr-3.5") : ""}
      >
        {text}
      </span>
      {icon && iconPlacement === "right" && (
        <img src={icon} alt="filter icon" />
      )}
    </button>
  );
};

export default Button;
