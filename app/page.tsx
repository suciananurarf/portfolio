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

  return (
    <main className="bg-black text-white overflow-x-hidden">

      {/* 🔝 NAVBAR */}
      <nav className="fixed top-0 w-full z-50 bg-black/60 backdrop-blur border-b border-white/10">
        <div className="max-w-6xl mx-auto flex justify-between items-center px-5 py-4">

          <h1 className="text-sm font-semibold">
            Suciana
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
      <section id="home" className="min-h-screen flex flex-col justify-center items-center text-center px-5 pt-24">

        <h1 className="text-3xl md:text-6xl font-bold">
          Suciana Nur Arifandy
        </h1>

        <p className="mt-4 text-gray-400">
          Creative Image Editor & Visual Designer
        </p>

        <div className="mt-6 flex gap-3">
          <a href="#gallery" className="bg-white text-black px-5 py-2.5 rounded-xl">
            Portfolio
          </a>
          <a href="#contact" className="border px-5 py-2.5 rounded-xl">
            Hire Me
          </a>
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

<section id="experience" className="py-24 px-5 max-w-4xl mx-auto">

  <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
    Experience
  </h2>

  <div className="relative border-l border-white/10 pl-6 space-y-10">

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
      <div key={i} className="relative">

        {/* DOT */}
        <div className="absolute -left-[11px] top-1 w-3 h-3 bg-purple-500 rounded-full" />

        <h3 className="font-semibold text-lg">{item.title}</h3>
        <p className="text-sm text-gray-400">{item.desc}</p>
        <p className="text-xs text-gray-500 mt-1">{item.year}</p>

      </div>
    ))}

  </div>

</section>

<section id="tools" className="py-24 px-5 text-center">

  <h2 className="text-3xl md:text-4xl font-bold mb-12">
    Tools
  </h2>

  <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto">

    {[
      "Photoshop",
      "Canva",
      "CapCut",
      "CorelDraw",
    ].map((tool, i) => (
      <div
        key={i}
        className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur hover:bg-purple-500/10 transition"
      >
        <p className="text-sm">{tool}</p>
      </div>
    ))}

  </div>

</section>

<section id="contact" className="py-24 px-5 text-center">

  <h2 className="text-3xl md:text-4xl font-bold mb-4">
    Let’s Work Together
  </h2>

  <p className="text-gray-400 mb-8">
    Have a project in mind? Let’s bring your ideas to life.
  </p>

  {/* SOCIAL */}
  <div className="flex justify-center gap-6 text-xl mb-8">
    <a href="#" className="hover:text-purple-400">Instagram</a>
    <a href="#" className="hover:text-purple-400">LinkedIn</a>
    <a href="#" className="hover:text-purple-400">TikTok</a>
  </div>

  {/* CTA */}
  <a
    href="https://wa.me/6281997837794"
    className="bg-green-500 px-8 py-3 rounded-xl text-sm hover:scale-105 transition"
  >
    Chat via WhatsApp
  </a>

</section>
<footer className="py-10 text-center text-xs text-gray-500">
  Designed & Developed by nannsky
</footer>
    </main>
  );
}