"use client";

import { motion } from "framer-motion";
import { 
  CheckCircle2, 
  MessageCircle,
  Sparkles,
  Zap,
  Globe,
  FileText,
  Image as ImageIcon,
  Star,
  Target,
  TrendingUp,
  Award,
  Smartphone
} from "lucide-react";

const businessPlans = [
  {
    name: "Basic Business",
    price: "4,999",
    icon: Target,
    description: "Essential social media presence and basic reporting for small businesses.",
    features: [
      "Facebook-Post & Maintenance",
      "Instagram Post & Maintenance",
      "Twitter-Post & Maintenance",
      "GMB Post & Maintenance",
      "YouTube - Post & Maintenance",
      "Meta Ads",
      "Monthly Digital Strategy Discussion",
      "Daily Reporting (WhatsApp/Email)"
    ],
    highlight: false,
    color: "#1a3d2e"
  },
  {
    name: "Start-up Business",
    price: "9,999",
    icon: TrendingUp,
    description: "Comprehensive marketing with combined Meta and Google ad strategies.",
    features: [
      "Facebook-Post & Maintenance",
      "Instagram Post & Maintenance",
      "Twitter-Post & Maintenance",
      "GMB Post & Maintenance",
      "Meta Ads, Google Ad",
      "15 Digital Designs + 3 Videos",
      "Monthly Digital Strategy Discussion",
      "Daily Reporting (WhatsApp/Email)"
    ],
    highlight: true,
    color: "#9b1c1c"
  },
  {
    name: "Business Plus",
    price: "19,999",
    icon: Award,
    description: "Maximum reach with full-scale ad management and creative content.",
    features: [
      "Facebook-Post & Maintenance",
      "Instagram Post & Maintenance",
      "Twitter-Post & Maintenance",
      "GMB Post & Maintenance",
      "Meta Ads, Google Ad, YT Ads",
      "Creative Designs & Videos",
      "Monthly Digital Strategy Discussion",
      "Daily Reporting (WhatsApp/Email)",
      "Dynamic Inbound Call Routing"
    ],
    highlight: false,
    color: "#2d1f3d"
  }
];

const websitePlans = [
  {
    name: "Basic Package",
    price: "4,999",
    icon: Globe,
    description: "Perfect for getting your business online with essential features.",
    features: [
      "Domain Purchase (One Year)",
      "Hosting Purchase (One Year)",
      "Create Upto 5 Pages",
      "Google Map Integration",
      "Contact Form Integration",
      "Gallery & Content Module",
      "Social Media Pages Integration"
    ],
    highlight: false,
    color: "#1a3d2e"
  },
  {
    name: "Business Package",
    price: "9,999",
    icon: Smartphone,
    description: "Professional multi-page website with advanced integrations.",
    features: [
      "Domain Purchase (One Year)",
      "Hosting Purchase (One Year)",
      "Create Upto 10 Pages",
      "Google Map Integration",
      "Contact Form Integration",
      "Gallery and Testimonial Section",
      "Chatbot Integration",
      "Google Analytics",
      "Google Tag Manager Integration",
      "Google Search Console Submission",
      "Social Media & Whatsapp Chat",
      "Website Security Setup"
    ],
    highlight: true,
    color: "#9b1c1c"
  }
];

