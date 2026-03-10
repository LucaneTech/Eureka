import React, { useState } from "react";
import { DescriptionText } from "../font/DescriptionText";
import { Plus } from "lucide-react";
import { Title } from "../font/Title";

export interface FAQCardProps {
    question: string;
    answer: string;
}

const FAQCard: React.FC<FAQCardProps> = ({ question, answer }) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleCard = () => {
        setIsOpen((prev) => !prev);
    };

    return (
        <div className="bg-white rounded-xl shadow-md p-4 transition-all duration-300 borderMainColor">
            <div className="flex justify-between items-center cursor-pointer">
                <Title text={question} variants={"medium"} />

                <button
                    onClick={toggleCard}
                    className="w-8 h-8 flex items-center justify-center bgMainColorOpacity mainColor transition-transform duration-300 rounded-full shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-mainColor focus:ring-opacity-50"
                >
                    <span
                        className={`transform transition-transform duration-300 text-xl ${isOpen ? "rotate-45" : "rotate-0 "
                            }`}
                    >
                        <Plus className="w-4 h-4" />
                    </span>
                </button>
            </div>

            <div
                className={`overflow-hidden transition-all duration-300 ${isOpen ? "max-h-96 mt-3 opacity-100" : "max-h-0 opacity-0"
                    }`}
            >
                <DescriptionText text={answer}  className="text-justify hyphens-auto"/>
            </div>
        </div>
    );
};

export default FAQCard;