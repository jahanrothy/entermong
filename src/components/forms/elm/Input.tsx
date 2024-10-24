import React, { ForwardedRef, forwardRef } from "react";

interface InputProps extends React.ComponentProps<"input"> {
  className?: string;
  ref?: ForwardedRef<HTMLInputElement>;
}
const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className = "", ...props }, ref) => {
    const classNames = (...classes: string[]) => {
      return classes.filter(Boolean).join(" ");
    };
    return (
      <input
        ref={ref}
        {...props}
        className={classNames(
          "inline-block align-bottom h-10 w-full  read-only:items-center read-only:bg-gray-50 read-only:outline-0 read-only:ring-0 read-only:border read-only:border-neutral-200 read-only:focus:ring-0 px-4  rounded-3xl border border-[#FF6183] outline-0 placeholder:text-gray-500 focus:ring-inset sm:text-sm sm:leading-6",
          className
        )}
      />
    );
  }
);

export default Input;
