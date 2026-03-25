import { motion } from "framer-motion";
import { MessageCircle, Phone, Mail, MapPin, Instagram, Facebook, Twitter } from "lucide-react";

export default function Contact() {
  const handleWhatsApp = () => {
    const message = "Hello, I'm reaching out from your website. I have a question.";
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
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-7xl font-extrabold mb-6">Get in <span className="text-primary">Touch</span></h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Have questions? We're here to help. Contact us via WhatsApp for the 
            fastest response or use the information below.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Contact Info */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="bg-card p-8 rounded-3xl border border-border/50 shadow-xl flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-6">
                <Phone className="text-primary w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold mb-2">Call Us</h3>
              <p className="text-muted-foreground mb-4">Direct line for urgent inquiries.</p>
              <a href="tel:+212600000000" className="text-primary font-bold text-lg hover:underline underline-offset-4">
                +212 600 000 000
              </a>
            </div>

            <div className="bg-card p-8 rounded-3xl border border-border/50 shadow-xl flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-6">
                <Mail className="text-primary w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold mb-2">Email Us</h3>
              <p className="text-muted-foreground mb-4">For partnerships and bookings.</p>
              <a href="mailto:contact@speedup.ma" className="text-primary font-bold text-lg hover:underline underline-offset-4">
                contact@speedup.ma
              </a>
            </div>

            <div className="bg-card p-8 rounded-3xl border border-border/50 shadow-xl flex flex-col items-center text-center sm:col-span-2">
              <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-6">
                <MapPin className="text-primary w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold mb-2">Our Locations</h3>
              <p className="text-muted-foreground mb-4">Available in Casablanca, Marrakech, Rabat, & Tangier.</p>
              <span className="text-foreground font-semibold">Main Office: 123 Luxury St, Marrakech</span>
            </div>
          </div>

          {/* WhatsApp CTA */}
          <div className="relative bg-primary rounded-3xl p-12 overflow-hidden h-full flex flex-col justify-center items-center text-center shadow-2xl shadow-primary/30">
            {/* Decor */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 blur-[60px] rounded-full translate-x-1/2 -translate-y-1/2" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-black/10 blur-[60px] rounded-full -translate-x-1/2 translate-y-1/2" />
            
            <div className="relative z-10">
              <MessageCircle size={80} className="text-white mb-8 mx-auto opacity-90" />
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
                Chat with an Expert
              </h2>
              <p className="text-white/80 text-lg mb-10 max-w-md mx-auto">
                Ready to book? Or just need more information? Our experts are 
                standing by on WhatsApp to give you a personalized offer.
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleWhatsApp}
                className="bg-white text-primary px-10 py-5 rounded-2xl font-black text-xl flex items-center justify-center gap-4 shadow-2xl transition-all w-full sm:w-auto"
              >
                <MessageCircle className="w-6 h-6 fill-primary" />
                START CHATTING
              </motion.button>
              
              <div className="mt-12 flex justify-center gap-6">
                <a href="#" className="p-3 bg-white/10 hover:bg-white/20 rounded-xl transition-colors text-white">
                  <Instagram className="w-6 h-6" />
                </a>
                <a href="#" className="p-3 bg-white/10 hover:bg-white/20 rounded-xl transition-colors text-white">
                  <Facebook className="w-6 h-6" />
                </a>
                <a href="#" className="p-3 bg-white/10 hover:bg-white/20 rounded-xl transition-colors text-white">
                  <Twitter className="w-6 h-6" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
