import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import { Search } from "lucide-react";

const candidates = [
  { no: 1, district: "சென்னை", name: "செல்வம் அடிகலா நாடார்", constituency: "திருவொற்றியூர்" },
  { no: 2, district: "சென்னை", name: "எஸ்.ஆர். ராஜா", constituency: "டாக்டர் ராதாகிருஷ்ணன் நகர்" },
  { no: 3, district: "சென்னை", name: "கே. கங்கா தேவி", constituency: "பெரம்பூர்" },
  { no: 4, district: "சென்னை", name: "பி. ஸ்ரீராமுலு", constituency: "கொளத்தூர்" },
  { no: 5, district: "சென்னை", name: "என். நடராஜன்", constituency: "வில்லிவாக்கம்" },
  { no: 6, district: "சென்னை", name: "டி. ஜெயக்குமார்", constituency: "ராயபுரம்" },
  { no: 7, district: "சென்னை", name: "ஏ. அன்பரசன்", constituency: "திருவல்லிக்கேணி" },
  { no: 8, district: "சென்னை", name: "வி. கணேசன்", constituency: "மயிலாப்பூர்" },
  { no: 9, district: "சென்னை", name: "எம். அருள்மொழி", constituency: "வேளச்சேரி" },
  { no: 10, district: "சென்னை", name: "கே. முருகேசன்", constituency: "சோழிங்கநல்லூர்" },
  { no: 11, district: "காஞ்சிபுரம்", name: "எஸ்.பி. வேலுமணி", constituency: "திருவள்ளூர்" },
  { no: 12, district: "காஞ்சிபுரம்", name: "ஆர். வைத்தியநாதன்", constituency: "காஞ்சிபுரம்" },
  { no: 13, district: "கோயம்புத்தூர்", name: "எஸ்.பி. சண்முகம்", constituency: "கோயம்புத்தூர் தெற்கு" },
  { no: 14, district: "கோயம்புத்தூர்", name: "கே. ராமசாமி", constituency: "கோயம்புத்தூர் வடக்கு" },
  { no: 15, district: "மதுரை", name: "வி. ஜெகதீசன்", constituency: "மதுரை கிழக்கு" },
  { no: 16, district: "மதுரை", name: "ஆர். பழனிசாமி", constituency: "மதுரை மேற்கு" },
  { no: 17, district: "திருச்சி", name: "எம். பாலகிருஷ்ணன்", constituency: "திருச்சி மேற்கு" },
  { no: 18, district: "திருச்சி", name: "கே. ராஜேந்திரன்", constituency: "திருச்சி கிழக்கு" },
  { no: 19, district: "சேலம்", name: "ஜி. செல்வராஜ்", constituency: "சேலம் தெற்கு" },
  { no: 20, district: "சேலம்", name: "என். ராமலிங்கம்", constituency: "சேலம் வடக்கு" },
  { no: 21, district: "திருநெல்வேலி", name: "வி. முத்துசாமி", constituency: "திருநெல்வேலி" },
  { no: 22, district: "தூத்துக்குடி", name: "எஸ். சுந்தர்ராஜன்", constituency: "தூத்துக்குடி" },
  { no: 23, district: "விழுப்புரம்", name: "கே. அண்ணாமலை", constituency: "விழுப்புரம்" },
  { no: 24, district: "கடலூர்", name: "எம். தமிழரசன்", constituency: "கடலூர்" },
  { no: 25, district: "நாகப்பட்டினம்", name: "ஆர். சிவகுமார்", constituency: "நாகப்பட்டினம்" },
  { no: 26, district: "தஞ்சாவூர்", name: "பி. கணேசன்", constituency: "தஞ்சாவூர்" },
  { no: 27, district: "திருவாரூர்", name: "எஸ். முகமது அலி", constituency: "திருவாரூர்" },
  { no: 28, district: "ராமநாதபுரம்", name: "வி. செல்வராஜ்", constituency: "ராமநாதபுரம்" },
  { no: 29, district: "சிவகங்கை", name: "கே. தனபாலன்", constituency: "சிவகங்கை" },
  { no: 30, district: "வேலூர்", name: "என். பாலகிருஷ்ணன்", constituency: "வேலூர்" },
];

const CandidatesSection = () => {
  const [search, setSearch] = useState("");
  const [district, setDistrict] = useState("");

  const districts = useMemo(() => [...new Set(candidates.map((c) => c.district))], []);

  const filtered = useMemo(() => {
    return candidates.filter((c) => {
      const matchSearch =
        !search ||
        c.name.includes(search) ||
        c.constituency.includes(search) ||
        c.district.includes(search);
      const matchDistrict = !district || c.district === district;
      return matchSearch && matchDistrict;
    });
  }, [search, district]);

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
        </motion.div>

        {/* Filters */}
        <div className="max-w-4xl mx-auto mb-8 flex flex-col sm:flex-row gap-3 sticky top-16 z-40 bg-background py-3">
          <div className="relative flex-1">
            <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
            <input
              type="text"
              placeholder="பெயர், தொகுதி தேடுங்கள்..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-9 pr-4 py-2.5 rounded-lg border border-border bg-background text-sm focus:outline-none focus:ring-2 focus:ring-primary/20"
            />
          </div>
          <select
            value={district}
            onChange={(e) => setDistrict(e.target.value)}
            className="px-4 py-2.5 rounded-lg border border-border bg-background text-sm focus:outline-none focus:ring-2 focus:ring-primary/20"
          >
            <option value="">அனைத்து மாவட்டங்கள்</option>
            {districts.map((d) => (
              <option key={d} value={d}>{d}</option>
            ))}
          </select>
        </div>

        {/* Desktop Table */}
        <div className="hidden md:block max-w-4xl mx-auto">
          <div className="border border-border rounded-xl overflow-hidden">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-primary text-primary-foreground">
                  <th className="text-left p-3 font-semibold">எண்</th>
                  <th className="text-left p-3 font-semibold">மாவட்டம்</th>
                  <th className="text-left p-3 font-semibold">வேட்பாளர் பெயர்</th>
                  <th className="text-left p-3 font-semibold">சட்டமன்ற தொகுதி</th>
                </tr>
              </thead>
              <tbody>
                {filtered.map((c, i) => (
                  <tr key={c.no} className={`border-t border-border ${i % 2 === 0 ? "bg-background" : "bg-surface"}`}>
                    <td className="p-3 font-medium text-primary">{c.no}</td>
                    <td className="p-3">{c.district}</td>
                    <td className="p-3 font-semibold">{c.name}</td>
                    <td className="p-3">{c.constituency}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Mobile Cards */}
        <div className="md:hidden max-w-lg mx-auto space-y-3">
          {filtered.map((c) => (
            <div key={c.no} className="border border-border rounded-xl p-4 bg-background">
              <div className="flex items-center gap-3 mb-2">
                <span className="w-8 h-8 rounded-full bg-primary/10 text-primary text-xs font-bold flex items-center justify-center">
                  {c.no}
                </span>
                <span className="font-bold text-sm text-foreground">{c.name}</span>
              </div>
              <div className="flex gap-4 text-xs text-muted-foreground">
                <span>{c.district}</span>
                <span>•</span>
                <span>{c.constituency}</span>
              </div>
            </div>
          ))}
        </div>

        {filtered.length === 0 && (
          <p className="text-center text-muted-foreground py-10">தேடல் முடிவுகள் இல்லை</p>
        )}
      </div>
    </section>
  );
};

export default CandidatesSection;
