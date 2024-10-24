import React from "react";

// Button Props
export interface ButtonProps {
    name: string,
    link: string,
    children?: ReactNode,
    className?: string,
}

export interface SearchBarProps extends React.InputHTMLAttributes<HTMLInputElement> {
    placeholder?: string;
}