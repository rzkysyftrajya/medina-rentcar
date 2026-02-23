import { Button } from "./ui/button";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useImageLightbox } from "./image-lightbox";

const highlightItems = [
  "Rental Lepas Kunci & Dengan Supir",
  "Paket Wisata (Danau Toba, Berastagi)",
  "Antar Jemput Bandara Kualanamu",
  "Sewa Mobil Pernikahan",
  "Rental Mobil Bulanan untuk Korporat",
];

export function ServiceHighlights() {
  const { openLightbox } = useImageLightbox();
  const serviceImage = "/layanan.jpeg";

  return (
    <section className="py-20 md:py-32 bg-background overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div
            className="animate-fade-in-right cursor-pointer"
            style={{ animationDelay: "200ms" }}
            onClick={() => openLightbox(serviceImage)}
          >
            <Image
              src={serviceImage}
              data-ai-hint="man giving car keys"
              alt="Layanan medina rentcar"
              width={600}
              height={400}
              className="rounded-2xl shadow-lg transition-transform duration-300 hover:scale-105"
            />
          </div>
          <div
            className="animate-fade-in-left"
            style={{ animationDelay: "400ms" }}
          >
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
              Layanan Lengkap Sesuai Kebutuhan
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Apapun kebutuhan perjalanan Anda, kami memiliki solusi yang
              fleksibel dan dapat diandalkan.
            </p>
            <ul className="mt-8 space-y-4">
              {highlightItems.map((item, index) => (
                <li key={index} className="flex items-center gap-3 text-lg">
                  <CheckCircle2 className="h-6 w-6 text-primary" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <div className="mt-10">
              <Button asChild size="lg" className="rounded-full font-bold">
                <Link href="/layanan">
                  Lihat Semua Layanan <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
