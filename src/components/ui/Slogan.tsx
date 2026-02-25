interface SloganProps {
    icon: React.ReactNode
    text: string,
    variant: 'primary' | 'secondary',
    className?: string

}

export const Slogan: React.FC<SloganProps> = ({ icon, text = "", variant = "primary", className }) => {
    let background = variant == 'primary' ? "bgMainColorOpacity borderMainColor" : "bgSecondaryColorOpacity borderSecondaryColor"
    return (
        <>
            <span className={`inline-flex items-center gap-2 text-sm font-medium  backdrop-blur-md px-4 py-2 rounded-full mx-auto md:mx-0  ${background}  ${className}`}>
                {icon && <span aria-hidden="true">{icon}</span>}
                <span>{text}</span>
            </span>
        </>
    )
}