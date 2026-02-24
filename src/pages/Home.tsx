import type React from "react";
import { Birdhouse, Box, BriefcaseBusiness,BrushCleaning,Flower,SparklesIcon } from "lucide-react";
import { FirstBanner } from "../components/banners/Firstbanner";
import { Slogan } from "../components/ui/Slogan";
import { Title } from "../components/font/Title";
import type { HeadCardProps } from "../components/ui/HeadCard";
import HeadCard from "../components/ui/HeadCard";
import { Button } from "../components/ui/Button";



export const Home: React.FC = () => {

    const firstServices: HeadCardProps[] =
        [
            {
                icon: <BrushCleaning />,
                title: "Nettoyage & Entretien",
                description: 'Des espaces de travail impeccables, pour le bien-être de vos équipes et une image positive auprès de vos clients.',
                link: "#",

            },
            {
                icon: <Box />,
                title: "Service 4D",
                description: 'Protégez vos locaux avec notre expertise en Désinfection, Dératisation,  et Déreptilisation.',
                link: "#",

            }

        ]
    const secondServices: HeadCardProps[] =
        [
            {
                icon: <Flower />,
                title: "Espaces Verts & Biodiversité",
                description: 'Sublimez votre cadre de vie ou de travail avec un entretien expert qui transforme et valorise vos espaces extérieurs.',
                link: "#",

            },
            {
                icon: <Birdhouse />,
                title: "Fourniture de Services",
                description: 'Des espaces de travail impeccables, pour le bien-être de vos équipes et une image positive auprès de vos clients.',
                link: "#",

            }

        ]
    return (
        <>
            {/* Hero section */}

            <FirstBanner
                sloganIcon={<SparklesIcon className="w-4 h-4" />}
                slogan="Services de qualité"
                title="Nettoyage Professionnel Rapide, Sécurisé & Fiable"
                description="Découvrez notre nouvelle gamme de produits design, conçus pour simplifier votre vie tout en ajoutant une touche d'élégance."
                textBtn="Contactez-nous !"
                variantBtn="primary"
                underImage="under.jpg"
                rightImage="/images/services/hero.png"
                link="/nouvelle-collection"
                overlayColor="#05AFF2"
                overlayOpacity={30}
                sloganVariant="primary" link2={"#"} secondButton textBtn2="Découvrez nos solutions" variantBtn2="secondary" />



            {/* services presentation */}
            <section className="relative flex flex-col justify-center items-center px-4 py-12 md:px-8 lg:px-12 overflow-hidden">
        

                <div className="mainColor mb-4">
                    <Slogan icon={<BriefcaseBusiness />} text={"Nos services"} variant={"primary"}/>
                </div>

                <Title text={"Nos Services de Nettoyage Experts"} variants={"large"} className="mb-4 md:mb-8 py-2" />



       
                    {/* Conteneur principal flex avec gestion responsive */}
                    <div className="relative flex flex-col lg:flex-row items-center justify-between ">

                        {/* Colonne gauche - Cartes */}
                        <div className="w-full lg:w-[30%] xl:w-[28%] space-y-6">
                            {firstServices.map((element, index) => (
                                <HeadCard
                                    key={index}
                                    icon={element.icon}
                                    title={element.title}
                                    description={element.description}
                                    className="borderMainColor"
                                />
                            ))}
                        </div>

                        {/* Zone centrale avec image - positionnée entre les cartes */}
                       

                            {/* Conteneur de l'image avec gestion responsive */}
                            <div className="relative w-full max-w-md max-h-[550px] mx-auto aspect-[4/5] lg:aspect-[3/4]  bgMainColor rounded-md shadow-lg">
                                <img
                                    src="/images/services/employee.png"
                                    alt="image d'un employer de nettoyage eureka & co"
                                    className="absolute bottom-0 left-0  w-auto h-full max-h-[400px] object-cover drop-shadow-2xl"
                                />
                            </div>
                       

                        {/* Colonne droite - Cartes */}
                        <div className="w-full lg:w-[30%] xl:w-[28%] space-y-6">
                            {secondServices.map((element, index) => (
                                <HeadCard
                                    key={index}
                                    icon={element.icon}
                                    title={element.title}
                                    description={element.description}
                                    className="borderMainColor"
                                />
                            ))}
                        </div>
                    </div>

                   
             
            </section>



            {/* why choising us */}

            <section className="relative bgMainColorOpacity w-full p-12 justify-between">
                
                <div className="max-w-[400px]">
                    <Title text={"Qui"} variants={"extra"} className="mainColor mb-2" />
                    <Title text={"Sommes nous ?"} variants={"large"} className="mb-4 md:mb-5"/>
                    <p className="mb-5">Expert en nettoyage, espaces verts et services 4D, Eureka & Co s'engage pour votre bien-être et la propreté de vos espaces depuis [année de création]. Plus qu'une entreprise de services, nous sommes votre partenaire confiance.</p>

                    <Button text={"Lire notre histoire"} to={"/a-propos"} variant="primary" className="text-white"/>
                </div>
                <img src="" alt=""  className="absolute bottom-0 left-0"/>
                 
            </section>
        </>



    )
}