import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import type { Variants } from "framer-motion";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { Title } from "../font/Title";

// (CheckIcon removed as it was unused)

// Animation variants
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
    hidden: { y: 30, opacity: 0 },
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

// Composant Google Maps
const GoogleMap: React.FC = () => {
    return (
        <div className="w-full h-full min-h-[400px] lg:min-h-[600px] rounded-2xl overflow-hidden shadow-2xl">
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d106376.56016868557!2d-7.66944985!3d33.5731104!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xda7cd4778aa113b%3A0xb06c1d84f310fd3!2sCasablanca!5e0!3m2!1sfr!2sma!4v1700000000000!5m2!1sfr!2sma"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Google Maps - Notre localisation"
                className="w-full h-full object-cover"
            />
        </div>
    );
};

const ContactSection: React.FC = () => {
    const sectionRef = useRef<HTMLElement>(null);
    const isInView = useInView(sectionRef, { once: true, margin: "-100px" });
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: ""
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Logique d'envoi du formulaire
        console.log("Formulaire soumis:", formData);
    };

    return (
        <motion.section
            ref={sectionRef}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={containerVariants}
            className="relative bg-gradient-to-b from-white to-gray-50 py-16 md:py-24 overflow-hidden"
        >
            {/* Éléments décoratifs */}
            <motion.div
                className="absolute -top-40 -right-40 w-80 h-80 bg-mainColor/5 rounded-full blur-3xl"
                animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.3, 0.5, 0.3],
                }}
                transition={{
                    duration: 10,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
            />
            
            <motion.div
                className="absolute -bottom-40 -left-40 w-96 h-96 bg-secondaryColor/5 rounded-full blur-3xl"
                animate={{
                    scale: [1, 1.3, 1],
                    opacity: [0.2, 0.4, 0.2],
                }}
                transition={{
                    duration: 12,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
            />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                {/* En-tête de section */}
                <motion.div 
                    variants={itemVariants}
                    className="text-center mb-12 lg:mb-16"
                >
                   <Title text={"Contactez-nous"} variants={"extra"} className="mb-4 "/>
                    
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        Nous sommes là pour répondre à toutes vos questions et vous accompagner dans vos projets de nettoyage professionnel.
                    </p>
                </motion.div>

                {/* Grille principale avec Maps et formulaire */}
                <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-stretch">
                    
                    {/* Colonne gauche - Google Maps */}
                    <motion.div
                        variants={fadeInScale}
                        className="relative group h-full"
                    >
                        <div className="absolute -inset-1 bg-gradient-to-r from-mainColor to-secondaryColor rounded-3xl blur opacity-25 group-hover:opacity-50 transition duration-1000" />
                        <div className="relative h-full">
                            <GoogleMap />
                            
                            {/* Overlay d'information sur la carte */}
                            <motion.div 
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.5 }}
                                className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-sm rounded-xl p-4 shadow-xl borderMainColor"
                            >
                                <div className="flex items-center gap-3 text-gray-700">
                                    <MapPin className="mainColor shrink-0" size={20} />
                                    <span className="text-sm font-medium">Pointe-Noir, Congo-Brazzaville</span>
                                </div>
                            </motion.div>
                        </div>
                    </motion.div>

                    {/* Colonne droite - Formulaire et infos */}
                    <motion.div
                        variants={itemVariants}
                        className="space-y-6 lg:space-y-8"
                    >
                        {/* Carte de contact */}
                        <motion.div 
                            variants={fadeInScale}
                            className="bg-white rounded-2xl shadow-xl p-6 md:p-8 border border-gray-100"
                        >
                            <Title text={"Parlons de votre projet"} variants={"large"} className = "mb-4"/>

                            <form onSubmit={handleSubmit} className="space-y-5">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        Nom complet
                                    </label>
                                    <input
                                        type="text"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 rounded-lg borderMainColor focus:border-mainColor focus:ring-2 focus:ring-mainColor/20 transition-all outline-none"
                                        placeholder="Votre nom"
                                        required
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        Email
                                    </label>
                                    <input
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 rounded-lg borderMainColor focus:border-mainColor focus:ring-2 focus:ring-mainColor/20 transition-all outline-none"
                                        placeholder="votre@email.com"
                                        required
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        Message
                                    </label>
                                    <textarea
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        rows={4}
                                        className="w-full px-4 py-3 rounded-lg borderMainColor focus:border-mainColor focus:ring-2 focus:ring-mainColor/20 transition-all outline-none resize-none"
                                        placeholder="Décrivez votre besoin..."
                                        required
                                    />
                                </div>

                                <motion.button
                                    type="submit"
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                    className="w-full  bgMainColorOpacity mainColor py-3.5 rounded-lg borderMainColor font-semibold hover:shadow-lg transition-all duration-300"
                                >
                                    Envoyer le message
                                </motion.button>
                            </form>
                        </motion.div>

                        {/* Informations de contact supplémentaires */}
                        <motion.div 
                            variants={itemVariants}
                            className="grid grid-cols-1 sm:grid-cols-3 gap-4"
                        >
                            {[
                                { icon: Phone, text: "+212 781 34 36 42", label: "Appelez-nous" },
                                { icon: Mail, text: "contact@eureka-co.ma", label: "Email" },
                                { icon: Clock, text: "Lun-Ven 9h-18h", label: "Horaires" }
                            ].map((item, index) => (
                                <motion.div
                                    key={index}
                                    whileHover={{ y: -5 }}
                                    className="bg-white rounded-xl p-4 shadow-md border borderMainColor text-center group cursor-pointer"
                                >
                                    <div className="flex justify-center mb-2">
                                        <div className="p-2 mainColor bgMainColorOpacity borderMainColor  rounded-full  transition-colors">
                                            <item.icon className="text-mainColor" size={20} />
                                        </div>
                                    </div>
                                    <p className="text-xs text-gray-500 mb-1">{item.label}</p>
                                    <p className="text-sm font-semibold text-gray-800">{item.text}</p>
                                </motion.div>
                            ))}
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </motion.section>
    );
};

export default ContactSection;