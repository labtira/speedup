import { Link } from "react-router-dom";
import { Car, Facebook, Instagram, Twitter, Phone, Mail, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-background border-t border-border/50 py-12 md:py-20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Logo & Info */}
          <div className="flex flex-col gap-6">
            <Link to="/" className="flex items-center gap-2 group">
              <span className="text-2xl font-bold tracking-tight">
                SPEED<span className="text-primary">UP</span>
              </span>
            </Link>
            <p className="text-muted-foreground text-sm leading-relaxed max-w-xs">
              Premium car rental services across Morocco. Experience luxury,
              comfort, and reliability with our curated fleet of high-end vehicles.
            </p>
            <div className="flex gap-4">
              <a href="#" className="p-2 bg-muted hover:bg-primary transition-colors rounded-lg group">
                <Instagram className="w-5 h-5 group-hover:text-white" />
              </a>
              <a href="#" className="p-2 bg-muted hover:bg-primary transition-colors rounded-lg group">
                <Facebook className="w-5 h-5 group-hover:text-white" />
              </a>
              <a href="#" className="p-2 bg-muted hover:bg-primary transition-colors rounded-lg group">
                <Twitter className="w-5 h-5 group-hover:text-white" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col gap-6">
            <h4 className="font-bold text-lg">Quick Links</h4>
            <ul className="flex flex-col gap-3">
              <li>
                <Link to="/" className="text-muted-foreground hover:text-primary transition-colors">Home</Link>
              </li>
              <li>
                <Link to="/cars" className="text-muted-foreground hover:text-primary transition-colors">Cars</Link>
              </li>
              <li>
                <Link to="/about" className="text-muted-foreground hover:text-primary transition-colors">About Us</Link>
              </li>
              <li>
                <Link to="/contact" className="text-muted-foreground hover:text-primary transition-colors">Contact</Link>
              </li>
            </ul>
          </div>

          {/* Locations */}
          <div className="flex flex-col gap-6">
            <h4 className="font-bold text-lg">Locations</h4>
            <ul className="flex flex-col gap-3">
              <li className="text-muted-foreground hover:text-primary transition-colors cursor-pointer">Casablanca</li>
              <li className="text-muted-foreground hover:text-primary transition-colors cursor-pointer">Marrakech</li>
              <li className="text-muted-foreground hover:text-primary transition-colors cursor-pointer">Rabat</li>
              <li className="text-muted-foreground hover:text-primary transition-colors cursor-pointer">Tangier</li>
            </ul>
          </div>

          {/* Contact */}
          <div className="flex flex-col gap-6">
            <h4 className="font-bold text-lg">Contact Us</h4>
            <ul className="flex flex-col gap-4">
              <li className="flex items-center gap-3 text-muted-foreground text-sm">
                <div className="p-2 bg-muted rounded-lg">
                  <Phone className="w-4 h-4 text-primary" />
                </div>
                +212 600 000 000
              </li>
              <li className="flex items-center gap-3 text-muted-foreground text-sm">
                <div className="p-2 bg-muted rounded-lg">
                  <Mail className="w-4 h-4 text-primary" />
                </div>
                contact@speedup.ma
              </li>
              <li className="flex items-center gap-3 text-muted-foreground text-sm">
                <div className="p-2 bg-muted rounded-lg">
                  <MapPin className="w-4 h-4 text-primary" />
                </div>
                123 Luxury St, Marrakech
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-20 pt-8 border-t border-border/30 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} SpeedUp Rental. All rights reserved.
          </p>
          <div className="flex gap-8">
            <a href="#" className="text-xs text-muted-foreground hover:text-primary transition-colors">Privacy Policy</a>
            <a href="#" className="text-xs text-muted-foreground hover:text-primary transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
