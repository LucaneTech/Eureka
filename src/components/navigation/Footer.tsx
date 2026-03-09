import { Link } from "react-router-dom";
import { motion} from "framer-motion";
import { Phone, Mail, MapPin, ChevronRight, Globe } from "lucide-react";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  const linkHoverVariants = {
    hover: {
      x: 5,
      color: "#05AFF2",
      transition: {
        duration: 0.2
      }
    }
  };

  return (
    <motion.footer 
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      variants={containerVariants}
      className="w-full text-sm text-slate-600 pt-12 bg-gradient-to-b from-slate-50 to-white "
    >
      {/* GRID MAIN - Optimisé pour tous les écrans */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 md:gap-10 lg:gap-12 px-6 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-24 max-w-7xl mx-auto">
        
        {/* LOGO & DESCRIPTION - Colonne plus large sur mobile */}
        <motion.div 
          variants={itemVariants}
          className="lg:col-span-4 space-y-4 md:space-y-6"
        >
          <Link to="/" className="inline-block">
            <motion.img
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
              src="eureka.png"
              alt="Logo Eureka & Co"
              className="w-24 sm:w-28 md:w-32 lg:w-36 h-auto object-contain"
              loading="lazy"
            />
          </Link>

          <p className="text-sm leading-6 md:leading-7 text-slate-600 max-w-md">
           Eureka & Co est une entreprise de droit congolais spécialisée dans les services de nettoyage et entretien professionnel, hygiène 4D (désinsectisation, désinfection, dératisation, déreptilisation), aménagement et entretien des espaces verts ainsi que la maintenance des systèmes de climatisation.
          </p>

          {/* Badge de localisation - Ajouté pour plus de crédibilité */}
          <motion.div 
            variants={itemVariants}
            className="flex items-center gap-2 text-slate-500"
          >
            <MapPin size={16} className="text-mainColor" />
            <span className="text-xs sm:text-sm">Pointe-Noir / Congo</span>
          </motion.div>
        </motion.div>

        {/* LIENS RAPIDES - Centré sur desktop */}
        <motion.div 
          variants={itemVariants}
          className="lg:col-span-2 flex flex-col"
        >
          <h2 className="font-bold text-mainColor text-base sm:text-lg mb-4 md:mb-6 relative inline-block">
            Liens rapides
            <motion.span 
              className="absolute -bottom-1 left-0 w-12 h-0.5 bg-mainColor"
              initial={{ width: 0 }}
              whileInView={{ width: 48 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            />
          </h2>
          <div className="flex flex-col space-y-3">
            {[
              { to: "/", label: "Accueil" },
              { to: "/solutions", label: "Nos solutions" },
              { to: "/apropos", label: "À propos" },
               { to: "/blog", label: "Blog" },
              { to: "/contact", label: "Contact" }
            ].map((link) => (
              <motion.div
                key={link.to}
                variants={linkHoverVariants}
                whileHover="hover"
                className="flex items-center gap-1"
              >
                <ChevronRight size={14} className="text-mainColor opacity-0 group-hover:opacity-100" />
                <Link 
                  to={link.to}
                  className="hover:text-mainColor transition-colors duration-200 text-slate-600"
                >
                  {link.label}
                </Link>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* SERVICES - Centré sur desktop */}
        <motion.div 
          variants={itemVariants}
          className="lg:col-span-3 flex flex-col"
        >
          <h2 className="font-bold text-mainColor text-base sm:text-lg mb-4 md:mb-6 relative inline-block">
            Nos solutions
            <motion.span 
              className="absolute -bottom-1 left-0 w-12 h-0.5 bg-mainColor"
              initial={{ width: 0 }}
              whileInView={{ width: 48 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            />
          </h2>
          <div className="flex flex-col gap-x-4 gap-y-3">
            {[
              { hash: "Nettoyage", label: "Nettoyage & Propreté" },
              { hash: "Hygiène", label: "Hygiène 4D" },
              { hash: "Espaces", label: "Espaces Verts" },
              { hash: "Froid", label: "Froid et Climatisation" },
              { hash: "Centrale", label: "Centrale d'achat" },
            ].map((service) => (
              <motion.a
                key={service.hash}
                variants={linkHoverVariants}
                whileHover="hover"
                href={`#`} 
                className="hover:text-mainColor transition-colors duration-200 text-slate-600 text-sm"
              >
                {service.label}
              </motion.a>
            ))}
          </div>
        </motion.div>

        {/* CONTACTS */}
        <motion.div 
          variants={itemVariants}
          className="lg:col-span-3"
        >
          <h2 className="font-bold text-mainColor text-base sm:text-lg mb-4 md:mb-6 relative inline-block">
            Contacts
            <motion.span 
              className="absolute -bottom-1 left-0 w-12 h-0.5 bg-mainColor"
              initial={{ width: 0 }}
              whileInView={{ width: 48 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            />
          </h2>
          <div className="space-y-4">
            <p className="text-slate-600 text-sm leading-relaxed">
              Obtenez un devis gratuit ou planifiez votre intervention.
            </p>
            
            <motion.div 
              variants={itemVariants}
              className="space-y-3"
            >
              <motion.a
                whileHover={{ x: 5, color: "#05AFF2" }}
                href="tel:+212781343642"
                className="flex items-center gap-2 text-slate-600 hover:text-mainColor transition-colors duration-200 group"
              >
                <span className="p-2 bg-mainColor/10 rounded-full group-hover:bg-mainColor/20 transition-colors">
                  <Phone size={16} className="text-mainColor" />
                </span>
                <span>+242 05 564 80 80/06 755 40 40</span>
              </motion.a>
              
              <motion.a
                whileHover={{ x: 5, color: "#05AFF2" }}
                href="mailto:contact@eureka-co.net"
                className="flex items-center gap-2 text-slate-600 hover:text-mainColor transition-colors duration-200 group"
              >
                <span className="p-2 bg-mainColor/10 rounded-full group-hover:bg-mainColor/20 transition-colors">
                  <Mail size={16} className="text-mainColor" />
                </span>
                <span className="text-sm break-all">contact@eureka-co.net</span>
              </motion.a>

               <motion.a
                whileHover={{ x: 5, color: "#05AFF2" }}
                href="mailto:contact@eureka-co.net"
                className="flex items-center gap-2 text-slate-600 hover:text-mainColor transition-colors duration-200 group"
              >
                <span className="p-2 bg-mainColor/10 rounded-full group-hover:bg-mainColor/20 transition-colors">
                  <Globe  size={16} className="text-mainColor"/>
                </span>
                <span className="text-sm break-all">https://www.eureka-co.net</span>
              </motion.a>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* COPYRIGHT - Amélioré avec animation */}
      <motion.div 
        variants={itemVariants}
        className="mt-10 md:mt-12 border-t border-slate-200 bgMainColor text-white"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 py-4 md:py-5">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-3 text-xs sm:text-sm ">
            <motion.p 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="text-center sm:text-left"
            >
              Copyright © {currentYear}{" "}
              <a 
                href="/" 
                className="font-semibold text-mainColor hover:underline transition-all"
              >
                Eureka & Co
              </a>{" "}
              — Tous droits réservés.
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.7 }}
              className="hidden md:flex items-center gap-4 text-xs"
            >
              <Link to="#" className="hover:text-mainColor transition-colors">
                Mentions légales
              </Link>
              <span className="text-slate-300">|</span>
              <Link to="#" className="hover:text-mainColor transition-colors">
                Confidentialité
              </Link>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </motion.footer>
  );
};