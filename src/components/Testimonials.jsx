import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import { useTranslation } from "react-i18next";
import { cn } from "../lib/utils";
import testimonialsData from "../data/testimonials.json";

export default function Testimonials() {
  const { t, i18n } = useTranslation();
  const isRtl = i18n.language === "ar";

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className={cn("text-center mb-16", isRtl && "text-right md:text-center")}>
          <h2 className="text-3xl md:text-5xl font-bold mb-4">{t("testimonials.title")}</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            {t("testimonials.subtitle")}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonialsData.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={cn(
                "p-8 bg-card border border-border/50 rounded-2xl relative",
                isRtl ? "text-right" : "text-left"
              )}
            >
              <div className={cn("absolute top-8 text-primary/10", isRtl ? "left-8" : "right-8")}>
                <Quote size={48} />
              </div>
              
              <div className={cn("flex gap-1 mb-6", isRtl && "justify-end")}>
                {[...Array(5)].map((_, i) => (
                  <Star 
                    key={i} 
                    className={i < testimonial.rating ? "text-primary fill-primary" : "text-muted"} 
                    size={16} 
                  />
                ))}
              </div>

              <p className="text-muted-foreground mb-8 leading-relaxed italic">
                "{t(testimonial.content_key)}"
              </p>

              <div className={cn("flex items-center gap-4", isRtl && "flex-row-reverse")}>
                <img 
                  src={testimonial.avatar} 
                  alt={testimonial.name} 
                  className="w-12 h-12 rounded-full object-cover border-2 border-primary/20"
                />
                <div className={isRtl ? "text-right" : "text-left"}>
                  <h4 className="font-bold">{testimonial.name}</h4>
                  <p className="text-xs text-muted-foreground uppercase tracking-wider">
                    {t(testimonial.role_key)}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
