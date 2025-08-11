import Link from "next/link";
import { Phone, Mail, Instagram, Clock } from "lucide-react";
import Image from "next/image";
import { TikTokIcon } from "./header";

export function Footer() {
  const navItems = [
    { href: "/", label: "Beranda" },
    { href: "/tentang", label: "Tentang" },
    { href: "/layanan", label: "Layanan" },
    { href: "/armada", label: "Armada" },
    { href: "/kontak", label: "Kontak" },
    { href: "/galeri", label: "Galeri" },
  ];

  const whatsappUrl = `https://wa.me/6282277757234?text=${encodeURIComponent(
    "Halo Medina Rentcar, saya tertarik untuk menyewa mobil."
  )}`;
  const mapsEmbedUrl = `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3981.9722494114576!2d98.77453057381395!3d3.5938370502605745!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x303137a8ded38db1%3A0x698e30b68ac357e5!2sPT.VICKY%20RENTAL%20NUSANTARA!5e0!3m2!1sid!2sid!4v1754893376483!5m2!1sid!2sid`;

  return (
    <footer className="bg-card/30 text-foreground py-16 md:py-20">
      <div className="container mx-auto px-6 animate-fade-in-up">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* About & Address Section */}
          <div className="space-y-4">
            <Link href="/" className="mb-4 inline-block">
              <Image
                src="/logo.png"
                alt="Medina Rentcar Logo"
                width={180}
                height={60}
                className="h-14 w-auto"
              />
            </Link>
            <p className="text-muted-foreground">
              Sewa mobil premium di Medan dengan pelayanan ramah dan armada
              terbaik.
            </p>
            <div>
              <h3 className="text-xl font-bold mb-2">Alamat</h3>
              <p className="text-muted-foreground">
                Jl. Sempurna Gg. Mawar No.12 dusun II, sambirejo timur, Kec.
                Medan Tembung, Kabupaten Deli Serdang, Sumatera Utara 20371
              </p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Navigasi</h3>
            <ul className="space-y-3">
              {navItems.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info & Socials */}
          <div>
            <h3 className="text-xl font-bold mb-4">Kontak</h3>
            <ul className="space-y-4">
              <li className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors">
                <Phone size={20} className="text-primary/70" />
                <a href={whatsappUrl}>0822-7775-7234</a>
              </li>
              <li className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors">
                <Mail size={20} className="text-primary/70" />
                <a href="mailto:medinarentcarmedan@gmail.com">
                  medinarentcarmedan@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-3 text-muted-foreground">
                <Clock size={20} className="text-primary/70" />
                <span>Buka 24 Jam Setiap Hari</span>
              </li>
            </ul>
            <h3 className="text-xl font-bold mt-8 mb-4">Ikuti Kami</h3>
            <div className="flex items-center gap-4">
              <a
                href="https://www.instagram.com/medinarentcarmedan"
                className="text-muted-foreground hover:text-primary transition-transform transform hover:scale-125"
              >
                <Instagram size={22} />
              </a>
              <a
                href="https://www.tiktok.com/@medinarentcar"
                className="text-muted-foreground hover:text-primary transition-transform transform hover:scale-125"
              >
                <TikTokIcon className="h-5 w-5" />
              </a>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-transform transform hover:scale-125"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="22"
                  height="22"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-message-circle"
                >
                  <path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Google Maps */}
          <div>
            <h3 className="text-xl font-bold mb-4">Google Maps</h3>
            <div className="rounded-lg overflow-hidden shadow-lg border border-border/20">
              <iframe
                src={mapsEmbedUrl}
                width="100%"
                height="200"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>

        <div className="mt-16 border-t border-border/20 pt-8 text-center text-sm text-muted-foreground">
          <p>
            &copy; {new Date().getFullYear()} Medina Rentcar. Hak Cipta
            Dilindungi.
          </p>
        </div>
      </div>
    </footer>
  );
}
