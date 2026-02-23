import Image from "next/image";
import { Card } from "./ui/card";
import Script from "next/script";
import { useImageLightbox } from "./image-lightbox";

const testimonials = [
  {
    quote:
      "Layanan Medina Rentcar melampaui ekspektasi. Mobil Alphard-nya sangat nyaman, supirnya sangat profesional. Perjalanan bisnis saya di Medan jadi sangat efisien dan berkesan.",
    name: "Andi Wijaya",
    title: "CEO, Tech Corp",
    image: "/testimoni/pelanggan/testi1.jpeg",
    hint: "man portrait professional",
    delay: "200ms",
  },
  {
    quote:
      "Sangat terkesan dengan kebersihan dan kondisi mobilnya. Proses booking juga cepat dan mudah. Pilihan utama untuk liburan keluarga kami selanjutnya!",
    name: "Riana Putri",
    title: "Travel Enthusiast",
    image: "/testimoni/pelanggan/testi3.jpeg",
    hint: "woman portrait elegant",
    delay: "400ms",
  },
  {
    quote:
      "Antar jemput di Bandara Kualanamu sangat tepat waktu. Drivernya ramah dan sangat membantu dengan barang bawaan kami. Memulai perjalanan di Medan jadi bebas stres.",
    name: "Keluarga Santoso",
    title: "Wisatawan Domestik",
    image: "/testimoni/pelanggan/testi4.jpeg",
    hint: "family portrait happy",
    delay: "600ms",
  },
  {
    quote:
      "Menggunakan jasa mobil pernikahan dari Medina Rentcar adalah keputusan terbaik. Mobilnya bersih, wangi, dan dekorasinya cantik. Membuat hari spesial kami jadi sempurna.",
    name: "David & Sarah",
    title: "Pengantin Baru",
    image: "/testimoni/pelanggan/testi5.jpeg",
    hint: "couple portrait wedding",
    delay: "800ms",
  },
];

const reviewSchema = testimonials.map((testimonial) => ({
  "@context": "https://schema.org",
  "@type": "Review",
  reviewBody: testimonial.quote,
  reviewRating: {
    "@type": "Rating",
    ratingValue: "5",
    bestRating: "5",
  },
  author: {
    "@type": "Person",
    name: testimonial.name,
  },
  publisher: {
    "@type": "Organization",
    name: "MEDINA RENTCAR MEDAN",
  },
}));

export function Testimonials() {
  const { openLightbox } = useImageLightbox();
  return (
    <section className="py-20 md:py-32 bg-card/20 overflow-hidden">
      <Script
        id="reviews-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewSchema) }}
      />
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
            Dipercaya oleh Pelanggan Setia
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Pengalaman mereka adalah jaminan kualitas layanan kami.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="animate-fade-in-up h-full"
              style={{ animationDelay: testimonial.delay }}
            >
              <Card className="bg-card/50 border-border/20 p-8 rounded-2xl flex flex-col items-center text-center gap-6 transform transition-all duration-300 hover:shadow-primary/20 hover:-translate-y-1 h-full">
                <Image
                  src={testimonial.image}
                  data-ai-hint={testimonial.hint}
                  alt={testimonial.name}
                  width={80}
                  height={80}
                  className="rounded-full border-4 border-primary/50 flex-shrink-0 cursor-pointer transition-transform duration-300 hover:scale-110"
                  onClick={() => openLightbox(testimonial.image)}
                />
                <blockquote className="text-muted-foreground italic text-lg mb-2 flex-grow">
                  "{testimonial.quote}"
                </blockquote>
                <div>
                  <h4 className="font-bold text-xl">{testimonial.name}</h4>
                  <p className="text-sm text-primary">{testimonial.title}</p>
                </div>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
