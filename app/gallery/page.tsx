"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import data from "@/data/gallery.json";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowLeft,
  ArrowRight,
  X,
  Pause,
  Play,
} from "lucide-react";

const categories = [
  { key: "all", label: "All" },
  { key: "bingkai", label: "Bingkai" },
  { key: "design lain-lain", label: "Design" },
  { key: "event bazaar", label: "Event" },
  { key: "hanging poster", label: "Poster" },
  { key: "merchandise", label: "Merch" },
  { key: "project", label: "Project" },
];

export default function GalleryPage() {
  const [filter, setFilter] = useState("all");
  const [index, setIndex] = useState<number | null>(null);
  const [autoPlay, setAutoPlay] = useState(false);

  const filtered =
    filter === "all"
      ? data
      : data.filter((item) => item.category === filter);

  /* AUTOPLAY */
  useEffect(() => {
    if (!autoPlay || index === null) return;

    const interval = setInterval(() => {
      setIndex((prev) => (prev! + 1) % filtered.length);
    }, 2500);

    return () => clearInterval(interval);
  }, [autoPlay, index, filtered]);

  /* KEYBOARD */
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (index === null) return;

      if (e.key === "Escape") setIndex(null);

      if (e.key === "ArrowRight") {
        setIndex((prev) => (prev! + 1) % filtered.length);
      }

      if (e.key === "ArrowLeft") {
        setIndex(
          (prev) => (prev! - 1 + filtered.length) % filtered.length
        );
      }
    };

    window.addEventListener("keydown", handleKey);

    return () =>
      window.removeEventListener("keydown", handleKey);
  }, [index, filtered]);

  return (
    <main className="min-h-screen bg-[#faf7ff] text-black overflow-hidden">

      {/* 🌈 BACKGROUND */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">

        <div className="absolute top-[-200px] left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-purple-300/20 blur-[140px] rounded-full animate-pulseGradient" />

        <div className="absolute left-[-120px] top-[20%] w-[320px] h-[320px] bg-cyan-200/20 blur-[120px] rounded-full animate-glowFloat" />

        <div
          className="absolute right-[-120px] bottom-[10%] w-[320px] h-[320px] bg-pink-300/20 blur-[120px] rounded-full animate-glowFloat"
          style={{
            animationDelay: "3s",
          }}
        />

      </div>

      {/* NAVBAR */}
      <nav className="
        fixed
        top-0
        left-0
        w-full
        z-50
        border-b
        border-black/5
        bg-white/60
        backdrop-blur-2xl
      ">

        <div className="max-w-7xl mx-auto flex items-center justify-between px-5 md:px-8 py-4">

          {/* LOGO */}
          <h1 className="
            text-sm
            md:text-base
            font-black
            tracking-wide
            bg-gradient-to-r
            from-purple-500
            via-pink-500
            to-cyan-500
            bg-clip-text
            text-transparent
          ">
            Suciana Gallery
          </h1>

          {/* BACK */}
          <Link
            href="/"
            className="
              group
              relative
              overflow-hidden
              rounded-full
              border
              border-black/10
              bg-white/70
              backdrop-blur-xl
              px-5
              py-2.5
              text-sm
              font-medium
              transition-all
              duration-300
              hover:-translate-y-1
              hover:shadow-xl
            "
          >

            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-r from-purple-300/20 via-pink-300/20 to-cyan-300/20 blur-xl" />

            <span className="relative z-10 flex items-center gap-2">

              <ArrowLeft size={16} />

              Back

            </span>

          </Link>

        </div>

      </nav>

      {/* CONTENT */}
      <div className="relative z-10 pt-32 pb-20 px-5">

        {/* HEADER */}
        <div className="text-center mb-16">

          <p className="text-sm tracking-[5px] text-purple-500 font-medium mb-4">
            CREATIVE PORTFOLIO
          </p>

          <h1 className="
            text-5xl
            md:text-7xl
            font-black
            tracking-[-3px]
            leading-[1]
            mb-6
          ">

            Selected
            <br />

            <span className="
              bg-gradient-to-r
              from-purple-500
              via-pink-500
              to-cyan-500
              bg-clip-text
              text-transparent
            ">
              Creative Works
            </span>

          </h1>

          <p className="
            max-w-2xl
            mx-auto
            text-gray-500
            leading-relaxed
          ">
            A collection of branding, advertising,
            visual storytelling, event promotions,
            and modern creative design projects.
          </p>

        </div>

        {/* FILTER */}
        <div className="
          flex
          justify-center
          flex-wrap
          gap-3
          mb-16
        ">

          {categories.map((c) => (
            <button
              key={c.key}
              onClick={() => setFilter(c.key)}
              className={`
                relative
                overflow-hidden
                rounded-full
                px-5
                py-2.5
                text-sm
                font-medium
                transition-all
                duration-300
                ${
                  filter === c.key
                    ? "bg-black text-white shadow-xl"
                    : "bg-white/70 border border-black/10 backdrop-blur-xl hover:-translate-y-1"
                }
              `}
            >

              {filter !== c.key && (
                <div className="absolute inset-0 opacity-0 hover:opacity-100 transition duration-500 bg-gradient-to-r from-purple-300/20 via-pink-300/20 to-cyan-300/20 blur-xl" />
              )}

              <span className="relative z-10">
                {c.label}
              </span>

            </button>
          ))}

        </div>

        {/* GALLERY GRID */}
        <div className="
          columns-1
          sm:columns-2
          lg:columns-3
          gap-5
          max-w-7xl
          mx-auto
        ">

          {filtered.map((item, i) => (
            <motion.div
              key={item.id}
              initial={{
                opacity: 0,
                y: 40,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.5,
                delay: i * 0.03,
              }}
              viewport={{
                once: true,
              }}
              className="
                group
                mb-5
                break-inside-avoid
                cursor-pointer
              "
              onClick={() => setIndex(i)}
            >

              {/* CARD */}
              <div className="
                relative
                overflow-hidden
                rounded-[28px]
                border
                border-white/40
                bg-white/60
                backdrop-blur-2xl
                p-2
                shadow-xl
                transition-all
                duration-500
                hover:-translate-y-2
                hover:shadow-2xl
              ">

                {/* GLOW */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-700 bg-gradient-to-br from-purple-300/20 via-pink-300/10 to-cyan-300/20 blur-3xl" />

                {/* IMAGE */}
                <div className="
                  relative
                  overflow-hidden
                  rounded-[22px]
                ">

                  <Image
                    src={item.src}
                    alt={item.title}
                    width={700}
                    height={700}
                    placeholder="blur"
                    blurDataURL="/blur.png"
                    className="
                      w-full
                      h-auto
                      object-cover
                      transition
                      duration-700
                      group-hover:scale-105
                    "
                  />

                  {/* OVERLAY */}
                  <div className="
                    absolute
                    inset-0
                    bg-gradient-to-t
                    from-black/60
                    via-black/10
                    to-transparent
                    opacity-0
                    group-hover:opacity-100
                    transition
                    duration-500
                  " />

                  {/* CONTENT */}
                  <div className="
                    absolute
                    bottom-0
                    left-0
                    p-5
                    translate-y-6
                    opacity-0
                    group-hover:translate-y-0
                    group-hover:opacity-100
                    transition
                    duration-500
                  ">

                    <p className="text-xs tracking-[3px] text-white/70 mb-2">
                      DESIGN PROJECT
                    </p>

                    <h3 className="text-white font-semibold text-lg">
                      {item.title}
                    </h3>

                  </div>

                </div>

              </div>

            </motion.div>
          ))}

        </div>

      </div>

      {/* 🔥 MODAL */}
      <AnimatePresence>

        {index !== null && (
          <motion.div
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            exit={{
              opacity: 0,
            }}
            className="
              fixed
              inset-0
              z-[100]
              bg-black/90
              backdrop-blur-xl
              flex
              items-center
              justify-center
              p-5
            "
          >

            {/* CLOSE BG */}
            <div
              className="absolute inset-0"
              onClick={() => setIndex(null)}
            />

            {/* CONTENT */}
            <div className="
              relative
              z-10
              w-full
              max-w-6xl
            ">

              {/* IMAGE */}
              <AnimatePresence mode="wait">

                <motion.img
                  key={filtered[index].src}
                  src={filtered[index].src}
                  initial={{
                    opacity: 0,
                    scale: 0.96,
                  }}
                  animate={{
                    opacity: 1,
                    scale: 1,
                  }}
                  exit={{
                    opacity: 0,
                    scale: 0.96,
                  }}
                  transition={{
                    duration: 0.3,
                  }}
                  className="
                    w-full
                    max-h-[80vh]
                    object-contain
                    rounded-[28px]
                    shadow-2xl
                  "
                />

              </AnimatePresence>

              {/* NAV */}
              <button
                onClick={() =>
                  setIndex(
                    (prev) =>
                      (prev! - 1 + filtered.length) %
                      filtered.length
                  )
                }
                className="
                  absolute
                  left-4
                  top-1/2
                  -translate-y-1/2
                  w-12
                  h-12
                  rounded-full
                  bg-white/10
                  backdrop-blur-xl
                  border
                  border-white/10
                  flex
                  items-center
                  justify-center
                  text-white
                  hover:bg-white/20
                  transition
                "
              >
                <ArrowLeft />
              </button>

              <button
                onClick={() =>
                  setIndex(
                    (prev) =>
                      (prev! + 1) % filtered.length
                  )
                }
                className="
                  absolute
                  right-4
                  top-1/2
                  -translate-y-1/2
                  w-12
                  h-12
                  rounded-full
                  bg-white/10
                  backdrop-blur-xl
                  border
                  border-white/10
                  flex
                  items-center
                  justify-center
                  text-white
                  hover:bg-white/20
                  transition
                "
              >
                <ArrowRight />
              </button>

              {/* CLOSE */}
              <button
                onClick={() => setIndex(null)}
                className="
                  absolute
                  top-4
                  right-4
                  w-12
                  h-12
                  rounded-full
                  bg-white/10
                  backdrop-blur-xl
                  border
                  border-white/10
                  flex
                  items-center
                  justify-center
                  text-white
                  hover:bg-white/20
                  transition
                "
              >
                <X />
              </button>

              {/* BOTTOM */}
              <div className="
                mt-6
                flex
                items-center
                justify-between
                gap-4
                text-white/70
              ">

                <p className="text-sm">
                  {index + 1} / {filtered.length}
                </p>

                <button
                  onClick={() =>
                    setAutoPlay(!autoPlay)
                  }
                  className="
                    flex
                    items-center
                    gap-2
                    text-sm
                    hover:text-white
                    transition
                  "
                >

                  {autoPlay ? (
                    <>
                      <Pause size={16} />
                      Stop
                    </>
                  ) : (
                    <>
                      <Play size={16} />
                      Auto Play
                    </>
                  )}

                </button>

              </div>

            </div>

          </motion.div>
        )}

      </AnimatePresence>

    </main>
  );
}