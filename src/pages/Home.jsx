import { motion } from "framer-motion";
import Hero from "../components/Hero";
import Cities from "../components/Cities";
import Features from "../components/Features";
import CarCard from "../components/CarCard";
import Testimonials from "../components/Testimonials";
import FAQSection from "../components/FAQSection";
import ContactCTA from "../components/ContactCTA";
import carsData from "../data/cars.json";
import { useTranslation } from "react-i18next";
import { cn } from "../lib/utils";

export default function Home() {
  const { t, i18n } = useTranslation();
  const isRtl = i18n.language === "ar";
  
  // Show 6 featured cars on home
  const featuredCars = carsData.slice(0, 6);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <Hero />
      <Cities />
      <Features />
      
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <div className={cn(
            "flex flex-col md:flex-row items-start justify-between mb-16 gap-6",
            isRtl ? "md:flex-row-reverse" : ""
          )}>
            <div className={isRtl ? "text-center" : "text-left"}>
              <span className="text-primary font-bold uppercase tracking-widest text-sm mb-2 block">
                {t("home.featured.badge")}
              </span>
              <h2 className="text-3xl md:text-5xl font-bold">{t("home.featured.title")}</h2>
            </div>
            <p className={cn(
              "text-muted-foreground max-w-md",
              isRtl ? "text-right md:text-center" : "md:text-right"
            )}>
              {t("home.featured.subtitle")}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredCars.map((car, index) => (
              <motion.div
                key={car.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <CarCard car={car} />
              </motion.div>
            ))}
          </div>
          
          <div className="mt-16 text-center">
            <button
              onClick={() => window.location.href = "/cars"}
              className="bg-muted hover:bg-muted/80 text-foreground px-8 py-4 rounded-2xl font-bold transition-all hover:scale-105"
            >
              {t("home.featured.viewAll")}
            </button>
          </div>
        </div>
      </section>

      <Testimonials />
      <FAQSection />
      <ContactCTA />
    </motion.div>
  );
}
