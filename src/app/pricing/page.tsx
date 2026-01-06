"use client";

import { motion } from "framer-motion";
import { 
  CheckCircle, 
  MessageCircle,
  Star,
  Zap,
  Crown,
  Gem,
  Rocket,
  Sparkles
} from "lucide-react";

const pricingPlans = [
  {
    name: "Starter Plan",
    price: "5,000",
    icon: Star,
    target: "Beginner",
    description: "Perfect for individuals starting their journey into the digital marketing world.",
    features: [
      "Digital Marketing Fundamentals",
      "SEO Basics",
      "Social Media Introduction",
      "4 Weeks Duration",
      "Email Support",
      "Course Materials Access",
      "Certificate of Completion"
    ],
    popular: false,
    color: "#1a3d2e"
  },
  {
    name: "Professional Plan",
    price: "12,000",
    icon: Zap,
    target: "Intermediate",
    description: "For marketers ready to elevate their skills and expand their industry knowledge.",
    features: [
      "Everything in Starter Plan",
      "Advanced SEO Techniques",
      "Social Media Strategy",
      "Content Marketing",
      "6 Weeks Duration",
      "Live Q&A Sessions",
      "Project-Based Learning",
      "Priority Email Support"
    ],
    popular: false,
    color: "#2d1f3d"
  },
  {
    name: "Business Master",
    price: "25,000",
    icon: Crown,
    target: "Advanced",
    description: "The most popular choice for serious digital marketing professionals and entrepreneurs.",
    features: [
      "Everything in Professional Plan",
      "PPC & Paid Advertising",
      "Analytics Mastery",
      "Brand Strategy",
      "8 Weeks Duration",
      "1-on-1 Mentorship Sessions",
      "Real Client Projects",
      "Job Placement Assistance",
      "Lifetime Access to Updates"
    ],
    popular: true,
    color: "#9b1c1c"
  },
  {
    name: "Expert Program",
    price: "40,000",
    icon: Gem,
    target: "Expert",
    description: "Comprehensive mastery for those who demand excellence in every digital aspect.",
    features: [
      "Everything in Business Master",
      "Advanced Strategy Planning",
      "Team Leadership Training",
      "Client Management Skills",
      "10 Weeks Duration",
      "Weekly 1-on-1 Coaching",
      "Portfolio Development",
      "Industry Networking Events",
      "Guaranteed Internship",
      "Premium Job Placement"
    ],
    popular: false,
    color: "#2d1f3d"
  },
  {
    name: "Enterprise Solutions",
    price: "50,000",
    icon: Rocket,
    target: "Enterprise",
    description: "The complete digital marketing transformation for absolute market leadership.",
    features: [
      "Everything in Expert Program",
      "Complete 12-Week Program",
      "All Course Modules Included",
      "Unlimited 1-on-1 Sessions",
      "Business Development Training",
      "Agency Operations Training",
      "Personal Brand Building",
      "Exclusive Alumni Network",
      "Lifetime Mentorship Access",
      "100% Job Guarantee",
      "Startup Incubation Support"
    ],
    popular: false,
    color: "#1a3d2e"
  },
];

