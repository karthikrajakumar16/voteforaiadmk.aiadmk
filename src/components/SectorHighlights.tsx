import { motion } from "framer-motion";
import { Wheat, GraduationCap, Stethoscope, Shield, Factory, Heart, Briefcase } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const SectorHighlights = () => {
  const { t } = useLanguage();

  const sectors = [
    {
      icon: Wheat,
      name: t("விவசாயம் மற்றும் நீர் வளம்", "Agriculture & Water Resources"),
      highlights: [
        t("இலவச மின்சாரம் தொடரும்", "Free electricity will continue"),
        t("பயிர்க் காப்பீடு விரிவாக்கம்", "Crop insurance expansion"),
        t("காவிரி நீர் உரிமை பாதுகாப்பு", "Cauvery water rights protection"),
        t("கடல் நீர் உப்பு நீக்கும் ஆலை", "Seawater desalination plant"),
      ],
    },
    {
      icon: GraduationCap,
      name: t("கல்வி மற்றும் இளைஞர்", "Education & Youth"),
      highlights: [
        t("NEET ரத்து", "NEET cancellation"),
        t("கல்விக் கடன் தள்ளுபடி", "Education loan waiver"),
        t("10 லட்சம் அரசு வேலை", "10 lakh government jobs"),
        t("இலவச லேப்டாப்", "Free laptops"),
        t("ஸ்டார்ட்அப் நிதி", "Startup funding"),
      ],
    },
    {
      icon: Stethoscope,
      name: t("மருத்துவம் மற்றும் மக்கள் நல்வாழ்வு", "Healthcare & Public Welfare"),
      highlights: [
        t("இலவச சுகாதாரம்", "Free healthcare"),
        t("சூப்பர் ஸ்பெஷாலிட்டி மருத்துவமனை", "Super specialty hospitals"),
        t("புற்றுநோய் சிகிச்சை இலவசம்", "Free cancer treatment"),
        t("மருந்துகள் இலவசம்", "Free medicines"),
      ],
    },
    {
      icon: Shield,
      name: t("மகளிர் நலன் மற்றும் பாதுகாப்பு", "Women's Welfare & Safety"),
      highlights: [
        t("இருசக்கர வாகன மானியம் ரூ. 25,000", "₹25,000 two-wheeler subsidy"),
        t("24/7 பாதுகாப்பு உதவி எண்", "24/7 safety helpline"),
        t("மகளிர் சுயஉதவிக் குழு கடன்", "Women's SHG loans"),
        t("CCTV விரிவாக்கம்", "CCTV expansion"),
      ],
    },
    {
      icon: Factory,
      name: t("தொழில், உட்கட்டமைப்பு மற்றும் மின்சாரம்", "Industry, Infrastructure & Power"),
      highlights: [
        t("புதிய தொழிற்பேட்டைகள்", "New industrial estates"),
        t("மெட்ரோ ரயில் விரிவாக்கம்", "Metro rail expansion"),
        t("24 மணி நேர மின்சாரம்", "24-hour power supply"),
        t("சோலார் ஆற்றல் ஊக்குவிப்பு", "Solar energy promotion"),
      ],
    },
    {
      icon: Heart,
      name: t("சமூக நலன் & தொழிலாளர் நலன்", "Social Welfare & Labour Welfare"),
      highlights: [
        t("ரூ. 10,000 குடும்ப உதவி", "₹10,000 family aid"),
        t("குறைந்தபட்ச ஊதிய உயர்வு", "Minimum wage increase"),
        t("இலவச கேஸ் / பருப்பு / எண்ணெய்", "Free gas / pulses / oil"),
        t("100 → 150 நாள் வேலை", "100 → 150 days employment"),
      ],
    },
    {
      icon: Briefcase,
      name: t("அரசு ஊழியர்கள் மற்றும் காவல்துறை", "Government Staff & Police"),
      highlights: [
        t("பழைய ஓய்வூதிய திட்டம் மீட்பு", "Old pension scheme restoration"),
        t("காலிப்பணியிடங்கள் நிரப்பப்படும்", "Filling vacant positions"),
        t("காவல் துறை நவீனமயமாக்கல்", "Police modernization"),
        t("ஊதிய உயர்வு", "Salary increase"),
      ],
    },
  ];

  return (
    <section className="py-20 bg-surface">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold mb-3">
            {t("முக்கிய துறை Highlights", "Key Sector Highlights")}
          </span>
          <h2 className="text-2xl md:text-3xl font-black text-foreground">
            {t("துறைவாரி", "Sector-wise")}{" "}
            <span className="text-primary">{t("சிறப்பு அம்சங்கள்", "Key Features")}</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {sectors.map((s, i) => {
            const Icon = s.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06 }}
                className="bg-background rounded-xl border border-border p-5 hover:shadow-lg hover:shadow-primary/5 hover:-translate-y-1 hover:scale-[1.03] transition-all duration-300"
              >
                <div className="w-11 h-11 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-4">
                  <Icon size={22} />
                </div>
                <h3 className="font-bold text-sm text-foreground mb-3">{s.name}</h3>
                <ul className="space-y-2">
                  {s.highlights.map((h, j) => (
                    <li key={j} className="flex items-start gap-2 text-xs text-muted-foreground">
                      <span className="shrink-0 w-1.5 h-1.5 rounded-full bg-primary mt-1.5" />
                      {h}
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default SectorHighlights;
