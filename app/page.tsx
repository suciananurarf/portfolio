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
  const projects = useCounter(played ? 100 : 0);
  const clients = useCounter(played ? 25 : 0);
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

  // scroll to top
  const [scrollY, setScrollY] = useState(0);

useEffect(() => {
  const handleScroll = () => {
    setScrollY(window.scrollY);
  };

  window.addEventListener("scroll", handleScroll);

  return () =>
    window.removeEventListener("scroll", handleScroll);
}, []);


  return (
    
    <main className="bg-white text-black overflow-x-hidden">

{/* 🔝 NAVBAR */}
<nav
  className="
    fixed
    top-0
    left-0
    w-full
    z-50
    border-b
    border-black/5
    bg-white/70
    backdrop-blur-2xl
    overflow-hidden
  "
>

  {/* 🌈 NAV GLOW */}
  <div className="absolute inset-0 pointer-events-none overflow-hidden">

    {/* PURPLE */}
    <div className="absolute top-[-40px] left-[10%] w-[180px] h-[180px] bg-purple-300/20 blur-[80px] rounded-full animate-glowFloat" />

    {/* PINK */}
    <div
      className="absolute top-[-60px] right-[10%] w-[160px] h-[160px] bg-pink-300/20 blur-[80px] rounded-full animate-pulseGradient"
      style={{
        animationDelay: "2s",
      }}
    />

  </div>

  <div className="max-w-7xl mx-auto relative z-10 flex justify-between items-center px-5 md:px-8 py-4">

    {/* LOGO */}
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="relative"
    >

      {/* GLOW */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-400/20 via-pink-400/20 to-cyan-400/20 blur-xl rounded-full" />

      {/* TEXT */}
      <h1 className="relative text-sm md:text-base font-black tracking-wide bg-gradient-to-r from-purple-500 via-pink-500 to-cyan-500 bg-clip-text text-transparent">
        Suciana Nur Arifandy
      </h1>

    </motion.div>

    {/* DESKTOP MENU */}
    <div className="hidden md:flex items-center gap-2">

      {menus.map((m, i) => (
        <motion.a
          key={i}
          href={m.link}
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.4,
            delay: i * 0.05,
          }}
          className="
            group
            relative
            overflow-hidden
            px-5
            py-2.5
            rounded-full
            text-sm
            font-medium
            text-gray-600
            transition-all
            duration-300
            hover:text-black
          "
        >

          {/* HOVER BG */}
          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 rounded-full bg-gradient-to-r from-purple-200/40 via-pink-200/30 to-cyan-200/40 blur-xl" />

          {/* TEXT */}
          <span className="relative z-10">
            {m.name}
          </span>

        </motion.a>
      ))}

    </div>

    {/* MOBILE BUTTON */}
    <motion.button
      whileTap={{ scale: 0.92 }}
      onClick={() => setOpen(!open)}
      className="
        md:hidden
        relative
        z-50
        w-11
        h-11
        rounded-full
        border
        border-black/10
        bg-white/80
        backdrop-blur-xl
        flex
        items-center
        justify-center
        shadow-lg
      "
    >

      {/* GLOW */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-300/20 via-pink-300/20 to-cyan-300/20 blur-xl rounded-full" />

      {/* ICON */}
      <div className="relative z-10">
        {open ? <X size={20} /> : <Menu size={20} />}
      </div>

    </motion.button>

  </div>

</nav>

{/* 📱 MOBILE MENU */}
<div
  className={`
    fixed
    inset-0
    z-40
    flex
    flex-col
    items-center
    justify-center
    gap-6
    bg-white/80
    backdrop-blur-3xl
    transition-all
    duration-500
    overflow-hidden
    ${
      open
        ? "opacity-100 visible"
        : "opacity-0 invisible"
    }
  `}
>

  {/* BACKGROUND */}
  <div className="absolute inset-0 overflow-hidden pointer-events-none">

    {/* PURPLE */}
    <div className="absolute top-[-100px] left-[-100px] w-[280px] h-[280px] bg-purple-300/30 blur-[120px] rounded-full animate-glowFloat" />

    {/* PINK */}
    <div
      className="absolute bottom-[-100px] right-[-100px] w-[260px] h-[260px] bg-pink-300/30 blur-[120px] rounded-full animate-pulseGradient"
      style={{
        animationDelay: "2s",
      }}
    />

    {/* CYAN */}
    <div
      className="absolute top-1/2 left-1/2 -translate-x-1/2 w-[220px] h-[220px] bg-cyan-200/20 blur-[120px] rounded-full animate-glowFloat"
      style={{
        animationDelay: "4s",
      }}
    />

  </div>

  {/* MENU ITEMS */}
  {menus.map((m, i) => (
    <motion.a
      key={i}
      href={m.link}
      initial={{ opacity: 0, y: 20 }}
      animate={{
        opacity: open ? 1 : 0,
        y: open ? 0 : 20,
      }}
      transition={{
        delay: i * 0.05,
      }}
      onClick={() => setOpen(false)}
      className="
        group
        relative
        text-2xl
        md:text-3xl
        font-black
        tracking-wide
        text-gray-700
        transition-all
        duration-300
        hover:scale-110
      "
    >

      {/* GLOW */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 blur-xl bg-gradient-to-r from-purple-300/20 via-pink-300/20 to-cyan-300/20" />

      {/* TEXT */}
      <span className="relative z-10 group-hover:bg-gradient-to-r group-hover:from-purple-500 group-hover:via-pink-500 group-hover:to-cyan-500 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">
        {m.name}
      </span>

    </motion.a>
  ))}

</div>

{/* 🚀 HERO */}
<section
  id="home"
  className="
    relative
    min-h-screen
    overflow-hidden
    flex
    items-center
    justify-center
    px-5
    pt-28
    bg-[#faf7ff]
  "
>

  {/* 🌈 COLORFUL BACKGROUND */}
  <div className="absolute inset-0 overflow-hidden pointer-events-none">

    {/* PURPLE */}
    <div className="
      absolute
      top-[-220px]
      left-1/2
      -translate-x-1/2
      w-[900px]
      h-[900px]
      rounded-full
      bg-gradient-to-br
      from-violet-300/40
      via-fuchsia-300/30
      to-pink-300/20
      blur-[180px]
      animate-pulseGradient
    " />

    {/* CYAN */}
    <div
      className="
        absolute
        left-[-180px]
        top-[20%]
        w-[420px]
        h-[420px]
        rounded-full
        bg-cyan-300/30
        blur-[140px]
        animate-glowFloat
      "
    />

    {/* PINK */}
    <div
      className="
        absolute
        right-[-180px]
        bottom-[10%]
        w-[420px]
        h-[420px]
        rounded-full
        bg-pink-300/30
        blur-[140px]
        animate-glowFloat
      "
      style={{
        animationDelay: "3s",
      }}
    />

    {/* BLUE */}
    <div
      className="
        absolute
        left-[20%]
        bottom-[-100px]
        w-[260px]
        h-[260px]
        rounded-full
        bg-sky-300/20
        blur-[120px]
        animate-pulseGradient
      "
      style={{
        animationDelay: "4s",
      }}
    />

    {/* ORANGE */}
    <div
      className="
        absolute
        right-[15%]
        top-[10%]
        w-[220px]
        h-[220px]
        rounded-full
        bg-orange-200/20
        blur-[100px]
        animate-glowFloat
      "
      style={{
        animationDelay: "5s",
      }}
    />

  </div>

  {/* GRID */}
  <div
    className="absolute inset-0 opacity-[0.03]"
    style={{
      backgroundImage:
        "linear-gradient(to right, black 1px, transparent 1px), linear-gradient(to bottom, black 1px, transparent 1px)",
      backgroundSize: "70px 70px",
    }}
  />

  {/* CONTENT */}
  <div className="relative z-10 max-w-7xl mx-auto text-center">

    {/* BADGE */}
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="mb-10 flex justify-center"
    >

      <div className="
        relative
        overflow-hidden
        rounded-full
        border
        border-white/50
        bg-white/60
        backdrop-blur-2xl
        px-6
        py-3
        shadow-xl
        animate-floatingSlow
      ">

        {/* GLOW */}
        <div className="
          absolute
          inset-0
          bg-gradient-to-r
          from-violet-300/20
          via-pink-300/20
          to-cyan-300/20
          blur-2xl
          animate-pulseGradient
        " />

        <div className="relative z-10 flex items-center gap-3">

          <div className="flex gap-1">

            <span className="w-2 h-2 rounded-full bg-violet-400 animate-pulse" />

            <span
              className="w-2 h-2 rounded-full bg-pink-400 animate-pulse"
              style={{
                animationDelay: "0.3s",
              }}
            />

            <span
              className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"
              style={{
                animationDelay: "0.6s",
              }}
            />

          </div>

          <span className="text-xs md:text-sm tracking-[4px] font-medium text-gray-700">
            CREATIVE DESIGNER • VISUAL STORYTELLER
          </span>

        </div>

      </div>

    </motion.div>

    {/* TITLE */}
    <motion.h1
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.9 }}
      className="
        text-6xl
        sm:text-7xl
        md:text-[120px]
        lg:text-[150px]
        font-black
        leading-[0.88]
        tracking-[-6px]
      "
    >

      <span className="block text-[#1a1a1a]">
        Suciana
      </span>

      <span className="
        block
        mt-2
        bg-gradient-to-r
        from-violet-500
        via-pink-500
        to-cyan-500
        bg-clip-text
        text-transparent
      ">
        Nur Arifandy
      </span>

    </motion.h1>

    {/* LINE */}
    <motion.div
      initial={{ width: 0 }}
      animate={{ width: "160px" }}
      transition={{
        duration: 1,
        delay: 0.5,
      }}
      className="
        h-[3px]
        mx-auto
        mt-10
        rounded-full
        bg-gradient-to-r
        from-violet-400
        via-pink-400
        to-cyan-400
      "
    />

    {/* DESC */}
    <motion.p
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      className="
        mt-10
        max-w-3xl
        mx-auto
        text-base
        md:text-xl
        leading-relaxed
        text-gray-600
      "
    >
      Creating emotionally engaging visuals through
      branding, social media design, advertising campaigns,
      and modern digital storytelling.
    </motion.p>

    {/* BUTTONS */}
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 1,
        delay: 0.2,
      }}
      className="
        mt-14
        flex
        flex-wrap
        justify-center
        gap-5
      "
    >

      {/* PRIMARY */}
      <a
        href="#about"
        className="
          group
          relative
          overflow-hidden
          rounded-full
          px-10
          py-5
          bg-gradient-to-r
          from-violet-500
          via-pink-500
          to-cyan-500
          text-white
          font-semibold
          text-sm
          md:text-base
          shadow-2xl
          transition-all
          duration-500
          hover:scale-[1.03]
          hover:-translate-y-1
        "
      >

        <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition duration-500" />

        <span className="relative z-10 flex items-center gap-3">

          Explore

          <span className="group-hover:translate-x-1 transition">
            →
          </span>

        </span>

      </a>

      {/* SECONDARY */}
      <a
        href="#contact"
        className="
          group
          relative
          overflow-hidden
          rounded-full
          border
          border-white/50
          bg-white/60
          backdrop-blur-2xl
          px-10
          py-5
          text-sm
          md:text-base
          font-semibold
          text-gray-700
          transition-all
          duration-500
          hover:-translate-y-1
          hover:shadow-2xl
        "
      >

        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-r from-violet-300/20 via-pink-300/20 to-cyan-300/20 blur-2xl" />

        <span className="relative z-10 flex items-center gap-3">

          Let’s Work Together

          <span className="group-hover:translate-x-1 transition">
            ↗
          </span>

        </span>

      </a>

    </motion.div>

  </div>

