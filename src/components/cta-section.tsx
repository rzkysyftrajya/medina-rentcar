"use client";

import Link from "next/link";
import { Button } from "./ui/button";
import { useState } from "react";
import { WhatsAppModal } from "./whatsapp-modal";

export function CTASection() {
  const [isWhatsAppModalOpen, setIsWhatsAppModalOpen] = useState(false);
  const whatsappMessage =
    "Halo Medina Rentcar, saya tertarik untuk menyewa mobil.";

  return (
    <section className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-6 text-center animate-fade-in-up">
        <h2 className="text-3xl md:text-4xl font-bold">
          Siap untuk Perjalanan Anda Berikutnya?
        </h2>
        <p className="text-muted-foreground mt-4 max-w-xl mx-auto">
          Hubungi kami sekarang untuk konsultasi gratis, atau jelajahi armada
          kami untuk menemukan mobil yang paling sesuai dengan kebutuhan Anda.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8">
          <Button
            size="lg"
            className="rounded-full font-bold bg-primary text-primary-foreground hover:bg-primary/90"
            onClick={() => setIsWhatsAppModalOpen(true)}
          >
            Booking via WA
          </Button>
          <Button
            asChild
            size="lg"
            variant="outline"
            className="rounded-full font-bold"
          >
            <Link href="/kontak">Hubungi Kami</Link>
          </Button>
        </div>
      </div>

      <WhatsAppModal
        isOpen={isWhatsAppModalOpen}
        onClose={() => setIsWhatsAppModalOpen(false)}
        message={whatsappMessage}
        phoneNumber="6282277757234"
      />
    </section>
  );
}
