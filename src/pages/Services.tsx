import {CircleQuestionMark, Wrench } from "lucide-react";
import type React from "react";
import { useRef } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import type { Variants } from "framer-motion";
import { SecondBanner } from "../components/banners/Secondbanner";
import { ServiceCard, type ServicesCardProps } from "../components/ui/ServiceCard";
import { Slogan } from "../components/ui/Slogan";
import { Title } from "../components/font/Title";
import { DescriptionText } from "../components/font/DescriptionText";
import type { FAQCardProps } from "../components/ui/FAQCard";
import FAQCard from "../components/ui/FAQCard";
import { Button } from "../components/ui/Button";

// Animation variants sophistiqués
const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.15,
            delayChildren: 0.2
        }
    }
};

const itemVariants: Variants = {
    hidden: { y: 40, opacity: 0 },
    visible: {
        y: 0,
        opacity: 1,
        transition: {
            duration: 0.7
        }
    }
};

const fadeInScale: Variants = {
    hidden: { scale: 0.9, opacity: 0 },
    visible: {
        scale: 1,
        opacity: 1,
        transition: {
            duration: 0.6
        }
    }
};

const slideInLeft: Variants = {
    hidden: { x: -80, opacity: 0 },
    visible: {
        x: 0,
        opacity: 1,
        transition: {
            duration: 0.7
        }
    }
};

const slideInRight: Variants = {
    hidden: { x: 80, opacity: 0 },
    visible: {
        x: 0,
        opacity: 1,
        transition: {
            duration: 0.7
        }
    }
};

// const rotateIn: Variants = {
//     hidden: { rotate: -10, scale: 0.8, opacity: 0 },
//     visible: {
//         rotate: 0,
//         scale: 1,
//         opacity: 1,
//         transition: {
//             duration: 0.5
//         }
//     }
// };

const staggerList: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
            delayChildren: 0.3
        }
    }
};

