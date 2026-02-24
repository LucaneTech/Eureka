import type React from "react";
import HeadCard  from "../components/ui/HeadCard";
import { Book } from "lucide-react";
import { ServiceCard } from "../components/ui/ServiceCard";
import TrustCard from "../components/ui/TrustCard";

export const Home: React.FC = () => {
    return (
        <>
            <div className="flex flex-col justify-center ">
                <h1 className="text-center text-2xl text-sky-400">Test of home page</h1>

                <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-12 p-8 md:p-12">
                    <HeadCard
                    icon={<Book w-20 h-20 />}
                    title="Titre de la carte"
                    description="Ceci est une description détaillée du contenu de la carte."
                    link="/page-details"
                    linkText="Voir plus"
                    className="max-w-md mx-auto border-sky-200" iconStyle= "text-sky-600 bg-sky-100  "   titleColor="text-sky-600"              />
                    <HeadCard
                    icon={<Book w-20 h-20 />}
                    title="Titre de la carte"
                    description="Ceci est une description détaillée du contenu de la carte."
                    link="/page-details"
                    linkText="Voir plus"
                    className="max-w-md mx-auto" iconStyle= "text-sky-600 bg-sky-100 "                />
                    <HeadCard
                    icon={<Book w-20 h-20 />}
                    title="Titre de la carte"
                    description="Ceci est une description détaillée du contenu de la carte."
                    link="/page-details"
                    linkText="Voir plus"
                    className="max-w-md mx-auto" iconStyle= "text-sky-600 bg-sky-100 "                />
                    <HeadCard
                    icon={<Book w-20 h-20 />}
                    title="Titre de la carte"
                    description="Ceci est une description détaillée du contenu de la carte."
                    link="/page-details"
                    linkText="Voir plus"
                    className="max-w-md mx-auto" iconStyle= "text-sky-600 bg-sky-100 "                />
                </div>


                <div className = "grid grid-cols-1 gap-0 p-8 md:p-12">
                   <ServiceCard title={"Nettoyage & Entretien"} paragraph={"Body text for your whole article or post. We’ll put in some lorem ipsum to show how a filled-out page might look:"} description={"Excepteur efficient emerging, minim veniam anim aute carefully curated Ginza conversation exquisite perfect nostrud nisi intricate Content. Qui  international first-class nulla ut. Punctual adipisicing, essential lovely queen tempor eiusmod irure. Exclusive izakaya charming Scandinavian impeccable aute quality of life soft power pariatur Melbourne occaecat discerning. Qui wardrobe aliquip, et Porter destination Toto remarkable officia Helsinki excepteur Basset hound. Zürich sleepy perfect consectetur."} image={"test.jpg"} reverse variant={"primary"} titleColor="secondary"/>
                    <ServiceCard title={"Nettoyage & Entretien"} paragraph={"Body text for your whole article or post. We’ll put in some lorem ipsum to show how a filled-out page might look:"} description={"Excepteur efficient emerging, minim veniam anim aute carefully curated Ginza conversation exquisite perfect nostrud nisi intricate Content. Qui  international first-class nulla ut. Punctual adipisicing, essential lovely queen tempor eiusmod irure. Exclusive izakaya charming Scandinavian impeccable aute quality of life soft power pariatur Melbourne occaecat discerning. Qui wardrobe aliquip, et Porter destination Toto remarkable officia Helsinki excepteur Basset hound. Zürich sleepy perfect consectetur."} image={"test.jpg"} reverse ={false} variant={"secondary"} titleColor="secondary"/>

                     <ServiceCard title={"Nettoyage & Entretien"} paragraph={"Body text for your whole article or post. We’ll put in some lorem ipsum to show how a filled-out page might look:"} description={"Excepteur efficient emerging, minim veniam anim aute carefully curated Ginza conversation exquisite perfect nostrud nisi intricate Content. Qui  international first-class nulla ut. Punctual adipisicing, essential lovely queen tempor eiusmod irure. Exclusive izakaya charming Scandinavian impeccable aute quality of life soft power pariatur Melbourne occaecat discerning. Qui wardrobe aliquip, et Porter destination Toto remarkable officia Helsinki excepteur Basset hound. Zürich sleepy perfect consectetur."} image={"test.jpg"} reverse variant={"primary"} titleColor="secondary"/>
                </div>


                <div className="p-12">
                    <TrustCard icon={<Book w-20 h-20/>} iconStyle={"primary"} title={"Savoir-faire et expertise"} description={"Équipements performants et relation transparente avec nos clients, gagnée par notre efficacité."} titleColor="primary" cardStyle="secondary"/>
                </div>
            </div>
        </>
    )
}