import { motion } from "framer-motion";
import { Users, Fuel, Settings2, PhoneCall, MessageCircle, Eye } from "lucide-react";
import { cn } from "../lib/utils";
import { Link, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

export default function CarCard({ car }) {
  const { slug, name, image, city, price_per_day, specs } = car;
  const navigate = useNavigate();
  const { t, i18n } = useTranslation();
  const isRtl = i18n.language === "ar";

  const getTranslatedSpec = (spec) => {
    const s = spec.toLowerCase();
    if (s.includes("seats")) {
      const count = s.split(" ")[0];
      return t("specs.seats", { count });
    }
    if (t(`specs.${s}`) !== `specs.${s}`) {
      return t(`specs.${s}`);
    }
    return spec;
  };

  const handleWhatsApp = (e, type) => {
    e.stopPropagation();
    const carUrl = `${window.location.origin}/cars/${slug}`;
    const message = type === "book" 
      ? `Hello, I'm interested in renting ${name} in ${city.charAt(0).toUpperCase() + city.slice(1)}.\n\nLink: ${carUrl}`
      : `Hello, I have a question about the ${name}.\n\nLink: ${carUrl}`;
    
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/212707547044?text=${encodedMessage}`, "_blank");
  };

  return (
    <motion.div
      whileHover={{ y: -8 }}
      transition={{ type: "spring", stiffness: 300 }}
      onClick={() => navigate(`/cars/${slug}`)}
      className={cn(
        "bg-card border border-border/50 rounded-2xl overflow-hidden group shadow-lg shadow-black/20 cursor-pointer",
        isRtl ? "text-right" : "text-left"
      )}
    >
      <div className="relative aspect-[16/10] overflow-hidden">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
          <div className="bg-white text-black px-6 py-2 rounded-full font-bold flex items-center gap-2 transform translate-y-4 group-hover:translate-y-0 transition-transform">
            <Eye className="w-4 h-4" />
            {t("home.featured.viewAll")}
          </div>
        </div>
        <div className={cn("absolute top-4", isRtl ? "right-4" : "left-4")}>
          <span className="bg-primary/90 backdrop-blur-md text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
            {t(`cities.${city}`)}
          </span>
        </div>
      </div>

      <div className="p-6">
        <h3 className="text-xl font-bold mb-4">{name}</h3>
        
        <div className="grid grid-cols-3 gap-2 mb-6">
          <div className="flex flex-col items-center p-2 bg-muted/30 rounded-xl gap-1">
            <Settings2 className="w-4 h-4 text-primary" />
            <span className="text-[10px] text-muted-foreground uppercase font-semibold">{getTranslatedSpec(specs[0])}</span>
          </div>
          <div className="flex flex-col items-center p-2 bg-muted/30 rounded-xl gap-1">
            <Fuel className="w-4 h-4 text-primary" />
            <span className="text-[10px] text-muted-foreground uppercase font-semibold">{getTranslatedSpec(specs[1])}</span>
          </div>
          <div className="flex flex-col items-center p-2 bg-muted/30 rounded-xl gap-1">
            <Users className="w-4 h-4 text-primary" />
            <span className="text-[10px] text-muted-foreground uppercase font-semibold">{getTranslatedSpec(specs[2])}</span>
          </div>
        </div>

        <div className={cn("flex items-center justify-between mb-6", isRtl ? "flex-row-reverse" : "flex-row")}>
          <div>
            <span className="text-2xl font-bold text-primary">{price_per_day} DH</span>
            <span className="text-muted-foreground text-sm font-medium">/ {t("carDetails.perDay")}</span>
          </div>
        </div>

        <div className="grid grid-cols-[auto_auto_1fr] gap-3">
          <a
            href="tel:+212600000000"
            onClick={(e) => e.stopPropagation()}
            className="flex items-center justify-center w-12 h-12 border border-border hover:bg-muted transition-colors rounded-xl text-primary"
            title={t("carDetails.contactUs")}
          >
            <PhoneCall className="w-5 h-5" />
          </a>
          <button
            onClick={(e) => handleWhatsApp(e, "book")}
            className="flex items-center justify-center w-12 h-12 border border-border hover:bg-muted transition-colors rounded-xl text-green-500"
            title="WhatsApp"
          >
            <MessageCircle className="w-5 h-5" />
          </button>
          <button
            onClick={(e) => {
              e.stopPropagation();
              navigate(`/booking/${slug}`);
            }}
            className="flex items-center justify-center gap-2 bg-primary hover:bg-primary/90 text-white transition-all rounded-xl font-bold text-sm shadow-lg shadow-primary/20 active:scale-95"
          >
            {t("carDetails.bookNow")}
          </button>
        </div>
      </div>
    </motion.div>
  );
}
