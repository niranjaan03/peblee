"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  variant?: "primary" | "secondary" | "dark";
  href?: string;
  onClick?: () => void;
}

export default function Button({
  children,
  variant = "primary",
  href = "#",
  onClick,
}: ButtonProps) {
  const baseClass =
    "inline-flex items-center justify-center h-[52px] rounded-full text-[17px] font-normal transition-all duration-200 cursor-pointer select-none";

  if (variant === "primary") {
    return (
      <motion.a
        href={href}
        onClick={onClick}
        whileHover={{ y: -2, boxShadow: "0 8px 24px rgba(111,151,215,0.45)" }}
        whileTap={{ y: 0 }}
        className={`${baseClass} px-8 text-white`}
        style={{
          background: "linear-gradient(160deg, #6F97D7 0%, #5B84C9 100%)",
        }}
      >
        {children}
      </motion.a>
    );
  }

  if (variant === "dark") {
    return (
      <motion.a
        href={href}
        onClick={onClick}
        whileHover={{ y: -2, boxShadow: "0 8px 24px rgba(0,0,0,0.3)" }}
        whileTap={{ y: 0 }}
        className={`${baseClass} px-8 text-white`}
        style={{ background: "#111111" }}
      >
        {children}
      </motion.a>
    );
  }

  return (
    <motion.a
      href={href}
      onClick={onClick}
      whileHover={{ color: "#111111" }}
      className={`${baseClass} px-6 text-[#888888]`}
    >
      {children}
    </motion.a>
  );
}
