import type React from "react";
import { useRef, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import { Birdhouse, Book, BookOpenCheck, Box, Brain, BriefcaseBusiness, BrushCleaning, Flower, Handshake, Twitch, Zap } from "lucide-react";
import { FirstBanner } from "../components/banners/Firstbanner";
import { Slogan } from "../components/ui/Slogan";
import { Title } from "../components/font/Title";
import type { HeadCardProps } from "../components/ui/HeadCard";
import HeadCard from "../components/ui/HeadCard";
import { Button } from "../components/ui/Button";
import type { TrustCardProps } from "../components/ui/TrustCard";
import TrustCard from "../components/ui/TrustCard";
import { DescriptionText } from "../components/font/DescriptionText";
import TrustedCompanies from "../components/sections/TrustedCompany";

// Animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 60 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6
    }
  }
};

const fadeInLeft = {
  hidden: { opacity: 0, x: -60 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.6
    }
  }
};

const fadeInRight = {
  hidden: { opacity: 0, x: 60 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.6
    }
  }
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5
    }
  }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1
    }
  }
};

const ClientChoice = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const clientChoice: TrustCardProps[] = [
    {
      icon: <Brain />,
      iconStyle: "primary",
      title: "Innovation",
      titleColor: 'primary',
      description: "Recherche et développement en continu des solutions innovantes." ,
      cardStyle: "secondary"
    },
    {
      icon: <Zap />,
      iconStyle: "secondary",
      title: "Dynamisme et flexibilité",
      titleColor: 'secondary',
      description: "Réponse rapide et efficace aux besoins de nos parténaires.",
      cardStyle: "secondary"
    },
    {
      icon: <BookOpenCheck />,
      iconStyle: "secondary",
      title: "Ecoute et proximité",
      titleColor: 'secondary',
      description: "Prise en compte des attentes et des besoins de nos partenaires.",
      cardStyle: "secondary"
    },
    {
      icon: <Book />,
      iconStyle: "secondary",
      title: "Engagement écologique",
      titleColor: 'secondary',
      description: "Recours à des produits respecteux de l'environnement et des méthodes durables pour minimiser notre empreinte écologique.",
      cardStyle: "secondary"
    }
  ];

  return (
    <motion.section
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={staggerContainer}
      className="p-8 flex flex-col justify-center items-center"
    >
      <motion.div variants={fadeInUp} className="flex flex-col justify-center items-center text-center">
        <Slogan icon={<Handshake />} text={"Choix de nos partenaires"} variant={"primary"} className="mainColor mb-6" />
        <Title text={"Pourquoi nos partenaires nous font confiance ?"} variants={"large"} />
      </motion.div>

      <motion.div
        variants={staggerContainer}
        className="flex flex-wrap justify-center items-center gap-4 md:gap-8 mt-8 md:mt-12"
      >
        {clientChoice.map((element, index) => (
          <motion.div
            key={index}
            variants={scaleIn}
            whileHover={{
              y: -10,
              transition: { duration: 0.3, ease: "easeOut" }
            }}
          >
            <TrustCard
              icon={element.icon}
              title={element.title}
              titleColor={element.titleColor}
              description={element.description}
              cardStyle={element.cardStyle}
              iconStyle={element.iconStyle}
            />
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  )
}

// Types
export interface Testimonial {
  id: number;
  description: string;
  image?: string;
  name: string;
  company: string;
}

export interface TestimonialsSectionProps {
  title?: string;
  subtitle?: string;
  testimonials?: Testimonial[];
  className?: string;
  gradientOverlay?: boolean;
  autoScrollSpeed?: {
    column1?: number;
    column2?: number;
    column3?: number;
  };
}

// Styles CSS injectés via React
const styles = `
@keyframes scroll-up {
  0% {
    transform: translateY(0);
  }
  100% {
    transform: translateY(-50%);
  }
}

.animate-scroll-up-1 {
  animation: scroll-up 25s linear infinite;
}
.animate-scroll-up-2 {
  animation: scroll-up 30s linear infinite;
}
.animate-scroll-up-3 {
  animation: scroll-up 20s linear infinite;
}

/* Pause animation on hover */
.animate-scroll-up-1:hover,
.animate-scroll-up-2:hover,
.animate-scroll-up-3:hover {
  animation-play-state: paused;
}
`;

const logos = [
  
  { src: "/images/home/partenaires/casino.png", alt: "logo-casino" },
  { src: "/images/home/partenaires/ifd.png", alt: "logo-ifd" },

  { src: "/images/home/partenaires/active.png", alt: "logo-active_rise" },
  { src: "/images/home/partenaires/safmac.jpg", alt: "logo_safmac" },
  
  { src: "/images/home/partenaires/ead.png", alt: "logo-ead" },
  { src: "/images/home/partenaires/isd.png", alt: "logo-isd" },
  { src: "/images/home/partenaires/guenin.png", alt: "logo-guenin" },
  { src: "/images/home/partenaires/green-service.png", alt: "logo-green-service" },
  { src: "/images/home/partenaires/sci-ndt.png", alt: "logo-sci-ndt" },
  { src: "/images/home/partenaires/cubana.png", alt: "logo-cubana" },
  { src: "/images/home/partenaires/ex.png", alt: "logo-ex" },
  { src: "/images/home/partenaires/btp.png", alt: "logo-btp" },
  { src: "/images/home/partenaires/guot.png", alt: "logo-guot"},
     { src: "/images/home/partenaires/olivier.png", alt: "logo-olivier" },
     { src: "/images/home/partenaires/super.png", alt: "logo-super" },

     { src: "/images/home/partenaires/prevent.jpeg", alt: "logo-prevent" },
      { src: "/images/home/partenaires/congo.png", alt: "logo-congo" },
  
];

const defaultTestimonials: Testimonial[] = [
  {
    id: 1,
    description: "Nous faisons appel à Eureka pour l’entretien régulier de nos bureaux. L’équipe est ponctuelle, efficace et les locaux sont toujours impeccables.",
    name: "Patrick M.",
    company: "Cabinet de conseil"
  },
  {
    id: 2,
    description: "J’ai demandé un grand nettoyage après un déménagement. Intervention rapide et très professionnelle. Appartement impeccable.",
    name: "Sandrine K.",
    company: "Cliente particulière"
  },
  {
    id: 3,
    description: "Nous utilisons leurs services pour le nettoyage des parties communes de notre immeuble. Travail sérieux et suivi régulier.",
    name: "Jean-Claude L.",
    company: "Syndic de copropriété"
  },
  {
    id: 4,
    description: "Service très pratique pour le ménage hebdomadaire à domicile. L’équipe s’adapte parfaitement à nos besoins.",
    name: "Nadine B.",
    company: "Particulier"
  },
  {
    id: 5,
    description: "Nous avions besoin d’un nettoyage complet avant l’ouverture de notre boutique. Résultat impeccable et délais respectés.",
    name: "Michel T.",
    company: "Commerce local"
  },
  {
    id: 6,
    description: "Très bonne expérience pour un nettoyage après travaux. L’équipe a laissé les lieux parfaitement propres.",
    
    name: "Arlette S.",
    company: "Entreprise de rénovation"
  },
  {
    id: 7,
    description: "Nous avons fait appel à Eureka lors de notre déménagement d’entreprise. Organisation fluide et équipe professionnelle.",
   
    name: "Didier K.",
    company: "PME locale"
  },
  {
    id: 8,
    description: "Très bon rapport qualité-prix pour l’entretien régulier de notre appartement. Service fiable et sérieux.",
   
    name: "Brigitte N.",
    company: "Cliente résidentielle"
  },
  {
    id: 9,
    description: "Entreprise très réactive. Ils ont pu intervenir rapidement pour un nettoyage de bureaux avant une réunion importante.",
    name: "Samuel D.",
    company: "Startup locale"
  }
];

// Composant de carte de témoignage
const TestimonialCard: React.FC<{ testimonial: Testimonial; index: number }> = ({ testimonial, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true, margin: "-50px" }}
      whileHover={{
        scale: 1.02,
        boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
        transition: { duration: 0.2 }
      }}
      className="border borderMainColor rounded-xl p-6 mb-4 hover:border-slate-700 transition-all duration-300"
    >
      <motion.div
        initial={{ rotate: -10, scale: 0 }}
        whileInView={{ rotate: 0, scale: 1 }}
        transition={{ duration: 0.4, delay: index * 0.1 + 0.2 }}
        className="mb-5 rounded-full"
      >
        <Twitch className="text-slate-400" />
      </motion.div>
      <p className="text-sm text-slate-600 mb-5 leading-relaxed">
        {testimonial.description}
      </p>
      <motion.div
        initial={{ opacity: 0, x: -10 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.3, delay: index * 0.1 + 0.3 }}
        className="flex items-center gap-3"
      >
    
        <div>
          <p className="text-sm mainColor">{testimonial.name}</p>
          <p className="text-sm text-slate-500">{testimonial.company}</p>
        </div>
      </motion.div>
    </motion.div>
  );
};