</section>

{/* 🙋 ABOUT */}
<section
  ref={ref}
  id="about"
  className="relative py-28 md:py-36 px-5 scroll-mt-24 overflow-hidden"
>

  {/* 🌈 ANIMATED BACKGROUND */}
  <div className="absolute inset-0 overflow-hidden pointer-events-none">

    {/* PURPLE */}
    <div
      className="absolute top-10 left-[-120px] w-[320px] h-[320px] bg-purple-300/40 blur-[120px] rounded-full animate-glowFloat"
    />

    {/* PINK */}
    <div
      className="absolute bottom-0 right-[-100px] w-[260px] h-[260px] bg-pink-300/40 blur-[120px] rounded-full animate-pulseGradient"
      style={{
        animationDelay: "2s",
      }}
    />

    {/* BLUE */}
    <div
      className="absolute top-1/2 left-1/2 -translate-x-1/2 w-[240px] h-[240px] bg-cyan-200/30 blur-[120px] rounded-full animate-glowFloat"
      style={{
        animationDelay: "4s",
      }}
    />

  </div>

  <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-16 md:gap-20 items-center relative z-10">

    {/* IMAGE SIDE */}
    <motion.div
      initial={{ opacity: 0, x: -60 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="relative"
    >

      {/* GLOW */}
      <div className="absolute -inset-10 bg-gradient-to-r from-purple-300/20 via-pink-300/20 to-cyan-300/20 blur-3xl rounded-full animate-pulseGradient" />

      {/* IMAGE WRAPPER */}
      <div className="relative overflow-hidden rounded-[36px] animate-floatingSlow shadow-2xl">

        {/* IMAGE */}
        <img
          src="/gallery/profil.jpg"
          className="w-full h-[420px] md:h-[650px] object-cover scale-[1.01]"
        />

        {/* OVERLAY */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />

      </div>

      {/* EXPERIENCE CARD */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        viewport={{ once: true }}
        className="
          absolute
          -bottom-6
          right-4
          md:right-6
          overflow-hidden
          rounded-[28px]
          border
          border-white/30
          backdrop-blur-2xl
          px-6
          py-5
          shadow-2xl
          bg-white/70
          animate-floatingSlow
        "
      >

        {/* MOVING GLOW */}
        <div className="absolute inset-0 bg-gradient-to-br from-purple-400/30 via-pink-400/20 to-cyan-300/30 blur-2xl animate-glowFloat" />

        {/* LIGHT */}
        <div className="absolute inset-[1px] rounded-[27px] bg-white/80 backdrop-blur-2xl" />

        {/* CONTENT */}
        <div className="relative z-10">

          <p className="text-[10px] uppercase tracking-[4px] text-gray-500 mb-2">
            Experience
          </p>

          <h3 className="text-3xl font-black bg-gradient-to-r from-purple-500 via-pink-500 to-cyan-500 bg-clip-text text-transparent">
            4+ Years
          </h3>

          <div className="mt-2 flex gap-1">

            <span className="w-2 h-2 rounded-full bg-purple-400 animate-pulse" />
            <span
              className="w-2 h-2 rounded-full bg-pink-400 animate-pulse"
              style={{ animationDelay: "0.3s" }}
            />
            <span
              className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"
              style={{ animationDelay: "0.6s" }}
            />

          </div>

        </div>

      </motion.div>

    </motion.div>

    {/* TEXT SIDE */}
    <motion.div
      initial={{ opacity: 0, x: 60 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >

      {/* LABEL */}
      <p className="text-sm tracking-[5px] text-purple-500 font-medium mb-5">
        ABOUT ME
      </p>

      {/* TITLE */}
      <h2 className="text-4xl md:text-6xl font-black leading-[1.02] tracking-[-2px] mb-8">

        Designing
        <br />

        <span className="bg-gradient-to-r from-purple-500 via-pink-500 to-cyan-500 bg-clip-text text-transparent">
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
            style={{
              animationDelay: `${i * 0.4}s`,
            }}
            className="
              group
              relative
              overflow-hidden
              rounded-[28px]
              border
              border-black/10
              bg-white/70
              backdrop-blur-xl
              p-6
              transition-all
              duration-500
              hover:-translate-y-2
              hover:shadow-2xl
              animate-floatingSlow
            "
          >

            {/* GLOW */}
            <div className="absolute inset-0 bg-gradient-to-br from-purple-300/20 via-pink-300/10 to-cyan-300/20 opacity-70 blur-2xl animate-pulseGradient" />

            {/* CONTENT */}
            <div className="relative z-10">

              <h3 className="text-3xl md:text-4xl font-black mb-2 bg-gradient-to-r from-purple-500 via-pink-500 to-cyan-500 bg-clip-text text-transparent">
                {item.value}
              </h3>

              <p className="text-sm text-gray-500">
                {item.label}
              </p>

            </div>

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
  className="
    group
    relative
    inline-flex
    items-center
    gap-3
    overflow-hidden
    rounded-full
    border
    border-white/40
    bg-white/70
    backdrop-blur-2xl
    px-6
    py-3
    text-sm
    font-semibold
    text-gray-700
    shadow-lg
    transition-all
    duration-500
    hover:-translate-y-1
    hover:shadow-2xl
  "
>

  {/* GLOW */}
  <div className="
    absolute
    inset-0
    opacity-0
    group-hover:opacity-100
    transition
    duration-500
    bg-gradient-to-r
    from-purple-300/20
    via-pink-300/20
    to-cyan-300/20
    blur-2xl
  " />

  {/* SHINE */}
  <div className="
    absolute
    top-0
    left-[-120%]
    w-[80%]
    h-full
    bg-gradient-to-r
    from-transparent
    via-white/40
    to-transparent
    rotate-12
    group-hover:left-[140%]
    transition-all
    duration-1000
  " />

  {/* TEXT */}
  <span className="relative z-10">
    View All Projects
  </span>

  {/* ICON */}
  <div className="
    relative
    z-10
    w-7
    h-7
    rounded-full
    bg-gradient-to-r
    from-purple-500
    via-pink-500
    to-cyan-500
    flex
    items-center
    justify-center
    text-white
    text-xs
    transition-all
    duration-300
    group-hover:translate-x-1
    group-hover:scale-110
  ">
    →
  </div>

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

{/* 🚀 EXPERIENCE */}
<section
  id="experience"
  className="relative py-32 md:py-40 px-5 overflow-hidden"
>

  {/* 🌈 BACKGROUND AMBIENT */}
  <div className="absolute inset-0 pointer-events-none overflow-hidden">

    {/* PURPLE */}
    <div className="absolute top-10 left-[-120px] w-[320px] h-[320px] bg-purple-300/30 blur-[120px] rounded-full animate-glowFloat" />

    {/* PINK */}
    <div
      className="absolute bottom-0 right-[-120px] w-[280px] h-[280px] bg-pink-300/30 blur-[120px] rounded-full animate-pulseGradient"
      style={{
        animationDelay: "2s",
      }}
    />

    {/* CYAN */}
    <div
      className="absolute top-1/2 left-1/2 -translate-x-1/2 w-[220px] h-[220px] bg-cyan-200/20 blur-[120px] rounded-full animate-glowFloat"
      style={{
        animationDelay: "4s",
      }}
    />

  </div>

  <div className="max-w-6xl mx-auto relative z-10">

    {/* HEADER */}
    <div className="text-center mb-20 md:mb-24">

      {/* LABEL */}
      <p className="text-xs md:text-sm tracking-[5px] text-purple-500 font-medium mb-5">
        CAREER JOURNEY
      </p>

      {/* TITLE */}
      <h2 className="text-4xl md:text-7xl font-black tracking-[-2px] leading-[1.02] mb-6">

        Professional
        <br />

        <span className="bg-gradient-to-r from-purple-500 via-pink-500 to-cyan-500 bg-clip-text text-transparent">
          Experience
        </span>

      </h2>

      {/* DESC */}
      <p className="max-w-2xl mx-auto text-gray-500 leading-relaxed text-base md:text-lg">
        A journey through branding, visual communication,
        advertising, creative production, and modern digital design.
      </p>

    </div>

    {/* TIMELINE */}
    <div className="relative">

      {/* LINE */}
      <div className="absolute left-[15px] md:left-1/2 md:-translate-x-1/2 top-0 w-[2px] h-full bg-gradient-to-b from-purple-400/60 via-pink-400/20 to-transparent" />

      <div className="space-y-12 md:space-y-20">

        {[
          {
            role: "Staf Graphic Designer",
            company: "PT Chandra Karya Furniture",
            duration: "2021 — Present",
            desc: "Designed marketing visuals, banners, promotional campaigns, social media content, and branding assets for furniture & retail campaigns.",
            current: true,
          },
          {
            role: "Graphic Designer",
            company: "PT SQINPRO Kosmetika Industri",
            duration: "2021",
            desc: "Created packaging concepts, cosmetic branding visuals, and promotional materials aligned with modern beauty industry trends.",
          },
          {
            role: "Social Media Advertising",
            company: "Lynk Digital Agency",
            duration: "2018 — 2022",
            desc: "Managed advertising visuals, campaign creatives, and social media engagement strategies for multiple brands and clients.",
          },
          {
            role: "Staf Produksi",
            company: "Prenadamedia Group",
            duration: "2017 — 2018",
            desc: "Handled production workflows and quality control for printed publication materials and publishing assets.",
          },
        ].map((item, i) => {

          const left = i % 2 === 0;

          return (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.7,
                delay: i * 0.08,
              }}
              viewport={{ once: true }}
              className={`
                relative
                flex
                ${left ? "md:justify-start" : "md:justify-end"}
              `}
            >

              {/* DOT */}
              <div className="absolute left-[15px] md:left-1/2 md:-translate-x-1/2 top-10 z-20">

                <div className="relative flex items-center justify-center">

                  {/* OUTER GLOW */}
                  <div className="absolute w-10 h-10 rounded-full bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 blur-xl opacity-50 animate-pulseGradient" />

                  {/* MAIN */}
                  <div className="relative w-8 h-8 rounded-full bg-white border border-white/50 flex items-center justify-center shadow-xl">

                    <div className="w-3 h-3 rounded-full bg-gradient-to-r from-purple-500 via-pink-500 to-cyan-500 animate-pulse" />

                  </div>

                </div>

              </div>

              {/* CARD */}
              <div
                style={{
                  animationDelay: `${i * 0.5}s`,
                }}
                className={`
                  group
                  relative
                  ml-14
                  md:ml-0
                  w-full
                  md:w-[46%]
                  overflow-hidden
                  rounded-[32px]
                  border
                  border-black/10
                  bg-white/70
                  backdrop-blur-2xl
                  p-7
                  md:p-8
                  transition-all
                  duration-500
                  hover:-translate-y-2
                  hover:shadow-2xl
                  animate-floatingSlow
                `}
              >

                {/* GLOW */}
                <div className="absolute inset-0 bg-gradient-to-br from-purple-300/20 via-pink-300/10 to-cyan-300/20 opacity-60 blur-3xl group-hover:opacity-100 transition duration-700" />

                {/* SHINE */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-700">

                  <div className="absolute top-0 left-[-120%] w-[80%] h-full bg-gradient-to-r from-transparent via-white/40 to-transparent rotate-12 group-hover:left-[140%] transition-all duration-1000" />

                </div>

                {/* CONTENT */}
                <div className="relative z-10">

                  {/* TOP */}
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-5">

                    <div>

                      {/* ROLE */}
                      <div className="flex flex-wrap items-center gap-2 mb-2">

                        <h3 className="text-xl md:text-2xl font-bold leading-tight">
                          {item.role}
                        </h3>

                        {item.current && (
                          <span className="px-3 py-1 rounded-full text-[10px] font-semibold tracking-[2px] uppercase bg-gradient-to-r from-green-400 to-emerald-500 text-white shadow-lg shadow-green-400/30 animate-pulse">
                            Current
                          </span>
                        )}

                      </div>

                      {/* COMPANY */}
                      <p className="text-sm text-purple-500 font-medium">
                        {item.company}
                      </p>

                    </div>

                    {/* DURATION */}
                    <div className="text-xs tracking-[2px] uppercase text-gray-400 whitespace-nowrap">
                      {item.duration}
                    </div>

                  </div>

                  {/* DESC */}
                  <p className="text-gray-500 leading-relaxed text-sm md:text-base">
                    {item.desc}
                  </p>

                </div>

              </div>

            </motion.div>
          );
        })}

      </div>

    </div>

  </div>

</section>

{/* 🛠 TOOLS */}
<section
  id="tools"
  className="relative py-32 md:py-40 px-5 overflow-hidden"
>

  {/* 🌈 AMBIENT BACKGROUND */}
  <div className="absolute inset-0 pointer-events-none overflow-hidden">

    {/* PURPLE */}
    <div className="absolute top-0 left-[-120px] w-[320px] h-[320px] bg-purple-300/30 blur-[120px] rounded-full animate-glowFloat" />

    {/* PINK */}
    <div
      className="absolute bottom-0 right-[-120px] w-[280px] h-[280px] bg-pink-300/30 blur-[120px] rounded-full animate-pulseGradient"
      style={{
        animationDelay: "2s",
      }}
    />

    {/* CYAN */}
    <div
      className="absolute top-1/2 left-1/2 -translate-x-1/2 w-[240px] h-[240px] bg-cyan-200/20 blur-[120px] rounded-full animate-glowFloat"
      style={{
        animationDelay: "4s",
      }}
    />

  </div>

  <div className="max-w-7xl mx-auto relative z-10">

    {/* HEADER */}
    <div className="text-center mb-20 md:mb-24">

      {/* LABEL */}
      <p className="text-xs md:text-sm tracking-[5px] text-purple-500 font-medium mb-5">
        SOFTWARE STACK
      </p>

      {/* TITLE */}
      <h2 className="text-4xl md:text-7xl font-black tracking-[-2px] leading-[1.02] mb-6">

        Creative
        <br />

        <span className="bg-gradient-to-r from-purple-500 via-pink-500 to-cyan-500 bg-clip-text text-transparent">
          Tools & Software
        </span>

      </h2>

      {/* DESC */}
      <p className="max-w-2xl mx-auto text-gray-500 leading-relaxed text-base md:text-lg">
        Professional tools I use to create branding,
        digital campaigns, social media visuals,
        and modern visual experiences.
      </p>

    </div>

    {/* GRID */}
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5 md:gap-7">

      {[
        {
          name: "Adobe Photoshop",
          icon: <TbBrandAdobePhotoshop />,
          glow: "from-cyan-400 via-blue-400 to-sky-500",
          text: "group-hover:text-cyan-500",
        },
        {
          name: "Adobe Illustrator",
          icon: <TbBrandAdobeIllustrator />,
          glow: "from-orange-400 via-amber-400 to-yellow-500",
          text: "group-hover:text-orange-500",
        },
        {
          name: "Adobe InDesign",
          icon: <TbBrandAdobeIndesign />,
          glow: "from-pink-400 via-rose-400 to-fuchsia-500",
          text: "group-hover:text-pink-500",
        },
        {
          name: "Canva",
          icon: <TbPalette />,
          glow: "from-violet-400 via-purple-400 to-fuchsia-500",
          text: "group-hover:text-purple-500",
        },
        {
          name: "CapCut",
          icon: <TbScissors />,
          glow: "from-gray-300 via-gray-400 to-gray-500",
          text: "group-hover:text-black",
        },
      ].map((tool, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.6,
            delay: i * 0.08,
          }}
          viewport={{ once: true }}
          className="group relative"
        >

          {/* CARD */}
          <div
            style={{
              animationDelay: `${i * 0.4}s`,
            }}
            className="
              relative
              overflow-hidden
              rounded-[32px]
              border
              border-black/10
              bg-white/70
              backdrop-blur-2xl
              p-7
              md:p-8
              h-full
              flex
              flex-col
              items-center
              justify-center
              transition-all
              duration-500
              hover:-translate-y-3
              hover:shadow-2xl
              animate-floatingSlow
            "
          >

            {/* MOVING GLOW */}
            <div
              className={`
                absolute
                inset-0
                opacity-70
                blur-3xl
                bg-gradient-to-br
                ${tool.glow}
                animate-glowMove
              `}
            />

            {/* SHINE */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-700">

              <div className="absolute top-0 left-[-120%] w-[80%] h-full bg-gradient-to-r from-transparent via-white/40 to-transparent rotate-12 group-hover:left-[140%] transition-all duration-1000" />

            </div>

            {/* GLASS LAYER */}
            <div className="absolute inset-[1px] rounded-[31px] bg-white/80 backdrop-blur-2xl" />

            {/* PULSE ORB */}
            <div
              className={`
                absolute
                w-28
                h-28
                rounded-full
                opacity-30
                blur-2xl
                bg-gradient-to-br
                ${tool.glow}
                animate-pulseGradient
              `}
            />

            {/* ICON */}
            <div
              className={`
                relative
                z-10
                text-5xl
                md:text-6xl
                mb-5
                text-black
                transition-all
                duration-500
                ${tool.text}
                group-hover:scale-125
                group-hover:rotate-6
              `}
            >
              {tool.icon}
            </div>

            {/* NAME */}
            <p className="relative z-10 text-sm md:text-base font-semibold text-center leading-tight">
              {tool.name}
            </p>

            {/* MINI DOTS */}
            <div className="relative z-10 flex gap-1 mt-4">

              <span className="w-1.5 h-1.5 rounded-full bg-purple-400 animate-pulse" />

              <span
                className="w-1.5 h-1.5 rounded-full bg-pink-400 animate-pulse"
                style={{
                  animationDelay: "0.3s",
                }}
              />

              <span
                className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse"
                style={{
                  animationDelay: "0.6s",
                }}
              />

            </div>

          </div>

        </motion.div>
      ))}

    </div>

  </div>

</section>

{/* ✨ CONTACT */}
<section
  id="contact"
  className="relative py-36 md:py-44 px-5 overflow-hidden"
>

  {/* 🌈 AMBIENT BACKGROUND */}
  <div className="absolute inset-0 pointer-events-none overflow-hidden">

    {/* PURPLE */}
    <div className="absolute top-[-120px] left-[-100px] w-[340px] h-[340px] bg-purple-300/30 blur-[140px] rounded-full animate-glowFloat" />

    {/* PINK */}
    <div
      className="absolute bottom-[-120px] right-[-100px] w-[320px] h-[320px] bg-pink-300/30 blur-[140px] rounded-full animate-pulseGradient"
      style={{
        animationDelay: "2s",
      }}
    />

    {/* CYAN */}
    <div
      className="absolute top-1/2 left-1/2 -translate-x-1/2 w-[240px] h-[240px] bg-cyan-200/20 blur-[140px] rounded-full animate-glowFloat"
      style={{
        animationDelay: "4s",
      }}
    />

  </div>

  <div className="max-w-5xl mx-auto relative z-10 text-center">

    {/* LABEL */}
    <motion.p
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="text-xs md:text-sm tracking-[5px] text-purple-500 font-medium mb-5"
    >
      CONTACT & COLLABORATION
    </motion.p>

    {/* TITLE */}
    <motion.h2
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      viewport={{ once: true }}
      className="text-4xl md:text-7xl font-black tracking-[-3px] leading-[1.02] mb-8"
    >

      Let’s Create
      <br />

      <span className="bg-gradient-to-r from-purple-500 via-pink-500 to-cyan-500 bg-clip-text text-transparent animate-pulseGradient">
        Something Amazing
      </span>

    </motion.h2>

    {/* DESCRIPTION */}
    <motion.p
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, delay: 0.1 }}
      viewport={{ once: true }}
      className="max-w-2xl mx-auto text-gray-500 leading-relaxed text-base md:text-lg mb-16"
    >
      Open for freelance projects, collaborations,
      and creative opportunities. Let’s build visuals
      that communicate, inspire, and leave a lasting impact.
    </motion.p>

    {/* SOCIAL CARDS */}
    <div className="flex justify-center gap-5 flex-wrap mb-20">

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
          glow: "from-blue-400 via-cyan-400 to-sky-400",
          label: "LinkedIn",
        },
        {
          icon: <FaTiktok />,
          link: "https://www.tiktok.com/@winsskyt?_r=1&_t=ZS-966glriXRFY",
          color: "group-hover:text-black",
          glow: "from-gray-300 via-gray-400 to-gray-500",
          label: "TikTok",
        },
      ].map((item, i) => (
        <motion.a
          key={i}
          href={item.link}
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.6,
            delay: i * 0.08,
          }}
          viewport={{ once: true }}
          className="group relative"
        >

          {/* CARD */}
          <div
            style={{
              animationDelay: `${i * 0.4}s`,
            }}
            className="
              relative
              overflow-hidden
              rounded-[32px]
              border
              border-black/10
              bg-white/70
              backdrop-blur-2xl
              px-8
              py-7
              min-w-[140px]
              flex
              flex-col
              items-center
              gap-4
              transition-all
              duration-500
              hover:-translate-y-3
              hover:shadow-2xl
              animate-floatingSlow
            "
          >

            {/* GLOW */}
            <div
              className={`
                absolute
                inset-0
                opacity-70
                blur-3xl
                bg-gradient-to-br
                ${item.glow}
                animate-glowMove
              `}
            />

            {/* GLASS */}
            <div className="absolute inset-[1px] rounded-[31px] bg-white/80 backdrop-blur-2xl" />

            {/* SHINE */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-700">

              <div className="absolute top-0 left-[-120%] w-[80%] h-full bg-gradient-to-r from-transparent via-white/40 to-transparent rotate-12 group-hover:left-[140%] transition-all duration-1000" />

            </div>

            {/* ICON */}
            <div
              className={`
                relative
                z-10
                text-4xl
                transition-all
                duration-500
                ${item.color}
                group-hover:scale-125
                group-hover:rotate-6
              `}
            >
              {item.icon}
            </div>

            {/* TEXT */}
            <p className="relative z-10 text-sm font-semibold">
              {item.label}
            </p>

            {/* MINI DOTS */}
            <div className="relative z-10 flex gap-1">

              <span className="w-1.5 h-1.5 rounded-full bg-purple-400 animate-pulse" />

              <span
                className="w-1.5 h-1.5 rounded-full bg-pink-400 animate-pulse"
                style={{
                  animationDelay: "0.3s",
                }}
              />

              <span
                className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse"
                style={{
                  animationDelay: "0.6s",
                }}
              />

            </div>

          </div>

        </motion.a>
      ))}

    </div>

    {/* CTA */}
    <motion.a
      href="https://wa.me/6281997837794"
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      viewport={{ once: true }}
      whileHover={{ scale: 1.04 }}
      whileTap={{ scale: 0.98 }}
      className="inline-block group relative"
    >

      {/* GLOW */}
      <div className="absolute inset-0 bg-gradient-to-r from-green-400 via-emerald-400 to-cyan-400 blur-3xl opacity-40 group-hover:opacity-70 transition duration-500 rounded-full animate-pulseGradient" />

      {/* BUTTON */}
      <div className="relative overflow-hidden rounded-full bg-black text-white px-10 md:px-14 py-5 text-sm md:text-base font-semibold tracking-wide shadow-2xl">

        {/* SHINE */}
        <div className="absolute top-0 left-[-120%] w-[80%] h-full bg-gradient-to-r from-transparent via-white/20 to-transparent rotate-12 group-hover:left-[140%] transition-all duration-1000" />

        <span className="relative z-10 flex items-center gap-3">

          Start a Project

          <span className="group-hover:translate-x-1 transition">
            →
          </span>

        </span>

      </div>

    </motion.a>

    {/* FOOT NOTE */}
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ delay: 0.4 }}
      viewport={{ once: true }}
      className="mt-20"
    >

      <p className="text-sm text-gray-400">
        Available for freelance work & creative collaboration
      </p>

    </motion.div>

  </div>

