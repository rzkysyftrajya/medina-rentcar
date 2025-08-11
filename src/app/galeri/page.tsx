"use client";
import React from "react";
import Image from "next/image";
import Script from "next/script";
import { Card } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { useImageLightbox } from "@/components/image-lightbox";

const galleryData = {
  armada: [
    {
      src: "/galeri/armada/armada1.jpeg",
      alt: "Toyota Alphard interior",
      hint: "alphard interior vip",
    },
    {
      src: "/galeri/armada/armada2.jpeg",
      alt: "Mitsubishi Pajero exterior",
      hint: "pajero sport exterior",
    },
    {
      src: "/galeri/armada/armada3.jpeg",
      alt: "Innova Zenix dashboard",
      hint: "innova zenix dashboard",
    },
    {
      src: "/galeri/armada/armada4.jpeg",
      alt: "Hiace Premio Luxury captain seat",
      hint: "hiace premio luxury",
    },
    {
      src: "/galeri/armada/armada5.jpeg",
      alt: "Toyota Fortuner gagah",
      hint: "toyota fortuner suv",
    },
    {
      src: "/galeri/armada/armada6.jpeg",
      alt: "Interior bersih dan terawat",
      hint: "clean car interior",
    },
    {
      src: "/galeri/armada/armada8.jpeg",
      alt: "Hilux Double Cabin siap proyek",
      hint: "hilux pickup project",
    },
    {
      src: "/galeri/armada/armada7.jpeg",
      alt: "Mitsubishi Xpander tampak samping",
      hint: "xpander side view",
    },
    {
      src: "/galeri/armada/armada9.jpeg",
      alt: "Barisan armada siap jalan",
      hint: "car fleet ready",
    },
    {
      src: "/galeri/armada/armada10.jpeg",
      alt: "Detail velg sporty",
      hint: "sporty wheel detail",
    },
    {
      src: "/galeri/armada/armada11.jpeg",
      alt: "Kabin Isuzu Elf yang luas",
      hint: "isuzu elf cabin",
    },
    {
      src: "/galeri/armada/armada12.jpeg",
      alt: "Toyota Rush di parkiran",
      hint: "toyota rush parking",
    },
    {
      src: "/galeri/armada/armada13.jpeg",
      alt: "Suzuki Ertiga Hybrid modern",
      hint: "ertiga hybrid modern",
    },
    {
      src: "/galeri/armada/armada14.jpeg",
      alt: "Honda Brio lincah",
      hint: "honda brio city",
    },
    {
      src: "/galeri/armada/armada15.jpeg",
      alt: "Daihatsu Sigra ekonomis",
      hint: "daihatsu sigra family",
    },
    {
      src: "/galeri/armada/armada16.jpeg",
      alt: "Mobil didesinfeksi secara rutin",
      hint: "car disinfection service",
    },
    {
      src: "/galeri/armada/armada17.jpeg",
      alt: "Pengecekan mesin sebelum berangkat",
      hint: "engine check maintenance",
    },
    {
      src: "/galeri/armada/armada18.jpeg",
      alt: "GPS di setiap unit",
      hint: "car gps navigation",
    },
    {
      src: "/galeri/armada/armada19.jpeg",
      alt: "Armada mobil pernikahan",
      hint: "wedding car decorated",
    },
  ],
  pelanggan: [
    {
      src: "/galeri/pelanggan/pelanggan1.jpeg",
      alt: "Keluarga bahagia liburan dengan Avanza",
      hint: "family holiday car",
    },
    {
      src: "/galeri/pelanggan/pelanggan2.jpeg",
      alt: "Pasangan romantis di samping mobil",
      hint: "couple road trip",
    },
    {
      src: "/galeri/pelanggan/pelanggan3.jpeg",
      alt: "Rombongan tur dengan Hiace",
      hint: "group tour minibus",
    },
    {
      src: "/galeri/pelanggan/pelanggan4.jpeg",
      alt: "Klien korporat dijemput di bandara",
      hint: "corporate client airport",
    },
    {
      src: "/galeri/pelanggan/pelanggan5.jpeg",
      alt: "Mahasiswa menyewa untuk acara kampus",
      hint: "student car rental",
    },
    {
      src: "/galeri/pelanggan/pelanggan6.jpeg",
      alt: "Serah terima kunci dengan senyum",
      hint: "customer smiling key",
    },
    {
      src: "/galeri/pelanggan/pelanggan7.jpeg",
      alt: "Perjalanan bisnis dengan Innova",
      hint: "business trip innova",
    },
    {
      src: "/galeri/pelanggan/pelanggan8.jpeg",
      alt: "Teman-teman road trip seru",
      hint: "friends roadtrip fun",
    },
    {
      src: "/galeri/pelanggan/pelanggan9.jpeg",
      alt: "Pengalaman pertama sewa lepas kunci",
      hint: "self drive experience",
    },
    {
      src: "/galeri/pelanggan/pelanggan10.jpeg",
      alt: "Tim event organizer menggunakan layanan kami",
      hint: "event organizer car",
    },
    {
      src: "/galeri/pelanggan/pelanggan11.jpeg",
      alt: "Pelanggan VIP dengan Alphard",
      hint: "vip client alphard",
    },
    {
      src: "/galeri/pelanggan/pelanggan12.jpeg",
      alt: "Foto di depan mobil sewaan",
      hint: "customer car photo",
    },
    {
      src: "/galeri/pelanggan/pelanggan13.jpeg",
      alt: "Anak-anak nyaman di dalam mobil",
      hint: "kids comfortable car",
    },
    {
      src: "/galeri/pelanggan/pelanggan14.jpeg",
      alt: "Driver profesional melayani tamu",
      hint: "professional driver service",
    },
    {
      src: "/galeri/pelanggan/pelanggan15.jpeg",
      alt: "Review positif dari pelanggan",
      hint: "customer review positive",
    },
    {
      src: "/galeri/pelanggan/pelanggan16.jpeg",
      alt: "Memasukkan koper ke bagasi",
      hint: "loading luggage car",
    },
    {
      src: "/galeri/pelanggan/pelanggan17.jpeg",
      alt: "Pelanggan puas dengan layanan",
      hint: "satisfied customer thumbup",
    },
    {
      src: "/galeri/pelanggan/pelanggan18.jpeg",
      alt: "Momen pernikahan dengan mobil mewah",
      hint: "wedding moment luxurycar",
    },
    {
      src: "/galeri/pelanggan/pelanggan12.jpeg",
      alt: "Perjalanan dinas yang nyaman",
      hint: "comfortable business trip",
    },
    {
      src: "/galeri/pelanggan/pelanggan14.jpeg",
      alt: "Mengisi buku tamu testimoni",
      hint: "testimonial guest book",
    },
    {
      src: "/galeri/pelanggan/pelanggan16.jpeg",
      alt: "Grup wisatawan mancanegara",
      hint: "foreign tourist group",
    },
    {
      src: "/galeri/pelanggan/pelanggan9.jpeg",
      alt: "Pelanggan reguler kami",
      hint: "regular loyal customer",
    },
    {
      src: "/galeri/pelanggan/pelanggan10.jpeg",
      alt: "Senyum saat pengembalian mobil",
      hint: "car return smile",
    },
  ],
  destinasi: [
    {
      src: "https://placehold.co/600x400.png",
      alt: "Mobil dengan latar Danau Toba",
      hint: "car lake toba",
    },
    {
      src: "https://placehold.co/600x400.png",
      alt: "SUV di dataran tinggi Berastagi",
      hint: "suv berastagi highlands",
    },
    {
      src: "https://placehold.co/600x400.png",
      alt: "Menjelajahi Istana Maimun Medan",
      hint: "maimun palace car",
    },
    {
      src: "https://placehold.co/600x400.png",
      alt: "Perjalanan ke Pulau Samosir",
      hint: "samosir island trip",
    },
    {
      src: "https://placehold.co/600x400.png",
      alt: "Fortuner di perkebunan teh Sidamanik",
      hint: "fortuner tea plantation",
    },
    {
      src: "https://placehold.co/600x400.png",
      alt: "Pajero di jalur menantang Bukit Lawang",
      hint: "pajero bukit lawang",
    },
    {
      src: "https://placehold.co/600x400.png",
      alt: "Menikmati matahari terbenam di Pantai Cermin",
      hint: "car sunset beach",
    },
    {
      src: "https://placehold.co/600x400.png",
      alt: "Wisata kuliner malam di Merdeka Walk",
      hint: "merdeka walk night",
    },
    {
      src: "https://placehold.co/600x400.png",
      alt: "Trip menuju Air Terjun Sipiso-piso",
      hint: "sipiso piso waterfall",
    },
    {
      src: "https://placehold.co/600x400.png",
      alt: "Mengunjungi Pagoda Taman Lumbini",
      hint: "lumbini pagoda berastagi",
    },
    {
      src: "https://placehold.co/600x400.png",
      alt: "Masjid Raya Medan yang megah",
      hint: "medan grand mosque",
    },
    {
      src: "https://placehold.co/600x400.png",
      alt: "Tjong A Fie Mansion",
      hint: "tjong a fie mansion",
    },
    {
      src: "https://placehold.co/600x400.png",
      alt: "Jalanan kota Medan yang sibuk",
      hint: "medan city street",
    },
    {
      src: "https://placehold.co/600x400.png",
      alt: "Pemandian air panas Sidebuk-debuk",
      hint: "sidebuk debuk hotspring",
    },
    {
      src: "https://placehold.co/600x400.png",
      alt: "Gedung London Sumatra",
      hint: "london sumatra building",
    },
    {
      src: "https://placehold.co/600x400.png",
      alt: "Pemandangan dari Bukit Gajah Bobok",
      hint: "gajah bobok hill",
    },
    {
      src: "https://placehold.co/600x400.png",
      alt: "Bandara Internasional Kualanamu",
      hint: "kualanamu airport",
    },
    {
      src: "https://placehold.co/600x400.png",
      alt: "Menyusuri jalan tol Medan-Tebing Tinggi",
      hint: "medan highway travel",
    },
    {
      src: "https://placehold.co/600x400.png",
      alt: "Bukit Indah Simarjarunjung",
      hint: "simarjarunjung hill view",
    },
    {
      src: "https://placehold.co/600x400.png",
      alt: "Salju Panas Dolok Tinggi Raja",
      hint: "dolok tinggi raja",
    },
    {
      src: "https://placehold.co/600x400.png",
      alt: "Danau Linting",
      hint: "linting lake",
    },
    {
      src: "https://placehold.co/600x400.png",
      alt: "Graha Maria Annai Velangkanni",
      hint: "velangkanni church medan",
    },
    {
      src: "https://placehold.co/600x400.png",
      alt: "Jembatan Ampera (ilustrasi perjalanan luar kota)",
      hint: "long distance travel",
    },
  ],
};

