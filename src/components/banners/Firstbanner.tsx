import { Button } from "../ui/Button";

interface FirstBannerProps {
    sloganIcon?: React.ReactNode;
    slogan?: string;
    title: string;
    description: string;
    textBtn: string;
    variantBtn?: 'primary' | 'secondary' | 'outline';
    underImage?: string;
    rightImage?: string;
    link: string;
    className?: string;
    overlayColor?: string; // Nouvelle prop pour personnaliser l'overlay
    overlayOpacity?: number; // Nouvelle prop pour l'opacité (0-100)
}

export const FirstBanner: React.FC<FirstBannerProps> = ({
    sloganIcon,
    slogan,
    title = "",
    description = "",
    textBtn = " ",
    link = '#',
    variantBtn = 'primary',
    underImage,
    rightImage,
    className = "",
    overlayColor = '#000000', 
    overlayOpacity = 60 
}) => {
  
    const opacityDecimal = overlayOpacity / 100;

    return (
        <section 
            className={`relative w-full overflow-hidden ${className}`}
            aria-label={title}
            role="region"
        >
            {/* Background avec overlay personnalisable */}
            <div 
                className="absolute inset-0 bg-cover bg-center"
                style={underImage ? { backgroundImage: `url(${underImage})` } : undefined}
                aria-hidden="true"
            >
                {/* Overlay personnalisable avec dégradé */}
                <div 
                    className="absolute inset-0"
                    style={{
                        background: `linear-gradient(90deg, ${overlayColor}${Math.round(opacityDecimal * 255).toString(16).padStart(2, '0')} 0%, ${overlayColor}${Math.round((opacityDecimal * 0.7) * 255).toString(16).padStart(2, '0')} 50%, transparent 100%)`
                    }}
                />
            </div>

            {/* Contenu principal */}
            <div className="relative z-10 container mx-auto px-4 py-8 md:py-20 min-h-[500px] md:min-h-[400px] flex items-end md:items-center">
                <div className="flex flex-col md:flex-row items-center justify-between w-full gap-6 md:gap-8">
                    
                    {/* Partie texte - Centrée sur mobile */}
                    <div className="w-full md:w-1/2 space-y-3 md:space-y-4 text-white text-center md:text-left">
                        {slogan && (
                            <span className="inline-flex items-center gap-2 text-sm font-medium bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full mx-auto md:mx-0">
                                {sloganIcon && <span aria-hidden="true">{sloganIcon}</span>}
                                <span>{slogan}</span>
                            </span>
                        )}
                        
                        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
                            {title}
                        </h1>
                        
                        <p className="text-sm sm:text-base md:text-lg text-white/90 max-w-xl mx-auto md:mx-0">
                            {description}
                        </p>
                        
                        <div className="pt-2 md:pt-4 flex justify-center md:justify-start">
                            <Button 
                                text={textBtn} 
                                to={link} 
                                variant={variantBtn}
                                className="bg-white text-black hover:bg-gray-100 transition-colors"
                            />
                        </div>
                    </div>

                    {/* Image droite - Collée en bas sur mobile, centrée verticalement sur desktop */}
                    {rightImage && (
                       
                            <div className="relative buttom-0 w-full max-w-sm md:max-w-md lg:max-w-lg">
                                <img
                                    src={rightImage}
                                    alt={`${title} - ${slogan || 'banner'}`}
                                    className="w-full h-auto object-cover drop-shadow-2xl"
                                    loading="eager"
                                   
                                />
                            </div>
                     
                    )}
                </div>
            </div>

            {/* Éléments de design optionnels */}
            <div className="absolute bottom-0 left-0 w-full h-16 md:h-24 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />
        </section>
    );
};