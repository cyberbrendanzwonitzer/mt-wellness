import { motion, useMotionValue, useTransform, useSpring } from "motion/react";
import { Link } from "react-router";
import { ArrowRight, Star } from "lucide-react";

const fadeUpVariant = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.8, ease: "easeOut" } 
  }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const heroContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.25
    }
  }
};

const heroWord = {
  hidden: { opacity: 0, y: 60 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 90,
      damping: 14,
    }
  }
};

const heroElement = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut"
    }
  }
};

function TiltCard({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // Map mouse move coordinate percentage to degrees of rotation
  const rotateX = useTransform(y, [-150, 150], [12, -12]);
  const rotateY = useTransform(x, [-150, 150], [-12, 12]);

  // Smooth rotation
  const springConfig = { stiffness: 150, damping: 20 };
  const smoothRotateX = useSpring(rotateX, springConfig);
  const smoothRotateY = useSpring(rotateY, springConfig);

  function handleMouseMove(event: React.MouseEvent<HTMLDivElement, MouseEvent>) {
    const rect = event.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    
    // Relative position from center of card
    const mouseX = event.clientX - rect.left - width / 2;
    const mouseY = event.clientY - rect.top - height / 2;
    
    x.set(mouseX);
    y.set(mouseY);
  }

  function handleMouseLeave() {
    x.set(0);
    y.set(0);
  }

  return (
    <motion.div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX: smoothRotateX,
        rotateY: smoothRotateY,
      }}
      whileHover={{ scale: 1.025 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className={`relative overflow-hidden rounded-2xl h-[420px] sm:h-[480px] w-full shadow-lg cursor-pointer ${className}`}
    >
      {children}
    </motion.div>
  );
}

export function Home() {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative h-[90vh] min-h-[600px] w-full flex items-center justify-center overflow-hidden">
        {/* Parallax Background */}
        <div 
          className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat bg-fixed"
          style={{ 
            backgroundImage: "url('https://images.unsplash.com/photo-1610817118922-a7374b775fd9?q=80&w=2560&auto=format&fit=crop')",
          }}
        />
        {/* Dark Gradient Overlay */}
        <div className="absolute inset-0 z-10 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />
        
        <motion.div 
          className="relative z-20 text-center text-white px-4 max-w-4xl mx-auto"
          initial="hidden"
          animate="visible"
          variants={heroContainer}
        >
          <h1 className="font-serif text-5xl md:text-7xl font-bold tracking-tight mb-6 uppercase flex flex-wrap justify-center gap-x-4">
            {["Recover.", "Rejuvenate.", "Restore."].map((word, i) => (
              <span key={i} className="inline-block overflow-hidden py-1">
                <motion.span variants={heroWord} className="inline-block text-white">
                  {word}
                </motion.span>
              </span>
            ))}
          </h1>
          <p className="text-lg md:text-2xl font-light text-gray-200 mb-10 max-w-2xl mx-auto leading-relaxed">
            Experience the ultimate sanctuary for advanced healing, deep relaxation, and cellular vitality.
          </p>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link 
              to="/services" 
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-full font-medium text-lg shadow-lg hover:bg-primary/90 transition-all duration-300"
            >
              Explore Our Modalities
              <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </motion.div>
      </section>

      {/* The 3 Pillars Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center max-w-3xl mx-auto mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeUpVariant}
          >
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-6">
              The Three Pillars of Wellness
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Our curated selection of science-backed modalities are designed to work synergistically, 
              helping your body naturally overcome inflammation, stress, and fatigue.
            </p>
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={staggerContainer}
          >
            {/* Pillar 1: Recover */}
            <motion.div variants={fadeUpVariant}>
              <TiltCard className="group">
                <div 
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                  style={{ backgroundImage: "url('https://images.unsplash.com/photo-1618605521861-dfe398562a1e?q=80&w=1080&auto=format&fit=crop')" }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                <div 
                  className="absolute inset-0 p-6 sm:p-8 flex flex-col justify-end text-white"
                >
                  <h3 className="font-serif text-2xl sm:text-3xl font-bold mb-2 sm:mb-3">Recover</h3>
                  <p className="text-gray-200 mb-4 sm:mb-6 text-xs sm:text-sm leading-relaxed">
                    Reduce inflammation and accelerate muscle healing through targeted thermal therapies.
                  </p>
                  <div className="space-y-1.5 sm:space-y-2 mb-4 sm:mb-6">
                    <div className="flex items-center gap-2 text-xs sm:text-sm font-medium"><div className="w-1.5 h-1.5 rounded-full bg-secondary" /> Cold Plunge</div>
                    <div className="flex items-center gap-2 text-xs sm:text-sm font-medium"><div className="w-1.5 h-1.5 rounded-full bg-secondary" /> PEMF Mat</div>
                  </div>
                  <Link to="/services" className="inline-flex items-center text-xs sm:text-sm font-semibold hover:text-secondary transition-colors uppercase tracking-wider">
                    Learn More <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </div>
              </TiltCard>
            </motion.div>

            {/* Pillar 2: Rejuvenate */}
            <motion.div variants={fadeUpVariant}>
              <TiltCard className="group">
                <div 
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                  style={{ backgroundImage: "url('https://images.unsplash.com/photo-1665824249476-a7951ab0aaaa?q=80&w=1080&auto=format&fit=crop')" }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                <div 
                  className="absolute inset-0 p-6 sm:p-8 flex flex-col justify-end text-white"
                >
                  <h3 className="font-serif text-2xl sm:text-3xl font-bold mb-2 sm:mb-3">Rejuvenate</h3>
                  <p className="text-gray-200 mb-4 sm:mb-6 text-xs sm:text-sm leading-relaxed">
                    Stimulate cellular energy and purify your respiratory system in a tranquil environment.
                  </p>
                  <div className="space-y-1.5 sm:space-y-2 mb-4 sm:mb-6">
                    <div className="flex items-center gap-2 text-xs sm:text-sm font-medium"><div className="w-1.5 h-1.5 rounded-full bg-accent" /> Red Light Therapy</div>
                    <div className="flex items-center gap-2 text-xs sm:text-sm font-medium"><div className="w-1.5 h-1.5 rounded-full bg-accent" /> Halotherapy</div>
                  </div>
                  <Link to="/services" className="inline-flex items-center text-xs sm:text-sm font-semibold hover:text-accent transition-colors uppercase tracking-wider">
                    Learn More <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </div>
              </TiltCard>
            </motion.div>

            {/* Pillar 3: Restore */}
            <motion.div variants={fadeUpVariant}>
              <TiltCard className="group">
                <div 
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                  style={{ backgroundImage: "url('https://images.unsplash.com/photo-1706048111522-e4865f909940?q=80&w=1080&auto=format&fit=crop')" }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                <div 
                  className="absolute inset-0 p-6 sm:p-8 flex flex-col justify-end text-white"
                >
                  <h3 className="font-serif text-2xl sm:text-3xl font-bold mb-2 sm:mb-3">Restore</h3>
                  <p className="text-gray-200 mb-4 sm:mb-6 text-xs sm:text-sm leading-relaxed">
                    Melt away tension and detoxify your body with deeply penetrating warmth and massage.
                  </p>
                  <div className="space-y-1.5 sm:space-y-2 mb-4 sm:mb-6">
                    <div className="flex items-center gap-2 text-xs sm:text-sm font-medium"><div className="w-1.5 h-1.5 rounded-full bg-primary" /> Infrared Sauna</div>
                    <div className="flex items-center gap-2 text-xs sm:text-sm font-medium"><div className="w-1.5 h-1.5 rounded-full bg-primary" /> Massage Chairs</div>
                  </div>
                  <Link to="/services" className="inline-flex items-center text-xs sm:text-sm font-semibold hover:text-primary transition-colors uppercase tracking-wider">
                    Learn More <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </div>
              </TiltCard>
            </motion.div>

          </motion.div>
        </div>
      </section>

      {/* Social Proof / Testimonials */}
      <section className="relative py-32 overflow-hidden">
        {/* Parallax Background */}
        <div 
          className="absolute inset-0 z-0 bg-cover bg-center bg-fixed"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1540486674504-91e3ad500c52?q=80&w=2560&auto=format&fit=crop')" }}
        />
        {/* Overlay */}
        <div className="absolute inset-0 z-10 bg-black/60" />

        <div className="container relative z-20 mx-auto px-4">
          <motion.div 
            className="text-center text-white mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUpVariant}
          >
            <h2 className="font-serif text-4xl md:text-5xl font-bold mb-4">
              Real Relief. True Restoration.
            </h2>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              Hear from our community of athletes and individuals who have transformed their recovery journey.
            </p>
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            {/* Testimonial 1 */}
            <motion.div variants={fadeUpVariant} className="bg-background/95 backdrop-blur rounded-2xl p-8 shadow-xl">
              <div className="flex text-accent mb-4">
                {[...Array(5)].map((_, i) => <Star key={i} className="w-5 h-5 fill-current" />)}
              </div>
              <p className="text-foreground italic mb-6 leading-relaxed">
                "The combination of the infrared sauna and cold plunge completely eliminated the joint inflammation I've battled for years. A true sanctuary in the city."
              </p>
              <div className="flex items-center gap-4">
                <img src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&auto=format&fit=crop" alt="Client portrait" className="w-12 h-12 rounded-full object-cover" />
                <div>
                  <h4 className="font-semibold text-foreground">Marcus T.</h4>
                  <p className="text-sm text-muted-foreground">Marathon Runner</p>
                </div>
              </div>
            </motion.div>

            {/* Testimonial 2 */}
            <motion.div variants={fadeUpVariant} className="bg-background/95 backdrop-blur rounded-2xl p-8 shadow-xl">
              <div className="flex text-accent mb-4">
                {[...Array(5)].map((_, i) => <Star key={i} className="w-5 h-5 fill-current" />)}
              </div>
              <p className="text-foreground italic mb-6 leading-relaxed">
                "Rehabbing my knee was a struggle until I found MT Wellness. The PEMF mat sessions accelerated my healing far beyond my physical therapist's expectations."
              </p>
              <div className="flex items-center gap-4">
                <img src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&auto=format&fit=crop" alt="Client portrait" className="w-12 h-12 rounded-full object-cover" />
                <div>
                  <h4 className="font-semibold text-foreground">Sarah J.</h4>
                  <p className="text-sm text-muted-foreground">Yoga Instructor</p>
                </div>
              </div>
            </motion.div>

            {/* Testimonial 3 */}
            <motion.div variants={fadeUpVariant} className="bg-background/95 backdrop-blur rounded-2xl p-8 shadow-xl">
              <div className="flex text-accent mb-4">
                {[...Array(5)].map((_, i) => <Star key={i} className="w-5 h-5 fill-current" />)}
              </div>
              <p className="text-foreground italic mb-6 leading-relaxed">
                "I used to feel constantly drained. Adding red light therapy and halotherapy to my routine has completely rejuvenated my energy levels and improved my sleep."
              </p>
              <div className="flex items-center gap-4">
                <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&auto=format&fit=crop" alt="Client portrait" className="w-12 h-12 rounded-full object-cover" />
                <div>
                  <h4 className="font-semibold text-foreground">David R.</h4>
                  <p className="text-sm text-muted-foreground">Corporate Executive</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-card">
        <div className="container mx-auto px-4 text-center">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUpVariant}
            className="max-w-2xl mx-auto"
          >
            <h2 className="font-serif text-4xl font-bold text-foreground mb-6">
              Ready to start your healing journey?
            </h2>
            <p className="text-muted-foreground text-lg mb-10">
              Book a single session to experience the modalities, or join our membership for consistent, transformative recovery.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full sm:w-auto bg-primary text-primary-foreground px-8 py-4 rounded-full font-medium text-lg shadow-lg hover:bg-primary/90 transition-all duration-300"
              >
                Book Your Session
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full sm:w-auto bg-transparent border-2 border-primary text-primary px-8 py-4 rounded-full font-medium text-lg hover:bg-primary/5 transition-all duration-300"
              >
                View Memberships
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}