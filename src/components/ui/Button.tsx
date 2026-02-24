
import React from "react";
import type { variants } from "../../types/ui";

interface ButtonProps {
    text: string;
    variant?: variants;
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
            className={`px-3 md:px-7 py-2 md:py-3 font-semibold  rounded-md text-white shadow-lg duration-300 transition-all text-xs md:text-md ${variantClasses} ${className}`.trim()}
        >
            <a href={to}>{text}</a>
        </button>
    );
};

