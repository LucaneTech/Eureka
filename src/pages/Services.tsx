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
    paragraph: "Un environnement de travail propre pour une productivité optimale.",
    description:
      "Nous offrons un service de nettoyage de bureaux complet, adapté à vos besoins spécifiques. Notre équipe utilise des produits écologiques pour garantir un espace de travail sain et agréable.",
    image: "/images/services/entretient.jpeg",
    reverse: false,
    options: [
      {
        label: "Nettoyage Classique",
        description: "Nettoyage standard des bureaux et espaces professionnels.",
        details:
          "Actuellement, 98 % des employés estiment que la propreté et l'hygiène sont indispensables à leur bien-être professionnel, tandis que 85 % les considèrent comme des éléments contribuant à la performance.L'état de propreté de vos locaux professionnels va au-delà d'une simple question d'apparence : il témoigne également de votre rigueur et de votre sérieux vis-à-vis de vos employés et partenaires.Grâce à une étude détaillée de vos besoins, nos agents de nettoyage vous assurent une propreté irréprochable et pérenne. Nous garantissons la propreté des fenêtres et des sols de vos installations en employant des produits certifiés ECO LABEL, tout en respectant scrupuleusement diverses actions écologiques lors de nos prestations.",
        image: "/images/services/entretient.jpeg"
      },
      {
        label: "Nettoyage des sols",
        description: "Entretien complet des différents types de sols.",
        details:
          "Nous assurons le lavage, le décapage et le traitement des sols selon leur nature : carrelage, parquet, marbre ou sols industriels."
      },
      {
        label: "Nettoyage de vitres et panneaux solaires",
        description: "Nettoyage professionnel des surfaces vitrées.",
        details:
          "EUREKA & CO prend en charge l'entretien de toutes les surfaces vitrées, qu'elles soient à la portée des hommes ou non. Nos équipes sont en mesure de nettoyer toutes les surfaces vitrées grâce à nos équipements spécialisés, tels que les perches télescopiques à eau pure."
      },
      {
        label: "Remise en état après travaux",
        description: "Nettoyage complet après chantier.",
        details:
          "Vous avez effectué des travaux d'aménagement afin d'améliorer les conditions de travail de vos employés et l'accueil de vos clients. Pour rendre vos locaux impeccablement propres, faites appel à EUREKA & CO !"
      },
      {
        label: "Shampooing de moquette",
        description: "Nettoyage en profondeur des moquettes.",
        details:
          "En raison de son contact avec les tâches, la moquette requiert un nettoyage en profondeur. Notre technique de nettoyage de moquette écologique, employant des produits qui protègent les fibres et l'environnement, supprime la saleté tout en préservant la longévité de votre moquette.En outre, votre moquette reçoit un nouveau souffle sans nuire à votre engagement pour le bien-être au travail et la protection de l'environnement."
      }
    ]
  },
  {
    title: "Espaces Verts",
    paragraph:
      "Des espaces verts bien entretenus pour un cadre de travail agréable et inspirant.",
    description:
      "Notre service d'entretien des espaces verts comprend la tonte de pelouse, la taille de haies, le désherbage et l'arrosage automatique.",
    image: "/images/services/espaces-verts.jpeg",
    reverse: true,
    options: [
      {
        label: "Entretien de jardins",
        description: "Maintenance complète des jardins.",
        details:
          "Tonte de pelouse, entretien des massifs floraux et nettoyage général pour garder vos espaces extérieurs propres et accueillants."
      },
      {
        label: "Taille de haies",
        description: "Taille et structuration des haies.",
        details:
          "Nous assurons une coupe précise pour maintenir la santé des plantes et l'esthétique des espaces verts."
      },
      {
        label: "Désherbage",
        description: "Élimination des mauvaises herbes.",
        details:
          "Techniques manuelles et écologiques pour supprimer les mauvaises herbes sans abîmer vos plantations."
      },
      {
        label: "Arrosage automatique",
        description: "Installation et maintenance de systèmes d'arrosage.",
        details:
          "Optimisation de l'irrigation pour garder vos espaces verts en parfaite santé toute l'année."
      }
    ]
  },
  {
    title: "Hygiene 4D",
    paragraph: "Une hygiène rigoureuse pour un environnement de travail sain.",
    description:
      "Notre service d'hygiène 4D offre une solution complète pour maintenir un environnement de travail sain.",
    image: "/images/services/hygiene.jpeg",
    reverse: false,
    options: [
      {
        label: "Nettoyage et désinfection",
        description: "Désinfection professionnelle des locaux.",
        details:
          "Utilisation de produits certifiés pour éliminer bactéries, virus et agents contaminants."
      },
      {
        label: "Dératisation et désinsectisation",
        description: "Lutte contre les nuisibles.",
        details:
          "Interventions ciblées pour éliminer rats, souris, cafards et autres nuisibles tout en respectant les normes sanitaires."
      },
      {
        label: "Gestion des déchets",
        description: "Organisation et traitement des déchets.",
        details:
          "Mise en place de solutions de tri et de gestion efficace des déchets dans vos locaux."
      },
      {
        label: "Contrôle des odeurs",
        description: "Traitement des mauvaises odeurs.",
        details:
          "Utilisation de technologies spécifiques pour neutraliser durablement les odeurs."
      }
    ]
  },
  {
    title: "Froid et Climatisation",
    paragraph:
      "Assurez un environnement de travail confortable toute l'année grâce à nos services de froid et climatisation.",
    description:
      "Installation, maintenance et dépannage de vos systèmes de climatisation.",
    image: "/images/services/froid.jpeg",
    reverse: true,
    options: [
      {
        label: "Installation",
        description: "Installation de systèmes de climatisation.",
        details:
          "Nous vous proposons une gamme diversifiée de climatiseurs de marques reconnues, choisis sur la base de leur performance, de leur respect des normes environnementales et de leur faible consommation d'énergie. Nos solutions, qui se conforment parfaitement à l'ampleur de vos espaces résidentiels ou professionnels, sauront idéalement satisfaire vos exigences.Uniquement un expert chevronné peut vous assurer une mise en place efficace et conforme à toutes les normes de sécurité."
      },
      {
        label: "Maintenance",
        description: "Entretien régulier des équipements.",
        details:
          "Chaque système de climatisation exige une maintenance régulière minutieuse incluant la vérification de l'étanchéité des circuits, la surveillance des pressions, l'identification de possibles fuites, le nettoyage ou changement des filtres, ainsi que l'inspection de l'état des connexions électriques, entre autres.Ces actions sont essentielles pour garantir une efficacité optimale, une faible consommation d'énergie et un fonctionnement sans défaillances."
      },
      {
        label: "Dépannage",
        description: "Réparation rapide des systèmes.",
        details:
          "Des performances dégradées des systèmes de climatisation peuvent survenir avec une installation incorrecte, une mise en service non experte ou un entretien négligé au fil du temps.De plus, leur utilisation peut entraîner une augmentation significative de la consommation d'énergie. Dans ce contexte, une panne pourrait survenir à tout moment, avec parfois un danger de court-circuit manifeste. Il est donc nécessaire de faire appel à un professionnel aguerri pour restaurer un fonctionnement satisfaisant et sûr du système."
      }
    ]
  },
  {
    title: "Centrales d'achats",
    paragraph: "Des services complémentaires pour répondre à tous vos besoins.",
    description:
      "Nous proposons une gamme complète de services de fourniture pour votre entreprise.",
    image: "/images/services/service.jpg",
    reverse: true,
    options: [
      {
        label: "Fourniture de produits de nettoyage",
        description: "Distribution de produits professionnels.",
        details:
          "Large gamme de produits écologiques et efficaces pour l'entretien de vos locaux."
      },
      {
        label: "Location de matériel de nettoyage",
        description: "Location d'équipements spécialisés.",
        details:
          "Machines professionnelles disponibles pour des besoins ponctuels ou réguliers."
      },
      {
        label: "Formation du personnel de nettoyage",
        description: "Formation professionnelle.",
        details:
          "Sessions de formation pour améliorer les compétences et l'efficacité des équipes de nettoyage."
      }
    ]
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

                            paragraph={service.paragraph}
                            description={service.description}
                            image={service.image}
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