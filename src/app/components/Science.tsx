import { useState } from "react";
import { motion, AnimatePresence, useMotionValue, useTransform, useSpring } from "motion/react";
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

// 1. Red Light ATP Energy Wave
function RedLightChart() {
  return (
    <div className="w-full mt-6 pt-6 border-t border-border/40">
      <div className="flex justify-between items-center mb-3">
        <span className="text-xs font-bold uppercase tracking-wider text-muted-foreground">ATP Energy Activation</span>
        <span className="text-sm font-semibold text-secondary">+35% cellular surge</span>
      </div>
      <div className="relative h-20 w-full overflow-hidden bg-[#fcfbf9]/40 rounded-xl p-3 border border-white/30 backdrop-blur-xs">
        <svg viewBox="0 0 300 60" className="w-full h-full overflow-visible">
          <defs>
            <linearGradient id="atpGrad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#d97743" stopOpacity="0.2" />
              <stop offset="100%" stopColor="#d97743" stopOpacity="0" />
            </linearGradient>
          </defs>
          <motion.path
            d="M0 50 Q40 45 80 20 T160 35 T240 10 L240 60 L0 60 Z"
            fill="url(#atpGrad)"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2 }}
          />
          <motion.path
            d="M0 50 Q40 45 80 20 T160 35 T240 10"
            fill="none"
            stroke="#d97743"
            strokeWidth="2.5"
            strokeLinecap="round"
            initial={{ pathLength: 0 }}
            whileInView={{ pathLength: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.4, ease: "easeOut" }}
          />
          <motion.circle
            cx="240"
            cy="10"
            r="4"
            fill="#d97743"
            stroke="#ffffff"
            strokeWidth="1.5"
            initial={{ scale: 0 }}
            whileInView={{ scale: [0, 1.5, 1] }}
            viewport={{ once: true }}
            transition={{ delay: 1.2, duration: 0.6 }}
          />
          <motion.circle
            cx="240"
            cy="10"
            r="8"
            fill="none"
            stroke="#d97743"
            strokeWidth="1"
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: [1, 2.2], opacity: [0.7, 0] }}
            transition={{ repeat: Infinity, duration: 1.8, ease: "easeOut" }}
          />
          <line x1="0" y1="50" x2="300" y2="50" stroke="rgba(20, 83, 45, 0.15)" strokeWidth="1" strokeDasharray="3,3" />
        </svg>
      </div>
      <div className="flex justify-between items-center text-[10px] text-muted-foreground mt-2">
        <span>Resting Vitality</span>
        <span>Peak ATP Synthesis</span>
      </div>
    </div>
  );
}

// 2. Infrared Sauna Circulation Dial
function SaunaChart() {
  return (
    <div className="w-full mt-6 pt-6 border-t border-border/40">
      <div className="flex justify-between items-center mb-3">
        <span className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Thermal Circulation Index</span>
        <span className="text-sm font-semibold text-secondary">+40% blood flow</span>
      </div>
      <div className="relative h-20 w-full overflow-hidden bg-[#fcfbf9]/40 rounded-xl p-3 border border-white/30 backdrop-blur-xs flex items-center justify-around">
        <div className="relative w-14 h-14 shrink-0">
          <svg viewBox="0 0 36 36" className="w-full h-full transform -rotate-90">
            <circle cx="18" cy="18" r="15" fill="none" stroke="rgba(20, 83, 45, 0.08)" strokeWidth="3" />
            <motion.circle
              cx="18"
              cy="18"
              r="15"
              fill="none"
              stroke="#d97743"
              strokeWidth="3.2"
              strokeDasharray="94.2"
              strokeLinecap="round"
              initial={{ strokeDashoffset: 94.2 }}
              whileInView={{ strokeDashoffset: 94.2 - (94.2 * 0.75) }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, ease: "easeOut" }}
            />
          </svg>
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-[10px] font-bold text-primary">75%</span>
          </div>
        </div>
        <div className="text-[11px] text-muted-foreground space-y-1">
          <div className="flex items-center gap-1.5"><span className="w-1.5 h-1.5 rounded-full bg-secondary shrink-0" /> Sweat Release: <strong className="text-primary font-semibold">Maximum</strong></div>
          <div className="flex items-center gap-1.5"><span className="w-1.5 h-1.5 rounded-full bg-primary/20 shrink-0" /> Stress Cortisol: <strong className="text-primary font-semibold">-32% Reduction</strong></div>
        </div>
      </div>
    </div>
  );
}

