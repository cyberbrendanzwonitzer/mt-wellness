import { motion } from "motion/react";
import { Link } from "react-router";
import { MapPin, Clock, Phone, ArrowRight, Instagram, Facebook } from "lucide-react";

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

const whoWeHelp = [
  "Athletes and active lifestyles",
  "Everyday soreness and stiffness",
  "Stress and burnout",
  "Healthy aging routines",
  "Skin health and glow routines",
  "Post-workout recovery",
  "Relaxation and self-care",
  "People looking for a calmer wellness experience"
];

const promises = [
  "Clear education",
  "Clean, premium spaces",
  "Thoughtful service",
  "Easy booking",
  "Transparent pricing",
  "Wellness-first language",
  "A calm, welcoming atmosphere"
];

const experts = [
  {
    name: "Dr. Evelyn Sterling",
    role: "Clinical Research Director",
    certifications: "MD, Ph.D. in Cellular Biophysics",
    bio: "Evelyn oversees our clinical guidelines and modality efficacy. With 15+ years researching photobiomodulation and cellular vitality, she ensures our space offers elite scientific recovery pathways.",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&auto=format&fit=crop"
  },
  {
    name: "Kaelen Vance",
    role: "Co-Founder & Recovery Director",
    certifications: "MS in Kinesiology, CSCS",
    bio: "Kaelen's training expertise is in neuromuscular recovery and contrasting therapies. He designs our recovery stacks to maximize homeostatic reset for active individuals.",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=800&auto=format&fit=crop"
  },
  {
    name: "Aria Thorne",
    role: "Respiratory Wellness Director",
    certifications: "Registered Respiratory Therapist (RRT)",
    bio: "Aria specializes in aerosol therapies and pulmonary micro-climates. She oversees our Halotherapy program to optimize bronchial dilation and skin cleansing comfort.",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=800&auto=format&fit=crop"
  }
];

