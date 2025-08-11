import { ServicePackages } from "@/components/service-packages";
import Script from "next/script";

const services = [
  { 
    id: 'lepasKunci', 
    name: 'Sewa Lepas Kunci (Self-Drive)',
    description: 'Nikmati kebebasan menjelajah Medan dengan menyetir sendiri. Pilihan mobil matic atau manual dalam kondisi prima.',
    price: 'Mulai dari Rp 350.000'
  },
  { 
    id: 'dalamKota', 
    name: 'Paket Dalam Kota (Dengan Supir)',
    description: 'Sewa 12 jam termasuk supir profesional dan bahan bakar untuk area Medan. Ideal untuk meeting atau jalan-jalan.',
    price: 'Mulai dari Rp 450.000'
  },
  { 
    id: 'antarKota', 
    name: 'Paket Antar Kota',
    description: 'Layanan antar jemput ke kota-kota tetangga dengan supir berpengalaman untuk kenyamanan perjalanan jauh.',
    price: 'Hubungi untuk penawaran'
  },
  { 
    id: 'wisataToba', 
    name: 'Paket Wisata Danau Toba',
    description: 'Trip 2 Hari 1 Malam ke Parapat, Pulau Samosir, dan Tomok, termasuk akomodasi dan supir/guide.',
     price: 'Mulai dari Rp 1.500.000'
  },
  {
    id: "sewaBulanan",
    name: "Sewa Korporat & Bulanan",
    description: 'Solusi transportasi jangka panjang untuk perusahaan dengan kontrak fleksibel dan layanan perawatan penuh.',
    price: "Penawaran Khusus",
  },
  {
    id: "weddingCar",
    name: "Mobil Pernikahan",
    description: 'Sewa mobil mewah (Alphard, Camry) untuk hari spesial Anda, termasuk dekorasi dan supir profesional.',
    price: "Mulai dari Rp 1.200.000",
  },
];

const serviceSchema = services.map(service => ({
  "@context": "https://schema.org",
  "@type": "Service",
  "serviceType": service.name,
  "name": service.name,
  "description": service.description,
  "provider": {
    "@type": "Organization",
    "name": "MEDINA RENTCAR MEDAN"
  },
  ...(service.price.includes('Rp') && {
    "offers": {
      "@type": "Offer",
      "priceCurrency": "IDR",
      "price": parseFloat(service.price.replace(/[^0-9]/g, ''))
    }
  })
}));


export default function LayananPage() {
  return (
    <>
      <Script
          id="services-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <div className="bg-background">
        <div className="container mx-auto px-6 py-24 sm:py-32">
          <div className="text-center mb-16 max-w-3xl mx-auto animate-fade-in-up">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground">Paket dan Layanan</h1>
            <p className="text-muted-foreground mt-4">
              Kami menyediakan berbagai pilihan paket rental untuk memenuhi segala kebutuhan perjalanan Anda di Medan dan sekitarnya, mulai dari sewa harian hingga kontrak bulanan perusahaan.
            </p>
          </div>
          <div className="animate-fade-in-up" style={{ animationDelay: '200ms' }}>
              <ServicePackages />
          </div>
        </div>
      </div>
    </>
  );
}
