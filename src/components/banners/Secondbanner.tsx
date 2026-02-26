import { DescriptionText } from "../font/DescriptionText";
import { Title } from "../font/Title";
import { Button } from "../ui/Button";
import { Slogan } from "../ui/Slogan";

// type ImageProps = {
//     image: string;
// };

interface SecondBannerProps {
    sloganIcon?: React.ReactNode;
    slogan?: string;
    sloganVariant?: 'primary' | 'secondary'
    title: string;
    titleColor?: string;
    subtitle?: string;
    description?: string;
    textBtn: string;
    variantBtn?: 'primary' | 'secondary' | 'outline';
    textBtn2?: string;
    variantBtn2?: 'primary' | 'secondary' | 'outline';
    underImage?: string;
    // images?: ImageProps[]
    link: string;
    link2?: string;
    className?: string;
    overlayColor?: 'black' | 'primary' | 'secondary'; // Nouvelle prop pour personnaliser l'overlay
    secondButton?: boolean
}



export const SecondBanner: React.FC<SecondBannerProps> = ({
    sloganIcon,
    slogan,
    sloganVariant = "primary",
    title = "",
    titleColor = "",
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
    overlayColor = 'black',
    secondButton = false,
    // images = []

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
                {/* Overlay personnalisable avec dégradé */}
                {/* <div
                    className="absolute inset-0 backdrop-blur-xs"
                    style={{
                        background: ` linear-gradient(90deg, ${overlayColor}${Math.round(opacityDecimal * 255).toString(16).padStart(2, '0')} 0%, ${overlayColor}${Math.round((opacityDecimal * 0.7) * 255).toString(16).padStart(2, '0')} 50%, transparent 100%)`
                    }}
                /> */}
            </div>

            {/* Contenu principal */}
            <div className="relative z-10 container mx-auto px-4 py-8 md:py-20 min-h-[300px] md:min-h-[550px] flex items-center md:items-center">
                <div className="flex flex-col md:flex-row items-center justify-center w-full gap-6 md:gap-8">

                    {/* Partie texte - Centrée sur mobile */}
                    <div className="w-full  space-y-3 md:space-y-4 text-white text-center">


                        <div className="flex flex-col md:gap-3 justify-center items-center">
                            <Title text={title} variants={"extra"} className={`mb-2 ${titleColor}`} />
                            {
                                subtitle && <Title text={subtitle} variants={"large"} className="mb-4 md:mb-5 text-white" />
                            }

                            <DescriptionText text={description} className="text-center text-white " />
                        </div>
                        {
                            slogan &&
                            (
                                <div className="flex inline-flex md:flex-row gap-1 md:gap-3 justify-center items-center">


                                    <Slogan icon={sloganIcon} text={slogan} variant={sloganVariant} />




                                    <div className="flex flex-row items-center gap-1 md:gap-3">
                                        <span className="borderSecondaryColor bgSecondaryColorOpacity w-4 h-4 md:w-8 md:h-8 rounded-full"></span>
                                        <span className="borderSecondaryColor bgSecondaryColorOpacity w-4 h-4 md:w-8 md:h-8 rounded-full "></span>
                                        <span className="borderSecondaryColor  bgSecondaryColorOpacity w-4 h-4 md:w-8 md:h-8 rounded-full "></span>
                                    </div>

                                </div>
                            )
                        }
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
            {overlayColor === 'black' && (
                <div className={`absolute bottom-0 left-0 w-full h-175 bg-linear-to-t from-black to-transparent pointer-events-none`} />
            )}
            {overlayColor === 'primary' && (
                <div className={`absolute bottom-0 left-0 w-full h-100 bg-linear-to-t from-[#05aff2b6] to-transparent pointer-events-none`} />
            )}
            {overlayColor === 'secondary' && (
                <div className={`absolute bottom-0 left-0 w-full h-100 bg-linear-to-t from-[#3BBF5C] to-transparent pointer-events-none`} />
            )}


            {/* {
                images.length > 0 && (
                    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 z-20 w-full max-w-6xl px-4">
                        <div className="flex justify-center gap-6 md:gap-12">
                            {images.slice(0, 3).map((img, index) => (
                                <div
                                    key={index}
                                    className="w-40 h-40 md:w-56 md:h-56 flex-shrink-0 rounded-2xl overflow-hidden shadow-2xl transform transition duration-500 hover:-translate-y-2"
                                >
                                    <img
                                        src={img.image}
                                        alt={`Image ${index + 1}`}
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                )
            } */}


        </section>
    );
};