import React from 'react';
import { SelectProps } from "../../../types/selectProps";

const Select: React.FC<SelectProps> = ({options, value,onChange,placeholder, customClass, disabled = false }) => {
    console.log(value)
    return (
        <select
            value={value}
            onChange={(e) => onChange(e.target.value)}
            disabled={disabled}
            className={`h-11 block w-full px-4 py-2.5 rounded-lg border-0 appearance-none custom_select disabled:text-gray-400 text-primary ring-1 ring-inset ring-slate-200 focus-visible:ring-primary focus-visible:outline-none placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6 ${customClass}`}
        >
            {placeholder && (
                <option value="" disabled>
                    {placeholder}
                </option>
            )}
            {options.map((option) => (
                <option key={option.value} value={option.value}>
                    {option.label}
                </option>
            ))}
        </select>
    );
};

export default Select;