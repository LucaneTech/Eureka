import { ArrowBigDown, BookOpenCheck, Megaphone, SparklesIcon } from "lucide-react";
import { useRef } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import type { Variants } from "framer-motion";
import { FirstBanner } from "../components/banners/Firstbanner";
import { Slogan } from "../components/ui/Slogan";
import { Title } from "../components/font/Title";
import { DescriptionText } from "../components/font/DescriptionText";
import ActualitieCard from "../components/ui/ActualitieCard";
import { TestimonialsSection } from "./Home";
import { Button } from "../components/ui/Button";

// Animation variants sophistiqués
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
      ease: [0.22, 1, 0.36, 1] as any
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
      ease: [0.22, 1, 0.36, 1] as any
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
      ease: [0.22, 1, 0.36, 1] as any
    }
  }
};

const staggerList = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3
    }
  }
};

const cardVariants: Variants = {
  hidden: { y: 50, opacity: 0 },
  visible: (custom: number) => ({
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      delay: custom * 0.1,
      ease: [0.22, 1, 0.36, 1] as any
    }
  }),
  hover: {
    y: -10,
    scale: 1.03,
    transition: {
      duration: 0.3,
      ease: ("easeOut" as any)
    } as any
  }
};

const rotateIn: Variants = {
  hidden: { rotate: -10, scale: 0.8, opacity: 0 },
  visible: {
    rotate: 0,
    scale: 1,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: [0.22, 1, 0.36, 1] as any
    }
  }
};

