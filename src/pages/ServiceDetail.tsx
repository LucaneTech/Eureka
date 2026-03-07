import { Link, useLocation } from "react-router-dom";
import { Title } from "../components/font/Title";
import { CircleArrowLeft } from "lucide-react";

const ServiceDetail = () => {
  const location = useLocation();
  const option = location.state?.option;

  if (!option) {
    return <p className="text-center mt-10">Aucun service sélectionné.</p>;
  }



  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
    {/* Image avec meilleur ratio et gestion responsive */}
    <div className="relative w-full h-48 sm:h-64 md:h-80 rounded-xl overflow-hidden shadow-lg mb-6">
        <img 
            src={option.image} 
            alt={option.label}
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
        />
    </div>

    {/* Titre avec meilleure hiérarchie typographique */}
    <Title 
        className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4 tracking-tight" 
        text={option.label} 
        variants={"large"} 
    />

    {/* Description avec meilleure lisibilité */}
    <p className="text-base sm:text-lg text-gray-600 mb-6 leading-relaxed border-l-4 border-blue-500 pl-4 italic">
        {option.description}
    </p>

    {/* Détails avec meilleure structure et espacement */}
    <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-4">
        {typeof option.details === 'string' ? (
            <div className="whitespace-pre-line">
                {option.details}
            </div>
        ) : (
            option.details
        )}
    </div>

    {/* Option: Ajout d'un bouton de retour pour meilleure UX */}
    <div className="mt-8 pt-4 border-t border-gray-200">
        <Link 
            to="/solutions" 
            className="inline-flex items-center mainColor hover:text-blue-800 transition-colors duration-200"
        >
            <CircleArrowLeft className="w-4 h-4 mr-2" />
            Retour aux services
        </Link>
    </div>
</div>
  );
};

export default ServiceDetail;