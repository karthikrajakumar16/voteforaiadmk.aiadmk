import { motion } from "framer-motion";
import {
  Banknote, Users, Bus, Refrigerator, Flame, GraduationCap,
  Home, Briefcase, Bike, Heart, BookOpen, Fish, Gift, ShoppingBasket,
  Shirt, Car, Sparkles, Accessibility, Store, Zap,
} from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const KeyPromises = () => {
  const { t } = useLanguage();

  const promises = [
    { icon: Banknote, title: t("ரூ. 10,000 சிறப்பு உதவித் தொகை", "₹10,000 Special Assistance"), desc: t("ஒவ்வொரு குடும்பத்திற்கும்", "For every family") },
    { icon: Users, title: t("'குலவிளக்கு திட்டம்' — மாதம் ரூ. 2,000", "'Kulavilakku Scheme' — ₹2,000/month"), desc: t("குடும்பத் தலைவிக்கு", "For the head woman of the family") },
    { icon: Bus, title: t("கட்டணமில்லா பேருந்து பயணம்", "Free Bus Travel"), desc: t("நகரப் பேருந்துகளில் ஆண்களுக்கும்", "For men in city buses too") },
    { icon: Home, title: t("'அம்மா இல்லம்' திட்டம்", "'Amma Illam' Housing Scheme"), desc: t("வீடு இல்லாத ஏழைகளுக்கு இலவச வீடுகள்", "Free houses for the homeless poor") },
    { icon: Briefcase, title: t("100 → 150 நாட்கள் வேலைவாய்ப்பு", "100 → 150 Days Employment"), desc: t("வேலைவாய்ப்பு திட்ட உயர்வு", "Employment scheme upgrade") },
    { icon: Bike, title: t("ரூ. 25,000 மானியத்துடன் இருசக்கர வாகனம்", "Two-Wheeler with ₹25,000 Subsidy"), desc: t("வேலைக்குச் செல்லும் 5 லட்சம் மகளிருக்கு", "For 5 lakh working women") },
    { icon: Heart, title: t("ஓய்வூதியம் ரூ. 2,000 ஆக உயர்வு", "Pension Raised to ₹2,000"), desc: t("முதியோர், விதவைகள், மாற்றுத் திறனாளிகள்", "Senior citizens, widows, differently-abled") },
    { icon: GraduationCap, title: t("கல்விக் கடன் முழுத் தள்ளுபடி", "Full Education Loan Waiver"), desc: t("வங்கிகளில் பெற்ற கல்விக் கடன் முழுமையாக", "Complete bank education loan waiver") },
    { icon: Flame, title: t("ஆண்டுக்கு 3 இலவச கேஸ் சிலிண்டர்கள்", "3 Free Gas Cylinders Per Year"), desc: t("அரிசி குடும்ப அட்டைதாரர்களுக்கு", "For rice ration card holders") },
    { icon: Sparkles, title: t("ஜல்லிக்கட்டு வீரர் நிவாரணம்", "Jallikattu Player Compensation"), desc: t("உயிரிழப்பு ₹10 லட்சம், காயம் ₹2 லட்சம், மானியம் ₹5 லட்சம்", "Death ₹10L, Injury ₹2L, Subsidy ₹5L") },
    { icon: Store, title: t("சிறுபான்மை மகளிருக்கு வட்டியில்லா கடன்", "Interest-Free Loan for Minority Women"), desc: t("சிறுபான்மை மகளிர் நலன்", "Minority women welfare") },
    { icon: Accessibility, title: t("மாற்றுத் திறனாளிகள் கூட்டுறவு கடன் தள்ளுபடி", "Differently-Abled Cooperative Loan Waiver"), desc: t("கூட்டுறவு வங்கிக் கடன் தள்ளுபடி", "Cooperative bank loan waiver") },
    { icon: BookOpen, title: t("மாதாந்திர உதவித்தொகை", "Monthly Stipend"), desc: t("பட்டதாரிகளுக்கு ₹2,000, +2 படித்தவர்களுக்கு ₹1,000", "₹2,000 for graduates, ₹1,000 for +2") },
    { icon: Fish, title: t("தடைக்கால நிவாரணம் ரூ. 12,000", "Ban Period Relief ₹12,000"), desc: t("மீனவர்களுக்கு", "For fishermen") },
    { icon: Gift, title: t("தைப்பொங்கல் ரூ. 1,000 ரொக்கம்", "Thai Pongal ₹1,000 Cash"), desc: t("தொகுப்புடன் வழங்கப்படும்", "With gift hamper") },
    { icon: Zap, title: t("கைத்தறி / விசைத்தறி இலவச மின்சாரம்", "Free Electricity for Handloom/Powerloom"), desc: t("கைத்தறி 450 யூனிட், விசைத்தறி 1400 யூனிட்", "Handloom 450 units, Powerloom 1400 units") },
    { icon: Car, title: t("புதிய ஆட்டோ வாங்க ₹75,000 மானியம்", "₹75,000 Subsidy for New Auto"), desc: t("ஆட்டோ ஓட்டுநர்களுக்கு", "For auto drivers") },
    { icon: Shirt, title: t("தீபாவளிக்கு இலவச சேலை, வேட்டி", "Free Deepavali Saree & Dhoti"), desc: t("தரமான சேலை, வேட்டி விலையில்லாமல்", "Quality saree & dhoti free of cost") },
    { icon: Refrigerator, title: t("இலவச குளிர்சாதனப் பெட்டி", "Free Refrigerator"), desc: t("அரிசி குடும்ப அட்டைதாரர்களுக்கு", "For rice ration card holders") },
    { icon: ShoppingBasket, title: t("இலவச பருப்பு & சமையல் எண்ணெய்", "Free Pulses & Cooking Oil"), desc: t("1 கிலோ பருப்பு, 1 லிட்டர் எண்ணெய் இலவசம்", "1kg pulses, 1L oil free for card holders") },
  ];

  return (
    <section id="promises" className="py-20 bg-surface">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold mb-3">
            {t("முக்கிய வாக்குறுதிகள்", "Key Promises")}
          </span>
          <h2 className="text-2xl md:text-3xl font-black text-foreground">
            {t("மக்களுக்கான", "Key")}{" "}
            <span className="text-primary">{t("முக்கிய உறுதிமொழிகள்", "Promises for the People")}</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
          {promises.map((p, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.04 }}
              className="group bg-background rounded-xl border border-border p-5 transition-all duration-300 transform-gpu will-change-transform hover:-translate-y-1 hover:scale-105 hover:shadow-xl hover:shadow-primary/20"
            >
              <div className="flex items-start gap-4">
                <div className="shrink-0 w-11 h-11 rounded-lg bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  <p.icon size={22} />
                </div>
                <div>
                  <h3 className="font-bold text-foreground text-base leading-snug">{p.title}</h3>
                  <p className="text-sm text-muted-foreground mt-1">{p.desc}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default KeyPromises;
