import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import { Search, ArrowLeft, Users, MapPin, Building2 } from "lucide-react";
import { Link } from "react-router-dom";
import { candidates } from "@/data/candidates";

const ITEMS_PER_PAGE = 30;

const CandidatesPage = () => {
  const [search, setSearch] = useState("");
  const [district, setDistrict] = useState("");
  const [page, setPage] = useState(1);

  const districts = useMemo(() => [...new Set(candidates.map((c) => c.district))].sort(), []);

  const filtered = useMemo(() => {
    setPage(1);
    return candidates.filter((c) => {
      const s = search.toLowerCase();
      const matchSearch =
        !search ||
        c.name.toLowerCase().includes(s) ||
        c.constituency.toLowerCase().includes(s) ||
        c.district.toLowerCase().includes(s) ||
        c.no.toString().includes(s);
      const matchDistrict = !district || c.district === district;
      return matchSearch && matchDistrict;
    });
  }, [search, district]);

  const totalPages = Math.ceil(filtered.length / ITEMS_PER_PAGE);
  const paginated = filtered.slice((page - 1) * ITEMS_PER_PAGE, page * ITEMS_PER_PAGE);

  const districtCounts = useMemo(() => {
    const counts: Record<string, number> = {};
    candidates.forEach((c) => {
      counts[c.district] = (counts[c.district] || 0) + 1;
    });
    return counts;
  }, []);

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-primary text-primary-foreground">
        <div className="container py-6">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-sm text-primary-foreground/80 hover:text-primary-foreground mb-4 transition-colors"
          >
            <ArrowLeft size={16} />
            முகப்பு பக்கம்
          </Link>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h1 className="text-3xl md:text-4xl font-black mb-2">
              AIADMK வேட்பாளர் பட்டியல் 2026
            </h1>
            <p className="text-primary-foreground/80 text-lg">
              அனைத்து 234 சட்டமன்றத் தொகுதிகளுக்கான வேட்பாளர்கள்
            </p>
          </motion.div>

          {/* Stats */}
          <div className="flex flex-wrap gap-4 mt-6">
            <div className="flex items-center gap-2 bg-primary-foreground/10 rounded-lg px-4 py-2">
              <Users size={18} />
              <span className="font-bold">{candidates.length}</span>
              <span className="text-sm text-primary-foreground/80">வேட்பாளர்கள்</span>
            </div>
            <div className="flex items-center gap-2 bg-primary-foreground/10 rounded-lg px-4 py-2">
              <MapPin size={18} />
              <span className="font-bold">{districts.length}</span>
              <span className="text-sm text-primary-foreground/80">மாவட்டங்கள்</span>
            </div>
            <div className="flex items-center gap-2 bg-primary-foreground/10 rounded-lg px-4 py-2">
              <Building2 size={18} />
              <span className="font-bold">234</span>
              <span className="text-sm text-primary-foreground/80">தொகுதிகள்</span>
            </div>
          </div>
        </div>
      </div>

      <div className="container py-8">
        {/* Filters */}
        <div className="sticky top-0 z-40 bg-background py-4 -mx-4 px-4 border-b border-border mb-6">
          <div className="flex flex-col sm:flex-row gap-3 max-w-4xl">
            <div className="relative flex-1">
              <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
              <input
                type="text"
                placeholder="பெயர், தொகுதி, மாவட்டம் தேடுங்கள்..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full pl-9 pr-4 py-2.5 rounded-lg border border-border bg-background text-sm focus:outline-none focus:ring-2 focus:ring-primary/30"
              />
            </div>
            <select
              value={district}
              onChange={(e) => setDistrict(e.target.value)}
              className="px-4 py-2.5 rounded-lg border border-border bg-background text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 min-w-[200px]"
            >
              <option value="">அனைத்து மாவட்டங்கள் ({districts.length})</option>
              {districts.map((d) => (
                <option key={d} value={d}>
                  {d} ({districtCounts[d]})
                </option>
              ))}
            </select>
          </div>
          <p className="text-xs text-muted-foreground mt-2">
            {filtered.length} வேட்பாளர்கள் காட்டப்படுகின்றனர்
          </p>
        </div>

        {/* Desktop Table */}
        <div className="hidden md:block">
          <div className="border border-border rounded-xl overflow-hidden">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-primary text-primary-foreground">
                  <th className="text-left p-3 font-semibold w-16">எண்</th>
                  <th className="text-left p-3 font-semibold">மாவட்டம்</th>
                  <th className="text-left p-3 font-semibold">வேட்பாளர் பெயர்</th>
                  <th className="text-left p-3 font-semibold">சட்டமன்ற தொகுதி</th>
                </tr>
              </thead>
              <tbody>
                {paginated.map((c, i) => (
                  <motion.tr
                    key={c.no}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: i * 0.02 }}
                    className={`border-t border-border hover:bg-primary/5 transition-colors ${
                      i % 2 === 0 ? "bg-background" : "bg-muted/30"
                    }`}
                  >
                    <td className="p-3 font-bold text-primary">{c.no}</td>
                    <td className="p-3">
                      <span className="inline-flex items-center gap-1.5">
                        <MapPin size={12} className="text-muted-foreground" />
                        {c.district}
                      </span>
                    </td>
                    <td className="p-3 font-semibold">{c.name}</td>
                    <td className="p-3">{c.constituency}</td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Mobile Cards */}
        <div className="md:hidden space-y-3">
          {paginated.map((c, i) => (
            <motion.div
              key={c.no}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.02 }}
              className="border border-border rounded-xl p-4 bg-background hover:shadow-md transition-shadow"
            >
              <div className="flex items-center gap-3 mb-2">
                <span className="w-9 h-9 rounded-full bg-primary/10 text-primary text-xs font-black flex items-center justify-center shrink-0">
                  {c.no}
                </span>
                <span className="font-bold text-sm text-foreground">{c.name}</span>
              </div>
              <div className="flex gap-4 text-xs text-muted-foreground ml-12">
                <span className="flex items-center gap-1">
                  <MapPin size={10} />
                  {c.district}
                </span>
                <span>•</span>
                <span>{c.constituency}</span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex items-center justify-center gap-2 mt-8">
            <button
              onClick={() => setPage((p) => Math.max(1, p - 1))}
              disabled={page === 1}
              className="px-4 py-2 rounded-lg border border-border text-sm font-medium disabled:opacity-40 hover:bg-primary/5 transition-colors"
            >
              முந்தைய
            </button>
            <div className="flex items-center gap-1">
              {Array.from({ length: totalPages }, (_, i) => i + 1).map((p) => (
                <button
                  key={p}
                  onClick={() => setPage(p)}
                  className={`w-9 h-9 rounded-lg text-sm font-medium transition-colors ${
                    p === page
                      ? "bg-primary text-primary-foreground"
                      : "hover:bg-primary/10"
                  }`}
                >
                  {p}
                </button>
              ))}
            </div>
            <button
              onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
              disabled={page === totalPages}
              className="px-4 py-2 rounded-lg border border-border text-sm font-medium disabled:opacity-40 hover:bg-primary/5 transition-colors"
            >
              அடுத்த
            </button>
          </div>
        )}

        {filtered.length === 0 && (
          <div className="text-center py-16">
            <Users size={48} className="mx-auto text-muted-foreground/40 mb-4" />
            <p className="text-muted-foreground text-lg">தேடல் முடிவுகள் இல்லை</p>
            <p className="text-muted-foreground/60 text-sm mt-1">வேறு தேடல் சொல்லை முயற்சிக்கவும்</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default CandidatesPage;
