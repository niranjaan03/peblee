"use client";
import { motion, useInView } from "framer-motion";
import { useRef, ReactNode } from "react";
import Image from "next/image";
import PhoneWindow from "./PhoneWindow";

interface DeviceWithPhoneProps {
  children: ReactNode;
  flip?: boolean;
}

/*
 * Composite visual for feature deep-dives:
 * the Peblee device sits on the ground next to the phone — everything
 * happens on the device, the phone is the server / control surface.
 */
export default function DeviceWithPhone({ children, flip = false }: DeviceWithPhoneProps) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  const device = (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
      className="relative z-0 shrink-0 self-end"
      style={{
        width: "clamp(191px, 22.5vw, 259px)",
        marginBottom: 26,
        [flip ? "marginRight" : "marginLeft"]: -34,
      }}
    >
      <Image
        src="/images/Peblee-cutout.png"
        alt="Peblee device — everything happens on it"
        width={640}
        height={480}
        className="h-auto w-full select-none"
        style={{ transform: flip ? "scaleX(-1)" : undefined }}
      />
    </motion.div>
  );

  return (
    <div ref={ref} className="flex flex-col items-center">
      {/* Product shot: phone + device side by side */}
      <div className="flex items-center justify-center">
        {flip ? (
          <>
            {device}
            <div className="relative z-10">
              <PhoneWindow flip={flip}>{children}</PhoneWindow>
            </div>
          </>
        ) : (
          <>
            <div className="relative z-10">
              <PhoneWindow flip={flip}>{children}</PhoneWindow>
            </div>
            {device}
          </>
        )}
      </div>

      {/* Caption: who does what */}
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, delay: 0.55 }}
        className="mt-8 flex flex-wrap items-center justify-center gap-2"
      >
        <span
          className="inline-flex items-center gap-1.5 rounded-full px-3.5 py-1.5 text-[11px] font-semibold text-white"
          style={{
            background: "linear-gradient(160deg, #6F97D7 0%, #5B84C9 100%)",
            boxShadow: "0 6px 16px rgba(111,151,215,0.35)",
          }}
        >
          <motion.span
            className="h-1.5 w-1.5 rounded-full bg-white"
            animate={{ opacity: [1, 0.35, 1] }}
            transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
          />
          Peblee · everything happens here
        </span>
        <span className="text-[12px] font-medium" style={{ color: "rgba(111,151,215,0.7)" }}>
          ⇄
        </span>
        <span
          className="inline-flex items-center gap-1.5 rounded-full px-3.5 py-1.5 text-[11px] font-semibold"
          style={{
            background: "rgba(0,0,0,0.04)",
            border: "1px solid rgba(0,0,0,0.07)",
            color: "#555",
          }}
        >
          Phone · the server
        </span>
      </motion.div>
    </div>
  );
}
