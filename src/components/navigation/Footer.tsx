import { Link } from "react-router-dom";

export const Footer = () => {
  const logo = ""; // Ajoutez l'URL de votre logo Eureka ici si disponible

  return (
    <footer className=" w-full text-sm text-slate-500 pt-10 bgLigthColor ">
      {/* GRID MAIN */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-14 px-6 md:px-16 lg:px-24 xl:px-32">
        {/* LOGO & DESCRIPTION */}
        <div className="sm:col-span-2 lg:col-span-1">
          <Link to="/">
            {logo ? (
              <img src={logo} alt="logo eureka" />
            ) : (
              <span>
                Eureka & Co
              </span>
            )}
          </Link>

          <p className="text-sm leading-7 mt-6">
            Eureka & Co offre des services professionnels de nettoyage et d'entretien pour vos bureaux, parties communes, chantiers et espaces verts. Votre partenaire propreté au Maroc pour des locaux impeccables.
          </p>
          {/* Social Links */}
        </div>

        <div className="flex flex-col lg:items-center lg:justify-center">
          <div className="flex flex-col text-sm space-y-2.5">
            <h2 className="font-bold mb-5 main-color text-lg">Liens rapides</h2>
            <Link className="hover:text-slate-600 transition" to={'/'}>
              Accueil
            </Link>
            <Link
              className="hover:text-slate-600 transition flex items-center gap-2"
              to="/services"
            >
              Services
            </Link>
            <Link className="hover:text-slate-600 transition" to="/apropos">
              A propos
            </Link>
            <Link className="hover:text-slate-600 transition" to="/contact">
              Contact
            </Link>
          </div>
        </div>
        <div className="flex flex-col lg:items-center lg:justify-center">
          <div className="flex flex-col text-sm space-y-2.5">
            <h2 className="font-bold mb-5 main-color text-lg">Services</h2>
            <a className="hover:text-slate-600 transition" href="/services#bureaux">
              Nettoyage bureaux
            </a>
            <a
              className="hover:text-slate-600 transition flex items-center gap-2"
              href="/services#communes"
            >
              Parties communes
            </a>
            <a className="hover:text-slate-600 transition" href="/services#chantiers">
              Nettoyage chantiers
            </a>
            <a className="hover:text-slate-600 transition" href="/services#espacesverts">
              Espaces verts
            </a>
            <a className="hover:text-slate-600 transition" href="/services#desinfection">
              Désinfection
            </a>
          </div>
        </div>

        {/* CONTACTS */}
        <div>
          <h2 className="font-bold main-color text-lg mb-5">
            Contacts
          </h2>
          <div className="text-sm space-y-6 max-w-sm">
            <p>
              Obtenez un devis gratuit ou planifiez votre intervention nettoyage.
            </p>
            <p className="flex items-center gap-2">
              <a href="tel:+212781343642">(+212) 781 34 36 42</a>
            </p>
            <p className="flex items-center gap-2">
              <a href="mailto:contact@eureka-co.ma">contact@eureka-co.ma</a>
            </p>
          </div>
        </div>
      </div>

      {/* COPYRIGHT */}
      <div className="flex bgMainColor mt-6 border-slate-200 py-4 justify-center text-center items-center flex-col md:flex-row gap-4">
        <p className="text-gray-600 dark:text-white xl:text-center">
          Copyright © {new Date().getFullYear()}{" "}
          <a href="/" className=" font-semibold">
            Eureka & Co
          </a>{" "}
          — Tous droits réservés.
        </p>
      </div>


    </footer>
  );
};
