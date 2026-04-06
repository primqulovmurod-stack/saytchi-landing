import React from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Button } from './components/ui/button'
import { 
  Zap, 
  Layers, 
  MousePointer2, 
  Globe, 
  Sparkles, 
  BrainCircuit, 
  Rocket, 
  Palette,
  ArrowRight,
  Sun,
  Moon,
  Instagram,
  Send,
  ChevronLeft,
  Menu,
  X
} from 'lucide-react'
import NexdentTemplate from './templates/NexdentTemplate'

const FeatureCard = ({ icon: Icon, title, desc }) => (
  <motion.div 
    whileHover={{ y: -10, scale: 1.02 }}
    className="glass-card p-8 lg:p-10 rounded-[2rem] lg:rounded-[2.5rem] border border-white/20 shadow-2xl relative overflow-hidden group flex flex-col items-start"
  >
    <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-3xl -mr-16 -mt-16 group-hover:bg-primary/20 transition-colors" />
    <div className="w-14 h-14 lg:w-16 lg:h-16 bg-primary/10 rounded-2xl flex items-center justify-center text-primary mb-6 lg:mb-8 group-hover:bg-primary group-hover:text-white transition-all duration-500">
      <Icon size={28} className="lg:size-[32px]" />
    </div>
    <h3 className="text-xl lg:text-2xl font-black text-slate-900 mb-4 tracking-tight dark:text-white font-['Outfit']">{title}</h3>
    <p className="text-sm lg:text-base text-slate-500 leading-relaxed font-medium dark:text-slate-400 mb-8 font-['Outfit']">{desc}</p>
    <Button variant="ghost" className="p-0 h-auto font-black text-primary hover:bg-transparent hover:text-primary/80 group/btn flex items-center gap-2 text-sm lg:text-base font-['Outfit'] border-none outline-none">
       Batafsil <ArrowRight size={18} className="group-hover/btn:translate-x-2 transition-transform" />
    </Button>
  </motion.div>
)

const TemplateCard = ({ name, type, image, delay, onSelect }) => (
    <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay }}
        viewport={{ once: true }}
        onClick={onSelect}
        className="relative aspect-[4/5] rounded-[2.5rem] lg:rounded-[3rem] overflow-hidden group cursor-pointer shadow-2xl"
    >
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent z-10 opacity-80" />
        <div className="absolute inset-0 bg-slate-900/40 group-hover:bg-slate-900/10 transition-colors duration-500" />
        <div className="absolute top-0 left-0 w-full h-full bg-cover bg-center group-hover:scale-110 transition-transform duration-700" style={{ backgroundImage: `url(${image})` }} />
        <div className="absolute bottom-8 left-8 lg:bottom-10 lg:left-10 z-20 space-y-2">
            <span className="px-3 py-1 bg-primary/90 text-white rounded-full text-[9px] lg:text-[10px] font-black uppercase tracking-widest backdrop-blur-md">{type}</span>
            <h4 className="text-2xl lg:text-3xl font-black text-white font-['Outfit']">{name}</h4>
        </div>
        <div className="absolute inset-0 z-30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"><div className="bg-white/20 backdrop-blur-xl p-5 lg:p-6 rounded-full border border-white/40"><Palette size={32} className="text-white lg:size-[40px]" /></div></div>
    </motion.div>
)