const Actualities = () => {
    const sectionRef = useRef<HTMLElement>(null);
    const isInView = useInView(sectionRef, { once: true, margin: "-100px" });
    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start end", "end start"]
    });

    const y = useTransform(scrollYProgress, [0, 1], [0, -30]);
    const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.6, 1, 1, 0.6]);

    const actualitiesData = [
        {
            title: "5 Astuces pour un Nettoyage Écologique Efficace",
            description: "Découvrez comment adopter des méthodes de nettoyage respectueuses de l'environnement pour un foyer propre et sain.",
            imageUrl: "/images/blog/banner.jpg",
            date: "15 septembre 2024",
        },
        {
            title: "Les Meilleurs Produits de Nettoyage pour Chaque Surface",
            description: "Un guide complet pour choisir les produits de nettoyage adaptés à chaque type de surface dans votre maison.",
            imageUrl: "/images/blog/banner.jpg",
            date: "10 septembre 2024",
        },
        {
            title: "Comment Maintenir une Maison Propre avec des Animaux de Compagnie",
            description: "Des conseils pratiques pour garder votre maison propre et fraîche malgré la présence de vos amis à quatre pattes.",
            imageUrl: "/images/blog/banner.jpg",
            date: "5 septembre 2024",
        },
        { 
            title: "Les Meilleurs Produits de Nettoyage pour Chaque Surface",
            description: "Un guide complet pour choisir les produits de nettoyage adaptés à chaque type de surface dans votre maison.",
            imageUrl: "/images/blog/banner.jpg",
            date: "10 septembre 2024",
        },
        {
            title: "5 Astuces pour un Nettoyage Écologique Efficace",
            description: "Découvrez comment adopter des méthodes de nettoyage respectueuses de l'environnement pour un foyer propre et sain.",
            imageUrl: "/images/blog/banner.jpg",
            date: "15 septembre 2024",
        },
        {
            title: "Les Meilleurs Produits de Nettoyage pour Chaque Surface",
            description: "Un guide complet pour choisir les produits de nettoyage adaptés à chaque type de surface dans votre maison.",
            imageUrl: "/images/blog/banner.jpg",
            date: "10 septembre 2024",
        },
        {
            title: "Comment Maintenir une Maison Propre avec des Animaux de Compagnie",
            description: "Des conseils pratiques pour garder votre maison propre et fraîche malgré la présence de vos amis à quatre pattes.",
            imageUrl: "/images/blog/banner.jpg",
            date: "5 septembre 2024",
        },
        { 
            title: "Les Meilleurs Produits de Nettoyage pour Chaque Surface",
            description: "Un guide complet pour choisir les produits de nettoyage adaptés à chaque type de surface dans votre maison.",
            imageUrl: "/images/blog/banner.jpg",
            date: "10 septembre 2024",
        },
    ];

    return (
        <motion.section
            ref={sectionRef}
            style={{ y, opacity }}
            className="mx-auto px-2 md:px-12 py-4 md:py-12 flex flex-col justify-center items-center overflow-hidden"
        >
            {/* En-tête avec animations */}
            <motion.div
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                variants={containerVariants}
                className="text-center p-2 space-y-4"
            >
                <motion.div variants={rotateIn}>
                    <Slogan 
                        icon={<SparklesIcon />} 
                        text={"Actualités et Astuces"} 
                        variant={"primary"} 
                        className="mainColor"
                    />
                </motion.div>
                
                <motion.div variants={itemVariants}>
                    <Title 
                        text={"Découvrez nos dernières actualités et astuces de nettoyage"} 
                        variants={"large"}
                    />
                </motion.div>
                
                <motion.div variants={itemVariants}>
                    <DescriptionText 
                        text={"Restez informé des dernières tendances en matière de nettoyage, des conseils d'experts et des innovations pour maintenir votre espace impeccable."} 
                    />
                </motion.div>
            </motion.div>

            {/* Grille de cartes avec animations */}
            <motion.div
                variants={staggerList}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-8 w-full mx-auto"
            >
                {actualitiesData.map((actuality, index) => (
                    <motion.div
                        key={index}
                        custom={index}
                        variants={cardVariants}
                        whileHover="hover"
                        initial="hidden"
                        animate={isInView ? "visible" : "hidden"}
                    >
                        <ActualitieCard
                            title={actuality.title}
                            description={actuality.description}
                            imageUrl={actuality.imageUrl}
                            date={actuality.date}
                        />
                    </motion.div>
                ))}
            </motion.div>

            {/* Indicateur de scroll pour plus de contenu */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : {}}
                transition={{ delay: 1.5, duration: 0.5 }}
                className="mt-8 flex justify-center"
            >
                <motion.div
                    animate={{ y: [0, 10, 0] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                    className="w-10 h-10 rounded-full borderMainColor mainColor bgMainColorOpacity flex items-center justify-center"
                >
           
                        <ArrowBigDown className="w-5 h-5" />
                
                </motion.div>
            </motion.div>
        </motion.section>
    );
};

const Blog = () => {
    const ctaRef = useRef<HTMLElement>(null);
    const isCtaInView = useInView(ctaRef, { once: true, margin: "-100px" });

    return (
        <motion.div
            initial="hidden"
            animate="visible"
            variants={containerVariants}
        >
            {/* Bannière avec animation */}
            <motion.div variants={fadeInScale}>
                <FirstBanner 
                    title={"Secrets d'une Propreté Parfaite,"} 
                    addTitle="Impeccable & Intelligente" 
                    addTitleStyle="secondaryColor" 
                    description={"Découvrez nos astuces expertes de nettoyage pour des espaces impeccables, sans effort et durables au quotidien."} 
                    textBtn={"Devis Gratuit 24h"} 
                    link={"/contact"} 
                    variantBtn="secondary" 
                    overlayColor="#000000" 
                    overlayOpacity={100} 
                    underImage="/images/blog/banner.jpg"
                    slogan="Nettoyage de Qualité Supérieure" 
                    sloganIcon={<BookOpenCheck />} 
                    sloganVariant="secondary"
                />
            </motion.div>

            <Actualities />

            {/* Section témoignages avec animation */}
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true, margin: "-100px" }}
            >
                <TestimonialsSection />
            </motion.div>

            {/* Section CTA avec animations */}
            <motion.section
                ref={ctaRef}
                initial="hidden"
                animate={isCtaInView ? "visible" : "hidden"}
                variants={containerVariants}
                className="w-full text-center px-4 md:px-12 py-8 md:py-8 space-y-4 relative overflow-hidden"
            >
                {/* Éléments décoratifs animés */}
                <motion.div
                    className="absolute -top-20 -left-20 w-64 h-64 bg-mainColor/5 rounded-full blur-3xl"
                    animate={{
                        x: [0, 30, 0],
                        y: [0, -30, 0],
                        scale: [1, 1.2, 1],
                    }}
                    transition={{
                        duration: 12,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                />
                
                <motion.div
                    className="absolute -bottom-20 -right-20 w-72 h-72 bg-secondaryColor/5 rounded-full blur-3xl"
                    animate={{
                        x: [0, -30, 0],
                        y: [0, 30, 0],
                        scale: [1, 1.3, 1],
                    }}
                    transition={{
                        duration: 15,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                />

                {/* Contenu principal */}
                <motion.div variants={rotateIn}>
                    <Slogan 
                        icon={<Megaphone />} 
                        text={"Contactez-nous!"} 
                        variant={"secondary"} 
                        className="secondaryColor"
                    />
                </motion.div>
                
                <motion.div variants={itemVariants}>
                    <Title 
                        text={"Prêt à transformer votre espace? Contactez-nous dès aujourd'hui!"} 
                        variants={"large"}
                    />
                </motion.div>
                
                <motion.div 
                    variants={itemVariants}
                    className="max-w-2xl mx-auto"
                >
                    <DescriptionText 
                        text={"Notre équipe d'experts en nettoyage est prête à répondre à vos questions et à vous aider à trouver la solution parfaite pour vos besoins. N'hésitez pas à nous contacter pour un devis personnalisé ou pour en savoir plus sur nos services."} 
                        className="mb-4 text-center"
                    />
                </motion.div>
                
                <motion.div
                    variants={fadeInScale}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                >
                    <Button 
                        text={"Contactez-nous"} 
                        variant={"secondary"} 
                        to={"/contact"} 
                    />
                </motion.div>
            </motion.section>
        </motion.div>
    );
};

export default Blog;