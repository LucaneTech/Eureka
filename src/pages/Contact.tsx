import React from "react";
import { SecondBanner } from "../components/banners/Secondbanner";
import ContactSection from "../components/ui/Formular";
import { Blend } from "lucide-react";



const Contact: React.FC = () => {
    return (
        <>
            <SecondBanner title={"Besoin d’un devis?"} titleColor="secondaryColor" description={"Maîtrise Impeccable du Nettoyage Professionnel"} textBtn={"Nos services"} link={"/solutions"}  slogan="Lancez-vous dès maintenant" sloganIcon = {<Blend />} sloganVariant ="secondary"  underImage = '/images/contact/contact.jpg'  secondButton={true} link2 = "#" textBtn2 = "Découvrez Eureka & Co"  variantBtn2 = "secondary"/>
            <ContactSection />
           
        </>
    )
}


export default Contact