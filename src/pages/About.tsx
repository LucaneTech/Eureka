import React, { useRef } from "react"
import { motion, useInView, useScroll, useTransform } from "framer-motion"
import type { Variants } from "framer-motion"
import { SecondBanner } from "../components/banners/Secondbanner"
import { Title } from "../components/font/Title";
import { DescriptionText } from "../components/font/DescriptionText";
import { Slogan } from "../components/ui/Slogan";
import { ChartPie, GalleryVerticalEnd } from "lucide-react";
import { Button } from "../components/ui/Button";

// Animation variants sophistiqués
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
      ease: [0.22, 1, 0.36, 1] as const
    }
  }
};

const itemVariants: Variants = {
  hidden: { y: 40, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1] as const
    }
  }
};

const fadeInScale: Variants = {
  hidden: { scale: 0.9, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: [0.22, 1, 0.36, 1] as const
    }
  }
};

// left slide variant removed – unused


const slideInRight: Variants = {
  hidden: { x: 60, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1] as const
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

interface StoryCardProps {
    title: string;
    description: string;
    index: number;
}

const StoryCard: React.FC<StoryCardProps> = ({ title, description, index }) => {
    const cardRef = useRef<HTMLDivElement>(null);
    const isInView = useInView(cardRef, { once: true, margin: "-50px" });

    return (
        <motion.div
            ref={cardRef}
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ 
                duration: 0.5, 
                delay: index * 0.15,
                ease: [0.22, 1, 0.36, 1] as const
            }}
            whileHover={{ 
                y: -5,
                transition: { duration: 0.2 }
            }}
            className="p-4 transition-all duration-300 h-full text-center md:text-start hover:bg-white/50 rounded-xl"
        >
            <motion.div
                initial={{ scale: 0.9 }}
                animate={isInView ? { scale: 1 } : {}}
                transition={{ delay: index * 0.15 + 0.2 }}
            >
                <Title text={title} variants="large" className="secondaryColor" />
            </motion.div>
            <DescriptionText text={description} className="mt-4 text-gray-600" />
        </motion.div>
    );
};

const storyData = [
    {
        title: "Notre Histoire",
        description:
            "Du Congo à vos espaces impeccables : notre passion pour la propreté professionnelle.",
    },
    {
        title: "Notre Mission",
        description:
            "Du Congo à vos espaces impeccables : notre passion pour la propreté professionnelle.",
    },
    {
        title: "Nos Valeurs",
        description:
            "Du Congo à vos espaces impeccables : notre passion pour la propreté professionnelle.",
    },
    {
        title: "Notre Vision",
        description:
            "Du Congo à vos espaces impeccables : notre passion pour la propreté professionnelle.",
    },
];

const StorySection: React.FC = () => {
    const sectionRef = useRef<HTMLElement>(null);
    const isInView = useInView(sectionRef, { once: true, margin: "-100px" });
    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start end", "end start"]
    });

    const y = useTransform(scrollYProgress, [0, 1], [0, -30]);
    const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.6, 1, 1, 0.6]);

    return (
        <motion.section
            ref={sectionRef}
            style={{ y, opacity }}
            className="py-4 md:py-8"
        >
            <motion.div
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                variants={containerVariants}
                className="flex flex-col items-center justify-center text-center space-y-3 py-6"
            >
                <motion.div variants={fadeInScale}>
                    <Slogan icon={<GalleryVerticalEnd />} text={"Eureka & Co"} variant={"secondary"} className="secondaryColor" />
                </motion.div>
                <motion.div variants={itemVariants}>
                    <Title text="Notre Histoire" variants="large" className="text-center" />
                </motion.div>
                <motion.div variants={itemVariants}>
                    <DescriptionText text="Découvrez l'histoire inspirante de notre entreprise de nettoyage professionnel, née de la passion d'un jeune congolais pour la propreté et le service de qualité." />
                </motion.div>
            </motion.div>

            <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="bgSecondaryColorOpacity overflow-hidden py-4 md:py-8 mx-auto px-4 relative z-10 mt-4 md:mt-8"
            >
                <div className="container grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                    {/* Bloc Cards */}
                    <motion.div
                        variants={staggerList}
                        initial="hidden"
                        animate={isInView ? "visible" : "hidden"}
                        className="grid grid-cols-1 sm:grid-cols-2 gap-0 p-2"
                    >
                        {storyData.map((item, index) => (
                            <StoryCard
                                key={index}
                                index={index}
                                title={item.title}
                                description={item.description}
                            />
                        ))}
                    </motion.div>

                    {/* Image */}
                    <motion.div
                        variants={slideInRight}
                        initial="hidden"
                        animate={isInView ? "visible" : "hidden"}
                        className="w-full flex justify-center lg:justify-end"
                    >
                        <motion.img
                            whileHover={{ scale: 1.05 }}
                            transition={{ duration: 0.3 }}
                            src="/images/services/story.png"
                            alt="Notre équipe"
                            className="w-[600px] lg:w-[800px] h-auto object-cover drop-shadow-2xl"
                        />
                    </motion.div>
                </div>
            </motion.div>
        </motion.section>
    );
};

