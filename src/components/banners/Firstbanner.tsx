// import { Button } from "../ui/Button";

import { Button } from "../ui/Button";

interface FirstBannerProps {
    title?: string;
    // addTitle?: string;
    // addTitleStyle?: string;
    // description?: string;
    textBtn?: string;
    // variantBtn?: 'primary' | 'secondary' | 'outline';
    textBtn2?: string;
    // variantBtn2?: 'primary' | 'secondary' | 'outline';
    underImage?: string;
    rightImage?: string;
    link?: string;
    link2?: string;
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
    textBtn = " ",
    link = '#',
    // variantBtn = 'primary',
    textBtn2 = "",
    link2 = "#",
    // variantBtn2,
    underImage,
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
                <div className="flex flex-col max-w-2xl">
                    <h1 className="text-center md:text-start text-2xl md:text-4xl lg:text-5xl font-bold  text-white tracking-tight md:tracking-wide">{title}</h1>
                    <div className="flex flex-col md:flex-row items-center justify-items-start mt-4 md:mt-8 gap-6 md:gap-12">
                        <Button text={textBtn} to={link} className="bgMainColor" />
                        <Button text={textBtn2} to={link2} className="bgSecondaryColor" />
                    </div>

                </div>


            </div>


        </section>
    );
};