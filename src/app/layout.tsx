import type { Metadata } from "next";
import localFont from "next/font/local";
import "./../styles/globals.css";
import { siteData } from "@/data/site";

const headingFont = localFont({
  src: "../../public/fonts/Hatton-Regular.ttf",
  variable: "--font-heading",
  display: "swap",
  fallback: ["Georgia", "serif"]
});

export const metadata: Metadata = {
  metadataBase: new URL(siteData.business.website),
  title: {
    default: "HAIR 27 | Kapsalon in Beegden",
    template: "%s | HAIR 27"
  },
  description:
    "Moderne kapsalon in Beegden voor dames, heren en kinderen. Persoonlijke aandacht, eerlijk advies en kwaliteit in een ontspannen sfeer.",
  alternates: {
    canonical: "/"
  },
  icons: {
    icon: [
      { url: "/cropped-Favicon-Hair27-bijgesneden-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/cropped-Favicon-Hair27-bijgesneden-192x192.png", sizes: "192x192", type: "image/png" }
    ],
    apple: "/cropped-Favicon-Hair27-bijgesneden-180x180.png"
  },
  openGraph: {
    type: "website",
    locale: "nl_NL",
    url: "/",
    siteName: "HAIR 27",
    title: "HAIR 27 | Kapsalon in Beegden",
    description:
      "Persoonlijke aandacht, eerlijk advies en een kapsel dat echt bij je past bij HAIR 27 in Beegden.",
    images: [
      {
        url: "/images/optimized/homepage-1600.webp",
        width: 1600,
        height: 1067,
        alt: "Sfeerbeeld van HAIR 27 in Beegden"
      }
    ]
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="nl" className={headingFont.variable}>
      <body>{children}</body>
    </html>
  );
}
