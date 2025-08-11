
'use client';
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { Fuel, Calendar, Users, GitCommitHorizontal, CheckCircle2, ArrowLeft } from "lucide-react";
import { Card } from "@/components/ui/card";
import { FeaturedFleet } from "@/components/featured-fleet";
import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useImageLightbox } from "@/components/image-lightbox";

export function CarDetailClient({ car }: { car: any }) {
  const [activeImage, setActiveImage] = useState(0);
  const { openLightbox } = useImageLightbox();

  if (!car) {
    return null; // Or some fallback UI
  }
  
  const galleryImages = [
    { src: car.image, alt: `Tampilan eksterior ${car.name}`, label: "Eksterior" },
    { src: car.gallery?.interior || 'https://placehold.co/600x400.png', alt: `Tampilan interior ${car.name}`, label: "Interior" },
    { src: car.gallery?.front || 'https://placehold.co/600x400.png', alt: `Tampilan depan ${car.name}`, label: "Depan" },
    { src: car.gallery?.back || 'https://placehold.co/600x400.png', alt: `Tampilan belakang ${car.name}`, label: "Belakang" },
  ];
  
  const whatsappUrl = `https://wa.me/6282277757234?text=${encodeURIComponent(`Halo Medina Rentcar, saya tertarik untuk menyewa mobil ${car.name}.`)}`;

  return (
    <div className="bg-background text-foreground">
      <div className="container mx-auto px-6 pt-28 pb-12">
        {/* Main Detail Section */}
        <div className="grid lg:grid-cols-5 gap-8 md:gap-12 animate-fade-in-up">
          {/* Image Gallery */}
          <div className="lg:col-span-3">
             <div className="space-y-4">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={activeImage}
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.95 }}
                        transition={{ duration: 0.3, ease: 'easeInOut' }}
                        className="relative aspect-video w-full overflow-hidden rounded-2xl shadow-lg"
                    >
                        <Image
                            src={galleryImages[activeImage].src}
                            alt={galleryImages[activeImage].alt}
                            fill
                            className="object-cover cursor-pointer transition-transform duration-300 hover:scale-105"
                            onClick={() => openLightbox(galleryImages[activeImage].src)}
                            priority
                            data-ai-hint={car.hint}
                        />
                    </motion.div>
                </AnimatePresence>

                <div className="grid grid-cols-4 gap-4">
                    {galleryImages.map((image, index) => (
                        <button 
                            key={index} 
                            onClick={() => setActiveImage(index)}
                            className={`relative aspect-video w-full overflow-hidden rounded-lg transition-all duration-200 ${activeImage === index ? 'ring-2 ring-primary ring-offset-2 ring-offset-background shadow-lg' : 'opacity-70 hover:opacity-100'}`}
                        >
                            <Image
                                src={image.src}
                                alt={image.label}
                                fill
                                className="object-cover cursor-pointer"
                                onClick={() => openLightbox(image.src)}
                                data-ai-hint={car.hint}
                            />
                            <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                                <span className="text-white text-xs font-bold">{image.label}</span>
                            </div>
                        </button>
                    ))}
                </div>
            </div>
          </div>

          {/* Details and Booking */}
          <div className="lg:col-span-2">
            <Card className="bg-card/50 border-border/20 p-6 md:p-8 rounded-2xl lg:sticky lg:top-28">
               <Button asChild variant="ghost" className="mb-4 -ml-4">
                <Link href="/armada">
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Kembali ke Armada
                </Link>
              </Button>
              <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-primary mb-2">{car.name}</h1>
              <p className="text-muted-foreground mb-6">{car.description}</p>
              
              <div className="space-y-3 text-foreground mb-6 bg-card/80 p-4 rounded-lg">
                
                {car.prices.manual && <p className="flex justify-between items-baseline"><span>Manual</span> <strong className="text-lg md:text-xl font-bold">{car.prices.manual}</strong></p>}
                {car.prices.matic && <p className="flex justify-between items-baseline"><span>Matic</span> <strong className="text-lg md:text-xl font-bold">{car.prices.matic}</strong></p>}
                {car.prices.driver && <p className="flex justify-between items-baseline"><span>Dengan Supir</span> <strong className="text-lg md:text-xl font-bold">{car.prices.driver}</strong></p>}
              </div>

              <Button asChild size="lg" className="w-full bg-primary text-primary-foreground hover:bg-primary/90 rounded-full font-bold text-lg py-7 mt-4">
                  <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                      Pesan Mobil Ini Sekarang
                  </a>
              </Button>
            </Card>
          </div>
        </div>

        {/* Full Details Section */}
        <div className="mt-16 md:mt-24">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="animate-fade-in-up" style={{animationDelay: '200ms'}}>
              <h2 className="text-2xl md:text-3xl font-bold mb-4 text-primary">Keunggulan Utama</h2>
              <ul className="space-y-3 text-muted-foreground">
                {(car.advantages || []).map((adv, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                    <span>{adv}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="animate-fade-in-up" style={{animationDelay: '400ms'}}>
              <h2 className="text-2xl md:text-3xl font-bold mb-4 text-primary">Spesifikasi Kendaraan</h2>
               <div className="grid grid-cols-2 gap-4 text-base">
                  <div className="flex items-center gap-3 p-3 rounded-lg bg-primary/10">
                      <Calendar className="h-5 w-5 text-primary" />
                      <span>Tahun: <strong>{car.year}</strong></span>
                  </div>
                  <div className="flex items-center gap-3 p-3 rounded-lg bg-primary/10">
                      <Fuel className="h-5 w-5 text-primary" />
                      <span>BBM: <strong>{car.fuel}</strong></span>
                  </div>
                  <div className="flex items-center gap-3 p-3 rounded-lg bg-primary/10">
                      <Users className="h-5 w-5 text-primary" />
                      <span>Kapasitas: <strong>{car.capacity} Orang</strong></span>
                  </div>
                  <div className="flex items-center gap-3 p-3 rounded-lg bg-primary/10">
                      <GitCommitHorizontal className="h-5 w-5 text-primary" />
                      <span>Transmisi: <strong>{car.transmission}</strong></span>
                  </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Other Cars Section */}
      <div className="py-16">
        <FeaturedFleet />
      </div>

    </div>
  );
}
