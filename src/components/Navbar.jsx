import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Car, Globe } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "../lib/utils";
import { useTranslation } from "react-i18next";

const languages = [
  { code: "en", name: "EN" },
  { code: "fr", name: "FR" },
  { code: "ar", name: "AR" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const { t, i18n } = useTranslation();

  const navLinks = [
    { name: t("nav.home"), path: "/" },
    { name: t("nav.cars"), path: "/cars" },
    { name: t("nav.about"), path: "/about" },
    { name: t("nav.contact"), path: "/contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.documentElement.dir = i18n.language === "ar" ? "rtl" : "ltr";
    document.documentElement.lang = i18n.language;
  }, [i18n.language]);

  const changeLanguage = (code) => {
    i18n.changeLanguage(code);
  };

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b",
        scrolled
          ? "bg-background/80 backdrop-blur-md border-border/50 py-5"
          : "bg-transparent border-transparent py-5"
      )}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 group">
          <span className={cn(
            "text-2xl font-bold tracking-tight",
            scrolled ? "text-foreground" : "text-white"
          )}>
            SPEED<span className="text-primary">UP</span>
          </span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          <div className="flex items-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={cn(
                  "text-sm font-semibold transition-colors hover:text-primary relative",
                  location.pathname === link.path
                    ? "text-primary after:absolute after:-bottom-1 after:left-0 after:w-full after:h-0.5 after:bg-primary"
                    : scrolled ? "text-muted-foreground" : "text-white hover:text-white/80"
                )}
              >
                {link.name}
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-4 border-l border-white/20 pl-6 h-6 ml-2">
            <div className="flex items-center gap-2">
              <Globe className={cn("w-4 h-4", scrolled ? "text-muted-foreground" : "text-white/70")} />
              {languages.map((lang) => (
                <button
                  key={lang.code}
                  onClick={() => changeLanguage(lang.code)}
                  className={cn(
                    "text-xs font-bold transition-all hover:scale-110",
                    i18n.language === lang.code
                      ? "text-primary scale-110"
                      : scrolled ? "text-muted-foreground" : "text-white/70"
                  )}
                >
                  {lang.name}
                </button>
              ))}
            </div>
            
            <Link
              to="/cars"
              className="bg-primary hover:bg-primary/90 text-white px-5 py-2 rounded-xl font-medium transition-all hover:scale-105 active:scale-95"
            >
              {t("nav.rentNow")}
            </Link>
          </div>
        </div>

        {/* Mobile Toggle */}
        <div className="flex items-center gap-4 md:hidden">
           <div className="flex items-center gap-2 mr-2">
              {languages.map((lang) => (
                <button
                  key={lang.code}
                  onClick={() => changeLanguage(lang.code)}
                  className={cn(
                    "text-xs font-bold",
                    i18n.language === lang.code
                      ? "text-primary"
                      : scrolled ? "text-muted-foreground" : "text-white"
                  )}
                >
                  {lang.name}
                </button>
              ))}
            </div>
          <button
            className={cn(scrolled ? "text-foreground" : "text-white")}
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-background/80 backdrop-blur-md mt-6 border-b border-border/50 overflow-hidden"
          >
            <div className="container mx-auto text-center px-4 py-6 flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={cn(
                    "text-lg font-medium py-2",
                    location.pathname === link.path
                      ? "text-primary"
                      : "text-muted-foreground"
                  )}
                >
                  {link.name}
                </Link>
              ))}
              <Link
                to="/cars"
                onClick={() => setIsOpen(false)}
                className="bg-primary text-white text-center py-3 rounded-xl font-medium mt-2"
              >
                {t("nav.rentNow")}
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
