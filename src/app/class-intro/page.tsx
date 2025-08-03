import Image from 'next/image';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { siteConfig } from '@/lib/data';
import { Card } from '@/components/ui/card';

export default function ClassIntroPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-1 pt-16">
        <div className="container mx-auto px-4 md:px-6 py-12">
            <section id={siteConfig.classIntro.id} className="scroll-mt-20">
              <Card className="overflow-hidden bg-card/80 backdrop-blur-lg border-2 border-primary/20 shadow-xl transition-all hover:shadow-2xl hover:border-primary/40">
                <div className="grid md:grid-cols-2 gap-0 items-center">
                  <div className="p-8 md:p-12 order-2 md:order-1">
                    <h2 className="text-3xl font-headline font-bold">{siteConfig.classIntro.title}</h2>
                    <p className="mt-4 text-muted-foreground leading-relaxed">{siteConfig.classIntro.description}</p>
                  </div>
                  <div className="relative h-64 md:h-full min-h-[300px] order-1 md:order-2">
                    <Image
                      src={siteConfig.classIntro.image}
                      alt="班级活动"
                      data-ai-hint={siteConfig.classIntro.dataAiHint}
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              </Card>
            </section>
        </div>
      </main>
      <Footer />
    </div>
  );
}
