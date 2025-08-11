import { Award, Gem, Users } from 'lucide-react';
import SpotlightCard from './spotlight-card';

const features = [
    {
        icon: <Award className="h-10 w-10 text-primary" />,
        title: "Armada Terbaik & Terawat",
        description: "Setiap mobil dalam armada kami adalah model terbaru yang terawat secara rutin untuk menjamin performa dan kenyamanan Anda.",
        delay: "200ms",
    },
    {
        icon: <Gem className="h-10 w-10 text-primary" />,
        title: "Harga Kompetitif & Transparan",
        description: "Kami menawarkan harga sewa yang jujur dan kompetitif, tanpa biaya tersembunyi. Nilai terbaik untuk perjalanan Anda.",
        delay: "400ms",
    },
    {
        icon: <Users className="h-10 w-10 text-primary" />,
        title: "Pelayanan Profesional",
        description: "Tim kami, dari customer service hingga supir, adalah para profesional berpengalaman yang siap melayani Anda 24/7.",
        delay: "600ms",
    }
]

export function WhyUs() {
    return (
        <section className="py-20 md:py-32 bg-background overflow-hidden">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16 animate-fade-in-up">
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight">Kenapa Memilih Kami?</h2>
              <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">Kami berkomitmen memberikan pengalaman rental mobil terbaik di Medan dengan keunggulan yang tidak ada duanya.</p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                 <div key={index} className="animate-fade-in-up" style={{ animationDelay: feature.delay }}>
                   <SpotlightCard className="flex flex-col items-center text-center h-full">
                      <div className="p-4 bg-primary/10 rounded-full mb-6 ring-4 ring-primary/20">
                        {feature.icon}
                      </div>
                      <h3 className="text-2xl font-bold mb-3">{feature.title}</h3>
                      <p className="text-muted-foreground">{feature.description}</p>
                   </SpotlightCard>
                 </div>
              ))}
            </div>
          </div>
        </section>
    );
}
