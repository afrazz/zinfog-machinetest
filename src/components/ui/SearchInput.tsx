import { SearchIcon } from "constants/assets";
import React, { useState, useEffect, useRef } from "react";

interface SearchInputProps {
  name?: string;
  placeholder?: string;
  width?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const SearchInput: React.FC<SearchInputProps> = ({
  name,
  placeholder,
  width = "w-full",
  onChange,
}) => {
  const wrapperRef = useRef<HTMLDivElement>(null);
  return (
    <div ref={wrapperRef} className="w-full">
      <div className="relative w-full">
        <input
          id={name}
          type="search"
          name={name}
          onChange={onChange}
          placeholder={placeholder}
          className={`bg-white ${width} h-[45px] pl-2 pr-8 text-lg placeholder-gray rounded-md focus:outline-none border-solid border-2 border-gray`}
        />
        <img
          src={SearchIcon}
          alt="search-icon"
          className="absolute top-[28%] right-2 cursor-pointer"
        />
      </div>
    </div>
  );
};

export default SearchInput;
