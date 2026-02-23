
import { carData } from "@/lib/car-data";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import { CarDetailClient } from "@/components/car-detail-client";

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const car = carData.find((c) => c.slug === params.slug);

  if (!car) {
    return {
      title: 'Mobil Tidak Ditemukan',
      description: 'Halaman mobil yang Anda cari tidak ada.',
    };
  }

  return {
    title: `Sewa ${car.name} di Medan - Medina Rentcar`,
    description: car.description,
    openGraph: {
      title: `Sewa ${car.name} di Medan`,
      description: car.description,
      images: [
        {
          url: car.image,
          width: 1200,
          height: 630,
          alt: `Medina Rentcar - ${car.name}`,
        },
      ],
    },
  };
}

export async function generateStaticParams() {
    return carData.map((car) => ({
      slug: car.slug,
    }));
}

export default function CarDetailPage({ params }: { params: { slug: string } }) {
  const car = carData.find((c) => c.slug === params.slug);

  if (!car) {
    notFound();
  }
  
  return <CarDetailClient car={car} />;
}
