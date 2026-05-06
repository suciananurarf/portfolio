"use client";

import { useState, useEffect, useRef } from "react";
import { Menu, X } from "lucide-react";
import { motion, useInView } from "framer-motion";
import Link from "next/link";
import data from "@/data/gallery.json";
import { FaInstagram, FaLinkedin, FaTiktok } from "react-icons/fa";
import {
  TbBrandAdobePhotoshop,
  TbBrandAdobeIllustrator,
  TbBrandAdobeIndesign,
  TbScissors,
  TbPalette,
} from "react-icons/tb";


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
  const years = useCounter(played ? 4 : 0);

  /* =========================
     🧭 MENU
  ========================== */
const menus = [
  { name: "Home", link: "#home" },
  { name: "About Me", link: "#about" },
  { name: "Works", link: "#gallery" },
  { name: "Journey", link: "#experience" },
  { name: "Toolkit", link: "#tools" },
  { name: "Contact", link: "#contact" },
];

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };


  return (
    
    <main className="bg-white text-black overflow-x-hidden">

      {/* 🔝 NAVBAR */}
      <nav className="fixed top-0 w-full z-50 bg-white/70 backdrop-blur border-b border-black/10">
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
<section
  id="home"
  className="relative min-h-screen flex items-center justify-center overflow-hidden px-5"
>

  {/* BACKGROUND GLOW */}
  <div className="absolute inset-0 overflow-hidden pointer-events-none">

    <div className="absolute top-[-120px] left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-purple-200/40 blur-[140px] rounded-full" />

    <div className="absolute bottom-[-200px] right-[-120px] w-[500px] h-[500px] bg-pink-200/30 blur-[140px] rounded-full" />

  </div>

  {/* GRID PATTERN */}
  <div
    className="absolute inset-0 opacity-[0.03]"
    style={{
      backgroundImage:
        "linear-gradient(to right, black 1px, transparent 1px), linear-gradient(to bottom, black 1px, transparent 1px)",
      backgroundSize: "60px 60px",
    }}
  />

  {/* CONTENT */}
  <div className="relative z-10 max-w-5xl mx-auto text-center">

    {/* LABEL */}
    <motion.p
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="text-xs md:text-sm tracking-[5px] text-purple-500 font-medium mb-6"
    >
      CREATIVE DESIGNER • VISUAL EDITOR
    </motion.p>

    {/* TITLE */}
    <motion.h1
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      className="text-5xl sm:text-6xl md:text-8xl font-black leading-[0.95] tracking-[-3px]"
    >

      Suciana Nur

      <span className="block mt-2 bg-gradient-to-r from-purple-500 via-pink-500 to-fuchsia-500 bg-clip-text text-transparent">
        Arifandy
      </span>

    </motion.h1>

    {/* SUBTITLE */}
    <motion.p
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="mt-8 text-gray-600 text-base md:text-lg max-w-2xl mx-auto leading-relaxed"
    >
      Turning ideas into visually impactful designs through
      branding, social media visuals, advertising content,
      and modern creative storytelling.
    </motion.p>

    {/* BUTTONS */}
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.9 }}
      className="mt-12 flex flex-wrap justify-center gap-4"
    >

      <a
        href="#gallery"
        className="px-8 py-4 rounded-2xl bg-black text-white text-sm font-medium hover:scale-105 transition-all shadow-xl"
      >
        View Portfolio
      </a>

      <a
        href="#contact"
        className="px-8 py-4 rounded-2xl border border-black/10 bg-white/70 backdrop-blur text-sm font-medium hover:bg-black hover:text-white transition-all"
      >
        Hire Me
      </a>

    </motion.div>

    {/* STATS */}
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.5 }}
      className="mt-20 flex justify-center gap-10 md:gap-20"
    >

      {[
        { num: "50+", label: "Projects" },
        { num: "30+", label: "Clients" },
        { num: "4+", label: "Years" },
      ].map((item, i) => (
        <div key={i}>

          <h3 className="text-2xl md:text-4xl font-bold">
            {item.num}
          </h3>

          <p className="text-gray-500 text-sm mt-1">
            {item.label}
          </p>

        </div>
      ))}

    </motion.div>

  </div>

  {/* SCROLL */}
  <div className="absolute bottom-10 left-1/2 -translate-x-1/2 text-gray-400 text-sm animate-bounce">
    Scroll ↓
  </div>

