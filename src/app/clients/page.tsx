"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Building, Users, Award, Star, Sparkles, Image as ImageIcon, Briefcase, Globe, Zap, Target, Rocket, Shield } from "lucide-react";

const clients = [
  { name: "TechCorp Solutions", industry: "Technology", icon: Zap, color: "#9b1c1c" },
  { name: "Digital Dreams", industry: "Media", icon: Globe, color: "#1a3d2e" },
  { name: "Growth Marketing", industry: "Marketing", icon: Target, color: "#2d1f3d" },
  { name: "Innovate Labs", industry: "R&D", icon: Rocket, color: "#9b1c1c" },
  { name: "Phoenix Brands", industry: "E-commerce", icon: Briefcase, color: "#1a3d2e" },
  { name: "Stellar Media", industry: "Entertainment", icon: Sparkles, color: "#2d1f3d" },
  { name: "Apex Ventures", industry: "Finance", icon: Shield, color: "#9b1c1c" },
  { name: "Nova Industries", industry: "Manufacturing", icon: Building, color: "#1a3d2e" },
  { name: "Prime Solutions", industry: "Consulting", icon: Users, color: "#2d1f3d" },
  { name: "Elite Brands", industry: "Lifestyle", icon: Star, color: "#9b1c1c" },
  { name: "Vanguard Tech", industry: "Software", icon: Zap, color: "#1a3d2e" },
  { name: "Summit Digital", industry: "Education", icon: Globe, color: "#2d1f3d" },
  { name: "Horizon Group", industry: "Real Estate", icon: Building, color: "#9b1c1c" },
  { name: "Pinnacle Corp", industry: "Logistics", icon: Rocket, color: "#1a3d2e" },
  { name: "Zenith Marketing", industry: "Advertising", icon: Target, color: "#2d1f3d" },
  { name: "Titan Brands", industry: "Consumer Goods", icon: Briefcase, color: "#9b1c1c" },
  { name: "Mercury Labs", industry: "Healthcare", icon: Shield, color: "#1a3d2e" },
  { name: "Atlas Digital", industry: "Services", icon: Sparkles, color: "#2d1f3d" },
];

const testimonials = [
  {
    quote: "Fam Infomedia transformed our online presence completely. Their strategies brought us measurable growth and improved our brand visibility significantly.",
    author: "Ramesh Sundaram",
    company: "TechCorp Solutions",
    rating: 5
  },
  {
    quote: "The team's expertise in social media marketing is exceptional. Our engagement rates have increased by 300% since we started working together.",
    author: "Lakshmi Venkatesh",
    company: "Digital Dreams",
    rating: 5
  },
  {
    quote: "Their courses equipped our marketing team with skills that have directly impacted our ROI. The training is practical and results-driven.",
    author: "Anand Krishnan",
    company: "Growth Marketing",
    rating: 5
  },
];

