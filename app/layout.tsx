import type { Metadata, Viewport } from "next";
import { Fraunces, Inter_Tight, Noto_Serif_Devanagari } from "next/font/google";
import "./globals.css";

const fraunces = Fraunces({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-fraunces",
  weight: ["300", "400", "500", "600"],
  style: ["normal", "italic"],
});

const interTight = Inter_Tight({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter-tight",
  weight: ["400", "500", "600"],
});

const notoSerifDevanagari = Noto_Serif_Devanagari({
  subsets: ["devanagari"],
  display: "swap",
  variable: "--font-noto-devanagari",
  weight: ["400"],
});

export const metadata: Metadata = {
  title: {
    default:
      "Tune Vibration · Energy Healing, Sound, and Nepal Retreats with Christina",
    template: "%s · Tune Vibration",
  },
  description:
    "Vibrational energy healing, sound therapy, Reiki, chakra and aura clearing, intuitive readings, and Himalayan retreat experiences with Christina Landry. Virtual worldwide, Charlotte NC, and the Kathmandu Valley.",
  robots: { index: true, follow: true },
  icons: { icon: "/brand-assets/tune-vibration/home/image-001.png" },
  metadataBase: new URL("https://www.tuneyourvibration.com"),
  alternates: { canonical: "/" },
  openGraph: {
    title: "Tune Vibration · Energy Healing and Nepal Retreats",
    description:
      "A quieter frequency. Healing sessions and Himalayan retreats with Christina.",
    url: "https://www.tuneyourvibration.com",
    siteName: "Tune Vibration",
    images: ["/brand-assets/tune-vibration/home/image-005.jpg"],
    type: "website",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: "#F6F1E6",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${fraunces.variable} ${interTight.variable} ${notoSerifDevanagari.variable}`}
      suppressHydrationWarning
    >
      <body>{children}</body>
    </html>
  );
}
