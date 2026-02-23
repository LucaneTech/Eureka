
import React from "react";
import type { variantButton } from "../../types/ui";

interface ButtonProps {
    text: string;
    variant?: variantButton;
    onClick?: React.MouseEventHandler<HTMLButtonElement>;
    className?: string;
    to: string
}

export const Button: React.FC<ButtonProps> = ({ text, variant = "primary", onClick, className = "", to = "#" }) => {
    let variantClasses;
    if (variant === "primary") {
        variantClasses = "bgMainColor";
    } else if (variant === "secondary") {
        variantClasses = "bgSecondaryColor";
    } else {
        variantClasses = "bgLigthColor";
    }

    return (
        <button
            type="button"
            onClick={onClick}
            className={`px-4 py-2 rounded-md text-white shadow-lg duration-300 transition-all ${variantClasses} ${className}`.trim()}
        >
            <a href={to}>{text}</a>
        </button>
    );
};