const ServiceSection: React.FC = () => {
    const sectionRef = useRef<HTMLElement>(null);
    const isInView = useInView(sectionRef, { once: true, margin: "-100px" });
    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start end", "end start"]
    });

    const y = useTransform(scrollYProgress, [0, 1], [50, -50]);
    const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.6, 1, 1, 0.6]);

    const servicesData: ServicesCardProps[] = [
        {
            title: "Nettoyage & Propreté",
            paragraph: "Un environnement de travail propre pour une productivité optimale.",
            description:
                "Nous offrons un service de nettoyage de bureaux complet, adapté à vos besoins spécifiques. Notre équipe utilise des produits écologiques pour garantir un espace de travail sain et agréable.",
            image: "/images/services/entretient.webp",
            reverse: false,
            options: [
                {
                    label: "Nettoyage Classique",
                    description: "Nettoyage standard des bureaux et espaces professionnels.",
                    details: `Actuellement, 98 % des employés estiment que la propreté et l'hygiène sont indispensables à leur bien-être professionnel, tandis que 85 % les considèrent comme des éléments contribuant à la performance.

L'état de propreté de vos locaux professionnels va au-delà d'une simple question d'apparence : il témoigne également de votre rigueur et de votre sérieux vis-à-vis de vos employés et partenaires.

Grâce à une étude détaillée de vos besoins, nos agents de nettoyage vous assurent une propreté irréprochable et pérenne. Nous garantissons la propreté des fenêtres et des sols de vos installations en employant des produits certifiés ECO LABEL, tout en respectant scrupuleusement diverses actions écologiques lors de nos prestations.`,
                    image: "/images/services/classique.webp"
                },
                {
                    label: "Nettoyage des sols",
                    description: "Entretien complet des différents types de sols.",
                    details: `Nous assurons le lavage, le décapage et le traitement des sols selon leur nature : carrelage, parquet, marbre ou sols industriels.`,
                    image: 'images/services/sol.webp'
                },
                {
                    label: "Nettoyage de vitres et panneaux solaires",
                    description: "Nettoyage professionnel des surfaces vitrées.",
                    details: `EUREKA & CO prend en charge l'entretien de toutes les surfaces vitrées, qu'elles soient à la portée des hommes ou non.

Nos équipes sont en mesure de nettoyer toutes les surfaces vitrées grâce à nos équipements spécialisés, tels que les perches télescopiques à eau pure.`,
                    image: "images/services/vitre.webp"
                },
                {
                    label: "Remise en état après travaux",
                    description: "Nettoyage complet après chantier.",
                    details: `Vous avez effectué des travaux d'aménagement afin d'améliorer les conditions de travail de vos employés et l'accueil de vos clients.

Pour rendre vos locaux impeccablement propres, faites appel à EUREKA & CO !`,
                    image: "images/services/remise.webp"
                },
                {
                    label: "Shampooing de moquette",
                    description: "Nettoyage en profondeur des moquettes.",
                    details: `En raison de son contact avec les tâches, la moquette requiert un nettoyage en profondeur.

Notre technique de nettoyage de moquette écologique, employant des produits qui protègent les fibres et l'environnement, supprime la saleté tout en préservant la longévité de votre moquette.

En outre, votre moquette reçoit un nouveau souffle sans nuire à votre engagement pour le bien-être au travail et la protection de l'environnement.`,
                    image: 'images/services/moquette.webp'
                }
            ]
        },
        {
            title: "Espaces Verts",
            paragraph:
                "Nous avons à cœur de vous fournir des services de paysagiste qui allient tradition et modernité. Que ce soit pour l'aménagement de jardins, la création de bassins ou l'entretien de vos espaces verts, notre équipe est à votre écoute pour réaliser vos projets.",
            description:
                "Nos services incluent :",
            image: "/images/services/espaces-verts.webp",
            reverse: true,
            clickable : false,
            options: [
               
                {
                    label: "Le nettoyage des jardins",
                },
                {
                    label: "L’entretien des plantations",
                },
                {
                    label: "L’arrosage des plantes",
                },
                {
                    label: "La taille des haies et des arbustes",
                },
                {
                    label: "La tonte de pelouses",
                },
                 

                 {
                    label: "Le débroussaillage",
                },

                 {
                    label: "L’élagage ",
                },

                 {
                    label: "Le désherbage",
                },

                 {
                    label: "Le ramassage des plantes mortes",
                },

                 {
                    label: "L’entretien des massifs",
                },
            ]
        },
        {
            title: "Hygiène 4D",
            paragraph: "Une hygiène rigoureuse pour un environnement de travail sain.",
            description:
                "Notre service d'hygiène 4D offre une solution complète pour maintenir un environnement de travail sain.",
            image: "/images/services/hygiene.webp",
            reverse: false,
            options: [
                {
                    label: "Desinsectisation",
                    description: "Lutte contre les insectes nuisibles.",
                    details: `blattes, cafards, fourmis, termites, punaises de lit, puces, guêpes, frelons, abeilles, moustiques, mouches, perces-bois, charançons etc.`,
                    image: "images/services/desinsectisation.webp"
                },
                {
                    label: "Dératisation",
                    description: "Lutte contre les rongeurs.",
                    details: `Souris, rats, mulots, campagnols, musaraignes, loirs, chauves-souris etc.`,
                    image: "images/services/deratisation.webp"
                },
                {
                    label: "Desinfection",
                    description: "Désinfection des surfaces et équipements.",
                    details: `Bactéries, micro-organismes, spores bactériennes, virus etc.`,
                    image: "images/services/desin.webp"
                },
                {
                    label: "Dereptilisation",
                    description: "Lutte contre les reptiles indésirables.",
                    details: `Serpents, lézards, geckos, caméléons, iguanes, tortues etc.`,
                    image: "images/services/derept.webp"
                }
            ]
        },
        {
            title: "Froid et Climatisation",
            paragraph:
                "Assurez un environnement de travail confortable toute l'année grâce à nos services de froid et climatisation.",
            description:
                "Installation, maintenance et dépannage de vos systèmes de climatisation.",
            image: "/images/services/froid.webp",
            reverse: true,
            options: [
                {
                    label: "Installation",
                    description: "Installation de systèmes de climatisation.",
                    details: `Nous vous proposons une gamme diversifiée de climatiseurs de marques reconnues, choisis sur la base de leur performance, de leur respect des normes environnementales et de leur faible consommation d'énergie.

Nos solutions, qui se conforment parfaitement à l'ampleur de vos espaces résidentiels ou professionnels, sauront idéalement satisfaire vos exigences.

Uniquement un expert chevronné peut vous assurer une mise en place efficace et conforme à toutes les normes de sécurité.`,
                    image : "images/services/installation.webp"
                },
                {
                    label: "Maintenance",
                    description: "Entretien régulier des équipements.",
                    details: `Chaque système de climatisation exige une maintenance régulière minutieuse incluant la vérification de l'étanchéité des circuits, la surveillance des pressions, l'identification de possibles fuites, le nettoyage ou changement des filtres, ainsi que l'inspection de l'état des connexions électriques, entre autres.

Ces actions sont essentielles pour garantir une efficacité optimale, une faible consommation d'énergie et un fonctionnement sans défaillances.`,
                    image : "images/services/maintenance.webp"
                },
                {
                    label: "Dépannage",
                    description: "Réparation rapide des systèmes.",
                    details: `Des performances dégradées des systèmes de climatisation peuvent survenir avec une installation incorrecte, une mise en service non experte ou un entretien négligé au fil du temps.

De plus, leur utilisation peut entraîner une augmentation significative de la consommation d'énergie.

Dans ce contexte, une panne pourrait survenir à tout moment, avec parfois un danger de court-circuit manifeste.

Il est donc nécessaire de faire appel à un professionnel aguerri pour restaurer un fonctionnement satisfaisant et sûr du système.`,
                    image : "images/services/depannage.webp"
                }
            ]
        },
        {
            title: "Centrales d'achats",
            paragraph: "Des services complémentaires pour répondre à tous vos besoins.",
            description:
                "Vous aspirez à rationaliser vos procédures d'achat et à vous décharger de certaines démarches administratives ? EUREKA & CO vous offre des solutions personnalisées pour satisfaire l'ensemble des exigences de votre entreprise. Que vous ayez besoin d'aide pour vos achats de tous les jours, ou saisonniers, EUREKA & CO est à votre service.",
            image: "/images/services/centrale-achat.webp",
            reverse: true,
            options: []
        }
    ];

    return (
        <motion.section
            ref={sectionRef}
            style={{ y, opacity }}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={containerVariants}
            className="flex flex-col justify-center items-center p-4 md:px-12 md:py-8 overflow-hidden"
        >
            <motion.div
                variants={itemVariants}
                className="text-center py-2 md:py-4 space-y-4"
            >
                <motion.div
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.2 }}
                >
                    <Slogan icon={<Wrench />} text={"Solutions"} variant={"primary"} className="mainColor" />
                </motion.div>


                <motion.div
                    variants={fadeInScale}
                >
                    <DescriptionText text={""} />
                </motion.div>
            </motion.div>

            <motion.div
                variants={staggerList}
                className="w-full"
            >
                {servicesData.map((service, index) => (
                    <motion.div
                        key={index}
                        variants={index % 2 === 0 ? slideInLeft : slideInRight}
                        whileHover={{
                            scale: 1.02,
                            transition: { duration: 0.3 }
                        }}
                    >
                        <ServiceCard
                            title={service.title}
                            paragraph={service.paragraph}
                            description={service.description}
                            image={service.image}
                            reverse={service.reverse}
                            options={service.options}
                            clickable= {service.clickable}
                        />
                    </motion.div>
                ))}
            </motion.div>
        </motion.section>
    );
};

