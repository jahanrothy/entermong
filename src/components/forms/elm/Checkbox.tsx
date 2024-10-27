import React from "react";

interface InputProps extends React.ComponentProps<"input"> {
  label: string;
  id: string; // Ensure that 'id' is required for associating the label with the input
}

const Checkbox: React.FC<InputProps> = ({ label, id, ...inputProps }) => {
  return (
    <div className="flex items-center">
      <input
        id={id}
        type="checkbox"
        {...inputProps}
        className="h-4 w-4 flex-shrink-0 rounded border border-pinkPrimary appearance-none checked:bg-pink-700"
      />
      <label
        htmlFor={id}
        className="ml-3 block text-sm leading-6 text-pinkPrimary flex-auto"
      >
        {label}
      </label>
    </div>
  );
};

export default Checkbox;
