"use client";
import { useState, useMemo, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { FleetCard } from "@/components/fleet-card";
import Script from "next/script";
import { FleetFilter, type FilterValues } from "@/components/fleet-filter";
import { carData } from "@/lib/car-data";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { SearchX } from "lucide-react";

const generateItemListSchema = (cars: any[]) => {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Armada Mobil Medina Rentcar",
    description:
      "Daftar mobil yang tersedia untuk disewa di Medina Rentcar Medan.",
    itemListElement: cars.map((car, index) => {
      const getPrice = (prices: any) => {
        if (prices.matic)
          return parseFloat(prices.matic.replace(/[^0-9]/g, ""));
        if (prices.manual)
          return parseFloat(prices.manual.replace(/[^0-9]/g, ""));
        return 0;
      };

      return {
        "@type": "ListItem",
        position: index + 1,
        item: {
          "@type": "Product",
          name: car.name,
          description: car.description,
          image: car.image,
          brand: {
            "@type": "Brand",
            name: car.name.split(" ")[0],
          },
          modelDate: car.year.split("-")[0],
          vehicleModelDate: car.year,
          fuelType: car.fuel,
          vehicleTransmission: car.transmission,
          vehicleSeatingCapacity: car.capacity.toString(),
          offers: {
            "@type": "Offer",
            priceCurrency: "IDR",
            price: getPrice(car.prices),
            availability: "https://schema.org/InStock",
            seller: {
              "@type": "Organization",
              name: "MEDINA RENTCAR MEDAN",
            },
          },
        },
      };
    }),
  };
};

function ArmadaPageContent() {
  const searchParams = useSearchParams();
  const initialQuery = searchParams.get("q") || "";

  const [filters, setFilters] = useState<FilterValues>({
    query: initialQuery,
    type: "all",
    transmission: "all",
    capacity: 2,
  });

  const filteredCars = useMemo(() => {
    return carData.filter((car) => {
      const queryMatch =
        filters.query.toLowerCase() === "" ||
        car.name.toLowerCase().includes(filters.query.toLowerCase()) ||
        car.description.toLowerCase().includes(filters.query.toLowerCase()) ||
        car.hint.toLowerCase().includes(filters.query.toLowerCase());

      const typeMatch = filters.type === "all" || car.type === filters.type;

      const transmissionMatch =
        filters.transmission === "all" ||
        (filters.transmission === "Manual" &&
          car.transmission.includes("Manual")) ||
        (filters.transmission === "Matic" &&
          car.transmission.includes("Matic"));

      const capacityMatch = car.capacity >= filters.capacity;

      return queryMatch && typeMatch && transmissionMatch && capacityMatch;
    });
  }, [filters]);

  const itemListSchema = generateItemListSchema(filteredCars);

  return (
    <>
      <Script
        id="armada-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }}
      />
      <div className="bg-background">
        <div className="container mx-auto px-6 pt-24 pb-12 sm:pt-32">
          <div className="text-center mb-12 animate-fade-in-up">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground">
              Jelajahi Armada Kami
            </h1>
            <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
              Gunakan filter untuk menemukan mobil yang paling sesuai dengan
              kebutuhan Anda.
            </p>
          </div>

          <div
            className="mb-16 animate-fade-in-up"
            style={{ animationDelay: "200ms" }}
          >
            <FleetFilter
              initialQuery={initialQuery}
              onFilterChange={(newFilters) => setFilters(newFilters)}
            />
          </div>

          {filteredCars.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredCars.map((car, index) => (
                <div
                  key={car.slug}
                  className="animate-fade-in-up"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <FleetCard car={car} />
                </div>
              ))}
            </div>
          ) : (
            <div
              className="text-center animate-fade-in-up"
              style={{ animationDelay: "400ms" }}
            >
              <Alert className="max-w-md mx-auto bg-card/50">
                <SearchX className="h-5 w-5" />
                <AlertTitle>Tidak Ada Hasil</AlertTitle>
                <AlertDescription>
                  Maaf, tidak ada mobil yang cocok dengan kriteria pencarian
                  Anda. Coba ubah atau reset filter.
                </AlertDescription>
              </Alert>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default function ArmadaPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ArmadaPageContent />
    </Suspense>
  );
}
