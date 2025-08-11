"use client";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { GradientText } from "@/components/ui/gradient-text";
import { useImageLightbox } from "@/components/image-lightbox";

export function HeroSection() {
  const { openLightbox } = useImageLightbox();
  const whatsappUrl = `https://wa.me/6282277757234?text=${encodeURIComponent(
    "Halo Medina Rentcar, saya tertarik untuk menyewa mobil."
  )}`;
  const heroImage = "/hero-section.webp";

  return (
    <section className="py-20 md:py-24 bg-background overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 md:gap-8 items-center">
          {/* Left Column - Text Content */}
          <div
            className="animate-fade-in-right text-center md:text-left"
            style={{ animationDelay: "200ms" }}
          >
            <GradientText
              className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-foreground"
              colors={[
                "hsl(var(--foreground))",
                "hsl(var(--primary))",
                "hsl(var(--foreground))",
              ]}
              animationSpeed={5}
            >
              MEDINA RENTCAR <span className="text-primary">MEDAN</span>
            </GradientText>

            <p className="mt-4 text-lg md:text-xl text-muted-foreground max-w-lg mx-auto md:mx-0">
              GROUP PT VICKY RENTAL NUSANTARA
            </p>
            <p className="mt-6 text-muted-foreground max-w-lg mx-auto md:mx-0">
              Perjalanan Anda di Medan layak mendapatkan yang terbaik. Kami
              tidak hanya menyewakan mobil, kami memberikan jaminan kenyamanan,
              kemewahan, dan keandalan. Armada premium dan pelayanan personal
              kami siap mengubah setiap momen perjalanan Anda menjadi kenangan
              tak terlupakan. Jangan puas dengan yang biasa.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <Button asChild size="lg" className="rounded-full font-bold">
                <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                  Booking via WA
                </a>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="rounded-full font-bold"
              >
                <Link href="/armada">
                  Lihat Armada <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>

          {/* Right Column - Image */}
          <div
            className="animate-fade-in-left"
            style={{ animationDelay: "400ms" }}
          >
            <div
              className="cursor-pointer"
              onClick={() => openLightbox(heroImage)}
            >
              <Image
                src={heroImage}
                data-ai-hint="modern car fleet"
                alt="Armada Medina Rentcar"
                width={1200}
                height={600}
                priority
                className="rounded-2xl mx-auto shadow-2xl transition-transform duration-300 hover:scale-105"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
