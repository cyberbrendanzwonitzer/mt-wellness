import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Link } from "react-router";

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

const singleSessions = [
  { title: "Red Light Therapy", duration: "20 minutes", price: "$35", bestFor: "Skin Health · Recovery · Energy" },
  { title: "Infrared Sauna", duration: "30 minutes", price: "$45", bestFor: "Relaxation · Sweating · Recovery" },
  { title: "Cold Plunge", duration: "10 minutes", price: "$30", bestFor: "Athletic Recovery · Energy · Resilience" },
  { title: "PEMF Mat", duration: "30 minutes", price: "$40", bestFor: "Circulation Support · Soreness Support · Wellness" },
  { title: "Massage Chairs", duration: "20 minutes", price: "$25", bestFor: "Muscle Tension · Relaxation · Comfort" },
  { title: "Halotherapy / Salt Therapy", duration: "30 minutes", price: "$35", bestFor: "Breathing Comfort · Skin Wellness · Stress Reduction" }
];

const recoveryStacks = [
  {
    title: "Alpine Reset",
    includes: "Infrared Sauna + Cold Plunge + PEMF Mat",
    desc: "A balanced reset for recovery, warmth, contrast, and relaxation.",
    duration: "60–75 minutes",
    price: "$95"
  },
  {
    title: "Peak Performance Stack",
    includes: "Red Light Therapy + Cold Plunge + PEMF Mat + Massage Chair",
    desc: "Designed for athletes and active bodies looking to support recovery, energy, and temporary soreness relief.",
    duration: "75–90 minutes",
    price: "$125"
  },
  {
    title: "Meadow Calm",
    includes: "Infrared Sauna + Massage Chair + Halotherapy",
    desc: "A relaxing stack focused on stress reduction, comfort, breathing ease, and calm.",
    duration: "60–75 minutes",
    price: "$85"
  },
  {
    title: "Nordic Restore",
    includes: "Infrared Sauna + Cold Plunge + Massage Chair + Halotherapy",
    desc: "A premium full-body restoration experience combining heat, cold, comfort, and calm.",
    duration: "90 minutes",
    price: "$115"
  }
];

const memberships = [
  {
    title: "Restore Membership",
    subtitle: "For consistent weekly recovery.",
    includes: ["4 sessions per month", "Member pricing on additional sessions", "Priority booking"],
    priceMonthly: 99,
    priceAnnual: 79,
    cta: "Join Restore"
  },
  {
    title: "Rejuvenate Membership",
    subtitle: "For active lifestyles and regular wellness routines.",
    includes: ["8 sessions per month", "Discounted recovery stacks", "Priority booking", "Member-only deals"],
    priceMonthly: 189,
    priceAnnual: 149,
    cta: "Join Rejuvenate",
    featured: true
  },
  {
    title: "Peak Membership",
    subtitle: "For athletes and high-frequency recovery.",
    includes: ["12 sessions per month", "Stack discounts", "Priority booking", "Monthly guest pass"],
    priceMonthly: 279,
    priceAnnual: 219,
    cta: "Join Peak"
  }
];

const deals = [
  {
    title: "New Client Special",
    offer: "20% off your first visit",
    desc: "Experience Mt. Wellness for the first time with a special introductory offer.",
    cta: "Claim Offer"
  },
  {
    title: "Recovery Stack Intro",
    offer: "Save $20 on your first recovery stack",
    desc: "Try a curated stack designed to help you reset and restore.",
    cta: "Book a Stack"
  },
  {
    title: "Bring a Friend",
    offer: "Bring a guest and both receive special pricing",
    desc: "Wellness is better shared. Invite someone to recover, relax, and restore with you.",
    cta: "View Details"
  }
];

