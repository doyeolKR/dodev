import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Home, User, Code, Briefcase, Mail } from "lucide-react";
import { smoothScrollTo } from "../utils/smoothScroll";

const navItems = [
  { name: "Home", icon: Home, href: "home" },
  { name: "About", icon: User, href: "about" },
  { name: "Project", icon: Briefcase, href: "projects" },
  { name: "Skill", icon: Code, href: "skills" },
  { name: "Contact", icon: Mail, href: "contact" },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setIsScrolled(currentScrollY > 400 && currentScrollY > lastScrollY);
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    e.preventDefault();
    setTimeout(() => {
      smoothScrollTo(href);
    }, 50);
    setIsMobileMenuOpen(false);
  };

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "translate-y-[-100%] bg-transparent py-6"
          : "translate-y-0 bg-black/80 backdrop-blur-md py-4"
      }`}
    >
      <div className="container mx-auto px-4">
        <nav className="flex items-center justify-between select-none">
          {/* <motion.a
            href="#"
            className="text-4xl font-bold text-white"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            Dodev
          </motion.a> */}
          <a href="#" className="text-4xl font-bold text-white">
            Dodev
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={`#${item.href}`}
                onClick={(e) => handleNavClick(e, item.href)}
                className="headers md:text-lg text-gray-300 hover:text-white flex items-center space-x-1 transition-colors"
              >
                <span>{item.name}</span>
              </a>
              // <motion.a
              //   key={item.name}
              //   href={`#${item.href}`}
              //   onClick={(e) => handleNavClick(e, item.href)}
              //   className="headers md:text-lg text-gray-300 hover:text-white flex items-center space-x-1 transition-colors"
              //   initial={{ opacity: 0, y: -20 }}
              //   animate={{ opacity: 1, y: 0 }}
              //   transition={{ duration: 0.5, delay: index * 0.1 }}
              // >
              //   <item.icon className="w-4 h-4" />
              //   <span>{item.name}</span>
              // </motion.a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            className="md:hidden text-white"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            {isMobileMenuOpen ? <X /> : <Menu />}
          </motion.button>
        </nav>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              className="md:hidden absolute top-full left-0 right-0 bg-black/95 backdrop-blur-md"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
            >
              <div className="container mx-auto py-4 px-4">
                {navItems.map((item, index) => (
                  <motion.a
                    key={item.name}
                    href={`#${item.href}`}
                    onClick={(e) => handleNavClick(e, item.href)}
                    className="flex items-center space-x-2 text-gray-300 hover:text-white py-3 transition-colors"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <item.icon className="w-5 h-5" />
                    <span>{item.name}</span>
                  </motion.a>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}
