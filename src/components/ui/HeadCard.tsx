import React from "react";

export interface HeadCardProps {
    icon: React.ReactNode;
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
    description, 
    link, 
    linkText = "En savoir plus",
    className = "" ,
   
}) => {
    return (
        <div className={`bgMainColor rounded-md shadow-md p-4 sm:p-5 md:p-6 border max-w-xl ${className}`}>
           
            <div className="flex items-center justify-between mb-3 sm:mb-4">
                <div className="flex items-center space-x-2 sm:space-x-3">
                 
                    <div className={`bgMainColorOpacity p-2 sm:p-2.5 md:p-3 rounded-full border text-white border-white`}>
                        {icon}
                    </div>
                    <h3 className={`text-lg sm:text-xl md:text-xl font-semibold text-white leading-tight sm:leading-normal`}>
                        {title}
                    </h3>
                </div>
            </div>

            {/* Description */}
           <div className="max-w-[500px]">
             {description && (
                <p className="text-white text-sm sm:text-base mb-3 sm:mb-4 leading-relaxed">
                    {description}
                </p>
            )}
           </div>

          
            {link && (
                <a 
                    href={link} 
                    className="inline-flex items-center text-blue-600 hover:text-blue-800 transition-colors duration-200 text-sm sm:text-base"
                >
                    {linkText}
                    <svg 
                        className="w-3.5 h-3.5 sm:w-4 sm:h-4 ml-1 sm:ml-2" 
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

export default HeadCard;