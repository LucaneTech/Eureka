import { Facebook, Instagram, MapPin, MessageCircle, Send , X } from 'lucide-react';
import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../ui/Button';

const Header: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  // Gérer le clic en dehors du menu
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        closeMobileMenu();
      }
    };

    if (isMobileMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isMobileMenuOpen]);

  const socialIcons = [
    {
      Icon: <MessageCircle className='w-5 h-5'/>,
      link: "#"
    },
    {
      Icon: <Facebook className='w-5 h-5'/>,
      link: "#"
    },
    {
      Icon: <Instagram className='w-5 h-5'/>,
      link: "#"
    },
  ];

  return (
    <div className="text-xs text-white w-full">
      {/* Banner promotionnel */}
      <div className="hidden md:flex flex-row justify-around items-center py-2 bgMainColor">
        {/* contact */}
        <div className='flex flex-col text-md'>
          <span className='inline-flex gap-2 '>
            <MapPin className='w-5 h-5'/>
            <p>325 avenue du Général Alfred RAÜL, Pointe-Noire / Congo</p>
          </span>
          <span className='inline-flex gap-2'>
            <Send  className='w-5 h-5' />
            <p>contact@eureka-co.net</p>
          </span>
        </div>

        <p className='text-md font-medium'>Programmez un rendez-vous avec notre équipe dès maintenant!!</p>

        {/* social icons */}
        <div className='inline-flex gap-4 item-center'>
          {
            socialIcons.map((icon,index) => (
              <a key={index} href={icon.link}  className='text-center scale-90 border border-white rounded-full p-1'> {icon.Icon} </a>
            ))
          }
        </div>
      </div>

      {/* Navigation */}
      <nav className="relative max-h-[60px] md:max-h-[80px] flex items-center justify-between px-6 md:px-16 lg:px-24 xl:px-32 py-4 bg-white text-gray-900 transition-all shadow">
        {/* Logo */}
        <Link to="/">
          <img
            src="eureka.png"
            alt="Logo eureka"
            className="w-20 sm:w-28 md:w-32 h-auto object-contain"
          />
        </Link>

        {/* Menu desktop */}
        <ul className="hidden lg:flex items-center space-x-8 md:pl-28 text-[0.9rem] font-semibold">
          <Link to={'/'} className='textMainColorHover'>Acceuil</Link>
          <Link to={'/solutions'}  className='textMainColorHover cursor-pointer'>Nos solutions</Link>
          <Link to={'/apropos'} className='textMainColorHover cursor-pointer'>A propos</Link>
          {/* <Link to={'/blog'} className='textMainColorHover cursor-pointer'>Blog</Link> */}
          <Link to={'/contact'} className='textMainColorHover cursor-pointer'>Contact</Link>
        </ul>

        {/* Bouton desktop */}
        <Button text={'Demander un devis'} to={'/contact'} variant='primary' className='hidden md:block'/>

        {/* Bouton menu mobile */}
        <button
          aria-label="menu-btn"
          type="button"
          className="menu-btn inline-block md:hidden active:scale-90 transition z-50"
          onClick={toggleMobileMenu}
        >
          {isMobileMenuOpen ? (
            <X className="w-7 h-7 text-gray-900" />
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              viewBox="0 0 30 30"
            >
              <path d="M3 7a1 1 0 1 0 0 2h24a1 1 0 1 0 0-2zm0 7a1 1 0 1 0 0 2h24a1 1 0 1 0 0-2zm0 7a1 1 0 1 0 0 2h24a1 1 0 1 0 0-2z" />
            </svg>
          )}
        </button>

        {/* Overlay avec effet blur */}
        {isMobileMenuOpen && (
          <div 
            className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40 md:hidden"
            onClick={closeMobileMenu}
          />
        )}

        {/* Menu mobile - sortie du haut vers le bas */}
        <div
          ref={menuRef}
          className={`fixed top-0 left-0 w-full bg-white shadow-lg p-8 md:hidden transition-all duration-300 ease-in-out z-50 ${
            isMobileMenuOpen 
              ? 'translate-y-0 opacity-100' 
              : '-translate-y-full opacity-0 pointer-events-none'
          }`}
        >
          {/* Bouton de fermeture avec X */}
          <div className="flex justify-end mb-6">
            <button
              onClick={closeMobileMenu}
              className="p-2 hover:bg-gray-100 rounded-full transition-colors"
              aria-label="Fermer le menu"
            >
              <X className="w-6 h-6 text-gray-900" />
            </button>
          </div>

          <ul className="flex flex-col space-y-6 text-lg font-semibold">
             <Link to="/">
          <img
            src="eureka.png"
            alt="Logo eureka"
            className="w-20 sm:w-28 md:w-32 h-auto object-contain"
          />
        </Link>
            <li>
              <Link 
                to="/" 
                className="text-gray-900 hover:text-primary transition-colors text-base"
                onClick={closeMobileMenu}
              >
                Acceuil
              </Link>
            </li>
            <li>
              <Link 
                to="/solutions" 
                className="text-gray-900 hover:text-primary transition-colors text-base"
                onClick={closeMobileMenu}
              >
                Nos solutions
              </Link>
            </li>
            <li>
              <Link 
                to="/apropos" 
                className="text-gray-900 hover:text-primary transition-colors text-base"
                onClick={closeMobileMenu}
              >
                A propos
              </Link>
            </li>
            {/* <li>
              <Link 
                to="/blog" 
                className="text-gray-900 hover:text-primary transition-colors text-base"
                onClick={closeMobileMenu}
              >
                Blog
              </Link>
            </li> */}
            <li>
              <Link 
                to="/contact" 
                className="text-gray-900 hover:text-primary transition-colors text-base"
                onClick={closeMobileMenu}
              >
                Contact
              </Link>
            </li>
          </ul>

          <Button 
            text={'Demander un devis'} 
            to={'/contact'} 
            variant='primary' 
            className="mt-8 w-full"
            onClick={closeMobileMenu}
          />
        </div>
      </nav>
    </div>
  );
};

export default Header;