export default function ClientsPage() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <div className="bg-main-gradient min-h-screen pt-20">
      <section className="py-24 relative">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(155,28,28,0.1)_0%,_transparent_70%)]"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, ease: [0.23, 1, 0.32, 1] }}
            className="text-center mb-16"
          >
            <div className="flex items-center justify-center gap-3 mb-6">
              <Sparkles className="w-6 h-6 text-[#9b1c1c]" />
              <span className="text-[#888888] uppercase tracking-[0.3em] text-xs font-medium">Our Network</span>
              <Sparkles className="w-6 h-6 text-[#9b1c1c]" />
            </div>
            
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-[#e8e8e8] mb-6">
              Trusted <span className="text-gradient-primary">Partners</span>
            </h1>
            
            <p className="text-[#888888] text-lg max-w-3xl mx-auto mb-12 leading-relaxed">
              We take pride in our collaborations with industry leaders and innovative startups. 
              Our clients are at the heart of everything we do.
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
              {[
                { label: "Clients Served", value: "300+", icon: Users },
                { label: "Industries", value: "50+", icon: Building },
                { label: "Retention Rate", value: "95%", icon: Star },
                { label: "Success Rate", value: "98%", icon: Award },
              ].map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: i * 0.05, duration: 0.4 }}
                  className="card-standard p-6 rounded-2xl text-center transform-gpu will-change-transform"
                >
                  <stat.icon className="w-6 h-6 text-[#9b1c1c] mx-auto mb-3" />
                  <div className="text-2xl font-bold text-[#e8e8e8] mb-1">{stat.value}</div>
                  <div className="text-[#888888] text-xs uppercase tracking-wider">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.4 }}
            className="mb-24"
          >
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-6">
              {clients.map((client, index) => (
                <motion.div
                  key={client.name}
                  initial={{ opacity: 0, y: 15 }}
                  animate={isLoaded ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: index * 0.03, duration: 0.3 }}
                  whileHover={{ y: -8, scale: 1.02 }}
                  className="group cursor-pointer"
                >
                  <div className="card-standard rounded-2xl p-6 h-48 flex flex-col items-center justify-center text-center transition-all duration-300 border border-[#2a2a2a] group-hover:border-[#9b1c1c]/50 relative overflow-hidden transform-gpu will-change-transform">
                    <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-[#9b1c1c]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    
                    <div className="w-20 h-20 rounded-2xl bg-[#1a1a1a] flex items-center justify-center mb-5 group-hover:bg-[#9b1c1c]/10 transition-all duration-300 border border-[#2a2a2a] group-hover:border-[#9b1c1c]/20 relative z-10">
                      <client.icon className="w-10 h-10 transition-all duration-300 group-hover:scale-110" style={{ color: client.color }} />
                    </div>
                    
                    <div className="relative z-10">
                      <p className="text-[#e8e8e8] text-sm font-bold group-hover:text-white mb-1 transition-colors">
                        {client.name}
                      </p>
                      <span className="text-[#888888] text-[9px] uppercase tracking-widest px-2 py-0.5 rounded-full bg-[#111] border border-[#222] group-hover:border-[#9b1c1c]/30 transition-all">
                        {client.industry}
                      </span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
            <div className="mt-12 text-center">
              <p className="text-[#888888] text-sm italic">
                ...joining a community of over 300+ successful digital transformations.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="mb-24"
          >
            <h2 className="text-3xl font-bold text-[#e8e8e8] text-center mb-12">
              Success Stories
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={testimonial.author}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05, duration: 0.4 }}
                  className="card-standard rounded-2xl p-8 relative overflow-hidden group transform-gpu will-change-transform"
                >
                  <div className="absolute top-0 right-0 w-24 h-24 bg-[#9b1c1c]/5 rounded-bl-full transition-all group-hover:bg-[#9b1c1c]/10" />
                  <div className="flex gap-1 mb-6">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} size={14} className="text-[#ffd700] fill-[#ffd700]" />
                    ))}
                  </div>
                  <p className="text-[#e8e8e8] italic mb-8 relative z-10 leading-relaxed text-sm">
                    &quot;{testimonial.quote}&quot;
                  </p>
                  <div className="flex items-center gap-4 border-t border-[#2a2a2a] pt-6">
                    <div className="w-12 h-12 rounded-full bg-[#2a2a2a] flex items-center justify-center font-bold text-[#9b1c1c] border border-[#333]">
                      {testimonial.author.charAt(0)}
                    </div>
                    <div>
                      <p className="text-white font-bold text-sm">{testimonial.author}</p>
                      <p className="text-[#888888] text-xs">{testimonial.company}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <div className="card-standard rounded-3xl p-12 relative overflow-hidden transform-gpu will-change-transform">
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(155,28,28,0.1)_0%,_transparent_70%)]"></div>
              <div className="relative z-10">
                <h2 className="text-4xl font-bold text-[#e8e8e8] mb-6">
                  Want to be our next success story?
                </h2>
                <p className="text-[#888888] text-lg mb-10 max-w-2xl mx-auto">
                  Let&apos;s collaborate to take your brand to new heights in the digital landscape.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                  <a
                    href="https://wa.me/919655519922"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto px-10 py-4 bg-[#9b1c1c] hover:bg-[#b91c1c] text-white rounded-xl font-bold transition-all duration-300 shadow-xl shadow-red-900/20 transform-gpu"
                  >
                    Partner With Us
                  </a>
                  <a
                    href="/contact"
                    className="w-full sm:w-auto px-10 py-4 bg-[#1a1a1a] hover:bg-[#2a2a2a] text-white rounded-xl font-bold border border-[#2a2a2a] transition-all duration-300 transform-gpu"
                  >
                    View Case Studies
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
