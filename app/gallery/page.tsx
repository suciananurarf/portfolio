"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import data from "@/data/gallery.json";
import { motion, AnimatePresence } from "framer-motion";

const categories = [
  { key: "all", label: "All" },
  { key: "bingkai", label: "Bingkai" },
  { key: "design lain-lain", label: "Design" },
  { key: "event bazaar", label: "Event" },
  { key: "hanging poster", label: "Poster" },
  { key: "merchandise", label: "Merch" },
  { key: "project", label: "Project" }
];

export default function GalleryPage() {
  const [filter, setFilter] = useState("all");
  const [index, setIndex] = useState<number | null>(null);
  const [zoom, setZoom] = useState(1);
  const [autoPlay, setAutoPlay] = useState(true);

  const filtered =
    filter === "all"
      ? data
      : data.filter((item) => item.category === filter);

      useEffect(() => {
  if (!autoPlay || index === null) return;

  const interval = setInterval(() => {
    setIndex((prev) => (prev! + 1) % filtered.length);
  }, 2000);

  return () => clearInterval(interval);
}, [autoPlay, index, filtered]);

// scroll zoom
const handleWheel = (e: any) => {
  e.preventDefault();
  setZoom((z) => Math.max(1, Math.min(3, z - e.deltaY * 0.001)));
};

let lastTap = 0;

const handleTap = () => {
  const now = Date.now();
  if (now - lastTap < 300) {
    setZoom((z) => (z === 1 ? 2 : 1));
  }
  lastTap = now;
};

  // 🔥 KEYBOARD NAV
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (index === null) return;

      if (e.key === "Escape") setIndex(null);
      if (e.key === "ArrowRight")
        setIndex((prev) => (prev! + 1) % filtered.length);
      if (e.key === "ArrowLeft")
        setIndex((prev) => (prev! - 1 + filtered.length) % filtered.length);
    };

    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [index, filtered]);

  // 🔥 SWIPE (simple)
  let touchStartX = 0;

  const handleTouchStart = (e: any) => {
    touchStartX = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: any) => {
    const diff = touchStartX - e.changedTouches[0].clientX;

    if (Math.abs(diff) > 50 && index !== null) {
      if (diff > 0) {
        setIndex((prev) => (prev! + 1) % filtered.length);
      } else {
        setIndex((prev) => (prev! - 1 + filtered.length) % filtered.length);
      }
    }
  };

  return (
    <main className="min-h-screen bg-black text-white">

      {/* NAVBAR */}
      <nav className="fixed top-0 w-full z-50 backdrop-blur bg-black/50 border-b border-white/10">
        <div className="max-w-6xl mx-auto flex justify-between px-6 py-4">
          <h1>Suciana</h1>
          <Link href="/" className="border px-4 py-2 rounded-lg hover:bg-white hover:text-black transition">
            Back
          </Link>
        </div>
      </nav>

      <div className="pt-28 px-6">

        {/* TITLE */}
        <h1 className="text-4xl text-center mb-4">Gallery</h1>

        {/* FILTER */}
        <div className="flex justify-center gap-3 mb-10 flex-wrap">
          {categories.map((c) => (
            <button
              key={c.key}
              onClick={() => setFilter(c.key)}
              className={`px-4 py-2 text-sm rounded-full border ${
                filter === c.key
                  ? "bg-white text-black"
                  : "border-white/20"
              }`}
            >
              {c.label}
            </button>
          ))}
        </div>

        {/* 🔥 MASONRY (CSS columns = ringan banget) */}
        <div className="columns-1 sm:columns-2 md:columns-3 gap-4 max-w-6xl mx-auto">

          {filtered.map((item, i) => (
            <div
              key={item.id}
              className="mb-4 cursor-pointer break-inside-avoid"
              onClick={() => setIndex(i)}
            >
              <Image
                src={item.src}
                alt={item.title}
                width={500}
                height={500}
                placeholder="blur"
                blurDataURL="/blur.png"
                className="rounded-xl w-full h-auto hover:scale-[1.02] transition"
              />

              <p className="mt-2 text-sm">{item.title}</p>
            </div>
          ))}

        </div>
      </div>

      {/* 🔥 MODAL */}
      {index !== null && (
  <div
    className="fixed inset-0 bg-black/95 flex flex-col items-center justify-center z-50"
    onClick={() => setIndex(null)}
  >

    {/* IMAGE */}
    <div
      className="relative flex items-center justify-center w-full h-full"
      onWheel={handleWheel}
      onClick={(e) => e.stopPropagation()}
    >

      <AnimatePresence mode="wait">
        <motion.img
          key={filtered[index].src}
          src={filtered[index].src}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -50 }}
          transition={{ duration: 0.3 }}
          style={{ transform: `scale(${zoom})` }}
          className="max-w-4xl w-full rounded-xl select-none"
        />
      </AnimatePresence>

      {/* NAV */}
      <button
        onClick={() => setIndex((prev) => (prev! - 1 + filtered.length) % filtered.length)}
        className="absolute left-6 text-3xl bg-white/10 px-4 py-2 rounded-full hover:bg-white/20"
      >
        ←
      </button>

      <button
        onClick={() => setIndex((prev) => (prev! + 1) % filtered.length)}
        className="absolute right-6 text-3xl bg-white/10 px-4 py-2 rounded-full hover:bg-white/20"
      >
        →
      </button>

      {/* CLOSE */}
      <button
        onClick={() => setIndex(null)}
        className="absolute top-6 right-6 bg-white/10 px-3 py-1 rounded"
      >
        ✕
      </button>

      {/* ZOOM RESET */}
      <button
        onClick={() => setZoom(1)}
        className="absolute top-6 left-6 bg-white/10 px-3 py-1 rounded text-sm"
      >
        Reset Zoom
      </button>

    </div>

    {/* THUMBNAIL STRIP */}
    <div className="flex gap-2 overflow-x-auto px-6 py-4 w-full max-w-4xl">
      {filtered.map((item, i) => (
        <img
          key={i}
          src={item.src}
          onClick={() => setIndex(i)}
          className={`h-16 w-24 object-cover rounded cursor-pointer border ${
            i === index ? "border-white" : "border-transparent opacity-60"
          }`}
        />
      ))}
    </div>

    {/* CONTROL */}
    <div className="absolute bottom-6 text-sm text-white/60 flex gap-4">
      <span>{index + 1} / {filtered.length}</span>

      <button
        onClick={() => setAutoPlay(!autoPlay)}
        className="underline"
      >
        {autoPlay ? "Stop" : "Auto Play"}
      </button>
    </div>

  </div>
)}
    </main>
  );
}