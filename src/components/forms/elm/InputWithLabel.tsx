import React, { ForwardedRef, forwardRef } from "react";
import Input from "./Input";
import Label from "./Label";

interface InputProps extends React.ComponentProps<"input"> {
  label: string;
  id: string;
  children?: React.ReactNode;
  ref?: ForwardedRef<HTMLInputElement>;
  price?: boolean;
}

const InputWithLabel = forwardRef<HTMLInputElement, InputProps>(
  ({ label, id, required, price, children, ...inputProps }, ref) => {
    return (
      <div className="relative">
        <Label htmlFor={id}>
          {label}
          {required && <span className="text-pinkPrimary"> *</span>}
        </Label>
        <div className="mt-1.5">
          <Input
            id={id}
            ref={ref}
            required={required}
            {...inputProps}
            className={`${price ? "pl-8 " : ""}`}
          />
        </div>
        {children}
        {price && (
          <span
            className={
              "w-6 h-6 text-gray-400 absolute bottom-2.5 left-2.5 z-10"
            }
          >
            $
          </span>
        )}
      </div>
    );
  }
);

export default InputWithLabel;