const FaqSection: React.FC = () => {
    const sectionRef = useRef<HTMLElement>(null);
    const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

    const faqData: FAQCardProps[] = [
        {
            question: "A QUI S’ADRESSENT VOS SERVICES ?",
            answer: "Nos services s’adressent aux entreprises et aux particuliers : Résidences, Établissements scolaires, Commerces, Centres de santé, Hôtelleries, Catering, Loisirs, Banques & assurances, Ambassades, Industries, Espaces publics et autres."
        },
        {
            question: "COMMENT PUIS-JE CONTACTER LE SERVICE CLIENT ?",
            answer: "Pour répondre à vos questions, notre service client est joignable par téléphone 05 564 80 80, par mail contact@eureka-co.net ou via notre site web www.eureka-co.net"
        },
        {
            question: "QUELS PRODUITS DE NETTOYAGE UTILISEZ-VOUS ?",
            answer: "Nous utilisons des produits de nettoyage écologiques et respectueux de l'environnement pour garantir la sécurité de vos employés et la durabilité de notre planète. Nos produits sont efficaces pour éliminer les germes et les bactéries tout en étant doux pour les surfaces."
        },
        {
            question: "QUELS SONT VOS TARIFS ?",
            answer: "Nos tarifs varient en fonction du type de prestation et de la surface des locaux à traiter. Nous proposons des forfaits adaptés aux besoins des particuliers et des professionnels."
        },
        {
            question: "QUELS TYPES DE NUISIBLES TRAITEZ-VOUS ?",
            answer: "Nous traitons une large gamme de nuisibles : Blattes, cafards, puces, punaises de lit, mouches, moustiques, fourmis, araignée, bactéries, micro-organismes, spores bactériennes, virus, rats, souris, reptiles et bien d’autres."
        },
        {
            question: "UTILISEZ-VOUS DES PRODUITS CHIMIQUES SÛRS ?",
            answer: "Oui, nous utilisons des produits chimiques agréés par le ministère de la Santé, garantissant efficacité, sécurité et respect de l’environnement."
        },
          {
            question: "AVEZ-VOUS DES AUTORISATIONS NÉCESSAIRES POUR PRATIQUER LE MÉTIER D’HYGIÈNE 4D ?",
            answer: "Oui, nous avons les autorisations des Ministères de la Santé et de la Population ainsi que de l'Environnement, du Développement Durable et du Bassin du Congo."
        },
        {
            question: "QUELS TYPES DE SERVICES DE NETTOYAGE PROPOSEZ-VOUS ?",
            answer: "Nous proposons une gamme complète de services de nettoyage : nettoyage classique, sols, tapis, moquettes, remise en état après travaux. Chaque service est adapté à vos besoins spécifiques pour garantir un environnement propre et sain."
        },
        {
            question: "COMMENT CREER UN JARDIN ?",
            answer: "Créer un jardin demande de la réflexion, du temps et un espace extérieur."
        },

        {
            question: "COMMENT ENTRETENIR UN JARDIN ?",
            answer: "L’entretien du jardin s’effectue tout au long de l’année, il sera différent à chaque saison. Il prend peu de temps quand il est fait régulièrement."
        },

         {
            question: "EST-CE QUE VOUS ASSUREZ LE NETTOYAGE DES VITRES EN HAUTEUR OU DIFFICILES D'ACCES ?",
            answer: "Oui, nous avons les équipements et l'expérience nécessaires pour nettoyer les vitres en hauteur ou difficiles d'accès. Nous vous assurons un nettoyage sécurisé et de qualité, même dans les zones les plus délicates à l’aide de nos perches télescopiques."
        },


         {
            question: "QUEL TYPE DE PRODUITS UTILISEZ-VOUS POUR LE LAVAGE DES VITRES ?",
            answer: "Nous n’utilisons aucun produit pour le nettoyage des vitres.  Notre système est basé sur le nettoyage à l'eau pure, réalisé à l’aide des perches télescopiques, efficace sans laisser de traces ou de résidus, tout en préservant l'intégrité des vitres."
        },
    ];

    return (
        <motion.section
            ref={sectionRef}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={containerVariants}
            className="flex flex-col justify-center items-center p-4 md:px-12 md:py-8 "
        >
            <motion.div
                variants={itemVariants}
                className="text-center py-2 md:py-4 space-y-4"
            >
                <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.5 }}
                >
                    <Slogan icon={<CircleQuestionMark />} text={"FAQ"} variant={"primary"} className="mainColor" />
                </motion.div>


                <motion.div
                    variants={itemVariants}
                >
                    <DescriptionText text={"Vous avez des questions sur nos solutions ? Consultez notre FAQ pour trouver des réponses à vos interrogations les plus courantes."} />
                </motion.div>
            </motion.div>

            <motion.div
                variants={staggerList}
                className="w-full max-w-3xl space-y-4 mt-4 md:mt-8"
            >
                {faqData.map((faq, index) => (
                    <motion.div
                        key={index}
                        variants={{
                            hidden: { x: index % 2 === 0 ? -50 : 50, opacity: 0 },
                            visible: {
                                x: 0,
                                opacity: 1,
                                transition: {
                                    duration: 0.5,
                                    delay: index * 0.1,
                                    ease: [0.22, 1, 0.36, 1]
                                }
                            }
                        }}
                        whileHover={{
                            scale: 1.02,
                            boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
                        }}
                    >
                        <FAQCard
                            question={faq.question}
                            answer={faq.answer}
                        />
                    </motion.div>
                ))}
            </motion.div>
        </motion.section>
    );
};

