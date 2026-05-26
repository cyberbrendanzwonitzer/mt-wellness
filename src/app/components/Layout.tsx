import { useState, useEffect } from "react";
import { Outlet, Link, useLocation } from "react-router";
import { MapPin, Phone, Instagram, Facebook, Share2, Star } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

export function Layout() {
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
    { name: "Pricing & Deals", path: "/pricing" },
    { name: "The Science", path: "/science" },
    { name: "About Us", path: "/about" },
    { name: "Blog", path: "/blog" },
  ];

  return (
    <div className="flex min-h-screen flex-col">
      <header className={`sticky top-0 z-50 w-full transition-all duration-500 ${
        scrolled 
          ? "bg-background/85 backdrop-blur-xl border-b border-border/80 shadow-[0_4px_30px_rgba(0,0,0,0.02)]" 
          : "bg-background/60 backdrop-blur-md border-b border-border/30"
      }`}>
        <div className={`container mx-auto px-4 flex items-center justify-between transition-all duration-500 ${
          scrolled ? "h-16" : "h-20"
        }`}>
          <Link to="/" className="flex items-center gap-2">
            <span className="font-serif text-xl lg:text-2xl font-bold text-foreground tracking-tight hover:text-primary transition-colors">
              MT Wellness
            </span>
          </Link>

          <nav className="hidden md:flex items-center gap-4 lg:gap-6 xl:gap-8">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path;
              return (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`relative py-1.5 text-xs lg:text-sm font-medium transition-colors hover:text-primary ${
                    isActive ? "text-primary" : "text-muted-foreground"
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <motion.div
                      layoutId="activeNavIndicator"
                      className="absolute bottom-0 left-0 right-0 h-[2px] bg-primary rounded-full"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </Link>
              );
            })}
          </nav>

          <div className="flex items-center gap-4">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-primary text-primary-foreground px-4 py-2 lg:px-6 lg:py-2.5 rounded-full text-xs lg:text-sm font-medium shadow-md transition-colors hover:bg-primary/90"
            >
              Book Now
            </motion.button>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 md:hidden text-foreground focus:outline-none z-50 relative"
              aria-label="Toggle Menu"
            >
              <div className="w-6 h-5 relative flex items-center justify-center">
                <motion.span
                  animate={isMobileMenuOpen ? { rotate: 45, y: 0 } : { rotate: 0, y: -6 }}
                  transition={{ type: "spring", stiffness: 300, damping: 25 }}
                  className="absolute w-6 h-0.5 bg-foreground rounded-full"
                />
                <motion.span
                  animate={isMobileMenuOpen ? { opacity: 0, scale: 0 } : { opacity: 1, scale: 1 }}
                  transition={{ duration: 0.15 }}
                  className="absolute w-6 h-0.5 bg-foreground rounded-full"
                />
                <motion.span
                  animate={isMobileMenuOpen ? { rotate: -45, y: 0 } : { rotate: 0, y: 6 }}
                  transition={{ type: "spring", stiffness: 300, damping: 25 }}
                  className="absolute w-6 h-0.5 bg-foreground rounded-full"
                />
              </div>
            </button>
          </div>
        </div>

        {/* Mobile Menu Panel (Slide-down) */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="absolute top-full left-0 right-0 bg-background/95 backdrop-blur-2xl border-b border-border shadow-lg z-40 md:hidden flex flex-col px-6 py-8 gap-4"
            >
              {navLinks.map((link) => {
                const isActive = location.pathname === link.path;
                return (
                  <Link
                    key={link.name}
                    to={link.path}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`text-base font-semibold py-2.5 border-b border-border/40 last:border-0 hover:text-primary transition-colors ${
                      isActive ? "text-primary font-bold" : "text-muted-foreground"
                    }`}
                  >
                    {link.name}
                  </Link>
                );
              })}
              
              <motion.button
                whileTap={{ scale: 0.95 }}
                className="w-full bg-primary text-primary-foreground py-3.5 rounded-full text-sm font-semibold shadow-md mt-4"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Book Now
              </motion.button>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      <main className="flex-1">
        <Outlet />
      </main>

      <footer className="bg-foreground text-background py-16 mt-20">
        <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="space-y-4">
            <span className="font-serif text-2xl font-bold tracking-tight block">
              MT Wellness
            </span>
            <p className="text-muted text-sm max-w-xs">
              Recover. Rejuvenate. Restore. 
              Find your sanctuary for advanced healing and deep relaxation.
            </p>
          </div>
          
          <div className="space-y-4">
            <h4 className="font-serif text-lg font-semibold">Contact</h4>
            <a 
              href="https://maps.google.com/?q=[Your Street Address], Fort Worth, TX 76140"
              target="_blank"
              rel="noreferrer" 
              className="flex items-start gap-3 text-muted hover:text-white transition-colors text-sm"
            >
              <MapPin className="w-5 h-5 shrink-0" />
              <span>[Your Street Address]<br/>Fort Worth, TX 76140</span>
            </a>
            <a 
              href="tel:+11234567890" 
              className="flex items-center gap-3 text-muted hover:text-white transition-colors text-sm"
            >
              <Phone className="w-5 h-5" />
              <span>(123) 456-7890</span>
            </a>
          </div>

          <div className="space-y-4">
            <h4 className="font-serif text-lg font-semibold">Hours</h4>
            <ul className="text-sm text-muted space-y-2">
              <li className="flex justify-between"><span>Mon - Fri</span> <span>7:00 AM - 8:00 PM</span></li>
              <li className="flex justify-between"><span>Saturday</span> <span>8:00 AM - 6:00 PM</span></li>
              <li className="flex justify-between"><span>Sunday</span> <span>9:00 AM - 4:00 PM</span></li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="font-serif text-lg font-semibold">Follow Us</h4>
            <div className="flex gap-4">
              <a href="#" className="text-muted hover:text-white transition-colors"><Facebook className="w-5 h-5" /></a>
              <a href="#" className="text-muted hover:text-white transition-colors"><Instagram className="w-5 h-5" /></a>
              <a href="#" className="text-muted hover:text-white transition-colors"><Share2 className="w-5 h-5" /></a>
              <a href="#" className="text-muted hover:text-white transition-colors"><Star className="w-5 h-5" /></a>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-4 mt-16 pt-8 border-t border-muted-foreground/30 text-center text-xs text-muted-foreground">
          <p>© {new Date().getFullYear()} MT Wellness. All rights reserved.</p>
          <p className="mt-2">Disclaimer: MT Wellness supports physiological recovery and cellular vitality. We do not diagnose, treat, or cure specific medical diseases.</p>
        </div>
      </footer>
    </div>
  );
}