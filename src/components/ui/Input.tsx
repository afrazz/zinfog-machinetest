import { closeIcon, SearchIcon } from "constants/assets";
import React, { HTMLInputTypeAttribute } from "react";

interface InputProps {
  label?: string;
  name?: string;
  type?: HTMLInputTypeAttribute;
  placeholder?: string;
  labelAlign?: "horizontal" | "vertical";
  width?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur?: (event: React.FocusEvent<HTMLInputElement>) => void;
  value?: string | number;
}

const Input: React.FC<InputProps> = ({
  label,
  name,
  type,
  placeholder,
  labelAlign = "vertical",
  width = "w-full",
  onChange,
  onBlur,
  value,
}) => {
  return (
    <div
      className={`w-full ${
        labelAlign === "horizontal" && "flex items-center gap-7"
      }`}
    >
      {label && (
        <label htmlFor={name} className="text-lg text-nowrap">
          {label}
        </label>
      )}

      {/* <br /> */}
      <div className="relative">
        <input
          id={name}
          type={type}
          name={name}
          placeholder={placeholder}
          className={`bg-white ${width} h-[40px] pl-2 pr-6 text-lg placeholder-gray rounded-md focus:outline-none border-solid border-2 border-gray`}
          onChange={onChange}
          onBlur={onBlur}
          value={value}
        />
        {/* <img
          src={closeIcon}
          alt="close-icon"
          className="absolute top-[35%] right-2 cursor-pointer"
        /> */}
      </div>
    </div>
  );
};

export default Input;
