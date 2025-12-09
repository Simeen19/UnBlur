import { motion } from "framer-motion";
import { Headphones, Instagram, Youtube, Twitter, Linkedin, Mail, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-unblur-deep text-primary-foreground relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-40 bg-unblur-bright/10 blur-3xl" />

      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-10 h-10 rounded-xl bg-unblur-bright flex items-center justify-center">
                <span className="font-display font-bold text-unblur-deep text-lg">U</span>
              </div>
              <span className="font-display font-bold text-2xl">UnBlur</span>
            </div>
            <p className="text-primary-foreground/70 mb-6 leading-relaxed">
              Helping you find clarity in your career journey. Because your future deserves to be crystal clear.
            </p>
            <div className="flex gap-4">
              {[Instagram, Youtube, Twitter, Linkedin].map((Icon, index) => (
                <motion.a
                  key={index}
                  href="#"
                  whileHover={{ scale: 1.1, y: -2 }}
                  className="w-10 h-10 rounded-xl bg-primary-foreground/10 flex items-center justify-center hover:bg-unblur-bright hover:text-unblur-deep transition-colors"
                >
                  <Icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display font-bold text-lg mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {["About Us", "Our Method", "Workshops", "Community", "Pricing"].map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="text-primary-foreground/70 hover:text-unblur-bright transition-colors"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-display font-bold text-lg mb-6">Resources</h4>
            <ul className="space-y-3">
              {["Blog", "Toolkits", "UnBlur Bytes", "Career Guides", "FAQ"].map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="text-primary-foreground/70 hover:text-unblur-bright transition-colors"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Podcast & Contact */}
          <div>
            <h4 className="font-display font-bold text-lg mb-6">Get in Touch</h4>
            <div className="space-y-4">
              <a
                href="#"
                className="flex items-center gap-3 text-primary-foreground/70 hover:text-unblur-bright transition-colors"
              >
                <Headphones className="w-5 h-5" />
                UnBlur Spotlight Podcast
              </a>
              <a
                href="#"
                className="flex items-center gap-3 text-primary-foreground/70 hover:text-unblur-bright transition-colors"
              >
                <Mail className="w-5 h-5" />
                hello@unblur.com
              </a>
              <div className="flex items-center gap-3 text-primary-foreground/70">
                <MapPin className="w-5 h-5" />
                San Francisco, CA
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-primary-foreground/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-primary-foreground/50">
            © 2024 UnBlur. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-primary-foreground/50">
            <a href="#" className="hover:text-primary-foreground transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-primary-foreground transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-primary-foreground transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
