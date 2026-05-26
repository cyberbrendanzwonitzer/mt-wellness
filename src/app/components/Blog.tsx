import { motion } from "motion/react";
import { Link } from "react-router";
import { ArrowRight, Search } from "lucide-react";

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

const categories = [
  "Recovery", "Athletic Performance", "Healthy Aging", "Stress Relief", 
  "Skin Health", "Sauna", "Cold Plunge", "Red Light Therapy", 
  "PEMF", "Halotherapy", "Wellness Stacks", "Mt. Wellness Updates"
];

const articles = [
  {
    title: "The Benefits of Cold Plunging Year-Round",
    excerpt: "Cold exposure is popular among athletes and wellness enthusiasts. Learn how cold plunge sessions can support recovery, energy, and resilience as part of a balanced routine.",
    category: "Cold Plunge",
    image: "https://images.unsplash.com/photo-1734117928667-c7f943a27e80?w=800&auto=format&fit=crop"
  },
  {
    title: "Infrared Sauna: A Warm Reset for Body and Mind",
    excerpt: "Explore how infrared sauna sessions can support relaxation, sweating, circulation, and full-body restoration.",
    category: "Sauna",
    image: "https://images.unsplash.com/photo-1717356495389-6ab1e5ff9d84?w=800&auto=format&fit=crop"
  },
  {
    title: "Red Light Therapy and Skin Health",
    excerpt: "A simple look at how red and near-infrared light are used in wellness routines for skin health, cellular energy, and recovery support.",
    category: "Red Light Therapy",
    image: "https://images.unsplash.com/photo-1536972795217-00f0b4587844?w=800&auto=format&fit=crop"
  },
  {
    title: "What Is PEMF Therapy?",
    excerpt: "Learn what Pulsed Electromagnetic Field Therapy is, how PEMF mats are used, and why people include them in recovery and wellness routines.",
    category: "PEMF",
    image: "https://images.unsplash.com/photo-1611073615830-9f76902c10fe?w=800&auto=format&fit=crop"
  },
  {
    title: "Halotherapy Explained: Salt Rooms and Breathing Comfort",
    excerpt: "A beginner-friendly guide to salt therapy, calming salt-room environments, and how halotherapy may support relaxation and breathing comfort.",
    category: "Halotherapy",
    image: "https://images.unsplash.com/photo-1692246428001-84504043e157?w=800&auto=format&fit=crop"
  },
  {
    title: "Why Recovery Is More Than Rest Days",
    excerpt: "Recovery is not just about doing nothing. Learn how intentional recovery routines can support active bodies, stress reduction, and long-term wellness.",
    category: "Recovery",
    image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=800&auto=format&fit=crop"
  },
  {
    title: "How to Choose the Right Recovery Stack",
    excerpt: "Not sure where to start? Learn how to choose between Alpine Reset, Peak Performance, Meadow Calm, and Nordic Restore.",
    category: "Wellness Stacks",
    image: "https://images.unsplash.com/photo-1713439340151-6f1e7f6fb9c9?w=800&auto=format&fit=crop"
  },
  {
    title: "Healthy Aging and Consistent Wellness Routines",
    excerpt: "Explore how recovery, relaxation, movement, and restoration can become part of a healthy aging lifestyle.",
    category: "Healthy Aging",
    image: "https://images.unsplash.com/photo-1647913097114-5975d965a1ff?w=800&auto=format&fit=crop"
  },
  {
    title: "Stress Relief Through Heat, Breath, and Calm",
    excerpt: "Learn how warm environments, calm spaces, and intentional wellness routines may support relaxation and stress reduction.",
    category: "Stress Relief",
    image: "https://images.unsplash.com/photo-1600334089648-b0d9d3028eb2?w=800&auto=format&fit=crop"
  }
];

