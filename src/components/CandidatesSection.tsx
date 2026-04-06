import { motion } from "framer-motion";
import { Users, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { candidates } from "@/data/candidates";

const CandidatesSection = () => {
  const districts = [...new Set(candidates.map((c) => c.district))];
  const preview = candidates.slice(0, 6);

  return (
    <section id="candidates" className="py-20">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold mb-3">
            வேட்பாளர்கள்
          </span>
          <h2 className="text-2xl md:text-3xl font-black text-foreground">
            AIADMK <span className="text-primary">வேட்பாளர் பட்டியல்</span>
          </h2>
          <p className="text-muted-foreground mt-2">
            {candidates.length} வேட்பாளர்கள் • {districts.length} மாவட்டங்கள் • 234 தொகுதிகள்
          </p>
        </motion.div>

        {/* Preview Cards */}
        <div className="max-w-4xl mx-auto grid sm:grid-cols-2 lg:grid-cols-3 gap-3 mb-8">
          {preview.map((c, i) => (
            <motion.div
              key={c.no}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="border border-border rounded-xl p-4 bg-background"
            >
              <div className="flex items-center gap-3 mb-1">
                <span className="w-8 h-8 rounded-full bg-primary/10 text-primary text-xs font-bold flex items-center justify-center">
                  {c.no}
                </span>
                <span className="font-bold text-sm text-foreground">{c.name}</span>
              </div>
              <div className="text-xs text-muted-foreground ml-11">
                {c.district} • {c.constituency}
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA to full page */}
        <div className="text-center">
          <Link
            to="/candidates"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-primary text-primary-foreground font-semibold hover:bg-primary/90 transition-colors"
          >
            <Users size={18} />
            அனைத்து {candidates.length} வேட்பாளர்களையும் காண
            <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CandidatesSection;
