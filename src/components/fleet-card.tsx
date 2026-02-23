"use client";

import Image from "next/image";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Fuel, Calendar, Users, GitCommitHorizontal } from "lucide-react";
import Link from "next/link";
import { useImageLightbox } from "./image-lightbox";
import { useState } from "react";
import { WhatsAppModal } from "./whatsapp-modal";

export function FleetCard({ car }: { car: any }) {
  const { openLightbox } = useImageLightbox();
  const [isWhatsAppModalOpen, setIsWhatsAppModalOpen] = useState(false);
  const whatsappMessage = `Halo Medina Rentcar, saya tertarik untuk menyewa mobil ${car.name}.`;

  return (
    <div className="group relative h-full rounded-2xl p-0.5 transition-all duration-300">
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-primary/50 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
      <Card className="relative flex flex-col h-full overflow-hidden rounded-xl border-border/20 bg-card/80 shadow-lg transition-transform duration-300 group-hover:-translate-y-1">
        <div
          className="overflow-hidden cursor-pointer"
          onClick={() => openLightbox(car.image)}
        >
          <Image
            src={car.image}
            alt={car.name}
            width={600}
            height={400}
            className="w-full h-56 object-cover transition-transform duration-500 group-hover:scale-110"
            data-ai-hint={car.hint}
          />
        </div>
        <CardContent className="p-6 flex-grow flex flex-col">
          <h3 className="text-2xl font-bold text-foreground mb-3">
            {car.name}
          </h3>
          <p className="text-muted-foreground text-sm flex-grow mb-4">
            {car.description}
          </p>

          <div className="space-y-2 text-foreground mb-6">
            {car.prices.manual && (
              <p className="flex justify-between items-baseline">
                <span>Manual</span>{" "}
                <strong className="text-lg font-bold">
                  {car.prices.manual}
                </strong>
              </p>
            )}
            {car.prices.matic && (
              <p className="flex justify-between items-baseline">
                <span>Matic</span>{" "}
                <strong className="text-lg font-bold">
                  {car.prices.matic}
                </strong>
              </p>
            )}
            {car.prices.driver && (
              <p className="flex justify-between items-baseline">
                <span>Dengan Supir</span>{" "}
                <strong className="text-lg font-bold">
                  {car.prices.driver}
                </strong>
              </p>
            )}
          </div>

          <div className="grid grid-cols-2 gap-3 text-sm text-muted-foreground">
            <div
              className="flex items-center gap-2 p-2 rounded-md bg-primary/5"
              title="Tahun"
            >
              <Calendar className="h-4 w-4 text-primary/80" />
              <span>{car.year}</span>
            </div>
            <div
              className="flex items-center gap-2 p-2 rounded-md bg-primary/5"
              title="Bahan Bakar"
            >
              <Fuel className="h-4 w-4 text-primary/80" />
              <span>{car.fuel}</span>
            </div>
            <div
              className="flex items-center gap-2 p-2 rounded-md bg-primary/5"
              title="Kapasitas"
            >
              <Users className="h-4 w-4 text-primary/80" />
              <span>{car.capacity} Orang</span>
            </div>
            <div
              className="flex items-center gap-2 p-2 rounded-md bg-primary/5"
              title="Transmisi"
            >
              <GitCommitHorizontal className="h-4 w-4 text-primary/80" />
              <span>{car.transmission}</span>
            </div>
          </div>
        </CardContent>
        <CardFooter className="p-6 pt-4 flex gap-2">
          <Button
            asChild
            variant="outline"
            className="w-full rounded-full font-bold"
          >
            <Link href={`/armada/${car.slug}`}>Lihat Detail</Link>
          </Button>
          <Button
            size="lg"
            className="w-full bg-primary text-primary-foreground hover:bg-primary/90 rounded-full font-bold transition-transform duration-300 group-hover:scale-105"
            onClick={() => setIsWhatsAppModalOpen(true)}
          >
            Pesan
          </Button>
        </CardFooter>
      </Card>

      <WhatsAppModal
        isOpen={isWhatsAppModalOpen}
        onClose={() => setIsWhatsAppModalOpen(false)}
        message={whatsappMessage}
        phoneNumber="6282277757234"
      />
    </div>
  );
}
