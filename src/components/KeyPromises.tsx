import { motion } from "framer-motion";
import {
  Banknote, Users, Bus, Refrigerator, Flame, GraduationCap,
  Home, Briefcase, Bike, Heart, BookOpen, Fish, Gift, ShoppingBasket,
} from "lucide-react";

const promises = [
  { icon: Banknote, title: "ரூ. 10,000 சிறப்பு உதவித் தொகை", desc: "ஒவ்வொரு குடும்பத்திற்கும்" },
  { icon: Users, title: "மாதம் ரூ. 2,000 உதவித் தொகை", desc: "குடும்பத் தலைவிக்கு" },
  { icon: Bus, title: "கட்டணமில்லா பேருந்து பயணம்", desc: "நகரப் பேருந்துகளில் ஆண்களுக்கும்" },
  { icon: Refrigerator, title: "இலவச குளிர்சாதனப் பெட்டி", desc: "அரிசி குடும்ப அட்டைதாரர்களுக்கு" },
  { icon: Flame, title: "ஆண்டுக்கு 3 இலவச கேஸ் சிலிண்டர்கள்", desc: "அனைத்து குடும்பங்களுக்கும்" },
  { icon: GraduationCap, title: "கல்விக் கடன் முழுத் தள்ளுபடி", desc: "மாணவர்களுக்கு நிவாரணம்" },
  { icon: Home, title: "'அம்மா இல்லம்' திட்டம்", desc: "வீடுகள் வழங்கும் திட்டம்" },
  { icon: Briefcase, title: "100 → 150 நாட்கள் வேலைவாய்ப்பு", desc: "வேலைவாய்ப்பு திட்ட உயர்வு" },
  { icon: Bike, title: "ரூ. 25,000 மானியத்துடன் இருசக்கர வாகனம்", desc: "மகளிருக்கு" },
  { icon: Heart, title: "ஓய்வூதியம் ரூ. 2,000", desc: "முதியோர் உள்ளிட்டவர்களுக்கு" },
  { icon: BookOpen, title: "மாதாந்திர உதவித்தொகை", desc: "காத்திருக்கும் பட்டதாரிகளுக்கு" },
  { icon: Fish, title: "தடைக்கால நிவாரணம் ரூ. 12,000", desc: "மீனவர்களுக்கு" },
  { icon: Gift, title: "தைப்பொங்கல் ரூ. 1,000 ரொக்கம்", desc: "தொகுப்புடன் வழங்கப்படும்" },
  { icon: ShoppingBasket, title: "இலவச நலத்திட்டங்கள்", desc: "கேஸ் / பருப்பு / எண்ணெய் / fridge" },
];

const KeyPromises = () => (
  <section id="promises" className="py-20 bg-surface">
    <div className="container">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-12"
      >
        <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold mb-3">
          முக்கிய வாக்குறுதிகள்
        </span>
        <h2 className="text-2xl md:text-3xl font-black text-foreground">
          மக்களுக்கான <span className="text-primary">முக்கிய உறுதிமொழிகள்</span>
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
            className="group bg-background rounded-xl border border-border p-5 hover:shadow-lg hover:shadow-primary/5 hover:-translate-y-1 transition-all duration-300"
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

export default KeyPromises;
