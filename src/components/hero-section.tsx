import { Button } from "@/components/ui/button";
import Link from "next/link";
import { HeroTitle } from "./hero-title";
import Image from "next/image"; // Perbaikan ada di sini
import StarBorder from "./star-border";

export function HeroSection() {
  const whatsappUrl = `https://wa.me/6282277757234?text=${encodeURIComponent(
    "Halo Medina Rentcar, saya tertarik untuk menyewa mobil."
  )}`;
  return (
    <section className="relative h-screen flex items-center justify-center text-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent z-10"></div>
      <div className="absolute inset-x-0 top-0 h-1/2 bg-gradient-to-b from-black/60 to-transparent z-0"></div>

      <div className="container mx-auto px-6 z-20 flex flex-col justify-end items-center h-full pb-16 md:pb-28">
        <div className="w-full mb-auto flex flex-col justify-center items-center pt-32">
          <HeroTitle />
          <p
            className="mt-6 text-xl md:text-2xl text-muted-foreground animate-fade-in-up max-w-3xl mx-auto"
            style={{ animationDelay: "0.5s" }}
          >
            GROUP PT VICKY RENTAL NUSANTARA
          </p>
          <div
            className="mt-8 animate-fade-in-up"
            style={{ animationDelay: "0.7s" }}
          >
            <Image
              src="/hero-section.webp"
              data-ai-hint="car fleet modern"
              alt="Medina Rentcar Fleet"
              width={1200}
              height={600}
              quality={100}
              sizes="100vw"
              className="rounded-lg shadow-2xl"
              priority
            />
          </div>
        </div>
        <div className="animate-fade-in-up" style={{ animationDelay: "0.8s" }}>
          <StarBorder thickness="2px" color="hsl(var(--primary))">
            <Button
              asChild
              className="text-lg font-bold px-10 py-7 rounded-full bg-primary/90 hover:bg-primary/80 transition-all transform hover:scale-105 shadow-2xl shadow-primary/40 ring-4 ring-primary/20 hover:ring-primary/40 w-full"
            >
              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                Booking via WA
              </a>
            </Button>
          </StarBorder>
        </div>
      </div>
    </section>
  );
}