</section>

{/* 🔝 BACK TO TOP */}
<motion.button
  initial={{ opacity: 0, scale: 0.8 }}
  animate={{ opacity: scrollY > 300 ? 1 : 0 }}
  transition={{ duration: 0.3 }}
  onClick={() =>
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }
  className="
    fixed
    bottom-6
    right-6
    z-50
    group
    w-14
    h-14
    rounded-full
    border
    border-white/40
    bg-white/70
    backdrop-blur-2xl
    shadow-2xl
    flex
    items-center
    justify-center
    overflow-hidden
    transition-all
    duration-500
    hover:-translate-y-1
    hover:scale-105
  "
>

  {/* GLOW */}
  <div className="
    absolute
    inset-0
    opacity-0
    group-hover:opacity-100
    transition
    duration-500
    bg-gradient-to-br
    from-purple-300/30
    via-pink-300/20
    to-cyan-300/30
    blur-2xl
  " />

  {/* SHINE */}
  <div className="
    absolute
    top-0
    left-[-120%]
    w-[80%]
    h-full
    bg-gradient-to-r
    from-transparent
    via-white/40
    to-transparent
    rotate-12
    group-hover:left-[140%]
    transition-all
    duration-1000
  " />

  {/* ICON */}
  <div className="
    relative
    z-10
    w-8
    h-8
    rounded-full
    bg-gradient-to-r
    from-purple-500
    via-pink-500
    to-cyan-500
    flex
    items-center
    justify-center
    text-white
    text-sm
    transition-all
    duration-300
    group-hover:-translate-y-1
  ">
    ↑
  </div>

