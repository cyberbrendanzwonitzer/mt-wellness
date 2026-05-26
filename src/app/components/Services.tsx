import { motion } from "motion/react";
import { Link } from "react-router";
import { ArrowRight, Info } from "lucide-react";

const fadeUpVariant = {
  hidden: { opacity: 0, y: 30 },
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
      staggerChildren: 0.15
    }
  }
};

const modalities = [
  {
    title: "Red Light Therapy",
    subtitle: "Supports skin health, energy, and recovery.",
    body: "Red Light Therapy uses red and near-infrared light to support skin wellness, cellular energy pathways, and recovery routines. It is a calm, non-invasive experience often used by people focused on healthy aging, skin appearance, and post-workout recovery support.",
    tags: ["Skin Health", "Recovery", "Energy", "Healthy Aging"],
    image: "https://images.unsplash.com/photo-1536972795217-00f0b4587844?w=800&auto=format&fit=crop",
    cta: "Book Red Light Therapy",
    badge: "ATP Synthesis +35%"
  },
  {
    title: "Infrared Sauna",
    subtitle: "Supports relaxation, sweating, and full-body restoration.",
    body: "Infrared Sauna uses gentle heat to create a deeply calming experience. Sessions are designed to support sweating, circulation, relaxation, stress relief, and whole-body restoration.",
    tags: ["Relaxation", "Sweating", "Stress Relief", "Recovery"],
    image: "https://images.unsplash.com/photo-1717356495389-6ab1e5ff9d84?w=800&auto=format&fit=crop",
    cta: "Book Infrared Sauna",
    badge: "Circulation +40%"
  },
  {
    title: "Cold Plunge",
    subtitle: "Supports recovery, energy, and resilience.",
    body: "Cold Plunge uses brief cold-water exposure to support post-workout recovery, temporary soreness relief, energy, and mental resilience. It is a popular choice for athletes and active individuals looking to reset after training.",
    tags: ["Athletic Recovery", "Energy", "Soreness Support", "Resilience"],
    image: "https://images.unsplash.com/photo-1734117928667-c7f943a27e80?w=800&auto=format&fit=crop",
    cta: "Book Cold Plunge",
    badge: "Vaso-dilation +45%"
  },
  {
    title: "PEMF Mat",
    subtitle: "Supports circulation, soreness relief, and overall wellness.",
    body: "PEMF stands for Pulsed Electromagnetic Field Therapy. Our PEMF Mat experience uses gentle electromagnetic pulses in a relaxing format designed to support circulation, comfort, recovery routines, and overall wellness.",
    tags: ["Circulation Support", "Soreness Support", "Relaxation", "Wellness"],
    image: "https://images.unsplash.com/photo-1611073615830-9f76902c10fe?w=800&auto=format&fit=crop",
    cta: "Book PEMF Mat",
    badge: "Cell Charge +30%"
  },
  {
    title: "Massage Chairs",
    subtitle: "Supports relaxation and muscle tension relief.",
    body: "Our premium Massage Chairs provide a comfortable automated massage experience designed to help you unwind, relax, and feel temporary relief from everyday muscle tension.",
    tags: ["Muscle Tension", "Relaxation", "Comfort", "Stress Relief"],
    image: "https://images.unsplash.com/photo-1611769446317-3e7a467fb35e?w=800&auto=format&fit=crop",
    cta: "Book Massage Chair",
    badge: "Myo-Tension Release +50%"
  },
  {
    title: "Halotherapy / Salt Therapy",
    subtitle: "Supports breathing comfort, skin wellness, and stress reduction.",
    body: "Halotherapy, also known as Salt Therapy, creates a calming salt-room environment designed to support relaxation, breathing comfort, skin wellness routines, and a peaceful reset.",
    tags: ["Breathing Comfort", "Skin Wellness", "Stress Reduction", "Relaxation"],
    image: "https://images.unsplash.com/photo-1692246428001-84504043e157?w=800&auto=format&fit=crop",
    cta: "Book Halotherapy",
    badge: "Airway Capacity +22%"
  }
];

