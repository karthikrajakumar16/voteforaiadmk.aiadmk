import { motion } from "framer-motion";
import { FileDown, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";

const DMKCriticism = () => {
  const { t } = useLanguage();

  const sections = [
    {
      title: "தி.மு.க சமூக அநீதி (சர்க்காரியா TO டாஸ்மாக்)",
      description:
        "சர்க்காரியா கமிஷன் ஊழல்கள் முதல் இன்றைய டாஸ்மாக் சீர்கேடுகள் வரை, தமிழக மக்களுக்கு இழைக்கப்பட்ட சமூக அநீதிகளைத் தோலுரித்துக் காட்டும் ஆவணம். சுயநல அரசியலால் மாநில வளங்கள் எப்படித் திட்டமிட்டுச் சுரண்டப்பட்டன என்பதை அசைக்க முடியாத ஆதாரங்களுடன் இப்புத்தகம் விவரிக்கிறது.",
      pdfName: "DMK samuga aneedhi final... ( 13.1.2026 ).pdf",
    },
    {
      title: "தி.மு.க குற்றச் சரித்திரம் (நாட்டுக்கும் வீட்டுக்கும் கேடு)",
      description:
        "1967 முதல் இன்று வரை அரங்கேறிய வன்முறைகள், அரசியல் படுகொலைகள் மற்றும் சட்டம்-ஒழுங்கு வீழ்ச்சியை அப்பட்டமாகப் பதிவு செய்யும் நூல். அதிகார துஷ்பிரயோகத்தால் சாமானியர்கள் சந்தித்த வலிகளை எவ்வித சமரசமுமின்றி இப்புத்தகம் வெளிச்சத்திற்குக் கொண்டு வருகிறது.",
      pdfName: "DMK-kutra-sarithiram.pdf",
    },
    {
      title: "திமுகவின் துரோகப் பத்திரிகை (துரோகங்களுடன் ஸ்டாலின்)",
      description:
        "'விடியல்' தருவதாகக் கூறி வாக்குகளைப் பெற்று, அனைத்துத் தரப்பு மக்களுக்கும் இழைக்கப்பட்ட பச்சைத் துரோகங்களின் அதிர்ச்சிப் பட்டியல். கட்டுக்கடங்காத மாநிலக் கடன், மின்கட்டண உயர்வு, மற்றும் போலி வாக்குறுதிகள் என ஆளுங்கட்சியின் உண்மை முகத்தை புள்ளிவிவரங்களுடன் அம்பலப்படுத்துகிறது.",
      pdfName: "DMK DHROGA PATHIRIKKAI BOOKLET NEW - 002.pdf",
    },
  ];

  const handleDownload = (pdfName: string) => {
    try {
      // Access PDFs from public folder - simple anchor navigation
      const link = document.createElement("a");
      link.href = `/${pdfName}`;
      link.target = "_blank";
      link.rel = "noopener noreferrer";
      link.click();
    } catch (error) {
      console.error("Download error:", error);
      alert("Unable to download PDF. Please try again.");
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="bg-primary text-primary-foreground">
        <div className="container py-6">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-sm text-primary-foreground/80 hover:text-primary-foreground mb-4 transition-colors"
          >
            <ArrowLeft size={16} />
            {t("முகப்பு பக்கம்", "Back to Home")}
          </Link>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h1 className="text-3xl md:text-4xl font-black mb-2">
              {t("திமுக - புரிந்துணர்தல்", "DMK - Understanding")}
            </h1>
            <p className="text-primary-foreground/80 text-lg">
              {t("பெயர்ப்பு மற்றும் வரலாற்று ஆவணங்கள்", "Documentary Evidence")}
            </p>
          </motion.div>
        </div>
      </div>

      <div className="container py-12">
        <div className="space-y-8">
          {sections.map((section, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-background border border-border rounded-2xl p-8 md:p-10 shadow-sm hover:shadow-lg transition-all duration-300"
            >
              <h2 className="text-2xl md:text-3xl font-black text-foreground mb-4">
                {section.title}
              </h2>
              <p className="text-base md:text-lg text-muted-foreground leading-relaxed mb-6">
                {section.description}
              </p>
              <button
                onClick={() => handleDownload(section.pdfName)}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-primary text-primary-foreground font-semibold hover:bg-primary/90 transition-all hover:shadow-lg hover:shadow-primary/20"
              >
                <FileDown size={18} />
                {t("PDF பதிவிறக்கம்", "Download PDF")}
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DMKCriticism;
