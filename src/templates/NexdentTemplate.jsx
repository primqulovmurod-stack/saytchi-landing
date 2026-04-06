import React from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  CheckCircle2, 
  PhoneCall, 
  Stethoscope, 
  Sparkles, 
  Smile, 
  ShieldCheck, 
  Clock, 
  MapPin, 
  UserCheck, 
  Award,
  ChevronDown,
  ArrowRight,
  Hospital,
  Settings,
  Save,
  ChevronLeft,
  Users,
  Eye,
  EyeOff,
  Menu,
  X
} from 'lucide-react'
import { Button } from '../components/ui/button'

const ServiceCard = ({ icon: Icon, title, desc, price }) => (
  <motion.div whileHover={{ y: -5 }} className="bg-white p-6 lg:p-8 rounded-3xl border border-slate-100 shadow-sm hover:shadow-xl transition-all">
    <div className="w-12 h-12 lg:w-14 lg:h-14 bg-primary/5 rounded-2xl flex items-center justify-center text-primary mb-6"><Icon size={24} className="lg:size-[28px]" /></div>
    <h3 className="text-lg lg:text-xl font-bold text-slate-900 mb-2 font-['Outfit']">{title}</h3>
    <p className="text-sm lg:text-base text-slate-600 leading-relaxed mb-6 font-['Outfit'] font-normal">{desc}</p>
    <div className="pt-6 border-t border-slate-50 flex justify-between items-center font-['Outfit']"><span className="text-[10px] lg:text-sm font-bold text-slate-400 uppercase tracking-widest tracking-tighter">Narxi:</span><span className="text-primary font-black uppercase text-sm lg:text-lg italic tracking-tighter">{price}</span></div>
  </motion.div>
)

const ExpertCard = ({ name, role, experience }) => (
    <div className="bg-slate-50 p-6 rounded-3xl border border-slate-100 space-y-3 font-['Outfit']">
        <div className="w-full aspect-square bg-slate-200 rounded-2xl mb-4 overflow-hidden flex items-center justify-center text-slate-400"><UserCheck size={64} /></div>
        <h4 className="text-lg font-bold text-slate-900 font-['Outfit'] tracking-tight">{name}</h4>
        <p className="text-sm text-primary font-black uppercase font-['Outfit']">{role}</p>
        <p className="text-xs text-slate-400 font-bold italic font-['Outfit']">{experience} yillik tajriba</p>
    </div>
)

