
'use client';

import { useState, useEffect } from 'react';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import { X, Search } from 'lucide-react';
import { RadioGroup, RadioGroupItem } from './ui/radio-group';

export interface FilterValues {
  query: string;
  type: string;
  transmission: string;
  capacity: number;
}

interface FleetFilterProps {
  initialQuery?: string;
  onFilterChange: (filters: FilterValues) => void;
}

const carTypes = [
  'all', 'suv', 'mpv', 'minibus', 'hatchback', 'crossover', 'pickup'
];

export function FleetFilter({ initialQuery = '', onFilterChange }: FleetFilterProps) {
  const [query, setQuery] = useState(initialQuery);
  const [type, setType] = useState('all');
  const [transmission, setTransmission] = useState('all');
  const [capacity, setCapacity] = useState(2);

  useEffect(() => {
    const handler = setTimeout(() => {
        onFilterChange({ query, type, transmission, capacity });
    }, 300); // Debounce
    return () => clearTimeout(handler);
  }, [query, type, transmission, capacity, onFilterChange]);

  const handleReset = () => {
    setQuery('');
    setType('all');
    setTransmission('all');
    setCapacity(2);
    onFilterChange({ query: '', type: 'all', transmission: 'all', capacity: 2 });
  }

  return (
    <div className="p-6 md:p-8 bg-card/50 rounded-2xl border border-border/20 shadow-lg">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-end">
        {/* Search Input */}
        <div className="md:col-span-2 lg:col-span-1">
          <Label htmlFor="search-query" className="mb-2 block font-semibold">Cari Mobil</Label>
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
            <Input
              id="search-query"
              placeholder="Nama mobil..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="pl-10 h-12 text-base"
            />
          </div>
        </div>

        {/* Type Select */}
        <div>
          <Label htmlFor="car-type" className="mb-2 block font-semibold">Tipe Mobil</Label>
          <Select value={type} onValueChange={setType}>
            <SelectTrigger id="car-type" className="h-12 text-base">
              <SelectValue placeholder="Semua Tipe" />
            </SelectTrigger>
            <SelectContent>
              {carTypes.map(t => (
                <SelectItem key={t} value={t} className="capitalize text-base">{t === 'all' ? 'Semua Tipe' : t.toUpperCase()}</SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {/* Transmission Radio */}
        <div>
           <Label className="mb-3 block font-semibold">Transmisi</Label>
           <RadioGroup value={transmission} onValueChange={setTransmission} className="flex items-center space-x-4 h-12">
             <div className="flex items-center space-x-2">
               <RadioGroupItem value="all" id="trans-all" />
               <Label htmlFor="trans-all" className="text-base">Semua</Label>
             </div>
             <div className="flex items-center space-x-2">
               <RadioGroupItem value="Manual" id="trans-manual" />
               <Label htmlFor="trans-manual" className="text-base">Manual</Label>
             </div>
             <div className="flex items-center space-x-2">
               <RadioGroupItem value="Matic" id="trans-matic" />
               <Label htmlFor="trans-matic" className="text-base">Matic</Label>
             </div>
           </RadioGroup>
        </div>
        
        {/* Capacity Slider */}
        <div className="md:col-span-2 lg:col-span-1">
          <div className="flex justify-between items-center mb-2">
            <Label htmlFor="capacity" className="font-semibold">Kapasitas Penumpang</Label>
            <span className="text-primary font-bold text-lg">{capacity}+ Orang</span>
          </div>
          <Slider
            id="capacity"
            min={2}
            max={18}
            step={1}
            value={[capacity]}
            onValueChange={(value) => setCapacity(value[0])}
            className="my-4"
          />
        </div>
      </div>
      <div className="mt-6 flex justify-end">
        <Button onClick={handleReset} variant="ghost">
          <X className="mr-2 h-4 w-4" />
          Reset Filter
        </Button>
      </div>
    </div>
  );
}

    