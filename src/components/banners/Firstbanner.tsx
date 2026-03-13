// import { Button } from "../ui/Button";

interface FirstBannerProps {
    title?: string;
    // addTitle?: string;
    // addTitleStyle?: string;
    // description?: string;
    // textBtn: string;
    // variantBtn?: 'primary' | 'secondary' | 'outline';
    // textBtn2?: string;
    // variantBtn2?: 'primary' | 'secondary' | 'outline';
    underImage?: string;
    rightImage?: string;
    // link: string;
    // link2?: string;
    className?: string;
    secondButton?: boolean;
    overlayColor?: string;
    overlayOpacity?: number;
    slogan?: string;
    sloganIcon?: React.ReactNode;
    sloganVariant?: string;
}

export const FirstBanner: React.FC<FirstBannerProps> = ({

    title = "",
    // description = "",
    // textBtn = " ",
    // link = '#',
    // variantBtn = 'primary',
    // textBtn2 = "",
    // link2 = "#",
    // variantBtn2,
    underImage,
    rightImage,
    className = "",
    // secondButton = false,
}) => {

    

    return (
        <section
            className={`relative w-full  overflow-hidden md:px-12 ${className}`}
            // aria-label={title}
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
            <div className="relative z-10 container mx-auto px-4 py-8 md:py-20 min-h-[300px] md:min-h-[600px] flex items-center md:items-center">
                <div className="flex flex-col md:flex-row items-center justify-between w-full gap-6 md:gap-8">

                   <div className="w-full md:w-1/2 space-y-3 md:space-y-4 text-white text-center md:text-left">
                       
                        <div className="flex text-justify max-w-lg  hyphens-auto">
                            <h3 className="text-xl md:text-2xl">{title}</h3>
                        </div>


                        
                    </div> 

                    {/* Image droite - Collée en bas sur mobile, centrée verticalement sur desktop */}
                    {rightImage && (

                        <div className="hidden md:block md:absolute bottom-0 right-0 w-full max-w-sm md:max-w-md lg:max-w-lg">
                            <img
                                src={rightImage}
                                alt={``}
                                className="w-full h-[400px] object-cover drop-shadow-2xl"
                                loading="lazy"

                            />
                        </div>

                    )}
                </div>
            </div>

           
        </section>
    );
};