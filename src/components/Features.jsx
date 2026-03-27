import { motion } from "framer-motion";
import { Shield, Clock, Car, CreditCard } from "lucide-react";
import { useTranslation } from "react-i18next";
import { cn } from "../lib/utils";

export default function Features() {
  const { t, i18n } = useTranslation();
  const isRtl = i18n.language === "ar";

  const features = [
    {
      icon: <Clock className="w-8 h-8" />,
      title: t("features.support.title"),
      desc: t("features.support.desc"),
    },
    {
      icon: <Car className="w-8 h-8" />,
      title: t("features.fleet.title"),
      desc: t("features.fleet.desc"),
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: t("features.flexible.title"),
      desc: t("features.flexible.desc"),
    },
    {
      icon: <CreditCard className="w-8 h-8" />,
      title: t("features.price.title"),
      desc: t("features.price.desc"),
    },
  ];

  return (
    <section className="py-24 bg-black">
      <div className="container mx-auto px-4 md:px-6">
        <div className={cn("mb-16 text-center", isRtl ? "md:text-right" : "md:text-left")}>
          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-primary font-bold uppercase tracking-widest text-sm mb-2 block"
          >
            {t("features.title")}
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold mb-4"
          >
            {t("features.subtitle")}
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={cn(
                "p-8 rounded-3xl bg-muted/30 border border-border/50 hover:border-primary/50 transition-colors group text-center",
                isRtl ? "md:text-right" : "md:text-left"
              )}
            >
              <div className={cn(
                "w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center text-primary mb-6 group-hover:bg-primary group-hover:text-white transition-all duration-300 mx-auto",
                isRtl ? "md:mr-0" : "md:ml-0"
              )}>
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
