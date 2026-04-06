import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import KeyPromises from "@/components/KeyPromises";
import CategoryPromises from "@/components/CategoryPromises";
import SectorHighlights from "@/components/SectorHighlights";
import CandidatesSection from "@/components/CandidatesSection";
import DownloadSection from "@/components/DownloadSection";
import Footer from "@/components/Footer";

const Index = () => (
  <div className="min-h-screen bg-background">
    <Navbar />
    <HeroSection />
    <KeyPromises />
    <SectorHighlights />
    <CategoryPromises />
    <CandidatesSection />
    <DownloadSection />
    <Footer />
  </div>
);

export default Index;
