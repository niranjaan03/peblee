export type FeatureId =
  | "conversations"
  | "voice"
  | "providers"
  | "memory"
  | "devices"
  | "knowledge"
  | "daily"
  | "firmware"
  | "settings";

export interface Feature {
  id: FeatureId;
  category: string;
  title: string;
  description: string;
  example: string;
  flip: boolean; // true = image right, text left
}

export const features: Feature[] = [
  {
    id: "conversations",
    category: "Conversations",
    title: "Talk naturally.\nPick up where\nyou left off.",
    description:
      "Every conversation is saved, searchable, and context-aware. Your companion reads the thread, understands the history, and replies with full awareness of who you are.",
    example:
      "You closed the app at midnight. The next morning, your companion remembers exactly what you were discussing — no recap needed.",
    flip: false,
  },
  {
    id: "voice",
    category: "Voice",
    title: "Say \"Hey Peblee\".\nThat's all.",
    description:
      "On-device wake-word detection means you never touch a keyboard. Speech-to-text runs fully offline with a local Whisper model, and speaker diarization tells your companion who's talking.",
    example:
      "Hands full in the kitchen? Just speak. Peblee hears you, transcribes locally, and answers — no cloud STT round-trip.",
    flip: true,
  },
  {
    id: "providers",
    category: "AI Providers",
    title: "Claude and GPT.\nYour keys,\nyour call.",
    description:
      "Bring your own Anthropic or OpenAI key and switch between them at any time — configured at runtime through the app, never in an env file. No key at all? Peblee falls back to fully local search and heuristics.",
    example:
      "Paste your Claude key in Settings and you're live. Remove it, and semantic search keeps working on a local fallback.",
    flip: false,
  },
  {
    id: "memory",
    category: "Memory",
    title: "It remembers\nthe things that\nactually matter.",
    description:
      "Peblee layers durable facts, temporal events, and a knowledge graph extracted from your conversations, then merges and reranks them so the right memory surfaces at the right moment.",
    example:
      "You mentioned your sister's name six weeks ago. Today Peblee uses it naturally, without being asked.",
    flip: true,
  },
  {
    id: "devices",
    category: "Device Manager",
    title: "Every companion,\none place.",
    description:
      "Pair devices over Bluetooth, then see them all at a glance — firmware version, audio settings, and live status. Any connected device can even offer its own tools to the agent at runtime.",
    example:
      "Three Peblee devices across two rooms. One screen to see everything that's happening.",
    flip: false,
  },
  {
    id: "knowledge",
    category: "Knowledge Base",
    title: "Give your companion\nsomething to read.",
    description:
      "Upload documents into a local knowledge base, and let Peblee build a searchable knowledge graph of entities from your conversations and memories — all indexed with embeddings your companion can search mid-conversation.",
    example:
      "Upload your company handbook. Now your companion can answer questions from it, instantly.",
    flip: true,
  },
  {
    id: "daily",
    category: "Automation",
    title: "It doesn't wait\nto be asked.",
    description:
      "Schedule reminders and recurring jobs with a built-in cron scheduler, and let the proactive heartbeat loop periodically wake your companion with a checklist of pending items — so it follows up on its own.",
    example:
      "\"Remind me about the dentist at 3pm.\" Scheduled. And every morning, Peblee checks in on what's still open.",
    flip: false,
  },
  {
    id: "settings",
    category: "Settings",
    title: "Configured once.\nWorks everywhere.",
    description:
      "API keys are set through the app and stored in your own local database — never in an env file, never sent anywhere except directly to the provider. Every preference lives in one clean panel.",
    example:
      "Set it up in under two minutes. Change anything later without digging through config files.",
    flip: true,
  },
];
