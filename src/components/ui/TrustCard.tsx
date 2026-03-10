import React from "react";

export interface TrustCardProps {
    icon: React.ReactNode;
    iconStyle?: 'primary' | 'secondary';
    title: string;
    titleColor: 'primary' | 'secondary' ;
    description: string;
    cardStyle?: 'primary' | 'secondary';
}

const TrustCard: React.FC<TrustCardProps> = ({
    icon,
    title,
    titleColor,
    description,
}) => {
    // Classes d'icône simplifiées

    const cStyle = {
        primary: "borderMainColor ",
        secondary: "borderSecondaryColor "
    }[titleColor];

    return (
        <div className={`bgMainColor rounded-md  max-w-lg shadow-lg border p-6 transition-shadow ${cStyle}`}>
            <div className="flex items-start gap-4">
                {/* Icône - positionnée à gauche */}
                <div className={`text-white p-3 rounded-full border shrink-0`}>
                    {icon}
                </div>

                {/* Contenu textuel - à droite */}
                <div className="flex-1">
                    <h3 className={`text-xl font-semibold mb-2 text-white`}>
                        {title}
                    </h3>
                    
                    {description && (
                        <p className="text-white leading-relaxed text-justify hyphens-auto">
                            {description}
                        </p>
                    )}
                </div>
            </div>
        </div>
    );
};

export default TrustCard;