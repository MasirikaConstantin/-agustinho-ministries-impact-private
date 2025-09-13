import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { ModeToggle } from "./mode-toggle";
import { Link } from "@inertiajs/react";
import { about, achievements, contact, gallery, home, services, sponsors, vision } from "@/routes";
const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [theme, setTheme] = useState("dark");
  const [isThemeDropdownOpen, setIsThemeDropdownOpen] = useState(false);

  const navigation = [
    { name: "Accueil", href: home(), textHref: home().url },
    { name: "À propos", href: about(), textHref: about().url },
    { name: "Services", href: services(), textHref: services().url },
    { name: "Réalisations", href: achievements(), textHref: achievements().url },
    { name: "Vision", href: vision(), textHref: vision().url },
    { name: "Galerie", href: gallery(), textHref: gallery().url },
    { name: "Sponsors", href: sponsors(), textHref: sponsors().url },
    { name: "Contact", href: contact(), textHref: contact().url },
  ];

  // Initialiser le thème au chargement du composant
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") || "dark";
    setTheme(savedTheme);
    document.documentElement.setAttribute("data-theme", savedTheme);
  }, []);

console.log(location.pathname);

  // Fermer le menu mobile quand la route change
  useEffect(() => {
    setIsMenuOpen(false);
    
    // Remonter en haut de page à chaque changement de route
    window.scrollTo(0, 0);
  }, [location]);

  // Gestion du défilement pour un effet de header rétréci
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);


  return (
    <header className={`fixed top-0 w-full z-50 bg-card/95 backdrop-blur-sm border-b border-border transition-all duration-300 ${isScrolled ? "h-20 md:h-20" : "h-24 md:h-28"}`}>
     
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8 h-full">
        <div className="flex items-center justify-between h-full">
          {/* Logo et nom en mobile */}
          <Link href="/" className="flex items-center space-x-3 ">
            <img 
              src={"/logo-foundation.jpeg"} 
              alt="Fondation Agustinho Meschak M. Ministries" 
              className={`rounded-full object-cover shadow-gold transition-all duration-300 ${isScrolled ? "h-8 w-8 md:h-10 md:w-10" : "h-10 w-10 md:h-12 md:w-12"}`}
            />
            {/* Nom visible en mobile et tablette */}
            <div className="lg:hidden">
              <h1 className="text-base font-bold text-gradient">
                Fondation Agustinho Meschak M.
              </h1>
              <p className="text-xs text-muted-foreground">MINISTRIES</p>
            </div>
            {/* Nom visible en desktop avec taille ajustée entre 1025px et 1210px */}
            <div className="hidden lg:block">
              <h1 className="text-lg font-bold text-gradient min-[1025px]:text-base min-[1211px]:text-lg">
                Fondation Agustinho Meschak M.
              </h1>
              <p className="text-sm text-muted-foreground min-[1025px]:text-xs min-[1211px]:text-sm">MINISTRIES</p>
            </div>
          </Link>

          {/* Desktop Navigation - Visible seulement en desktop */}
         
            
            {/* Dropdown pour le thème en desktop */}
            <div className="hidden lg:flex items-center space-x-6">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`transition-smooth font-medium ${location.pathname === item.textHref ? "text-primary font-semibold" : "text-foreground hover:text-primary"}`}
                >
                  {item.name}
                </Link>
              ))}
              <ModeToggle />
            </div>

          {/* Bouton menu mobile/tablette - Visible en mobile et tablette */}
          <div className="lg:hidden flex items-center space-x-2">
            <ModeToggle />
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-foreground hover:text-primary p-2"
              aria-label="Ouvrir le menu"
              aria-expanded={isMenuOpen}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile/Tablet Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 right-0 bg-card border-t border-border shadow-lg">
            <div className="px-2 pt-2 pb-4 space-y-1">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`block px-3 py-2 transition-smooth font-medium ${location.pathname === item.textHref ? "text-primary font-semibold bg-primary/10 rounded-md" : "text-foreground hover:text-primary"}`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;