export default function NexdentTemplate({ onClose }) {
  const [content, setContent] = React.useState({
    visibility: { hero: true, services: true, experts: true, faq: true, contact: true },
    general: { name: "NexDent", phone: "+998 99 603 42 43", address: "NexDent klinikasi. Toshkent sh., Chilonzor tumani, Lutfiy ko'chasi, 24-uy" },
    hero: { tag: "Professional Stomatologiya", t1: "Sizga", tH: "Benuqson", t2: "Tabassum Kerakmi?", description: "NexDent klinikasida biz sizning tabassumingizga san'at asaridek yondashamiz. Eng yuqori texnologiyali materiallar.", cta: "Qabulga Yozilish" },
    stats: [ { label: "Tajriba", val: "15+" }, { label: "Tishlar", val: "100k" }, { label: "Sertifikat", val: "ISO" } ],
    services: [
        { title: "Tish Oqartirish", desc: "8 tonnagacha oqartirish imkonini beruvchi eng xavfsiz 'ZOOM' tizimi.", price: "800,000 UZS", icon: Sparkles },
        { title: "Implantatsiya", desc: "Yo'qotilgan tishlarni Shvetsariya implantlari bilan tiklash.", price: "2,500,000 UZS+", icon: ShieldCheck },
        { title: "Venerlar", desc: "Natijasi Gollivud yulduzlaridek bo'lgan keramik venerlar.", price: "1,200,000 UZS", icon: Smile },
        { title: "Kariesni Davolash", desc: "Og'riqsiz va tish rangiga mos plombalar bilan davolash.", price: "250,000 UZS", icon: Stethoscope },
        { title: "Boshlang'ich Ko'rik", desc: "Tishlar va milkning to'liq diagnostikasi.", price: "BEPUL", icon: CheckCircle2 },
        { title: "Breket Tizimlari", desc: "Tishlar qiyshiqligini tuzatish.", price: "3,000,000 UZS+", icon: PhoneCall }
    ],
    experts: [
        { name: "Dr. Anvar Aliev", role: "Bosh Stomatolog", exp: "20" },
        { name: "Dr. Malika Karimova", role: "Bolalar Stomatolog", exp: "12" },
        { name: "Dr. Jamshid Nazarov", role: "Ortodont", exp: "15" },
        { name: "Dr. Sevara Azizova", role: "Terapevt", exp: "8" }
    ],
    faq: [
        { q: "Tish oqartirish tish emaliga zarar yetkazadimi?", a: "Professional oqartirish muolajasi emalga zarar yetkazmaydi." },
        { q: "Implantat o'rnatish og'riqlimi?", a: "To'liq mahalliy anesteziya ostida o'tadi." }
    ],
    colors: { primary: "199 89% 48%" }
  });

  const [isSidebarOpen, setIsSidebarOpen] = React.useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

  return (
    <div className="fixed inset-0 z-[200] bg-white overflow-hidden flex flex-col lg:flex-row font-['Outfit'] select-none">
      <style>{`:root { --primary: ${content.colors.primary}; } .bg-primary { background-color: hsl(var(--primary)) !important; } .text-primary { color: hsl(var(--primary)) !important; } .border-primary { border-color: hsl(var(--primary)) !important; }`}</style>
      
      {/* AI EDITOR SIDEBAR (ADAPTIVE - V.4.1) */}
      <AnimatePresence>
        {isSidebarOpen && (
          <motion.div initial={{ x: -400 }} animate={{ x: 0 }} exit={{ x: -400 }} className="fixed lg:relative inset-y-0 left-0 w-full lg:w-[400px] bg-slate-900 text-white flex flex-col z-[500] shadow-2xl">
             <div className="p-6 lg:p-8 border-b border-white/5 flex items-center justify-between font-['Outfit'] uppercase italic"><div className="flex items-center gap-3"><div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center text-white shadow-xl shadow-primary/20"><Settings size={22}/></div>Editor <span className="text-primary text-[10px] font-black">V.4.1</span></div><button onClick={() => setIsSidebarOpen(false)} className="p-2 hover:bg-white/5 rounded-lg text-white/50 lg:hidden"><X size={28}/></button><button onClick={() => setIsSidebarOpen(false)} className="p-1 hover:bg-white/5 rounded-lg text-white/50 hidden lg:block"><ChevronLeft size={24}/></button></div>
             <div className="flex-1 overflow-y-auto p-6 lg:p-8 space-y-10 custom-scrollbar text-left">
                <div className="p-4 bg-white/5 rounded-2xl border border-white/5 space-y-3"><label className="text-[10px] font-black uppercase text-primary tracking-widest block">Visibility</label><div className="grid grid-cols-2 gap-2">{Object.keys(content.visibility).map(sec => <button key={sec} onClick={() => setContent({...content, visibility: {...content.visibility, [sec]: !content.visibility[sec]}})} className={`px-3 py-2 rounded-lg text-[10px] font-black uppercase transition-all flex justify-between items-center ${content.visibility[sec] ? 'bg-primary text-white shadow-lg' : 'bg-slate-800 text-white/30'}`}>{sec} {content.visibility[sec] ? <Eye size={12}/> : <EyeOff size={12}/>}</button>)}</div></div>
                <div className="space-y-6">
                   <div className="space-y-3"><label className="text-[10px] font-black uppercase text-primary tracking-widest">Main Title</label><input value={content.hero.tH} onChange={(e) => setContent({...content, hero:{...content.hero, tH: e.target.value}})} className="w-full bg-slate-800 border border-white/10 rounded-xl p-4 text-sm font-bold text-primary outline-none focus:border-primary" /><textarea value={content.hero.t2} onChange={(e) => setContent({...content, hero:{...content.hero, t2: e.target.value}})} className="w-full h-24 bg-slate-800 border border-white/10 rounded-xl p-4 text-sm font-bold text-white outline-none resize-none leading-relaxed" /></div>
                </div>
             </div>
             <div className="p-6 lg:p-8 border-t border-white/5"><Button onClick={onClose} className="w-full h-16 rounded-[1.5rem] bg-slate-800 hover:bg-slate-700 text-white font-black text-lg border-none outline-none font-['Outfit'] italic shadow-xl">SAQLASH</Button></div>
          </motion.div>
        )}
      </AnimatePresence>

      <button onClick={() => setIsSidebarOpen(true)} className="fixed left-4 lg:left-6 top-1/2 -translate-y-1/2 z-[300] w-12 h-12 lg:w-14 lg:h-14 bg-slate-900 text-white rounded-2xl flex items-center justify-center shadow-2xl hover:bg-primary transition-all pointer-events-auto border-none outline-none"><Settings size={28}/></button>

      {/* --- LIVE PREVIEW (RESPONSIVE MASTERPIECE - V.4.1) --- */}
      <div className="flex-1 h-full overflow-y-auto bg-white relative font-['Outfit'] overflow-x-hidden">
         <div className="w-full relative bg-white font-['Outfit'] text-slate-900 text-left">
            <div className="absolute top-0 left-0 w-full h-[600px] bg-gradient-to-b from-blue-50/50 to-transparent pointer-events-none -z-10" />

            {/* Navigation (Adaptive) */}
            <nav className="sticky top-0 w-full z-40 px-4 py-4 lg:px-12 flex justify-center backdrop-blur-xl bg-white/70 border-b border-slate-100 italic">
                <div className="w-full max-w-7xl flex justify-between items-center">
                  <div className="flex items-center gap-3 shrink-0"><div className="w-9 h-9 lg:w-11 lg:h-11 bg-primary rounded-xl flex items-center justify-center text-white font-black shadow-lg shadow-primary/30">ND</div><span className="text-lg lg:text-2xl font-black tracking-tighter text-primary uppercase">{content.general.name}</span></div>
                  <div className="hidden lg:flex gap-10 font-bold text-sm text-slate-700 uppercase tracking-tighter"><a href="#services" className="hover:text-primary transition-colors">Xizmatlar</a><a href="#experts" className="hover:text-primary transition-colors">Jamoa</a><a href="#contact" className="hover:text-primary transition-colors">Bog'lanish</a></div>
                  <div className="flex items-center gap-2"><Button size="sm" className="hidden sm:inline-flex rounded-full px-6 bg-primary text-white font-bold h-10 uppercase text-[10px] tracking-widest border-none lg:px-10 lg:h-12 lg:text-[11px]">Bog'lanish</Button><button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="lg:hidden p-2 text-slate-900"><Menu size={28}/></button></div>
                </div>
            </nav>

            <AnimatePresence>{isMobileMenuOpen && ( <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} className="lg:hidden fixed inset-0 z-50 bg-white p-6 flex flex-col space-y-6 items-center justify-center"><button onClick={() => setIsMobileMenuOpen(false)} className="absolute top-6 right-6 text-slate-900"><X size={32}/></button><a href="#services" onClick={() => setIsMobileMenuOpen(false)} className="text-3xl font-black uppercase text-slate-950 italic">Xizmatlar</a><a href="#experts" onClick={() => setIsMobileMenuOpen(false)} className="text-3xl font-black uppercase text-slate-950 italic">Jamoamiz</a><a href="#faq" onClick={() => setIsMobileMenuOpen(false)} className="text-3xl font-black uppercase text-slate-950 italic">Savollar</a><a href="#contact" onClick={() => setIsMobileMenuOpen(false)} className="text-3xl font-black uppercase text-slate-950 italic">Bog'lanishi</a><Button className="w-full h-16 rounded-2xl bg-primary text-white font-black text-xl border-none outline-none">BOG'LANISH</Button></motion.div> )}</AnimatePresence>

            {/* Hero (V.4.1 Optimized Mobile Layout) */}
            {content.visibility.hero && (
                <section className="relative pt-20 lg:pt-48 pb-12 lg:pb-32 px-6 lg:px-12 text-left">
                    <div className="max-w-7xl mx-auto grid lg:grid-cols-2 items-center gap-12 lg:gap-24">
                        <div className="space-y-8 lg:space-y-12">
                            <div className="inline-flex items-center gap-2 bg-primary/5 text-primary px-4 py-2 rounded-full text-[10px] lg:text-xs font-black border border-primary/10 tracking-widest uppercase font-['Outfit'] italic"><Award size={14} /> Professional Stomatologiya</div>
                            <h1 className="text-[44px] lg:text-[100px] font-black tracking-tight text-slate-950 leading-[1.1] lg:leading-[0.9] font-['Outfit'] uppercase">{content.hero.t1} <span className="text-primary italic block font-['Outfit']">{content.hero.tH}</span> {content.hero.t2}</h1>
                            <p className="text-lg lg:text-2xl text-slate-500 leading-relaxed max-w-xl font-medium font-['Outfit'] italic">{content.hero.description}</p>
                            <div className="flex flex-col sm:flex-row gap-4 pt-4 lg:pt-8"><Button size="lg" className="h-14 lg:h-20 lg:px-12 rounded-2xl lg:rounded-[2rem] text-lg lg:text-xl font-black bg-primary text-white shadow-2xl shadow-primary/20 border-none outline-none uppercase font-['Outfit'] active:scale-95 transition-all">{content.hero.cta}</Button><div className="flex items-center gap-4 px-6 lg:px-8 py-4 lg:py-5 bg-slate-50 border border-slate-100 rounded-2xl lg:rounded-[2.5rem] font-['Outfit']"><PhoneCall size={24} className="text-primary lg:size-[30px]" /><div className="flex flex-col text-left"><span className="text-[9px] lg:text-[11px] text-slate-400 font-black uppercase tracking-widest leading-none mb-1">Aloqa Uchun:</span><span className="text-base lg:text-2xl font-black text-slate-900 leading-none italic">{content.general.phone}</span></div></div></div>
                        </div>
                        <div className="hidden lg:block relative text-center"><div className="w-[500px] h-[500px] bg-primary/10 rounded-[4rem] rotate-12 border border-primary/20 absolute -z-10 translate-x-10 translate-y-10" /><div className="w-full bg-white rounded-[4rem] shadow-2xl border border-slate-100 p-16 space-y-10 hover:scale-[1.01] transition-transform duration-700 shadow-inner"><div className="w-32 h-32 bg-primary rounded-[3rem] shadow-xl shadow-primary/20 mx-auto flex items-center justify-center text-white"><Hospital size={72} /></div><h2 className="text-[44px] font-black text-slate-900 leading-none italic uppercase text-center">{content.general.name} Klinikasi</h2></div></div>
                    </div>
                </section>
            )}

            {/* Services (V.4.1 Grid) */}
            {content.visibility.services && (
                <section id="services" className="relative py-20 lg:py-48 px-6 lg:px-12 bg-slate-50/50">
                   <div className="max-w-7xl mx-auto space-y-12 lg:space-y-24">
                      <h2 className="text-4xl lg:text-[72px] font-black text-slate-950 uppercase leading-none tracking-tighter font-['Outfit'] italic">Muolajalar</h2>
                      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-10">{content.services.map((s, i) => <ServiceCard key={i} {...s} />)}</div>
                   </div>
                </section>
            )}

            {/* Contact (V.4.1 Layout) */}
            {content.visibility.contact && (
               <section id="contact" className="relative py-20 lg:py-48 px-6 lg:px-12 bg-white font-['Outfit'] shadow-inner">
                   <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 lg:gap-24 items-center">
                      <div className="space-y-8 lg:space-y-12 text-left">
                         <h2 className="text-4xl lg:text-[80px] font-black text-slate-950 leading-none uppercase tracking-tighter italic">Aloqa</h2>
                         <div className="space-y-6 lg:space-y-10">
                            <div className="flex items-start gap-10 group"><div className="w-14 h-14 lg:w-18 bg-primary text-white rounded-2xl lg:rounded-3xl flex items-center justify-center shrink-0 shadow-xl shadow-primary/30 group-hover:scale-110 transition-transform"><MapPin size={28} className="lg:size-[36px]" /></div><div className="text-left font-['Outfit']"><h5 className="text-xl lg:text-2xl font-black text-slate-900 uppercase italic">Manzilimiz</h5><p className="text-base lg:text-xl text-slate-500 font-medium mt-2 leading-relaxed">{content.general.address}</p></div></div>
                            <div className="p-6 lg:p-10 bg-slate-50 rounded-[2rem] lg:rounded-[3rem] border border-slate-100 flex items-center gap-6 lg:gap-10 border-l-[6px] lg:border-l-[8px] border-l-primary hover:shadow-xl transition-all shadow-inner"><div className="hidden sm:flex w-16 h-16 lg:w-20 bg-white rounded-2xl lg:rounded-3xl shadow-xl items-center justify-center shrink-0 text-primary group-hover:bg-primary group-hover:text-white transition-all"><PhoneCall size={32} className="lg:size-[42px]" /></div><div className="text-left font-['Outfit']"><p className="text-[10px] lg:text-[11px] text-slate-400 font-black uppercase tracking-[0.3em] mb-2 leading-none italic">Qo'ng'iroq Qiling:</p><h4 className="text-xl lg:text-4xl font-black text-slate-900 italic tracking-tighter leading-none">{content.general.phone}</h4></div></div>
                         </div>
                      </div>
                      <div className="bg-slate-100 rounded-[3rem] h-[350px] lg:h-[640px] flex items-center justify-center text-slate-400 font-black italic relative overflow-hidden group border-8 border-white shadow-2xl transition-all hover:border-primary/20 hover:scale-[1.01]">
                          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1576091160550-217359f4ecf8?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center opacity-40 grayscale group-hover:scale-110 transition-transform duration-[2000ms]" />
                          <span className="relative z-10 bg-white/95 px-8 lg:px-12 py-4 lg:py-5 rounded-full shadow-2xl text-primary flex items-center gap-3 text-sm lg:text-xl font-black uppercase tracking-widest group-hover:-translate-y-2 transition-all group-hover:bg-white group-hover:shadow-primary/30"><MapPin size={24} /> Google Maps</span>
                      </div>
                   </div>
               </section>
            )}

            <footer className="py-20 lg:py-32 bg-slate-900 text-white px-6 lg:px-12 font-['Outfit'] italic text-left">
               <div className="max-w-7xl mx-auto flex flex-col lg:flex-row justify-between items-center gap-12 border-b border-white/5 pb-16 lg:pb-24">
                  <div className="flex flex-col items-center lg:items-start gap-4"><div className="flex items-center gap-4"><div className="w-11 h-11 bg-white rounded-xl flex items-center justify-center text-primary font-black shadow-2xl text-xl lg:text-2xl">ND</div><span className="text-2xl lg:text-4xl font-black uppercase tracking-tighter">NexDent</span></div><p className="text-white/20 italic font-medium max-w-[340px]">Toshkentdagi eng zamonaviy stomatologiya klinikasi.</p></div>
                  <div className="flex gap-8 uppercase font-black text-xs text-primary"><a href="#">Telegram</a><a href="#">Instagram</a></div>
               </div>
               <div className="max-w-7xl mx-auto pt-10 text-center text-white/5 font-black text-[9px] uppercase tracking-[1em] italic italic">&copy; 2026 NexDent Premium Clinic.</div>
            </footer>
         </div>
      </div>
    </div>
  );
}
