import React from "react";

interface IDateInputProps {
  label?: string;
  name?: string;
  placeholder?: string;
  labelAlign?: "horizontal" | "vertical";
  width?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  value: string;
}

const DateInput: React.FC<IDateInputProps> = ({
  label,
  name,
  placeholder,
  labelAlign = "vertical",
  width = "w-full",
  onChange,
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
      <input
        id={name}
        type={"date"}
        name={name}
        placeholder={placeholder}
        onChange={onChange}
        value={value}
        className={`bg-white ${width} h-[40px] pl-2 pr-2 text-lg placeholder-gray rounded-md focus:outline-none border-solid border-2 border-gray`}
      />
    </div>
  );
};

export default DateInput;