export const Services: React.FC = () => {
    const ctaRef = useRef<HTMLElement>(null);
    const isCtaInView = useInView(ctaRef, { once: true, margin: "-100px" });

    return (
        <motion.div
            initial="hidden"
            animate="visible"
            variants={containerVariants}
        >
            <motion.div
                variants={fadeInScale}
            >
                <SecondBanner
                    textBtn="Decouvrez Eureka & Co"
                    textBtn2="Nous contacter"
                    secondButton
                    variantBtn2="secondary"
                    link2="/contact"
                    variantBtn="primary"
                    underImage="images/services/banner.webp"
                    link="/apropos"
                    overlayColor="black"
                titleColor="secondaryColor" title={""} />
            </motion.div>

            <ServiceSection />
            <FaqSection />

            <motion.section
                ref={ctaRef}
                initial="hidden"
                animate={isCtaInView ? "visible" : "hidden"}
                variants={containerVariants}
                className="text-center space-y-5 p-8 md:p-12 md:mt-8 "
            >
                

                <motion.div
                    variants={{
                        hidden: { y: 20, opacity: 0 },
                        visible: {
                            y: 0,
                            opacity: 1,
                            transition: { duration: 0.4, delay: 0.4 }
                        }
                    }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                >
                    <Button
                        text={"Votre devis en un clic"}
                        to={"/contact"}
                        variant="secondary"
                    />
                </motion.div>

                {/* Éléments décoratifs animés */}
                <motion.div
                    className="absolute left-0 top-1/2 w-32 h-32 bg-mainColor/5 rounded-full blur-3xl"
                    animate={{
                        x: [0, 50, 0],
                        y: [0, -30, 0],
                    }}
                    transition={{
                        duration: 8,
                        repeat: Infinity,
                        ease: "linear"
                    }}
                />

                <motion.div
                    className="absolute right-0 bottom-0 w-40 h-40 bg-secondaryColor/5 rounded-full blur-3xl"
                    animate={{
                        x: [0, -50, 0],
                        y: [0, 30, 0],
                    }}
                    transition={{
                        duration: 10,
                        repeat: Infinity,
                        ease: "linear"
                    }}
                />
            </motion.section>
        </motion.div>
    );
};