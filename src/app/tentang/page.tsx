"use client";
import { Award, Gem, Users, MapPin, Instagram } from "lucide-react";
import Image from "next/image";
import Script from "next/script";
import { TikTokIcon } from "@/components/header";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Card } from "@/components/ui/card";
import { useImageLightbox } from "@/components/image-lightbox";

const aboutPageSchema = {
  "@context": "https://schema.org",
  "@type": "AboutPage",
  name: "Tentang Medina Rentcar",
  description:
    "Sejarah, visi, dan misi Medina Rentcar sebagai penyedia layanan rental mobil profesional di Medan.",
  url: "https://Medinasewamobilmedankulanamu.com/tentang",
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": "https://Medinasewamobilmedankulanamu.com/tentang",
  },
};

const officeLocation =
  "Jl. Sempurna Gg. Mawar No.12 dusun II, sambirejo timur, Kec. Medan Tembung, Kabupaten Deli Serdang, Sumatera Utara 20371";
const mapsEmbedUrl = `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3981.9722494114576!2d98.77453057381395!3d3.5938370502605745!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x303137a8ded38db1%3A0x698e30b68ac357e5!2sPT.VICKY%20RENTAL%20NUSANTARA!5e0!3m2!1sid!2sid!4v1754893376483!5m2!1sid!2sid`;

const coreValues = [
  {
    icon: <Award className="h-10 w-10 text-primary" />,
    title: "Armada Terbaik & Terawat",
    description:
      "Setiap mobil dalam armada kami adalah model terbaru yang terawat secara rutin untuk menjamin performa dan kenyamanan Anda.",
  },
  {
    icon: <Gem className="h-10 w-10 text-primary" />,
    title: "Harga Kompetitif & Transparan",
    description:
      "Kami menawarkan harga sewa yang jujur dan kompetitif, tanpa biaya tersembunyi. Nilai terbaik untuk perjalanan Anda.",
  },
  {
    icon: <Users className="h-10 w-10 text-primary" />,
    title: "Pelayanan Profesional",
    description:
      "Tim kami, dari customer service hingga supir, adalah para profesional berpengalaman yang siap melayani Anda 24/7.",
  },
];

