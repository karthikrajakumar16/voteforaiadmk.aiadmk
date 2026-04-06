import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { ChevronDown, FileDown } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const CountUp = ({ target, duration = 2000 }: { target: number; duration?: number }) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const start = performance.now();
          const step = (now: number) => {
            const progress = Math.min((now - start) / duration, 1);
            setCount(Math.floor(progress * target));
            if (progress < 1) requestAnimationFrame(step);
          };
          requestAnimationFrame(step);
        }
      },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target, duration]);

  return <span ref={ref}>{count}</span>;
};

const HeroSection = () => {
  const { t } = useLanguage();

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-primary/5 -translate-y-1/2 translate-x-1/3" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-primary/5 translate-y-1/2 -translate-x-1/3" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full border border-primary/10" />
      </div>

      <div className="container relative z-10 text-center py-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="space-y-6 max-w-3xl mx-auto"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-sm font-medium text-primary">
            {t("சட்டப்பேரவைத் தேர்தல் அதிமுக அறிக்கை - 2026", "AIADMK Assembly Election Manifesto - 2026")}
          </div>

          <div className="flex items-center justify-center gap-6 md:gap-10">
            <div className="bg-background border border-border rounded-2xl px-6 py-4 shadow-sm">
              <div className="text-3xl md:text-4xl font-black text-primary">
                <CountUp target={31} />
              </div>
              <div className="text-xs md:text-sm text-muted-foreground font-medium mt-1">
                {t("துறைகள்", "Sectors")}
              </div>
            </div>
            <div className="bg-background border border-border rounded-2xl px-6 py-4 shadow-sm">
              <div className="text-3xl md:text-4xl font-black text-primary">
                <CountUp target={297} />
              </div>
              <div className="text-xs md:text-sm text-muted-foreground font-medium mt-1">
                {t("வாக்குறுதிகள்", "Promises")}
              </div>
            </div>
          </div>

          <p className="text-highlight font-bold text-base md:text-lg">
            {t("இது அஇஅதிமுக-வின் உறுதிமொழி!", "This is AIADMK's Promise!")}
          </p>

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black leading-tight text-foreground">
            {t("மக்களைக் காப்போம் —", "Protect the People —")}{" "}
            <span className="text-primary">
              {t("தமிழகத்தை மீட்போம்!", "Reclaim Tamil Nadu!")}
            </span>
          </h1>

          <p className="text-base md:text-lg text-muted-foreground font-medium max-w-2xl mx-auto">
            {t(
              "அனைத்திந்திய அண்ணா திராவிட முன்னேற்றக் கழக தேர்தல் அறிக்கை 2026",
              "All India Anna Dravida Munnetra Kazhagam Election Manifesto 2026"
            )}
          </p>
          <p className="text-sm text-muted-foreground italic">
            {t("எல்லோரும் எல்லாமும் பெறவேண்டும்", "Everyone must receive everything")}
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <a
              href="#promises"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-primary text-primary-foreground font-bold text-base hover:bg-primary/90 transition-all hover:shadow-lg hover:shadow-primary/20"
            >
              {t("வாக்குறுதிகளைப் படிக்க…", "Read the Promises…")}
              <ChevronDown size={18} />
            </a>
            <a
              href="#download"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl border-2 border-primary text-primary font-bold text-base hover:bg-primary/5 transition-colors"
            >
              <FileDown size={18} />
              {t("PDF பதிவிறக்கம்", "Download PDF")}
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
