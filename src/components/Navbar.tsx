import { useState, useEffect, useRef } from "react";
import { Menu, X, Download, Globe } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Link, useLocation } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";
import { useDownloadCounter } from "@/hooks/use-download-counter";
import aiadmkLogo from "@/assets/aiadmk-logo.png";
import tamilManifestoPDF from "@/assets/admk manifesto 2026 ...tamil.pdf";
import englishManifestoPDF from "@/assets/admk manifesto 2026 ... ENGLISH....pdf";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isDownloading, setIsDownloading] = useState(false);
  const navRef = useRef<HTMLDivElement>(null);
  const { lang, toggleLang, t } = useLanguage();
  const { count: downloadCount, incrementCount, error, loading } = useDownloadCounter();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleDownloadPDF = async () => {
    if (isDownloading) return; // Prevent spam clicks
    
    setIsDownloading(true);
    try {
      const manifestoPDF = lang === "ta" ? tamilManifestoPDF : englishManifestoPDF;
      window.open(manifestoPDF, "_blank");
      
      // Reset loading state immediately after PDF opens
      setIsDownloading(false);
      
      // Increment count in Firestore in background (don't wait)
      incrementCount().catch((err) => {
        console.error("Error incrementing count:", err);
      });
    } catch (err) {
      console.error("Error during download:", err);
      setIsDownloading(false);
    }
  };

  const navLinks = [
    { label: t("முகப்பு", "Home"), href: "#hero" },
    { label: t("வாக்குறுதிகள்", "Promises"), href: "#promises" },
    { label: t("துறைவாரி", "Categories"), href: "#categories" },
    { label: t("வேட்பாளர்கள்", "Candidates"), href: "/candidates" },
    { label: t("திமுக கிரிடிசம்", "DMK Criticism"), href: "/dmk-criticism" },
  ];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(event.target as Node)) {
        setMobileOpen(false);
      }
    };

    if (mobileOpen) {
      document.addEventListener("mousedown", handleClickOutside);
      return () => document.removeEventListener("mousedown", handleClickOutside);
    }
  }, [mobileOpen]);

  return (
    <nav
      ref={navRef}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/95 backdrop-blur-md shadow-sm border-b border-border"
          : "bg-transparent"
      }`}
    >
      <div className="container flex items-center justify-between h-16">
        <a href="#hero" className="flex items-center gap-2 font-bold text-lg text-primary">
          <img src={aiadmkLogo} alt="AIADMK Logo" className="w-10 h-7 object-contain" />
          <span className="hidden sm:inline">AIADMK 2026</span>
        </a>

        <div className={`hidden md:flex items-center gap-6 ${lang === "ta" ? "h-16" : ""}`}>
          {navLinks.map((l) =>
            l.href.startsWith("/") ? (
              <Link
                key={l.href}
                to={l.href}
                className={`text-sm font-medium transition-colors flex items-center h-16 ${lang === "ta" ? "leading-tight" : ""} ${
                  l.href === "/dmk-criticism"
                    ? "font-bold"
                    : "text-foreground/70 hover:text-primary"
                }`}
              >
                {l.href === "/dmk-criticism" ? (
                  <motion.div
                    animate={{ opacity: [1, 0.3, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className={`flex items-center gap-1.5 ${lang === "ta" ? "h-full" : ""}`}
                    style={{ color: "#de0a26" }}
                  >
                    <span className="flex-shrink-0 text-xl pb-1">⚠️</span>
                    <span className={`flex items-center ${lang === "ta" ? "h-full" : ""}`}>{l.label}</span>
                  </motion.div>
                ) : (
                  <span className={`flex items-center ${lang === "ta" ? "h-full" : ""}`}>{l.label}</span>
                )}
              </Link>
            ) : (
              <a
                key={l.href}
                href={l.href}
                className={`text-sm font-medium text-foreground/70 hover:text-primary transition-colors flex items-center h-16 ${lang === "ta" ? "leading-tight" : ""}`}
              >
                {l.label}
              </a>
            )
          )}

          {/* Language Toggle */}
          <button
            onClick={toggleLang}
            className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-border text-sm font-medium text-foreground/70 hover:text-primary hover:border-primary/30 transition-colors ${lang === "ta" ? "leading-tight" : ""}`}
          >
            <Globe size={14} />
            <span className={`${lang === "ta" ? "flex items-center h-5" : ""}`}>{lang === "ta" ? "EN" : "தமிழ்"}</span>
          </button>

          {/* Download Button with Count Badge */}
          <div className="flex items-center gap-3">
            <button
              onClick={handleDownloadPDF}
              disabled={isDownloading}
              className={`inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-primary text-primary-foreground text-sm font-semibold hover:bg-primary/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed ${lang === "ta" ? "leading-tight" : ""}`}
              title={error ? `Error: ${error}` : ""}
            >
              <Download size={16} className={isDownloading ? "animate-bounce" : ""} />
              <span className={`${lang === "ta" ? "flex items-center" : ""}`}>
                {isDownloading ? t("Downloading...", "Downloading...") : t("PDF பதிவிறக்கம்", "Download PDF")}
              </span>
            </button>
            <div className={`flex flex-col items-center gap-1 ${lang === "ta" ? "leading-tight" : ""}`}>
              <span className={`text-primary text-sm font-bold inline-flex items-center gap-1 ${lang === "ta" ? "leading-tight" : ""}`}>
                <Download size={14} />
                {loading ? "..." : downloadCount.toLocaleString('en-IN')}
              </span>
              <span className={`text-xs text-muted-foreground ${lang === "ta" ? "leading-tight" : ""}`}>
                {error ? t("பிழை", "Error") : t("பேர் பதிவிறக்கம் செய்தனர்", "People Downloaded")}
              </span>
            </div>
          </div>
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
                    className={`text-sm font-medium py-2 transition-colors ${
                      l.href === "/dmk-criticism"
                        ? "font-bold"
                        : "text-foreground/70 hover:text-primary"
                    }`}
                    onClick={() => setMobileOpen(false)}
                  >
                    {l.href === "/dmk-criticism" ? (
                      <motion.div
                        animate={{ opacity: [1, 0.3, 1] }}
                        transition={{ duration: 2, repeat: Infinity }}
                        className="flex items-center justify-start gap-1.5"
                        style={{ color: "#de0a26" }}
                      >
                        <span className="flex-shrink-0 text-xl pb-1">⚠️</span>
                        <span>{l.label}</span>
                      </motion.div>
                    ) : (
                      l.label
                    )}
                  </Link>
                ) : (
                  <a
                    key={l.href}
                    href={l.href}
                    className="text-sm font-medium py-2 text-foreground/70 hover:text-primary transition-colors"
                    onClick={() => setMobileOpen(false)}
                  >
                    {l.label}
                  </a>
                )
              )}
              <div className="flex flex-col items-center gap-2 pt-2">
                <button
                  onClick={() => {
                    handleDownloadPDF();
                    setMobileOpen(false);
                  }}
                  disabled={isDownloading}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-primary text-primary-foreground text-sm font-semibold w-fit disabled:opacity-50 disabled:cursor-not-allowed"
                  title={error ? `Error: ${error}` : ""}  
                >
                  <Download size={16} className={isDownloading ? "animate-bounce" : ""} />
                  {isDownloading ? t("பதிவிறக்குதல் நடந்து கொண்டிருக்கிறது...", "Downloading...") : t("PDF பதிவிறக்கம்", "Download PDF")}
                </button>
                <div className="flex flex-col items-center gap-1">
                  <span className="text-primary text-xs font-bold inline-flex items-center gap-1">
                    <Download size={12} />
                    {loading ? "..." : downloadCount.toLocaleString('en-IN')}
                  </span>
                  <span className="text-xs text-muted-foreground">
                    {error ? t("பிழை", "Error") : t("பேர் பதிவிறக்கம் செய்தனர்", "People Downloaded")}
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
