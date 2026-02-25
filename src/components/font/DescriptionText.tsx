interface DescriptionTextProps {
    text: string;
    className?: string;
}

export const DescriptionText: React.FC<DescriptionTextProps> = ({ text, className }) => {
    return (
        <p className={`text-sm sm:text-base md:text-lg text-gray-700 max-w-3xl mx-auto md:mx-0 ${className}`}>
            {text}
        </p>
    )
}