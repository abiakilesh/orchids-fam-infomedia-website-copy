"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { 
  Phone, 
  MessageCircle,
  Calendar,
  Clock,
  CheckCircle,
  ArrowRight,
  Sparkles
} from "lucide-react";

export default function SpeakUsNowPage() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    preferredTime: "",
    topic: ""
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleBookCall = (e: React.FormEvent) => {
    e.preventDefault();
    const message = encodeURIComponent(
      `Hello! I'd like to book a call.\n\nName: ${formData.name}\nPhone: ${formData.phone}\nEmail: ${formData.email}\nPreferred Time: ${formData.preferredTime}\nTopic: ${formData.topic}`
    );
    window.open(`https://wa.me/919655519922?text=${message}`, '_blank');
  };

  const handleWhatsAppNow = () => {
    const message = encodeURIComponent("Hello! I'd like to speak with someone from Fam Infomedia about your services.");
    window.open(`https://wa.me/919655519922?text=${message}`, '_blank');
  };

  return (
    <div className="bg-main-gradient min-h-screen pt-20">
      <section className="py-24 relative">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(155,28,28,0.1)_0%,_transparent_70%)]"></div>
        
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <div className="flex items-center justify-center gap-3 mb-6">
              <Sparkles className="w-8 h-8 text-[#9b1c1c]" />
              <span className="text-[#888888] uppercase tracking-[0.3em] text-sm">Connect With Us</span>
              <Sparkles className="w-8 h-8 text-[#9b1c1c]" />
            </div>
            
            <h1 className="text-5xl sm:text-6xl lg:text-7xl text-[#e8e8e8] font-bold mb-6">
              Speak <span className="text-gradient-primary">Us Now</span>
            </h1>
            
            <p className="text-[#888888] text-lg max-w-2xl mx-auto">
              Choose your preferred way to connect with our team. Whether you want to schedule a call 
              or chat instantly on WhatsApp, we&apos;re here to help you on your digital marketing journey.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="card-standard rounded-2xl p-8"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-lg bg-[#9b1c1c]/10 flex items-center justify-center border border-[#9b1c1c]/20">
                  <Calendar className="w-6 h-6 text-[#9b1c1c]" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-[#e8e8e8]">Book an Expected Call</h2>
                  <p className="text-[#888888] text-sm">Schedule a callback at your convenience</p>
                </div>
              </div>

              <form onSubmit={handleBookCall} className="space-y-4">
                <div>
                  <label className="block text-[#e8e8e8] text-sm font-medium mb-2">Your Name *</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-[#1a1a1a] border border-[#2a2a2a] rounded-lg text-[#e8e8e8] focus:border-[#9b1c1c] focus:outline-none transition-colors"
                    placeholder="Enter your name"
                  />
                </div>

                <div>
                  <label className="block text-[#e8e8e8] text-sm font-medium mb-2">Phone Number *</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-[#1a1a1a] border border-[#2a2a2a] rounded-lg text-[#e8e8e8] focus:border-[#9b1c1c] focus:outline-none transition-colors"
                    placeholder="+91 XXXXX XXXXX"
                  />
                </div>

                <div>
                  <label className="block text-[#e8e8e8] text-sm font-medium mb-2">Email Address</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-[#1a1a1a] border border-[#2a2a2a] rounded-lg text-[#e8e8e8] focus:border-[#9b1c1c] focus:outline-none transition-colors"
                    placeholder="your@email.com"
                  />
                </div>

                <div>
                  <label className="block text-[#e8e8e8] text-sm font-medium mb-2">Preferred Time *</label>
                  <select
                    name="preferredTime"
                    value={formData.preferredTime}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-[#1a1a1a] border border-[#2a2a2a] rounded-lg text-[#e8e8e8] focus:border-[#9b1c1c] focus:outline-none transition-colors"
                  >
                    <option value="">Select a time slot</option>
                    <option value="morning-9-11">Morning (9 AM - 11 AM)</option>
                    <option value="midday-11-1">Midday (11 AM - 1 PM)</option>
                    <option value="afternoon-2-4">Afternoon (2 PM - 4 PM)</option>
                    <option value="evening-4-6">Evening (4 PM - 6 PM)</option>
                  </select>
                </div>

                <div>
                  <label className="block text-[#e8e8e8] text-sm font-medium mb-2">What would you like to discuss?</label>
                  <textarea
                    name="topic"
                    value={formData.topic}
                    onChange={handleInputChange}
                    rows={3}
                    className="w-full px-4 py-3 bg-[#1a1a1a] border border-[#2a2a2a] rounded-lg text-[#e8e8e8] focus:border-[#9b1c1c] focus:outline-none transition-colors resize-none"
                    placeholder="Tell us about your requirements..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 px-6 py-4 bg-[#9b1c1c] hover:bg-[#b91c1c] text-white rounded-lg font-semibold transition-all duration-300"
                >
                  <Phone className="w-5 h-5" />
                  Book My Call
                </button>
              </form>

              <div className="mt-6 pt-6 border-t border-[#2a2a2a]">
                <div className="flex items-center gap-2 text-[#888888] text-sm">
                  <Clock size={16} />
                  <span>We&apos;ll call you within 24 hours of booking</span>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="space-y-8"
            >
              <div className="card-standard rounded-2xl p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-lg bg-[#1a3d2e]/10 flex items-center justify-center border border-[#1a3d2e]/20">
                    <MessageCircle className="w-6 h-6 text-[#1a3d2e]" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-[#e8e8e8]">Message on WhatsApp</h2>
                    <p className="text-[#888888] text-sm">Get instant responses from our team</p>
                  </div>
                </div>

                <p className="text-[#888888] mb-6">
                  Prefer instant communication? Chat with us directly on WhatsApp and get your questions 
                  answered in real-time. Our team typically responds within minutes during business hours.
                </p>

                <button
                  onClick={handleWhatsAppNow}
                  className="w-full flex items-center justify-center gap-2 px-6 py-4 bg-[#1a3d2e] hover:bg-[#245a42] text-white rounded-lg font-semibold transition-all duration-300"
                >
                  <MessageCircle className="w-5 h-5" />
                  Chat on WhatsApp
                </button>

                <div className="mt-6 space-y-3">
                  <div className="flex items-center gap-2 text-[#888888] text-sm">
                    <CheckCircle size={16} className="text-[#1a3d2e]" />
                    <span>Instant response during business hours</span>
                  </div>
                  <div className="flex items-center gap-2 text-[#888888] text-sm">
                    <CheckCircle size={16} className="text-[#1a3d2e]" />
                    <span>Share documents and images easily</span>
                  </div>
                  <div className="flex items-center gap-2 text-[#888888] text-sm">
                    <CheckCircle size={16} className="text-[#1a3d2e]" />
                    <span>Continue conversation anytime</span>
                  </div>
                </div>
              </div>

              <div className="card-standard rounded-2xl p-8 relative overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(155,28,28,0.1)_0%,_transparent_60%)]"></div>
                <div className="relative z-10">
                  <h3 className="text-xl font-bold text-[#e8e8e8] mb-4">Why Talk to Us?</h3>
                  <ul className="space-y-3">
                    {["Get personalized course recommendations", "Discuss custom training packages", "Learn about career opportunities", "Explore our digital marketing services", "Get free consultation on your marketing needs"].map((item, i) => (
                      <li key={i} className="flex items-start gap-3 text-[#888888]">
                        <ArrowRight size={16} className="text-[#9b1c1c] mt-1 flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="card-standard rounded-xl p-6 text-center border-t-2 border-t-[#9b1c1c]">
                <p className="text-[#888888] text-sm mb-2 uppercase tracking-widest">Direct Line</p>
                <a 
                  href="tel:+919655519922"
                  className="text-3xl font-bold text-[#9b1c1c] hover:text-[#b91c1c] transition-colors"
                >
                  +91 96555 19922
                </a>
                <p className="text-[#888888] text-sm mt-2">Mon - Sat: 9 AM - 6 PM</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
