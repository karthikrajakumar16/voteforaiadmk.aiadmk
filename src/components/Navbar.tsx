import { useState, useEffect } from "react";
import { Menu, X, Download, Globe } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Link, useLocation } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { lang, toggleLang, t } = useLanguage();

  const navLinks = [
    { label: t("முகப்பு", "Home"), href: "#hero" },
    { label: t("வாக்குறுதிகள்", "Promises"), href: "#promises" },
    { label: t("துறைவாரி", "Categories"), href: "#categories" },
    { label: t("வேட்பாளர்கள்", "Candidates"), href: "/candidates" },
  ];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/95 backdrop-blur-md shadow-sm border-b border-border"
          : "bg-transparent"
      }`}
    >
      <div className="container flex items-center justify-between h-16">
        <a href="#hero" className="flex items-center gap-2 font-bold text-lg text-primary">
          <span className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-primary-foreground text-sm font-black">அ</span>
          <span className="hidden sm:inline">AIADMK 2026</span>
        </a>

        <div className="hidden md:flex items-center gap-6">
          {navLinks.map((l) =>
            l.href.startsWith("/") ? (
              <Link
                key={l.href}
                to={l.href}
                className="text-sm font-medium text-foreground/70 hover:text-primary transition-colors"
              >
                {l.label}
              </Link>
            ) : (
              <a
                key={l.href}
                href={l.href}
                className="text-sm font-medium text-foreground/70 hover:text-primary transition-colors"
              >
                {l.label}
              </a>
            )
          )}

          {/* Language Toggle */}
          <button
            onClick={toggleLang}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-border text-sm font-medium text-foreground/70 hover:text-primary hover:border-primary/30 transition-colors"
          >
            <Globe size={14} />
            {lang === "ta" ? "EN" : "தமிழ்"}
          </button>

          <a
            href="#download"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-primary text-primary-foreground text-sm font-semibold hover:bg-primary/90 transition-colors"
          >
            <Download size={16} />
            {t("PDF பதிவிறக்கம்", "Download PDF")}
          </a>
        </div>

        <div className="flex items-center gap-2 md:hidden">
          {/* Mobile Language Toggle */}
          <button
            onClick={toggleLang}
            className="p-2 text-foreground/70 hover:text-primary transition-colors"
          >
            <Globe size={20} />
          </button>
          <button
            className="p-2 text-foreground"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-background border-b border-border overflow-hidden"
          >
            <div className="container py-4 flex flex-col gap-3">
              {navLinks.map((l) =>
                l.href.startsWith("/") ? (
                  <Link
                    key={l.href}
                    to={l.href}
                    className="text-sm font-medium py-2 text-foreground/70 hover:text-primary"
                    onClick={() => setMobileOpen(false)}
                  >
                    {l.label}
                  </Link>
                ) : (
                  <a
                    key={l.href}
                    href={l.href}
                    className="text-sm font-medium py-2 text-foreground/70 hover:text-primary"
                    onClick={() => setMobileOpen(false)}
                  >
                    {l.label}
                  </a>
                )
              )}
              <a
                href="#download"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-primary text-primary-foreground text-sm font-semibold w-fit"
                onClick={() => setMobileOpen(false)}
              >
                <Download size={16} />
                {t("PDF பதிவிறக்கம்", "Download PDF")}
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
