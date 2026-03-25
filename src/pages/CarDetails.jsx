import { useParams, Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { 
  Users, Fuel, Settings2, PhoneCall, MessageCircle, 
  ArrowLeft, MapPin, ShieldCheck, Zap 
} from "lucide-react";
import { useTranslation } from "react-i18next";
import { cn } from "../lib/utils";
import carsData from "../data/cars.json";
import CarCard from "../components/CarCard";

export default function CarDetails() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const { t, i18n } = useTranslation();
  const isRtl = i18n.language === "ar";

  const car = carsData.find((c) => c.slug === slug);

  if (!car) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <h2 className="text-2xl font-bold">Car not found</h2>
      </div>
    );
  }

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

  const similarCars = carsData
    .filter((c) => c.city === car.city && c.id !== car.id)
    .slice(0, 3);

  const handleWhatsApp = (type) => {
    const carUrl = window.location.href;
    const message = type === "book" 
      ? `Hello, I'm interested in renting ${car.name} in ${car.city.charAt(0).toUpperCase() + car.city.slice(1)}.\n\nLink: ${carUrl}`
      : `Hello, I have a question about the ${car.name}.\n\nLink: ${carUrl}`;
    
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/212600000000?text=${encodedMessage}`, "_blank");
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-32 pb-24"
    >
      <div className="container mx-auto px-4 md:px-6">
        <button
          onClick={() => navigate(-1)}
          className={cn(
            "flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-8 font-semibold",
            isRtl && "flex-row-reverse"
          )}
        >
          <ArrowLeft className={cn("w-5 h-5", isRtl && "rotate-180")} />
          {t("carDetails.back")}
        </button>

        <div className={cn("flex flex-col lg:flex-row gap-12 mb-24", isRtl && "lg:flex-row-reverse")}>
          {/* Left: Image */}
          <div className="flex-1">
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="relative aspect-video rounded-3xl overflow-hidden shadow-2xl shadow-primary/10 border border-border/50"
            >
              <img
                src={car.image}
                alt={car.name}
                className="w-full h-full object-cover"
              />
              <div className={cn("absolute top-6", isRtl ? "right-6" : "left-6")}>
                <span className="bg-primary text-white text-sm font-bold px-4 py-2 rounded-full uppercase tracking-wider shadow-lg">
                  {t(`cities.${car.city}`)}
                </span>
              </div>
            </motion.div>
          </div>

          {/* Right: Content */}
          <div className={cn("flex-1", isRtl ? "text-right" : "text-left")}>
            <h1 className="text-4xl md:text-6xl font-black mb-4 uppercase tracking-tight">
              {car.name}
            </h1>
            
            <div className={cn("flex items-center gap-2 mb-8", isRtl && "justify-end")}>
              <MapPin className="w-5 h-5 text-primary" />
              <span className="text-muted-foreground font-medium capitalize">
                {t("carDetails.location")}: {t(`cities.${car.city}`)}
              </span>
            </div>

            <div className={cn("flex items-baseline gap-2 mb-10", isRtl && "justify-end")}>
              <span className="text-5xl font-black text-primary">{car.price_per_day} DH</span>
              <span className="text-muted-foreground font-bold uppercase text-sm">/ {t("carDetails.perDay")}</span>
            </div>

            <p className="text-lg text-muted-foreground mb-12 leading-relaxed font-medium">
              {t("carDetails.description", { name: car.name })}
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12">
              <div className="p-6 bg-muted/30 rounded-3xl border border-border/50 flex flex-col items-center gap-3 text-center">
                <Settings2 className="w-6 h-6 text-primary" />
                <span className="text-xs text-muted-foreground uppercase font-bold tracking-widest">{t("carDetails.transmission")}</span>
                <span className="font-bold text-lg">{getTranslatedSpec(car.specs[0])}</span>
              </div>
              <div className="p-6 bg-muted/30 rounded-3xl border border-border/50 flex flex-col items-center gap-3 text-center">
                <Fuel className="w-6 h-6 text-primary" />
                <span className="text-xs text-muted-foreground uppercase font-bold tracking-widest">{t("carDetails.fuel")}</span>
                <span className="font-bold text-lg">{getTranslatedSpec(car.specs[1])}</span>
              </div>
              <div className="p-6 bg-muted/30 rounded-3xl border border-border/50 flex flex-col items-center gap-3 text-center">
                <Users className="w-6 h-6 text-primary" />
                <span className="text-xs text-muted-foreground uppercase font-bold tracking-widest">{t("carDetails.capacity")}</span>
                <span className="font-bold text-lg">{getTranslatedSpec(car.specs[2])}</span>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <button
                onClick={() => handleWhatsApp("call")}
                className="flex items-center justify-center gap-3 border-2 border-border hover:bg-muted transition-all py-5 rounded-2xl font-black text-lg uppercase tracking-wider"
              >
                <PhoneCall className="w-6 h-6 text-primary" />
                {t("carDetails.contactUs")}
              </button>
              <button
                onClick={() => handleWhatsApp("book")}
                className="flex items-center justify-center gap-3 bg-primary hover:bg-primary/90 text-white transition-all py-5 rounded-2xl font-black text-lg uppercase tracking-wider shadow-xl shadow-primary/20 active:scale-95"
              >
                <MessageCircle className="w-6 h-6" />
                {t("carDetails.bookNow")}
              </button>
            </div>
          </div>
        </div>

        {/* Similar Cars Section */}
        {similarCars.length > 0 && (
          <div className="mt-24">
            <div className={cn("mb-12", isRtl ? "text-right" : "text-left")}>
              <h2 className="text-3xl font-black uppercase tracking-tight">{t("carDetails.similarCars")}</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {similarCars.map((similarCar) => (
                <CarCard key={similarCar.id} car={similarCar} />
              ))}
            </div>
          </div>
        )}
      </div>
    </motion.div>
  );
}
