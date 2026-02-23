import Link from "next/link";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "./ui/button";
import { ArrowRight } from "lucide-react";

const highlightFaqs = [
    {
      question: "Apa saja syarat untuk sewa mobil lepas kunci?",
      answer: "Anda wajib menyediakan E-KTP dan SIM A yang berlaku. Sebagai jaminan tambahan, penyewa dari luar kota juga diwajibkan menunjukkan bukti tiket pesawat.",
    },
    {
      question: "Apakah harga sewa sudah termasuk supir dan BBM?",
      answer: "Kami menyediakan paket lengkap dengan supir dan BBM untuk perjalanan dalam kota. Untuk sewa lepas kunci, berlaku kebijakan BBM level-to-level.",
    },
    {
      question: "Bisakah mobil diantar ke bandara atau hotel?",
      answer: "Tentu! Kami menyediakan layanan antar-jemput gratis di Bandara Kualanamu dan di lokasi lain dalam kota Medan sesuai kesepakatan.",
    }
];

export function FaqHighlights() {
    return (
        <section className="py-20 md:py-32 bg-background">
            <div className="container mx-auto px-6">
                <div className="grid lg:grid-cols-2 gap-12 md:gap-16 items-center">
                    <div className="animate-fade-in-right">
                        <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-primary">Punya Pertanyaan?</h2>
                        <p className="mt-4 text-lg text-muted-foreground">
                            Kami telah merangkum beberapa pertanyaan yang paling sering diajukan oleh pelanggan kami untuk membantu Anda.
                        </p>
                         <Button asChild size="lg" className="mt-8 rounded-full font-bold">
                            <Link href="/faq">Lihat Semua Pertanyaan <ArrowRight className="ml-2 h-5 w-5" /></Link>
                        </Button>
                    </div>
                     <div className="animate-fade-in-left">
                        <Accordion type="single" collapsible className="w-full">
                            {highlightFaqs.map((item, index) => (
                                <AccordionItem key={index} value={`item-${index}`} className="border-none mb-4">
                                <AccordionTrigger className="flex justify-between items-center w-full p-6 rounded-2xl text-left cursor-pointer transition-all duration-300 hover:no-underline bg-card/50 hover:bg-card/80 border border-border/20 data-[state=open]:bg-card/80">
                                    <span className="text-lg font-bold">{item.question}</span>
                                </AccordionTrigger>
                                <AccordionContent className="mt-2 p-6 bg-card/50 rounded-b-2xl border-x border-b border-border/20 text-muted-foreground leading-relaxed">
                                    {item.answer}
                                </AccordionContent>
                                </AccordionItem>
                            ))}
                        </Accordion>
                     </div>
                </div>
            </div>
        </section>
    );
}
