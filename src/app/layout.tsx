// src/app/layout.tsx

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { BottomNav } from "@/components/bottom-nav";
import { Analytics } from "@vercel/analytics/next";
import { ThemeProvider } from "@/components/theme-provider";
import {
  ImageLightbox,
  ImageLightboxProvider,
} from "@/components/image-lightbox";
import Script from "next/script"; // <-- Import the Script component

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

const siteConfig = {
  name: "Medina Rentcar",
  url: "https://www.medinarentcarmedan.com",
  logo: "/logo.png",
  description:
    "Sewa mobil Medan lepas kunci & sopir 24 jam. Armada lengkap: Innova, Alphard, Hiace. Harga terjangkau, layanan bandara Kualanamu & luar kota.",
  address: {
    street:
      "Jl. Sempurna Gg. Mawar No.12 dusun II, sambirejo timur, Kec. Medan Tembung",
    city: "Kabupaten Deli Serdang",
    province: "Sumatera Utara",
    postalCode: "20371",
    country: "ID",
  },
  contact: {
    phone: "+6282277757234",
    email: "medinarentcarmedan@gmail.com",
  },
  social: {
    instagram: "https://www.instagram.com/medinarentcarmedan",
    tiktok:
      "https://www.tiktok.com/@ptvickyrentalnusantara?_t=ZS-8ymknhj3WWw&_r=1",
  },
};

// SEO Metadata
export const metadata: Metadata = {
  title: "Medina Rentcar - Rental Mobil Profesional Medan",
  description:
    "Website resmi rental mobil profesional di Medan. Layanan sewa mobil lepas kunci dan dengan supir 24 jam.",
  keywords: [
    "Medina Rentcar",
    "sewa mobil Medan",
    "rental mobil Medan",
    "rental mobil profesional Medan",
    "sewa mobil lepas kunci Medan",
    "sewa mobil Kualanamu",
    "sewa mobil Medan murah",
    "sewa mobil Innova Medan",
    "sewa mobil Alphard Medan",
    "sewa mobil Hiace Medan",
    "sewa mobil Fortuner Medan",
    "sewa mobil Pajero Medan",
    "sewa mobil harian Medan",
    "sewa mobil bulanan Medan",
    "sewa mobil tour Medan",
  ],
  openGraph: {
    title: "Medina Rentcar - Rental Mobil Medan",
    description:
      "Website resmi rental mobil profesional di Medan. Layanan sewa mobil lepas kunci dan dengan supir 24 jam.",
    type: "website",
    url: siteConfig.url,
    siteName: siteConfig.name,
    images: [
      {
        url: `${siteConfig.url}/logo.png`,
        width: 1200,
        height: 630,
        alt: "Medina Rentcar - Rental Mobil Medan",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Medina Rentcar - Rental Mobil Medan",
    description:
      "Website resmi rental mobil profesional di Medan. Layanan sewa mobil lepas kunci dan dengan supir 24 jam.",
    images: [`${siteConfig.url}/logo.png`],
  },
  robots: {
    index: true,
    follow: true,
  },
};

// Proper Viewport Export (moved from metadata)
export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "AutomotiveBusiness",
  name: siteConfig.name,
  description: siteConfig.description,
  url: siteConfig.url,
  logo: siteConfig.logo,
  telephone: siteConfig.contact.phone,
  email: siteConfig.contact.email,
  address: {
    "@type": "PostalAddress",
    streetAddress: siteConfig.address.street,
    addressLocality: siteConfig.address.city,
    addressRegion: siteConfig.address.province,
    postalCode: siteConfig.address.postalCode,
    addressCountry: siteConfig.address.country,
  },
  sameAs: [siteConfig.social.instagram, siteConfig.social.tiktok],
  openingHours: "Mo,Tu,We,Th,Fr,Sa,Su 00:00-23:59",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id" suppressHydrationWarning className={inter.variable}>
      <head>
        {/* Structured Data JSON-LD */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className="font-body antialiased bg-background text-foreground">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <ImageLightboxProvider>
            <Header />
            <main className="flex-1 pb-24 md:pb-0">{children}</main>
            <Footer />
            <BottomNav />
            <Toaster />
            <ImageLightbox />
          </ImageLightboxProvider>
        </ThemeProvider>

        <Analytics />

        {/* Google Ads */}
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=AW-17462980673"
        />
        <Script id="google-ads">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-17462980673');
          `}
        </Script>
      </body>
    </html>
  );
}
