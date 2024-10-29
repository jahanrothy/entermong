import { SearchBarProps } from "@/types/props";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import React from "react";

const SearchBar: React.FC<SearchBarProps> = ({ placeholder, ...rest }) => {
  return (
    <form className={" flex flex-col items-center justify-center"}>
      <div className={"relative flex items-center gap-x-0.5 w-full"}>
        <MagnifyingGlassIcon className={"  w-6 h-6 text-gray-500"} />
        <input
          {...rest}
          placeholder={placeholder}
          className={
            "bg-transparent focus:outline-0 text-sm font-normal placeholder:text-gray-500 placeholder:opacity-90 text-primary p-2 px-2.5 pl-0 flex-auto w-[250px] "
          }
        />
      </div>
    </form>
  );
};

export default SearchBar;