</motion.button>

{/* 🌙 FOOTER */}
<footer className="relative py-14 md:py-16 px-5 overflow-hidden border-t border-black/5">

  {/* 🌈 AMBIENT BACKGROUND */}
  <div className="absolute inset-0 pointer-events-none overflow-hidden">

    {/* PURPLE */}
    <div className="absolute left-1/2 -translate-x-1/2 top-0 w-[280px] h-[140px] bg-purple-300/20 blur-[90px] rounded-full animate-pulseGradient" />

    {/* PINK */}
    <div
      className="absolute right-[-80px] bottom-[-80px] w-[220px] h-[220px] bg-pink-300/20 blur-[120px] rounded-full animate-glowFloat"
      style={{
        animationDelay: "2s",
      }}
    />

    {/* CYAN */}
    <div
      className="absolute left-[-60px] top-[-40px] w-[180px] h-[180px] bg-cyan-200/20 blur-[100px] rounded-full animate-glowFloat"
      style={{
        animationDelay: "4s",
      }}
    />

  </div>

  <div className="max-w-6xl mx-auto relative z-10">

    {/* TOP */}
    <div className="flex flex-col md:flex-row items-center justify-between gap-8">

      {/* LEFT */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-center md:text-left"
      >

        <h3 className="text-xl font-black tracking-wide bg-gradient-to-r from-purple-500 via-pink-500 to-cyan-500 bg-clip-text text-transparent">
          Suciana Nur Arifandy
        </h3>

        <p className="text-sm text-gray-500 mt-2 leading-relaxed">
          Visual Designer & Creative Editor
        </p>

      </motion.div>

      {/* CENTER */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        viewport={{ once: true }}
        className="
          relative
          overflow-hidden
          rounded-full
          border
          border-black/10
          bg-white/70
          backdrop-blur-xl
          px-6
          py-3
          text-xs
          text-gray-500
          animate-floatingSlow
        "
      >

        {/* GLOW */}
        <div className="absolute inset-0 bg-gradient-to-r from-purple-300/20 via-pink-300/20 to-cyan-300/20 blur-2xl opacity-60 animate-pulseGradient" />

        {/* CONTENT */}
        <div className="relative z-10 flex items-center gap-2">

          <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />

          <span>
            © {new Date().getFullYear()} All Rights Reserved
          </span>

        </div>

      </motion.div>

      {/* RIGHT */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        viewport={{ once: true }}
        className="text-sm text-gray-500 flex items-center gap-2"
      >

        <span>
          Crafted by
        </span>

        <span className="relative font-semibold">

          {/* GLOW */}
          <span className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 blur-lg opacity-30" />

          {/* TEXT */}
          <span className="relative bg-gradient-to-r from-purple-500 via-pink-500 to-cyan-500 bg-clip-text text-transparent">
            nannsky
          </span>

        </span>

      </motion.div>

    </div>

    {/* BOTTOM LINE */}
    <motion.div
      initial={{ width: 0 }}
      whileInView={{ width: "100%" }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
      className="h-px bg-gradient-to-r from-transparent via-purple-300/40 to-transparent mt-10"
    />

  </div>

</footer>

    </main>
  );
}
