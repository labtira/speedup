import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { MapPin } from "lucide-react";
import { useTranslation } from "react-i18next";
import { cn } from "../lib/utils";

const cities = [
  { name: "casablanca", count: 185 },
  { name: "marrakech", count: 142 },
  { name: "rabat", count: 96 },
  { name: "tangier", count: 74 },
];

export default function Cities() {
  const navigate = useNavigate();
  const { t, i18n } = useTranslation();
  const isRtl = i18n.language === "ar";

  const handleCityFilter = (city) => {
    navigate(`/cars?city=${city}`);
  };

  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-4 md:px-6 text-center">
        <div className="max-w-3xl mx-auto mb-16">
          <span className="text-primary font-bold uppercase tracking-widest text-sm mb-2 block">
            {t("cities.badge") || "Explore Morocco"}
          </span>
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            {t("cities.title") || "Rent a car in your city"}
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            {t("cities.subtitle") || "Find the perfect car in major cities across Morocco. We deliver to your doorstep or airport."}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {cities.map((city, index) => (
            <motion.button
              key={city.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              onClick={() => handleCityFilter(city.name)}
              className="group flex items-center gap-4 bg-background hover:bg-primary hover:text-white transition-all px-6 py-6 rounded-2xl font-bold border border-border shadow-sm active:scale-95"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-white/20 transition-colors text-primary group-hover:text-white">
                <MapPin className="w-6 h-6" />
              </div>
              <div className="flex flex-col items-start">
                <span className="text-lg leading-none mb-1">{t(`cities.${city.name}`)}</span>
                <span className="text-sm text-muted-foreground group-hover:text-white/80 transition-colors font-medium">
                  +{city.count} {t("nav.cars")}
                </span>
              </div>
            </motion.button>
          ))}
        </div>
      </div>
    </section>
  );
}
