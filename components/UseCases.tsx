"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

interface Story {
  tag: string;
  quote: string;
  who: string;
}

const STORIES: Story[] = [
  {
    tag: "Morning",
    quote: "“Plan my day.” Peblee lays out my meetings, reminds me about the dentist, and adds milk to the list — before I’ve finished my coffee.",
    who: "Maya · busy parent",
  },
  {
    tag: "Focus",
    quote: "I upload the brief, ask questions out loud, and Peblee answers from the document. It’s like having read everything for me.",
    who: "Daniel · product lead",
  },
  {
    tag: "Anytime",
    quote: "Six weeks ago I mentioned my sister’s name once. Today Peblee used it naturally. It remembers the things that matter.",
    who: "Priya · early tester",
  },
];

function StoryCard({ story, index }: { story: Story; index: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  return (
    <motion.figure
      ref={ref}
      initial={{ opacity: 0, y: 28 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: index * 0.1 }}
      className="flex flex-col rounded-3xl p-8"
      style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)" }}
    >
      <span
        className="mb-6 inline-flex w-fit items-center rounded-full px-3 py-1 text-[11px] font-semibold uppercase tracking-widest"
        style={{ color: "#A9C3EE", background: "rgba(111,151,215,0.14)" }}
      >
        {story.tag}
      </span>
      <blockquote className="flex-1 text-white/90" style={{ fontSize: 19, lineHeight: 1.5, letterSpacing: "-0.01em" }}>
        {story.quote}
      </blockquote>
      <figcaption className="mt-7 text-[14px] text-white/45">{story.who}</figcaption>
    </motion.figure>
  );
}

export default function UseCases() {
  return (
    <section className="w-full" style={{ background: "#0f0f0f" }}>
      <div className="mx-auto max-w-[1400px] px-8 py-28 md:px-16 md:py-32">
        <div className="mb-14 max-w-[640px]">
          <div className="mb-4 text-[12px] font-semibold uppercase tracking-widest" style={{ color: "#6F97D7" }}>
            In real life
          </div>
          <h2
            className="font-black text-white"
            style={{ fontSize: "clamp(32px, 4vw, 52px)", lineHeight: 1.04, letterSpacing: "-0.04em" }}
          >
            Built for the moments that fill your day.
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
          {STORIES.map((s, i) => (
            <StoryCard key={s.tag} story={s} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