const missionValuesData = [
    {
        value: "Intégrité",
        description: "Nous agissons avec honnêteté et transparence dans toutes nos interactions."
    },
    {
        value: "Excellence",
        description: "Nous nous engageons à fournir des services de nettoyage de la plus haute qualité."
    },
    {
        value: "Responsabilité",
        description: "Nous assumons la responsabilité de nos actions et de l'impact environnemental de nos services."
    },
    {
        value: "Innovation",
        description: "Nous cherchons constamment à améliorer nos méthodes et à adopter de nouvelles technologies pour mieux servir nos clients."
    },
    {
        value: "Respect",
        description: "Nous traitons nos clients, nos employés et notre environnement avec respect et dignité."
    },
    {
        value: "Collaboration",
        description: "Nous croyons en la force du travail d'équipe et de la collaboration pour atteindre nos objectifs communs."
    },
];

const MissonValorsSection: React.FC = () => {
    const sectionRef = useRef<HTMLElement>(null);
    const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

    return (
        <motion.section
            ref={sectionRef}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={containerVariants}
            className="py-8 md:py-12 px-4 md:px-8"
        >
            <motion.div 
                variants={containerVariants}
                className="flex flex-col items-center justify-center text-center space-y-4 px-4"
            >
                <motion.div variants={itemVariants}>
                    <Title
                        text="Notre Mission & Nos Valeurs"
                        variants="large"
                        className="text-center"
                    />
                </motion.div>
                <motion.div variants={itemVariants}>
                    <DescriptionText
                        text="Découvrez l'histoire inspirante de notre entreprise de nettoyage professionnel, née de la passion d'un jeune congolais pour la propreté et le service de qualité."
                        className="max-w-2xl text-gray-600"
                    />
                </motion.div>
            </motion.div>

            {/* Wrapper scroll horizontal */}
            <motion.div 
                variants={fadeInScale}
                className="mt-4 md:mt-10 overflow-x-auto px-4 py-4"
            >
                <motion.div 
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="min-w-[600px]"
                >
                    <table className="w-full border-collapse rounded-md overflow-hidden shadow-lg">
                        <thead>
                            <motion.tr 
                                initial={{ x: -20, opacity: 0 }}
                                animate={isInView ? { x: 0, opacity: 1 } : {}}
                                transition={{ duration: 0.5, delay: 0.4 }}
                                className="bgMainColorOpacity"
                            >
                                <th className="px-6 py-4 text-left text-sm font-semibold mainColor uppercase tracking-wide">
                                    Valeur
                                </th>
                                <th className="px-6 py-4 text-right text-sm font-semibold mainColor uppercase tracking-wide">
                                    Description
                                </th>
                            </motion.tr>
                        </thead>

                        <tbody className="divide-y divide-gray-100">
                            {missionValuesData.map((item, index) => (
                                <motion.tr
                                    key={index}
                                    initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                                    transition={{ 
                                        duration: 0.4, 
                                        delay: 0.5 + index * 0.1,
                                        ease: [0.22, 1, 0.36, 1] as const
                                    }}
                                    whileHover={{ 
                                        scale: 1.01,
                                        backgroundColor: "rgba(5, 175, 242, 0.05)",
                                        transition: { duration: 0.2 }
                                    }}
                                    className="cursor-pointer transition duration-200"
                                >
                                    <td className="px-6 py-4 font-semibold text-slate-700 text-left whitespace-nowrap">
                                        <motion.span
                                            initial={{ scale: 0.9 }}
                                            whileHover={{ scale: 1.05, color: "#05AFF2" }}
                                        >
                                            {item.value}
                                        </motion.span>
                                    </td>
                                    <td className="px-6 py-4 text-gray-600 text-right">
                                        {item.description}
                                    </td>
                                </motion.tr>
                            ))}
                        </tbody>
                    </table>
                </motion.div>
            </motion.div>
        </motion.section>
    );
};

const statsData = [
    { label: "Clients satisfaits", value: "1 250+" },
    { label: "Années d’expérience", value: "8+" },
    { label: "Projets réalisés", value: "3 400+" },
    { label: "Agents qualifiés", value: "120+" },
];