// Composant principal
export const TestimonialsSection: React.FC<TestimonialsSectionProps> = ({
  title = "Ce que nos clients disent de nous",
  subtitle = "Des témoignages authentiques de clients satisfaits qui ont fait confiance à Eureka & Co pour leurs besoins de nettoyage et d'entretien.",
  testimonials = defaultTestimonials,
  className = "",
  gradientOverlay = true,
  autoScrollSpeed = {
    column1: 25,
    column2: 30,
    column3: 20
  }
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef(null);
  const isHeaderInView = useInView(headerRef, { once: true, margin: "-100px" });

  // Injecter les styles dynamiquement
  useEffect(() => {
    const styleSheet = document.createElement("style");
    styleSheet.innerText = styles;
    document.head.appendChild(styleSheet);

    return () => {
      document.head.removeChild(styleSheet);
    };
  }, [autoScrollSpeed]);

  // Organiser les témoignages en colonnes
  const columns = [
    {
      testimonials: [...testimonials.slice(0, 3), ...testimonials.slice(0, 3)],
      className: `animate-scroll-up-1`,
      speed: autoScrollSpeed.column1
    },
    {
      testimonials: [...testimonials.slice(3, 6), ...testimonials.slice(3, 6)],
      className: `hidden md:block animate-scroll-up-2`,
      speed: autoScrollSpeed.column2
    },
    {
      testimonials: [...testimonials.slice(6, 9), ...testimonials.slice(6, 9)],
      className: `hidden lg:block animate-scroll-up-3`,
      speed: autoScrollSpeed.column3
    }
  ];

  return (
    <motion.section
      initial="hidden"
      animate={isHeaderInView ? "visible" : "hidden"}
      variants={staggerContainer}
      className={`flex flex-col items-center justify-center py-16 px-8 ${className}`}
    >
      {/* En-tête */}
      <motion.div
        ref={headerRef}
        variants={fadeInUp}
        className="text-center mb-12"
      >
        <Title text={title} variants={"large"} className="mb-4" />
        <motion.p
          variants={fadeInUp}
          className="text-slate-600"
        >
          {subtitle}
        </motion.p>
      </motion.div>

      {/* Grille de témoignages */}
      <motion.div
        variants={scaleIn}
        className="relative w-full max-w-6xl overflow-hidden"
      >
        {/* Overlays de gradient */}
        {gradientOverlay && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
              className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-white to-transparent z-10 pointer-events-none"
            />
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent z-10 pointer-events-none"
            />
          </>
        )}

        {/* Conteneur des colonnes */}
        <div
          ref={containerRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 h-[600px] overflow-hidden"
        >
          {columns.map((column, colIndex) => (
            <motion.div
              key={`column-${colIndex}`}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: colIndex * 0.2 }}
              viewport={{ once: true }}
              className={column.className}
              style={{ animationDuration: `${column.speed}s` }}
            >
              {column.testimonials.map((testimonial, index) => (
                <TestimonialCard
                  key={`col${colIndex}-${testimonial.id}-${index}`}
                  testimonial={testimonial}
                  index={index}
                />
              ))}
            </motion.div>
          ))}
        </div>
      </motion.div>
    </motion.section>
  );
};