</section>

{/* 🙋 ABOUT */}
<section
  ref={ref}
  id="about"
  className="relative py-32 px-5 scroll-mt-24 overflow-hidden"
>

  {/* BACKGROUND LIGHT */}
  <div className="absolute inset-0 pointer-events-none">

    <div className="absolute top-20 left-[-120px] w-[320px] h-[320px] bg-purple-200/30 blur-[120px] rounded-full" />

    <div className="absolute bottom-0 right-[-100px] w-[260px] h-[260px] bg-pink-200/30 blur-[120px] rounded-full" />

  </div>

  <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-20 items-center relative z-10">

    {/* IMAGE SIDE */}
    <motion.div
      initial={{ opacity: 0, x: -60 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="relative"
    >

      {/* IMAGE */}
      <div className="relative overflow-hidden rounded-[36px]">

        <img
          src="/gallery/profil.jpg"
          className="w-full h-[450px] md:h-[650px] object-cover"
        />

        {/* OVERLAY */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />

      </div>

      {/* FLOAT CARD */}
      <div className="absolute -bottom-6 right-6 bg-white/90 backdrop-blur-xl border border-black/10 rounded-3xl px-6 py-5 shadow-2xl">

        <p className="text-xs uppercase tracking-[3px] text-gray-400 mb-1">
          Experience
        </p>

        <h3 className="text-2xl font-bold">
          4+ Years
        </h3>

      </div>

    </motion.div>

    {/* TEXT SIDE */}
    <motion.div
      initial={{ opacity: 0, x: 60 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >

      {/* SMALL LABEL */}
      <p className="text-sm tracking-[5px] text-purple-500 font-medium mb-5">
        ABOUT ME
      </p>

      {/* BIG TITLE */}
      <h2 className="text-4xl md:text-6xl font-black leading-[1.05] tracking-[-2px] mb-8">

        Designing
        <br />

        <span className="bg-gradient-to-r from-purple-500 via-pink-500 to-fuchsia-500 bg-clip-text text-transparent">
          Visual Experiences
        </span>

      </h2>

      {/* DESCRIPTION */}
      <div className="space-y-5 mb-10">

        <p className="text-gray-700 text-lg leading-relaxed">
          I’m Suciana Nur Arifandy, a visual designer passionate about
          transforming ideas into impactful and visually engaging experiences.
        </p>

        <p className="text-gray-500 leading-relaxed">
          With years of experience in branding, advertising,
          social media design, and creative production,
          I focus on creating modern visuals that help brands
          communicate more effectively and stand out in the digital space.
        </p>

        <div className="flex items-center gap-2 text-sm text-gray-400 pt-2">
          <span>📍</span>
          <span>Purworejo, 22 January 1997</span>
        </div>

      </div>

      {/* STATS */}
      <div className="grid grid-cols-3 gap-4">

        {[
          {
            value: `${projects}+`,
            label: "Projects",
          },
          {
            value: `${clients}+`,
            label: "Clients",
          },
          {
            value: `${years}+`,
            label: "Years",
          },
        ].map((item, i) => (
          <div
            key={i}
            className="group rounded-3xl border border-black/10 bg-white/70 backdrop-blur-xl p-6 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
          >

            <h3 className="text-3xl md:text-4xl font-black mb-2 bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
              {item.value}
            </h3>

            <p className="text-sm text-gray-500">
              {item.label}
            </p>

          </div>
        ))}

      </div>

    </motion.div>

  </div>

</section>

{/* 🎨 GALLERY */}
<section
  id="gallery"
  className="relative py-24 md:py-32 px-5 overflow-hidden"
>

  {/* BG GLOW */}
  <div className="absolute inset-0 pointer-events-none">

    <div className="absolute top-0 right-[-100px] w-[260px] md:w-[320px] h-[260px] md:h-[320px] bg-purple-200/30 blur-[120px] rounded-full" />

    <div className="absolute bottom-0 left-[-100px] w-[220px] md:w-[260px] h-[220px] md:h-[260px] bg-pink-200/20 blur-[120px] rounded-full" />

  </div>

  <div className="max-w-7xl mx-auto relative z-10">

    {/* HEADER */}
    <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12 md:mb-16">

      <div>

        <p className="text-xs md:text-sm tracking-[4px] md:tracking-[5px] text-purple-500 font-medium mb-3 md:mb-4">
          PORTFOLIO GALERI
        </p>

        <h2 className="text-3xl sm:text-4xl md:text-6xl font-black leading-[1.05] tracking-[-1px] md:tracking-[-2px]">

          Selected
          <br />

          <span className="bg-gradient-to-r from-purple-500 via-pink-500 to-fuchsia-500 bg-clip-text text-transparent">
            Creative Works
          </span>

        </h2>

      </div>

      <Link
        href="/gallery"
        className="group flex items-center gap-2 text-sm text-gray-600 hover:text-black transition"
      >

        <span>View All Projects</span>

        <span className="group-hover:translate-x-1 transition">
          →
        </span>

      </Link>

    </div>

    {/* GRID */}
<div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-5">

  {data.slice(0, 8).map((item, i) => {

    const featured = i === 0 || i === 5;

    return (
      <motion.div
        key={item.id}
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: i * 0.05 }}
        viewport={{ once: true }}
        className={`group relative overflow-hidden rounded-2xl md:rounded-[28px] cursor-pointer ${
          featured
            ? "col-span-2"
            : ""
        }`}
      >

        {/* IMAGE WRAPPER */}
        <div
          className={`relative overflow-hidden bg-neutral-100 ${
            featured
              ? "aspect-[16/10]"
              : "aspect-[4/3]"
          }`}
        >

          {/* IMAGE */}
          <img
            src={item.src}
            className="w-full h-full object-cover transition duration-700 group-hover:scale-105"
          />

          {/* OVERLAY */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent opacity-100 md:opacity-0 md:group-hover:opacity-100 transition duration-500" />

          {/* CONTENT */}
          <div className="absolute bottom-0 left-0 p-4 md:p-6 translate-y-0 md:translate-y-6 opacity-100 md:opacity-0 md:group-hover:translate-y-0 md:group-hover:opacity-100 transition duration-500">

            <p className="text-[10px] md:text-xs tracking-[2px] md:tracking-[3px] text-white/70 mb-1 md:mb-2">
              DESIGN PROJECT
            </p>

            <h3 className="text-white font-semibold text-sm md:text-lg">
              Creative Visual
            </h3>

          </div>

        </div>

      </motion.div>
    );
  })}

</div>

  </div>

</section>

{/* EXPERIENCE */}
<section
  id="experience"
  className="relative py-32 px-5 overflow-hidden"
>

  {/* BACKGROUND */}
  <div className="absolute inset-0 pointer-events-none">

    <div className="absolute top-0 left-[-100px] w-[300px] h-[300px] bg-purple-200/30 blur-[120px] rounded-full" />

    <div className="absolute bottom-0 right-[-120px] w-[260px] h-[260px] bg-pink-200/20 blur-[120px] rounded-full" />

  </div>

  <div className="max-w-6xl mx-auto relative z-10">

    {/* HEADER */}
    <div className="text-center mb-24">

      <p className="text-sm tracking-[5px] text-purple-500 font-medium mb-4">
        CAREER JOURNEY
      </p>

      <h2 className="text-4xl md:text-6xl font-black tracking-[-2px] leading-[1.05] mb-6">

        Professional
        <br />

        <span className="bg-gradient-to-r from-purple-500 via-pink-500 to-fuchsia-500 bg-clip-text text-transparent">
          Experience
        </span>

      </h2>

      <p className="max-w-2xl mx-auto text-gray-500 leading-relaxed">
        My professional journey in branding, visual communication,
        creative production, and digital design across multiple industries.
      </p>

    </div>

    {/* TIMELINE */}
    <div className="relative">

      {/* LINE */}
      <div className="absolute left-4 top-0 w-[2px] h-full bg-gradient-to-b from-purple-400 via-purple-200 to-transparent" />

      <div className="space-y-10">

        {[
          {
            role: "Staf Graphic Designer",
            company: "PT Chandra Karya Furniture",
            duration: "2021 — Present",
            desc: "Designed promotional campaigns, digital advertisements, social media visuals, and branding assets to strengthen company identity and customer engagement.",
            current: true,
          },
          {
            role: "Graphic Designer",
            company: "PT SQINPRO Kosmetika Industri",
            duration: "2021",
            desc: "Created packaging concepts, cosmetic branding visuals, and marketing materials aligned with product identity and target audience.",
          },
          {
            role: "Social Media Advertising",
            company: "Lynk Digital Agency",
            duration: "2018 — 2022",
            desc: "Managed social media advertising visuals, optimized engagement strategies, and developed creative content for multiple digital campaigns.",
          },
          {
            role: "Staf Produksi",
            company: "Prenadamedia Group",
            duration: "2017 — 2018",
            desc: "Handled publishing production workflows and maintained quality standards for printed media and editorial materials.",
          },
        ].map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            viewport={{ once: true }}
            className="relative pl-16"
          >

            {/* DOT */}
            <div className="absolute left-0 top-5">

              <div className="relative flex items-center justify-center w-8 h-8 rounded-full bg-white border border-purple-300 shadow-lg">

                <div className="w-3 h-3 rounded-full bg-gradient-to-r from-purple-500 to-pink-500" />

              </div>

            </div>

            {/* CARD */}
            <div className="group relative overflow-hidden rounded-[32px] border border-black/10 bg-white/70 backdrop-blur-xl p-8 transition-all duration-500 hover:shadow-2xl hover:-translate-y-1">

              {/* HOVER GLOW */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-br from-purple-100/40 to-pink-100/20 pointer-events-none" />

              <div className="relative z-10">

                {/* TOP */}
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-5 mb-6">

                  <div>

                    <div className="flex items-center gap-3 flex-wrap mb-2">

                      <h3 className="text-2xl font-bold tracking-[-0.5px]">
                        {item.role}
                      </h3>

                      {item.current && (
                        <span className="px-3 py-1 rounded-full text-[11px] font-medium bg-green-100 text-green-600 border border-green-200">
                          Current Position
                        </span>
                      )}

                    </div>

                    <p className="text-purple-500 font-medium">
                      {item.company}
                    </p>

                  </div>

                  <div className="text-sm text-gray-400 whitespace-nowrap">
                    {item.duration}
                  </div>

                </div>

                {/* DESCRIPTION */}
                <p className="text-gray-600 leading-relaxed">
                  {item.desc}
                </p>

              </div>

            </div>

          </motion.div>
        ))}

      </div>

    </div>

  </div>

</section>

{/* TOOLS */}
<section
  id="tools"
  className="relative py-32 px-5 overflow-hidden"
>

  {/* BACKGROUND GLOW */}
  <div className="absolute inset-0 pointer-events-none">

    <div className="absolute top-0 left-[-100px] w-[260px] h-[260px] bg-purple-200/30 blur-[120px] rounded-full" />

    <div className="absolute bottom-0 right-[-80px] w-[240px] h-[240px] bg-pink-200/20 blur-[120px] rounded-full" />

  </div>

  <div className="max-w-6xl mx-auto relative z-10">

    {/* HEADER */}
    <div className="text-center mb-20">

      <p className="text-sm tracking-[5px] text-purple-500 font-medium mb-4">
        SOFTWARE STACK
      </p>

      <h2 className="text-4xl md:text-6xl font-black tracking-[-2px] leading-[1.05] mb-6">

        Creative
        <br />

        <span className="bg-gradient-to-r from-purple-500 via-pink-500 to-fuchsia-500 bg-clip-text text-transparent">
          Tools & Software
        </span>

      </h2>

      <p className="max-w-2xl mx-auto text-gray-500 leading-relaxed">
        Professional creative tools I use for branding,
        digital campaigns, visual storytelling,
        and modern content creation.
      </p>

    </div>

    {/* GRID */}
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">

      {[
        {
          name: "Adobe Photoshop",
          icon: <TbBrandAdobePhotoshop />,
          glow: "from-cyan-400 to-blue-500",
          hover: "group-hover:text-cyan-500",
        },
        {
          name: "Adobe Illustrator",
          icon: <TbBrandAdobeIllustrator />,
          glow: "from-orange-400 to-yellow-500",
          hover: "group-hover:text-orange-500",
        },
        {
          name: "Adobe InDesign",
          icon: <TbBrandAdobeIndesign />,
          glow: "from-pink-400 to-rose-500",
          hover: "group-hover:text-pink-500",
        },
        {
          name: "Canva",
          icon: <TbPalette />,
          glow: "from-purple-400 to-fuchsia-500",
          hover: "group-hover:text-purple-500",
        },
        {
          name: "CapCut",
          icon: <TbScissors />,
          glow: "from-gray-300 to-gray-500",
          hover: "group-hover:text-black",
        },
      ].map((tool, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: i * 0.08 }}
          viewport={{ once: true }}
          className="group relative"
        >

          {/* CARD */}
          <div className="relative overflow-hidden rounded-[32px] border border-black/10 bg-white/70 backdrop-blur-xl p-8 h-full flex flex-col items-center justify-center transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl">

            {/* HOVER GLOW */}
            <div
              className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-br ${tool.glow} blur-3xl`}
            />

            {/* LIGHT OVERLAY */}
            <div className="absolute inset-0 bg-gradient-to-b from-white/40 to-transparent opacity-60" />

            {/* ICON */}
            <div
              className={`relative z-10 text-6xl mb-6 text-black transition-all duration-500 ${tool.hover} group-hover:scale-110`}
            >
              {tool.icon}
            </div>

            {/* NAME */}
            <p className="relative z-10 text-sm md:text-base font-semibold tracking-wide text-center">
              {tool.name}
            </p>

          </div>

        </motion.div>
      ))}

    </div>

  </div>

</section>

{/* ✨ CONTACT */}
<section
  id="contact"
  className="relative py-36 px-5 overflow-hidden"
>

  {/* BACKGROUND */}
  <div className="absolute inset-0 pointer-events-none">

    <div className="absolute top-[-120px] left-[-80px] w-[320px] h-[320px] bg-purple-200/30 blur-[140px] rounded-full" />

    <div className="absolute bottom-[-100px] right-[-80px] w-[300px] h-[300px] bg-pink-200/20 blur-[140px] rounded-full" />

  </div>

  <div className="max-w-5xl mx-auto relative z-10 text-center">

    {/* SMALL LABEL */}
    <p className="text-sm tracking-[5px] text-purple-500 font-medium mb-5">
      CONTACT & COLLABORATION
    </p>

    {/* TITLE */}
    <h2 className="text-4xl md:text-7xl font-black tracking-[-3px] leading-[1.05] mb-8">

      Let’s Create
      <br />

      <span className="bg-gradient-to-r from-purple-500 via-pink-500 to-fuchsia-500 bg-clip-text text-transparent">
        Something Amazing
      </span>

    </h2>

    {/* DESCRIPTION */}
    <p className="max-w-2xl mx-auto text-gray-500 leading-relaxed text-base md:text-lg mb-14">
      Open for freelance projects, collaborations,
      and creative opportunities. Let’s build visuals
      that communicate, inspire, and leave a lasting impact.
    </p>

    {/* SOCIAL */}
    <div className="flex justify-center gap-5 flex-wrap mb-16">

      {[
        {
          icon: <FaInstagram />,
          link: "https://www.instagram.com/sucianarfndy",
          color: "group-hover:text-pink-500",
          glow: "from-pink-400 via-purple-400 to-yellow-300",
          label: "Instagram",
        },
        {
          icon: <FaLinkedin />,
          link: "https://id.linkedin.com/in/suciana-nur-arifandy-983b39206",
          color: "group-hover:text-blue-500",
          glow: "from-blue-400 to-cyan-400",
          label: "LinkedIn",
        },
        {
          icon: <FaTiktok />,
          link: "https://www.tiktok.com/@winsskyt?_r=1&_t=ZS-966glriXRFY",
          color: "group-hover:text-black",
          glow: "from-gray-300 to-gray-500",
          label: "TikTok",
        },
      ].map((item, i) => (
        <motion.a
          key={i}
          href={item.link}
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: i * 0.08 }}
          viewport={{ once: true }}
          className="group relative"
        >

          <div className="relative overflow-hidden rounded-3xl border border-black/10 bg-white/70 backdrop-blur-xl px-8 py-6 flex flex-col items-center gap-3 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl">

            {/* GLOW */}
            <div
              className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-br ${item.glow} blur-3xl`}
            />

            {/* ICON */}
            <div
              className={`relative z-10 text-3xl transition-all duration-500 ${item.color}`}
            >
              {item.icon}
            </div>

            {/* TEXT */}
            <p className="relative z-10 text-sm font-medium">
              {item.label}
            </p>

          </div>

        </motion.a>
      ))}

    </div>

    {/* CTA BUTTON */}
    <motion.a
      href="https://wa.me/6281997837794"
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.98 }}
      className="inline-block group relative"
    >

      {/* BUTTON GLOW */}
      <div className="absolute inset-0 bg-gradient-to-r from-green-400 to-emerald-500 blur-3xl opacity-30 group-hover:opacity-60 transition rounded-full" />

      {/* BUTTON */}
      <div className="relative px-10 py-5 rounded-full bg-black text-white text-sm md:text-base font-semibold tracking-wide shadow-2xl">

        Start a Project →

      </div>

    </motion.a>

    {/* FOOT NOTE */}
    <div className="mt-20">

      <p className="text-sm text-gray-400">
        Available for freelance work & creative collaboration
      </p>

    </div>

  </div>

</section>

{/* FOOTER */}
<footer className="relative py-12 px-5 border-t border-black/5 overflow-hidden">

  {/* SOFT GLOW */}
  <div className="absolute inset-0 pointer-events-none">
    <div className="absolute left-1/2 -translate-x-1/2 top-0 w-[240px] h-[120px] bg-purple-200/20 blur-[80px] rounded-full" />
  </div>

  <div className="max-w-6xl mx-auto relative z-10 flex flex-col md:flex-row items-center justify-between gap-5">

    {/* LEFT */}
    <div className="text-center md:text-left">

      <h3 className="font-semibold tracking-wide">
        Suciana Nur Arifandy
      </h3>

      <p className="text-sm text-gray-500 mt-1">
        Visual Designer & Creative Editor
      </p>

    </div>

    {/* CENTER */}
    <div className="text-xs text-gray-400 text-center">
      © {new Date().getFullYear()} All Rights Reserved
    </div>

    {/* RIGHT */}
    <div className="text-sm text-gray-500">
      Crafted by{" "}
      <span className="font-medium bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
        nannsky
      </span>
    </div>

  </div>

</footer>

    </main>
  );
}