export function Pricing() {
  const [billingPeriod, setBillingPeriod] = useState<"monthly" | "annual">("monthly");

  return (
    <div className="w-full bg-background text-foreground selection:bg-primary/20 selection:text-primary">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden bg-[#1e293b]">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat bg-fixed opacity-40"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1494861895304-fb272971c078?q=80&w=2000&auto=format&fit=crop')" }}
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
              Simple pricing. Restorative experiences.
            </h1>
            <p className="text-lg md:text-xl text-white/90 leading-relaxed mb-10 max-w-3xl mx-auto">
              Choose a single session, build a recovery stack, or explore limited-time deals designed to help you recover, rejuvenate, and restore.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="w-full sm:w-auto bg-[#c56d3c] text-white px-8 py-3.5 rounded-full font-medium shadow-lg hover:bg-[#b05d31] transition-colors">
                Book Now
              </motion.button>
              <a href="#deals" className="w-full sm:w-auto">
                <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="w-full sm:w-auto bg-white/10 backdrop-blur-md border border-white/30 text-white px-8 py-3.5 rounded-full font-medium hover:bg-white/20 transition-colors">
                  Explore Deals
                </motion.button>
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Single Sessions */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="font-serif text-4xl font-bold text-primary mb-4">Single Sessions</h2>
            <p className="text-muted-foreground text-lg">Targeted modalities for your unique recovery needs.</p>
          </div>
          
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={staggerContainer}
          >
            {singleSessions.map((session, idx) => (
              <motion.div key={idx} variants={fadeUpVariant} className="bg-card rounded-2xl p-8 border border-border hover:border-primary/30 shadow-sm hover:shadow-md transition-all flex flex-col">
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <h3 className="font-serif text-2xl font-bold text-primary mb-1">{session.title}</h3>
                    <span className="text-sm font-medium text-muted-foreground">{session.duration}</span>
                  </div>
                  <span className="text-2xl font-bold text-[#c56d3c]">{session.price}</span>
                </div>
                <div className="mb-8 flex-grow">
                  <span className="text-xs font-bold uppercase tracking-widest text-primary/60 block mb-2">Best For:</span>
                  <p className="text-sm font-medium text-primary/80">{session.bestFor}</p>
                </div>
                <motion.button whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="w-full bg-primary/5 text-primary border border-primary/20 py-3 rounded-xl font-medium hover:bg-primary hover:text-white transition-colors">
                  Book Session
                </motion.button>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Recovery Stacks */}
      <section className="py-24 bg-[#f4f2ee]">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="font-serif text-4xl font-bold text-primary mb-4">Recovery Stacks</h2>
            <p className="text-muted-foreground text-lg">
              Recovery stacks combine multiple modalities into one intentional session so you can experience heat, cold, light, comfort, and calm in a way that supports your goals.
            </p>
          </div>
          
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={staggerContainer}
          >
            {recoveryStacks.map((stack, idx) => (
              <motion.div key={idx} variants={fadeUpVariant} className="bg-card rounded-3xl p-8 md:p-10 border border-border hover:shadow-xl transition-all flex flex-col h-full">
                <div className="flex flex-col sm:flex-row justify-between items-start gap-4 mb-6 pb-6 border-b border-border/50">
                  <div>
                    <h3 className="font-serif text-3xl font-bold text-primary mb-2">{stack.title}</h3>
                    <p className="text-[#c56d3c] font-medium text-sm">{stack.includes}</p>
                  </div>
                  <div className="text-left sm:text-right">
                    <span className="text-3xl font-bold text-primary block">{stack.price}</span>
                    <span className="text-sm font-medium text-muted-foreground">{stack.duration}</span>
                  </div>
                </div>
                <p className="text-muted-foreground mb-8 flex-grow text-lg leading-relaxed">
                  {stack.desc}
                </p>
                <motion.button whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="w-full bg-primary text-white py-4 rounded-xl font-medium shadow-md hover:bg-primary/90 transition-colors">
                  Book {stack.title.replace(' Stack', '')}
                </motion.button>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Memberships */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-8">
            <h2 className="font-serif text-4xl font-bold text-primary mb-4">Memberships</h2>
            <p className="text-muted-foreground text-lg">Build a consistent wellness routine with our membership options.</p>
          </div>

          {/* Monthly / Annual Spring Toggle (Idea #15) */}
          <div className="flex justify-center items-center mb-16">
            <div className="bg-[#f4f2ee] p-1 rounded-full flex items-center border border-primary/5 shadow-inner relative">
              <button
                onClick={() => setBillingPeriod("monthly")}
                className="relative px-6 py-2.5 rounded-full text-sm font-semibold tracking-wide transition-colors z-10"
              >
                {billingPeriod === "monthly" && (
                  <motion.div
                    layoutId="activeBillingPeriod"
                    className="absolute inset-0 bg-primary rounded-full shadow-sm -z-10"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
                <span className={billingPeriod === "monthly" ? "text-white" : "text-primary/70 hover:text-primary transition-colors"}>
                  Monthly
                </span>
              </button>
              <button
                onClick={() => setBillingPeriod("annual")}
                className="relative px-6 py-2.5 rounded-full text-sm font-semibold tracking-wide transition-colors z-10 flex items-center gap-1.5"
              >
                {billingPeriod === "annual" && (
                  <motion.div
                    layoutId="activeBillingPeriod"
                    className="absolute inset-0 bg-primary rounded-full shadow-sm -z-10"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
                <span className={billingPeriod === "annual" ? "text-white" : "text-primary/70 hover:text-primary transition-colors"}>
                  Annual
                </span>
                <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wider ${
                  billingPeriod === "annual" ? "bg-white/20 text-white" : "bg-[#c56d3c]/15 text-[#c56d3c]"
                }`}>
                  Save 20%
                </span>
              </button>
            </div>
          </div>
          
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={staggerContainer}
          >
            {memberships.map((membership, idx) => {
              const price = billingPeriod === "monthly" ? membership.priceMonthly : membership.priceAnnual;
              
              return (
                <motion.div 
                  key={idx} 
                  variants={fadeUpVariant}
                  className="relative h-full flex flex-col"
                >
                  {membership.featured && (
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#c56d3c] text-white px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wider z-30 shadow-md">
                      Most Popular
                    </div>
                  )}
                  <div className={`bg-card rounded-3xl p-8 border ${
                    membership.featured 
                      ? 'border-[#c56d3c]/40 shadow-lg overflow-hidden' 
                      : 'border-border shadow-sm'
                  } transition-all flex flex-col h-full relative`}
                  >
                    {/* Featured Card Gold/Terracotta Border Sweep (Idea #16) */}
                    {membership.featured && (
                      <div className="absolute inset-0 rounded-3xl p-[2px] overflow-hidden pointer-events-none z-0">
                        <motion.div
                          className="absolute inset-0 bg-[conic-gradient(from_0deg,transparent_30%,#c56d3c_50%,transparent_70%)]"
                          animate={{ rotate: 360 }}
                          transition={{ repeat: Infinity, duration: 5, ease: "linear" }}
                          style={{ width: "200%", height: "200%", top: "-50%", left: "-50%" }}
                        />
                        <div className="absolute inset-[2px] bg-[#fcfbf9] dark:bg-card rounded-[22px] -z-10" />
                      </div>
                    )}
                    <div className="relative z-10 flex flex-col flex-grow">
                      <h3 className="font-serif text-2xl font-bold text-primary mb-2">{membership.title}</h3>
                      <p className="text-muted-foreground text-sm mb-6 h-10">{membership.subtitle}</p>
                      
                      <div className="mb-6 pb-6 border-b border-border/50">
                        <div className="text-4xl font-bold text-primary mb-1 flex items-baseline">
                          <span className="text-2xl font-normal text-primary/70 mr-0.5">$</span>
                          <AnimatePresence mode="wait">
                            <motion.span
                              key={price}
                              initial={{ opacity: 0, y: -10 }}
                              animate={{ opacity: 1, y: 0 }}
                              exit={{ opacity: 0, y: 10 }}
                              transition={{ type: "spring", stiffness: 300, damping: 20 }}
                            >
                              {price}
                            </motion.span>
                          </AnimatePresence>
                          <span className="text-sm font-normal text-muted-foreground ml-1">/mo</span>
                        </div>
                        {billingPeriod === "annual" && (
                          <div className="text-xs text-[#c56d3c] font-semibold">
                            Billed annually (save ${(membership.priceMonthly - membership.priceAnnual) * 12}/yr)
                          </div>
                        )}
                        {billingPeriod === "monthly" && <div className="h-4" />}
                      </div>

                      <ul className="mb-10 space-y-4 flex-grow">
                        {membership.includes.map((item, i) => (
                          <li key={i} className="flex items-start">
                            <svg className="w-5 h-5 text-[#c56d3c] mr-3 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                            <span className="text-sm font-medium text-primary/80">{item}</span>
                          </li>
                        ))}
                      </ul>
                      
                      <motion.button whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className={`w-full py-4 rounded-xl font-medium transition-colors ${membership.featured ? 'bg-[#c56d3c] text-white hover:bg-[#b05d31]' : 'bg-primary/5 text-primary hover:bg-primary/10'}`}>
                        {membership.cta}
                      </motion.button>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Deals Section */}
      <section id="deals" className="py-24 bg-[#1e293b] text-white relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[#1e293b]" />
          <div className="absolute inset-0 opacity-20 pointer-events-none bg-cover bg-center bg-fixed" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1611072337226-1140ab367200?q=80&w=1080&auto=format&fit=crop')" }} />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent pointer-events-none" />
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="font-serif text-4xl md:text-5xl font-bold mb-4 text-white">Current Deals</h2>
            <p className="text-white/80 text-lg">Limited-time offers to support your recovery journey.</p>
          </div>
          
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={staggerContainer}
          >
            {deals.map((deal, idx) => (
              <motion.div key={idx} variants={fadeUpVariant} className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all">
                <span className="text-[#c56d3c] text-xs font-bold uppercase tracking-widest block mb-4">Limited Time</span>
                <h3 className="font-serif text-2xl font-bold text-white mb-2">{deal.title}</h3>
                <p className="text-xl font-medium text-[#f4f2ee] mb-4 pb-4 border-b border-white/10">{deal.offer}</p>
                <p className="text-white/70 text-sm mb-8 leading-relaxed h-16">{deal.desc}</p>
                <motion.button whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="w-full bg-white text-primary py-3 rounded-xl font-medium hover:bg-[#f4f2ee] transition-colors">
                  {deal.cta}
                </motion.button>
              </motion.div>
            ))}
          </motion.div>

          <p className="text-center text-xs text-white/50 max-w-2xl mx-auto">
            Deals are limited-time offers. Offers may not be combined with other promotions. Terms may apply.
          </p>
        </div>
      </section>
      
      {/* Mobile Sticky CTA */}
      <div className="fixed bottom-0 left-0 right-0 p-4 bg-background/90 backdrop-blur-lg border-t border-border z-50 md:hidden flex justify-center shadow-[0_-10px_20px_rgba(0,0,0,0.05)]">
        <motion.button whileTap={{ scale: 0.95 }} className="w-full max-w-sm bg-[#c56d3c] text-white py-4 rounded-xl font-bold shadow-lg">
          Book Now
        </motion.button>
      </div>
    </div>
  );
}