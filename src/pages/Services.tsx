import { SparklesIcon } from "lucide-react";
import type React from "react";
import { FirstBanner } from "../components/banners/Firstbanner";

export const Services: React.FC = () => {
    return (
        <>
            <FirstBanner
                sloganIcon={<SparklesIcon className="w-4 h-4" />}
                slogan="Services de qualité"
                title="Nettoyage Professionnel Rapide, Sécurisé & Fiable"
                description="Découvrez notre nouvelle gamme de produits design, conçus pour simplifier votre vie tout en ajoutant une touche d'élégance."
                textBtn="Contez-nous !"
                variantBtn="primary"
                underImage="under.jpg"
                rightImage="hero.png"
                link="/nouvelle-collection"
                overlayColor="#05AFF2"
    overlayOpacity={20}
    sloganVariant="secondary"
            />
        </>
    )
}