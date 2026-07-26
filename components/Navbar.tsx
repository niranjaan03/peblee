"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const NAV_LINKS = [
  { label: "Overview", href: "/" },
  { label: "Features", href: "/features" },
];

export default function Navbar() {
  return (
    <motion.header
      className="fixed top-0 left-0 right-0 z-50 h-16 backdrop-blur-md border-b border-gray-200/50"
      style={{ background: "rgba(239,239,239,0.92)" }}
      initial={{ opacity: 0, y: -16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <div className="max-w-[1400px] mx-auto h-full px-8 flex items-center justify-between">
        {/* Logo */}
        <span
          className="text-[18px] font-bold tracking-tight text-[#111111]"
          style={{ fontFamily: "-apple-system, BlinkMacSystemFont, 'SF Pro Display', Inter, sans-serif" }}
        >
          Peblee
        </span>

        {/* Center nav */}
        <nav className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="text-[15px] font-normal text-[#333333] hover:text-[#111111] transition-colors duration-200"
            >
              {link.label}
            </Link>
          ))}
        </nav>



        {/* Mobile hamburger */}
        <button className="md:hidden flex flex-col gap-1.5 p-2" aria-label="Menu">
          <span className="w-5 h-px bg-[#111] block" />
          <span className="w-5 h-px bg-[#111] block" />
          <span className="w-5 h-px bg-[#111] block" />
        </button>
      </div>
    </motion.header>
  );
}