export function About() {
  return (
    <div className="w-full bg-background text-foreground selection:bg-primary/20 selection:text-primary">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden bg-[#1e293b]">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat bg-fixed opacity-50"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1510798831971-661eb04b3739?q=80&w=2000&auto=format&fit=crop')" }}
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
              Rooted in nature.<br/>Focused on restoration.
            </h1>
            <p className="text-lg md:text-xl text-white/90 leading-relaxed mb-10 max-w-2xl mx-auto">
              Mt. Wellness is a mountain-inspired recovery and wellness studio created to help people feel supported, restored, and ready for life.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="w-full sm:w-auto bg-[#c56d3c] text-white px-8 py-3.5 rounded-full font-medium shadow-lg hover:bg-[#b05d31] transition-colors">
                Book Your Session
              </motion.button>
              <Link to="/services" className="w-full sm:w-auto">
                <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="w-full sm:w-auto bg-white/10 backdrop-blur-md border border-white/30 text-white px-8 py-3.5 rounded-full font-medium hover:bg-white/20 transition-colors">
                  Explore Services
                </motion.button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Who We Are & What We Do */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 max-w-7xl mx-auto items-center">
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUpVariant}
              className="space-y-12"
            >
              <div>
                <h2 className="font-serif text-4xl text-primary font-bold mb-6">A calmer way to recover.</h2>
                <p className="text-muted-foreground text-lg leading-relaxed mb-4">
                  Mt. Wellness was created around a simple idea: recovery should feel both effective and deeply restorative. Our space brings together premium wellness modalities, thoughtful education, and a warm Scandinavian-inspired atmosphere to help you build a routine that supports your body and your lifestyle.
                </p>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  We serve athletes, active individuals, busy professionals, people navigating everyday soreness, and anyone seeking more relaxation, comfort, and balance in their week.
                </p>
              </div>

              <div>
                <h2 className="font-serif text-3xl text-primary font-bold mb-6">Recovery, rejuvenation, and restoration under one roof.</h2>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  Our services are designed to support recovery, relaxation, circulation, skin health, breathing comfort, stress reduction, and overall wellness. From cold plunge and infrared sauna to red light therapy, PEMF, massage chairs, and halotherapy, every experience is designed to help you slow down, reset, and feel more connected to your body.
                </p>
              </div>
            </motion.div>

            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUpVariant}
              className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl"
            >
              <img 
                src="https://images.unsplash.com/photo-1583416750470-965b2707b355?q=80&w=1080&auto=format&fit=crop" 
                alt="Scandinavian Wellness Interior" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/20" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Who We Help */}
      <section className="py-24 bg-[#f4f2ee]">
        <div className="container mx-auto px-4">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUpVariant}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="font-serif text-4xl text-primary font-bold mb-4">Who We Help</h2>
            <p className="text-muted-foreground text-lg">Wellness routines designed for your unique lifestyle and goals.</p>
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-6xl mx-auto"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={staggerContainer}
          >
            {whoWeHelp.map((item, idx) => (
              <motion.div key={idx} variants={fadeUpVariant} className="bg-card p-6 rounded-2xl border border-border/60 shadow-sm text-center flex items-center justify-center min-h-[120px]">
                <p className="font-medium text-primary/80">{item}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Our Environment & Promise */}
      <section className="py-24 bg-background relative overflow-hidden">
        <div className="absolute right-0 top-0 w-1/2 h-full opacity-5 pointer-events-none bg-cover bg-center bg-fixed" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1611072337226-1140ab367200?q=80&w=1080&auto=format&fit=crop')" }} />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 max-w-7xl mx-auto">
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUpVariant}
              className="bg-[#f4f2ee] p-10 md:p-14 rounded-3xl border border-border"
            >
              <h2 className="font-serif text-3xl md:text-4xl text-primary font-bold mb-6 leading-tight">Inspired by mountains, meadows, rivers, and Nordic comfort.</h2>
              <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                The Mt. Wellness environment is designed to feel like stepping into a quiet mountain retreat. Natural textures, warm light, calming colors, soft seating, and carefully selected imagery create a sense of comfort, warmth, belonging, and contentment.
              </p>
              <div className="aspect-[16/9] rounded-2xl overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1486707471592-8e7eb7e36f78?q=80&w=1080&auto=format&fit=crop" 
                  alt="Mountain Retreat" 
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>

            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUpVariant}
              className="flex flex-col justify-center"
            >
              <h2 className="font-serif text-3xl md:text-4xl text-primary font-bold mb-6">Premium care without pressure.</h2>
              <p className="text-muted-foreground text-lg leading-relaxed mb-10">
                We believe wellness should feel approachable, never intimidating. Our team is here to guide you, answer questions, and help you choose the services or recovery stacks that fit your goals.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {promises.map((promise, idx) => (
                  <div key={idx} className="flex items-center space-x-3">
                    <div className="w-2 h-2 rounded-full bg-[#c56d3c]" />
                    <span className="text-primary font-medium">{promise}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Founders & Experts Section (Idea #19) */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUpVariant}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="font-serif text-4xl text-primary font-bold mb-4">Founders & Clinical Experts</h2>
            <p className="text-muted-foreground text-lg">A world-class team committed to clinical integrity, recovery research, and physical restoration.</p>
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={staggerContainer}
          >
            {experts.map((profile, idx) => (
              <motion.div 
                key={idx} 
                variants={fadeUpVariant}
                className="relative overflow-hidden aspect-[3/4] rounded-3xl group cursor-pointer shadow-sm hover:shadow-2xl transition-all duration-500 border border-border/40"
              >
                {/* Headshot Image (Grayscale to Color reveal) */}
                <img 
                  src={profile.image} 
                  alt={profile.name} 
                  className="w-full h-full object-cover grayscale contrast-115 transition-all duration-700 ease-out group-hover:grayscale-0 group-hover:contrast-100 group-hover:scale-103" 
                />
                
                {/* Permanent Title Overlay (hidden on hover) */}
                <div className="absolute inset-x-0 bottom-0 p-6 bg-gradient-to-t from-black/80 via-black/40 to-transparent text-white z-10 transition-transform duration-500 ease-out group-hover:translate-y-8 group-hover:opacity-0">
                  <h3 className="font-serif text-xl font-bold leading-tight">{profile.name}</h3>
                  <p className="text-[#c56d3c] text-xs font-semibold uppercase tracking-wider mt-1">{profile.role}</p>
                </div>

                {/* Frosted Glass Overlay Slide-up */}
                <div className="absolute inset-0 bg-[#0b2b16]/75 backdrop-blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8 border border-white/10 rounded-3xl z-20">
                  <div className="translate-y-8 group-hover:translate-y-0 transition-transform duration-500 ease-out text-white">
                    <span className="text-[#c56d3c] text-[10px] font-bold uppercase tracking-wider bg-white/10 backdrop-blur-md px-3 py-1 rounded-full border border-white/10 inline-block mb-3">
                      {profile.certifications}
                    </span>
                    <h4 className="font-serif text-2xl font-bold mb-1 leading-tight">{profile.name}</h4>
                    <p className="text-white/80 text-xs font-medium uppercase tracking-wider mb-4">{profile.role}</p>
                    <p className="text-white/95 text-sm leading-relaxed font-serif">
                      {profile.bio}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Visit Us */}
      <section className="py-24 bg-[#1e293b] text-white relative">
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 to-transparent pointer-events-none" />
        <div className="container mx-auto px-4 relative z-10">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUpVariant}
            className="max-w-6xl mx-auto bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8 md:p-16"
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">
              <div>
                <h2 className="font-serif text-4xl font-bold mb-8">Visit Us</h2>
                <div className="space-y-8">
                  <div className="flex items-start space-x-4">
                    <MapPin className="w-6 h-6 text-[#c56d3c] shrink-0 mt-1" />
                    <div>
                      <h4 className="font-bold text-lg mb-1">Mt. Wellness Studio</h4>
                      <p className="text-white/70 mb-3">123 Nordic Sanctuary Way<br/>Denver, CO 80202</p>
                      <a href="#" className="text-[#c56d3c] font-medium hover:text-[#e08958] transition-colors flex items-center">
                        Get Directions <ArrowRight className="w-4 h-4 ml-1" />
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <Clock className="w-6 h-6 text-[#c56d3c] shrink-0 mt-1" />
                    <div>
                      <h4 className="font-bold text-lg mb-1">Hours</h4>
                      <p className="text-white/70">Monday - Friday: 7am - 8pm<br/>Saturday - Sunday: 8am - 6pm</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <Phone className="w-6 h-6 text-[#c56d3c] shrink-0 mt-1" />
                    <div>
                      <h4 className="font-bold text-lg mb-1">Contact</h4>
                      <p className="text-white/70">(555) 123-4567<br/>hello@mtwellness.com</p>
                    </div>
                  </div>
                </div>

                <div className="mt-10 flex space-x-4">
                  <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#c56d3c] transition-colors">
                    <Instagram className="w-5 h-5" />
                  </a>
                  <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#c56d3c] transition-colors">
                    <Facebook className="w-5 h-5" />
                  </a>
                </div>
              </div>

              <div className="flex flex-col justify-center text-center lg:text-left">
                <h3 className="font-serif text-3xl font-bold mb-6">Ready to recover, rejuvenate, and restore?</h3>
                <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                  <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="w-full sm:w-auto bg-[#c56d3c] text-white px-8 py-3.5 rounded-full font-medium shadow-lg hover:bg-[#b05d31] transition-colors">
                    Book Now
                  </motion.button>
                  <Link to="/pricing" className="w-full sm:w-auto">
                    <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="w-full sm:w-auto bg-transparent border-2 border-white/50 text-white px-8 py-3.5 rounded-full font-medium hover:bg-white/10 transition-colors">
                      View Pricing
                    </motion.button>
                  </Link>
                </div>
                <div className="mt-10 pt-10 border-t border-white/10 text-center lg:text-left">
                  <a href="#" className="inline-flex items-center text-white/80 hover:text-white transition-colors">
                    <span className="font-medium mr-2">Read our 5-Star Reviews on Google</span>
                    <span className="text-yellow-400">★★★★★</span>
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}