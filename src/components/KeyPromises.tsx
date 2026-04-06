import { motion } from "framer-motion";
import {
  Banknote, Users, Bus, Refrigerator, Flame, GraduationCap,
  Home, Briefcase, Bike, Heart, BookOpen, Fish, Gift, ShoppingBasket,
} from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const KeyPromises = () => {
  const { t } = useLanguage();

  const promises = [
    { icon: Banknote, title: t("ரூ. 10,000 சிறப்பு உதவித் தொகை", "₹10,000 Special Assistance"), desc: t("ஒவ்வொரு குடும்பத்திற்கும்", "For every family") },
    { icon: Users, title: t("மாதம் ரூ. 2,000 உதவித் தொகை", "₹2,000 Monthly Aid"), desc: t("குடும்பத் தலைவிக்கு", "For the head woman of the family") },
    { icon: Bus, title: t("கட்டணமில்லா பேருந்து பயணம்", "Free Bus Travel"), desc: t("நகரப் பேருந்துகளில் ஆண்களுக்கும்", "For men in city buses too") },
    { icon: Refrigerator, title: t("இலவச குளிர்சாதனப் பெட்டி", "Free Refrigerator"), desc: t("அரிசி குடும்ப அட்டைதாரர்களுக்கு", "For rice ration card holders") },
    { icon: Flame, title: t("ஆண்டுக்கு 3 இலவச கேஸ் சிலிண்டர்கள்", "3 Free Gas Cylinders Per Year"), desc: t("அனைத்து குடும்பங்களுக்கும்", "For all families") },
    { icon: GraduationCap, title: t("கல்விக் கடன் முழுத் தள்ளுபடி", "Full Education Loan Waiver"), desc: t("மாணவர்களுக்கு நிவாரணம்", "Relief for students") },
    { icon: Home, title: t("'அம்மா இல்லம்' திட்டம்", "'Amma Illam' Housing Scheme"), desc: t("வீடுகள் வழங்கும் திட்டம்", "Free housing program") },
    { icon: Briefcase, title: t("100 → 150 நாட்கள் வேலைவாய்ப்பு", "100 → 150 Days Employment"), desc: t("வேலைவாய்ப்பு திட்ட உயர்வு", "Employment scheme upgrade") },
    { icon: Bike, title: t("ரூ. 25,000 மானியத்துடன் இருசக்கர வாகனம்", "Two-Wheeler with ₹25,000 Subsidy"), desc: t("மகளிருக்கு", "For women") },
    { icon: Heart, title: t("ஓய்வூதியம் ரூ. 2,000", "Pension ₹2,000"), desc: t("முதியோர் உள்ளிட்டவர்களுக்கு", "For senior citizens and others") },
    { icon: BookOpen, title: t("மாதாந்திர உதவித்தொகை", "Monthly Stipend"), desc: t("காத்திருக்கும் பட்டதாரிகளுக்கு", "For unemployed graduates") },
    { icon: Fish, title: t("தடைக்கால நிவாரணம் ரூ. 12,000", "Ban Period Relief ₹12,000"), desc: t("மீனவர்களுக்கு", "For fishermen") },
    { icon: Gift, title: t("தைப்பொங்கல் ரூ. 1,000 ரொக்கம்", "Thai Pongal ₹1,000 Cash"), desc: t("தொகுப்புடன் வழங்கப்படும்", "With gift hamper") },
    { icon: ShoppingBasket, title: t("இலவச நலத்திட்டங்கள்", "Free Welfare Schemes"), desc: t("கேஸ் / பருப்பு / எண்ணெய் / fridge", "Gas / Pulses / Oil / Fridge") },
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
              className="group bg-background rounded-xl border border-border p-5 hover:shadow-lg hover:shadow-primary/5 hover:-translate-y-1 hover:scale-[1.03] transition-all duration-300"
            >
              <div className="flex items-start gap-4">
                <div className="shrink-0 w-11 h-11 rounded-lg bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  <p.icon size={22} />
                </div>
                <div>
                  <h3 className="font-bold text-foreground text-sm leading-snug">{p.title}</h3>
                  <p className="text-xs text-muted-foreground mt-1">{p.desc}</p>
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
