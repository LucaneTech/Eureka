import { DescriptionText } from "../font/DescriptionText";
import { Button } from "../ui/Button";

interface FirstBannerProps {
    title?: string;
    addTitle?: string;
    addTitleStyle?: string;
    description?: string;
    textBtn: string;
    variantBtn?: 'primary' | 'secondary' | 'outline';
    textBtn2?: string;
    variantBtn2?: 'primary' | 'secondary' | 'outline';
    underImage?: string;
    rightImage?: string;
    link: string;
    link2?: string;
    className?: string;
    secondButton?: boolean
}

export const FirstBanner: React.FC<FirstBannerProps> = ({

    title = "",
    description = "",
    textBtn = " ",
    link = '#',
    variantBtn = 'primary',
    textBtn2 = "",
    link2 = "#",
    variantBtn2,
    underImage,
    rightImage,
    className = "",
    secondButton = false,
    addTitle = "",
    addTitleStyle = "mainColor"
}) => {

    

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
               
            </div>

            {/* Contenu principal */}
            <div className="relative z-10 container mx-auto px-4 py-8 md:py-20 min-h-[300px] md:min-h-[550px] flex items-center md:items-center">
                <div className="flex flex-col md:flex-row items-center justify-between w-full gap-6 md:gap-8">

                    {/* Partie texte - Centrée sur mobile */}
                    <div className="w-full md:w-1/2 space-y-3 md:space-y-4 text-white text-center md:text-left">
                       

                        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
                            {title} 
                            {addTitle && (
                                <span className={addTitleStyle}>
                                    {addTitle}
                                </span> 
                            )}
                        </h1>


                        <DescriptionText text={description} className="text-white"/>


                        <div className="flex flex-col md:flex-row gap-3 items-center mt-4 md:mt-8">
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

                    {/* Image droite - Collée en bas sur mobile, centrée verticalement sur desktop */}
                    {rightImage && (

                        <div className="hidden md:block md:absolute bottom-0 right-0 w-full max-w-sm md:max-w-md lg:max-w-lg">
                            <img
                                src={rightImage}
                                alt={`${title}`}
                                className="w-full h-[400px] object-cover drop-shadow-2xl"
                                loading="lazy"

                            />
                        </div>

                    )}
                </div>
            </div>

            {/* Éléments de design optionnels */}
            <div className="absolute bottom-0 left-0 w-full h-16 md:h-96 bg-gradient-to-t from-black/40 to-transparent pointer-events-none" />
        </section>
    );
};