
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin } from "lucide-react";
import Script from "next/script";
import { Card } from "@/components/ui/card";

const contactPageSchema = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  "name": "Hubungi MEDINA RENTCAR MEDAN",
  "description": "Informasi kontak dan formulir untuk menghubungi MEDINA RENTCAR MEDAN untuk penyewaan mobil di Medan.",
  "url": "https://Medinasewamobilmedankulanamu.com/kontak",
   "mainEntityOfPage": {
    "@type": "WebPage",
    "@id": "https://Medinasewamobilmedankulanamu.com/kontak"
  }
};


export default function ContactPage() {
  const whatsappUrl = `https://wa.me/6282277757234?text=${encodeURIComponent('Halo Medina Rentcar, saya tertarik untuk menyewa mobil.')}`;
  return (
    <>
      <Script
        id="contact-page-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactPageSchema) }}
      />
      <div className="bg-background text-foreground overflow-hidden">
        <div className="container mx-auto px-6 py-24 sm:py-32">
          <div className="text-center mb-16 animate-fade-in-up">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight">Hubungi Kami</h1>
            <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
              Punya pertanyaan atau siap untuk memesan? Tim kami siap membantu Anda 24/7.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div className="space-y-8 animate-fade-in-right" style={{ animationDelay: '200ms' }}>
              <h2 className="text-3xl font-bold text-primary">Informasi Kontak</h2>
              <div className="space-y-6">
                <Card className="p-6 flex items-start gap-4 bg-card/50 border-border/20">
                   <button className="p-3 bg-primary/10 rounded-full text-primary ring-4 ring-primary/20">
                    <Phone size={24} />
                  </button>
                  <div className="min-w-0 overflow-hidden">
                    <h3 className="text-xl font-semibold">Telepon & WhatsApp</h3>
                    <a href={whatsappUrl} className="text-muted-foreground hover:text-primary transition-colors text-base md:text-lg break-words">
                      0822-7775-7234
                    </a>
                    <p className="text-sm text-muted-foreground/80 mt-1">Jalur cepat untuk booking dan informasi.</p>
                  </div>
                </Card>
                <Card className="p-6 flex items-start gap-4 bg-card/50 border-border/20">
                  <button className="p-3 bg-primary/10 rounded-full text-primary ring-4 ring-primary/20">
                    <Mail size={24} />
                  </button>
                  <div className="min-w-0 overflow-hidden">
                    <h3 className="text-xl font-semibold">Email</h3>
                    <a href="mailto:medinarentcarmedan@gmail.com" className="text-muted-foreground hover:text-primary transition-colors text-base md:text-lg break-words">
                      medinarentcarmedan@gmail.com
                    </a>
                     <p className="text-sm text-muted-foreground/80 mt-1">Untuk pertanyaan umum dan kerjasama.</p>
                  </div>
                </Card>
                <Card className="p-6 flex items-start gap-4 bg-card/50 border-border/20">
                   <button className="p-3 bg-primary/10 rounded-full text-primary ring-4 ring-primary/20">
                    <MapPin size={24} />
                  </button>
                  <div className="min-w-0 overflow-hidden">
                    <h3 className="text-xl font-semibold">Alamat Kantor</h3>
                    <p className="text-muted-foreground text-base md:text-lg break-words">
                      Jl. Sempurna Gg. Mawar No.12 dusun II, sambirejo timur, Kec. Medan Tembung, Kabupaten Deli Serdang, Sumatera Utara 20371
                    </p>
                     <p className="text-sm text-muted-foreground/80 mt-1">Kunjungi kami untuk konsultasi langsung.</p>
                  </div>
                </Card>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-card/50 p-8 rounded-2xl border border-border/20 animate-fade-in-left" style={{ animationDelay: '400ms' }}>
              <h2 className="text-3xl font-bold text-primary mb-6">Kirim Pesan</h2>
              <form className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="name">Nama Lengkap</Label>
                  <Input id="name" placeholder="Nama Anda" className="bg-input" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Alamat Email</Label>
                  <Input id="email" type="email" placeholder="email@anda.com" className="bg-input" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message">Pesan Anda</Label>
                  <Textarea id="message" placeholder="Tuliskan pertanyaan atau kebutuhan Anda di sini..." rows={5} className="bg-input" />
                </div>
                <Button type="submit" size="lg" className="w-full font-bold rounded-full">Kirim Pesan</Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
