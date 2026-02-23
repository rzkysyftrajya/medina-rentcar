"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { CheckCircle2 } from "lucide-react";
import { useState } from "react";
import { WhatsAppModal } from "./whatsapp-modal";

const packages = [
  {
    id: "lepasKunci",
    name: "Sewa Lepas Kunci (Self-Drive)",
    details: [
      "Kebebasan menjelajah Medan sesuai jadwal Anda.",
      "Pilihan mobil matic atau manual dalam kondisi prima.",
      "Syarat dan ketentuan berlaku (E-KTP, SIM A, dll).",
      "Asuransi untuk ketenangan selama berkendara.",
    ],
    price: "Mulai dari Rp 350.000",
  },
  {
    id: "dalamKota",
    name: "Paket Dalam Kota (Dengan Supir)",
    details: [
      "Sewa 12 Jam termasuk supir profesional.",
      "Termasuk biaya bahan bakar untuk area Medan.",
      "Gratis air mineral untuk penumpang.",
      "Pilihan ideal untuk meeting atau jalan-jalan di kota.",
    ],
    price: "Mulai dari Rp 450.000",
  },
  {
    id: "antarKota",
    name: "Paket Antar Kota",
    details: [
      "Layanan antar jemput ke kota-kota tetangga.",
      "Supir berpengalaman dengan rute luar kota.",
      "Harga sudah termasuk tol dan parkir.",
      "Kenyamanan ekstra untuk perjalanan jauh.",
    ],
    price: "Hubungi untuk penawaran",
  },
  {
    id: "wisataToba",
    name: "Paket Wisata Danau Toba",
    details: [
      "Trip 2 Hari 1 Malam ke destinasi ikonik.",
      "Mengunjungi Parapat, Pulau Samosir, dan Tomok.",
      "Akomodasi dan supir yang juga menjadi guide.",
      "Pengalaman wisata tak terlupakan dijamin.",
    ],
    price: "Mulai dari Rp 1.500.000",
  },
  {
    id: "sewaBulanan",
    name: "Sewa Korporat & Bulanan",
    details: [
      "Solusi transportasi jangka panjang untuk perusahaan.",
      "Kontrak fleksibel dengan layanan perawatan penuh.",
      "Pilihan unit beragam sesuai kebutuhan operasional.",
      "Harga korporat yang kompetitif.",
    ],
    price: "Penawaran Khusus",
  },
  {
    id: "weddingCar",
    name: "Mobil Pernikahan",
    details: [
      "Mobil mewah (Alphard, Camry) untuk hari spesial Anda.",
      "Termasuk dekorasi bunga standar dan supir berpakaian rapi.",
      "Layanan tepat waktu untuk kelancaran acara.",
      "Jadikan momen pernikahan Anda lebih berkesan.",
    ],
    price: "Mulai dari Rp 1.200.000",
  },
];

export function ServicePackages() {
  const [isWhatsAppModalOpen, setIsWhatsAppModalOpen] = useState(false);
  const [selectedPackage, setSelectedPackage] = useState("");

  const handlePackageClick = (packageName: string) => {
    setSelectedPackage(packageName);
    setIsWhatsAppModalOpen(true);
  };

  return (
    <div className="w-full max-w-4xl mx-auto">
      <Accordion
        type="single"
        defaultValue="lepasKunci"
        collapsible
        className="w-full"
      >
        {packages.map((pkg) => (
          <AccordionItem
            key={pkg.id}
            value={pkg.id}
            className="border-none mb-4"
          >
            <AccordionTrigger className="flex justify-between items-center w-full p-6 rounded-2xl cursor-pointer transition-all duration-300 hover:no-underline bg-card/50 hover:bg-card/80 border border-border/20 data-[state=open]:bg-primary data-[state=open]:text-primary-foreground data-[state=open]:shadow-lg data-[state=open]:shadow-primary/30">
              <span className="text-xl md:text-2xl font-bold text-left">
                {pkg.name}
              </span>
              <span className="text-lg md:text-xl font-semibold text-right">
                {pkg.price}
              </span>
            </AccordionTrigger>
            <AccordionContent className="mt-2 p-8 bg-card/80 rounded-b-2xl border-x border-b border-border/20">
              <div className="grid md:grid-cols-3 gap-8 items-center">
                <div className="md:col-span-2">
                  <h3 className="text-2xl font-bold text-primary mb-4">
                    Detail Paket
                  </h3>
                  <ul className="space-y-3">
                    {pkg.details.map((detail, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <CheckCircle2 className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                        <span className="text-muted-foreground">{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="text-center md:text-right">
                  <Button
                    size="lg"
                    className="w-full md:w-auto rounded-full font-bold bg-primary hover:bg-primary/90"
                    onClick={() => handlePackageClick(pkg.name)}
                  >
                    Pesan Paket Ini
                  </Button>
                </div>
              </div>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>

      <WhatsAppModal
        isOpen={isWhatsAppModalOpen}
        onClose={() => setIsWhatsAppModalOpen(false)}
        message={
          selectedPackage
            ? `Halo Medina Rentcar, saya tertarik dengan ${selectedPackage}.`
            : "Halo Medina Rentcar, saya tertarik untuk menyewa mobil."
        }
        phoneNumber="6282277757234"
      />
    </div>
  );
}