export const Home: React.FC = () => {
  const servicesRef = useRef(null);
  const whyUsRef = useRef(null);
  const ctaRef = useRef(null);

  const isServicesInView = useInView(servicesRef, { once: true, margin: "-100px" });
  const isWhyUsInView = useInView(whyUsRef, { once: true, margin: "-100px" });
  const isCtaInView = useInView(ctaRef, { once: true, margin: "-100px" });

  const firstServices: HeadCardProps[] = [
    {
      icon: <BrushCleaning />,
      title: "Nettoyage & Propreté" ,
      description: 'Grâce à une étude détaillée de vos besoins, nos agents de nettoyage vous assurent une propreté irréprochable et pérenne. ',
      link: "#",
    },
    {
      icon: <Box />,
      title: "Hygiène 4D",
      description: 'Nous mettons notre savoir-faire et nos compétences pour répondre à vos besoins en matière de désinsectisation, désinfection, dératisation et déreptilisation. À votre écoute, nous analysons vos problèmes et nous vous apportons des solutions efficaces et durables.',
      link: "#",
    }
  ];

  const secondServices: HeadCardProps[] = [
    {
      icon: <Flower />,
      title: "Espaces Verts",
      description: "Nous avons à cœur de vous fournir des services de paysagiste qui allient tradition et modernité. Que ce soit pour l'aménagement de jardins, la création de bassins ou l'entretien de vos espaces verts, notre équipe est à votre écoute pour réaliser vos projets.",
      link: "#",
    },
    {
      icon: <Birdhouse />,
      title: "Froid et Climatisation",
      description: "EUREKA & CO, société spécialisée dans le froid et la climatisation, se charge de l'installation, de l'entretien et de la réparation de vos systèmes de climatisation.",
      link: "#",
    }
  ];

  return (
    <>
      {/* Hero section - déjà animée via FirstBanner */}
      <FirstBanner
    
        underImage="/images/home/banner.webp"
        title="La référence en matière de nettoyage professionnel des sols, des vitres en hauteur à l’eau pure et de la lutte anti nuisibles."  />

      {/* services presentation */}
      <motion.section
        ref={servicesRef}
        initial="hidden"
        animate={isServicesInView ? "visible" : "hidden"}
        variants={staggerContainer}
        className="relative flex flex-col justify-center items-center px-4 py-12 md:px-8 lg:px-12 overflow-hidden"
      >
        <motion.div variants={fadeInUp} className="mainColor mb-2 md:mb-4">
          <Slogan icon={<BriefcaseBusiness />} text={"Nos solutions"} variant={"primary"} />
        </motion.div>

      

        {/* Conteneur principal flex avec gestion responsive */}
        <motion.div
          variants={staggerContainer}
          className="relative flex flex-col lg:flex-row items-center justify-between gap-4"
        >
          {/* Colonne gauche - Cartes */}
          <motion.div
            variants={fadeInLeft}
            className="w-full lg:w-[30%] xl:w-[28%] space-y-6"
          >
            {firstServices.map((element, index) => (
              <motion.div
                key={index}
                whileHover={{
                  x: 10,
                  transition: { duration: 0.3, ease: "easeOut" }
                }}
              >
                <HeadCard
                  icon={element.icon}
                  title={element.title}
                  description={element.description}
                  className="borderMainColor"
                />
              </motion.div>
            ))}
          </motion.div>

          
          
            
              <motion.div
                variants={scaleIn}
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
            className="w-full max-w-md mx-auto "
              >
                <HeadCard
                  icon={<BriefcaseBusiness />}
                  title={"Centrale d'achat"}
                  description={"EUREKA & CO vous accompagne au quotidien pour vos achats récurrents (équipements de protection individuelle et collective, produits de nettoyage, équipements et consommables...), mais aussi dans tous vos projets d’entreprise."}
                  className="borderMainColor"
                />
              </motion.div>
        
       


          {/* Colonne droite - Cartes */}
          <motion.div
            variants={fadeInRight}
            className="w-full lg:w-[30%] xl:w-[28%] space-y-6"
          >
            {secondServices.map((element, index) => (
              <motion.div
                key={index}
                whileHover={{
                  x: -10,
                  transition: { duration: 0.3, ease: "easeOut" }
                }}
              >
                <HeadCard
                  icon={element.icon}
                  title={element.title}
                  description={element.description}
                  className="borderMainColor"
                />
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </motion.section>

      {/* why choosing us */}
      <motion.section
        ref={whyUsRef}
        initial="hidden"
        animate={isWhyUsInView ? "visible" : "hidden"}
        variants={staggerContainer}
        className="flex flex-col md:flex-row items-center bgMainColorOpacity w-full md:h-[450px] p-8 justify-center gap-24 overflow-hidden  md:px-12 lg:px-16" 
      >
        <motion.div
          initial={{ x: -200, opacity: 0 }}
          animate={isWhyUsInView ? { x: 0, opacity: 1 } : {}}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <motion.img
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
            src="/images/about/us.webp"
            alt=""
            className="rounded-lg object-cover w-full max-w-sm md:max-w-md lg:max-w-lg shadow-lg border border-slate-300"
          />
        </motion.div>

        <motion.div
          variants={fadeInRight}
          className="max-w-2xl text-center md:text-start relative z-10"
        >
          <motion.div variants={fadeInUp}>
            <Title text={"Qui"} variants={"extra"} className="mainColor mb-2" />
          </motion.div>
          <motion.div variants={fadeInUp}>
            <Title text={"Sommes nous ?"} variants={"large"} className="mb-4 md:mb-5" />
          </motion.div>
          <motion.p
            variants={fadeInUp}
            className="mb-5 text-slate-700 text-justify"
          >
            EUREKA & CO est une entreprise dédiée à fournir des services de qualité supérieure pour les entreprises et les particuliers. Nous sommes spécialisés dans le nettoyage professionnel, l'hygiène 4D (désinsectisation, désinfection, dératisation, déreptilisation), l'aménagement et la gestion des espaces verts ainsi que la maintenance des systèmes de climatisation. Notre équipe expérimentée s'engage à offrir un service fiable, efficace et respectueux de l'environnement pour garantir la satisfaction de nos partenaires.
          </motion.p>

          <motion.div
            variants={scaleIn}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button text={"Lire notre histoire"} to={"/apropos"} variant="primary" className="text-white" />
          </motion.div>
        </motion.div>
      </motion.section>

      {/* why do ours clients choice us */}
      <ClientChoice />
            
      <div className= "py-4 md:p-6 mt-8">
        <TrustedCompanies logos={logos} />
      </div>

      <div>
        <TestimonialsSection />
      </div>

    

      <motion.section
        ref={ctaRef}
        initial="hidden"
        animate={isCtaInView ? "visible" : "hidden"}
        variants={staggerContainer}
        className="text-center space-y-5 p-8"
      >
        <motion.div variants={fadeInUp}>
          <Title text={"Prêt pour un espace impeccable ?"} variants={"large"} />
        </motion.div>
        <motion.div
          variants={fadeInUp}
          className="text-slate-600 text-center max-w-xl mx-auto"
        >
        <DescriptionText text={"Contactez-nous dès aujourd'hui pour un devis gratuit et découvrez comment nous pouvons transformer vos espaces avec notre expertise."} className="max-w-xl mx-auto" />
        </motion.div>

        <motion.div
          variants={scaleIn}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Button text={"Votre devis gratuit en un clic"} to={"/contact"} variant="primary" />
        </motion.div>
      </motion.section>
    </>
  );
};