import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import type { Variants } from "framer-motion";
import { Phone, Mail, MapPin, Clock, Send } from "lucide-react";
import { Title } from "../font/Title";

// Types pour le formulaire
interface FormData {
    name: string;
    email: string;
    phone?: string;
    message: string;
}

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

// Configuration WhatsApp
const WHATSAPP_CONFIG = {
    // Numéro du propriétaire au format international (sans espaces ni +)
    ownerNumber: "242055648080", // Enlevé l'espace au début
    // ownerNumber: "242067554040",
    // Message par défaut si jamais
    defaultMessage: "Bonjour, je vous contacte depuis votre site web."
};

// Composant Google Maps
const GoogleMap: React.FC = () => {
    return (
        <div className="w-full h-full min-h-[400px] lg:min-h-[600px] rounded-2xl overflow-hidden shadow-2xl">
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3975.7812740009667!2d11.860915174979993!3d-4.807578095167855!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zNMKwNDgnMjcuMyJTIDExwrA1MSc0OC42IkU!5e0!3m2!1sfr!2sma!4v1773445065288!5m2!1sfr!2sma"
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
    
    // État du formulaire
    const [formData, setFormData] = useState<FormData>({
        name: "",
        email: "",
        phone: "",
        message: ""
    });

    // État pour gérer le statut d'envoi
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState<{
        type: 'success' | 'error' | null;
        message: string;
    }>({ type: null, message: '' });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
        
        // Réinitialiser le statut quand l'utilisateur modifie le formulaire
        if (submitStatus.type) {
            setSubmitStatus({ type: null, message: '' });
        }
    };

    // Fonction pour formater le message WhatsApp
    const formatWhatsAppMessage = (data: FormData): string => {
        const currentDate = new Date().toLocaleString('fr-FR', {
            day: '2-digit',
            month: '2-digit',
            year: 'numeric',
            hour: '2-digit',
            minute: '2-digit'
        });

        // Log pour vérifier les données avant envoi
        console.log("Données du formulaire à envoyer:", {
            nom: data.name,
            email: data.email,
            telephone: data.phone,
            message: data.message
        });

        // Construction du message formaté avec des vérifications
        const messageParts = [
            "*NOUVEAU CONTACT DEPUIS LE SITE WEB*",
            `📅 ${currentDate}`,
            "━━━━━━━━━━━━━━━━━━━",
            `👤 *Nom:* ${data.name?.trim() || "Non spécifié"}`,
            `📧 *Email:* ${data.email?.trim() || "Non spécifié"}`,
            `📞 *Téléphone:* ${data.phone?.trim() || "Non spécifié"}`,
            "━━━━━━━━━━━━━━━━━━━",
            `💬 *Message:*`,
            data.message?.trim() || "Pas de message",
            "━━━━━━━━━━━━━━━━━━━",
            "🌐 Envoyé via www.eureka-co.net"
        ];

        // Encodage correct pour WhatsApp
        return encodeURIComponent(messageParts.join('\n'));
    };

    // Validation du formulaire
    const validateForm = (): boolean => {
        if (!formData.name?.trim()) {
            setSubmitStatus({
                type: 'error',
                message: 'Veuillez entrer votre nom'
            });
            return false;
        }
        if (!formData.email?.trim()) {
            setSubmitStatus({
                type: 'error',
                message: 'Veuillez entrer votre email'
            });
            return false;
        }
        if (!formData.message?.trim()) {
            setSubmitStatus({
                type: 'error',
                message: 'Veuillez entrer votre message'
            });
            return false;
        }
        
        // Validation email simple
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(formData.email)) {
            setSubmitStatus({
                type: 'error',
                message: 'Veuillez entrer un email valide'
            });
            return false;
        }

        return true;
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        
        // Validation
        if (!validateForm()) {
            return;
        }

        setIsSubmitting(true);
        setSubmitStatus({ type: null, message: '' });

        try {
            // Créer une copie des données pour éviter les références
            const submissionData = {
                name: formData.name.trim(),
                email: formData.email.trim(),
                phone: formData.phone?.trim() || "",
                message: formData.message.trim()
            };

            // Log avant envoi
            console.log("Envoi des données:", submissionData);
            
            // Formater le message pour WhatsApp
            const encodedMessage = formatWhatsAppMessage(submissionData);
            
            // Nettoyer le numéro (garder seulement les chiffres)
            const cleanNumber = WHATSAPP_CONFIG.ownerNumber.replace(/\D/g, '');
            
            // Créer l'URL WhatsApp
            const whatsappUrl = `https://wa.me/${cleanNumber}?text=${encodedMessage}`;
            
            // Ouvrir WhatsApp dans un nouvel onglet
            window.open(whatsappUrl, '_blank');
            
            // Succès
            setSubmitStatus({
                type: 'success',
                message: 'Message préparé ! WhatsApp va s\'ouvrir avec vos informations.'
            });

            // Réinitialiser le formulaire après 3 secondes
            setTimeout(() => {
                setFormData({
                    name: "",
                    email: "",
                    phone: "",
                    message: ""
                });
                setSubmitStatus({ type: null, message: '' });
            }, 3000);

        } catch (error) {
            console.error("Erreur lors de l'envoi:", error);
            setSubmitStatus({
                type: 'error',
                message: 'Une erreur est survenue. Veuillez réessayer.'
            });
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <motion.section
            ref={sectionRef}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={containerVariants}
            className="relative py-16 md:py-24 overflow-hidden"
        >
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
                    <Title text="Contactez-nous" variants="extra" className="mb-4"/>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        Nous sommes là pour répondre à toutes vos questions et vous accompagner dans vos projets de nettoyage professionnel, hygiène 4D, espaces verts, froid et climatisation.
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
                            <Title text="Parlons de votre projet" variants="large" className="mb-4"/>

                            {/* Message de statut */}
                            {submitStatus.type && (
                                <motion.div
                                    initial={{ opacity: 0, y: -10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    className={`mb-4 p-3 rounded-lg ${
                                        submitStatus.type === 'success' 
                                            ? 'bg-green-50 text-green-700 border border-green-200' 
                                            : 'bg-red-50 text-red-700 border border-red-200'
                                    }`}
                                >
                                    {submitStatus.message}
                                </motion.div>
                            )}

                            <form onSubmit={handleSubmit} className="space-y-5">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        Nom complet <span className="text-red-500">*</span>
                                    </label>
                                    <input
                                        type="text"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 rounded-lg borderMainColor focus:border-mainColor focus:ring-2 focus:ring-mainColor/20 transition-all outline-none"
                                        placeholder="Votre nom"
                                        required
                                        disabled={isSubmitting}
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        Email <span className="text-red-500">*</span>
                                    </label>
                                    <input
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 rounded-lg borderMainColor focus:border-mainColor focus:ring-2 focus:ring-mainColor/20 transition-all outline-none"
                                        placeholder="votre@email.com"
                                        required
                                        disabled={isSubmitting}
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        Téléphone (optionnel)
                                    </label>
                                    <input
                                        type="tel"
                                        name="phone"
                                        value={formData.phone}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 rounded-lg borderMainColor focus:border-mainColor focus:ring-2 focus:ring-mainColor/20 transition-all outline-none"
                                        placeholder="Votre numéro de téléphone"
                                        disabled={isSubmitting}
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        Message <span className="text-red-500">*</span>
                                    </label>
                                    <textarea
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        rows={4}
                                        className="w-full px-4 py-3 rounded-lg borderMainColor focus:border-mainColor focus:ring-2 focus:ring-mainColor/20 transition-all outline-none resize-none"
                                        placeholder="Décrivez votre besoin..."
                                        required
                                        disabled={isSubmitting}
                                    />
                                </div>

                                <motion.button
                                    type="submit"
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                    disabled={isSubmitting}
                                    className={`w-full py-3.5 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center gap-2 ${
                                        isSubmitting 
                                            ? 'bg-gray-400 cursor-not-allowed' 
                                            : 'bgMainColor text-white hover:bg-mainColor/90 hover:shadow-lg'
                                    }`}
                                >
                                    {isSubmitting ? (
                                        <>
                                            <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                                            <span>Préparation...</span>
                                        </>
                                    ) : (
                                        <>
                                            <Send size={18} />
                                            <span>Envoyer via WhatsApp</span>
                                        </>
                                    )}
                                </motion.button>

                                <p className="text-xs text-gray-500 text-center mt-2">
                                    En cliquant sur envoyer, WhatsApp s'ouvrira avec votre message pré-rempli contenant vos informations.
                                </p>
                            </form>
                        </motion.div>

                        {/* Informations de contact supplémentaires */}
                        <motion.div 
                            variants={itemVariants}
                            className="grid grid-cols-1 sm:grid-cols-3 gap-4"
                        >
                            {[
                                { icon: Phone, text: "+242 05 564 80 80", label: "Appelez-nous", href: "tel:+242055648080" },
                                { icon: Mail, text: "contact@eureka-co.net", label: "Email", href: "mailto:contact@eureka-co.net" },
                                { icon: Clock, text: "24h/24, 7jours/7", label: "Intervention", href: "#" }
                            ].map((item, index) => (
                                <motion.a
                                    key={index}
                                    href={item.href}
                                    whileHover={{ y: -5 }}
                                    className="bg-white rounded-xl p-4 shadow-md border borderMainColor text-center group cursor-pointer block"
                                >
                                    <div className="flex justify-center mb-2">
                                        <div className="p-2 bgMainColorOpacity rounded-full transition-colors borderMainColor">
                                            <item.icon className="mainColor" size={20} />
                                        </div>
                                    </div>
                                    <p className="text-xs text-gray-500 mb-1">{item.label}</p>
                                    <p className="text-sm font-semibold text-gray-800">{item.text}</p>
                                </motion.a>
                            ))}
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </motion.section>
    );
};

export default ContactSection;