export default function PricingPage() {
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
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <div className="flex items-center justify-center gap-3 mb-6">
              <Sparkles className="w-6 h-6 text-[#9b1c1c]" />
              <span className="text-[#888888] uppercase tracking-[0.3em] text-sm font-medium">Select Your Plan</span>
              <Sparkles className="w-6 h-6 text-[#9b1c1c]" />
            </div>
            
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-[#e8e8e8] mb-6">
              Our <span className="text-gradient-primary">Pricing</span>
            </h1>
            
            <p className="text-[#888888] text-lg max-w-3xl mx-auto leading-relaxed">
              Invest in your digital future with our carefully crafted education plans. 
              From beginners to enterprise-level professionals, we have the perfect package for you.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
            {pricingPlans.map((plan, index) => (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className={`card-standard rounded-2xl overflow-hidden relative flex flex-col h-full ${plan.popular ? 'ring-2 ring-[#9b1c1c]' : ''}`}
              >
                {plan.popular && (
                  <div className="absolute top-0 left-0 right-0 bg-[#9b1c1c] text-white text-center py-2 text-sm font-semibold">
                    Most Popular
                  </div>
                )}
                
                <div className={`p-6 flex-grow flex flex-col ${plan.popular ? 'pt-12' : ''}`}>
                  <div 
                    className="w-14 h-14 rounded-xl flex items-center justify-center mb-4"
                    style={{ backgroundColor: `${plan.color}20` }}
                  >
                    <plan.icon className="w-7 h-7" style={{ color: plan.color }} />
                  </div>

                  <h3 className="text-xl font-bold text-[#e8e8e8] mb-1">
                    {plan.name}
                  </h3>
                  
                  <div className="mb-4">
                    <span className="text-xs px-2 py-0.5 rounded-full bg-[#2a2a2a] text-[#888888]">
                      {plan.target}
                    </span>
                  </div>

                  <div className="mb-4">
                    <span className="text-3xl font-bold text-[#e8e8e8]">₹{plan.price}</span>
                  </div>

                  <p className="text-[#888888] text-xs mb-6 leading-relaxed">
                    {plan.description}
                  </p>

                  <div className="border-t border-[#2a2a2a] pt-4 mb-6 flex-grow">
                    <ul className="space-y-3">
                      {plan.features.map((feature) => (
                        <li key={feature} className="flex items-start gap-2 text-[#888888] text-xs leading-tight">
                          <CheckCircle size={12} className="text-[#1a3d2e] mt-0.5 flex-shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <button
                    onClick={() => handleBookNow(plan.name)}
                    className={`w-full flex items-center justify-center gap-2 px-4 py-3 rounded-lg font-bold transition-all duration-300 text-sm ${
                      plan.popular 
                        ? 'bg-[#9b1c1c] hover:bg-[#b91c1c] text-white shadow-lg shadow-red-900/20' 
                        : 'bg-[#1a1a1a] hover:bg-[#2a2a2a] text-white border border-[#2a2a2a] hover:border-[#9b1c1c]'
                    }`}
                  >
                    <MessageCircle size={16} />
                    Book Now
                  </button>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-16 text-center"
          >
            <div className="card-standard rounded-2xl p-8 relative overflow-hidden max-w-3xl mx-auto">
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(155,28,28,0.1)_0%,_transparent_70%)]"></div>
              <div className="relative z-10">
                <h2 className="text-3xl font-bold text-[#e8e8e8] mb-4">
                  Need a Custom Solution?
                </h2>
                <p className="text-[#888888] text-sm mb-6">
                  We provide specialized training for teams and corporate organizations. 
                  Contact us today for a tailored quote that fits your specific business goals.
                </p>
                <a
                  href="https://wa.me/919655519922?text=Hello!%20I'm%20interested%20in%20a%20custom%20training%20package.%20Please%20provide%20more%20details."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-[#1a3d2e] hover:bg-[#245a42] text-white rounded-lg font-semibold transition-all duration-300"
                >
                  <MessageCircle size={18} />
                  Chat on WhatsApp
                </a>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-24"
          >
            <h2 className="text-3xl font-bold text-[#e8e8e8] text-center mb-12">
              Why Choose Fam Infomedia?
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { stat: "300+", label: "Clients Served" },
                { stat: "30+", label: "Expert Team" },
                { stat: "2+", label: "Years Excellence" },
                { stat: "95%", label: "Success Rate" },
              ].map((item, index) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="card-standard rounded-xl p-6 text-center"
                >
                  <div className="text-4xl font-bold text-[#9b1c1c] mb-2">{item.stat}</div>
                  <div className="text-[#888888] text-sm">{item.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
