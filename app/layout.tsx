import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Peblee – Your Personal Assistant Device",
  description:
    "Always ready. Simply intelligent. The personal assistant designed to fit seamlessly into your life.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
