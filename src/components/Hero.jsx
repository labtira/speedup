import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Search, MapPin, Calendar } from "lucide-react";
import { useTranslation } from "react-i18next";
import { cn } from "../lib/utils";

export default function Hero() {
  const navigate = useNavigate();
  const { t, i18n } = useTranslation();
  const isRtl = i18n.language === "ar";

  return (
    <section className="relative min-h-screen flex items-center  overflow-hidden isolate">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-black/50 bg-gradient-to-b from-black/50 to-transparent z-10" />
        <img 
          src="/banner.jpg" 
          alt="Luxury Car Background" 
          className="w-full h-full object-cover hidden md:block"
        />
        <img 
          src="/g63.png" 
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

            <div className="flex flex-col sm:flex-row gap-4 items-center">
              <motion.button
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2 }}
                onClick={() => navigate("/cars")}
                className="w-full sm:w-auto group flex items-center justify-center gap-3 bg-primary hover:bg-primary/90 text-white transition-all px-8 py-5 rounded-2xl font-bold text-lg shadow-xl active:scale-95"
              >
                <Calendar className="w-6 h-6" />
                <span>{t("hero.bookNow") || "Book Now"}</span>
              </motion.button>

              <motion.button
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3 }}
                onClick={() => navigate("/contact")}
                className="w-full sm:w-auto group flex items-center justify-center gap-3 bg-white/10 backdrop-blur-md border-2 border-white/30 hover:bg-white hover:text-black text-white transition-all px-8 py-5 rounded-2xl font-bold text-lg shadow-xl active:scale-95"
              >
                <span>{t("hero.contactUs") || "Contact Us"}</span>
              </motion.button>
            </div>
          </motion.div>
        </div>
      </div>
      
      {/* Decorative gradient at bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent z-10" />
    </section>
  );
}
