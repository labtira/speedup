import { useState, useMemo } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { ChevronLeft, Calendar, MapPin, User, Phone, MessageCircle } from "lucide-react";
import carsData from "../data/cars.json";
import { cn } from "../lib/utils";

export default function Booking() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const { t, i18n } = useTranslation();
  const isRtl = i18n.language === "ar";
  
  const car = useMemo(() => {
    const foundCar = carsData.find(c => c.slug === slug);
    if (!foundCar) {
      setTimeout(() => navigate("/cars"), 0);
    }
    return foundCar;
  }, [slug, navigate]);

  const [formData, setFormData] = useState({
    userName: "",
    phone: "",
    pickupLocation: "",
    pickupDate: "",
    dropDate: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!car) return;

    const carUrl = `${window.location.origin}/cars/${slug}`;
    const message = `*New Booking Request*
--------------------------
*Car:* ${car.name}
*Customer:* ${formData.userName}
*Phone:* ${formData.phone}
*Pickup Location:* ${formData.pickupLocation}
*Pickup Date:* ${formData.pickupDate}
*Drop-off Date:* ${formData.dropDate}
--------------------------
*Link:* ${carUrl}`;

    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/212707547044?text=${encodedMessage}`, "_blank");
  };

  if (!car) return null;

  return (
    <div className="min-h-screen bg-background pt-24 pb-12 px-4">
      <div className="max-w-2xl mx-auto">
        <button
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-8 group"
        >
          <ChevronLeft className={cn("w-5 h-5 transition-transform", isRtl ? "rotate-180 group-hover:translate-x-1" : "group-hover:-translate-x-1")} />
          {t("carDetails.back")}
        </button>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-card border border-border/50 rounded-3xl p-8 shadow-xl shadow-black/10"
        >
          <div className="mb-8">
            <h1 className="text-3xl font-bold mb-2 text-balance">
              {t("booking.title", { car: car.name })}
            </h1>
            <p className="text-muted-foreground">
              {t("booking.subtitle")}
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <label className="text-sm font-semibold flex items-center gap-2">
                <MapPin className="w-4 h-4 text-primary" />
                {t("booking.carName")}
              </label>
              <input
                type="text"
                value={car.name}
                disabled
                className="w-full bg-muted/50 border border-border rounded-xl px-4 py-3 text-muted-foreground cursor-not-allowed font-medium"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-semibold flex items-center gap-2">
                  <User className="w-4 h-4 text-primary" />
                  {t("booking.userName")}
                </label>
                <input
                  required
                  type="text"
                  name="userName"
                  value={formData.userName}
                  onChange={handleChange}
                  placeholder={t("booking.placeholders.userName")}
                  className="w-full bg-background border border-border rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-semibold flex items-center gap-2">
                  <Phone className="w-4 h-4 text-primary" />
                  {t("booking.phone")}
                </label>
                <input
                  required
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder={t("booking.placeholders.phone")}
                  className="w-full bg-background border border-border rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-semibold flex items-center gap-2">
                <MapPin className="w-4 h-4 text-primary" />
                {t("booking.pickupLocation")}
              </label>
              <input
                required
                type="text"
                name="pickupLocation"
                value={formData.pickupLocation}
                onChange={handleChange}
                placeholder={t("booking.placeholders.pickupLocation")}
                className="w-full bg-background border border-border rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-semibold flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-primary" />
                  {t("booking.pickupDate")}
                </label>
                <input
                  required
                  type="date"
                  name="pickupDate"
                  value={formData.pickupDate}
                  onChange={handleChange}
                  className="w-full bg-background border border-border rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-semibold flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-primary" />
                  {t("booking.dropDate")}
                </label>
                <input
                  required
                  type="date"
                  name="dropDate"
                  value={formData.dropDate}
                  onChange={handleChange}
                  className="w-full bg-background border border-border rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                />
              </div>
            </div>

            <button
              type="submit"
              className="w-full bg-primary hover:bg-primary/90 text-white font-bold py-4 rounded-xl shadow-lg shadow-primary/20 transition-all active:scale-[0.98] flex items-center justify-center gap-2 mt-8"
            >
              <MessageCircle className="w-5 h-5" />
              {t("booking.submit")}
            </button>
          </form>
        </motion.div>
      </div>
    </div>
  );
}
