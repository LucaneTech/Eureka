import React from "react";

interface HeadCardProps {
    icon: React.ReactNode;
    iconStyle: string;
    title: string;
    titleColor?: string;
    description: string;
    link?: string;
    linkText?: string; 
    className?: string;
}

const HeadCard: React.FC<HeadCardProps> = ({ 
    icon, 
    title, 
    titleColor,
    description, 
    link, 
    linkText = "En savoir plus",
    className = "" ,
    iconStyle
}) => {
    return (
        <div className={`bg-white rounded-md shadow-md p-6 border  ${className}`}>
           
            <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-3">
                 
                    <div className = {`${iconStyle} p-3 rounded-full border `}>
                        {icon}
                    </div>
                    <h3 className={`text-xl font-semibold ${titleColor}`}>
                        {title}
                    </h3>
                </div>
            </div>

            {/* Description */}
            {description && (
                <p className="text-gray-600 mb-4">
                    {description}
                </p>
            )}

          
            {link && (
                <a 
                    href={link} 
                    className="inline-flex items-center text-blue-600 hover:text-blue-800 transition-colors duration-200"
                >
                    {linkText}
                    <svg 
                        className="w-4 h-4 ml-2" 
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                    >
                        <path 
                            strokeLinecap="round" 
                            strokeLinejoin="round" 
                            strokeWidth={2} 
                            d="M9 5l7 7-7 7" 
                        />
                    </svg>
                </a>
            )}
        </div>
    );
};

export default HeadCard