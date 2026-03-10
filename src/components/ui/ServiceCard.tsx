import { CircleArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export interface ServiceOption {
    label?: string;
    description?: string;
    image?: string;
    details?: string;
}

export interface ServicesCardProps {
    title: string;
    paragraph: string;
    description: string;
    image: string;
    reverse?: boolean;
    options?: ServiceOption[];
    clickable?: boolean;
}

export const ServiceCard = ({
    title,
    paragraph,
    description,
    image,
    reverse = false,
    options,
    clickable = true,
}: ServicesCardProps) => {

    const bgClass = "bgMainColor";

    return (
        <div
            className={`relative flex flex-col md:flex-row   w-full max-w-5xl my-6 mx-auto p-2 md:p-4 rounded-md overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 scale-90 ${bgClass}`}
        >
            {/* Image */}
            <div className={`w-full md:w-2/5 shrink-0 ${reverse ? "md:order-last" : ""}`}>
                <img
                    src={image}
                    alt={title}
                    className="h-64 md:max-h-lg md:h-full w-full object-cover rounded-md"
                />
            </div>

            {/* Contenu */}
            <div className="p-6 flex flex-col space-y-2 w-full md:w-3/5 text-justify hyphens-auto">
                <h3 className="text-white text-2xl font-semibold">{title}</h3>

                <p className="text-gray-200 mb-2 font-semibold">{paragraph}</p>

                <p className="text-white text-base">{description}</p>

                {options && options.length > 0 && (
                    <div className="flex flex-col gap-2">
                        {options.map((option) =>
                            clickable == true ? (
                                <Link
                                    key={option.label}
                                    to="/solution-detail"
                                    state={{ option }}
                                    className="text-sm font-semibold py-1 rounded-full text-white cursor-pointer transition duration-200 inline-flex items-center hover:opacity-80 hover:underline"
                                >
                                    <CircleArrowRight className="w-4 h-4 mr-2" />
                                    {option.label}
                                </Link>
                            ) : (
                                <span
                                    key={option.label}
                                    className="text-sm font-semibold py-1 text-white inline-flex items-center"
                                >
                                    <CircleArrowRight className="w-4 h-4 mr-2" />
                                    {option.label}
                                </span>
                            )
                        )}
                    </div>
                )}
            </div>
        </div>
    );
};