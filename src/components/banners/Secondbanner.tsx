import { DescriptionText } from "../font/DescriptionText";
import { Title } from "../font/Title";
import { Button } from "../ui/Button";
import { Slogan } from "../ui/Slogan";

interface FirstBannerProps {
    sloganIcon?: React.ReactNode;
    slogan?: string;
    sloganVariant?: 'primary' | 'secondary'
    title: string;
    subtitle: string;
    description: string;
    textBtn: string;
    variantBtn?: 'primary' | 'secondary' | 'outline';
    textBtn2?: string;
    variantBtn2?: 'primary' | 'secondary' | 'outline';
    underImage?: string;

    link: string;
    link2?: string;
    className?: string;
    overlayColor?: string; // Nouvelle prop pour personnaliser l'overlay
    overlayOpacity?: number;
    secondButton?: boolean
}

export const SecondBanner: React.FC<FirstBannerProps> = ({
    sloganIcon,
    slogan,
    sloganVariant = "primary",
    title = "",
    subtitle = "",
    description = "",
    textBtn = " ",
    link = '#',
    variantBtn = 'primary',
    textBtn2 = "",
    link2 = "#",
    variantBtn2,
    underImage,
    className = "",
    overlayColor = '#000000',
    overlayOpacity = 60,
    secondButton = false
}) => {

    const opacityDecimal = overlayOpacity / 100;

    return (
        <section
            className={`relative w-full  overflow-hidden md:px-12 ${className}`}
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
                    className="absolute inset-0 backdrop-blur-xs"
                    style={{
                        background: ` linear-gradient(90deg, ${overlayColor}${Math.round(opacityDecimal * 255).toString(16).padStart(2, '0')} 0%, ${overlayColor}${Math.round((opacityDecimal * 0.7) * 255).toString(16).padStart(2, '0')} 50%, transparent 100%)`
                    }}
                />
            </div>

            {/* Contenu principal */}
            <div className="relative z-10 container mx-auto px-4 py-8 md:py-20 min-h-[300px] md:min-h-[550px] flex items-center md:items-center">
                <div className="flex flex-col md:flex-row items-center justify-center w-full gap-6 md:gap-8">

                    {/* Partie texte - Centrée sur mobile */}
                    <div className="w-full  space-y-3 md:space-y-4 text-white text-center">


                       <div className="flex flex-col md:gap-3 justify-center items-center">
                     <Title text={title} variants={"extra"} className="secondaryColor mb-2" />
                        <Title text={subtitle} variants={"large"} className="mb-4 md:mb-5 text-white" />

                        <DescriptionText text={description} className="text-center text-white "/>
                       </div>
                        <div className="flex inline-flex md:flex-row gap-1 md:gap-3 justify-center items-center">
                            {slogan && (

                                <Slogan icon={sloganIcon} text={slogan} variant={sloganVariant} />
                              

                            )}

                            <div className="flex flex-row items-center gap-1 md:gap-3">
                                <span className="border-1 border-white  bgSecondaryColorOpacity w-4 h-4 md:w-8 md:h-8 rounded-full"></span>
                                <span className="border-1 border-white  bgSecondaryColorOpacity w-4 h-4 md:w-8 md:h-8 rounded-full "></span>
                                 <span className="border-1 border-white  bgSecondaryColorOpacity w-4 h-4 md:w-8 md:h-8 rounded-full "></span>
                            </div>

                        </div>
                        <div className="flex flex-row gap-2 md:gap-10 justify-center items-center mt-4 md:mt-8">
                            <Button
                                text={textBtn}
                                to={link}
                                variant={variantBtn as 'primary' | 'secondary'}

                            />

                            {
                                secondButton ? (
                                    <Button
                                        text={textBtn2}
                                        to={link2}
                                        variant={variantBtn2 as 'primary' | 'secondary'}

                                    />
                                ) : null
                            }

                        </div>
                    </div>

                </div>
            </div>

            {/* Éléments de design optionnels */}
            <div className="absolute bottom-0 left-0 w-full h-16 md:h-24 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />
        </section>
    );
};