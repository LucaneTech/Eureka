import { ArrowUpRight, CircleQuestionMark, Wrench } from "lucide-react";
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

const rotateIn: Variants = {
    hidden: { rotate: -10, scale: 0.8, opacity: 0 },
    visible: {
        rotate: 0,
        scale: 1,
        opacity: 1,
        transition: {
            duration: 0.5
        }
    }
};

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
            titleColor: "primary",
            paragraph: "Un environnement de travail propre pour une productivité optimale.",
            description: "Nous offrons un service de nettoyage de bureaux complet, adapté à vos besoins spécifiques. Notre équipe utilise des produits écologiques pour garantir un espace de travail sain et agréable.",
            image: "/images/services/entretient.jpeg",
            variant: "primary",
            reverse: false,
            options: ["Nettoyage Classique", "Nettoyage des sols", "Nettoyage de vitres et panneaux solaires", "Remise en état après travaux", "Shampooing de moquette"]
        },
        {
            title: "Espaces Verts",
            titleColor: "secondary",
            paragraph: "Des espaces verts bien entretenus pour un cadre de travail agréable et inspirant.",
            description: "Notre service d'entretien des espaces verts comprend la tonte de pelouse, la taille de haies, le désherbage et l'arrosage automatique. Nous veillons à ce que vos jardins et espaces extérieurs soient toujours impeccables et accueillants.",
            image: "/images/services/espaces-verts.jpeg",
            variant: "secondary",
            reverse: true,
            options: ["Entretien de jardins", "Taille de haies", "Désherbage", "Arrosage automatique"]
        },
        {
            title: "Hygiene 4D",
            titleColor: "primary",
            paragraph: "Une hygiène rigoureuse pour un environnement de travail sain.",
            description: " Notre service d'hygiène 4D offre une solution complète pour maintenir un environnement de travail sain. Nous utilisons des techniques avancées de désinfection, de décontamination, de désodorisation et de dératisation pour garantir la propreté et la sécurité de vos locaux.",
            image: "/images/services/hygiene.jpeg",
            variant: "primary",
            reverse: false,
            options: ["Nettoyage et désinfection", "Dératisation et désinsectisation", "Gestion des déchets", "Contrôle des odeurs"]
        },
        {
            title: "Froid et Climatisation",
            titleColor: "secondary",
            paragraph: "Assurez un environnement de travail confortable toute l'année grâce à nos services de froid et climatisation.",
            description: " Notre service de froid et climatisation assure l'installation, la maintenance et le dépannage de vos systèmes de climatisation pour garantir un environnement de travail confortable toute l'année.",
            image: "/images/services/froid.jpeg",
            variant: "secondary",
            reverse: true,
            options: ["Installation", "Maintenance", "Dépannage"]
        },
        {
            title: "Fourniture de services",
            titleColor: "primary",
            paragraph: "Des services complémentaires pour répondre à tous vos besoins.",
            description: "Nous proposons une gamme complète de services de fourniture pour votre entreprise, y compris la location de matériel de nettoyage, la formation du personnel et la gestion des stocks.",
            image: "/images/services/service.jpg",
            variant: "primary",
            reverse: true,
            options: ["Fourniture de produits de nettoyage", "Location de matériel de nettoyage", "Formation du personnel de nettoyage", "Gestion des stocks et approvisionnement"]
        },
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
                    variants={rotateIn}
                >
                    <Title text={"Nos Solutions"} variants={"large"} />
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
                            titleColor={service.titleColor}
                            paragraph={service.paragraph}
                            description={service.description}
                            image={service.image}
                            variant={service.variant}
                            reverse={service.reverse}
                            options={service.options}
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
            question: "Quels types de services de nettoyage proposez-vous ?",
            answer: "Nous proposons une gamme complète de services de nettoyage, y compris le nettoyage de bureaux, le nettoyage de chantiers, l'entretien des espaces verts et la désinfection. Chaque service est adapté à vos besoins spécifiques pour garantir un environnement propre et sain."
        },
        {
            question: "Comment puis-je obtenir un devis pour vos services ?",
            answer: "Vous pouvez obtenir un devis gratuit en nous contactant via notre formulaire en ligne, par téléphone ou par email. Nous évaluerons vos besoins et vous fournirons une estimation détaillée et personnalisée."
        },
        {
            question: "Quels produits de nettoyage utilisez-vous ?",
            answer: "Nous utilisons des produits de nettoyage écologiques et respectueux de l'environnement pour garantir la sécurité de vos employés et la durabilité de notre planète. Nos produits sont efficaces pour éliminer les germes et les bactéries tout en étant doux pour les surfaces."
        },
        {
            question: "Offrez-vous des services de nettoyage en dehors des heures de bureau ?",
            answer: "Oui, nous proposons des services de nettoyage flexibles, y compris en dehors des heures de bureau, pour minimiser les interruptions de votre activité. Nous pouvons planifier nos interventions selon vos besoins pour garantir un environnement propre à tout moment."
        },
        {
            question: "Quels produits de nettoyage utilisez-vous ?",
            answer: "Nous utilisons des produits de nettoyage écologiques et respectueux de l'environnement pour garantir la sécurité de vos employés et la durabilité de notre planète. Nos produits sont efficaces pour éliminer les germes et les bactéries tout en étant doux pour les surfaces."
        },
        {
            question: "Comment puis-je obtenir un devis pour vos services ?",
            answer: "Vous pouvez obtenir un devis gratuit en nous contactant via notre formulaire en ligne, par téléphone ou par email. Nous évaluerons vos besoins et vous fournirons une estimation détaillée et personnalisée."
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
                    variants={fadeInScale}
                >
                    <Title text={"Foire aux Questions"} variants={"large"} />
                </motion.div>

                <motion.div
                    variants={itemVariants}
                >
                    <DescriptionText text={"Vous avez des questions sur nos services de nettoyage ? Consultez notre FAQ pour trouver des réponses à vos interrogations les plus courantes."} />
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
                    sloganIcon={<ArrowUpRight className="w-4 h-4" />}
                    slogan="Services de qualité"
                    title="Le Nettoyage ? "
                    description="Avec plus de 10 années d'expérience et une équipe formée aux dernières techniques, nous garantissons un résultat irréprochable sur l'ensemble de nos quatre services."
                    subtitle={"On s'en charge."}
                    textBtn="Decouvrez Eureka & Co"
                    textBtn2="Nous contacter"
                    secondButton
                    variantBtn2="secondary"
                    link2="/contact"
                    variantBtn="primary"
                    underImage="images/services/banner.jpeg"
                    link="/apropos"
                    overlayColor="black"
                    sloganVariant="secondary" titleColor="secondaryColor"               />
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
                        hidden: { y: 30, opacity: 0 },
                        visible: {
                            y: 0,
                            opacity: 1,
                            transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
                        }
                    }}
                >
                    <Title text={"Prêt pour un espace impeccable ?"} variants={"large"} />
                </motion.div>

                <motion.div
                    variants={{
                        hidden: { scale: 0.9, opacity: 0 },
                        visible: {
                            scale: 1,
                            opacity: 1,
                            transition: { duration: 0.5, delay: 0.2 }
                        }
                    }}
                    className="text-slate-600 text-center max-w-xl mx-auto"
                >
                    <DescriptionText
                        text={"Contactez nos experts dès aujourd'hui pour un nettoyage sur mesure – bureaux, vitres, industriel ou fin de chantier."}
                        className="max-w-xl mx-auto"
                    />
                </motion.div>

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
                        text={"Demander un devis gratuit"}
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