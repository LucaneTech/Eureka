import React from "react"
import type { TitleVariants } from "../../types/ui"


interface TitleProps{
    text:string;
    variants : TitleVariants;
    className?: string
}


export const Title:React.FC <TitleProps> = ({text, variants, className}) => {

    let variant = ''
    
    if (variants === 'medium') {
        variant = 'text-lg md:text-xl font-semibold'
    } else if (variants === 'large') {
        variant = 'text-2xl md:text-3xl font-bold'
    } else if (variants === 'extra') {
        variant = 'text-3xl md:text-5xl font-bold'
    }
    return(
        <>
        <div className={` text-slate-700 ${variant}`}>
            <h1 className={className}>{text}</h1>
        </div>
        </>
    )
}