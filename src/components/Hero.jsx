import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Search, MapPin } from "lucide-react";
import { useTranslation } from "react-i18next";
import { cn } from "../lib/utils";

const cities = [
  { name: "casablanca", count: 185 },
  { name: "marrakech", count: 142 },
  { name: "rabat", count: 96 },
  { name: "tangier", count: 74 },
];

export default function Hero() {
  const navigate = useNavigate();
  const { t, i18n } = useTranslation();
  const isRtl = i18n.language === "ar";

  const handleCityFilter = (city) => {
    navigate(`/cars?city=${city}`);
  };

  return (
    <section className="relative min-h-screen flex items-center  overflow-hidden isolate">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-black/60 z-10" />
        <img 
          src="/banner.jpg" 
          alt="Luxury Car Background" 
          className="w-full h-full object-cover hidden md:block"
        />
        <img 
          src="/g.jpeg" 
          alt="Luxury Car Background"
          className="w-full h-full object-cover md:hidden"
        />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-20 mb-20">
        <div className={cn("max-w-3xl", isRtl ? "text-right" : "text-left")}>
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className={isRtl ? "text-right" : "text-left"}
          >
            <span className="inline-block bg-white/10 backdrop-blur-md border border-white/20 text-white text-xs font-bold px-4 py-2 rounded-full mb-6 ">
              {t("hero.badge")}
            </span>
            <h1 className="text-5xl md:text-8xl font-black mb-6 leading-tight text-white">
              {t("hero.title1")} <span className="text-primary italic">{t("hero.title2")}</span> {t("hero.title3")}
            </h1>
            <p className="text-xs sm:text-md text-gray-200 mb-10 max-w-xl leading-relaxed font-medium">
              {t("hero.subtitle")}
            </p>

            <div className="flex flex-wrap gap-4">
              {cities.map((city, index) => (
                <motion.button
                  key={city.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 + index * 0.1 }}
                  onClick={() => handleCityFilter(city.name)}
                  className="group flex items-center gap-4 bg-white/10 backdrop-blur-sm hover:bg-primary text-white transition-all px-4 sm:px-6 py-4 rounded-2xl font-bold border border-white/20 shadow-xl active:scale-95"
                >
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-white/20 transition-colors">
                    <MapPin className="w-5 h-5 text-primary group-hover:text-white transition-colors" />
                  </div>
                  <div className="flex flex-col items-start">
                    <span className="text-sm leading-none mb-1">{t(`cities.${city.name}`)}</span>
                    <span className="text-[11px] text-primary group-hover:text-white/80 transition-colors font-medium">
                      +{city.count} {t("nav.cars")}
                    </span>
                  </div>
                </motion.button>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
      
      {/* Decorative gradient at bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent z-10" />
    </section>
  );
}