// 3. Cold Plunge Pulse Spikes
function PlungeChart() {
  return (
    <div className="w-full mt-6 pt-6 border-t border-border/40">
      <div className="flex justify-between items-center mb-3">
        <span className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Cardiac Vaso-Response</span>
        <span className="text-sm font-semibold text-secondary">2.5x recovery speed</span>
      </div>
      <div className="relative h-20 w-full overflow-hidden bg-[#fcfbf9]/40 rounded-xl p-3 border border-white/30 backdrop-blur-xs">
        <svg viewBox="0 0 300 60" className="w-full h-full overflow-visible">
          <motion.path
            d="M0 30 L40 30 L50 10 L58 50 L64 20 L70 30 L110 30 L118 15 L124 45 L130 25 L136 30 L220 30 L226 22 L232 38 L238 27 L244 30 L300 30"
            fill="none"
            stroke="#d97743"
            strokeWidth="2.2"
            strokeLinecap="round"
            strokeLinejoin="round"
            initial={{ pathLength: 0 }}
            whileInView={{ pathLength: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.8, ease: "easeInOut" }}
          />
          <line x1="0" y1="30" x2="300" y2="30" stroke="rgba(20, 83, 45, 0.08)" strokeWidth="1" />
        </svg>
      </div>
      <div className="flex justify-between items-center text-[10px] text-muted-foreground mt-2">
        <span>Cryo-Shock Peak</span>
        <span>Homeostatic Equilibrium</span>
      </div>
    </div>
  );
}

// 4. PEMF Mat Electromagnetic Resonance
function PemfChart() {
  return (
    <div className="w-full mt-6 pt-6 border-t border-border/40">
      <div className="flex justify-between items-center mb-3">
        <span className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Cellular EMF Resonance</span>
        <span className="text-sm font-semibold text-secondary">+30% nervous balance</span>
      </div>
      <div className="relative h-20 w-full overflow-hidden bg-[#fcfbf9]/40 rounded-xl p-3 border border-white/30 backdrop-blur-xs">
        <svg viewBox="0 0 300 60" className="w-full h-full overflow-visible">
          <motion.path
            d="M0 30 C 25 10, 50 50, 75 30 C 100 10, 125 50, 150 30 C 175 10, 200 50, 225 30 C 250 10, 275 50, 300 30"
            fill="none"
            stroke="#d97743"
            strokeWidth="2"
            strokeLinecap="round"
            initial={{ pathLength: 0 }}
            whileInView={{ pathLength: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.6 }}
          />
          <motion.path
            d="M0 30 C 25 45, 50 15, 75 30 C 100 45, 125 15, 150 30 C 175 45, 200 15, 225 30 C 250 45, 275 15, 300 30"
            fill="none"
            stroke="rgba(20, 83, 45, 0.3)"
            strokeWidth="1.5"
            strokeDasharray="4,4"
            initial={{ pathLength: 0 }}
            whileInView={{ pathLength: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.6, delay: 0.2 }}
          />
        </svg>
      </div>
      <div className="flex justify-between items-center text-[10px] text-muted-foreground mt-2">
        <span>Low-Frequency Pulse (8Hz)</span>
        <span>Membrane Recharge Rate</span>
      </div>
    </div>
  );
}

