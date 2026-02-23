import { FleetCard } from './fleet-card';
import { Button } from './ui/button';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { carData } from '@/lib/car-data';

// Select a few featured cars from the main data source
const featuredCarSlugs = [
  'toyota-alphard-2023',
  'mitsubishi-pajero-2023',
  'innova-zenix-2024',
  'mitsubishi-xpander-2023',
];

const featuredCars = carData.filter(car => featuredCarSlugs.includes(car.slug));


export function FeaturedFleet() {
    return (
        <section className="py-20 md:py-32 bg-card/20 overflow-hidden">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16 animate-fade-in-up">
                    <h2 className="text-4xl md:text-5xl font-bold tracking-tight">Armada Unggulan Kami</h2>
                    <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">Dari sedan mewah hingga SUV tangguh, temukan kendaraan yang sempurna untuk kebutuhan Anda.</p>
                </div>
                <div className="grid md:grid-cols-2 gap-8">
                    {featuredCars.map((car, index) => (
                         <div key={car.slug} className="animate-fade-in-up" style={{ animationDelay: `${200 + index * 100}ms` }}>
                            <FleetCard car={car} />
                        </div>
                    ))}
                </div>
                <div className="text-center mt-16 animate-fade-in-up" style={{ animationDelay: '400ms'}}>
                  <Button asChild size="lg" className="rounded-full font-bold">
                    <Link href="/armada">Lihat Semua Armada <ArrowRight className="ml-2 h-5 w-5" /></Link>
                  </Button>
                </div>
            </div>
        </section>
    );
}
