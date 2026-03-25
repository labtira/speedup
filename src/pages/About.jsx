import { motion } from "framer-motion";
import { ShieldCheck, Clock, Award, Users, Target, Heart } from "lucide-react";

const features = [
  {
    icon: ShieldCheck,
    title: "Maximum Security",
    description: "Fully insured vehicles and transparent contracts for your peace of mind."
  },
  {
    icon: Clock,
    title: "24/7 Support",
    description: "Our dedicated team is available round the clock to assist you anywhere in Morocco."
  },
  {
    icon: Award,
    title: "Premium Fleet",
    description: "Only the latest models from top luxury brands, meticulously maintained."
  }
];

export default function About() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-32 pb-24"
    >
      <div className="container mx-auto px-4 md:px-6">
        {/* Header Section */}
        <div className="text-center mb-20">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-primary font-bold uppercase tracking-widest text-sm mb-4 block"
          >
            Since 2015
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-7xl font-extrabold mb-8"
          >
            Redefining <span className="text-primary">Luxury</span> Travel
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed"
          >
            SpeedUp started with a simple vision: to provide the most seamless and 
            premium car rental experience in Morocco. Today, we are proud to be the 
            leading choice for travelers seeking excellence, reliability, and style.
          </motion.p>
        </div>

        {/* Mission & Vision */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-32 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <img 
              src="https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?auto=format&fit=crop&q=80&w=800" 
              alt="Our Story" 
              className="rounded-3xl shadow-2xl"
            />
            <div className="absolute -bottom-6 -right-6 bg-primary p-8 rounded-3xl shadow-xl hidden lg:block">
              <span className="text-4xl font-black text-white block">10+</span>
              <span className="text-white/80 font-semibold uppercase tracking-wider text-sm">Cities in Morocco</span>
            </div>
          </motion.div>
          
          <div className="flex flex-col gap-8">
            <div className="flex gap-6">
              <div className="bg-muted p-4 rounded-2xl h-fit">
                <Target className="text-primary w-8 h-8" />
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-3">Our Mission</h3>
                <p className="text-muted-foreground leading-relaxed">
                  To empower our clients with the freedom to explore Morocco in the 
                  highest level of comfort and sophistication. We strive for 
                  perfection in every interaction.
                </p>
              </div>
            </div>
            
            <div className="flex gap-6">
              <div className="bg-muted p-4 rounded-2xl h-fit">
                <Heart className="text-primary w-8 h-8" />
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-3">Our Values</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Integrity, transparency, and customer-centricity are at the core 
                  of everything we do. We treat every client like royalty.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Why Choose Us */}
        <div className="bg-muted/30 rounded-[3rem] p-12 md:p-20 border border-border/50">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Why Choose SpeedUp?</h2>
            <p className="text-muted-foreground">The difference is in the details.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center flex flex-col items-center"
              >
                <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mb-6 group hover:bg-primary transition-colors cursor-default">
                  <feature.icon className="text-primary w-10 h-10 group-hover:text-white transition-colors" />
                </div>
                <h4 className="text-xl font-bold mb-4">{feature.title}</h4>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
