import Link from "next/link";
import { Phone, Mail, MapPin, MessageCircle, Facebook, Instagram, Twitter, Linkedin, Youtube } from "lucide-react";

const quickLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
    { name: "Courses", href: "/courses" },
    { name: "Pricing", href: "/pricing" },
    { name: "Plan", href: "/plan" },
    { name: "Career", href: "/career" },
  { name: "Contact", href: "/contact" },
];

const services = [
  "Digital Marketing Courses",
  "SEO Training",
  "Social Media Marketing",
  "Content Strategy",
  "Brand Development",
  "Web Analytics",
];

const socialLinks = [
  { icon: Facebook, href: "#", label: "Facebook" },
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Youtube, href: "#", label: "YouTube" },
];

export function Footer() {
  const currentYear = 2024; // Static year for hydration stability

  return (
    <footer className="bg-[#0a0a0a] border-t border-[#2a2a2a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div>
            <h3 className="text-2xl font-bold text-[#9b1c1c] mb-6">
              Fam Infomedia
            </h3>
            <p className="text-[#888888] text-sm leading-relaxed mb-6">
              Unleash your digital potential with Tamil Nadu&apos;s premier digital marketing education provider. 
              Over 2 years of excellence, 300+ satisfied clients, and 30+ industry experts ready to guide your journey.
            </p>
            <div className="flex items-center gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-[#1a1a1a] flex items-center justify-center text-[#888888] hover:bg-[#9b1c1c] hover:text-white transition-all duration-300"
                  aria-label={social.label}
                >
                  <social.icon size={18} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-[#e8e8e8] mb-6 relative">
              Quick Links
              <span className="absolute bottom-0 left-0 w-12 h-0.5 bg-[#9b1c1c] -mb-2"></span>
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-[#888888] hover:text-[#9b1c1c] transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-[#e8e8e8] mb-6 relative">
              Our Services
              <span className="absolute bottom-0 left-0 w-12 h-0.5 bg-[#9b1c1c] -mb-2"></span>
            </h4>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service} className="text-[#888888] text-sm hover:text-[#9b1c1c] transition-colors cursor-default">
                  {service}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-[#e8e8e8] mb-6 relative">
              Contact Us
              <span className="absolute bottom-0 left-0 w-12 h-0.5 bg-[#9b1c1c] -mb-2"></span>
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-[#9b1c1c] mt-1 flex-shrink-0" />
                <span className="text-[#888888] text-sm">
                  1st Floor, Krishna Ceramix, Bus Stop, opposite Maha Lakshmi Nagar, Goundampalayam, Tamil Nadu 641664
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="text-[#9b1c1c] flex-shrink-0" />
                <a href="tel:+919655519922" className="text-[#888888] hover:text-[#9b1c1c] text-sm transition-colors">
                  +91 96555 19922
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} className="text-[#9b1c1c] flex-shrink-0" />
                <a href="mailto:info@faminfomedia.com" className="text-[#888888] hover:text-[#9b1c1c] text-sm transition-colors">
                  info@faminfomedia.com
                </a>
              </li>
              <li className="flex items-center gap-3">
                <MessageCircle size={18} className="text-[#1a3d2e] flex-shrink-0" />
                <a 
                  href="https://wa.me/919655519922" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-[#888888] hover:text-[#1a3d2e] text-sm transition-colors"
                >
                  WhatsApp Us
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-[#2a2a2a]">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-[#888888] text-sm">
                © {currentYear} Fam Infomedia. All rights reserved.
              </p>
            <div className="flex items-center gap-6">
              <Link href="#" className="text-[#888888] hover:text-[#9b1c1c] text-sm transition-colors">
                Privacy Policy
              </Link>
              <Link href="#" className="text-[#888888] hover:text-[#9b1c1c] text-sm transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
