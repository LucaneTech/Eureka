import type React from "react";
import { useRef, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import { Birdhouse, Book, BookOpenCheck, Box, Brain, BriefcaseBusiness, BrushCleaning, Flower, Handshake, SparklesIcon, Twitch, Zap } from "lucide-react";
import { FirstBanner } from "../components/banners/Firstbanner";
import { Slogan } from "../components/ui/Slogan";
import { Title } from "../components/font/Title";
import type { HeadCardProps } from "../components/ui/HeadCard";
import HeadCard from "../components/ui/HeadCard";
import { Button } from "../components/ui/Button";
import type { TrustCardProps } from "../components/ui/TrustCard";
import TrustCard from "../components/ui/TrustCard";
import { DescriptionText } from "../components/font/DescriptionText";

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
      iconStyle: "secondary",
      title: "Savoir-faire et expertise",
      titleColor: 'secondary',
      description: "Formation continue, personnel expérimenté et maîtrise des techniques 4D pour un service professionnel.",
      cardStyle: "secondary"
    },
    {
      icon: <Zap />,
      iconStyle: "secondary",
      title: "Réactivité et disponibilité",
      titleColor: 'secondary',
      description: "Interventions rapides et flexibilité horaire pour s'adapter à vos besoins, y compris en urgence.",
      cardStyle: "secondary"
    },
    {
      icon: <BookOpenCheck />,
      iconStyle: "secondary",
      title: "Qualité et confiance",
      titleColor: 'secondary',
      description: "Équipements performants et relation transparente avec nos clients, gagnée par notre efficacité.",
      cardStyle: "secondary"
    },
    {
      icon: <Book />,
      iconStyle: "secondary",
      title: "Savoir-faire et expertise",
      titleColor: 'secondary',
      description: "Formation continue, personnel expérimenté et maîtrise des techniques 4D pour un service professionnel.",
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
        <Slogan icon={<Handshake />} text={"Choix de nos clients"} variant={"secondary"} className="secondaryColor mb-6" />
        <Title text={"Pourquoi nos clients nous font confiance ?"} variants={"large"} />
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
  image: string;
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

// Données par défaut
const defaultTestimonials: Testimonial[] = [
  {
    id: 1,
    description: "PrebuiltUI helped us reduce build time drastically. The components feel production ready and consistent across the product.",
    image: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=200",
    name: "Alex Turner",
    company: "Vercel"
  },
  {
    id: 2,
    description: "We shipped our MVP weeks earlier than planned. PrebuiltUI removed a huge amount of repetitive UI work.",
    image: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=200",
    name: "Harry Peter",
    company: "Amazon"
  },
  {
    id: 3,
    description: "PrebuiltUI strikes the right balance between flexibility and consistency. It feels like a system built by real product teams.",
    image: "https://images.unsplash.com/photo-1527980965255-d3b416303d12?w=200&auto=format&fit=crop&q=60",
    name: "Jason Kim",
    company: "Flipkart"
  },
  {
    id: 4,
    description: "The component structure and tokens system make scaling design incredibly easy. Highly recommended.",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=100&h=100&auto=format&fit=crop",
    name: "Sofia Martinez",
    company: "Linear"
  },
  {
    id: 5,
    description: "PrebuiltUI allows me to focus on building features instead of fighting CSS. Everything looks premium right out of the box.",
    image: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=200&auto=format&fit=crop&q=60",
    name: "Alex Johnson",
    company: "Microsoft"
  },
  {
    id: 6,
    description: "If you're using Tailwind CSS, PrebuiltUI is a must have. It dramatically speeds up development while keeping the UI clean.",
    image: "https://images.unsplash.com/photo-1701615004837-40d8573b6652?q=80&w=200",
    name: "Emily Karter",
    company: "Stripe"
  },
  {
    id: 7,
    description: "PrebuiltUI strikes the right balance between flexibility and consistency. It feels like a system built by real product teams.",
    image: "https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/userImage/userImage1.png",
    name: "Christofer Levin",
    company: "Deloitte"
  },
  {
    id: 8,
    description: "PrebuiltUI helped us reduce build time drastically. The components feel production ready and consistent across the product.",
    image: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=200",
    name: "Alex Turner",
    company: "Vercel"
  },
  {
    id: 9,
    description: "We shipped our MVP weeks earlier than planned. PrebuiltUI removed a huge amount of repetitive UI work.",
    image: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=200",
    name: "Harry Peter",
    company: "Amazon"
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
        <motion.img
          whileHover={{ scale: 1.1 }}
          src={testimonial.image}
          alt={testimonial.name}
          className="size-9 rounded-full border border-slate-800 object-cover"
          loading="lazy"
        />
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
  subtitle = "Real stories from designers, developers, and product teams using PrebuiltUI to ship faster and with confidence.",
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
  ];

  const secondServices: HeadCardProps[] = [
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
  ];

  return (
    <>
      {/* Hero section - déjà animée via FirstBanner */}
      <FirstBanner
        sloganIcon={<SparklesIcon className="w-4 h-4" />}
        slogan="Services de qualité"
        title="Nettoyage Professionnel Rapide,"
        addTitle="Sécurisé & Fiable"
        addTitleStyle="mainColor"
        description="Découvrez notre nouvelle gamme de produits design, conçus pour simplifier votre vie tout en ajoutant une touche d'élégance."
        textBtn="Contactez-nous !"
        variantBtn="primary"
        underImage="under.jpg"
        rightImage="/images/home/hero.png"
        link="/nouvelle-collection"
        overlayColor="#000000"
        overlayOpacity={90}
        sloganVariant="primary"
        link2={"#"}
        secondButton
        textBtn2="Découvrez nos solutions"
        variantBtn2="secondary"
      />

      {/* services presentation */}
      <motion.section
        ref={servicesRef}
        initial="hidden"
        animate={isServicesInView ? "visible" : "hidden"}
        variants={staggerContainer}
        className="relative flex flex-col justify-center items-center px-4 py-12 md:px-8 lg:px-12 overflow-hidden"
      >
        <motion.div variants={fadeInUp} className="mainColor mb-2 md:mb-4">
          <Slogan icon={<BriefcaseBusiness />} text={"Nos services"} variant={"primary"} />
        </motion.div>

        <motion.div variants={fadeInUp}>
          <Title text={"Nos Services de Nettoyage Experts"} variants={"large"} className="mb-4 md:mb-8 py-2 text-center" />
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

          {/* Zone centrale avec image */}
          <motion.div
            variants={scaleIn}
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
            className="relative w-full max-w-md max-h-[550px] mx-auto aspect-[4/5] lg:aspect-[3/4] bgMainColor rounded-md shadow-lg overflow-hidden"
          >
            <motion.img
              initial={{ y: 100, opacity: 0 }}
              animate={isServicesInView ? { y: 0, opacity: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
              src="/images/home/employee.png"
              alt="image d'un employer de nettoyage eureka & co"
              className="absolute bottom-0 left-0 w-auto h-full max-h-[400px] object-cover drop-shadow-2xl"
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
        className="relative flex flex-col-reverse md:flex-row items-center bgMainColorOpacity w-full md:h-[450px] p-8 justify-between gap-65 sm:gap-55 md:gap-30 overflow-hidden"
      >
        <motion.div
          initial={{ x: -200, opacity: 0 }}
          animate={isWhyUsInView ? { x: 0, opacity: 1 } : {}}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <motion.img
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
            src="/images/home/whyus.png"
            alt=""
            className="absolute bottom-0 left-0 w-auto z-0"
          />
        </motion.div>

        <motion.div
          variants={fadeInRight}
          className="max-w-[400px] text-center md:text-start relative z-10"
        >
          <motion.div variants={fadeInUp}>
            <Title text={"Qui"} variants={"extra"} className="mainColor mb-2" />
          </motion.div>
          <motion.div variants={fadeInUp}>
            <Title text={"Sommes nous ?"} variants={"large"} className="mb-4 md:mb-5" />
          </motion.div>
          <motion.p
            variants={fadeInUp}
            className="mb-5 text-slate-700"
          >
            Expert en nettoyage, espaces verts et services 4D, Eureka & Co s'engage pour votre bien-être et la propreté de vos espaces depuis [année de création]. Plus qu'une entreprise de services, nous sommes votre partenaire confiance.
          </motion.p>

          <motion.div
            variants={scaleIn}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button text={"Lire notre histoire"} to={"/a-propos"} variant="primary" className="text-white" />
          </motion.div>
        </motion.div>
      </motion.section>

      {/* why do ours clients choice us */}
      <ClientChoice />

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
        <DescriptionText text={"Contactez-nous dès aujourd'hui pour un devis gratuit et découvrez comment nous pouvons transformer vos espaces avec notre expertise en nettoyage et entretien."} className="max-w-xl mx-auto" />
        </motion.div>

        <motion.div
          variants={scaleIn}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Button text={"Demander un devis gratuit"} to={"/contact"} variant="primary" />
        </motion.div>
      </motion.section>
    </>
  );
};