const galleryCategories = [
  { title: "Armada Kami", data: galleryData.armada, delay: "200ms" },
  { title: "Momen Pelanggan", data: galleryData.pelanggan, delay: "400ms" },
  { title: "Destinasi Wisata", data: galleryData.destinasi, delay: "600ms" },
];

const galleryPageSchema = {
  "@context": "https://schema.org",
  "@type": "ImageGallery",
  name: "Galeri Medina Rentcar Medan",
  description:
    "Lihat koleksi foto dari armada kami yang terawat, momen perjalanan pelanggan, dan keindahan destinasi wisata di sekitar Medan dan Sumatera Utara. Abadikan momen tak terlupakan bersama Medina Rentcar.",
  url: "https://Medinasewamobilmedankulanamu.com/galeri",
};

export default function GalleryPage() {
  const { openLightbox } = useImageLightbox();
  const autoplayPlugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true })
  );

  return (
    <>
      <Script
        id="gallery-page-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(galleryPageSchema) }}
      />
      <div className="bg-background w-full">
        <div className="container mx-auto px-6 py-24 sm:py-32">
          <div className="text-center mb-16 animate-fade-in-up">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground">
              Galeri Perjalanan
            </h1>
            <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
              Lihat koleksi foto dari armada kami, momen bahagia pelanggan, dan
              keindahan destinasi yang bisa Anda jelajahi.
            </p>
          </div>

          <div className="space-y-16">
            {galleryCategories.map((category) => (
              <section
                key={category.title}
                className="animate-fade-in-up"
                style={{ animationDelay: category.delay }}
              >
                <h2 className="text-3xl font-bold tracking-tight text-primary mb-8">
                  {category.title}
                </h2>
                <Carousel
                  plugins={[autoplayPlugin.current]}
                  onMouseEnter={autoplayPlugin.current.stop}
                  onMouseLeave={autoplayPlugin.current.reset}
                  opts={{
                    align: "start",
                    loop: true,
                  }}
                  className="w-full"
                >
                  <CarouselContent className="-ml-4">
                    {category.data.map((image, index) => (
                      <CarouselItem
                        key={`${category.title}-${index}`}
                        className="pl-4 basis-full md:basis-1/2 lg:basis-1/2"
                      >
                        <div className="p-1">
                          <Card className="overflow-hidden rounded-xl group transform transition-transform duration-300 hover:-translate-y-1 hover:shadow-xl">
                            <Image
                              src={image.src}
                              alt={image.alt}
                              width={1200}
                              height={600}
                              data-ai-hint={image.hint}
                              className="aspect-video w-full object-cover transition-transform duration-500 group-hover:scale-105 cursor-pointer"
                              onClick={() => openLightbox(image.src)}
                            />
                          </Card>
                        </div>
                      </CarouselItem>
                    ))}
                  </CarouselContent>
                  <CarouselPrevious className="flex" />
                  <CarouselNext className="flex" />
                </Carousel>
              </section>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
