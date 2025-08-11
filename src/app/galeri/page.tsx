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
      alt: "Interior mewah Toyota Alphard, ideal untuk perjalanan VIP",
      hint: "alphard interior vip",
    },
    {
      src: "/galeri/armada/armada2.jpeg",
      alt: "Tampilan eksterior gagah Mitsubishi Pajero Sport",
      hint: "pajero sport exterior",
    },
    {
      src: "/galeri/armada/armada3.jpeg",
      alt: "Dashboard modern Toyota Innova Zenix",
      hint: "innova zenix dashboard",
    },
    {
      src: "/galeri/armada/armada4.jpeg",
      alt: "Kursi captain seat nyaman di Hiace Premio Luxury",
      hint: "hiace premio luxury",
    },
    {
      src: "/galeri/armada/armada5.jpeg",
      alt: "Toyota Fortuner SUV tangguh untuk segala medan",
      hint: "toyota fortuner suv",
    },
    {
      src: "/galeri/armada/armada6.jpeg",
      alt: "Interior mobil bersih dan terawat untuk kenyamanan Anda",
      hint: "clean car interior",
    },
    {
      src: "/galeri/armada/armada8.jpeg",
      alt: "Mobil double cabin Hilux siap untuk proyek atau off-road",
      hint: "hilux pickup project",
    },
    {
      src: "/galeri/armada/armada7.jpeg",
      alt: "Tampilan samping stylish Mitsubishi Xpander",
      hint: "xpander side view",
    },
    {
      src: "/galeri/armada/armada9.jpeg",
      alt: "Deretan armada mobil rental yang siap disewa",
      hint: "car fleet ready",
    },
    {
      src: "/galeri/armada/armada10.jpeg",
      alt: "Detail velg sporty dan modern dari salah satu unit kami",
      hint: "sporty wheel detail",
    },
    {
      src: "/galeri/armada/armada11.jpeg",
      alt: "Kabin luas Isuzu Elf, cocok untuk rombongan besar",
      hint: "isuzu elf cabin",
    },
    {
      src: "/galeri/armada/armada12.jpeg",
      alt: "Toyota Rush di area parkir, cocok untuk keluarga",
      hint: "toyota rush parking",
    },
    {
      src: "/galeri/armada/armada13.jpeg",
      alt: "Suzuki Ertiga Hybrid, mobil irit dan modern",
      hint: "ertiga hybrid modern",
    },
    {
      src: "/galeri/armada/armada14.jpeg",
      alt: "Honda Brio lincah untuk di dalam kota",
      hint: "honda brio city",
    },
    {
      src: "/galeri/armada/armada15.jpeg",
      alt: "Daihatsu Sigra, mobil keluarga yang ekonomis",
      hint: "daihatsu sigra family",
    },
    {
      src: "/galeri/armada/armada16.jpeg",
      alt: "Proses desinfeksi rutin untuk menjamin kebersihan mobil",
      hint: "car disinfection service",
    },
    {
      src: "/galeri/armada/armada17.jpeg",
      alt: "Pengecekan mesin rutin untuk memastikan keamanan perjalanan",
      hint: "engine check maintenance",
    },
    {
      src: "/galeri/armada/armada18.jpeg",
      alt: "Unit dilengkapi GPS untuk navigasi yang aman",
      hint: "car gps navigation",
    },
    {
      src: "/galeri/armada/armada19.jpeg",
      alt: "Mobil pernikahan yang dihias elegan untuk momen spesial",
      hint: "wedding car decorated",
    },
  ],
  pelanggan: [
    {
      src: "/galeri/pelanggan/pelanggan1.jpeg",
      alt: "Keluarga sedang liburan menggunakan mobil sewaan Avanza",
      hint: "family holiday car",
    },
    {
      src: "/galeri/pelanggan/pelanggan2.jpeg",
      alt: "Pasangan romantis berfoto saat road trip",
      hint: "couple road trip",
    },
    {
      src: "/galeri/pelanggan/pelanggan3.jpeg",
      alt: "Rombongan tur kantor atau keluarga naik Hiace",
      hint: "group tour minibus",
    },
    {
      src: "/galeri/pelanggan/pelanggan4.jpeg",
      alt: "Klien korporat dijemput langsung di bandara",
      hint: "corporate client airport",
    },
    {
      src: "/galeri/pelanggan/pelanggan5.jpeg",
      alt: "Mahasiswa menyewa mobil untuk kegiatan kampus",
      hint: "student car rental",
    },
    {
      src: "/galeri/pelanggan/pelanggan6.jpeg",
      alt: "Pelanggan menerima kunci mobil dengan senyum puas",
      hint: "customer smiling key",
    },
    {
      src: "/galeri/pelanggan/pelanggan7.jpeg",
      alt: "Perjalanan bisnis yang nyaman dengan Toyota Innova",
      hint: "business trip innova",
    },
    {
      src: "/galeri/pelanggan/pelanggan8.jpeg",
      alt: "Momen seru teman-teman saat melakukan road trip",
      hint: "friends roadtrip fun",
    },
    {
      src: "/galeri/pelanggan/pelanggan9.jpeg",
      alt: "Pelanggan mencoba sewa mobil lepas kunci untuk pertama kali",
      hint: "self drive experience",
    },
    {
      src: "/galeri/pelanggan/pelanggan10.jpeg",
      alt: "Tim event organizer menggunakan jasa rental mobil",
      hint: "event organizer car",
    },
    {
      src: "/galeri/pelanggan/pelanggan11.jpeg",
      alt: "Pelanggan VIP dijemput dengan Toyota Alphard",
      hint: "vip client alphard",
    },
    {
      src: "/galeri/pelanggan/pelanggan12.jpeg",
      alt: "Foto pelanggan berpose di depan mobil sewaan",
      hint: "customer car photo",
    },
    {
      src: "/galeri/pelanggan/pelanggan13.jpeg",
      alt: "Anak-anak merasa nyaman dan aman di dalam mobil",
      hint: "kids comfortable car",
    },
    {
      src: "/galeri/pelanggan/pelanggan14.jpeg",
      alt: "Driver profesional kami sedang melayani tamu",
      hint: "professional driver service",
    },
    {
      src: "/galeri/pelanggan/pelanggan15.jpeg",
      alt: "Testimoni pelanggan yang puas dengan layanan kami",
      hint: "customer review positive",
    },
    {
      src: "/galeri/pelanggan/pelanggan16.jpeg",
      alt: "Pelanggan sedang memasukkan koper ke bagasi mobil",
      hint: "loading luggage car",
    },
    {
      src: "/galeri/pelanggan/pelanggan17.jpeg",
      alt: "Pelanggan mengacungkan jempol tanda puas dengan layanan",
      hint: "satisfied customer thumbup",
    },
    {
      src: "/galeri/pelanggan/pelanggan18.jpeg",
      alt: "Momen pernikahan dengan mobil mewah yang disewa",
      hint: "wedding moment luxurycar",
    },
    {
      src: "/galeri/pelanggan/pelanggan12.jpeg",
      alt: "Perjalanan dinas yang lancar dan nyaman",
      hint: "comfortable business trip",
    },
    {
      src: "/galeri/pelanggan/pelanggan14.jpeg",
      alt: "Pelanggan mengisi buku testimoni setelah perjalanan",
      hint: "testimonial guest book",
    },
    {
      src: "/galeri/pelanggan/pelanggan16.jpeg",
      alt: "Grup wisatawan asing sedang berlibur di Medan",
      hint: "foreign tourist group",
    },
    {
      src: "/galeri/pelanggan/pelanggan9.jpeg",
      alt: "Pelanggan setia kami yang sering menyewa",
      hint: "regular loyal customer",
    },
    {
      src: "/galeri/pelanggan/pelanggan10.jpeg",
      alt: "Pelanggan tersenyum saat mengembalikan mobil",
      hint: "car return smile",
    },
  ],
  destinasi: [
    {
      src: "/galeri/destinasi-wisata/wisata1.png",
      alt: "Mobil kami berlatar pemandangan indah Danau Toba",
      hint: "car lake toba",
    },
    {
      src: "/galeri/destinasi-wisata/wisata2.png",
      alt: "Mobil SUV menjelajah dataran tinggi Berastagi",
      hint: "suv berastagi highlands",
    },
    {
      src: "/galeri/destinasi-wisata/wisata3.png",
      alt: "Menjelajahi keindahan Istana Maimun di Medan",
      hint: "maimun palace car",
    },
    {
      src: "/galeri/destinasi-wisata/wisata4.png",
      alt: "Perjalanan ke Pulau Samosir dengan mobil nyaman",
      hint: "samosir island trip",
    },
    {
      src: "/galeri/destinasi-wisata/wisata5.png",
      alt: "Toyota Fortuner di perkebunan teh Sidamanik",
      hint: "fortuner tea plantation",
    },
    {
      src: "/galeri/destinasi-wisata/wisata6.png",
      alt: "Mobil Pajero di jalur menantang menuju Bukit Lawang",
      hint: "pajero bukit lawang",
    },
    {
      src: "/galeri/destinasi-wisata/wisata7.png",
      alt: "Mobil di tepi Pantai Cermin, menikmati matahari terbenam",
      hint: "car sunset beach",
    },
    {
      src: "/galeri/destinasi-wisata/wisata8.png",
      alt: "Kulineran malam di Merdeka Walk dengan mobil sewaan",
      hint: "merdeka walk night",
    },
    {
      src: "/galeri/destinasi-wisata/wisata9.png",
      alt: "Perjalanan ke Air Terjun Sipiso-piso yang menakjubkan",
      hint: "sipiso piso waterfall",
    },
    {
      src: "/galeri/destinasi-wisata/wisata10.png",
      alt: "Mengunjungi Pagoda Taman Lumbini di Berastagi",
      hint: "lumbini pagoda berastagi",
    },
    {
      src: "/galeri/destinasi-wisata/wisata11.png",
      alt: "Berwisata ke Masjid Raya Al-Mashun Medan yang megah",
      hint: "medan grand mosque",
    },
    {
      src: "/galeri/destinasi-wisata/wisata12.png",
      alt: "Wisata sejarah ke Tjong A Fie Mansion",
      hint: "tjong a fie mansion",
    },
    {
      src: "/galeri/destinasi-wisata/wisata13.png",
      alt: "Menyusuri jalanan ramai di pusat kota Medan",
      hint: "medan city street",
    },
    {
      src: "/galeri/destinasi-wisata/wisata14.png",
      alt: "Perjalanan ke Pemandian air panas Sidebuk-debuk",
      hint: "sidebuk debuk hotspring",
    },
    {
      src: "/galeri/destinasi-wisata/wisata15.png",
      alt: "Gedung bersejarah London Sumatra di Medan",
      hint: "london sumatra building",
    },
    {
      src: "/galeri/destinasi-wisata/wisata16.png",
      alt: "Pemandangan dari Bukit Gajah Bobok yang indah",
      hint: "gajah bobok hill",
    },
    {
      src: "/galeri/destinasi-wisata/wisata17.png",
      alt: "Penjemputan di Bandara Internasional Kualanamu",
      hint: "kualanamu airport",
    },
    {
      src: "/galeri/destinasi-wisata/wisata18.png",
      alt: "Melintas di jalan tol Medan-Tebing Tinggi yang mulus",
      hint: "medan highway travel",
    },
    {
      src: "/galeri/destinasi-wisata/wisata19.png",
      alt: "Destinasi wisata Bukit Indah Simarjarunjung",
      hint: "simarjarunjung hill view",
    },
    {
      src: "/galeri/destinasi-wisata/wisata20.png",
      alt: "Pemandangan unik Salju Panas Dolok Tinggi Raja",
      hint: "dolok tinggi raja",
    },
    {
      src: "/galeri/destinasi-wisata/wisata11.png",
      alt: "Wisata ke Danau Linting yang eksotis",
      hint: "linting lake",
    },
    {
      src: "/galeri/destinasi-wisata/wisata13.png",
      alt: "Wisata religi ke Graha Maria Annai Velangkanni",
      hint: "velangkanni church medan",
    },
    {
      src: "/galeri/destinasi-wisata/wisata15.png",
      alt: "Perjalanan lintas kota yang jauh dan nyaman",
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
