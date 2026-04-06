const Footer = () => (
  <footer className="bg-foreground text-background/80 py-12">
    <div className="container">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <div className="flex items-center gap-2 mb-4">
            <span className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-primary-foreground text-sm font-black">அ</span>
            <span className="font-bold text-background">AIADMK 2026</span>
          </div>
          <p className="text-sm text-background/60 leading-relaxed">
            அனைத்திந்திய அண்ணா திராவிட முன்னேற்றக் கழக சட்டப்பேரவைத் தேர்தல் அறிக்கை 2026
          </p>
        </div>

        <div>
          <h4 className="font-bold text-background text-sm mb-4">விரைவு இணைப்புகள்</h4>
          <ul className="space-y-2 text-sm text-background/60">
            <li><a href="#hero" className="hover:text-background transition-colors">முகப்பு</a></li>
            <li><a href="#promises" className="hover:text-background transition-colors">முக்கிய வாக்குறுதிகள்</a></li>
            <li><a href="#categories" className="hover:text-background transition-colors">துறைவாரி வாக்குறுதிகள்</a></li>
            <li><a href="#candidates" className="hover:text-background transition-colors">வேட்பாளர்கள்</a></li>
            <li><a href="#download" className="hover:text-background transition-colors">PDF பதிவிறக்கம்</a></li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold text-background text-sm mb-4">தேர்தல் அறிக்கை</h4>
          <p className="text-sm text-background/60 leading-relaxed">
            மக்களைக் காப்போம் — தமிழகத்தை மீட்போம்!<br />
            எல்லோரும் எல்லாமும் பெறவேண்டும்
          </p>
        </div>
      </div>

      <div className="border-t border-background/10 mt-8 pt-6 text-center text-xs text-background/40">
        © 2026 AIADMK. அனைத்து உரிமைகளும் பாதுகாக்கப்பட்டவை.
      </div>
    </div>
  </footer>
);

export default Footer;
