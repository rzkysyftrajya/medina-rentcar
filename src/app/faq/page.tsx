import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Script from "next/script";
import Link from "next/link";

const faqData = {
  umum: [
    {
      question: "Apa saja syarat untuk sewa mobil lepas kunci?",
      answer:
        "Untuk sewa lepas kunci, Anda wajib menyediakan dokumen berikut: E-KTP, SIM A yang masih berlaku, dan bukti identitas lain seperti NPWP atau Paspor. Bagi penyewa dari luar kota, diwajibkan untuk menunjukkan bukti tiket pesawat sebagai jaminan tambahan. Di wajibkan menggunakan deposit.",
    },
    {
      question: "Apakah layanan antar-jemput di Bandara Kualanamu tersedia?",
      answer:
        "Ya, kami menyediakan layanan antar-jemput gratis di Bandara Internasional Kualanamu. Tim kami akan menunggu Anda di pintu kedatangan dengan papan nama untuk kemudahan.",
    },
    {
      question: "Bolehkah mobil dibawa keluar kota Medan?",
      answer:
        "Tentu saja. Anda bisa menggunakan mobil kami untuk perjalanan ke luar kota. Mohon informasikan kepada kami destinasi tujuan Anda saat melakukan pemesanan untuk penyesuaian dan memastikan mobil dalam kondisi terbaik untuk perjalanan jauh.",
    },
    {
      question: "Bagaimana kondisi mobil yang disewakan?",
      answer:
        "Kami sangat bangga dengan kualitas armada kami. Semua mobil kami adalah model tahun terbaru yang selalu dirawat secara berkala di bengkel resmi. Kebersihan interior dan eksterior juga menjadi prioritas utama kami sebelum mobil diserahkan kepada Anda.",
    },
  ],
  harga: [
    {
      question: "Bagaimana cara melakukan pembayaran?",
      answer:
        "Pembayaran dapat dilakukan melalui transfer bank atau pembayaran tunai. Uang muka (DP) sebesar 50% wajib dibayarkan saat booking untuk mengunci jadwal, dan pelunasan dilakukan saat serah terima kendaraan.",
    },
    {
      question: "Apakah harga sewa sudah termasuk BBM?",
      answer:
        "Untuk sewa dengan supir dalam kota, harga biasanya sudah termasuk BBM. Untuk sewa lepas kunci, kami menerapkan kebijakan BBM 'level-to-level', di mana Anda mengembalikan mobil dengan level BBM yang sama seperti saat diterima.",
    },
    {
      question:
        "Apakah ada biaya tambahan untuk overtime (kelebihan waktu sewa)?",
      answer:
        "Ya, ada biaya overtime yang akan dikenakan jika Anda mengembalikan mobil melewati batas waktu sewa. Biaya overtime adalah 10% dari harga sewa harian, dihitung per jam. Kelebihan waktu lebih dari 5 jam akan dihitung sebagai sewa satu hari penuh.",
    },
    {
      question: "Apakah ada deposit atau uang jaminan?",
      answer:
        "Untuk beberapa jenis sewa lepas kunci atau penyewa baru, kami mungkin akan meminta deposit yang besarnya bervariasi tergantung jenis mobil. Deposit ini akan dikembalikan sepenuhnya setelah masa sewa berakhir dan mobil dikembalikan dalam kondisi baik.",
    },
  ],
  syarat: [
    {
      question: "Apakah layanan sewa sudah termasuk asuransi?",
      answer:
        "Ya, semua unit kami diasuransikan (All Risk). Namun, jika terjadi kerusakan atau kecelakaan, ada biaya klaim asuransi (Own Risk / Deductible) yang menjadi tanggungan penyewa, sesuai dengan ketentuan polis asuransi.",
    },
    {
      question:
        "Apa yang harus dilakukan jika terjadi kerusakan atau kecelakaan?",
      answer:
        "Harap tetap tenang dan segera hubungi kami. Jangan melakukan perbaikan apapun tanpa persetujuan dari kami. Tim kami akan memberikan instruksi lebih lanjut dan bantuan yang diperlukan. Pastikan untuk mendokumentasikan kejadian dengan foto jika memungkinkan.",
    },
    {
      question: "Apakah ada batasan kilometer harian?",
      answer:
        "Pada umumnya, tidak ada batasan kilometer untuk penggunaan di dalam wilayah Sumatera Utara. Namun, untuk perjalanan sangat jauh ke luar provinsi, mohon diskusikan terlebih dahulu dengan tim kami.",
    },
    {
      question: "Bagaimana prosedur pembatalan sewa?",
      answer:
        "Jika pembatalan dilakukan lebih dari 24 jam sebelum waktu sewa, uang muka (DP) akan kami kembalikan 50%. Jika pembatalan dilakukan kurang dari 24 jam, maka uang muka tidak dapat dikembalikan.",
    },
  ],
};

