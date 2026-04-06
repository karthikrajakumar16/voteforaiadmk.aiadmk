import { motion } from "framer-motion";
import { FileDown, FileText } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import tamilManifestoPDF from "@/assets/admk manifesto 2026 ...tamil.pdf";
import englishManifestoPDF from "@/assets/admk manifesto 2026 ... ENGLISH....pdf";

const DownloadSection = () => {
  const { t, lang } = useLanguage();

  const manifestoPDF = lang === "ta" ? tamilManifestoPDF : englishManifestoPDF;
  const fileName = lang === "ta" ? "AIADMK-Manifesto-2026-Tamil.pdf" : "AIADMK-Manifesto-2026-English.pdf";

  return (
    <section id="download" className="py-20 bg-surface">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto text-center"
        >
          <div className="bg-background rounded-2xl border border-border p-8 md:p-12 shadow-sm hover:shadow-lg hover:scale-[1.01] transition-all duration-300">
            <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center text-primary mx-auto mb-6">
              <FileText size={32} />
            </div>
            <h2 className="text-xl md:text-2xl font-black text-foreground mb-3">
              {t(
                "முழு தேர்தல் அறிக்கையை PDF ஆக பதிவிறக்குங்கள்",
                "Download the Full Election Manifesto as PDF"
              )}
            </h2>
            <p className="text-sm text-muted-foreground mb-8 max-w-md mx-auto">
              {t(
                "அனைத்திந்திய அண்ணா திராவிட முன்னேற்றக் கழகத்தின் 2026 சட்டப்பேரவைத் தேர்தல் அறிக்கை — 31 துறைகள், 297 வாக்குறுதிகள்",
                "AIADMK26 Assembly Election Manifesto — 31 Sectors, 297 Promises"
              )}
            </p>
            <a
              href={manifestoPDF}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-primary text-primary-foreground font-bold text-base hover:bg-primary/90 transition-all hover:shadow-lg hover:shadow-primary/20"
            >
              <FileDown size={20} />
              {t("PDF பதிவிறக்கம்", "Download PDF")}
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default DownloadSection;
