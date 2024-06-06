import React from "react";

interface ISelectInputProps {
  label?: string;
  name?: string;
  // placeholder?: string;
  labelAlign?: "horizontal" | "vertical";
  width?: string;
  options: any;
  onChange?: any;
  value?: string;
}

const SelectInput: React.FC<ISelectInputProps> = ({
  label,
  name,
  options,
  // placeholder,
  width = "w-full",
  labelAlign = "vertical",
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
      <select
        name={name}
        id={name}
        onChange={onChange}
        value={value}
        className={`bg-white ${width} h-[40px] pl-2 pr-2 text-lg placeholder-gray rounded-md focus:outline-none border-solid border-2 border-gray`}
      >
        <option value=""></option>
        {options.map((cur: any) => (
          <option value={cur}>{cur}</option>
        ))}
      </select>

      {/* <input
        id={name}
        type={"date"}
        name={name}
        placeholder={placeholder}
        className="bg-white w-full h-[40px] pl-2 pr-2 text-lg placeholder-gray rounded-md focus:outline-none border-solid border-2 border-gray"
      /> */}
    </div>
  );
};

export default SelectInput;
