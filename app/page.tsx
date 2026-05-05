"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";
import data from "@/data/gallery.json";

export default function Home() {
  const [open, setOpen] = useState(false);

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
      <section id="about" className="py-20 px-5">

        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">

          {/* IMAGE */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <img
              src="/gallery/profil.jpg"
              className="w-full h-[320px] md:h-[420px] object-cover rounded-2xl"
            />

            <div className="absolute bottom-3 left-3 text-xs bg-black/80 px-3 py-1 rounded-lg border border-white/10">
              3+ Years Experience
            </div>
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

            <p className="text-gray-400 mb-4">
              I’m Suciana, a creative image editor and visual designer.
            </p>

            <p className="text-gray-500 mb-6">
              I help brands stand out visually and communicate clearly.
            </p>

            {/* SKILLS */}
            <div className="flex flex-wrap gap-2 mb-8">
              {["Photoshop", "Canva", "CapCut", "CorelDraw"].map((s) => (
                <span key={s} className="px-3 py-1 text-xs rounded-full bg-white/10 border border-white/10">
                  {s}
                </span>
              ))}
            </div>

            {/* STATS */}
            <div className="flex justify-between md:justify-start md:gap-10">

              {[
                { num: "50+", label: "Projects" },
                { num: "30+", label: "Clients" },
                { num: "3+", label: "Years" }
              ].map((item, i) => (
                <div key={i}>
                  <p className="text-xl font-bold">{item.num}</p>
                  <p className="text-gray-500 text-xs">{item.label}</p>
                </div>
              ))}

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
          title: "Freelance Designer",
          desc: "Handling visual design & editing for various clients",
          year: "2023 - Now",
        },
        {
          title: "Content Creator",
          desc: "Creating engaging visual content for social media",
          year: "2022 - 2023",
        },
        {
          title: "Design Project",
          desc: "Various branding & poster design projects",
          year: "2021 - 2022",
        },
      ].map((item, i) => (
        <div key={i} className="relative pl-12">

          {/* DOT + GLOW */}
          <div className="absolute left-0 top-2">
            <div className="w-3 h-3 bg-purple-500 rounded-full relative z-10" />
            <div className="absolute inset-0 bg-purple-500 blur-md opacity-40 rounded-full" />
          </div>

          {/* CARD */}
          <div className="p-5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur hover:bg-purple-500/10 transition">

            <div className="flex justify-between items-center mb-2">
              <h3 className="font-semibold text-lg">
                {item.title}
              </h3>

              <span className="text-xs text-purple-400">
                {item.year}
              </span>
            </div>

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
  <div className="grid grid-cols-2 md:grid-cols-4 gap-6">

    {[
      { name: "Photoshop", color: "from-blue-500 to-cyan-400" },
      { name: "Canva", color: "from-purple-500 to-pink-400" },
      { name: "CapCut", color: "from-gray-300 to-gray-500" },
      { name: "CorelDraw", color: "from-green-400 to-emerald-500" },
    ].map((tool, i) => (
      <div
        key={i}
        className="relative group rounded-2xl p-[1px] bg-gradient-to-br from-white/10 to-white/0"
      >

        {/* INNER CARD */}
        <div className="relative rounded-2xl bg-black/60 backdrop-blur p-6 h-full flex flex-col items-center justify-center hover:scale-[1.03] transition">

          {/* GLOW */}
          <div className={`absolute inset-0 opacity-0 group-hover:opacity-20 transition bg-gradient-to-br ${tool.color} blur-2xl`} />

          {/* ICON PLACEHOLDER */}
          <div className="text-xl mb-3 opacity-80">
            ●
          </div>

          {/* NAME */}
          <p className="text-sm font-medium">
            {tool.name}
          </p>

        </div>

      </div>
    ))}

  </div>

</section>

<section id="contact" className="py-28 px-5 max-w-5xl mx-auto text-center relative">

  {/* GLOW BACKGROUND */}
  <div className="absolute inset-0 flex justify-center">
    <div className="w-[300px] h-[300px] bg-purple-500/20 blur-[120px] rounded-full" />
  </div>

  {/* CONTENT */}
  <div className="relative">

    <h2 className="text-3xl md:text-5xl font-bold mb-4 leading-tight">
      Let’s Work Together
    </h2>

    <p className="text-gray-400 mb-10 max-w-md mx-auto">
      Have a project in mind? Let’s bring your ideas to life with creative visuals that stand out.
    </p>

    {/* SOCIAL */}
    <div className="flex justify-center flex-wrap gap-4 mb-10">

      {[
        { name: "Instagram", link: "#" },
        { name: "LinkedIn", link: "#" },
        { name: "TikTok", link: "#" },
      ].map((item, i) => (
        <a
          key={i}
          href={item.link}
          className="px-4 py-2 text-sm rounded-full border border-white/10 bg-white/5 backdrop-blur hover:bg-purple-500/20 transition"
        >
          {item.name}
        </a>
      ))}

    </div>

    {/* CTA */}
    <a
      href="https://wa.me/6281997837794"
      className="inline-block bg-gradient-to-r from-green-400 to-green-500 px-8 py-3 rounded-xl text-sm font-medium hover:scale-105 transition shadow-lg shadow-green-500/20"
    >
      Chat via WhatsApp
    </a>

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
