"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Button from "./Button";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 28 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1], delay },
});

const fadeIn = (delay = 0) => ({
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  transition: { duration: 0.9, ease: "easeOut", delay },
});

export default function Hero() {
  return (
    <section
      className="relative w-full min-h-screen pt-16 overflow-hidden flex"
      style={{ background: "#efefef" }}
    >
      {/* Left half – full bleed image panel */}
      <motion.div
        className="relative w-1/2 min-h-[calc(100vh-64px)] flex items-center justify-center overflow-hidden"
        style={{ background: "#efefef" }}
        {...fadeIn(0.1)}
      >
        <motion.div
          className="w-full h-full flex items-center justify-center"
          animate={{ y: [0, -8, 0] }}
          transition={{ duration: 6, ease: "easeInOut", repeat: Infinity }}
        >
          <Image
            src="/images/Peblee-cutout.png"
            alt="Peblee Personal Assistant Device"
            width={1066}
            height={706}
            priority
            className="w-[82%] h-auto object-contain"
            style={{ objectPosition: "center" }}
          />
        </motion.div>
      </motion.div>

      {/* Right half – text content */}
      <div
        className="w-1/2 min-h-[calc(100vh-64px)] flex flex-col justify-center"
        style={{
          background:
            "linear-gradient(to right, #efefef 0%, #f5f5f5 30%, #f8f8f8 60%, #ffffff 100%)",
          paddingLeft: "clamp(40px, 6vw, 110px)",
          paddingRight: "clamp(24px, 4vw, 80px)",
        }}
      >
        <motion.h1
          className="text-[#111111] font-black"
          style={{
            fontSize: "clamp(52px, 5.8vw, 86px)",
            lineHeight: 0.95,
            letterSpacing: "-0.06em",
            fontFamily:
              "-apple-system, BlinkMacSystemFont, 'SF Pro Display', Inter, sans-serif",
          }}
          {...fadeUp(0.2)}
        >
          Peblee. Your
          <br />
          Personal Assistant
          <br />
          Device.
        </motion.h1>

        <motion.p
          className="mt-7 text-[#333333] font-normal leading-snug"
          style={{
            fontSize: "clamp(16px, 1.55vw, 22px)",
            maxWidth: 520,
            fontFamily:
              "-apple-system, BlinkMacSystemFont, 'SF Pro Display', Inter, sans-serif",
          }}
          {...fadeUp(0.35)}
        >
          Always ready. Simply intelligent. The personal
          <br />
          assistant designed to fit seamlessly into your life.
        </motion.p>

        <motion.div
          className="mt-10 flex items-center gap-1"
          {...fadeUp(0.5)}
        >
          <Button variant="primary">Learn More</Button>
          <Button variant="dark">Join Waitlist</Button>
        </motion.div>
      </div>
    </section>
  );
}
