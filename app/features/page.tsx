import FeaturesHero from "@/components/FeaturesHero";
import FeatureSection from "@/components/FeatureSection";
import FeatureGrid from "@/components/FeatureGrid";
import IntegrationsWall from "@/components/IntegrationsWall";
import UseCases from "@/components/UseCases";
import SpecsBand from "@/components/SpecsBand";
import FeatureFAQ from "@/components/FeatureFAQ";
import DeviceWithPhone from "@/components/DeviceWithPhone";
import Navbar from "@/components/Navbar";

import ConversationPhoneMockup from "@/components/mockups/phone/ConversationPhoneMockup";
import VoiceMockup from "@/components/mockups/VoiceMockup";
import ProvidersPhoneMockup from "@/components/mockups/phone/ProvidersPhoneMockup";
import MemoryMockup from "@/components/mockups/MemoryMockup";
import DevicePhoneMockup from "@/components/mockups/phone/DevicePhoneMockup";
import KnowledgeMockup from "@/components/mockups/KnowledgeMockup";
import DailyMockup from "@/components/mockups/DailyMockup";
import SettingsPhoneMockup from "@/components/mockups/phone/SettingsPhoneMockup";

const MOCKUPS: Record<string, React.ReactNode> = {
  conversations: <ConversationPhoneMockup />,
  voice: <VoiceMockup />,
  providers: <ProvidersPhoneMockup />,
  memory: <MemoryMockup />,
  devices: <DevicePhoneMockup />,
  knowledge: <KnowledgeMockup />,
  daily: <DailyMockup />,
  settings: <SettingsPhoneMockup />,
};

import { features } from "@/data/features";

export default function FeaturesPage() {
  return (
    <main className="min-h-screen bg-white overflow-hidden">
      <Navbar />
      <FeaturesHero />

      {/* At-a-glance capability bento */}
      <FeatureGrid />

      {/* Section intro for deep dives */}
      <div id="deep-dives" className="max-w-[1400px] mx-auto px-8 md:px-16">
        <div className="h-px w-full" style={{ background: "linear-gradient(to right, transparent, rgba(0,0,0,0.06), transparent)" }} />
        <div className="pt-24 md:pt-28 max-w-[640px]">
          <div className="mb-4 text-[12px] font-semibold uppercase tracking-widest" style={{ color: "#6F97D7" }}>
            A closer look
          </div>
          <h2 className="font-black text-[#111]"
            style={{ fontSize: "clamp(32px, 4vw, 52px)", lineHeight: 1.04, letterSpacing: "-0.04em" }}>
            See exactly how each piece works.
          </h2>
        </div>
      </div>

      {/* Feature deep-dive sections */}
      {features.map((f, i) => (
        <div key={f.id}>
          <FeatureSection
            index={i}
            category={f.category}
            title={f.title}
            description={f.description}
            example={f.example}
            flip={f.flip}
            mockup={
              <DeviceWithPhone flip={f.flip}>
                {MOCKUPS[f.id]}
              </DeviceWithPhone>
            }
          />
          {i < features.length - 1 && (
            <div className="max-w-[1400px] mx-auto px-16">
              <div className="h-px w-full" style={{ background: "linear-gradient(to right, transparent, rgba(0,0,0,0.05), transparent)" }} />
            </div>
          )}
        </div>
      ))}

      {/* Integrations marquee */}
      <IntegrationsWall />

      {/* Real-life use-case stories */}
      <UseCases />

      {/* Specs / stats band */}
      <SpecsBand />

      {/* FAQ accordion */}
      <FeatureFAQ />

      {/* Footer CTA — dark panel */}
      <section className="w-full px-8 pb-24 md:px-16">
        <div
          className="relative mx-auto max-w-[1400px] overflow-hidden rounded-[40px] px-8 py-24 text-center md:py-28"
          style={{ background: "#0f0f0f" }}>
          {/* Glow */}
          <div className="pointer-events-none absolute inset-0" aria-hidden
            style={{ background: "radial-gradient(ellipse 55% 65% at 50% 0%, rgba(111,151,215,0.22) 0%, transparent 70%)" }} />

          <div className="relative mx-auto max-w-[700px]">
            <div className="mb-5 text-[11px] font-semibold uppercase tracking-widest" style={{ color: "#A9C3EE" }}>
              Get started
            </div>
            <h2 className="mb-5 font-black text-white"
              style={{
                fontSize: "clamp(36px, 5vw, 64px)",
                lineHeight: 1,
                letterSpacing: "-0.05em",
                fontFamily: "-apple-system, BlinkMacSystemFont, 'SF Pro Display', Inter, sans-serif",
              }}>
              Your companion is ready.
            </h2>
            <p className="mb-10 text-white/55"
              style={{ fontSize: "clamp(16px, 1.4vw, 20px)", fontFamily: "-apple-system, BlinkMacSystemFont, 'SF Pro Display', Inter, sans-serif" }}>
              Join the waitlist and be among the first to experience Peblee.
            </p>
            <div className="flex items-center justify-center gap-3">
              <a href="/"
                className="inline-flex h-[52px] items-center justify-center rounded-full px-8 text-[16px] font-medium text-white transition-all hover:-translate-y-0.5"
                style={{ background: "linear-gradient(160deg, #6F97D7 0%, #5B84C9 100%)", boxShadow: "0 8px 24px rgba(111,151,215,0.45)" }}>
                Join Waitlist
              </a>
              <a href="/"
                className="inline-flex h-[52px] items-center justify-center rounded-full border border-white/15 px-8 text-[16px] font-medium text-white transition-all hover:border-white/40">
                Learn More
              </a>
            </div>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-[13px] text-white/35">
              <span>Local-first</span>
              <span className="h-1 w-1 rounded-full bg-white/20" />
              <span>Self-hosted</span>
              <span className="h-1 w-1 rounded-full bg-white/20" />
              <span>Your keys, your data</span>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
