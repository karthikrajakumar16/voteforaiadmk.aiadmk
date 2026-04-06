import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Landmark, Settings, Wheat, Droplets, PawPrint, Fish, GraduationCap, Stethoscope, BookOpen, Baby, Shield, Factory, Wrench, Leaf, HardHat, TreePine, Zap, Building2, Palmtree, UserCheck, TrendingDown, Heart, Accessibility, Users, Clock, Home, Briefcase, Siren, Newspaper, Shirt, MoreHorizontal } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const CategoryPromises = () => {
  const [open, setOpen] = useState<number | null>(null);
  const { t } = useLanguage();

  const categories = [
    { icon: Landmark, name: t("மத்திய, மாநில கூட்டாட்சி முறை", "Centre-State Federalism"), count: 7, promises: [
      t("மாநில அரசுகளுக்கு உரிய நிதிப் பகிர்வு வழங்கப்பட வேண்டும்", "States should receive their due share of funds"),
      t("மாநிலங்களுக்கு கூடுதல் நிதிப் பகிர்வை வலியுறுத்துதல்", "Demand greater fiscal allocation for states"),
      t("நிதி ஆணைய நிதிப் பகிர்வு குறையாமல் பெறுவதை வலியுறுத்துதல்", "Ensure Finance Commission allocations are not reduced"),
      t("தொகுதிகள் குறையாமல் விகிதாச்சார பிரதிநிதித்துவம் தடுத்தல்", "Prevent proportional representation from reducing constituencies"),
      t("கல்வி, மருத்துவம் ஆகியவற்றை மாநிலப் பட்டியலுக்கு மாற்ற வலியுறுத்துதல்", "Demand transfer of education & health to state list"),
      t("செஸ், சர்சார்ஜ் போன்ற கூடுதல் வரிகளை மாநில நிதிப் பகிர்வில் சேர்த்தல்", "Include cess & surcharge in state revenue sharing"),
      t("NEET தேர்வு ரத்து செய்யப்படும்", "NEET exam will be cancelled"),
    ]},
    { icon: Settings, name: t("பொது நிர்வாகம்", "Public Administration"), count: 6, promises: [
      t("சான்றிதழ்கள் விரைவாகப் பெற பொது சேவை மையங்கள் வலுப்படுத்தப்படும்", "Public service centers strengthened for faster certificate issuance"),
      t("மனுக்கள் மீதான நடவடிக்கையை அறிய இணையதளம் மேம்படுத்தப்படும்", "Website upgraded to track petition status"),
      t("ஊழல் செய்த அலுவலர்கள், அமைச்சர்கள் மீது கடுமையான நடவடிக்கை", "Strict action against corrupt officials and ministers"),
      t("மலைவாழ் மக்களுக்கு முறையாகக் கணினி பட்டா வழங்கப்படும்", "Computerized patta for hill tribe people"),
      t("கோயில் இனாம் நில உரிமை பிரச்சினைகளுக்குத் தீர்வு", "Resolution of temple inam land ownership issues"),
      t("அரசு நிலங்களில் நீண்ட காலம் வசிப்போருக்குப் பட்டா", "Patta for long-term residents on government land"),
    ]},
    { icon: Wheat, name: t("விவசாயம்", "Agriculture"), count: 36, promises: [
      t("நெல்லுக்கு குவிண்டால் ஒன்றுக்கு ரூ. 3,500 ஆதார விலை", "₹3,500/quintal MSP for paddy"),
      t("கரும்புக்கு டன் ஒன்றுக்கு ரூ. 4,500 நியாய விலை", "₹4,500/ton fair price for sugarcane"),
      t("விவசாய உற்பத்தியாளர் குழுக்களுக்கு உதவி மற்றும் 5 ஆண்டு GST விலக்கு", "FPO support & 5-year GST exemption"),
      t("உரம், விதைகள் வாங்க ஹெக்டேருக்கு ரூ. 15,000 மானியம்", "₹15,000/hectare subsidy for fertilizer & seeds"),
      t("தொடக்க வேளாண்மை கூட்டுறவு பயிர்க் கடன் தள்ளுபடி", "Primary agricultural cooperative crop loan waiver"),
      t("விளைபொருட்களுக்கு குறைந்தபட்ச விலை (MSP) நிர்ணயம் மற்றும் அரசே கொள்முதல்", "MSP guarantee with government procurement"),
      t("மதிப்புக் கூட்டும் தொழில்களுக்குக் கட்டமைப்பு மற்றும் கூட்டுறவு மூலம் விற்பனை", "Value-added industry infrastructure & cooperative sales"),
      t("காப்பீட்டு பிரீமியத்தில் விவசாயி 2% செலுத்தினால் மீதியை அரசே செலுத்தும்", "Government pays insurance premium if farmer pays 2%"),
      t("குளிர்பதன வசதிகள் மற்றும் தனியாருக்கு மானியம்", "Cold storage facilities & private sector subsidy"),
      t("வேளாண் ஆராய்ச்சிப் பணிகளுக்குக் கூடுதல் நிதி", "Additional funding for agricultural research"),
      t("நிலமற்ற விவசாய கூலித் தொழிலாளர்களுக்கு வாழ்வாதாரப் பாதுகாப்பு", "Livelihood protection for landless farm labourers"),
      t("டிரோன் மூலம் மருந்து தெளிக்க கூட்டுறவு வங்கிகள் மூலம் மானிய வாடகை", "Subsidized drone rental for pesticide spraying via cooperatives"),
      t("தரிசு நில மேம்பாடு மற்றும் விவசாயக் காடுகள் வளர்ப்பு", "Wasteland development & farm forestry"),
      t("இயற்கை விவசாயத்தை ஊக்குவிக்க மானியம், ஆய்வுச் சான்றுகள்", "Organic farming subsidies & certification support"),
      t("100% அரசு மானியத்தில் புதிய 'சூரிய ஒளி பம்ப் செட்டுகள்'", "100% subsidized solar pump sets for new connections"),
      t("இயற்கை இடர்பாடுகளால் விவசாயி உயிரிழந்தால் ரூ. 10 லட்சம் இழப்பீடு", "₹10 lakh compensation for farmer death in natural disasters"),
      t("ஆடு, மாடு, கோழி வளர்ப்புக்கு மானியத்துடன் கடன்", "Subsidized loans for goat, cattle, poultry farming"),
      t("டெல்டா மாவட்டங்களில் உலர் களம் மற்றும் சேமிப்புக் கிடங்குகள்", "Drying yards & storage in delta districts"),
      t("மாவட்டம் தோறும் உணவு பதப்படுத்தும் தொழில் பூங்காக்கள்", "Food processing parks in every district"),
      t("ஒவ்வொரு மாவட்டத்திலும் குளிர்சாதனக் கிடங்கு (Cold Storage)", "Cold storage facility in every district"),
      t("சிறு, குறு விவசாயிகளுக்கு மானிய விலையில் தார்பாய்", "Subsidized tarpaulins for small farmers"),
      t("தடையின்றி வண்டல் மண் எடுக்க அனுமதி", "Unrestricted permission to extract alluvial soil"),
      t("பாதுகாப்பான சமுதாய கிணறுகள் மற்றும் சமுதாய போர்வெல்கள் உருவாக்கம்", "Community wells & borewells construction"),
      t("நம்மாழ்வார் பெயரில் இயற்கை வேளாண் கல்வி மையங்கள்", "Organic agriculture education centers named after Nammazhvar"),
      t("பாசனத்திற்கு மும்முனை மின்சாரம் தொடர்ந்து வழங்கப்படும்", "Three-phase power supply for irrigation continues"),
      t("மாநில வேளாண்மை ஆணையம் அமைக்கப்படும்", "State Agriculture Commission to be established"),
      t("'முதலமைச்சர்-விவசாயி வங்கி திட்டம்' மூலம் வேளாண் இயந்திரங்கள் வாடகைக்கு", "Farm machinery rental via CM-Farmer Bank Scheme"),
      t("நீலகிரி மாவட்டத்தில் காய்கறி பதப்படுத்தும் நிலையங்கள்", "Vegetable processing units in Nilgiris"),
      t("மானாவாரி விவசாயிகளுக்கு உற்பத்தியாளர் குழு மற்றும் வளர்ப்புத் திட்டங்கள்", "FPOs & development programs for rain-fed farmers"),
      t("சொட்டுநீர் பாசன மானியங்கள் நேரடியாக வங்கிக் கணக்கில் செலுத்தப்படும்", "Drip irrigation subsidies paid directly to bank accounts"),
      t("பம்ப் செட் உபகரணங்களுக்கான GST 5% ஆக குறைக்க வலியுறுத்தல்", "Demand to reduce GST on pump set equipment to 5%"),
      t("நீரா பானத்தை பதப்படுத்தும் தொழிற்சாலைகள்", "Neera beverage processing factories"),
      t("விலை குறையும் போது கொப்பறை தேங்காயை அரசே கொள்முதல் செய்யும்", "Government procurement of copra when prices fall"),
      t("தேங்காய் நார் தொழிலுக்கு மின் கட்டணச் சலுகை மற்றும் ஊக்கம்", "Electricity concession & incentives for coir industry"),
      t("விவசாய உற்பத்தி ஏற்றுமதி ஊக்குவிப்பு", "Agricultural export promotion"),
      t("இலவச மின்சாரம் விவசாயிகளுக்கு தொடரும்", "Free electricity for farmers continues"),
    ]},
    { icon: Droplets, name: t("நீர் வளம்", "Water Resources"), count: 16, promises: [
      t("குடிமராமத்து திட்டம் மூலம் நீர் நிலைகள் சீரமைப்பு", "Water body restoration via maintenance scheme"),
      t("நீர் நிலைகளில் உள்ள சீமை கருவேல மரங்கள் முற்றிலும் அகற்றப்படும்", "Complete removal of Prosopis trees from water bodies"),
      t("ஆனைமலையாறு மற்றும் நல்லாறு அணைகள் கட்ட நடவடிக்கை", "Action to build Anaimalaiyaru & Nallaru dams"),
      t("பாண்டியாறு-புன்னம்புழா திட்டம் முழுமையாக செயல்படுத்தப்படும்", "Pandiyaru-Punnambuza project full implementation"),
      t("அத்திக்கடவு-அவிநாசி திட்டம் Phase-2 முனைப்போடு செயல்படுத்தப்படும்", "Athikadavu-Avinashi Phase-2 fast-track implementation"),
      t("சரபங்கா நீரேற்றுத் திட்டம் மூலம் 100 ஏரிகளுக்கு நீர் நிரப்பும் பணி", "Sarabanga scheme to fill 100 tanks"),
      t("மேட்டூர் உபரி நீர் மூலம் ஏரிகள் நிரப்பி பாசன வசதி", "Mettur surplus water for tank irrigation"),
      t("அனைத்து ஊராட்சிகளிலும் பாதுகாக்கப்பட்ட குடிநீர்", "Protected drinking water in all panchayats"),
      t("காவிரி-வைகை-குண்டாறு நதிகள் இணைப்புத் திட்டம் விரைவுபடுத்தப்படும்", "Cauvery-Vaigai-Kundaru river linking fast-tracked"),
      t("கோதாவரி-காவிரி நதிநீர் இணைப்புத் திட்டம்", "Godavari-Cauvery river linking project"),
      t("முல்லை பெரியாறு அணையில் 152 அடி தண்ணீர் தேக்கும் பணி தொடரும்", "Mullaperiyar dam 152 ft water storage continues"),
      t("முன்னைய ஆட்சியில் துவக்கப்பட்ட நீர்ப் பாசன கால்வாய்த் திட்டங்கள் விரைவாக நிறைவேற்றப்படும்", "Previous govt irrigation canal projects fast-completed"),
      t("தடுப்பணைகள் அமைத்து நிலத்தடி நீர் செறிவூட்டப்படும்", "Check dams for groundwater recharge"),
      t("தாமிரபரணி உபநீர் மூலம் வறண்ட பகுதிகளுக்கு புதிய நீர் திட்டம்", "New water scheme for dry areas via Tamiraparani"),
      t("தாமிரபரணி-வைபாறு இணைப்புத் திட்டம்", "Tamiraparani-Vaiparu linking project"),
      t("மேட்டூர் உபரி நீர் சரபங்கா, திருமணிமுத்தாறு இணைப்புத் திட்டம்", "Mettur surplus water linking to Sarabanga & Thirumanimutharu"),
    ]},
    { icon: PawPrint, name: t("கால்நடை வளம்", "Animal Husbandry"), count: 6, promises: [
      t("விலையில்லா கறவை மாடு, ஆடுகள் வழங்கும் திட்டம் மீண்டும் தொடரும்", "Free milch cattle & goat distribution scheme to resume"),
      t("தலைவாசல் கால்நடை பூங்கா மூலம் ஆராய்ச்சி மற்றும் கலப்பின பசுக்கள் உருவாக்கம்", "Thalaivasal cattle park for research & crossbreed development"),
      t("செறிவூட்டப்பட்ட தீவனப் பெட்டகங்கள் மானிய விலையில்", "Enriched feed blocks at subsidized rates"),
      t("நபார்டு நிதியுதவியுடன் ஆவின் நிறுவனம் மேம்படுத்தப்படும்", "Aavin upgraded with NABARD financial assistance"),
      t("புதிய கால்நடை மருந்தகங்கள் அமைத்து கட்டமைப்புகள் வலுப்படுத்தப்படும்", "New veterinary dispensaries & infrastructure strengthening"),
      t("பால் உற்பத்தியாளர் கூட்டுறவு சங்கப் பணியாளர்களுக்கு பணி நிரந்தரம்", "Permanent employment for dairy cooperative staff"),
    ]},
    { icon: Fish, name: t("மீனவர் நலன்", "Fishermen Welfare"), count: 12, promises: [
      t("மீனவர் குடும்பத்திற்கு விபத்துக் காப்பீடாக ரூ. 25 லட்சம்", "₹25 lakh accident insurance for fishermen families"),
      t("செயற்கை கோ இணைப்புடன் கடல் ஆம்புலன்ஸ் வசதி", "Sea ambulance with satellite connectivity"),
      t("மீனவர் மீட்புக் குழு மற்றும் இழுவை படகு வசதி", "Fishermen rescue team & towing boat facility"),
      t("ஆழ்கடல் படகுகளுக்கு ரேடியோ டெலிபோன் மற்றும் தொடர்பு மையம்", "Radio telephone & communication center for deep-sea boats"),
      t("ஒருங்கிணைந்த மீன் பிடித் துறைமுகங்கள் அமைக்கப்படும்", "Integrated fishing harbours to be established"),
      t("மானிய சல்லை 500 லிட்டர்; வரி விலக்கு டீசல் மாதம் 4000 லிட்டர்", "500L subsidized diesel; 4000L tax-exempt diesel monthly"),
      t("மீனவர் கூட்டுறவு சங்கங்கள் மூலம் மானியத்துடன் கடன்", "Subsidized loans via fishermen cooperatives"),
      t("உள்நாட்டு மீனவர்களுக்கு மீன் பிடி வலை, உபகரணங்கள் இலவசம்", "Free nets & equipment for inland fishermen"),
      t("மீனவப் பெண்களுக்கு பயோமெட்ரிக் அட்டை மற்றும் SHG சலுகைகள்", "Biometric cards & SHG benefits for fisherwomen"),
      t("முகத்துவாரங்கள் தூர்வாரப்பட்டு அகலப்படுத்தப்படும்", "River mouths dredged & widened"),
      t("நவீன மீன் பதனிடும் நிலையம் மற்றும் பசுமை மீன் சந்தை உருவாக்கம்", "Modern fish processing plant & green fish market"),
      t("65 வயதுக்கு மேற்பட்ட மீனவர்களுக்கு மாதம் ரூ. 2,500 ஓய்வூதியம்", "₹2,500/month pension for fishermen above 65"),
    ]},
    { icon: GraduationCap, name: t("கல்வி", "Education"), count: 10, promises: [
      t("அரசு பள்ளி மாணவர்களுக்கான மருத்துவப் படிப்பு இடஒதுக்கீடு 10% ஆக உயர்வு", "Medical seat reservation for govt school students raised to 10%"),
      t("உயர்நிலை வகுப்புகளில் STEM learning மையங்கள்", "STEM learning centers in higher secondary schools"),
      t("6 முதல் 10-ஆம் வகுப்புகளுக்கு கணினி அறிவியல் பாடம் அறிமுகம்", "Computer science from class 6 to 10"),
      t("இருமொழிக் கொள்கைக்குப் பாதிப்பற்ற புதிய கல்விக் கொள்கை வலியுறுத்தல்", "New education policy without affecting bilingual policy"),
      t("ஆசிரியர் காலிப்பணியிடங்கள் முழுமையாக நிரப்பப்படும்", "Teacher vacancies fully filled"),
      t("பருவகால மாற்றம் (Climate Change) குறித்து பாடத்திட்டத்தில் சேர்ப்பு", "Climate change included in curriculum"),
      t("கல்லூரி மாணவர்களுக்கு விலையில்லா மடிக்கணினி", "Free laptops for college students"),
      t("கல்வித் தொலைக்காட்சி மீண்டும் பயன்பாட்டுக்கு வரும்", "Educational TV channel to resume"),
      t("10 சர்வதேச தரம் வாய்ந்த பல்கலைக்கழகங்கள் தமிழ்நாட்டில் தொடக்கம்", "10 world-class universities to be started in TN"),
      t("ஊர்ப்புற நூலகங்கள் தரம் உயர்த்தப்பட்டு நூலகர்கள் நியமனம்", "Rural libraries upgraded & librarians appointed"),
    ]},
    { icon: Stethoscope, name: t("மருத்துவம் மற்றும் சுகாதாரம்", "Healthcare"), count: 9, promises: [
      t("2000 அம்மா மினி கிளினிக்குகள் நவீன வசதிகளுடன் மீண்டும் திறப்பு", "2000 Amma Mini Clinics reopened with modern facilities"),
      t("பெரிய சிகிச்சைகளுக்கு அரசு காப்பீட்டுத் திட்டத்தில் முழு செலவும் அரசே ஏற்கும்", "Full govt insurance coverage for major treatments"),
      t("மருத்துவர், பல் மருத்துவர், செவிலியர் காலிப்பணியிடங்கள் நிரப்பப்படும்", "Doctor, dentist, nurse vacancies to be filled"),
      t("10 ஆண்டுகளுக்கு மேலாக பணிபுரியும் செவிலியர்கள் பணி நிரந்தரம்", "Permanent status for nurses serving 10+ years"),
      t("அம்மா முழு உடல் பரிசோதனையில் புற்றுநோய் கண்டறியும் வசதி", "Cancer detection in Amma full body checkup"),
      t("கிராமப்புறங்களில் சர்க்கரை நோய், இரத்த அழுத்த மருத்துவ முகாம்கள்", "Diabetes & BP medical camps in rural areas"),
      t("குழந்தை இல்லாதவர்களுக்கு கட்டணமில்லா செயற்கை கருத்தரிப்பு (IVF)", "Free IVF treatment for childless couples"),
      t("அனைத்து மாவட்ட அரசு மருத்துவமனைகளிலும் Linear Accelerator மற்றும் புற்றுநோய் சிகிச்சை", "Linear Accelerator & cancer treatment in all district govt hospitals"),
      t("மருத்துவமனைகளின் கட்டமைப்பு வசதிகள் மேம்படுத்தப்படும்", "Hospital infrastructure improvement"),
    ]},
    { icon: BookOpen, name: t("தமிழ் மொழி மற்றும் பண்பாடு", "Tamil Language & Culture"), count: 5, promises: [
      t("தமிழை மத்திய ஆட்சி மொழியாக அறிவிக்க வலியுறுத்தல்", "Demand Tamil as official language of central govt"),
      t("சென்னை உயர் நீதிமன்ற வழக்காடு மொழியாக தமிழ்", "Tamil as court language in Chennai High Court"),
      t("மத்திய அரசு போட்டித் தேர்வுகள் தமிழில் நடத்த வலியுறுத்தல்", "Central govt exams to be conducted in Tamil"),
      t("25 சர்வதேச பல்கலைக்கழகங்களில் தமிழ் இருக்கைகள் அமைக்கப்படும்", "Tamil chairs in 25 international universities"),
      t("கீழடி, ஆதிச்சநல்லூர், கொடுமணல் அகழாய்வுப் பணிகள் தடையின்றித் தொடரும்", "Keeladi, Adichanallur, Kodumanal excavations continue uninterrupted"),
    ]},
    { icon: Baby, name: t("மகளிர் நலன் மற்றும் குழந்தைகள் பாதுகாப்பு", "Women & Child Welfare"), count: 7, promises: [
      t("மகளிர் சுயதொழில் துவங்க ரூ. 10,000 வரை மானிய உதவி", "₹10,000 subsidy for women self-employment"),
      t("மகளிர் சுயஉதவிக் குழுக்களுக்கு குறைந்த வட்டியில் கடன்", "Low-interest loans for women SHGs"),
      t("தாலிக்குத் தங்கம் மற்றும் விலையில்லா பட்டுவேட்டி-சட்டை, பட்டு சேலைகள்", "Gold for thali & free silk dhoti-shirt, silk sarees"),
      t("கைம் பெண்களுக்கு சுயதொழில் கடன் மற்றும் வேலைவாய்ப்பில் முன்னுரிமை", "Self-employment loans & job priority for widows"),
      t("தையல் பயிற்சி முடித்த பெண்களுக்கு இலவச தையல் இயந்திரம்", "Free sewing machines for trained women"),
      t("டாக்டர் முத்துலட்சுமி ரெட்டி மகப்பேறு உதவித்தொகை உயர்வு", "Dr. Muthulakshmi Reddy maternity aid increase"),
      t("பெண் குழந்தைகள் பாதுகாப்பு திட்ட வைப்பு நிதி ரூ. 1 லட்சமாக உயர்வு", "Girl child protection scheme deposit raised to ₹1 lakh"),
    ]},
    { icon: Shield, name: t("பெண்கள் பாதுகாப்பு", "Women's Safety"), count: 5, promises: [
      t("'காவலன்' செயலி மற்ற நகரங்களுக்கும் விரிவுபடுத்தப்படும்", "'Kavalan' app expanded to more cities"),
      t("அம்மா ரோந்து வாகனங்கள் விரிவுபடுத்தப்படும்", "Amma patrol vehicles expanded"),
      t("இரண்டாம் கட்ட நகரங்களிலும் உலகத்தரத்தில் CCTV கண்காணிப்பு", "World-class CCTV surveillance in tier-2 cities"),
      t("நகர்ப்புறங்களில் பணிபுரியும் பெண்களுக்காக அதிக அளவில் மகளிர் தங்கும் விடுதிகள்", "More women's hostels for urban working women"),
      t("படிப்படியாக மதுபானக் கடைகளை மூடி மதுவிலக்கு அமல்படுத்தப்படும்", "Gradual liquor prohibition by closing shops"),
    ]},
    { icon: Factory, name: t("தொழில் வளம்", "Industrial Growth"), count: 11, promises: [
      t("உலக முதலீட்டாளர் மாநாடு நடத்தி 1 ட்ரில்லியன் டாலர் பொருளாதாரமாக மாற்றுதல்", "Global Investors Meet to make TN a $1 trillion economy"),
      t("தெற்கு மாவட்டங்களில் தொழில் வளம் பெருக சிறப்பு நடவடிக்கைகள்", "Special measures for industrial growth in southern districts"),
      t("முதலீட்டாளர்களுக்கு ஒற்றை சாளர முறை", "Single window system for investors"),
      t("மதுரை, தூத்துக்குடி தொழில் வழித்தடம் மற்றும் ஜவுளிப் பூங்கா", "Madurai-Thoothukudi industrial corridor & textile park"),
      t("மருத்துவச் சுற்றுலா (Medical Tourism) மேம்பாடு", "Medical tourism improvement"),
      t("GI குறியீடு பெற்ற பொருட்களுக்கு ஏற்றுமதி வாரியம்", "Export board for GI-tagged products"),
      t("200 மென்பொருள் நிறுவனங்களுடன் Satellite Software Park அமைப்பு", "Satellite Software Park with 200 companies"),
      t("'அம்மா உப்பு திட்டம்' மீண்டும் கொண்டுவரப்படும்", "'Amma Salt Scheme' to be revived"),
      t("மருந்துவப் பூங்கா (Pharmaceutical Park) அமைப்பு", "Pharmaceutical Park establishment"),
      t("இராணுவத் தளவாடங்கள் தொழில் வழித்தடம் விரைவுபடுத்தப்படும்", "Defence corridor fast-tracked"),
      t("சென்னைக்கு அருகில் 'தொழில்நுட்ப நகர்' அமைப்பு", "'Tech City' near Chennai"),
    ]},
    { icon: Wrench, name: t("சிறு, குறு மற்றும் நடுத்தர தொழில்", "MSME Development"), count: 6, promises: [
      t("பிரச்சினைகளை தீர்க்க குழு மற்றும் ஆலோசனை நிறுவனங்கள் ஏற்பாடு", "Problem-solving committees & consultancy firms"),
      t("கிராமப்புறங்களில் தொழில் துவங்க சிறப்பு மானியங்கள்", "Special subsidies for rural enterprises"),
      t("மின் கட்டணம் வரைமுறைப்படுத்தப்பட்டு மாற்றம்", "Restructured electricity tariffs"),
      t("சூரிய ஒளி மின்சாரம் பயன்படுத்த கூடுதல் மானியம்", "Additional subsidy for solar power usage"),
      t("கைவினை கலைஞர்களுக்கான சிறு வணிக வளாகம் மற்றும் திறன் மையங்கள்", "Small business complexes & skill centers for artisans"),
      t("ஒப்பந்த வேலை (ஜாப் ஒர்க்ஸ்) மீதான GST 5% ஆக குறைக்க வலியுறுத்தல்", "Demand to reduce GST on job works to 5%"),
    ]},
    { icon: Leaf, name: t("சுற்றுச்சூழல்", "Environment"), count: 11, promises: [
      t("'நடந்தாய் வாழி காவேரி திட்டம்' விரைந்து செயல்படுத்தப்படும்", "'Nadandhai Vazhi Cauvery' project fast implementation"),
      t("வைகை, தாமிரபரணி ஆறுகளில் கழிவு நீர் கலப்பது தடுக்கப்படும்", "Prevent sewage contamination in Vaigai & Tamiraparani rivers"),
      t("5 ஆண்டுகளில் 10 கோடி மரக்கன்றுகள் நடும் திட்டம்", "10 crore saplings planting in 5 years"),
      t("அனைத்து நகரப் பேருந்துகளும் மின்சார வாகனங்களாக (EV) மாற்றப்படும்", "All city buses converted to electric vehicles"),
      t("சாக்கடை அகற்ற ரோபோடிக் இயந்திரம் பயன்பாடு", "Robotic machines for sewage cleaning"),
      t("கழிவு நீர் சுத்திகரிப்பு மற்றும் நீர் மறுசுழற்சி ஊக்கம்", "Wastewater treatment & water recycling promotion"),
      t("சாயப்பட்டறை கழிவுநீருக்கு நிரந்தரத் தீர்வு", "Permanent solution for dyeing factory effluent"),
      t("மறுசுழற்சி பிளாஸ்டிக் மீதான GST 5% ஆக குறைப்பு வலியுறுத்தல்", "Demand to reduce GST on recycled plastic to 5%"),
      t("பேப்பர் பை மூலப்பொருட்கள் மீதான GST 5% ஆக குறைப்பு வலியுறுத்தல்", "Demand to reduce GST on paper bag raw materials to 5%"),
      t("குப்பை கழிவுகளுக்கு நவீன குப்பை அழிப்பு முறை", "Modern waste disposal for garbage"),
      t("கிராம ஊராட்சிகளில் கழிவு நீர் மறுசுழற்சி ஊக்கம்", "Wastewater recycling in village panchayats"),
    ]},
    { icon: HardHat, name: t("தொழிலாளர் நலன்", "Labour Welfare"), count: 18, promises: [
      t("ஆட்டோ ஓட்டுநர்களுக்கு அரசு சார்பில் தனி செயலி", "Dedicated govt app for auto drivers"),
      t("உணவு டெலிவரி, டாக்சி ஓட்டுநர்களுக்கு தனி நல வாரியம் மற்றும் ஓய்வூதியம்", "Welfare board & pension for food delivery/taxi drivers"),
      t("நாட்டு செங்கல், மண்பாண்டத் தொழிலாளர்களுக்கு 150 யூனிட் மண்", "150 units of clay for brick & pottery workers"),
      t("மண்பாண்டத் தொழிலாளர்களுக்கு மழைக்கால நிவாரண நிதி உயர்வு", "Rainy season relief fund increase for pottery workers"),
      t("விஸ்வகர்மா சமுதாய மக்களுக்கு தொழில் பூங்கா மற்றும் மானியக் கடன்", "Industrial park & subsidized loans for Vishwakarma community"),
      t("பீடித் தொழிலாளர்கள் வாரியத்தில் பதிவு", "Beedi workers registration in welfare board"),
      t("உப்பளத் தொழிலாளர்களுக்கு மழைக்கால நிவாரண நிதி உயர்வு", "Salt pan workers rainy season relief increase"),
      t("வெள்ளி கொலுசு, ஆபரணத் தொழில் நல வாரியம் அமைப்பு", "Silver anklet & jewelry workers welfare board"),
      t("பனை மரங்கள் வளர்ப்பு மற்றும் உற்பத்திப் பொருட்கள் ஊக்குவிப்பு", "Palm tree cultivation & product promotion"),
      t("பனை தொழிலாளர்களுக்கு வாழ்வாதார மாதாந்திர உதவித்தொகை", "Monthly livelihood aid for palm workers"),
      t("பனை தொழிலாளர்களுக்கு உபகரணங்கள் விலையில்லாமல் வழங்கப்படும்", "Free equipment for palm workers"),
      t("பனை தொழிலாளர்களுக்கு காப்பீடு, ஓய்வூதிய வசதி", "Insurance & pension for palm workers"),
      t("முடிதிருத்தும் மற்றும் சலவைத் தொழிலாளர்களுக்குப் பணிப் பாதுகாப்பு", "Job security for barbers & washermen"),
      t("சலவை மற்றும் முடிதிருத்தும் தொழிலாளர்களுக்கு சிறப்பு வீடுகள்", "Special housing for barbers & washermen"),
      t("அமைப்பு சாரா வாகன ஓட்டுநர்களுக்கு இலவச விபத்துக் காப்பீடு", "Free accident insurance for unorganized vehicle drivers"),
      t("அமைப்பு சாரா தொழிலாளர்களுக்கு ரூ. 10,000 வட்டியில்லா நுண்கடன்", "₹10,000 interest-free micro loan for unorganized workers"),
      t("வியாபாரிகள் வணிகர் நல வாரியத்தில் பதிவு", "Traders registered in merchants welfare board"),
      t("போயர் மக்கள் நல வாரியம் அமைப்பு", "Boyer community welfare board establishment"),
    ]},
    { icon: TreePine, name: t("வன வளம்", "Forest Resources"), count: 1, promises: [
      t("யானை - மனித மோதலைத் தடுக்க நவீன உபகரணங்கள் மற்றும் புதிய ஜீப் வாகனங்கள்", "Modern equipment & new jeeps to prevent human-elephant conflict"),
    ]},
    { icon: Zap, name: t("மின்சாரத் துறை", "Electricity Sector"), count: 3, promises: [
      t("மரபு சாரா எரிசக்தி மற்றும் புதிய மின் உற்பத்தி நிலையங்கள் தொடக்கம்", "Non-conventional energy & new power plants"),
      t("அடுக்குமாடி குடியிருப்புகளின் பொது பயன்பாட்டு மின் கட்டணம் சீரமைப்பு", "Apartment common area electricity tariff restructuring"),
      t("சோலார் பேனல் அமைக்க 1 கிலோ வாட்டிற்கு ₹30,000, 2 கிலோ வாட்டிற்கு ₹60,000 மானியம்", "Solar panel subsidy: ₹30K/kW, ₹60K/2kW"),
    ]},
    { icon: Building2, name: t("உட்கட்டமைப்பு", "Infrastructure"), count: 22, promises: [
      t("முக்கிய நகரங்கள் மற்றும் சுற்றுலா மையங்களில் இலவச WiFi வசதி", "Free WiFi in major cities & tourist spots"),
      t("தூத்துக்குடி விமான நிலையம் தரம் உயர்த்தப்பட்டு இரவு நேர சேவை", "Thoothukudi airport upgraded with night service"),
      t("நாகப்பட்டினம்-கன்னியாகுமரி நான்குவழி சாலைத் திட்டம்", "Nagapattinam-Kanyakumari four-lane road project"),
      t("இரயில்வே, விமான நிலையம் மற்றும் சரக்கு வழித்தட திட்டங்கள் விரைவுபடுத்தப்படும்", "Railway, airport & freight corridor projects fast-tracked"),
      t("குளச்சல் துறைமுகம் மேம்பாடு", "Colachel port development"),
      t("மாநகராட்சிகளில் போக்குவரத்து நெரிசலைத் தவிர்க்க சுற்றுச் சாலைகள்", "Ring roads in corporations to reduce traffic congestion"),
      t("விமான நிலையம் - கிளாம்பாக்கம் மெட்ரோ ரயில் திட்டம்", "Airport - Kilambakkam metro rail project"),
      t("சென்னை வெள்ள தடுப்புப் பணிகள் முழுமையாக நிறைவேற்றப்படும்", "Chennai flood prevention works completed"),
      t("பன்னடுக்கு வாகன நிறுத்த வளாகங்கள் அமைப்பு", "Multi-level vehicle parking complexes"),
      t("கோவை விமான நிலைய விரிவாக்கப் பணி", "Coimbatore airport expansion"),
      t("கோவை மற்றும் மதுரை மெட்ரோ இரயில் திட்டங்கள்", "Coimbatore & Madurai metro rail projects"),
      t("கோவை மேற்கு புறவழிச் சாலை திட்டப் பணிகள்", "Coimbatore western bypass road project"),
      t("L&T பைபாஸ் ஆறு வழிச் சாலையாக மாற்றம்", "L&T bypass upgraded to six-lane road"),
      t("அவிநாசி சாலை உயர்மட்ட மேம்பாலம் நீட்டிப்பு", "Avinashi road flyover extension"),
      t("சிங்காநல்லூர்-ஒண்டிப்புதூர் புதிய மேம்பாலம்", "Singanallur-Ondiputhur new flyover"),
      t("கோவை-பொள்ளாச்சி சாலையில் புதிய மேம்பாலம்", "Coimbatore-Pollachi road new flyover"),
      t("கோவையில் சர்வதேச கிரிக்கெட் மைதானம்", "International cricket stadium in Coimbatore"),
      t("கோவை வெள்ளலூர் பேருந்து முனையம் கட்டுமானம் நிறைவு", "Coimbatore Vellalore bus terminus completion"),
      t("சிறுவாணி அணை தூர்வாரி சீரமைப்பு", "Siruvani dam desilting & renovation"),
      t("கோவையில் அகல இரயில் பாதை சேவை மீண்டும் துவக்கம்", "Broad gauge railway service resumed in Coimbatore"),
      t("கோவை-திருச்சி சாலையில் புதிய உயர்மட்ட மேம்பாலம்", "Coimbatore-Trichy road new flyover"),
      t("தடாகம் சாலை-லாலி ரோடு சந்திப்பு மேம்பாலம்", "Thadagam road-Laly road junction flyover"),
    ]},
    { icon: Palmtree, name: t("சுற்றுலா", "Tourism"), count: 3, promises: [
      t("சுற்றுலா வசதிகள் மேம்பாடு மற்றும் ஆன்மீக சுற்றுலாப் பாதைகள்", "Tourism facilities improvement & spiritual tourism trails"),
      t("சென்னை-கன்னியாகுமரி 10 இடங்களில் World Class Water Theme Park மற்றும் Food Street", "10 World Class Water Theme Parks & Food Streets from Chennai to Kanyakumari"),
      t("சென்னை, இராமேஸ்வரம் பகுதிகளில் கடல் சுற்றுலா வசதிகள்", "Marine tourism in Chennai & Rameswaram"),
    ]},
    { icon: UserCheck, name: t("இளைஞர் நலன், வேலைவாய்ப்பு, திறன் மேம்பாடு", "Youth, Employment & Skill Development"), count: 9, promises: [
      t("இளைஞர்களுக்கு எவ்விதப் பிணையும் இல்லாமல் ரூ. 25 லட்சம் வரை தொழில் கடன்", "Collateral-free business loans up to ₹25 lakh for youth"),
      t("தனியார் நிறுவனங்களில் 75 சதவீத வேலைவாய்ப்புகள் தமிழர்களுக்கே வழங்க சட்டம்", "Law mandating 75% private sector jobs for Tamils"),
      t("TNPSC மூலம் அரசு காலிப் பணியிடங்கள் நிரப்பப்படும்", "Govt vacancies filled through TNPSC"),
      t("மலைவாழ் இளைஞர்களுக்கு ரூ. 10 லட்சம் தொழில் கடன் (50% மானியம்)", "₹10 lakh business loan (50% subsidy) for hill tribe youth"),
      t("நகர்ப்புற மகளிர்/இளைஞர்களுக்கான திறன் பயிற்சி மற்றும் வேலை வாய்ப்பு செயலி", "Skill training & job app for urban women/youth"),
      t("திறன் வளர்ப்பிற்கென தனி பல்கலைக்கழகம் மற்றும் ஆன்லைன் பயிற்சி", "Dedicated skill university & online training"),
      t("போட்டித் தேர்வுகளுக்காக நூலகங்களில் உயர்தர பயிற்சி மையம்", "High-quality coaching centers in libraries for competitive exams"),
      t("கல்வி பயிலும் காலத்திலேயே திறன் பயிற்சி", "Skill training while studying"),
      t("அயலக வேலை வாய்ப்பு நிறுவனம் மூலம் இலவச பயிற்சி", "Free training via overseas employment agency"),
    ]},
    { icon: TrendingDown, name: t("விலைவாசி கட்டுப்பாடு", "Price Control"), count: 4, promises: [
      t("அம்மா உணவகம் மீண்டும் சிறப்பு பொலிவுடன் திறக்கப்படும்", "Amma canteens reopened with enhanced facilities"),
      t("சிமெண்ட், கம்பி, செங்கல் உள்ளிட்ட கட்டுமானப் பொருட்களின் விலை குறைப்பு", "Reduction in cement, steel, brick & construction material prices"),
      t("'விலை கட்டுப்பாட்டு நிதியம்' மூலம் அத்தியாவசியப் பொருட்களின் விலை கட்டுப்பாடு", "'Price Control Fund' for essential commodity price control"),
      t("நகரங்களில் நியாய விலை கூட்டுறவு அங்காடிகள் திறப்பு", "Fair price cooperative stores in cities"),
    ]},
    { icon: Heart, name: t("சமூக நலன்", "Social Welfare"), count: 2, promises: [
      t("மாவட்டன் தோறும் முதியோர் இல்லங்கள் அமைக்கப்படும்", "Old age homes in every district"),
      t("திருநங்கைகளுக்கு ஓய்வூதியத் திட்டம் மற்றும் சுய தொழில் கடன்", "Pension scheme & self-employment loans for transgender persons"),
    ]},
    { icon: Accessibility, name: t("மாற்றுத் திறனாளிகள் நலன்", "Differently-Abled Welfare"), count: 5, promises: [
      t("கடன் தொகை ரூ. 2 லட்சமாக உயர்வு (50% மானியத்துடன்)", "Loan amount raised to ₹2 lakh (50% subsidy)"),
      t("அறநிலையத் துறை கடைகளில் 5% இடஒதுக்கீடு", "5% reservation in HR&CE shops"),
      t("பார்வையற்றோருக்கான பராமரிப்பு உதவித்தொகை உயர்வு", "Caretaker allowance increase for visually impaired"),
      t("குறைந்த பார்வை உடையோருக்கும் மாற்றுத் திறனாளி அடையாள அட்டை, சலுகைகள்", "Disability ID & benefits for low-vision persons"),
      t("ஆட்டிசம் அறிவுசார் வளர்ச்சிக் குறைபாடுடைய குழந்தைகளுக்காக சிறப்புப் பள்ளிகள்", "Special schools for children with autism & intellectual disabilities"),
    ]},
    { icon: Users, name: t("ஆதிதிராவிடர் நலன்", "Adi Dravidar Welfare"), count: 6, promises: [
      t("தாட்கோ மூலம் வழங்கப்பட்ட கடன்கள் தள்ளுபடி", "TAHDCO loan waiver"),
      t("இலவச வீட்டுமனை", "Free house plots"),
      t("கல்வி உதவி விரிவாக்கம்", "Education aid expansion"),
      t("சுயதொழில் கடன் உதவி", "Self-employment loan aid"),
      t("சமூக பாகுபாடு ஒழிப்பு", "Social discrimination elimination"),
      t("இட ஒதுக்கீடு பாதுகாப்பு", "Reservation protection"),
    ]},
    { icon: Clock, name: t("முதியோர் நலன்", "Senior Citizens Welfare"), count: 5, promises: [
      t("ஓய்வூதியம் ரூ. 2,000 ஆக உயர்வு", "Pension raised to ₹2,000"),
      t("முதியோர் இல்லங்கள் மேம்பாடு", "Old age home improvement"),
      t("இலவச மருத்துவம்", "Free medical care"),
      t("போக்குவரத்தில் சலுகை", "Transport concessions"),
      t("முதியோர் பராமரிப்பு மையங்கள்", "Elder care centers"),
    ]},
    { icon: Home, name: t("வீட்டு வசதி", "Housing"), count: 5, promises: [
      t("'அம்மா இல்லம்' திட்டம்", "'Amma Illam' scheme"),
      t("குடிசை மாற்று வீடு", "Slum replacement housing"),
      t("வீட்டுக் கடன் வட்டி மானியம்", "Home loan interest subsidy"),
      t("நகர்ப்புற குடியிருப்பு திட்டம்", "Urban housing scheme"),
      t("பட்டா வழங்கல் விரைவாக்கம்", "Patta distribution speed-up"),
    ]},
    { icon: Briefcase, name: t("அரசு ஊழியர் - ஆசிரியர் நலன்", "Govt Employees & Teachers"), count: 10, promises: [
      t("கோரிக்கைகளைப் பரிசீலித்து ஓய்வூதியத் திட்டம் சீரமைக்கப்படும்", "Pension scheme reviewed & restructured based on demands"),
      t("ஒப்பந்த அலுவலக உதவியாளர்களுக்கான தொகுப்பு ஊதியம் உயர்வு", "Consolidated pay increase for contract office assistants"),
      t("குடிமைப் பணியாளர்கள் கூட்டு மன்றக் கூட்டம் ஆண்டுக்கு 2 முறை நடத்தப்படும்", "Civil servants joint council meeting twice a year"),
      t("8-வது மாநில ஊதியக் குழு அமைக்கப்பட்டு ஊதிய உயர்வு", "8th State Pay Commission & salary hike"),
      t("சத்துணவு, 108 ஆம்புலன்ஸ், அங்கன்வாடி பணியாளர்களுக்கு அரசு வேலையில் முன்னுரிமை", "Priority in govt jobs for noon meal, 108, anganwadi staff"),
      t("சத்துணவு, அங்கன்வாடி, ரேஷன் கடை ஊழியர்களுக்கு புதிய சிறப்பு ஓய்வூதியம்", "Special pension for noon meal, anganwadi, ration shop workers"),
      t("சத்துணவு ஊழியர்கள், அங்கன்வாடி ஊழியர்களுக்குப் பணி பாதுகாப்பு", "Job security for noon meal & anganwadi workers"),
      t("ஊராட்சி செயலாளர்கள் மற்றும் கிராம உதவியாளர்களுக்குப் பணி பாதுகாப்பு", "Job security for panchayat secretaries & village assistants"),
      t("தூய்மைப் பணியாளர்களுக்குப் பணி பாதுகாப்பு மற்றும் ஊதிய உயர்வு", "Job security & pay hike for sanitation workers"),
      t("ஊரக, நகர்ப்புற வாழ்வாதார இயக்க பணியாளர்களுக்கு காப்பீட்டுத் திட்டம்", "Insurance for rural & urban livelihood mission workers"),
    ]},
    { icon: Siren, name: t("காவல் துறை", "Police"), count: 10, promises: [
      t("காவலர்களுக்கு சுழற்சி முறையில் வாரம் ஒருநாள் விடுப்பு", "Rotational weekly off for police constables"),
      t("சலவைப் படி ரூ. 1,000 ஆக உயர்வு", "Washing allowance raised to ₹1,000"),
      t("மற்ற மாவட்ட காவலர்களுக்கும் நாளொன்றுக்கு ரூ. 200 உணவுப்படி", "₹200/day food allowance for all district police"),
      t("பெருநகரங்களில் காவலர் நல மருத்துவமனை", "Police welfare hospitals in major cities"),
      t("கஞ்சா மற்றும் போதைப் பொருட்களை ஒழிக்க 'சிறப்பு அதிரடிப் படை'", "Special task force to eradicate drugs"),
      t("காவலர் குடியிருப்புகளில் மருத்துவ உதவி மையம்", "Medical aid centers in police quarters"),
      t("முழு செலவையும் ஏற்கும் சிறப்பு காப்பீட்டுத் திட்டம்", "Special insurance covering full expenses"),
      t("காவலர் பொதுமக்கள் அமைப்பு (Police Public Association) உருவாக்கம்", "Police Public Association formation"),
      t("சீருடைப்படி ரூ. 6,000 ஆக உயர்வு", "Uniform allowance raised to ₹6,000"),
      t("ஊர்க் காவல் படையினருக்கு வேலை நாட்கள் அதிகரிப்பு", "Increased working days for village police"),
    ]},
    { icon: Newspaper, name: t("பத்திரிகையாளர் / ஊடகவியலாளர் நலன்", "Journalists / Media Welfare"), count: 5, promises: [
      t("உள்ளூர் பத்திரிகையாளர்கள், இணையதள நிருபர்களுக்கு அங்கீகார அட்டை, காப்பீடு, ஓய்வூதியம்", "ID card, insurance, pension for local & online journalists"),
      t("பத்திரிகையாளர்களுக்கு வீடு கட்ட ரூ. 10 லட்சம் வரை வட்டியில்லா கடன்", "Up to ₹10 lakh interest-free home loan for journalists"),
      t("பத்திரிகையாளர் ஓய்வூதியத் திட்டத்தில் வருமான உச்சவரம்பு நீக்கம்", "Income ceiling removed from journalist pension scheme"),
      t("முக்கிய நகரங்களில் குடியிருப்பு மனைகள்", "Residential plots in major cities"),
      t("காட்சி ஊடகவியலாளர்களுக்கும் ஓய்வூதியம்", "Pension for visual media journalists too"),
    ]},
    { icon: Shirt, name: t("ஜவுளித் தொழில் மற்றும் நெசவாளர் நலன்", "Textile & Handloom Welfare"), count: 10, promises: [
      t("65 வயதுக்கு மேற்பட்ட நெசவாளர்களுக்கு ஓய்வூதியம் ரூ. 2,500 ஆக உயர்வு", "Weaver pension raised to ₹2,500 for 65+ age"),
      t("காப்பீட்டு மரண உதவித்தொகை ரூ. 3 லட்சமாக உயர்வு", "Insurance death benefit raised to ₹3 lakh"),
      t("கோ-ஆப்டெக்ஸ் மூலம் கொள்முதல் அதிகரிப்பு", "Increased procurement through Co-optex"),
      t("பஞ்சு விலை உயர்வைக் கட்டுப்படுத்த 'தமிழ்நாடு பஞ்சு கொள்முதல் கழகம்'", "TN Cotton Procurement Corporation to control cotton prices"),
      t("இந்திய பருத்திக் கழகம் (CCI) மூலம் குறைந்த விலைக்கு நூல் விநியோகம்", "CCI-based low-cost yarn distribution"),
      t("விலையில்லா வேட்டி-சேலைகளை தமிழ்நாட்டிலேயே உற்பத்தி", "Free dhoti-saree manufactured in Tamil Nadu itself"),
      t("நெசவுத் தொழிலாளர் காப்பீட்டுப் பிரீமியத்தை அரசே ஏற்கும்", "Govt to bear weaver insurance premium"),
      t("ஜவுளித் துறை விரிவுபடுத்துதல்", "Textile sector expansion"),
      t("நெசவுக் கூடத்தோடு சேர்ந்த பசுமை வீடுகள்", "Green houses attached to weaving centers"),
      t("கைத்தறி சேலை மதிப்பீட்டில் ரிவார்டு", "Reward for handloom saree valuation"),
    ]},
    { icon: MoreHorizontal, name: t("பொது / இதர வாக்குறுதிகள்", "General / Other Promises"), count: 19, promises: [
      t("உலகத் தரத்தில் அரசு விலங்குகள் காப்பகம் மற்றும் மருத்துவமனை", "World-class government zoo & animal hospital"),
      t("தெரு நாய்களின் இனப் பெருக்கத்தைக் கட்டுப்படுத்த கருத்தடைத் திட்டம்", "Sterilization program to control stray dog population"),
      t("கொத்தடிமை தொழில் முறை முற்றிலும் ஒழிப்பு", "Complete eradication of bonded labour"),
      t("கிறிஸ்தவர்களின் ஜெருசலேம் பயண சலுகைத் தொகை உயர்வு", "Jerusalem travel subsidy increase for Christians"),
      t("இஸ்லாமியர்களின் ஹஜ் மற்றும் உம்ரா பயணத்திற்கான மானியம் உயர்வு", "Hajj & Umrah travel subsidy increase for Muslims"),
      t("கிறிஸ்தவ கல்லறைத் தோட்டம், இஸ்லாமிய கப்ரிஸ்தான் அமைக்க இடவசதி", "Land provision for Christian cemeteries & Muslim burial grounds"),
      t("கச்சத் தீவை மீட்டெடுக்க உறுதியான நடவடிக்கை", "Determined action to reclaim Katchatheevu"),
      t("பூசாரிகள் குடும்பநல நிதி மற்றும் ஓய்வூதியம் உயர்வு", "Priest family welfare fund & pension increase"),
      t("பம்பை ஆட்டம், கரகாட்டம் போன்ற பாரம்பரிய கலைகள் ஊக்கம்", "Promotion of traditional arts like Bambai & Karakattam"),
      t("மண்டலம் தோறும் உலகத் தர விளையாட்டு அரங்கம்; விலையில்லா உபகரணங்கள்", "World-class sports arenas per zone; free equipment"),
      t("உச்சநீதிமன்ற கிளை சென்னையில் அமைக்க வலியுறுத்தல்", "Demand Supreme Court bench in Chennai"),
      t("இலங்கைத் தமிழ் அகதிகளுக்கு 'இரட்டைக் குடியுரிமை' (Dual Citizenship)", "Dual citizenship for Sri Lankan Tamil refugees"),
      t("கயிலை மானசரோவர், முக்திநாத் உள்ளிட்ட ஆன்மீக பயணச் சலுகை உயர்வு", "Kailash Mansarovar & Muktinath pilgrimage subsidy increase"),
      t("திருக்கோயில் அன்னதான திட்டம் விரிவுபடுத்தப்படும்", "Temple free food scheme expansion"),
      t("சாதிவாரி கணக்கெடுப்பு பணியினை விரைந்து செய்திட வலியுறுத்தல்", "Demand caste census to be completed soon"),
      t("NLC நிலம் வழங்கியவர்களுக்கு மறுவாழ்வு சிறப்புக் குழு", "Special rehabilitation committee for NLC land donors"),
      t("EPS-95 குறைந்த ஓய்வூதியம் பெறுபவர்களின் ஓய்வூதிய உயர்வு குறித்து ஆய்வு", "Study on pension increase for EPS-95 minimum pensioners"),
      t("முன்னாள் படைவீரர் பிள்ளைகளுக்கு கலை/அறிவியல் பட்டப் படிப்பில் 1% இடஒதுக்கீடு", "1% reservation in arts/science degrees for ex-servicemen's children"),
      t("இராணுவத்தில் உயிர் நீத்த மற்றும் ஊனமுற்ற படைவீரர்களின் குடும்பத்தினருக்கு கருணைப் பணி", "Compassionate service for families of martyred & disabled soldiers"),
    ]},
  ];

  return (
    <section id="categories" className="py-20">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold mb-3">
            {t("31 துறைகள்", "31 Sectors")}
          </span>
          <h2 className="text-2xl md:text-3xl font-black text-foreground">
            {t("துறைவாரியான", "Sector-wise")}{" "}
            <span className="text-primary">{t("தேர்தல் வாக்குறுதிகள்", "Election Promises")}</span>
          </h2>
        </motion.div>

        <div className="max-w-4xl mx-auto space-y-2">
          {categories.map((cat, i) => {
            const isOpen = open === i;
            const Icon = cat.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.02 }}
                className="border border-border rounded-xl overflow-hidden bg-background hover:shadow-md transition-shadow"
              >
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="w-full flex items-center gap-3 p-4 text-left hover:bg-muted/50 transition-colors"
                >
                  <div className="shrink-0 w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                    <Icon size={18} />
                  </div>
                  <span className="flex-1 font-semibold text-sm text-foreground">{cat.name}</span>
                  <span className="text-xs font-bold text-primary bg-primary/10 px-2 py-0.5 rounded-full">{cat.count}</span>
                  <ChevronDown
                    size={18}
                    className={`text-muted-foreground transition-transform ${isOpen ? "rotate-180" : ""}`}
                  />
                </button>
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25 }}
                      className="overflow-hidden"
                    >
                      <div className="px-4 pb-4 grid gap-2">
                        {cat.promises.map((p, j) => (
                          <div key={j} className="flex items-start gap-3 p-3 rounded-lg bg-surface">
                            <span className="shrink-0 w-6 h-6 rounded-full bg-primary/10 text-primary text-xs font-bold flex items-center justify-center mt-0.5">
                              {j + 1}
                            </span>
                            <span className="text-sm text-foreground/90">{p}</span>
                          </div>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default CategoryPromises;
