import { CircleArrowRight } from "lucide-react";

export interface ServicesCardProps {
    title: string;
    titleColor?: "primary" | "secondary";
    paragraph: string; 
    description: string;
    image: string;
    reverse?: boolean; 
    options: [string, ...string[]];
}

export const ServiceCard = ({
    title,
    paragraph,
    description,
    image,
    reverse = false,
    options ,
}: ServicesCardProps) => {
    // Styles dynamiques
    const bgClass ="bgMainColor";

    return (
        <div
            className={`relative flex flex-col md:flex-row w-full max-w-5xl my-6 mx-auto p-2 md:p-4 rounded-md overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 scale-95  ${bgClass}`}
        >
            {/* Image - conditionnellement à gauche ou à droite */}
            <div className={`w-full md:w-2/5 shrink-0 ${reverse ? 'md:order-last' : ''}`}>
                <img
                    src={image}
                    alt={title}
                    className="h-64 md:max-h-96 md:h-full w-full object-cover rounded-md"
                />
            </div>

            {/* Contenu textuel */}
            <div className="p-6 flex flex-col space-y-2 w-full md:w-3/5">
                <h3 className={`text-white text-2xl font-semibold`}>{title}</h3>
                <p className="text-gray-200 mb-2 font-semibold">{paragraph}</p>
                <p className="text-white dark:third-color text-base leading-relaxed">
                    {description}
                </p>
                <div className="flex flex-col gap-2">
                    {options.map((option, index) => (
                        <span key={index} className={`text-sm font-semibold  py-1 rounded-full text-white cursor-pointer transition duration-200 inline-flex items-center`}>
                          <CircleArrowRight className="inline-block mr-2 w-4" />{option} 
                        </span>
                    ))}
                </div>
            </div>
        </div>
    );
};