export default function App() {
  const [isDark, setIsDark] = React.useState(false);
  const [selectedCategory, setSelectedCategory] = React.useState(null);
  const [activePreview, setActivePreview] = React.useState(null);
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <div className={`relative min-h-screen font-['Outfit'] selection:bg-primary selection:text-white transition-colors duration-500 overflow-x-hidden ${isDark ? 'bg-slate-950 text-white' : 'bg-white text-slate-900'}`} style={{ '--primary': "142.1 76.2% 36.3%" }}>
      
      <AnimatePresence>
        {activePreview === 'nexdent' && (
          <NexdentTemplate onClose={() => setActivePreview(null)} />
        )}
      </AnimatePresence>
      
      {/* Navigation (V.4.1 Pure Version) */}
      <nav className="fixed top-0 w-full z-50 px-4 py-4 lg:px-12 lg:py-8">
        <div className={`max-w-7xl mx-auto flex justify-between items-center backdrop-blur-3xl border rounded-[1.5rem] lg:rounded-[2rem] px-6 lg:px-10 py-4 lg:py-5 shadow-2xl transition-all duration-500 ${isDark ? 'bg-slate-900/80 border-white/10' : 'bg-white/80 border-slate-200'}`}>
          <div className="flex items-center gap-3 lg:gap-4 cursor-pointer">
            <div className="w-9 h-9 lg:w-12 lg:h-12 bg-primary rounded-xl flex items-center justify-center text-white shadow-lg shadow-primary/30"><Zap size={22} className="lg:size-[24px]" /></div>
            <div className="flex flex-col leading-none">
                <span className={`text-xl lg:text-2xl font-black tracking-tighter uppercase transition-colors ${isDark ? 'text-white' : 'text-slate-900'} font-['Outfit']`}>Saytchi<span className="text-primary lg:text-xl text-lg">.uz</span></span>
                <span className="text-[8px] lg:text-[10px] font-black text-primary tracking-[0.2em] lg:tracking-[0.3em] uppercase">AI Konstruktor</span>
            </div>
          </div>
          
          <div className="hidden lg:flex gap-12 font-bold text-sm tracking-tight transition-colors">
            <a href="#features" className="hover:text-primary transition-colors">Imkoniyatlar</a>
            <a href="#templates" className="hover:text-primary transition-colors">Shablonlar</a>
            <a href="#contact" className="hover:text-primary transition-colors">Aloqa</a>
          </div>

          <div className="flex items-center gap-2 lg:gap-6">
            <button onClick={() => setIsDark(!isDark)} className={`w-10 h-10 lg:w-12 lg:h-12 rounded-xl lg:rounded-2xl flex items-center justify-center transition-all border ${isDark ? 'bg-amber-500/10 border-amber-500/20 text-amber-400' : 'bg-slate-900/10 border-slate-900/20 text-slate-900'}`}>{isDark ? <Sun size={20} /> : <Moon size={20} />}</button>
            <Button className="hidden sm:inline-flex rounded-xl lg:rounded-2xl px-6 lg:px-10 h-10 lg:h-14 bg-primary text-white font-black text-xs lg:text-base border-none font-['Outfit']" asChild><a href="https://t.me/temur070894" className="flex items-center gap-2"><Rocket size={16} /> Boshlash</a></Button>
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="lg:hidden p-2 text-primary active:scale-95 transition-transform"><Menu size={28} /></button>
          </div>
        </div>

        {/* Mobile Menu Overlay */}
        <AnimatePresence>
            {isMenuOpen && (
                <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.95 }} className={`lg:hidden fixed inset-4 top-20 z-50 rounded-[2rem] border shadow-2xl p-8 flex flex-col gap-6 justify-center items-center ${isDark ? 'bg-slate-900 border-white/10' : 'bg-white border-slate-100'}`}>
                    <button onClick={() => setIsMenuOpen(false)} className="absolute top-6 right-6 text-slate-400"><X size={32}/></button>
                    <a href="#features" onClick={() => setIsMenuOpen(false)} className="text-3xl font-black uppercase text-primary">Imkoniyatlar</a>
                    <a href="#templates" onClick={() => setIsMenuOpen(false)} className="text-3xl font-black uppercase text-primary">Shablonlar</a>
                    <a href="#contact" onClick={() => setIsMenuOpen(false)} className="text-3xl font-black uppercase text-primary">Aloqa</a>
                    <Button className="w-full h-16 rounded-2xl bg-primary text-white font-black text-xl border-none outline-none font-['Outfit']" asChild><a href="https://t.me/temur070894">BOSHLASH</a></Button>
                </motion.div>
            )}
        </AnimatePresence>
      </nav>

      {/* Hero Section (V.4.1 Optimized) */}
      <section className="relative pt-32 lg:pt-64 pb-20 lg:pb-32 px-6 lg:px-12 text-center space-y-8 lg:space-y-12">
        <div className="max-w-7xl mx-auto space-y-8 lg:space-y-12">
          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className={`inline-flex items-center gap-3 border rounded-full px-5 py-2.5 lg:px-6 lg:py-3 text-[10px] lg:text-sm font-black tracking-wider uppercase shadow-inner transition-colors ${isDark ? 'bg-slate-800 border-white/5 text-slate-400' : 'bg-slate-50 border-slate-100 text-slate-500'}`}><Sparkles size={16} className="text-primary" /> AI yordamida sayt yaratish</motion.div>
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className={`text-[42px] lg:text-[100px] font-black tracking-tight leading-[1.1] lg:leading-[0.9] max-w-5xl mx-auto transition-colors ${isDark ? 'text-white' : 'text-slate-900'} font-['Outfit'] uppercase`}>Sizning <span className="text-primary italic">Ma'lumotlaringiz</span>, Bizning <span className={`transition-colors ${isDark ? 'text-white/10' : 'text-slate-200'}`}>Professional</span> Dizaynimiz.</motion.h1>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }} className={`text-base lg:text-2xl max-w-2xl mx-auto font-medium leading-relaxed transition-colors ${isDark ? 'text-slate-400' : 'text-slate-500'} font-['Outfit']`}>Barcha ma'lumotlaringizdan foydalanib, biznesingiz uchun mukammal va professional sayt yaratib beramiz.</motion.p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 lg:gap-6 pt-6 italic">
            <Button size="lg" className="h-16 lg:h-24 px-10 lg:px-16 rounded-2xl lg:rounded-[2.5rem] text-xl lg:text-2xl font-black bg-primary text-white shadow-2xl shadow-primary/30 border-none outline-none font-['Outfit']" asChild><a href="https://t.me/temur070894" className="flex items-center gap-4">Boshlash <ArrowRight size={24} /></a></Button>
            <Button size="lg" variant="outline" className={`h-16 lg:h-24 px-10 lg:px-16 rounded-2xl lg:rounded-[2.5rem] text-xl lg:text-2xl font-black border-2 lg:border-4 ${isDark ? 'border-slate-800 text-white' : 'border-slate-200 text-slate-900 shadow-xl'} font-['Outfit']`} asChild><a href="#templates">Ishlarimiz</a></Button>
          </div>
        </div>
      </section>

      {/* Features Grid (Responsive) */}
      <section id="features" className="py-24 lg:py-40 px-6 lg:px-12 relative overflow-hidden">
        <div className="max-w-7xl mx-auto space-y-16 lg:space-y-24">
          <div className="text-center space-y-4 lg:space-y-6">
            <h2 className={`text-4xl lg:text-7xl font-black tracking-tight transition-colors ${isDark ? 'text-white' : 'text-slate-900'} font-['Outfit'] uppercase`}>Imkoniyatlar</h2>
            <p className={`text-base lg:text-xl font-bold max-w-2xl mx-auto transition-colors ${isDark ? 'text-slate-400' : 'text-slate-500'} font-['Outfit']`}>Biznesingizni yangi bosqichga olib chiqadigan premium yechimlar.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-10 text-left">{[BrainCircuit, Zap, Layers, Globe, MousePointer2, Sparkles].map((icon, i) => <FeatureCard key={i} icon={icon} title={["AI Algoritmlari", "Ultra Tevkorlik", "Modern Dizayn", "Global Reach", "User Friendly", "Premium Sifat"][i]} desc={["Dizayn va struktura avtomatik tanlanadi.", "Saytlar soniyalarda yuklanadi.", "Trenddagi dizayn elementlari.", "Global SEO optimizatsiya.", "To'liq intuitiv interfeys.", "Har bir detalga e'tibor."][i]} />)}</div>
        </div>
      </section>

      {/* Templates Section (Responsive) */}
      <section id="templates" className="py-24 lg:py-40 px-6 lg:px-12 min-h-screen">
        <div className="max-w-7xl mx-auto space-y-16">
            <AnimatePresence mode="wait">
              {selectedCategory === 'stomatologiya' ? (
                <motion.div key="sub" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} className="space-y-12">
                   <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
                       <div className="space-y-4 text-left"><h2 className={`text-4xl lg:text-7xl font-black transition-colors ${isDark ? 'text-white' : 'text-slate-900'} font-['Outfit'] uppercase`}>Stomatologiya</h2><p className={`text-base lg:text-xl font-bold ${isDark ? 'text-slate-400' : 'text-slate-500'} font-['Outfit']`}>Premium takliflar.</p></div>
                       <Button onClick={() => setSelectedCategory(null)} className="h-14 lg:h-16 px-8 lg:px-10 rounded-xl lg:rounded-2xl bg-slate-900 text-white font-black flex items-center gap-3 border-none font-['Outfit']"><ChevronLeft size={24} /> Qaytish</Button>
                   </div>
                   <div className="grid md:grid-cols-3 gap-8 text-left"><TemplateCard name="NexDent Premium" type="Full Version" image="https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&q=80&w=2070" delay={0.1} onSelect={() => setActivePreview('nexdent')} /></div>
                </motion.div>
              ) : (
                <motion.div key="cat" initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: 20 }} className="space-y-12">
                   <div className="text-left space-y-4 lg:space-y-6"><h2 className={`text-4xl lg:text-7xl font-black transition-colors ${isDark ? 'text-white' : 'text-slate-900'} font-['Outfit'] uppercase`}>Shablonlar</h2><p className={`text-base lg:text-xl font-bold ${isDark ? 'text-slate-400' : 'text-slate-500'} font-['Outfit']`}>Turli sohalar uchun tanlovlar.</p></div>
                   <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"><TemplateCard name="Stomatologiya" type="Medicine" image="https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80&w=2070" delay={0} onSelect={() => setSelectedCategory('stomatologiya')} /><TemplateCard name="Oltin Taklifnoma" type="Wedding" image="https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=80&w=2070" delay={0.1} onSelect={() => {}} /><TemplateCard name="Kelajak SaaS" type="Technology" image="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=2015" delay={0.2} onSelect={() => {}} /></div>
                </motion.div>
              )}
            </AnimatePresence>
        </div>
      </section>

      {/* Footer (Responsive) */}
      <footer className="py-16 lg:py-32 bg-slate-900 text-white px-6 lg:px-12 font-['Outfit'] border-t border-white/5">
         <div className="max-w-7xl mx-auto flex flex-col lg:flex-row justify-between items-center gap-12 text-center lg:text-left">
           <div className="flex flex-col items-center lg:items-start gap-4">
             <div className="flex items-center gap-4"><div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center shadow-lg shadow-primary/20"><Zap size={20} /></div><span className="text-2xl font-black uppercase tracking-tighter">SAYTCHI<span className="text-primary text-xl">.UZ</span></span></div>
             <p className="text-slate-500 max-w-xs font-medium italic">Professional platforma yechimi.</p>
           </div>
           <div className="text-slate-500 font-bold text-[10px] lg:text-[11px] tracking-widest uppercase italic">&copy; 2026 Saytchi.uz. Barcha huquqlar himoyalangan.</div>
           <div className="flex gap-8 uppercase font-black text-xs text-primary"><a href="#">Telegram</a><a href="#">Instagram</a></div>
         </div>
      </footer>
    </div>
  );
}
