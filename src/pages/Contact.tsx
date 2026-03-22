import React from "react";
import { SecondBanner } from "../components/banners/Secondbanner";
import ContactSection from "../components/ui/Formular";




const Contact: React.FC = () => {
    return (
        <>
            <SecondBanner title={"Besoin d’un devis?"} titleColor="secondaryColor" description={"Maîtrise Impeccable du Nettoyage Professionnel"} textBtn={"Nos services"} link={"/solutions"}  underImage = '/images/contact/contact.webp'  secondButton={true} link2 = "/apropos" textBtn2 = "Découvrez Eureka & Co"  variantBtn2 = "secondary"/>
            <ContactSection />
           
        </>
    )
}


export default Contact