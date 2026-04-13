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



<section className="py-32 px-6 max-w-6xl mx-auto">

  <div className="grid md:grid-cols-2 gap-16 items-center">

    {/* IMAGE SIDE */}
    <motion.div
      initial={{ opacity: 0, x: -80 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
      className="relative group"
    >

      {/* GLOW */}
      <div className="absolute inset-0 bg-purple-500/20 blur-[100px] rounded-2xl opacity-70 group-hover:opacity-100 transition" />

      {/* IMAGE */}
      <img
        src="https://images.unsplash.com/photo-1494790108377-be9c29b29330"
        className="relative rounded-2xl object-cover w-full h-[420px] shadow-xl"
      />

      {/* FLOATING BADGE */}
      <motion.div
        initial={{ y: 40, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="absolute -bottom-6 -right-6 bg-black/80 backdrop-blur px-6 py-3 rounded-xl border border-white/10 text-sm"
      >
        3+ Years Experience
      </motion.div>

    </motion.div>

    {/* TEXT SIDE */}
    <motion.div
      initial={{ opacity: 0, x: 80 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
    >

      {/* LABEL */}
      <p className="text-xs tracking-widest text-purple-400 mb-3">
        ABOUT ME
      </p>

      {/* TITLE */}
      <h2 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
        Crafting Visuals That <br />
        <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
          Capture Attention
        </span>
      </h2>

      {/* DESC */}
      <p className="text-gray-400 leading-relaxed mb-4">
        I’m Suciana, a creative image editor and visual designer who specializes in transforming ordinary visuals into powerful, scroll-stopping content.
      </p>

      <p className="text-gray-500 leading-relaxed mb-8">
        I help brands stand out visually, communicate clearly, and leave a lasting impression through high-quality design.
      </p>

      {/* SKILLS */}
      <div className="flex flex-wrap gap-3 mb-8">
        {["Photoshop", "Canva", "CapCut", "CorelDraw"].map((skill, i) => (
          <span
            key={i}
            className="px-4 py-2 text-sm rounded-full bg-white/10 border border-white/10 hover:bg-purple-500/20 transition"
          >
            {skill}
          </span>
        ))}
      </div>

      {/* STATS */}
      <div className="flex gap-10">

        {[
          { num: "50+", label: "Projects" },
          { num: "30+", label: "Clients" },
          { num: "3+", label: "Years" }
        ].map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.2 }}
          >
            <p className="text-2xl font-bold">{item.num}</p>
            <p className="text-gray-500 text-sm">{item.label}</p>
          </motion.div>
        ))}

      </div>

    </motion.div>

  </div>

</section>

<section className="py-32 px-6 max-w-6xl mx-auto">

  {/* TITLE */}
  <div className="text-center mb-16">
    <p className="text-xs tracking-widest text-purple-400 mb-3">
      SERVICES
    </p>

    <h2 className="text-3xl md:text-5xl font-bold">
      What I Can Do For You
    </h2>

    <p className="text-gray-400 mt-4">
      Helping you turn ideas into impactful visual content.
    </p>
  </div>

  {/* CARDS */}
  <div className="grid md:grid-cols-3 gap-8">

    {[
      {
        icon: <ImageIcon size={28} />,
        title: "Photo Editing",
        desc: "Enhancing images with professional retouching, color grading, and detail refinement."
      },
      {
        icon: <Palette size={28} />,
        title: "Design",
        desc: "Creating engaging visuals for social media, branding, and promotional content."
      },
      {
        icon: <Video size={28} />,
        title: "Video Editing",
        desc: "Producing dynamic short-form videos for reels, TikTok, and digital campaigns."
      }
    ].map((item, i) => (

      <div
        key={i}
        className="group relative p-8 rounded-2xl bg-white/5 backdrop-blur border border-white/10 overflow-hidden transition duration-500 hover:scale-105"
      >

        {/* GLOW HOVER */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition bg-purple-500/10 blur-2xl" />

        {/* ICON */}
        <div className="mb-6 text-purple-400 group-hover:scale-110 transition">
          {item.icon}
        </div>

        {/* TITLE */}
        <h3 className="text-xl font-semibold mb-3">
          {item.title}
        </h3>

        {/* DESC */}
        <p className="text-gray-400 text-sm leading-relaxed">
          {item.desc}
        </p>

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

      <section className="py-24 px-6 max-w-5xl mx-auto text-center">

  <h2 className="text-3xl md:text-4xl font-bold mb-12">
    Before & After
  </h2>

  <div className="relative w-full max-w-3xl mx-auto rounded-2xl overflow-hidden">

    {/* AFTER (BASE) */}
    <img
      src="https://images.unsplash.com/photo-1492724441997-5dc865305da7"
      className="w-full h-[400px] object-cover"
    />

    {/* BEFORE (OVERLAY) */}
    <div
      className="absolute top-0 left-0 h-full overflow-hidden"
      style={{ width: `${slider}%` }}
    >
      <img
        src="https://images.unsplash.com/photo-1541701494587-cb58502866ab"
        className="w-full h-[400px] object-cover"
      />
    </div>

    {/* SLIDER LINE */}
    <div
      className="absolute top-0 bottom-0 w-[2px] bg-white"
      style={{ left: `${slider}%` }}
    />

    {/* RANGE */}
    <input
      type="range"
      min="0"
      max="100"
      value={slider}
      onChange={(e) => setSlider(Number(e.target.value))}
      className="absolute bottom-4 left-1/2 -translate-x-1/2 w-2/3"
    />

  </div>

  {/* LABEL */}
  <div className="flex justify-between text-sm text-gray-400 mt-4 max-w-3xl mx-auto">
    <span>Before</span>
    <span>After</span>
  </div>

</section>

    <section id="contact" className="py-32 px-6 relative overflow-hidden">

  {/* BACKGROUND GLOW */}
  <div className="absolute inset-0 flex justify-center">
    <div className="w-[500px] h-[300px] bg-purple-500/20 blur-[120px] rounded-full" />
  </div>

  <div className="relative max-w-3xl mx-auto text-center">

    {/* TITLE */}
    <h2 className="text-4xl md:text-5xl font-bold mb-6">
      {current.contact}
    </h2>

    {/* SUB */}
    <p className="text-gray-400 mb-10">
      Let’s turn your ideas into stunning visuals that stand out.
    </p>

    {/* SOCIAL */}
    <div className="flex justify-center gap-6 mb-10">

      <a href="#" className="p-4 rounded-full bg-white/10 border border-white/10 hover:scale-110 hover:bg-pink-500/20 transition">
        <FaInstagram />
      </a>

      <a href="#" className="p-4 rounded-full bg-white/10 border border-white/10 hover:scale-110 hover:bg-blue-500/20 transition">
        <FaLinkedin />
      </a>

      <a href="#" className="p-4 rounded-full bg-white/10 border border-white/10 hover:scale-110 hover:bg-white/20 transition">
        <FaTiktok />
      </a>

    </div>

    {/* CTA BUTTON */}
    <a
      href="https://wa.me/6281997837794"
      className="inline-block px-10 py-4 rounded-xl font-semibold bg-gradient-to-r from-green-400 to-green-600 hover:scale-105 transition shadow-lg shadow-green-500/30"
    >
      {current.chat}
    </a>

  </div>
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