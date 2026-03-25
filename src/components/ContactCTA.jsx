import { motion } from "framer-motion";
import { MessageCircle, Phone, ArrowRight } from "lucide-react";

export default function ContactCTA() {
  const handleWhatsApp = () => {
    const message = "Hello, I'm interested in renting a car. Can you help me?";
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/212600000000?text=${encodedMessage}`, "_blank");
  };

  return (
    <section className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="relative bg-primary rounded-3xl p-12 md:p-20 overflow-hidden shadow-2xl shadow-primary/30">
          {/* Decor */}
          <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-white/10 blur-[80px] rounded-full translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-black/10 blur-[80px] rounded-full -translate-x-1/2 translate-y-1/2" />

          <div className="flex flex-col md:flex-row items-center justify-between gap-12 relative z-10">
            <div className="text-center md:text-left">
              <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
                Ready to Start Your Journey?
              </h2>
              <p className="text-white/80 text-lg mb-8 max-w-xl">
                Our team is available 24/7 to help you choose the perfect 
                car for your needs. Contact us via WhatsApp for a quick response.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={handleWhatsApp}
                  className="bg-white text-primary px-8 py-4 rounded-2xl font-bold flex items-center justify-center gap-3 shadow-xl transition-all"
                >
                  <MessageCircle className="w-5 h-5 fill-primary" />
                  Chat on WhatsApp
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-primary-foreground/10 hover:bg-primary-foreground/20 text-white border border-white/20 px-8 py-4 rounded-2xl font-bold flex items-center justify-center gap-3 transition-all"
                >
                  <Phone className="w-5 h-5" />
                  Call Us
                </motion.button>
              </div>
            </div>

            <div className="hidden lg:block relative group">
              <motion.div
                animate={{
                  rotate: [0, 5, 0, -5, 0],
                  y: [0, -10, 0]
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                <img 
                  src="https://images.unsplash.com/photo-1542362567-b052cb1341f1?auto=format&fit=crop&q=80&w=800" 
                  alt="CTA Car" 
                  className="w-[500px] h-auto rounded-3xl shadow-2xl transition-transform group-hover:scale-105"
                />
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
