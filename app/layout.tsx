import type { Metadata, Viewport } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-space-grotesk",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Adil Ali — Java Backend Developer",
  description:
    "Portfolio of Adil Ali, a Java backend developer focused on Java, Spring Boot, REST APIs, MySQL, Docker and backend fundamentals.",
  applicationName: "Adil Ali Portfolio",
  openGraph: {
    title: "Adil Ali — Java Backend Developer",
    description: "Building backend systems, one clear solution at a time.",
    type: "website",
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#FAFAFA",
  colorScheme: "light dark",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={spaceGrotesk.variable}>{children}</body>
    </html>
  );
}
