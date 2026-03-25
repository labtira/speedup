import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";
import { useTranslation } from "react-i18next";
import { cn } from "../lib/utils";
import faqsData from "../data/faqs.json";

export default function FAQSection() {
  const { t, i18n } = useTranslation();
  const isRtl = i18n.language === "ar";

  return (
    <section className="py-20 bg-muted/20">
      <div className="container mx-auto px-4 md:px-6">
        <div className={cn("mb-16", isRtl ? "text-right" : "text-center")}>
          <h2 className="text-3xl md:text-5xl font-bold mb-4">{t("faqs.title")}</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            {t("faqs.subtitle")}
          </p>
        </div>

        <div className=" mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqsData.map((faq) => (
              <AccordionItem key={faq.id} value={`item-${faq.id}`}>
                <AccordionTrigger className={cn(
                  "text-lg hover:no-underline",
                  isRtl ? "text-right flex-row-reverse" : "text-left"
                )}>
                  {t(faq.question_key)}
                </AccordionTrigger>
                <AccordionContent className={cn(
                  "text-base italic leading-relaxed text-muted-foreground",
                  isRtl ? "text-right" : "text-left"
                )}>
                  {t(faq.answer_key)}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
