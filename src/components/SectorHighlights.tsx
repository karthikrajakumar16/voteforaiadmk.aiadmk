import { motion } from "framer-motion";
import { Wheat, GraduationCap, Stethoscope, Shield, Factory, Heart, Briefcase } from "lucide-react";

const sectors = [
  {
    icon: Wheat,
    name: "விவசாயம் மற்றும் நீர் வளம்",
    highlights: ["இலவச மின்சாரம் தொடரும்", "பயிர்க் காப்பீடு விரிவாக்கம்", "காவிரி நீர் உரிமை பாதுகாப்பு", "கடல் நீர் உப்பு நீக்கும் ஆலை"],
  },
  {
    icon: GraduationCap,
    name: "கல்வி மற்றும் இளைஞர்",
    highlights: ["NEET ரத்து", "கல்விக் கடன் தள்ளுபடி", "10 லட்சம் அரசு வேலை", "இலவச லேப்டாப்", "ஸ்டார்ட்அப் நிதி"],
  },
  {
    icon: Stethoscope,
    name: "மருத்துவம் மற்றும் மக்கள் நல்வாழ்வு",
    highlights: ["இலவச சுகாதாரம்", "சூப்பர் ஸ்பெஷாலிட்டி மருத்துவமனை", "புற்றுநோய் சிகிச்சை இலவசம்", "மருந்துகள் இலவசம்"],
  },
  {
    icon: Shield,
    name: "மகளிர் நலன் மற்றும் பாதுகாப்பு",
    highlights: ["இருசக்கர வாகன மானியம் ரூ. 25,000", "24/7 பாதுகாப்பு உதவி எண்", "மகளிர் சுயஉதவிக் குழு கடன்", "CCTV விரிவாக்கம்"],
  },
  {
    icon: Factory,
    name: "தொழில், உட்கட்டமைப்பு மற்றும் மின்சாரம்",
    highlights: ["புதிய தொழிற்பேட்டைகள்", "மெட்ரோ ரயில் விரிவாக்கம்", "24 மணி நேர மின்சாரம்", "சோலார் ஆற்றல் ஊக்குவிப்பு"],
  },
  {
    icon: Heart,
    name: "சமூக நலன் & தொழிலாளர் நலன்",
    highlights: ["ரூ. 10,000 குடும்ப உதவி", "குறைந்தபட்ச ஊதிய உயர்வு", "இலவச கேஸ் / பருப்பு / எண்ணெய்", "100 → 150 நாள் வேலை"],
  },
  {
    icon: Briefcase,
    name: "அரசு ஊழியர்கள் மற்றும் காவல்துறை",
    highlights: ["பழைய ஓய்வூதிய திட்டம் மீட்பு", "காலிப்பணியிடங்கள் நிரப்பப்படும்", "காவல் துறை நவீனமயமாக்கல்", "ஊதிய உயர்வு"],
  },
];

const SectorHighlights = () => (
  <section className="py-20 bg-surface">
    <div className="container">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-12"
      >
        <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold mb-3">
          முக்கிய துறை Highlights
        </span>
        <h2 className="text-2xl md:text-3xl font-black text-foreground">
          துறைவாரி <span className="text-primary">சிறப்பு அம்சங்கள்</span>
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
              className="bg-background rounded-xl border border-border p-5 hover:shadow-lg hover:shadow-primary/5 hover:-translate-y-1 transition-all duration-300"
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

export default SectorHighlights;