// 5. Massage Chair Tension Level
function MassageChart() {
  return (
    <div className="w-full mt-6 pt-6 border-t border-border/40">
      <div className="flex justify-between items-center mb-3">
        <span className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Myo-Fascial Tension Release</span>
        <span className="text-sm font-semibold text-secondary">+50% relaxation</span>
      </div>
      <div className="relative h-20 w-full overflow-hidden bg-[#fcfbf9]/40 rounded-xl p-3.5 border border-white/30 backdrop-blur-xs flex flex-col justify-center gap-2.5">
        <div>
          <div className="flex justify-between text-[9px] text-muted-foreground mb-0.5">
            <span>Muscle Stiffness Index</span>
            <span className="font-semibold text-primary">Reduced to 25%</span>
          </div>
          <div className="w-full h-2 bg-primary/10 rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-secondary rounded-full"
              initial={{ width: "100%" }}
              whileInView={{ width: "25%" }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
            />
          </div>
        </div>
        <div>
          <div className="flex justify-between text-[9px] text-muted-foreground mb-0.5">
            <span>Parasympathetic Rest State</span>
            <span className="font-semibold text-primary">Restored +38%</span>
          </div>
          <div className="w-full h-2 bg-primary/10 rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-primary rounded-full"
              initial={{ width: "0%" }}
              whileInView={{ width: "38%" }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

// 6. Halotherapy Airway Capacity Expansion
function HaloChart() {
  return (
    <div className="w-full mt-6 pt-6 border-t border-border/40">
      <div className="flex justify-between items-center mb-3">
        <span className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Bronchial Airway Capacity</span>
        <span className="text-sm font-semibold text-secondary">+22% expansion index</span>
      </div>
      <div className="relative h-20 w-full overflow-hidden bg-[#fcfbf9]/40 rounded-xl p-3 border border-white/30 backdrop-blur-xs flex items-center justify-center">
        <svg viewBox="0 0 300 60" className="w-full h-full overflow-visible">
          <motion.circle
            cx="150"
            cy="30"
            r="12"
            fill="rgba(20, 83, 45, 0.04)"
            stroke="rgba(20, 83, 45, 0.15)"
            strokeWidth="1.5"
            animate={{ scale: [1, 2.4, 1], opacity: [0.3, 0.7, 0.3] }}
            transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
          />
          <motion.circle
            cx="150"
            cy="30"
            r="20"
            fill="none"
            stroke="#d97743"
            strokeWidth="1"
            strokeDasharray="4,4"
            animate={{ scale: [1, 1.45, 1] }}
            transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
          />
          <circle cx="150" cy="30" r="5" fill="#d97743" />
        </svg>
        <div className="absolute left-4 text-[9px] text-muted-foreground uppercase tracking-widest">Inhale</div>
        <div className="absolute right-4 text-[9px] text-muted-foreground uppercase tracking-widest">Exhale</div>
      </div>
    </div>
  );
}

const modalities = [
  {
    title: "Red Light Therapy",
    subtitle: "Supports skin health, energy, and recovery.",
    body: "Red Light Therapy uses red and near-infrared light to support cellular energy and skin wellness. Many people use it as part of their recovery routine, healthy aging routine, or skin health routine.",
    tags: ["Skin Health", "Recovery", "Energy", "Healthy Aging"],
    image: "https://images.unsplash.com/photo-1536972795217-00f0b4587844?w=800&auto=format&fit=crop",
    chart: <RedLightChart />
  },
  {
    title: "Infrared Sauna",
    subtitle: "Supports relaxation, sweating, and full-body restoration.",
    body: "Infrared Sauna uses gentle heat to help the body warm from within. It may support circulation, relaxation, sweating, and stress relief while creating a calm, restorative experience.",
    tags: ["Relaxation", "Sweating", "Stress Relief", "Recovery"],
    image: "https://images.unsplash.com/photo-1717356495389-6ab1e5ff9d84?w=800&auto=format&fit=crop",
    chart: <SaunaChart />
  },
  {
    title: "Cold Plunge",
    subtitle: "Supports recovery, energy, and resilience.",
    body: "Cold Plunge uses brief cold-water exposure to help support post-workout recovery, soreness relief, energy, and mental resilience. It is commonly used by athletes and active individuals as part of a recovery routine.",
    tags: ["Athletic Recovery", "Energy", "Soreness Support", "Resilience"],
    image: "https://images.unsplash.com/photo-1734117928667-c7f943a27e80?w=800&auto=format&fit=crop",
    chart: <PlungeChart />
  },
  {
    title: "PEMF Mat",
    subtitle: "Supports circulation, soreness relief, and overall wellness.",
    body: "PEMF stands for Pulsed Electromagnetic Field Therapy. It uses gentle electromagnetic pulses in a relaxing mat experience designed to support circulation, comfort, and recovery routines.",
    tags: ["Circulation Support", "Soreness Support", "Relaxation", "Wellness"],
    image: "https://images.unsplash.com/photo-1611073615830-9f76902c10fe?w=800&auto=format&fit=crop",
    chart: <PemfChart />
  },
  {
    title: "Massage Chairs",
    subtitle: "Supports relaxation and muscle tension relief.",
    body: "Our premium massage chairs provide a comfortable automated massage experience designed to help you relax, unwind, and feel temporary relief from everyday muscle tension.",
    tags: ["Muscle Tension", "Relaxation", "Comfort", "Stress Relief"],
    image: "https://images.unsplash.com/photo-1611769446317-3e7a467fb35e?w=800&auto=format&fit=crop",
    chart: <MassageChart />
  },
  {
    title: "Halotherapy",
    subtitle: "Supports breathing comfort, skin wellness, and stress reduction.",
    body: "Halotherapy, also known as Salt Therapy, creates a calming salt-room environment designed to support relaxation, breathing comfort, skin wellness routines, and a peaceful reset.",
    tags: ["Breathing Comfort", "Skin Wellness", "Stress Reduction", "Relaxation"],
    image: "https://images.unsplash.com/photo-1692246428001-84504043e157?w=800&auto=format&fit=crop",
    chart: <HaloChart />
  }
];

const stacks = [
  {
    title: "Alpine Reset",
    components: "Infrared Sauna + Cold Plunge + PEMF Mat",
    desc: "A balanced reset for recovery, warmth, contrast, and relaxation."
  },
  {
    title: "Peak Performance Stack",
    components: "Red Light Therapy + Cold Plunge + PEMF Mat + Massage Chair",
    desc: "Designed for athletes and active bodies looking to support recovery and soreness relief."
  },
  {
    title: "Meadow Calm",
    components: "Infrared Sauna + Massage Chair + Halotherapy",
    desc: "A relaxing stack focused on stress reduction, comfort, and calm."
  },
  {
    title: "Nordic Restore",
    components: "Infrared Sauna + Cold Plunge + Massage Chair + Halotherapy",
    desc: "A premium full-body restoration experience."
  }
];

function GlassRefractionCard({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotateX = useTransform(y, [-150, 150], [6, -6]);
  const rotateY = useTransform(x, [-150, 150], [-6, 6]);

  const reflectX = useTransform(x, [-150, 150], [-25, 25]);
  const reflectY = useTransform(y, [-150, 150], [-25, 25]);

  const springConfig = { stiffness: 120, damping: 22 };
  
  const smoothRotateX = useSpring(rotateX, springConfig);
  const smoothRotateY = useSpring(rotateY, springConfig);
  const smoothReflectX = useSpring(reflectX, springConfig);
  const smoothReflectY = useSpring(reflectY, springConfig);

  function handleMouseMove(event: React.MouseEvent<HTMLDivElement, MouseEvent>) {
    const rect = event.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;

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
        transformStyle: "preserve-3d",
      }}
      whileHover={{ scale: 1.015 }}
      transition={{ type: "spring", stiffness: 200, damping: 20 }}
      className={`group relative overflow-hidden rounded-3xl bg-white/45 dark:bg-card/45 backdrop-blur-md shadow-[0_8px_30px_rgba(0,0,0,0.02)] border border-white/40 hover:border-white/80 hover:bg-white/60 hover:shadow-[0_12px_40px_rgba(0,0,0,0.04)] transition-all duration-500 cursor-pointer ${className}`}
    >
      <motion.div
        className="absolute inset-0 pointer-events-none z-20 bg-gradient-to-tr from-white/0 via-white/14 to-white/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{
          translateX: smoothReflectX,
          translateY: smoothReflectY,
          mixBlendMode: "overlay",
        }}
      />
      {children}
    </motion.div>
  );
}

export function Science() {
  const [ripples, setRipples] = useState<{ id: number; x: number; y: number }[]>([]);

  const handleBgClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const newRipple = {
      id: Date.now() + Math.random(),
      x,
      y,
    };
    setRipples((prev) => [...prev, newRipple]);
    setTimeout(() => {
      setRipples((prev) => prev.filter((r) => r.id !== newRipple.id));
    }, 1200);
  };

  return (
    <div 
      onClick={handleBgClick}
      className="w-full relative bg-[#fcfbf9] text-foreground selection:bg-primary/20 selection:text-primary overflow-hidden pb-12 cursor-default"
    >


      {/* Ambient Luxury Blurry Mesh Gradients (Idea #1) */}
      <div className="absolute top-[-5%] left-[-15%] w-[650px] h-[650px] rounded-full bg-gradient-to-tr from-primary/10 to-[#c56d3c]/15 blur-[120px] pointer-events-none z-0 animate-pulse duration-[12000ms]" />
      <div className="absolute top-[35%] right-[-15%] w-[750px] h-[750px] rounded-full bg-gradient-to-br from-[#c56d3c]/15 to-primary/10 blur-[150px] pointer-events-none z-0 animate-pulse duration-[14000ms]" />
      <div className="absolute bottom-[5%] left-[-10%] w-[600px] h-[600px] rounded-full bg-gradient-to-tr from-primary/8 to-[#c56d3c]/12 blur-[130px] pointer-events-none z-0 animate-pulse duration-[10000ms]" />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 opacity-[0.02] pointer-events-none bg-cover bg-center bg-fixed" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1537204319452-fdbd29e2ccc7?q=80&w=1080&auto=format&fit=crop')" }} />
        
        <div className="container mx-auto px-4 relative z-20">
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={fadeUpVariant}
            className="max-w-3xl mx-auto text-center"
          >
            <motion.h1 
              initial={{ opacity: 0, letterSpacing: "-0.03em" }}
              animate={{ opacity: 1, letterSpacing: "0.01em" }}
              transition={{ duration: 1.2, ease: "easeOut" }}
              className="font-serif text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-b from-primary via-primary/95 to-[#0b2b16] bg-clip-text text-transparent tracking-tight uppercase"
            >
              The Science Behind Mt. Wellness
            </motion.h1>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-8">
              At Mt. Wellness, every modality is chosen to help your body feel restored, supported, and ready for life. Our services are designed to support recovery, relaxation, circulation, skin health, stress reduction, and overall wellness.
            </p>
            
            <div className="bg-primary/5 border border-primary/10 backdrop-blur-sm rounded-2xl p-6 mb-10 text-sm text-muted-foreground">
              <p>We do not diagnose, treat, cure, or prevent disease. Instead, we provide wellness experiences that can become part of a healthy recovery and self-care routine.</p>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="w-full sm:w-auto bg-[#c56d3c] text-white px-8 py-3.5 rounded-full font-medium shadow-md hover:bg-[#b05d31] transition-colors">
                Book Your Session
              </motion.button>
              <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="w-full sm:w-auto bg-transparent border-2 border-primary text-primary px-8 py-3.5 rounded-full font-medium hover:bg-primary/5 transition-colors">
                Explore Modalities
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Modalities Grid */}
      <section className="py-20 bg-[#f4f2ee]/45 backdrop-blur-md relative z-0 border-y border-white/40">
        <div className="container mx-auto px-4 relative z-20">
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-16 max-w-6xl mx-auto"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            {modalities.map((mod, idx) => (
              <motion.div key={idx} variants={fadeUpVariant}>
                <GlassRefractionCard>
                  <div className="aspect-[16/10] overflow-hidden relative">
                    <img src={mod.image} alt={mod.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-103" />
                  </div>
                  <div className="p-8 md:p-10">
                    <h2 className="font-serif text-3xl font-bold text-primary mb-2">{mod.title}</h2>
                    <p className="text-[#c56d3c] font-medium mb-6 leading-snug">{mod.subtitle}</p>
                    <p className="text-muted-foreground mb-8 leading-relaxed text-sm">
                      {mod.body}
                    </p>
                    <div className="mb-6">
                      <span className="text-xs font-bold uppercase tracking-widest text-primary/60 block mb-3">Best For:</span>
                      <div className="flex flex-wrap gap-2">
                        {mod.tags.map((tag, i) => (
                          <span key={i} className="bg-[#f4f2ee] text-primary px-3 py-1 rounded-full text-sm font-medium border border-primary/10">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                    {/* SVG Vitality Chart */}
                    {mod.chart}
                  </div>
                </GlassRefractionCard>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Recovery Stacks Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-20">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUpVariant}
            className="max-w-3xl mx-auto text-center mb-16"
          >
            <motion.h2 
              initial={{ opacity: 0, letterSpacing: "-0.02em" }}
              whileInView={{ opacity: 1, letterSpacing: "0.01em" }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, ease: "easeOut" }}
              className="font-serif text-4xl md:text-5xl font-bold bg-gradient-to-b from-primary via-primary/95 to-[#0b2b16] bg-clip-text text-transparent mb-6 uppercase"
            >
              Build Your Recovery Stack
            </motion.h2>
            <p className="text-lg bg-gradient-to-r from-secondary via-[#d97743] to-[#b05d31] bg-clip-text text-transparent font-medium">Combine multiple modalities into one intentional wellness session.</p>
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            {stacks.map((stack, idx) => (
              <motion.div key={idx} variants={fadeUpVariant}>
                <GlassRefractionCard className="p-8 flex flex-col h-full">
                  <h3 className="font-serif text-2xl font-bold text-primary mb-4">{stack.title}</h3>
                  <div className="text-sm font-medium text-[#c56d3c] mb-4 pb-4 border-b border-border/50">
                    {stack.components}
                  </div>
                  <p className="text-muted-foreground text-sm flex-grow">
                    {stack.desc}
                  </p>
                </GlassRefractionCard>
              </motion.div>
            ))}
          </motion.div>

          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUpVariant}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="w-full sm:w-auto bg-[#c56d3c] text-white px-8 py-3.5 rounded-full font-medium shadow-md hover:bg-[#b05d31] transition-colors">
              Book Now
            </motion.button>
            <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="w-full sm:w-auto bg-transparent border-2 border-primary text-primary px-8 py-3.5 rounded-full font-medium hover:bg-primary/5 transition-colors">
              Plan Your Stack
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* Footer Disclaimer */}
      <section className="py-12 bg-primary text-primary-foreground relative z-20">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <Info className="w-6 h-6 mx-auto mb-4 opacity-70" />
          <p className="text-sm text-primary-foreground/80 leading-relaxed">
            Mt. Wellness provides wellness services intended to support general recovery, relaxation, comfort, and well-being. Our services are not intended to diagnose, treat, cure, or prevent disease. Individual experiences vary. Please consult a healthcare professional before beginning a new wellness routine if you have medical concerns.
          </p>
        </div>
      </section>

      {/* Interactive PEMF Click Ripples Overlay spanning entire background (Z-[15] - between bg and cards) */}
      <div className="absolute inset-0 pointer-events-none z-[15] overflow-hidden">
        <AnimatePresence>
          {ripples.map((ripple) => (
            <motion.div
              key={ripple.id}
              className="absolute rounded-full pointer-events-none"
              style={{
                left: ripple.x,
                top: ripple.y,
                x: "-50%",
                y: "-50%",
                width: "140px",
                height: "140px",
                border: "2.5px solid rgba(255, 255, 255, 0.4)",
                background: "radial-gradient(circle, rgba(255, 255, 255, 0.08) 0%, rgba(255, 255, 255, 0) 70%)",
                backdropFilter: "url(#pemf-distortion) blur(3px) brightness(1.03)",
                boxShadow: "0 0 30px rgba(255, 255, 255, 0.05)",
              }}
              initial={{ scale: 0, opacity: 0.7 }}
              animate={{ scale: 4.5, opacity: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1.2, ease: "easeOut" }}
            />
          ))}
        </AnimatePresence>
      </div>

      {/* SVG Distortion Filter for Realistic Background Ripples */}
      <svg className="absolute w-0 h-0 pointer-events-none">
        <defs>
          <filter id="pemf-distortion" x="-20%" y="-20%" width="140%" height="140%">
            <feTurbulence 
              type="fractalNoise" 
              baseFrequency="0.03" 
              numOctaves="2" 
              result="noise" 
            />
            <feDisplacementMap 
              in="SourceGraphic" 
              in2="noise" 
              scale="25" 
              xChannelSelector="R" 
              yChannelSelector="G" 
            />
          </filter>
        </defs>
      </svg>
    </div>
  );
}