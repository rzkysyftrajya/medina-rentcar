
import type {Metadata} from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { Toaster } from "@/components/ui/toaster";
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { BottomNav } from '@/components/bottom-nav';
import { ThemeProvider } from '@/components/theme-provider';
import { ImageLightbox, ImageLightboxProvider } from '@/components/image-lightbox';

const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

const siteConfig = {
  name: "Medina Rentcar",
  url: "https://Medinasewamobilmedankulanamu.com",
  logo: "/logo.png",
  description: "Sewa mobil lepas kunci dan dengan supir di Medan dari Medina Rentcar. Layanan 24 jam untuk harian, mingguan, bulanan. Antar jemput bandara Kualanamu. Armada terbaru, harga kompetitif, dan pelayanan profesional.",
  address: {
    street: "Jl. Sempurna Gg. Mawar No.12 dusun II, sambirejo timur, Kec. Medan Tembung",
    city: "Kabupaten Deli Serdang",
    province: "Sumatera Utara",
    postalCode: "20371",
    country: "ID"
  },
  contact: {
    phone: "+6282277757234",
    email: "medinarentcarmedan@gmail.com"
  },
  social: {
    instagram: "https://www.instagram.com/medinarentcarmedan",
    tiktok: "https://www.tiktok.com/@medinarentcar"
  }
};

export const metadata: Metadata = {
  title: 'Medina Rentcar - Rental Mobil Profesional Medan',
  description: siteConfig.description,
  keywords: [
    'Sewa mobil medan',
    'Rental mobil medan',
    'Sewa mobil lepas kunci Medan',
    'Sewa mobil bandara Kualanamu Medan',
    'Sewa mobil medan murah',
    'Sewa mobil Innova Zenix Medan',
    'Sewa mobil Alphard Medan',
    'Sewa mobil Hiace Premio Medan',
    'Sewa mobil harian Medan',
    'Rentcar medan',
    'Sewa mobil medan dengan supir',
    'Sewa mobil perjalanan dinas',
    'Sewa mobil medan 24 jam',
    'Sewa mobil premium medan'
  ],
  viewport: 'width=device-width, initial-scale=1'
};

const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "AutomotiveBusiness",
    "name": siteConfig.name,
    "description": siteConfig.description,
    "url": siteConfig.url,
    "logo": siteConfig.logo,
    "telephone": siteConfig.contact.phone,
    "email": siteConfig.contact.email,
    "address": {
      "@type": "PostalAddress",
      "streetAddress": siteConfig.address.street,
      "addressLocality": siteConfig.address.city,
      "addressRegion": siteConfig.address.province,
      "postalCode": siteConfig.address.postalCode,
      "addressCountry": siteConfig.address.country
    },
    "sameAs": [
      siteConfig.social.instagram,
      siteConfig.social.tiktok
    ],
    "openingHours": "Mo,Tu,We,Th,Fr,Sa,Su 00:00-23:59"
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
            dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
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
            <main className="flex-1 pb-24 md:pb-0">
              {children}
            </main>
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
