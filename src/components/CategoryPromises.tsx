import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Landmark, Settings, Wheat, Droplets, PawPrint, Fish, GraduationCap, Stethoscope, BookOpen, Baby, Shield, Factory, Wrench, Leaf, HardHat, TreePine, Zap, Building2, Palmtree, UserCheck, TrendingDown, Heart, Accessibility, Users, Clock, Home, Briefcase, Siren, Newspaper, Shirt, MoreHorizontal } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const CategoryPromises = () => {
  const [open, setOpen] = useState<number | null>(null);
  const { t } = useLanguage();

  const categories = [
    { icon: Landmark, name: t("மத்திய, மாநில கூட்டாட்சி முறை", "Centre-State Federalism"), count: 8, promises: [
      t("உண்மையான கூட்டாட்சி அரசியல் நிலைநாட்டப்படும்", "True federal governance will be established"),
      t("மாநில உரிமைகள் பாதுகாக்கப்படும்", "State rights will be protected"),
      t("மத்திய அரசின் ஆதிக்கம் தடுக்கப்படும்", "Central government dominance will be checked"),
      t("GST-யில் மாநிலங்களுக்கு அதிக பங்கு", "Greater share for states in GST"),
      t("NEET தேர்வு ரத்து செய்யப்படும்", "NEET exam will be cancelled"),
      t("மாநில சுயாட்சி வலுப்படுத்தப்படும்", "State autonomy will be strengthened"),
      t("மத்திய நிதி ஆணையத்தில் சீர்திருத்தம்", "Finance Commission reforms"),
      t("மாநில பட்டியலில் கல்வி மற்றும் சுகாதாரம்", "Education & health under state list"),
    ]},
    { icon: Settings, name: t("பொது நிர்வாகம்", "Public Administration"), count: 10, promises: [
      t("ஊழல் இல்லாத நிர்வாகம்", "Corruption-free administration"),
      t("அரசு அலுவலகங்களில் குறைதீர்ப்பு நாள்", "Grievance redressal days in govt offices"),
      t("மின்னணு ஆளுமை விரிவாக்கம்", "E-governance expansion"),
      t("அனைத்து சேவைகளும் ஆன்லைன் மூலம்", "All services online"),
      t("ஊழல் எதிர்ப்பு ஆணையம் வலுப்படுத்தப்படும்", "Anti-corruption commission strengthening"),
      t("அரசு ஊழியர் நியமனம் விரைவுபடுத்தப்படும்", "Faster government recruitment"),
      t("வெளிப்படையான நிர்வாக முறை", "Transparent governance"),
      t("மக்கள் குறை தீர்க்கும் செயலி", "Public grievance app"),
      t("தாலுகா அலுவலகங்களில் நவீனமயமாக்கல்", "Taluk office modernization"),
      t("அரசு திட்ட பலன்கள் நேரடியாக வங்கி கணக்கில்", "Direct bank transfer of govt benefits"),
    ]},
    { icon: Wheat, name: t("விவசாயம்", "Agriculture"), count: 15, promises: [
      t("விவசாயிகளுக்கு இலவச மின்சாரம் தொடரும்", "Free electricity for farmers continues"),
      t("பயிர்க் காப்பீட்டு திட்டம் விரிவாக்கம்", "Crop insurance expansion"),
      t("விவசாயக் கடன் தள்ளுபடி", "Farm loan waiver"),
      t("குறைந்தபட்ச ஆதரவு விலை உறுதி", "MSP guarantee"),
      t("இயற்கை விவசாயத்திற்கு ஊக்கத்தொகை", "Organic farming incentives"),
      t("நவீன விவசாய கருவிகள் மானியம்", "Modern farm equipment subsidy"),
      t("விவசாய சந்தைகள் நவீனமயமாக்கல்", "Agricultural market modernization"),
      t("நிலத்தடி நீர் மேலாண்மை", "Groundwater management"),
      t("பூச்சிக்கொல்லி மானியம்", "Pesticide subsidy"),
      t("சிறு விவசாயிகளுக்கு சிறப்பு நிதி", "Special fund for small farmers"),
      t("விவசாய பல்கலைக்கழக விரிவாக்கம்", "Agricultural university expansion"),
      t("பால் கொள்முதல் விலை உயர்வு", "Milk procurement price increase"),
      t("தோட்டக்கலை விரிவாக்கம்", "Horticulture expansion"),
      t("குளிர்பதன கிடங்குகள் அமைப்பு", "Cold storage facilities"),
      t("விவசாய உற்பத்தி ஏற்றுமதி ஊக்குவிப்பு", "Agricultural export promotion"),
    ]},
    { icon: Droplets, name: t("நீர் வளம்", "Water Resources"), count: 8, promises: [
      t("காவிரி நீர் உரிமை பாதுகாப்பு", "Cauvery water rights protection"),
      t("புதிய நீர்த்தேக்கங்கள் கட்டுமானம்", "New reservoir construction"),
      t("கிராமங்களுக்கு குடிநீர் இணைப்பு", "Drinking water connection for villages"),
      t("நீர் மறுசுழற்சி திட்டங்கள்", "Water recycling projects"),
      t("மழைநீர் சேகரிப்பு கட்டாயமாக்கல்", "Mandatory rainwater harvesting"),
      t("ஆற்று நீர் மேலாண்மை", "River water management"),
      t("கடல் நீர் உப்பு நீக்கும் ஆலை", "Seawater desalination plant"),
      t("நகரங்களுக்கு 24 மணி நேர குடிநீர்", "24-hour drinking water for cities"),
    ]},
    { icon: PawPrint, name: t("கால்நடை வளம்", "Animal Husbandry"), count: 6, promises: [
      t("கால்நடை மருத்துவமனை மேம்பாடு", "Veterinary hospital improvement"),
      t("பால் உற்பத்தி ஊக்குவிப்பு", "Dairy production promotion"),
      t("கால்நடை காப்பீடு திட்டம்", "Cattle insurance scheme"),
      t("தீவன மானியம்", "Fodder subsidy"),
      t("செயற்கை கருவூட்டல் விரிவாக்கம்", "Artificial insemination expansion"),
      t("கோழி வளர்ப்பு ஊக்குவிப்பு", "Poultry farming promotion"),
    ]},
    { icon: Fish, name: t("மீனவர் நலன்", "Fishermen Welfare"), count: 8, promises: [
      t("தடைக்கால நிவாரணம் ரூ. 12,000", "Ban period relief ₹12,000"),
      t("புதிய படகுகள் மற்றும் வலைகள் மானியம்", "Boats & nets subsidy"),
      t("மீனவர் வீட்டுத் திட்டம்", "Fishermen housing scheme"),
      t("கடல் பாதுகாப்பு வலுப்படுத்தல்", "Maritime security strengthening"),
      t("இலங்கை சிறை மீனவர்கள் விடுவிப்பு", "Release of fishermen from Sri Lankan jails"),
      t("மீன் பதப்படுத்தும் தொழிற்சாலைகள்", "Fish processing plants"),
      t("மீனவ கிராமங்களில் உட்கட்டமைப்பு", "Infrastructure in fishing villages"),
      t("மீனவர் குழந்தைகளுக்கு கல்வி உதவி", "Education aid for fishermen's children"),
    ]},
    { icon: GraduationCap, name: t("கல்வி", "Education"), count: 12, promises: [
      t("NEET ரத்து", "NEET cancellation"),
      t("கல்விக் கடன் தள்ளுபடி", "Education loan waiver"),
      t("அரசு பள்ளிகள் மேம்பாடு", "Government school improvement"),
      t("ஆசிரியர் காலிப்பணியிடங்கள் நிரப்பப்படும்", "Teacher vacancies will be filled"),
      t("புதிய அரசு கல்லூரிகள்", "New government colleges"),
      t("ஸ்மார்ட் வகுப்பறைகள்", "Smart classrooms"),
      t("மாணவர்களுக்கு இலவச லேப்டாப்", "Free laptops for students"),
      t("உயர்கல்வி மானியம்", "Higher education subsidy"),
      t("ஆராய்ச்சி நிதி அதிகரிப்பு", "Research funding increase"),
      t("தமிழ்வழிக் கல்வி ஊக்குவிப்பு", "Tamil medium education promotion"),
      t("தொழிற்கல்வி விரிவாக்கம்", "Vocational education expansion"),
      t("மாணவர் விடுதிகள் மேம்பாடு", "Student hostel improvement"),
    ]},
    { icon: Stethoscope, name: t("மருத்துவம் மற்றும் சுகாதாரம்", "Healthcare"), count: 12, promises: [
      t("அனைவருக்கும் இலவச சுகாதாரம்", "Free healthcare for all"),
      t("அரசு மருத்துவமனைகள் மேம்பாடு", "Government hospital improvement"),
      t("ஒவ்வொரு மாவட்டத்திலும் சூப்பர் ஸ்பெஷாலிட்டி மருத்துவமனை", "Super specialty hospital in every district"),
      t("மருத்துவ காப்பீடு விரிவாக்கம்", "Health insurance expansion"),
      t("ஆம்புலன்ஸ் சேவை மேம்பாடு", "Ambulance service improvement"),
      t("மருந்துகள் இலவசம்", "Free medicines"),
      t("ஊட்டச்சத்து திட்டம் விரிவாக்கம்", "Nutrition program expansion"),
      t("மனநல சிகிச்சை மையங்கள்", "Mental health treatment centers"),
      t("புற்றுநோய் சிகிச்சை இலவசம்", "Free cancer treatment"),
      t("கிராம சுகாதார நிலையங்கள் மேம்பாடு", "Village health center improvement"),
      t("AYUSH மருத்துவம் ஊக்குவிப்பு", "AYUSH medicine promotion"),
      t("அரசு மருத்துவர்கள் எண்ணிக்கை அதிகரிப்பு", "Increase in government doctors"),
    ]},
    { icon: BookOpen, name: t("தமிழ் மொழி மற்றும் பண்பாடு", "Tamil Language & Culture"), count: 6, promises: [
      t("செம்மொழி தமிழ் மேம்பாடு", "Classical Tamil promotion"),
      t("தமிழ் வளர்ச்சி நிதி அதிகரிப்பு", "Tamil development fund increase"),
      t("உலகத் தமிழ் மாநாடு", "World Tamil Conference"),
      t("தமிழ் இலக்கிய விழா", "Tamil literary festival"),
      t("பண்பாட்டு மையங்கள் அமைப்பு", "Cultural centers establishment"),
      t("தமிழ் திரைப்பட தொழில் ஊக்குவிப்பு", "Tamil film industry promotion"),
    ]},
    { icon: Baby, name: t("மகளிர் நலன் மற்றும் குழந்தைகள் பாதுகாப்பு", "Women & Child Welfare"), count: 10, promises: [
      t("மகளிர் சுயஉதவிக் குழுக்களுக்கு கடன் ஊக்குவிப்பு", "SHG loan promotion"),
      t("மகளிருக்கு இருசக்கர வாகன மானியம் ரூ. 25,000", "₹25,000 two-wheeler subsidy for women"),
      t("கர்ப்பிணிகளுக்கு ஊட்டச்சத்து உதவி", "Nutrition aid for pregnant women"),
      t("குழந்தைகள் பாதுகாப்பு ஆணையம் வலுப்படுத்தல்", "Child protection commission strengthening"),
      t("அங்கன்வாடி மேம்பாடு", "Anganwadi improvement"),
      t("பெண் கல்வி ஊக்குவிப்பு", "Girl education promotion"),
      t("பெண்களுக்கு சொத்து உரிமை வலுப்படுத்தல்", "Property rights for women"),
      t("கைவினைஞர் பெண்களுக்கு சிறப்பு நிதி", "Special fund for artisan women"),
      t("குழந்தை தொழிலாளர் ஒழிப்பு", "Child labor elimination"),
      t("பெண்கள் தொழில்முனைவோர் ஊக்குவிப்பு", "Women entrepreneurship promotion"),
    ]},
    { icon: Shield, name: t("பெண்கள் பாதுகாப்பு", "Women's Safety"), count: 6, promises: [
      t("பெண்களுக்கு 24/7 பாதுகாப்பு உதவி எண்", "24/7 women's safety helpline"),
      t("CCTV கண்காணிப்பு விரிவாக்கம்", "CCTV surveillance expansion"),
      t("மகளிர் காவல் நிலையங்கள் அதிகரிப்பு", "More women police stations"),
      t("குற்ற வழக்குகள் விரைவு விசாரணை", "Fast-track criminal cases"),
      t("சைபர் குற்ற தடுப்பு பிரிவு", "Cyber crime prevention unit"),
      t("பாதுகாப்பான போக்குவரத்து", "Safe transportation"),
    ]},
    { icon: Factory, name: t("தொழில் வளம்", "Industrial Growth"), count: 8, promises: [
      t("புதிய தொழிற்பேட்டைகள் அமைப்பு", "New industrial estates"),
      t("வெளிநாட்டு முதலீடு ஊக்குவிப்பு", "Foreign investment promotion"),
      t("தொழிற்சாலை அனுமதி எளிமையாக்கம்", "Factory approval simplification"),
      t("IT துறை விரிவாக்கம்", "IT sector expansion"),
      t("ஏற்றுமதி ஊக்குவிப்பு", "Export promotion"),
      t("தொழில் நிதி கடன் குறைந்த வட்டியில்", "Low-interest industrial loans"),
      t("திறன் மேம்பாட்டு மையங்கள்", "Skill development centers"),
      t("ஸ்டார்ட்அப் ஊக்குவிப்பு", "Startup promotion"),
    ]},
    { icon: Wrench, name: t("சிறு, குறு மற்றும் நடுத்தர தொழில்", "MSME Development"), count: 6, promises: [
      t("MSME கடன் வட்டி மானியம்", "MSME loan interest subsidy"),
      t("தொழில் பயிற்சி மையங்கள்", "Industrial training centers"),
      t("சந்தை வாய்ப்பு ஊக்குவிப்பு", "Market opportunity promotion"),
      t("தொழில்நுட்ப ஆதரவு மையங்கள்", "Technology support centers"),
      t("பெண் தொழில்முனைவோர் நிதி", "Women entrepreneur fund"),
      t("ஏற்றுமதி வழிகாட்டல்", "Export guidance"),
    ]},
    { icon: Leaf, name: t("சுற்றுச்சூழல்", "Environment"), count: 6, promises: [
      t("மரம் நடும் திட்டம் விரிவாக்கம்", "Tree planting program expansion"),
      t("மாசு கட்டுப்பாடு கடுமையாக்கம்", "Stricter pollution control"),
      t("பிளாஸ்டிக் தடை அமலாக்கம்", "Plastic ban enforcement"),
      t("பசுமை ஆற்றல் ஊக்குவிப்பு", "Green energy promotion"),
      t("கழிவு மேலாண்மை நவீனமயமாக்கல்", "Modern waste management"),
      t("சதுப்பு நிலங்கள் பாதுகாப்பு", "Wetland protection"),
    ]},
    { icon: HardHat, name: t("தொழிலாளர் நலன்", "Labour Welfare"), count: 8, promises: [
      t("குறைந்தபட்ச ஊதியம் உயர்வு", "Minimum wage increase"),
      t("கட்டுமானத் தொழிலாளர் நல வாரியம் மேம்பாடு", "Construction workers welfare board improvement"),
      t("ESI மருத்துவ சேவை மேம்பாடு", "ESI medical service improvement"),
      t("தொழிலாளர் விடுதிகள்", "Labour hostels"),
      t("PF பலன்கள் விரிவாக்கம்", "PF benefits expansion"),
      t("அமைப்புசாரா தொழிலாளர் காப்பீடு", "Unorganized worker insurance"),
      t("தொழிலாளர் பாதுகாப்பு சட்டம் வலுப்படுத்தல்", "Labour safety law strengthening"),
      t("புலம்பெயர் தொழிலாளர் நல நடவடிக்கைகள்", "Migrant worker welfare measures"),
    ]},
    { icon: TreePine, name: t("வன வளம்", "Forest Resources"), count: 5, promises: [
      t("வனப்பகுதி விரிவாக்கம்", "Forest area expansion"),
      t("வனவிலங்கு பாதுகாப்பு", "Wildlife protection"),
      t("மலைவாழ் மக்கள் நலன்", "Hill tribe welfare"),
      t("சுற்றுலா வன பாதைகள்", "Tourist forest trails"),
      t("மூலிகை வளர்ப்பு ஊக்குவிப்பு", "Herbal farming promotion"),
    ]},
    { icon: Zap, name: t("மின்சாரத் துறை", "Electricity Sector"), count: 8, promises: [
      t("24 மணி நேர தடையில்லா மின்சாரம்", "24-hour uninterrupted power"),
      t("சோலார் ஆற்றல் ஊக்குவிப்பு", "Solar energy promotion"),
      t("விவசாயிகளுக்கு இலவச மின்சாரம்", "Free electricity for farmers"),
      t("புதிய மின் உற்பத்தி நிலையங்கள்", "New power plants"),
      t("மின் கட்டண சீரமைப்பு", "Electricity tariff restructuring"),
      t("காற்றாலை மின் உற்பத்தி விரிவாக்கம்", "Wind power expansion"),
      t("மின்வாகன ஊக்குவிப்பு", "Electric vehicle promotion"),
      t("ஸ்மார்ட் கிரிட் அமைப்பு", "Smart grid system"),
    ]},
    { icon: Building2, name: t("உட்கட்டமைப்பு", "Infrastructure"), count: 8, promises: [
      t("சாலை மேம்பாடு", "Road improvement"),
      t("புதிய பாலங்கள் கட்டுமானம்", "New bridge construction"),
      t("மெட்ரோ ரயில் விரிவாக்கம்", "Metro rail expansion"),
      t("நகர திட்டமிடல் நவீனமயமாக்கல்", "Urban planning modernization"),
      t("குடிநீர் உள்கட்டமைப்பு", "Drinking water infrastructure"),
      t("வடிகால் அமைப்பு மேம்பாடு", "Drainage system improvement"),
      t("ஸ்மார்ட் சிட்டி திட்டம்", "Smart city project"),
      t("துறைமுகம் விரிவாக்கம்", "Port expansion"),
    ]},
    { icon: Palmtree, name: t("சுற்றுலா", "Tourism"), count: 5, promises: [
      t("சுற்றுலா தலங்கள் மேம்பாடு", "Tourist destination improvement"),
      t("கோயில் சுற்றுலா ஊக்குவிப்பு", "Temple tourism promotion"),
      t("மருத்துவ சுற்றுலா", "Medical tourism"),
      t("கலாசார சுற்றுலா", "Cultural tourism"),
      t("சாகச சுற்றுலா வளர்ச்சி", "Adventure tourism growth"),
    ]},
    { icon: UserCheck, name: t("இளைஞர் நலன், வேலைவாய்ப்பு, திறன் மேம்பாடு", "Youth, Employment & Skill Development"), count: 10, promises: [
      t("அரசு வேலைவாய்ப்பு 10 லட்சம் பேருக்கு", "10 lakh government jobs"),
      t("திறன் மேம்பாட்டு மையங்கள்", "Skill development centers"),
      t("ஸ்டார்ட்அப் நிதி", "Startup funding"),
      t("விளையாட்டு ஊக்குவிப்பு", "Sports promotion"),
      t("தொழிற் பயிற்சி நிலையங்கள்", "Industrial training institutes"),
      t("வேலைவாய்ப்பு முகாம்கள்", "Job fairs"),
      t("சுயதொழில் கடன்", "Self-employment loans"),
      t("இளைஞர் விருதுகள்", "Youth awards"),
      t("அரசு தேர்வு பயிற்சி இலவசம்", "Free government exam coaching"),
      t("வெளிநாட்டு வேலைவாய்ப்பு வழிகாட்டல்", "Foreign employment guidance"),
    ]},
    { icon: TrendingDown, name: t("விலைவாசி கட்டுப்பாடு", "Price Control"), count: 5, promises: [
      t("அத்தியாவசிய பொருட்கள் விலை கட்டுப்பாடு", "Essential goods price control"),
      t("அம்மா உணவகங்கள் விரிவாக்கம்", "Amma canteen expansion"),
      t("நியாய விலை கடைகள் மேம்பாடு", "Fair price shop improvement"),
      t("பெட்ரோல் / டீசல் வரி குறைப்பு", "Petrol/diesel tax reduction"),
      t("தட்டுப்பாடு தடுப்பு நடவடிக்கைகள்", "Shortage prevention measures"),
    ]},
    { icon: Heart, name: t("சமூக நலன்", "Social Welfare"), count: 8, promises: [
      t("ஒவ்வொரு குடும்பத்திற்கும் ரூ. 10,000", "₹10,000 for every family"),
      t("தைப்பொங்கல் தொகுப்பு + ரூ. 1,000", "Pongal hamper + ₹1,000"),
      t("இலவச கேஸ் / பருப்பு / எண்ணெய்", "Free gas / pulses / oil"),
      t("இலவச குளிர்சாதனப்பெட்டி", "Free refrigerator"),
      t("ஆண்டுக்கு 3 இலவச சிலிண்டர்கள்", "3 free cylinders per year"),
      t("மாதம் ரூ. 2,000 குடும்பத்தலைவிக்கு", "₹2,000/month for head woman"),
      t("இலவச பேருந்து பயணம்", "Free bus travel"),
      t("100 நாள் வேலை → 150 நாள்", "100 days work → 150 days"),
    ]},
    { icon: Accessibility, name: t("மாற்றுத் திறனாளிகள் நலன்", "Differently-abled Welfare"), count: 5, promises: [
      t("மாற்றுத்திறனாளிகள் உதவித்தொகை அதிகரிப்பு", "Increased disability aid"),
      t("அணுகல் வசதிகள் மேம்பாடு", "Accessibility improvement"),
      t("சிறப்புப் பள்ளிகள் மேம்பாடு", "Special school improvement"),
      t("வேலைவாய்ப்பு இட ஒதுக்கீடு", "Employment reservation"),
      t("இலவச உதவிக் கருவிகள்", "Free assistive devices"),
    ]},
    { icon: Users, name: t("ஆதிதிராவிடர் நலன்", "Adi Dravidar Welfare"), count: 6, promises: [
      t("SC/ST உதவித்தொகை அதிகரிப்பு", "SC/ST aid increase"),
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
    { icon: Briefcase, name: t("அரசு ஊழியர் - ஆசிரியர் நலன்", "Govt Employees & Teachers"), count: 6, promises: [
      t("ஊதிய உயர்வு", "Salary increase"),
      t("பழைய ஓய்வூதிய திட்டம் மீட்பு", "Old pension scheme restoration"),
      t("காலிப்பணியிடங்கள் நிரப்பப்படும்", "Filling vacant positions"),
      t("பணி நிலை மேம்பாடு", "Work condition improvement"),
      t("சுகாதார காப்பீடு மேம்பாடு", "Health insurance improvement"),
      t("பயிற்சி மற்றும் திறன் மேம்பாடு", "Training & skill development"),
    ]},
    { icon: Siren, name: t("காவல் துறை", "Police"), count: 5, promises: [
      t("காவல் துறை நவீனமயமாக்கல்", "Police modernization"),
      t("காவலர்கள் பணி நிலை மேம்பாடு", "Police work condition improvement"),
      t("சமூக காவல் திட்டம்", "Community policing scheme"),
      t("சைபர் குற்ற தடுப்பு", "Cyber crime prevention"),
      t("CCTV விரிவாக்கம்", "CCTV expansion"),
    ]},
    { icon: Newspaper, name: t("பத்திரிகையாளர் / ஊடகவியலாளர் நலன்", "Journalists / Media Welfare"), count: 4, promises: [
      t("ஊடகவியலாளர் நல வாரியம்", "Media welfare board"),
      t("காப்பீடு மற்றும் ஓய்வூதியம்", "Insurance & pension"),
      t("பத்திரிகை சுதந்திரம் பாதுகாப்பு", "Press freedom protection"),
      t("ஊடக தொழிலாளர் பாதுகாப்பு", "Media worker protection"),
    ]},
    { icon: Shirt, name: t("ஜவுளித் தொழில் மற்றும் நெசவாளர் நலன்", "Textile & Handloom Welfare"), count: 5, promises: [
      t("நெசவாளர் நல வாரியம் மேம்பாடு", "Weaver welfare board improvement"),
      t("கைத்தறி ஊக்குவிப்பு", "Handloom promotion"),
      t("நெசவு கூட்டுறவுகள் வலுப்படுத்தல்", "Weaving cooperatives strengthening"),
      t("நவீன தொழில்நுட்ப பயிற்சி", "Modern technology training"),
      t("ஏற்றுமதி ஊக்குவிப்பு", "Export promotion"),
    ]},
    { icon: MoreHorizontal, name: t("பொது / இதர வாக்குறுதிகள்", "General / Other Promises"), count: 6, promises: [
      t("அனைத்து சமூகத்தினருக்கும் சமநீதி", "Equal justice for all communities"),
      t("ஜனநாயக உரிமைகள் பாதுகாப்பு", "Democratic rights protection"),
      t("மதச்சார்பின்மை காக்கப்படும்", "Secularism will be upheld"),
      t("சமூக நல்லிணக்கம்", "Social harmony"),
      t("வெளிப்படையான ஆட்சி", "Transparent governance"),
      t("மக்கள் பங்கேற்பு அரசு", "Participatory governance"),
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