export function Services() {
  return (
    <div className="w-full bg-background text-foreground selection:bg-primary/20 selection:text-primary">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden bg-[#1e293b]">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat bg-fixed opacity-50"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1486707471592-8e7eb7e36f78?q=80&w=2000&auto=format&fit=crop')" }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/50 to-black/70" />
        
        <div className="container mx-auto px-4 relative z-10 text-center">
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={fadeUpVariant}
            className="max-w-4xl mx-auto"
          >
            <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl font-bold mb-6 text-white tracking-tight leading-tight">
              Recovery modalities designed to help you feel restored.
            </h1>
            <p className="text-lg md:text-xl text-white/90 leading-relaxed mb-10 max-w-3xl mx-auto">
              Explore wellness experiences designed to support recovery, relaxation, skin health, circulation, stress reduction, breathing comfort, and overall restoration.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="w-full sm:w-auto bg-[#c56d3c] text-white px-8 py-3.5 rounded-full font-medium shadow-lg hover:bg-[#b05d31] transition-colors">
                Book Your Session
              </motion.button>
              <Link to="/pricing" className="w-full sm:w-auto">
                <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="w-full sm:w-auto bg-white/10 backdrop-blur-md border border-white/30 text-white px-8 py-3.5 rounded-full font-medium hover:bg-white/20 transition-colors">
                  View Pricing
                </motion.button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-20 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUpVariant}
            className="max-w-3xl mx-auto text-center"
          >
            <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed font-serif">
              At Mt. Wellness, every service is selected to help you build a recovery routine that fits your body, lifestyle, and goals. Whether you are an athlete, an active parent, recovering from everyday soreness, or looking for more calm in your week, our modalities are designed to help you reset and restore.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Modalities Grid */}
      <section className="py-16 md:py-24 bg-[#f4f2ee] relative">
        <div className="absolute inset-0 opacity-5 pointer-events-none bg-cover bg-center bg-fixed" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1611072337226-1140ab367200?q=80&w=1080&auto=format&fit=crop')" }} />
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            {modalities.map((mod, idx) => (
              <motion.div key={idx} variants={fadeUpVariant} className="group bg-card rounded-3xl overflow-hidden shadow-sm hover:shadow-xl border border-border/50 transition-all duration-500 flex flex-col h-full">
                <div className="aspect-[4/3] overflow-hidden relative">
                  <img src={mod.image} alt={mod.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                  {mod.badge && (
                    <div className="absolute top-4 right-4 bg-primary/95 backdrop-blur-sm text-white border border-primary/20 text-[10px] uppercase font-bold tracking-wider px-3 py-1.5 rounded-full shadow-md z-20">
                      {mod.badge}
                    </div>
                  )}
                </div>
                <div className="p-8 flex flex-col flex-grow">
                  <h2 className="font-serif text-2xl font-bold text-primary mb-2">{mod.title}</h2>
                  <p className="text-[#c56d3c] text-sm font-medium mb-4">{mod.subtitle}</p>
                  <p className="text-muted-foreground text-sm mb-6 leading-relaxed flex-grow">
                    {mod.body}
                  </p>
                  <div className="mb-8">
                    <span className="text-xs font-bold uppercase tracking-widest text-primary/60 block mb-3">Best For:</span>
                    <div className="flex flex-wrap gap-2">
                      {mod.tags.map((tag, i) => (
                        <span key={i} className="bg-[#f4f2ee] text-primary px-3 py-1 rounded-full text-xs font-medium border border-primary/10">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                  <motion.button whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="w-full bg-primary text-white py-3 rounded-xl font-medium shadow-sm hover:bg-primary/90 transition-colors mt-auto">
                    {mod.cta}
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Recovery Stacks CTA Section */}
      <section className="py-24 relative overflow-hidden bg-[#1e293b] text-white">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat bg-fixed opacity-30"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1713439340151-6f1e7f6fb9c9?q=80&w=2000&auto=format&fit=crop')" }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent" />
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUpVariant}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6">Not sure where to start?</h2>
            <p className="text-lg md:text-xl text-white/90 mb-10 leading-relaxed">
              Our recovery stacks combine multiple modalities into one intentional wellness session based on your goals.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link to="/pricing" className="w-full sm:w-auto">
                <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="w-full sm:w-auto bg-transparent border-2 border-white text-white px-8 py-3.5 rounded-full font-medium hover:bg-white/10 transition-colors">
                  Plan Your Stack
                </motion.button>
              </Link>
              <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="w-full sm:w-auto bg-[#c56d3c] text-white px-8 py-3.5 rounded-full font-medium shadow-md hover:bg-[#b05d31] transition-colors">
                Book Now
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}