const State = () => {
    const sectionRef = useRef<HTMLElement>(null);
    const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

    return (
        <motion.section
            ref={sectionRef}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={containerVariants}
            className="py-16 md:py-24 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden"
        >
            {/* Éléments décoratifs animés */}
            <motion.div
                className="absolute top-20 left-10 w-64 h-64 bg-mainColor/5 rounded-full blur-3xl"
                animate={{
                    x: [0, 50, 0],
                    y: [0, -30, 0],
                }}
                transition={{
                    duration: 15,
                    repeat: Infinity,
                    ease: "linear"
                }}
            />
            <motion.div
                className="absolute bottom-20 right-10 w-72 h-72 bg-secondaryColor/5 rounded-full blur-3xl"
                animate={{
                    x: [0, -50, 0],
                    y: [0, 30, 0],
                }}
                transition={{
                    duration: 18,
                    repeat: Infinity,
                    ease: "linear"
                }}
            />

            {/* Header */}
            <motion.div 
                variants={containerVariants}
                className="flex flex-col items-center text-center space-y-4 px-4 relative z-10"
            >
                <motion.div variants={rotateIn}>
                    <Slogan
                        icon={<ChartPie />}
                        text="Nos statistiques"
                        variant="primary"
                        className="mainColor"
                    />
                </motion.div>
                <motion.div variants={itemVariants}>
                    <Title
                        text="Chiffres Clés"
                        variants="large"
                        className="text-center"
                    />
                </motion.div>
                <motion.div variants={itemVariants}>
                    <DescriptionText
                        text="Découvrez l'histoire inspirante de notre entreprise de nettoyage professionnel, née de la passion d'un jeune congolais pour la propreté et le service de qualité."
                        className="max-w-2xl text-gray-600"
                    />
                </motion.div>
            </motion.div>

            {/* Stats Grid */}
            <motion.div 
                variants={staggerList}
                className="mt-16 px-4 container mx-auto relative z-10"
            >
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8">
                    {statsData.map((item, index) => (
                        <motion.div
                            key={index}
                            variants={{
                                hidden: { opacity: 0, y: 30 },
                                visible: { 
                                    opacity: 1, 
                                    y: 0,
                                    transition: { 
                                        duration: 0.5,
                                        delay: index * 0.15,
                                        ease: [0.22, 1, 0.36, 1] as const
                                    }
                                }
                            }}
                            whileHover={{ 
                                y: -10,
                                scale: 1.05,
                                boxShadow: "0 30px 35px -5px rgba(5, 175, 242, 0.2)",
                                transition: { duration: 0.3 }
                            }}
                            className="relative group rounded-2xl p-8 backdrop-blur-md borderMainColor cursor-pointer shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden"
                        >
                            {/* Effet de brillance au survol */}
                            <motion.div
                                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                                initial={{ x: "-100%" }}
                                whileHover={{ x: "200%" }}
                                transition={{ duration: 0.8 }}
                            />

                            <div className="relative z-10 flex flex-col items-center text-center space-y-3">
                                <motion.div
                                    initial={{ scale: 0.8 }}
                                    animate={isInView ? { scale: 1 } : {}}
                                    transition={{ delay: index * 0.15 + 0.2 }}
                                >
                                    <Title text={item.value} variants={"large"} className="mainColor" />
                                </motion.div>
                                <span className="text-sm md:text-base text-gray-600 font-medium">
                                    {item.label}
                                </span>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </motion.section>
    );
};

// Nouveau variant pour la rotation
const rotateIn: Variants = {
    hidden: { rotate: -10, scale: 0.8, opacity: 0 },
    visible: {
        rotate: 0,
        scale: 1,
        opacity: 1,
        transition: {
            duration: 0.5,
            ease: [0.22, 1, 0.36, 1] as const
        }
    }
};

const About = () => {
    const ctaRef = useRef<HTMLElement>(null);
    const isCtaInView = useInView(ctaRef, { once: true, margin: "-100px" });

    return (
        <motion.div
            initial="hidden"
            animate="visible"
            variants={containerVariants}
        >
            <motion.div variants={fadeInScale}>
                <SecondBanner 
                    title={"Votre partenaire de confiance"} 
                    subtitle={"Eureka & Co"} 
                    description={"Maîtrise Impeccable du Nettoyage Professionnel"} 
                    textBtn={"Découvrez nos services"} 
                    link={"/solutions"} 
                    secondButton 
                    textBtn2="Contactez nous" 
                    link2={"/contact"} 
                    variantBtn2="secondary" 
                    titleColor="text-white" 
                    underImage="/images/services/team.jpg" 
                    overlayColor="primary" 
                />
            </motion.div>

            <StorySection />
            <MissonValorsSection />
            <State />

            <motion.section
                ref={ctaRef}
                initial="hidden"
                animate={isCtaInView ? "visible" : "hidden"}
                variants={containerVariants}
                className="text-center space-y-5 p-8 md:p-12 md:mt-8"
            >
                <motion.div variants={itemVariants}>
                    <Title text={"Notre Devis Nettoyage Gratuit en 24h"} variants={"large"} />
                </motion.div>

                <motion.div 
                    variants={itemVariants}
                    className="text-slate-600 text-center max-w-xl mx-auto"
                >
                    <DescriptionText
                        text={"Contactez nos experts et offrez à vos espaces une propreté professionnelle irréprochable."}
                        className="max-w-xl mx-auto"
                    />
                </motion.div>

                <motion.div 
                    variants={staggerList}
                    className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-6"
                >
                    <motion.div
                        variants={fadeInScale}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <Button
                            text={"Découvrir Nos Services"}
                            to={"/solutions"}
                            variant="secondary"
                        />
                    </motion.div>
                    
                    <motion.div
                        variants={fadeInScale}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <Button
                            text={"Demander un devis gratuit"}
                            to={"/contact"}
                            variant="primary"
                        />
                    </motion.div>
                </motion.div>
            </motion.section>
        </motion.div>
    )
}

export default About;