const allFaqs = [...faqData.umum, ...faqData.harga, ...faqData.syarat];

const faqPageSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: allFaqs.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.answer,
    },
  })),
};

export default function FAQPage() {
  return (
    <>
      <Script
        id="faq-page-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqPageSchema) }}
      />
      <div className="bg-background">
        <div className="container mx-auto px-6 py-24 sm:py-32">
          <div className="text-center mb-16 max-w-3xl mx-auto animate-fade-in-up">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground">
              Pertanyaan Umum (FAQ)
            </h1>
            <p className="text-muted-foreground mt-4">
              Temukan jawaban atas pertanyaan yang paling sering diajukan oleh
              pelanggan kami. Jika tidak menemukan jawaban yang Anda cari,
              jangan ragu untuk{" "}
              <Link href="/kontak" className="text-primary hover:underline">
                menghubungi kami
              </Link>
              .
            </p>
          </div>
          <div
            className="max-w-4xl mx-auto animate-fade-in-up"
            style={{ animationDelay: "200ms" }}
          >
            <Tabs defaultValue="umum" className="w-full">
              <TabsList className="flex flex-col sm:flex-row h-auto sm:h-10 mb-8 p-1">
                <TabsTrigger value="umum" className="w-full">
                  Umum
                </TabsTrigger>
                <TabsTrigger value="harga" className="w-full">
                  Harga &amp; Pembayaran
                </TabsTrigger>
                <TabsTrigger value="syarat" className="w-full">
                  Syarat &amp; Ketentuan
                </TabsTrigger>
              </TabsList>

              <TabsContent value="umum">
                <Accordion type="single" collapsible className="w-full">
                  {faqData.umum.map((item, index) => (
                    <FaqItem key={`umum-${index}`} item={item} index={index} />
                  ))}
                </Accordion>
              </TabsContent>

              <TabsContent value="harga">
                <Accordion type="single" collapsible className="w-full">
                  {faqData.harga.map((item, index) => (
                    <FaqItem key={`harga-${index}`} item={item} index={index} />
                  ))}
                </Accordion>
              </TabsContent>

              <TabsContent value="syarat">
                <Accordion type="single" collapsible className="w-full">
                  {faqData.syarat.map((item, index) => (
                    <FaqItem
                      key={`syarat-${index}`}
                      item={item}
                      index={index}
                    />
                  ))}
                </Accordion>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
    </>
  );
}

const FaqItem = ({
  item,
  index,
}: {
  item: { question: string; answer: string };
  index: number;
}) => (
  <AccordionItem value={`item-${index}`} className="border-none mb-4">
    <AccordionTrigger className="flex justify-between items-center w-full p-6 rounded-2xl text-left cursor-pointer transition-all duration-300 hover:no-underline bg-card/50 hover:bg-card/80 border border-border/20 data-[state=open]:bg-primary data-[state=open]:text-primary-foreground data-[state=open]:shadow-lg data-[state=open]:shadow-primary/30">
      <span className="text-lg md:text-xl font-bold">{item.question}</span>
    </AccordionTrigger>
    <AccordionContent className="mt-2 p-8 bg-card/80 rounded-b-2xl border-x border-b border-border/20 text-muted-foreground leading-relaxed">
      {item.answer}
    </AccordionContent>
  </AccordionItem>
);
