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

export const metadata: Metadata = {
  title: "Sewa Mobil Medan - Rental Murah & Profesional | Medina Rentcar",
  description: siteConfig.description,
  keywords: [
    "Sewa mobil Medan",
    "Rental mobil Medan",
    "Sewa mobil lepas kunci Medan",
    "Sewa mobil bandara Kualanamu",
    "Sewa mobil Medan murah",
    "Sewa mobil 24 jam Medan",
    "Sewa mobil Innova Medan",
    "Sewa mobil Alphard Medan",
    "Sewa mobil Hiace Medan",
    "Sewa mobil Fortuner Medan",
    "Sewa mobil Pajero Medan",
    "Sewa mobil pengantin Medan",
    "Sewa mobil harian mingguan bulanan Medan",
    "Harga sewa mobil Medan",
    "Sewa mobil Medan ke Danau Toba",
    "Sewa mobil dengan sopir Medan",
    "Sewa mobil luar kota Medan",
    "Sewa mobil dalam kota Medan",
  ],
  viewport: "width=device-width, initial-scale=1",
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
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" suppressHydrationWarning className={inter.variable}>
      <head>
<script async src="https://www.googletagmanager.com/gtag/js?id=AW-17462980673"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'AW-17462980673');
</script>
        {/* Structured Data JSON-LD */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />
        {/* Favicon */}
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
      </body>
    </html>
  );
}    email: "medinarentcarmedan@gmail.com",
  },
  social: {
    instagram: "https://www.instagram.com/medinarentcarmedan",
    tiktok:
      "https://www.tiktok.com/@ptvickyrentalnusantara?_t=ZS-8ymknhj3WWw&_r=1",
  },
};

export const metadata: Metadata = {
  title: "Medina Rentcar - Rental Mobil Profesional Medan",
  description: siteConfig.description,
  keywords: [
  "Sewa mobil Medan",
  "Rental mobil Medan",
  "Sewa mobil lepas kunci Medan",
  "Sewa mobil bandara Kualanamu",
  "Sewa mobil Medan murah",
  "Sewa mobil 24 jam Medan",
  "Sewa mobil Innova Medan",
  "Sewa mobil Alphard Medan",
  "Sewa mobil Hiace Medan",
  "Sewa mobil Fortuner Medan",
  "Sewa mobil Pajero Medan",
  "Sewa mobil pengantin Medan",
  "Sewa mobil harian mingguan bulanan Medan", 
  "Harga sewa mobil Medan",
  "Sewa mobil Medan ke Danau Toba",
  "Sewa mobil dengan sopir Medan",
  "Sewa mobil luar kota Medan",
  "Sewa mobil dalam kota Medan",
],
  viewport: "width=device-width, initial-scale=1",
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
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" suppressHydrationWarning className={inter.variable}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />
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
      </body>
    </html>
  );
}
