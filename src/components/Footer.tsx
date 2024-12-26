import React from "react";
import { motion } from "framer-motion";
import {
  Briefcase,
  Code,
  Github,
  Home,
  Linkedin,
  Mail,
  User,
} from "lucide-react";
import { smoothScrollTo } from "../utils/smoothScroll";

export default function Footer() {
  const navItems = [
    { name: "홈", icon: Home, href: "home" },
    { name: "소개", icon: User, href: "about" },
    { name: "프로젝트", icon: Briefcase, href: "projects" },
    { name: "기술", icon: Code, href: "skills" },
    { name: "연락하기", icon: Mail, href: "contact" },
  ];

  const contactLinks = [
    {
      name: "Github",
      icon: Github,
      href: "https://github.com",
    },
    {
      name: "LinkedIn",
      icon: Linkedin,
      href: "https://linkedin.com",
    },
    {
      name: "Email",
      icon: Mail,
      href: "mailto:contact@example.com",
    },
  ];

  const currentYear = new Date().getFullYear();

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    e.preventDefault();
    smoothScrollTo(href.replace("#", ""));
  };

  return (
    <section id="footer" className="relative">
      <footer className="bg-black py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="flex justify-around gap-8 mb-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className=""
              >
                <div className="flex flex-col">
                  <h3 className="text-lg font-bold text-white/80 mb-4">
                    Quick Links
                  </h3>

                  <ul className="space-y-2 text-center">
                    {navItems.map((item, index) => (
                      <li key={index}>
                        <a
                          href={`#${item.href}`}
                          onClick={(e) => handleNavClick(e, item.href)}
                          className="text-sm text-gray-400 hover:text-white transition-colors"
                        >
                          {item.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className=""
              >
                <div className="flex flex-col">
                  <h3 className="text-lg font-bold text-white/80 mb-4">
                    Contact
                  </h3>
                  <ul className="space-y-2">
                    {contactLinks.map((link, index) => (
                      <li className="flex justify-center" key={index}>
                        <a
                          href={link.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-sm text-gray-400 hover:text-white transition-colors"
                          aria-label={link.name}
                        >
                          <link.icon className="w-5 h-5" />
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="border-t border-gray-800 pt-8 text-center"
            >
              <p className="text-gray-400 flex items-center justify-center">
                Made by Dodev © {currentYear}
              </p>
            </motion.div>
          </div>
        </div>
      </footer>
    </section>
  );
}
