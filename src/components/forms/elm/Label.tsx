import React from "react";

interface LabelProps extends React.ComponentProps<"label"> {}
const Label: React.FC<LabelProps> = ({
  children,
  className = "",
  ...props
}) => {
  const classNames = (...classes: string[]) => {
    return classes.filter(Boolean).join(" ");
  };

  return (
    <label
      {...props}
      className={classNames(
        "block text-sm font-medium leading-5 text-pinkPrimary",
        className
      )}
    >
      {children}
    </label>
  );
};

export default Label;
