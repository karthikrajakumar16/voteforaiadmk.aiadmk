export interface Candidate {
  no: number;
  district: string;
  name: string;
  constituency: string;
}

export const candidates: Candidate[] = [
  // சென்னை மாவட்டம்
  { no: 1, district: "சென்னை", name: "செல்வம் அடிகலா நாடார்", constituency: "திருவொற்றியூர்" },
  { no: 2, district: "சென்னை", name: "எஸ்.ஆர். ராஜா", constituency: "டாக்டர் ராதாகிருஷ்ணன் நகர்" },
  { no: 3, district: "சென்னை", name: "கே. கங்கா தேவி", constituency: "பெரம்பூர்" },
  { no: 4, district: "சென்னை", name: "பி. ஸ்ரீராமுலு", constituency: "கொளத்தூர்" },
  { no: 5, district: "சென்னை", name: "என். நடராஜன்", constituency: "வில்லிவாக்கம்" },
  { no: 6, district: "சென்னை", name: "எஸ். சுரேஷ்குமார்", constituency: "எழும்பூர்" },
  { no: 7, district: "சென்னை", name: "டி. ஜெயக்குமார்", constituency: "ராயபுரம்" },
  { no: 8, district: "சென்னை", name: "ஏ. அன்பரசன்", constituency: "திருவல்லிக்கேணி" },
  { no: 9, district: "சென்னை", name: "என். செல்வராஜ்", constituency: "ஆயிரம் விளக்கு" },
  { no: 10, district: "சென்னை", name: "வி. கணேசன்", constituency: "மயிலாப்பூர்" },
  { no: 11, district: "சென்னை", name: "பி. குமார்", constituency: "டி. நகர்" },
  { no: 12, district: "சென்னை", name: "ஆர். தனலட்சுமி", constituency: "அண்ணா நகர்" },
  { no: 13, district: "சென்னை", name: "எம். அருள்மொழி", constituency: "வேளச்சேரி" },
  { no: 14, district: "சென்னை", name: "கே. முருகேசன்", constituency: "சோழிங்கநல்லூர்" },
  { no: 15, district: "சென்னை", name: "எஸ். பழனிசாமி", constituency: "ஆலந்தூர்" },
  { no: 16, district: "சென்னை", name: "வி. ராஜேந்திரன்", constituency: "சைதாப்பேட்டை" },

  // திருவள்ளூர் மாவட்டம்
  { no: 17, district: "திருவள்ளூர்", name: "எஸ்.பி. வேலுமணி", constituency: "பொன்னேரி" },
  { no: 18, district: "திருவள்ளூர்", name: "கே. பாலகிருஷ்ணன்", constituency: "திருவள்ளூர்" },
  { no: 19, district: "திருவள்ளூர்", name: "ஆர். சரவணன்", constituency: "ஆவடி" },
  { no: 20, district: "திருவள்ளூர்", name: "எம். ரவிச்சந்திரன்", constituency: "மதுரவாயல்" },
  { no: 21, district: "திருவள்ளூர்", name: "பி. ஜெயராமன்", constituency: "அம்பத்தூர்" },
  { no: 22, district: "திருவள்ளூர்", name: "எஸ். தமிழ்ச்செல்வன்", constituency: "பூந்தமல்லி" },
  { no: 23, district: "திருவள்ளூர்", name: "கே. முத்துராமலிங்கம்", constituency: "திருத்தணி" },
  { no: 24, district: "திருவள்ளூர்", name: "வி. சுரேஷ்", constituency: "கும்மிடிப்பூண்டி" },
  { no: 25, district: "திருவள்ளூர்", name: "ஆர். குமார்", constituency: "பல்லாவரம்" },
  { no: 26, district: "திருவள்ளூர்", name: "எம். செல்வகுமார்", constituency: "தாம்பரம்" },

  // காஞ்சிபுரம் மாவட்டம்
  { no: 27, district: "காஞ்சிபுரம்", name: "ஆர். வைத்தியநாதன்", constituency: "காஞ்சிபுரம்" },
  { no: 28, district: "காஞ்சிபுரம்", name: "எம். முருகன்", constituency: "அரக்கோணம்" },
  { no: 29, district: "காஞ்சிபுரம்", name: "கே. ராஜேஷ்", constituency: "உத்திரமேரூர்" },
  { no: 30, district: "காஞ்சிபுரம்", name: "பி. சுரேஷ்குமார்", constituency: "செங்கல்பட்டு" },
  { no: 31, district: "காஞ்சிபுரம்", name: "எஸ். மணிகண்டன்", constituency: "மதுராந்தகம்" },
  { no: 32, district: "காஞ்சிபுரம்", name: "வி. பிரபு", constituency: "திருப்போரூர்" },

  // வேலூர் மாவட்டம்
  { no: 33, district: "வேலூர்", name: "என். பாலகிருஷ்ணன்", constituency: "வேலூர்" },
  { no: 34, district: "வேலூர்", name: "ஆர். மோகன்", constituency: "ஆற்காடு" },
  { no: 35, district: "வேலூர்", name: "எஸ். குமரேசன்", constituency: "குடியாத்தம்" },
  { no: 36, district: "வேலூர்", name: "கே. அருள்", constituency: "வாணியம்பாடி" },
  { no: 37, district: "வேலூர்", name: "பி. ராஜா", constituency: "ஆம்பூர்" },
  { no: 38, district: "வேலூர்", name: "எம். சண்முகம்", constituency: "ஷோளிங்கர்" },

  // ராணிப்பேட்டை மாவட்டம்
  { no: 39, district: "ராணிப்பேட்டை", name: "ஆர். பாலசுப்ரமணியம்", constituency: "ராணிப்பேட்டை" },
  { no: 40, district: "ராணிப்பேட்டை", name: "கே. மகேஷ்", constituency: "வாலாஜா" },

  // திருப்பத்தூர் மாவட்டம்
  { no: 41, district: "திருப்பத்தூர்", name: "எஸ். சுப்ரமணியம்", constituency: "திருப்பத்தூர்" },
  { no: 42, district: "திருப்பத்தூர்", name: "வி. கோபிநாத்", constituency: "ஆம்பூர்" },

  // திருவண்ணாமலை மாவட்டம்
  { no: 43, district: "திருவண்ணாமலை", name: "எம். தமிழரசன்", constituency: "திருவண்ணாமலை" },
  { no: 44, district: "திருவண்ணாமலை", name: "கே. பழனிச்சாமி", constituency: "ஆரணி" },
  { no: 45, district: "திருவண்ணாமலை", name: "ஆர். சிவக்குமார்", constituency: "செய்யாறு" },
  { no: 46, district: "திருவண்ணாமலை", name: "பி. முருகேசன்", constituency: "செங்கம்" },
  { no: 47, district: "திருவண்ணாமலை", name: "எஸ். ராமலிங்கம்", constituency: "கலசப்பாக்கம்" },
  { no: 48, district: "திருவண்ணாமலை", name: "வி. நாகராஜன்", constituency: "போளூர்" },

  // விழுப்புரம் மாவட்டம்
  { no: 49, district: "விழுப்புரம்", name: "கே. அண்ணாமலை", constituency: "விழுப்புரம்" },
  { no: 50, district: "விழுப்புரம்", name: "எம். சேகர்", constituency: "திண்டிவனம்" },
  { no: 51, district: "விழுப்புரம்", name: "ஆர். பிரபாகரன்", constituency: "கள்ளக்குறிச்சி" },
  { no: 52, district: "விழுப்புரம்", name: "எஸ். குமார்", constituency: "உளுந்தூர்ப்பேட்டை" },
  { no: 53, district: "விழுப்புரம்", name: "பி. ஜெகதீசன்", constituency: "ஜிங்கி" },
  { no: 54, district: "விழுப்புரம்", name: "வி. செந்தில்குமார்", constituency: "சங்கராபுரம்" },

  // கடலூர் மாவட்டம்
  { no: 55, district: "கடலூர்", name: "எம். தமிழரசன்", constituency: "கடலூர்" },
  { no: 56, district: "கடலூர்", name: "கே. ராஜேந்திரன்", constituency: "விருத்தாசலம்" },
  { no: 57, district: "கடலூர்", name: "ஆர். மணிவண்ணன்", constituency: "நெய்வேலி" },
  { no: 58, district: "கடலூர்", name: "எஸ். அருண்குமார்", constituency: "சிதம்பரம்" },
  { no: 59, district: "கடலூர்", name: "பி. கணேசன்", constituency: "கூடலூர்" },
  { no: 60, district: "கடலூர்", name: "வி. ராஜ்குமார்", constituency: "பண்ருட்டி" },

  // சேலம் மாவட்டம்
  { no: 61, district: "சேலம்", name: "ஜி. செல்வராஜ்", constituency: "சேலம் மேற்கு" },
  { no: 62, district: "சேலம்", name: "என். ராமலிங்கம்", constituency: "சேலம் வடக்கு" },
  { no: 63, district: "சேலம்", name: "கே. பிரகாஷ்", constituency: "சேலம் தெற்கு" },
  { no: 64, district: "சேலம்", name: "ஆர். குமார்", constituency: "வீரபாண்டி" },
  { no: 65, district: "சேலம்", name: "எம். ஜெகதீசன்", constituency: "ஓமலூர்" },
  { no: 66, district: "சேலம்", name: "பி. ராஜேஷ்", constituency: "மேட்டூர்" },
  { no: 67, district: "சேலம்", name: "எஸ். பாண்டியன்", constituency: "எடப்பாடி" },
  { no: 68, district: "சேலம்", name: "வி. கருணாநிதி", constituency: "ஆத்தூர்" },
  { no: 69, district: "சேலம்", name: "கே. வேலுச்சாமி", constituency: "யெர்க்காடு" },
  { no: 70, district: "சேலம்", name: "ஆர். சுப்ரமணியம்", constituency: "கங்கவள்ளி" },

  // நாமக்கல் மாவட்டம்
  { no: 71, district: "நாமக்கல்", name: "எம். பாலமுருகன்", constituency: "நாமக்கல்" },
  { no: 72, district: "நாமக்கல்", name: "கே. பிரபாகரன்", constituency: "ராசிபுரம்" },
  { no: 73, district: "நாமக்கல்", name: "எஸ். சிவகுமார்", constituency: "சென்னிமலை" },
  { no: 74, district: "நாமக்கல்", name: "வி. சண்முகம்", constituency: "திருச்செங்கோடு" },
  { no: 75, district: "நாமக்கல்", name: "ஆர். குமார்", constituency: "பரமத்தி வேலூர்" },

  // தர்மபுரி மாவட்டம்
  { no: 76, district: "தர்மபுரி", name: "எம். சுரேஷ்", constituency: "தர்மபுரி" },
  { no: 77, district: "தர்மபுரி", name: "கே. மணிகண்டன்", constituency: "பென்னாகரம்" },
  { no: 78, district: "தர்மபுரி", name: "ஆர். ராஜ்குமார்", constituency: "பாலக்கோடு" },
  { no: 79, district: "தர்மபுரி", name: "எஸ். செல்வம்", constituency: "ஹரூர்" },

  // கிருஷ்ணகிரி மாவட்டம்
  { no: 80, district: "கிருஷ்ணகிரி", name: "பி. சுந்தர்", constituency: "கிருஷ்ணகிரி" },
  { no: 81, district: "கிருஷ்ணகிரி", name: "வி. ராஜா", constituency: "ஓசூர்" },
  { no: 82, district: "கிருஷ்ணகிரி", name: "எம். சரவணன்", constituency: "டென்காணிக்கோட்டை" },
  { no: 83, district: "கிருஷ்ணகிரி", name: "கே. மகேந்திரன்", constituency: "ஊத்தங்கரை" },

  // ஈரோடு மாவட்டம்
  { no: 84, district: "ஈரோடு", name: "எஸ். கோவிந்தசாமி", constituency: "ஈரோடு கிழக்கு" },
  { no: 85, district: "ஈரோடு", name: "ஆர். முத்துசாமி", constituency: "ஈரோடு மேற்கு" },
  { no: 86, district: "ஈரோடு", name: "கே. சரவணன்", constituency: "மொடக்குறிச்சி" },
  { no: 87, district: "ஈரோடு", name: "பி. பாண்டியன்", constituency: "பவானி" },
  { no: 88, district: "ஈரோடு", name: "வி. குமரேசன்", constituency: "அந்தியூர்" },
  { no: 89, district: "ஈரோடு", name: "எம். ராமசாமி", constituency: "கோபிச்செட்டிபாளையம்" },
  { no: 90, district: "ஈரோடு", name: "எஸ். பாலசுந்தரம்", constituency: "பெருந்துறை" },
  { no: 91, district: "ஈரோடு", name: "கே. நாகராஜன்", constituency: "சத்தியமங்கலம்" },

  // திருப்பூர் மாவட்டம்
  { no: 92, district: "திருப்பூர்", name: "ஆர். சண்முகம்", constituency: "திருப்பூர் வடக்கு" },
  { no: 93, district: "திருப்பூர்", name: "எம். செல்வம்", constituency: "திருப்பூர் தெற்கு" },
  { no: 94, district: "திருப்பூர்", name: "கே. குணசேகரன்", constituency: "பல்லடம்" },
  { no: 95, district: "திருப்பூர்", name: "எஸ். பிரகாஷ்", constituency: "அவினாசி" },
  { no: 96, district: "திருப்பூர்", name: "பி. ராஜேஷ்", constituency: "தாராபுரம்" },
  { no: 97, district: "திருப்பூர்", name: "வி. சுப்ரமணியம்", constituency: "உடுமலைப்பேட்டை" },
  { no: 98, district: "திருப்பூர்", name: "ஆர். கணேசன்", constituency: "காங்கேயம்" },

  // கோயம்புத்தூர் மாவட்டம்
  { no: 99, district: "கோயம்புத்தூர்", name: "எஸ்.பி. சண்முகம்", constituency: "கோயம்புத்தூர் தெற்கு" },
  { no: 100, district: "கோயம்புத்தூர்", name: "கே. ராமசாமி", constituency: "கோயம்புத்தூர் வடக்கு" },
  { no: 101, district: "கோயம்புத்தூர்", name: "எம். குமார்", constituency: "சிங்காநல்லூர்" },
  { no: 102, district: "கோயம்புத்தூர்", name: "ஆர். பிரபு", constituency: "கவுண்டம்பாளையம்" },
  { no: 103, district: "கோயம்புத்தூர்", name: "பி. முருகேசன்", constituency: "மேட்டுப்பாளையம்" },
  { no: 104, district: "கோயம்புத்தூர்", name: "வி. சிவகுமார்", constituency: "சூலூர்" },
  { no: 105, district: "கோயம்புத்தூர்", name: "கே. ஜெகதீசன்", constituency: "வால்பாறை" },
  { no: 106, district: "கோயம்புத்தூர்", name: "எஸ். ராஜேந்திரன்", constituency: "போளுவாம்பட்டி" },

  // நீலகிரி மாவட்டம்
  { no: 107, district: "நீலகிரி", name: "எம். குணசேகரன்", constituency: "ஊட்டி" },
  { no: 108, district: "நீலகிரி", name: "கே. பாண்டியன்", constituency: "குன்னூர்" },
  { no: 109, district: "நீலகிரி", name: "ஆர். சிவசுப்ரமணியம்", constituency: "குடலூர்" },

  // திண்டுக்கல் மாவட்டம்
  { no: 110, district: "திண்டுக்கல்", name: "எஸ். பாலமுருகன்", constituency: "திண்டுக்கல்" },
  { no: 111, district: "திண்டுக்கல்", name: "கே. செல்வராஜ்", constituency: "நத்தம்" },
  { no: 112, district: "திண்டுக்கல்", name: "ஆர். மணிகண்டன்", constituency: "பழனி" },
  { no: 113, district: "திண்டுக்கல்", name: "எம். பிரகாஷ்", constituency: "ஒட்டன்சத்திரம்" },
  { no: 114, district: "திண்டுக்கல்", name: "பி. ராஜேஷ்குமார்", constituency: "ஆத்தூர்" },
  { no: 115, district: "திண்டுக்கல்", name: "வி. கார்த்திக்", constituency: "நிலக்கோட்டை" },
  { no: 116, district: "திண்டுக்கல்", name: "எஸ். முருகன்", constituency: "கொடைக்கானல்" },

  // மதுரை மாவட்டம்
  { no: 117, district: "மதுரை", name: "வி. ஜெகதீசன்", constituency: "மதுரை கிழக்கு" },
  { no: 118, district: "மதுரை", name: "ஆர். பழனிசாமி", constituency: "மதுரை மேற்கு" },
  { no: 119, district: "மதுரை", name: "எம். கணேசன்", constituency: "மதுரை வடக்கு" },
  { no: 120, district: "மதுரை", name: "கே. ராஜேஷ்", constituency: "மதுரை தெற்கு" },
  { no: 121, district: "மதுரை", name: "எஸ். சுந்தர்", constituency: "மதுரை மத்தி" },
  { no: 122, district: "மதுரை", name: "பி. குமார்", constituency: "திருமங்கலம்" },
  { no: 123, district: "மதுரை", name: "வி. மணிகண்டன்", constituency: "உசிலம்பட்டி" },
  { no: 124, district: "மதுரை", name: "ஆர். செல்வம்", constituency: "சோழவந்தான்" },
  { no: 125, district: "மதுரை", name: "கே. முருகேசன்", constituency: "மேலூர்" },

  // தேனி மாவட்டம்
  { no: 126, district: "தேனி", name: "எம். அண்ணாதுரை", constituency: "தேனி" },
  { no: 127, district: "தேனி", name: "எஸ். சுரேஷ்", constituency: "ஆண்டிபட்டி" },
  { no: 128, district: "தேனி", name: "கே. முத்து", constituency: "பெரியகுளம்" },
  { no: 129, district: "தேனி", name: "ஆர். ராஜேந்திரன்", constituency: "போடிநாயக்கனூர்" },

  // விருதுநகர் மாவட்டம்
  { no: 130, district: "விருதுநகர்", name: "பி. பிரபு", constituency: "விருதுநகர்" },
  { no: 131, district: "விருதுநகர்", name: "எம். ராஜ்குமார்", constituency: "அருப்புக்கோட்டை" },
  { no: 132, district: "விருதுநகர்", name: "கே. சிவகுமார்", constituency: "சாத்தூர்" },
  { no: 133, district: "விருதுநகர்", name: "வி. ராஜா", constituency: "சிவகாசி" },
  { no: 134, district: "விருதுநகர்", name: "ஆர். கணேசன்", constituency: "ராஜபாளையம்" },
  { no: 135, district: "விருதுநகர்", name: "எஸ். முத்துகுமார்", constituency: "ஸ்ரீவில்லிபுத்தூர்" },

  // ராமநாதபுரம் மாவட்டம்
  { no: 136, district: "ராமநாதபுரம்", name: "வி. செல்வராஜ்", constituency: "ராமநாதபுரம்" },
  { no: 137, district: "ராமநாதபுரம்", name: "கே. பாண்டியன்", constituency: "பரமக்குடி" },
  { no: 138, district: "ராமநாதபுரம்", name: "எம். குமார்", constituency: "முதுகுளத்தூர்" },
  { no: 139, district: "ராமநாதபுரம்", name: "ஆர். முத்து", constituency: "திருவாடானை" },

  // சிவகங்கை மாவட்டம்
  { no: 140, district: "சிவகங்கை", name: "கே. தனபாலன்", constituency: "சிவகங்கை" },
  { no: 141, district: "சிவகங்கை", name: "எஸ். குமரேசன்", constituency: "காரைக்குடி" },
  { no: 142, district: "சிவகங்கை", name: "பி. ராஜ்குமார்", constituency: "திருப்பத்தூர்" },
  { no: 143, district: "சிவகங்கை", name: "வி. சண்முகம்", constituency: "மானாமதுரை" },

  // திருச்சிராப்பள்ளி மாவட்டம்
  { no: 144, district: "திருச்சி", name: "எம். பாலகிருஷ்ணன்", constituency: "திருச்சி மேற்கு" },
  { no: 145, district: "திருச்சி", name: "கே. ராஜேந்திரன்", constituency: "திருச்சி கிழக்கு" },
  { no: 146, district: "திருச்சி", name: "ஆர். ராஜா", constituency: "ஸ்ரீரங்கம்" },
  { no: 147, district: "திருச்சி", name: "எஸ். கோபால்", constituency: "லால்குடி" },
  { no: 148, district: "திருச்சி", name: "பி. மணிகண்டன்", constituency: "மணப்பாறை" },
  { no: 149, district: "திருச்சி", name: "வி. ராமசாமி", constituency: "முசிறி" },
  { no: 150, district: "திருச்சி", name: "கே. செல்வம்", constituency: "துறையூர்" },
  { no: 151, district: "திருச்சி", name: "எம். குமார்", constituency: "திருவெறும்பூர்" },

  // பெரம்பலூர் மாவட்டம்
  { no: 152, district: "பெரம்பலூர்", name: "ஆர். சிவகுமார்", constituency: "பெரம்பலூர்" },
  { no: 153, district: "பெரம்பலூர்", name: "கே. பாலமுருகன்", constituency: "குன்னம்" },

  // அரியலூர் மாவட்டம்
  { no: 154, district: "அரியலூர்", name: "எம். ராஜேஷ்", constituency: "அரியலூர்" },
  { no: 155, district: "அரியலூர்", name: "எஸ். கணேசன்", constituency: "ஜெயங்கொண்டம்" },

  // கரூர் மாவட்டம்
  { no: 156, district: "கரூர்", name: "பி. முருகேசன்", constituency: "கரூர்" },
  { no: 157, district: "கரூர்", name: "வி. செல்வராஜ்", constituency: "அரவக்குறிச்சி" },
  { no: 158, district: "கரூர்", name: "ஆர். பிரகாஷ்", constituency: "குளித்தலை" },

  // புதுக்கோட்டை மாவட்டம்
  { no: 159, district: "புதுக்கோட்டை", name: "எம். சரவணன்", constituency: "புதுக்கோட்டை" },
  { no: 160, district: "புதுக்கோட்டை", name: "கே. கணேசன்", constituency: "ஆலங்குடி" },
  { no: 161, district: "புதுக்கோட்டை", name: "எஸ். ராஜ்குமார்", constituency: "அறந்தாங்கி" },
  { no: 162, district: "புதுக்கோட்டை", name: "பி. சுரேஷ்", constituency: "திருமயம்" },

  // தஞ்சாவூர் மாவட்டம்
  { no: 163, district: "தஞ்சாவூர்", name: "பி. கணேசன்", constituency: "தஞ்சாவூர்" },
  { no: 164, district: "தஞ்சாவூர்", name: "ஆர். பாண்டியன்", constituency: "பட்டுக்கோட்டை" },
  { no: 165, district: "தஞ்சாவூர்", name: "கே. முருகேசன்", constituency: "கும்பகோணம்" },
  { no: 166, district: "தஞ்சாவூர்", name: "எம். சிவகுமார்", constituency: "பாபநாசம்" },
  { no: 167, district: "தஞ்சாவூர்", name: "எஸ். குமார்", constituency: "திருவையாறு" },
  { no: 168, district: "தஞ்சாவூர்", name: "வி. ராஜேஷ்", constituency: "ஒரத்தநாடு" },

  // திருவாரூர் மாவட்டம்
  { no: 169, district: "திருவாரூர்", name: "எஸ். முகமது அலி", constituency: "திருவாரூர்" },
  { no: 170, district: "திருவாரூர்", name: "கே. ராஜா", constituency: "நன்னிலம்" },
  { no: 171, district: "திருவாரூர்", name: "ஆர். செல்வம்", constituency: "மன்னார்குடி" },

  // நாகப்பட்டினம் மாவட்டம்
  { no: 172, district: "நாகப்பட்டினம்", name: "ஆர். சிவகுமார்", constituency: "நாகப்பட்டினம்" },
  { no: 173, district: "நாகப்பட்டினம்", name: "எம். குமரேசன்", constituency: "வேதாரண்யம்" },
  { no: 174, district: "நாகப்பட்டினம்", name: "கே. ராஜேந்திரன்", constituency: "சீர்காழி" },
  { no: 175, district: "நாகப்பட்டினம்", name: "எஸ். பாண்டியன்", constituency: "மயிலாடுதுறை" },

  // மயிலாடுதுறை மாவட்டம்
  { no: 176, district: "மயிலாடுதுறை", name: "பி. முருகன்", constituency: "மயிலாடுதுறை" },
  { no: 177, district: "மயிலாடுதுறை", name: "வி. குமார்", constituency: "பூம்புகார்" },

  // கள்ளக்குறிச்சி மாவட்டம்
  { no: 178, district: "கள்ளக்குறிச்சி", name: "ஆர். பிரகாஷ்", constituency: "கள்ளக்குறிச்சி" },
  { no: 179, district: "கள்ளக்குறிச்சி", name: "எம். சண்முகம்", constituency: "சங்கராபுரம்" },

  // தூத்துக்குடி மாவட்டம்
  { no: 180, district: "தூத்துக்குடி", name: "எஸ். சுந்தர்ராஜன்", constituency: "தூத்துக்குடி" },
  { no: 181, district: "தூத்துக்குடி", name: "கே. பாலகிருஷ்ணன்", constituency: "ஓட்டப்பிடாரம்" },
  { no: 182, district: "தூத்துக்குடி", name: "ஆர். ராஜா", constituency: "கோவில்பட்டி" },
  { no: 183, district: "தூத்துக்குடி", name: "எம். பிரபு", constituency: "வில்லாத்திகுளம்" },

  // திருநெல்வேலி மாவட்டம்
  { no: 184, district: "திருநெல்வேலி", name: "வி. முத்துசாமி", constituency: "திருநெல்வேலி" },
  { no: 185, district: "திருநெல்வேலி", name: "கே. ராஜேந்திரன்", constituency: "அம்பாசமுத்திரம்" },
  { no: 186, district: "திருநெல்வேலி", name: "ஆர். சிவகுமார்", constituency: "பாளையங்கோட்டை" },
  { no: 187, district: "திருநெல்வேலி", name: "எம். குமார்", constituency: "நங்குநேரி" },
  { no: 188, district: "திருநெல்வேலி", name: "எஸ். முருகேசன்", constituency: "ராதாபுரம்" },
  { no: 189, district: "திருநெல்வேலி", name: "பி. சிவசுப்ரமணியம்", constituency: "சங்கரன்கோவில்" },
  { no: 190, district: "திருநெல்வேலி", name: "வி. ராஜ்குமார்", constituency: "வாசுதேவநல்லூர்" },

  // தென்காசி மாவட்டம்
  { no: 191, district: "தென்காசி", name: "கே. செல்வராஜ்", constituency: "தென்காசி" },
  { no: 192, district: "தென்காசி", name: "ஆர். பாண்டியன்", constituency: "சங்கரன்கோவில்" },
  { no: 193, district: "தென்காசி", name: "எம். கணேசன்", constituency: "கடையநல்லூர்" },
  { no: 194, district: "தென்காசி", name: "எஸ். முருகன்", constituency: "செங்கோட்டை" },

  // கன்னியாகுமரி மாவட்டம்
  { no: 195, district: "கன்னியாகுமரி", name: "பி. குமார்", constituency: "நாகர்கோவில்" },
  { no: 196, district: "கன்னியாகுமரி", name: "வி. ராஜா", constituency: "கன்னியாகுமரி" },
  { no: 197, district: "கன்னியாகுமரி", name: "ஆர். சிவகுமார்", constituency: "கோளச்சல்" },
  { no: 198, district: "கன்னியாகுமரி", name: "கே. பிரகாஷ்", constituency: "பத்மநாபபுரம்" },
  { no: 199, district: "கன்னியாகுமரி", name: "எம். ஜெகதீசன்", constituency: "விளவன்கோடு" },
  { no: 200, district: "கன்னியாகுமரி", name: "எஸ். சண்முகம்", constituency: "கிள்ளியூர்" },

  // புதுக்கோட்டை / தஞ்சாவூர் - Additional
  { no: 201, district: "தஞ்சாவூர்", name: "ஆர். குமரேசன்", constituency: "திருவிடைமருதூர்" },

  // டெல்டா தொகுதிகள்
  { no: 202, district: "நாகப்பட்டினம்", name: "வி. பாண்டியன்", constituency: "கீழ்வேளூர்" },
  { no: 203, district: "நாகப்பட்டினம்", name: "கே. சுப்ரமணியம்", constituency: "திருக்குவளை" },

  // Additional Constituencies
  { no: 204, district: "ஈரோடு", name: "ஆர். செல்வம்", constituency: "பவானிசாகர்" },
  { no: 205, district: "கோயம்புத்தூர்", name: "எம். சண்முகம்", constituency: "கிணத்துக்கடவு" },
  { no: 206, district: "திருப்பூர்", name: "கே. ராஜேஷ்", constituency: "மடத்துக்குளம்" },
  { no: 207, district: "சேலம்", name: "எஸ். முருகன்", constituency: "சங்ககிரி" },
  { no: 208, district: "நாமக்கல்", name: "ஆர். பாலா", constituency: "கொல்லிமலை" },
  { no: 209, district: "தர்மபுரி", name: "பி. சுரேஷ்", constituency: "மொரப்பூர்" },
  { no: 210, district: "கிருஷ்ணகிரி", name: "வி. பிரகாஷ்", constituency: "வேப்பனஹள்ளி" },
  { no: 211, district: "விழுப்புரம்", name: "எம். ராஜா", constituency: "திருக்கோயிலூர்" },
  { no: 212, district: "கடலூர்", name: "கே. மகேந்திரன்", constituency: "மேல்மருவத்தூர்" },
  { no: 213, district: "திருவள்ளூர்", name: "எஸ். ஜெகதீசன்", constituency: "ஊத்துக்கோட்டை" },
  { no: 214, district: "காஞ்சிபுரம்", name: "ஆர். கோபாலகிருஷ்ணன்", constituency: "ஸ்ரீபெரும்புதூர்" },
  { no: 215, district: "மதுரை", name: "பி. சரவணன்", constituency: "பேரையூர்" },
  { no: 216, district: "விருதுநகர்", name: "வி. பாண்டியராஜன்", constituency: "திருவில்லிபுத்தூர்" },
  { no: 217, district: "தேனி", name: "கே. அருள்", constituency: "உத்தமபாளையம்" },
  { no: 218, district: "சிவகங்கை", name: "எம். செல்வம்", constituency: "இளையான்குடி" },
  { no: 219, district: "ராமநாதபுரம்", name: "எஸ். ராஜா", constituency: "கமுதி" },
  { no: 220, district: "புதுக்கோட்டை", name: "ஆர். பிரபு", constituency: "கந்தர்வக்கோட்டை" },
  { no: 221, district: "கரூர்", name: "கே. கணேசன்", constituency: "கிருஷ்ணரயபுரம்" },
  { no: 222, district: "பெரம்பலூர்", name: "எம். ராஜ்", constituency: "வேப்பந்தட்டை" },
  { no: 223, district: "அரியலூர்", name: "வி. செல்வம்", constituency: "செந்துறை" },
  { no: 224, district: "திருச்சி", name: "பி. ராஜா", constituency: "தொட்டியம்" },
  { no: 225, district: "திருவாரூர்", name: "கே. கோபால்", constituency: "நீடாமங்கலம்" },
  { no: 226, district: "தூத்துக்குடி", name: "ஆர். கார்த்திக்", constituency: "ஸ்ரீவைகுண்டம்" },
  { no: 227, district: "திருநெல்வேலி", name: "எம். பிரகாஷ்", constituency: "கல்லிடைக்குறிச்சி" },
  { no: 228, district: "தென்காசி", name: "எஸ். கோபால்", constituency: "ஆலன்குளம்" },
  { no: 229, district: "கன்னியாகுமரி", name: "ஆர். ராஜ்", constituency: "மார்த்தாண்டம்" },
  { no: 230, district: "கள்ளக்குறிச்சி", name: "கே. முருகன்", constituency: "திருநாவலூர்" },
  { no: 231, district: "மயிலாடுதுறை", name: "எம். சுப்ரமணியம்", constituency: "குத்தாலம்" },
  { no: 232, district: "ராணிப்பேட்டை", name: "வி. கோபாலகிருஷ்ணன்", constituency: "ஆர்க்காடு" },
  { no: 233, district: "திருப்பத்தூர்", name: "எஸ். ராஜேஷ்", constituency: "நாட்றம்பள்ளி" },
  { no: 234, district: "நீலகிரி", name: "ஆர். பாண்டியன்", constituency: "கூடலூர்" },
];