export default function PlanPage() {
  const handleBookNow = (planName: string) => {
    const message = encodeURIComponent(`Hello! I'm interested in the "${planName}" plan. Please provide more details.`);
    window.open(`https://wa.me/919655519922?text=${message}`, '_blank');
  };

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
              <span className="text-[#888888] uppercase tracking-[0.3em] text-xs font-medium">Strategic Growth</span>
              <Sparkles className="w-6 h-6 text-[#9b1c1c]" />
            </div>
            
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-[#e8e8e8] mb-6">
              Service <span className="text-gradient-primary">Plans</span>
            </h1>
            
            <p className="text-[#888888] text-lg max-w-3xl mx-auto leading-relaxed">
              Explore our results-driven packages designed to scale your brand efficiently.
            </p>
          </motion.div>

          <div className="mb-24">
            <h2 className="text-3xl font-bold text-[#e8e8e8] mb-12 flex items-center gap-3">
              <Zap className="text-[#9b1c1c]" /> Business Management
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {businessPlans.map((plan, index) => (
                <motion.div
                  key={plan.name}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ 
                    duration: 0.4, 
                    delay: index * 0.05,
                    ease: "easeOut" 
                  }}
                  className={`card-standard rounded-2xl overflow-hidden relative flex flex-col h-full transform-gpu will-change-transform ${plan.highlight ? 'ring-2 ring-[#9b1c1c]' : ''}`}
                >
                  {plan.highlight && (
                    <div className="absolute top-0 left-0 right-0 bg-[#9b1c1c] text-white text-center py-2 text-sm font-semibold">
                      Best Value
                    </div>
                  )}
                  
                  <div className={`p-8 flex-grow flex flex-col ${plan.highlight ? 'pt-12' : ''}`}>
                    <div 
                      className="w-14 h-14 rounded-xl flex items-center justify-center mb-6"
                      style={{ backgroundColor: `${plan.color}20` }}
                    >
                      <plan.icon className="w-7 h-7" style={{ color: plan.color }} />
                    </div>

                    <h3 className="text-2xl font-bold text-[#e8e8e8] mb-2">{plan.name}</h3>
                    
                    <div className="mb-4">
                      <span className="text-4xl font-bold text-[#e8e8e8]">₹{plan.price}</span>
                      <span className="text-[#888888] text-sm ml-2">/ month</span>
                    </div>

                    <p className="text-[#888888] text-sm mb-8 leading-relaxed">
                      {plan.description}
                    </p>
                    
                    <div className="border-t border-[#2a2a2a] pt-6 mb-8 flex-grow">
                      <ul className="space-y-4">
                        {plan.features.map((feature) => (
                          <li key={feature} className="flex items-start gap-3 text-[#888888] text-sm leading-relaxed">
                            <CheckCircle2 size={16} className="text-[#9b1c1c] mt-0.5 flex-shrink-0" />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <button
                      onClick={() => handleBookNow(plan.name)}
                      className={`w-full flex items-center justify-center gap-2 px-6 py-4 rounded-xl font-bold transition-all duration-300 transform-gpu ${
                        plan.highlight 
                          ? 'bg-[#9b1c1c] hover:bg-[#b91c1c] text-white shadow-lg shadow-red-900/20' 
                          : 'bg-[#1a1a1a] hover:bg-[#2a2a2a] text-white border border-[#2a2a2a] hover:border-[#9b1c1c]'
                      }`}
                    >
                      <MessageCircle size={20} />
                      Book Now
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="mb-24">
            <h2 className="text-3xl font-bold text-[#e8e8e8] mb-12 flex items-center gap-3">
              <Globe className="text-[#9b1c1c]" /> Website Packages
            </h2>
            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {websitePlans.map((plan, index) => (
                <motion.div
                  key={plan.name}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ 
                    duration: 0.4, 
                    delay: index * 0.05,
                    ease: "easeOut" 
                  }}
                  className={`card-standard rounded-2xl overflow-hidden relative flex flex-col h-full transform-gpu will-change-transform ${plan.highlight ? 'ring-2 ring-[#9b1c1c]' : ''}`}
                >
                  {plan.highlight && (
                    <div className="absolute top-0 left-0 right-0 bg-[#9b1c1c] text-white text-center py-2 text-sm font-semibold">
                      Most Popular
                    </div>
                  )}

                  <div className={`p-10 flex-grow flex flex-col ${plan.highlight ? 'pt-16' : ''}`}>
                    <div 
                      className="w-16 h-16 rounded-2xl flex items-center justify-center mb-8"
                      style={{ backgroundColor: `${plan.color}20` }}
                    >
                      <plan.icon className="w-8 h-8" style={{ color: plan.color }} />
                    </div>

                    <h3 className="text-2xl font-bold text-[#e8e8e8] mb-2">{plan.name}</h3>
                    
                    <div className="mb-6">
                      <span className="text-4xl font-bold text-[#e8e8e8]">₹{plan.price}</span>
                    </div>

                    <p className="text-[#888888] text-base mb-8 leading-relaxed">
                      {plan.description}
                    </p>
                    
                    <div className="border-t border-[#2a2a2a] pt-8 mb-10 flex-grow">
                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4">
                        {plan.features.map((feature) => (
                          <li key={feature} className="flex items-start gap-3 text-[#888888] text-sm leading-relaxed">
                            <CheckCircle2 size={16} className="text-[#9b1c1c] mt-0.5 flex-shrink-0" />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <button
                      onClick={() => handleBookNow(plan.name)}
                      className={`w-full flex items-center justify-center gap-3 px-8 py-5 rounded-2xl font-bold transition-all duration-300 transform-gpu ${
                        plan.highlight 
                          ? 'bg-[#9b1c1c] hover:bg-[#b91c1c] text-white shadow-xl shadow-red-900/30' 
                          : 'bg-[#1a1a1a] hover:bg-[#2a2a2a] text-white border border-[#2a2a2a] hover:border-[#9b1c1c]'
                      }`}
                    >
                      <MessageCircle size={24} />
                      Book Now
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="mt-24"
          >
            <div className="card-standard rounded-3xl p-8 md:p-12 relative overflow-hidden transform-gpu will-change-transform">
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(155,28,28,0.1)_0%,_transparent_70%)]"></div>
              
              <div className="relative z-10 grid lg:grid-cols-2 gap-12 items-center">
                <div>
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 rounded-xl bg-[#9b1c1c]/20 flex items-center justify-center">
                      <FileText className="text-[#9b1c1c]" size={24} />
                    </div>
                    <h2 className="text-4xl font-bold text-[#e8e8e8]">Image to Text</h2>
                  </div>
                  
                  <p className="text-[#888888] text-lg mb-8 leading-relaxed">
                    Convert your images into editable digital text with high accuracy. 
                    Perfect for digitizing documents, business cards, and printed content.
                  </p>
                  
                  <ul className="space-y-4 mb-10">
                    {[
                      "High Precision OCR Technology",
                      "Multi-language Support",
                      "Batch Processing Available",
                      "Export to Multiple Formats",
                      "Secure Data Handling"
                    ].map((item) => (
                      <li key={item} className="flex items-center gap-3 text-[#e8e8e8]">
                        <div className="w-5 h-5 rounded-full bg-[#1a3d2e] flex items-center justify-center flex-shrink-0">
                          <CheckCircle2 size={12} className="text-[#4ade80]" />
                        </div>
                        <span className="text-sm font-medium">{item}</span>
                      </li>
                    ))}
                  </ul>

                  <button
                    onClick={() => handleBookNow("Image to Text Service")}
                    className="flex items-center gap-3 px-8 py-4 bg-[#9b1c1c] hover:bg-[#b91c1c] text-white rounded-xl font-bold transition-all duration-300 shadow-xl shadow-red-900/30 transform-gpu"
                  >
                    <MessageCircle size={20} />
                    Book Now
                  </button>
                </div>
                
                <div className="relative">
                  <div className="aspect-square rounded-2xl bg-[#1a1a1a] border border-[#2a2a2a] p-8 flex flex-col items-center justify-center text-center">
                    <div className="w-24 h-24 rounded-2xl bg-[#9b1c1c]/10 flex items-center justify-center mb-6 border border-[#9b1c1c]/20">
                      <ImageIcon className="text-[#9b1c1c]" size={48} />
                    </div>
                    <div className="w-full h-2 bg-[#2a2a2a] rounded-full mb-4 overflow-hidden">
                      <motion.div 
                        initial={{ width: 0 }}
                        whileInView={{ width: "100%" }}
                        transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                        className="h-full bg-[#9b1c1c]"
                      />
                    </div>
                    <p className="text-[#e8e8e8] font-mono text-sm uppercase tracking-widest">Scanning...</p>
                    <div className="mt-6 space-y-2 w-full">
                      <div className="h-4 bg-[#2a2a2a] rounded w-3/4 mx-auto" />
                      <div className="h-4 bg-[#2a2a2a] rounded w-1/2 mx-auto" />
                      <div className="h-4 bg-[#2a2a2a] rounded w-2/3 mx-auto" />
                    </div>
                  </div>
                  
                  <div className="absolute -top-4 -right-4 w-24 h-24 bg-[#9b1c1c]/10 rounded-full blur-2xl" />
                  <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-[#1a3d2e]/10 rounded-full blur-2xl" />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
