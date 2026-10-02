import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Rajat Pandey — AI/ML Portfolio",
  description: "Rajat Pandey — Artificial Intelligence & Machine Learning student building intelligent systems for real-world problems.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <html lang="en"><body>{children}</body></html>;
}