"use client";

import { useState, useEffect, useRef } from "react";
import { Menu, X } from "lucide-react";
import { motion, useInView } from "framer-motion";
import Link from "next/link";
import data from "@/data/gallery.json";
import { FaInstagram, FaLinkedin, FaTiktok } from "react-icons/fa";

export default function Home() {
  const [open, setOpen] = useState(false);

  /* =========================
     🎯 SCROLL + VIEW DETECT
  ========================== */
  const ref = useRef(null);

  const isInView = useInView(ref, {
    once: false,
    margin: "-100px",
  });

  const [played, setPlayed] = useState(false);

  useEffect(() => {
    if (isInView) setPlayed(true);
  }, [isInView]);

  /* =========================
     🔢 COUNTER HOOK
  ========================== */
  function useCounter(target: number, duration = 1200) {
    const [count, setCount] = useState(0);

    useEffect(() => {
      if (target === 0) {
        setCount(0);
        return;
      }

      let start = 0;
      const increment = target / (duration / 20);

      const timer = setInterval(() => {
        start += increment;

        if (start >= target) {
          setCount(target);
          clearInterval(timer);
        } else {
          setCount(Math.floor(start));
        }
      }, 20);

      return () => clearInterval(timer);
    }, [target, duration]);

    return count;
  }

  /* =========================
     🔢 COUNTER VALUES
  ========================== */
  const projects = useCounter(played ? 50 : 0);
  const clients = useCounter(played ? 30 : 0);
  const years = useCounter(played ? 3 : 0);

  /* =========================
     🧭 MENU
  ========================== */
  const menus = [
    { name: "Beranda", link: "#home" },
    { name: "Tentang", link: "#about" },
    { name: "Galeriku", link: "#gallery" },
    { name: "Experience", link: "#experience" },
    { name: "Tools", link: "#tools" },
    { name: "Contact", link: "#contact" },
  ];

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };


  return (
    
    <main className="bg-black text-white overflow-x-hidden">

      {/* 🔝 NAVBAR */}
      <nav className="fixed top-0 w-full z-50 bg-black/60 backdrop-blur border-b border-white/10">
        <div className="max-w-6xl mx-auto flex justify-between items-center px-5 py-4">

          <h1 className="text-sm font-semibold">
            Suciana Nur Arifandy
          </h1>

          {/* DESKTOP */}
          <div className="hidden md:flex gap-6 text-sm">
            {menus.map((m, i) => (
              <a key={i} href={m.link} className="hover:text-purple-400 transition">
                {m.name}
              </a>
            ))}
          </div>

          {/* MOBILE BUTTON */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden z-50"
          >
            {open ? <X /> : <Menu />}
          </button>

        </div>
      </nav>

      {/* 📱 MOBILE MENU */}
      <div
        className={`fixed inset-0 bg-black/95 backdrop-blur-lg z-40 flex flex-col items-center justify-center gap-8 text-xl transition-all duration-300 ${
          open ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      >
        {menus.map((m, i) => (
          <a
            key={i}
            href={m.link}
            onClick={() => setOpen(false)}
            className="hover:text-purple-400 transition"
          >
            {m.name}
          </a>
        ))}
      </div>

      {/* 🚀 HERO */}
      <section id="home" className="relative min-h-screen flex flex-col justify-center items-center text-center px-5 pt-24 overflow-hidden">

  {/* 🌌 BACKGROUND GLOW (SAFE) */}
  <div className="absolute inset-0 -z-10 flex justify-center">
    <div className="w-[280px] h-[280px] sm:w-[400px] sm:h-[400px] bg-purple-500/20 blur-[120px] rounded-full" />
  </div>

  {/* CONTENT */}
  <div className="max-w-2xl mx-auto">

    {/* LABEL */}
    <p className="text-[10px] tracking-[3px] text-purple-400 mb-3">
      CREATIVE DESIGNER
    </p>

    {/* TITLE */}
    <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold leading-tight">
      Suciana Nur{" "}
      <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
        Arifandy
      </span>
    </h1>

    {/* SUBTITLE */}
    <p className="mt-4 text-gray-400 text-sm sm:text-base max-w-md mx-auto">
      Turning ideas into visually stunning designs that capture attention and communicate clearly.
    </p>

    {/* CTA */}
    <div className="mt-8 flex flex-wrap justify-center gap-3">

      <a
        href="#gallery"
        className="bg-white text-black px-6 py-2.5 rounded-xl text-sm font-medium hover:scale-105 transition"
      >
        View Portfolio
      </a>

      <a
        href="#contact"
        className="border border-white/20 px-6 py-2.5 rounded-xl text-sm hover:bg-white/10 transition"
      >
        Hire Me
      </a>

    </div>

    {/* SCROLL INDICATOR */}
    <div className="mt-16 text-xs text-white/40 animate-bounce">
      ↓ Scroll
    </div>

  </div>

</section>

      {/* 🙋 ABOUT */}
 <section
        ref={ref}
        id="about"
        className="py-24 px-5 scroll-mt-24"
      >

        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">

          {/* IMAGE */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <img
              src="/gallery/profil.jpg"
              className="w-full h-[320px] md:h-[420px] object-cover rounded-2xl"
            />
          </motion.div>

          {/* TEXT */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >

            <p className="text-xs tracking-widest text-purple-400 mb-3">
              ABOUT ME
            </p>

            <h2 className="text-2xl md:text-5xl font-bold mb-5">
              Crafting Visuals That{" "}
              <span className="block bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Capture Attention
              </span>
            </h2>

            <p className="text-gray-400 mb-6">
              I’m Suciana, a creative designer focused on impactful visuals.
            </p>

            {/* STATS */}
            <div className="flex gap-8">

              <div>
                <p className="text-2xl font-bold">{projects}+</p>
                <p className="text-gray-500 text-xs">Projects</p>
              </div>

              <div>
                <p className="text-2xl font-bold">{clients}+</p>
                <p className="text-gray-500 text-xs">Clients</p>
              </div>

              <div>
                <p className="text-2xl font-bold">{years}+</p>
                <p className="text-gray-500 text-xs">Years</p>
              </div>

            </div>

          </motion.div>

        </div>

      </section>

      <section id="gallery" className="py-24 px-5 max-w-6xl mx-auto">

  <div className="flex justify-between items-center mb-10">
    <h2 className="text-3xl md:text-4xl font-bold">
      Galeriku
    </h2>

    <Link
      href="/gallery"
      className="text-sm text-purple-400 hover:underline"
    >
      Lihat Semua →
    </Link>
  </div>

  {/* GRID TEASER */}
  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">

    {data.slice(0, 8).map((item) => (
      <div key={item.id} className="group cursor-pointer">

        <img
          src={item.src}
          className="w-full h-40 object-cover rounded-xl group-hover:scale-105 transition"
        />

      </div>
    ))}

  </div>

</section>

<section id="experience" className="py-24 px-5 max-w-5xl mx-auto">

  {/* TITLE */}
  <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
    Experience
  </h2>

  <div className="relative">

    {/* LINE */}
    <div className="absolute left-3 top-0 w-[2px] h-full bg-gradient-to-b from-purple-500/40 to-transparent" />

    <div className="space-y-12">

      {[
        {
          role: "Staf Produksi",
          company: "Prenadamedia Group",
          duration: "1 Year",
          desc: "Handled production workflow for publishing materials and ensured consistent output quality."
        },
        {
          role: "Social Media Advertising",
          company: "Lynk Digital Agency",
          duration: "4 Years",
          desc: "Managed social media campaigns, optimized content performance, and increased audience engagement."
        },
        {
          role: "Graphic Designer",
          company: "PT SQINPRO Kosmetika Industri",
          duration: "6 Months",
          desc: "Created branding, packaging, and promotional visuals aligned with product identity."
        },
        {
          role: "Staf Graphic Designer",
          company: "PT Chandra Karya Furniture",
          duration: "4 Years - Present",
          desc: "Designed marketing visuals, banners, and digital assets for campaigns and brand promotion."
        }
      ].map((item, i) => (
        <div key={i} className="relative pl-12 group">

          {/* DOT + GLOW */}
          <div className="absolute left-0 top-2">
            <div className="w-3 h-3 bg-purple-500 rounded-full relative z-10" />
            <div className="absolute inset-0 bg-purple-500 blur-md opacity-40 rounded-full" />
          </div>

          {/* CARD */}
          <div className="p-5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur hover:bg-white/10 transition-all duration-300 group-hover:scale-[1.02]">

            {/* HEADER */}
            <div className="flex justify-between items-start mb-3">

              <div>
                <h3 className="font-semibold text-lg leading-tight">
                  {item.role}
                </h3>

                <p className="text-xs text-purple-400 mt-1">
                  {item.company}
                </p>
              </div>

              <span className="text-[11px] text-gray-400 whitespace-nowrap">
                {item.duration}
              </span>

            </div>

            {/* DESC */}
            <p className="text-sm text-gray-400 leading-relaxed">
              {item.desc}
            </p>

          </div>

        </div>
      ))}

    </div>

  </div>

</section>

<section id="tools" className="py-24 px-5 max-w-6xl mx-auto text-center">

  {/* TITLE */}
  <h2 className="text-3xl md:text-4xl font-bold mb-14">
    Tools & Software
  </h2>

  {/* GRID */}
  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5">

    {[
      { name: "Adobe Photoshop", color: "from-blue-500 to-cyan-400" },
      { name: "Adobe Illustrator", color: "from-orange-500 to-yellow-400" },
      { name: "Adobe InDesign", color: "from-pink-500 to-rose-400" },
      { name: "Canva", color: "from-purple-500 to-pink-400" },
      { name: "CapCut", color: "from-gray-300 to-gray-500" },
    ].map((tool, i) => (
      <div
        key={i}
        className="relative group rounded-2xl p-[1px] bg-gradient-to-br from-white/10 to-transparent"
      >

        {/* INNER */}
        <div className="relative rounded-2xl bg-black/60 backdrop-blur p-5 h-full flex flex-col items-center justify-center hover:scale-[1.05] transition-all duration-300">

          {/* GLOW */}
          <div className={`absolute inset-0 opacity-0 group-hover:opacity-20 transition bg-gradient-to-br ${tool.color} blur-2xl`} />

          {/* ICON STYLE (FAKE LOGO BOX) */}
          <div className={`mb-3 w-10 h-10 flex items-center justify-center rounded-lg text-xs font-bold bg-gradient-to-br ${tool.color}`}>
            {tool.name.split(" ")[1]?.charAt(0) || tool.name.charAt(0)}
          </div>

          {/* NAME */}
          <p className="text-xs sm:text-sm font-medium leading-tight">
            {tool.name}
          </p>

        </div>

      </div>
    ))}

  </div>

</section>

<section id="contact" className="relative py-32 px-5 overflow-hidden">

  {/* 🌌 BACKGROUND */}
  <div className="absolute inset-0 -z-10">
    <div className="absolute w-[500px] h-[500px] bg-purple-500/20 blur-[140px] rounded-full top-[-150px] left-[-100px]" />
    <div className="absolute w-[400px] h-[400px] bg-pink-500/20 blur-[120px] rounded-full bottom-[-100px] right-[-80px]" />
  </div>

  <div className="max-w-4xl mx-auto text-center">

    {/* TITLE */}
    <h2 className="text-3xl md:text-5xl font-bold mb-4">
      Let’s Work Together
    </h2>

    {/* DESC */}
    <p className="text-gray-400 max-w-md mx-auto mb-12 leading-relaxed">
      Have a project in mind? I help brands and individuals create visuals that stand out and leave a lasting impression.
    </p>

    {/* 🔥 SOCIAL ICON */}
    <div className="flex justify-center gap-5 mb-12 flex-wrap">

      {[
        {
          icon: <FaInstagram />,
          link: "https://www.instagram.com/sucianarfndy",
          color: "hover:text-pink-400",
          glow: "from-pink-500 via-purple-500 to-yellow-400"
        },
        {
          icon: <FaLinkedin />,
          link: "https://id.linkedin.com/in/suciana-nur-arifandy-983b39206",
          color: "hover:text-blue-400",
          glow: "from-blue-500 to-cyan-400"
        },
        {
          icon: <FaTiktok />,
          link: "https://www.tiktok.com/@winsskyt?_r=1&_t=ZS-966glriXRFY",
          color: "hover:text-white",
          glow: "from-white to-gray-400"
        },
      ].map((item, i) => (
        <a
          key={i}
          href={item.link}
          target="_blank"
          rel="noopener noreferrer"
          className={`group relative w-14 h-14 flex items-center justify-center rounded-xl border border-white/10 bg-white/5 backdrop-blur transition-all duration-300 ${item.color}`}
        >

          {/* GLOW */}
          <div className={`absolute inset-0 opacity-0 group-hover:opacity-30 transition bg-gradient-to-br ${item.glow} blur-xl`} />

          {/* ICON */}
          <div className="relative z-10 text-lg group-hover:scale-110 transition">
            {item.icon}
          </div>

        </a>
      ))}

    </div>

    {/* 🚀 CTA */}
    <a
      href="https://wa.me/6281997837794"
      target="_blank"
      rel="noopener noreferrer"
      className="inline-block relative group"
    >

      {/* GLOW */}
      <div className="absolute inset-0 bg-green-500 blur-2xl opacity-30 group-hover:opacity-60 transition rounded-xl" />

      {/* BUTTON */}
      <div className="relative bg-gradient-to-r from-green-400 to-green-500 px-10 py-4 rounded-xl font-semibold tracking-wide hover:scale-105 transition shadow-xl shadow-green-500/30">
        Start a Project →
      </div>

    </a>

    {/* FOOT NOTE */}
    <p className="mt-16 text-xs text-gray-500">
      Available for freelance & collaboration
    </p>

  </div>

</section>

<footer className="py-10 text-center text-xs text-gray-500 border-t border-white/10">
  <p>
    © {new Date().getFullYear()} Suciana — Crafted by nannsky
  </p>
</footer>

    </main>
  );
}