export default function TentangPage() {
  const { openLightbox } = useImageLightbox();

  const heroImage = "/tittle-bg.png";
  const storyImage1 = "/tentang.png";
  const storyImage2 = "/medina.png";

  return (
    <>
      <Script
        id="about-page-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutPageSchema) }}
      />
      <div className="bg-background text-foreground overflow-hidden">
        {/* Hero Section */}
        <section className="relative py-32 md:py-48 flex items-center justify-center text-center bg-card/20">
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent z-10"></div>
          <Image
            src={heroImage}
            data-ai-hint="team professional diverse"
            alt="tentang Medina Rentcar"
            layout="fill"
            objectFit="cover"
            className="z-0 opacity-20 cursor-pointer"
            onClick={() => openLightbox(heroImage)}
          />
          <div className="container mx-auto px-6 z-20 animate-fade-in-up">
            <h1 className="text-4xl md:text-6xl font-black uppercase tracking-wider">
              Tentang MEDINA RENTCAR
            </h1>
            <p className="mt-4 text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto">
              Lebih dari sekadar rental mobil, kami adalah partner perjalanan
              Anda di Medan.
            </p>
          </div>
        </section>

        {/* Our Story Section */}
        <section className="py-20 md:py-32">
          <div className="container mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-12 md:gap-16 items-center">
              <div
                className="animate-fade-in-right"
                style={{ animationDelay: "200ms" }}
              >
                <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-primary">
                  Cerita Kami
                </h2>
                <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
                  Berawal dari semangat untuk memberikan pelayanan transportasi
                  yang tidak hanya aman dan nyaman, tetapi juga profesional dan
                  terpercaya di kota Medan, Medina Rentcar didirikan. Sebagai
                  bagian dari PT VICKY RENTAL NUSANTARA, kami mewarisi
                  pengalaman dan standar layanan yang tinggi.
                </p>
                <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
                  Kami percaya bahwa setiap perjalanan memiliki cerita, dan kami
                  berkomitmen untuk menjadi bagian dari cerita indah Anda dengan
                  menyediakan kendaraan terbaik dan layanan yang melampaui
                  ekspektasi.
                </p>
              </div>
              <div
                className="relative h-96 animate-fade-in-left"
                style={{ animationDelay: "400ms" }}
              >
                <Image
                  src={storyImage1}
                  data-ai-hint="car key handshake"
                  alt="rental mobil medan"
                  width={600}
                  height={400}
                  className="absolute top-0 left-0 rounded-2xl shadow-lg w-4/5 h-4/5 object-cover border-4 border-card cursor-pointer transition-transform duration-300 hover:scale-105"
                  onClick={() => openLightbox(storyImage1)}
                />
                <Image
                  src={storyImage2}
                  data-ai-hint="smiling customer service"
                  alt="cerita rental mobil medan"
                  width={400}
                  height={600}
                  className="absolute bottom-0 right-0 rounded-2xl shadow-2xl w-1/2 h-2/3 object-cover border-4 border-card cursor-pointer transition-transform duration-300 hover:scale-105"
                  onClick={() => openLightbox(storyImage2)}
                />
              </div>
            </div>
          </div>
        </section>

        {/* Core Values Section */}
        <section className="py-20 md:py-32 bg-card/20">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16 animate-fade-in-up">
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
                Nilai-Nilai Kami
              </h2>
              <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
                Tiga pilar utama yang menjadi fondasi kepercayaan dan kepuasan
                pelanggan kami.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {coreValues.map((value, index) => (
                <div
                  key={index}
                  className="animate-fade-in-up"
                  style={{ animationDelay: `${200 + index * 200}ms` }}
                >
                  <Card className="bg-card/50 border-border/20 p-8 rounded-2xl flex flex-col items-center text-center transform transition-all duration-300 hover:shadow-primary/20 hover:-translate-y-2 h-full">
                    <div className="p-4 bg-primary/10 rounded-full mb-6 ring-4 ring-primary/20">
                      {value.icon}
                    </div>
                    <h3 className="text-2xl font-bold mb-3">{value.title}</h3>
                    <p className="text-muted-foreground">{value.description}</p>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Lokasi Section */}
        <section className="py-20 md:py-32">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16 animate-fade-in-up">
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
                Lokasi Kantor Kami
              </h2>
              <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
                Kunjungi kami untuk konsultasi langsung atau sekadar menyapa.
                Kami selalu senang bertemu dengan Anda.
              </p>
            </div>
            <div className="grid lg:grid-cols-2 gap-12 md:gap-16 items-center">
              <div
                className="animate-fade-in-right"
                style={{ animationDelay: "200ms" }}
              >
                <div className="rounded-2xl shadow-2xl overflow-hidden border-4 border-primary/20">
                  <iframe
                    src={mapsEmbedUrl}
                    width="100%"
                    height="450"
                    style={{ border: 0 }}
                    allowFullScreen={true}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>
              </div>
              <div
                className="animate-fade-in-left"
                style={{ animationDelay: "400ms" }}
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary/10 rounded-full text-primary ring-4 ring-primary/20 mt-1">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold">Alamat Kantor Pusat</h3>
                    <p className="text-muted-foreground text-xl mt-1">
                      {officeLocation}
                    </p>
                    <Button asChild className="mt-4 rounded-full font-bold">
                      <a
                        href={`https://maps.app.goo.gl/hs6YVJcmubyxizxi8`}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Lihat di Google Maps
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Social Media Section */}
        <section className="py-20 md:py-32 bg-card/20">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16 animate-fade-in-up">
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
                Ikuti Perjalanan Kami
              </h2>
              <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
                Dapatkan update terbaru, promo spesial, dan lihat keseruan
                perjalanan pelanggan kami di media sosial.
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <div
                className="animate-fade-in-up"
                style={{ animationDelay: "200ms" }}
              >
                <Card className="bg-card/50 p-8 rounded-2xl flex flex-col items-center text-center h-full">
                  <Instagram className="h-12 w-12 text-primary mb-4" />
                  <h3 className="text-2xl font-bold mb-2">Instagram</h3>
                  <p className="text-muted-foreground mb-6 flex-grow">
                    Lihat armada terbaru kami, promo spesial, dan momen-momen
                    indah dari perjalanan pelanggan.
                  </p>
                  <Button asChild className="rounded-full font-bold mt-4">
                    <a
                      href="https://www.instagram.com/medinarentcarmedan"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      @medinarentcarmedan
                    </a>
                  </Button>
                </Card>
              </div>
              <div
                className="animate-fade-in-up"
                style={{ animationDelay: "400ms" }}
              >
                <Card className="bg-card/50 p-8 rounded-2xl flex flex-col items-center text-center h-full">
                  <TikTokIcon className="h-12 w-12 text-primary mb-4" />
                  <h3 className="text-2xl font-bold mb-2">TikTok</h3>
                  <p className="text-muted-foreground mb-6 flex-grow">
                    Tonton video singkat, tips perjalanan seru, dan konten di
                    balik layar dari operasional kami.
                  </p>
                  <Button asChild className="rounded-full font-bold mt-4">
                    <a
                      href="https://www.tiktok.com/@ptvickyrentalnusantara?_t=ZS-8ymknhj3WWw&_r=1"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      @ptvickyrentalnusantara
                    </a>
                  </Button>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