export function Blog() {
  return (
    <div className="w-full bg-background text-foreground selection:bg-primary/20 selection:text-primary">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-24 overflow-hidden bg-[#1e293b]">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat bg-fixed opacity-50"
          style={{ backgroundImage: "url('/blog_hero_bg.png')" }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/50 to-black/70" />
        
        <div className="container mx-auto px-4 relative z-10 text-center">
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={fadeUpVariant}
            className="max-w-4xl mx-auto"
          >
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white tracking-tight leading-tight">
              Recovery, wellness, and restoration — made simple.
            </h1>
            <p className="text-lg md:text-xl text-white/90 leading-relaxed mb-10 max-w-2xl mx-auto">
              Explore practical guides, science-aware resources, and wellness tips from Mt. Wellness.
            </p>
            
            <div className="max-w-md mx-auto relative mb-12">
              <input 
                type="text" 
                placeholder="Search articles..." 
                className="w-full bg-white/10 backdrop-blur-md border border-white/20 text-white placeholder-white/50 rounded-full px-6 py-4 pl-12 shadow-sm focus:outline-none focus:ring-2 focus:ring-[#c56d3c]/50 focus:border-[#c56d3c] transition-all"
              />
              <Search className="absolute left-5 top-1/2 -translate-y-1/2 w-5 h-5 text-white/50" />
            </div>
            
            <a href="#articles">
              <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="bg-[#c56d3c] text-white px-8 py-3.5 rounded-full font-medium shadow-lg hover:bg-[#b05d31] transition-colors">
                Explore Articles
              </motion.button>
            </a>
          </motion.div>
        </div>
      </section>

      {/* Categories Bar */}
      <div className="border-y border-border/50 bg-white sticky top-0 z-40">
        <div className="container mx-auto px-4">
          <div className="flex overflow-x-auto py-4 hide-scrollbar space-x-2 md:space-x-4">
            {categories.map((cat, idx) => (
              <button key={idx} className="whitespace-nowrap px-4 py-2 rounded-full text-sm font-medium bg-[#f4f2ee] text-primary hover:bg-primary/5 transition-colors border border-transparent hover:border-primary/10">
                {cat}
              </button>
            ))}
          </div>
        </div>
      </div>

      <section id="articles" className="py-20 bg-background">
        <div className="container mx-auto px-4">
          
          {/* Featured Article */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUpVariant}
            className="mb-20 group cursor-pointer"
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 bg-[#f4f2ee] rounded-3xl overflow-hidden border border-border/50 hover:shadow-xl transition-all duration-500">
              <div className="aspect-[4/3] lg:aspect-auto overflow-hidden relative">
                <img 
                  src="https://images.unsplash.com/photo-1506126613408-eca07ce68773?q=80&w=1080&auto=format&fit=crop" 
                  alt="Recovery Routine" 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="p-8 md:p-12 flex flex-col justify-center">
                <span className="text-[#c56d3c] text-xs font-bold uppercase tracking-widest block mb-4">Featured · Recovery</span>
                <h2 className="font-serif text-3xl md:text-4xl font-bold text-primary mb-6 group-hover:text-[#c56d3c] transition-colors">
                  How to Build a Recovery Routine That Actually Fits Your Life
                </h2>
                <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                  A simple guide to combining heat, cold, light, rest, and relaxation into a wellness routine that supports your goals.
                </p>
                <div className="inline-flex items-center text-primary font-bold group-hover:text-[#c56d3c] transition-colors mt-auto">
                  Read Article <ArrowRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
                </div>
              </div>
            </div>
          </motion.div>

          {/* Article Grid */}
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10 max-w-7xl mx-auto"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={staggerContainer}
          >
            {articles.map((article, idx) => (
              <motion.div 
                key={idx} 
                variants={fadeUpVariant} 
                className="group relative overflow-hidden aspect-[3/4] rounded-3xl cursor-pointer shadow-sm hover:shadow-xl transition-all duration-500 border border-border/50 flex flex-col justify-end"
              >
                {/* Backdrop cover image */}
                <img 
                  src={article.image} 
                  alt={article.title} 
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 z-0"
                />
                
                {/* Shadow overlay to darken bottom by default */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent z-10 opacity-80 group-hover:opacity-90 transition-opacity duration-500" />
                
                {/* Vogue Editorial Frosted Glass overlay (Idea #20) */}
                <div className="absolute inset-x-0 bottom-0 bg-white/90 backdrop-blur-md border-t border-white/20 z-20 p-6 flex flex-col justify-between transition-all duration-500 ease-out transform translate-y-[62%] group-hover:translate-y-0 h-[280px]">
                  <div>
                    <span className="text-[#c56d3c] text-[10px] font-bold uppercase tracking-widest block mb-2">{article.category}</span>
                    <h3 className="font-serif text-lg md:text-xl font-bold text-primary leading-snug mb-3 group-hover:text-[#c56d3c] transition-colors line-clamp-2">
                      {article.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100 line-clamp-4">
                      {article.excerpt}
                    </p>
                  </div>
                  <div className="inline-flex items-center text-xs text-primary font-bold mt-4 group-hover:text-[#c56d3c] transition-colors">
                    Read Article <ArrowRight className="w-3.5 h-3.5 ml-1.5 transition-transform group-hover:translate-x-1" />
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <div className="mt-20 text-center">
            <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="bg-transparent border-2 border-primary text-primary px-8 py-3.5 rounded-full font-medium hover:bg-primary/5 transition-colors">
              Load More Articles
            </motion.button>
          </div>
        </div>
      </section>
    </div>
  );
}