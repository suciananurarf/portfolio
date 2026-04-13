"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sun, Moon, Menu, X, Image as ImageIcon, Video, Palette } from "lucide-react";
import { FaInstagram, FaLinkedin, FaTiktok } from "react-icons/fa";

type Lang = "EN" | "ID";

export default function Home() {
  const [lang, setLang] = useState<Lang>("EN");
  const [dark, setDark] = useState(true);
  const [menu, setMenu] = useState(false);
  const [preview, setPreview] = useState<string | null>(null);
  const [slider, setSlider] = useState(50);

  const t = {
    EN: {
      role: "Creative Image Editor & Visual Designer",
      desc: "Transforming ordinary visuals into scroll-stopping content.",
      portfolio: "Portfolio",
      hire: "Hire Me",
      services: "Services",
      contact: "Let’s Work Together",
      chat: "Chat via WhatsApp"
    },
    ID: {
      role: "Editor Gambar & Desainer Visual",
      desc: "Mengubah visual biasa jadi konten yang menarik perhatian.",
      portfolio: "Portfolio",
      hire: "Hire Me",
      services: "Layanan",
      contact: "Ayo Bekerja Sama",
      chat: "Chat via WhatsApp"
    }
  };

  const current = t[lang];

  return (
    <main className={`${dark ? "bg-black text-white" : "bg-white text-black"} transition`}>

      {/* 🌌 BACKGROUND */}
      <div className="fixed inset-0 -z-10 overflow-hidden">

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(168,85,247,0.2),transparent_60%)]" />

        <div className="absolute w-[600px] h-[600px] bg-purple-500/20 blur-[140px] rounded-full top-[-150px] left-[-150px] animate-[spin_20s_linear_infinite]" />
        <div className="absolute w-[500px] h-[500px] bg-pink-500/20 blur-[140px] rounded-full bottom-[-150px] right-[-150px] animate-[spin_25s_linear_infinite]" />

        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:60px_60px]" />

        <div className="absolute inset-0 bg-black/40" />

        <div className="absolute inset-0 opacity-[0.05] mix-blend-overlay bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
      </div>

      {/* FLOATING PARTICLES */}
      <div className="fixed inset-0 -z-10 pointer-events-none">
        <div className="absolute top-[25%] left-[15%] w-3 h-3 bg-purple-400 rounded-full blur-sm animate-ping" />
        <div className="absolute bottom-[30%] right-[20%] w-4 h-4 bg-pink-400 rounded-full blur-sm animate-pulse" />
        <div className="absolute top-[60%] left-[50%] w-2 h-2 bg-white rounded-full animate-ping" />
      </div>

      {/* NAVBAR */}
      <nav className="fixed top-0 w-full z-50 backdrop-blur-xl bg-white/10 border-b border-white/10">
        <div className="max-w-6xl mx-auto flex justify-between items-center p-4">
          <h1 className="font-bold">Suciana</h1>

          <div className="hidden md:flex gap-6 items-center">
            <a href="#portfolio">Portfolio</a>
            <a href="#contact">Contact</a>

            <button onClick={() => setLang(lang === "EN" ? "ID" : "EN")} className="border px-3 py-1 rounded-lg">
              {lang}
            </button>

            <button onClick={() => setDark(!dark)} className="border p-2 rounded-lg">
              {dark ? <Sun size={16}/> : <Moon size={16}/>}
            </button>
          </div>

          <button onClick={() => setMenu(!menu)} className="md:hidden">
            {menu ? <X /> : <Menu />}
          </button>
        </div>
      </nav>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {menu && (
          <motion.div className="fixed inset-0 z-[999]">

            <div onClick={() => setMenu(false)} className="absolute inset-0 bg-black/70 backdrop-blur-xl" />

            <motion.div
              initial={{ y: "-100%" }}
              animate={{ y: 0 }}
              exit={{ y: "-100%" }}
              className="relative flex flex-col items-center justify-center h-full gap-8 text-xl"
            >
              <div className="absolute top-6 right-6 flex gap-2">
                <button onClick={() => setLang(lang === "EN" ? "ID" : "EN")} className="px-3 py-1 border rounded-full">{lang}</button>
                <button onClick={() => setDark(!dark)} className="p-2 border rounded-full">
                  {dark ? <Sun size={16}/> : <Moon size={16}/>}
                </button>
                <button onClick={() => setMenu(false)}>✕</button>
              </div>

              <a href="#portfolio" onClick={() => setMenu(false)}>Portfolio</a>
              <a href="#contact" onClick={() => setMenu(false)}>Contact</a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

<section className="relative min-h-screen flex flex-col justify-center items-center text-center px-6 pt-24 overflow-hidden">

  {/* GLOW CENTER (FIX POSISI) */}
  <div className={`absolute w-[500px] h-[250px] rounded-full blur-[120px] 
    ${dark ? "bg-purple-500/20" : "bg-purple-200/40"}
    left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2`} 
  />

  {/* TITLE */}
  <motion.h1
    initial={{ opacity: 0, y: 40 }}
    animate={{ opacity: 1, y: 0 }}
    className={`text-4xl md:text-6xl font-bold ${
      dark
        ? "bg-gradient-to-r from-white via-purple-300 to-pink-300 bg-clip-text text-transparent"
        : "text-gray-900"
    }`}
  >
    Suciana Nur Arifandy
  </motion.h1>

  {/* ROLE */}
  <p className={`mt-4 ${
    dark ? "text-gray-400" : "text-gray-600"
  }`}>
    {current.role}
  </p>

  {/* DESC */}
  <p className={`mt-6 text-xs tracking-widest ${
    dark ? "text-gray-500" : "text-gray-500"
  }`}>
     PHOTO • DESIGN • VIDEO • CREATIVE
  </p>

  {/* BUTTON */}
  <div className="mt-8 flex gap-4">
    <a
      href="#portfolio"
      className={`px-6 py-3 rounded-xl font-medium transition ${
        dark
          ? "bg-white text-black hover:scale-105"
          : "bg-black text-white hover:scale-105"
      }`}
    >
      {current.portfolio}
    </a>

    <a
      href="#contact"
      className={`px-6 py-3 rounded-xl border transition ${
        dark
          ? "border-white/20 hover:bg-white hover:text-black"
          : "border-black/20 hover:bg-black hover:text-white"
      }`}
    >
      {current.hire}
    </a>
  </div>

  {/* SCROLL */}
  <div className={`absolute bottom-10 text-xs animate-bounce ${
    dark ? "text-white/30" : "text-black/40"
  }`}>
    ↓ Scroll
  </div>

</section>

      {/* SERVICES */}
      <section className="py-24 px-6 max-w-6xl mx-auto text-center">
        <h2 className="text-3xl mb-12">{current.services}</h2>

        <div className="grid md:grid-cols-3 gap-8">
          {[{icon:<ImageIcon/>,name:"Photo Editing"},
            {icon:<Palette/>,name:"Design"},
            {icon:<Video/>,name:"Video Editing"}].map((item,i)=>(
            <div key={i} className="p-6 rounded-2xl bg-white/10 backdrop-blur border border-white/20 hover:scale-105 transition shadow-lg hover:shadow-purple-500/30">
              <div className="mb-4">{item.icon}</div>
              <h3>{item.name}</h3>
            </div>
          ))}
        </div>
      </section>

      {/* PORTFOLIO */}
      <section id="portfolio" className="py-24 px-6 max-w-6xl mx-auto">
        <h2 className="text-4xl text-center mb-16">Portfolio</h2>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            "https://images.unsplash.com/photo-1541701494587-cb58502866ab",
            "https://images.unsplash.com/photo-1492724441997-5dc865305da7",
            "https://images.unsplash.com/photo-1522199755839-a2bacb67c546",
            "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
            "https://images.unsplash.com/photo-1517694712202-14dd9538aa97",
            "https://images.unsplash.com/photo-1498050108023-c5249f4df085"
          ].map((src,i)=>(
            <div key={i} onClick={()=>setPreview(src)} className="cursor-pointer rounded-2xl overflow-hidden hover:scale-105 transition">
              <img src={src} className="w-full h-64 object-cover"/>
            </div>
          ))}
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="py-24 text-center">
        <h2 className="text-3xl mb-4">{current.contact}</h2>

        <div className="flex justify-center gap-6 text-2xl mb-6">
          <FaInstagram />
          <FaLinkedin />
          <FaTiktok />
        </div>

        <a href="https://wa.me/6281997837794" className="bg-green-500 px-8 py-3 rounded-xl">
          {current.chat}
        </a>
      </section>

      {/* FOOTER */}
      <footer className="py-10 text-center text-sm text-gray-500">
        Designed & Developed by <span className="text-white">nannsky</span>
      </footer>

      {/* MODAL */}
      {preview && (
        <div onClick={()=>setPreview(null)} className="fixed inset-0 bg-black/90 flex items-center justify-center z-50">
          <img src={preview} className="max-w-4xl w-full rounded-xl"/>
        </div>
      )}

    </main>
  );
}