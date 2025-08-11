import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { BottomNav } from "@/components/bottom-nav";
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
    "Sewa mobil lepas kunci dan dengan supir di Medan dari Medina Rentcar. Layanan 24 jam untuk harian, mingguan, bulanan. Antar jemput bandara Kualanamu. Armada terbaru, harga kompetitif, dan pelayanan profesional.",
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
  title: "Medina Rentcar - Rental Mobil Profesional Medan",
  description: siteConfig.description,
  keywords: [
    "Sewa mobil Medan",
    "Rental mobil Medan",
    "Sewa mobil lepas kunci Medan",
    "Sewa mobil bandara Kualanamu",
    "Sewa mobil bandara Kualanamu Medan",
    "Sewa mobil dekat bandara Kualanamu",
    "Sewa mobil Medan murah",
    "Sewa mobil Innova Zenix Medan",
    "Sewa mobil Innova Medan",
    "Sewa mobil Alphard Medan",
    "Sewa mobil Hiace Premio Medan",
    "Sewa mobil Hiace Premio Luxury Medan",
    "Sewa mobil Hiace",
    "Sewa mobil Fortuner Medan",
    "Sewa mobil Pajero Medan",
    "Sewa mobil Land Cruiser Medan",
    "Sewa mobil bus medium Medan",
    "Sewa mobil metic Medan",
    "Sewa mobil matic Medan",
    "Sewa mobil harian Medan",
    "Sewa mobil mingguan Medan",
    "Sewa mobil bulanan Medan",
    "Sewa mobil pengantin Medan",
    "Sewa mobil tour wisata Medan",
    "Sewa mobil ke Danau Toba",
    "Sewa mobil dengan supir Medan",
    "Sewa mobil perjalanan dinas Medan",
    "Sewa mobil luar kota Medan",
    "Sewa mobil dalam kota Medan",
    "Sewa mobil 24 jam Medan",
    "Sewa mobil profesional Medan",
    "Sewa mobil premium Medan",
    "Rentcar Medan",
    "Sewa mobil bandara Sukarno Hatta",
    "Sewa mobil bandara Hang Nadim",
    "Sewa mobil bandara Halim Perdanakusuma",
    "Sewa mobil bandara Minangkabau",
    "Sewa mobil bandara Sultan Syarif Kasim II",
    "Sewa mobil bandara Sultan Mahmud Badaruddin II",
    "Sewa mobil bandara Husein Sastranegara",
    "Sewa mobil bandara Yogyakarta",
    "Sewa mobil bandara Jendral Ahmad Yani",
    "Sewa mobil bandara Juanda",
    "Sewa mobil bandara Gusti Ngurah Rai",
    "Sewa mobil bandara Sultan Hasanuddin",
    "Sewa mobil bandara Sam Ratulangi",
    "Sewa mobil bandara Iskandar",
    "Sewa mobil bandara Sultan Aji Muhammad Sulaiman",
    "Sewa mobil bandara Sultan Iskandar Muda",
    "Sewa mobil bandara Silangit",
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
