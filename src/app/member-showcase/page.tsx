import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { siteConfig } from '@/lib/data';
import { Card } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

export default function MemberShowcasePage() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-1 pt-16">
        <div className="container mx-auto px-4 md:px-6 py-12">
          <section id={siteConfig.memberShowcase.id} className="scroll-mt-20">
            <Card className="p-8 md:p-12 bg-card/80 backdrop-blur-lg border-2 border-primary/20 shadow-xl">
              <div className="text-center">
                <h2 className="text-3xl font-headline font-bold">{siteConfig.memberShowcase.title}</h2>
                <p className="mt-4 max-w-2xl mx-auto text-muted-foreground">{siteConfig.memberShowcase.description}</p>
              </div>
              <div className="mt-12 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-x-6 gap-y-10">
                {siteConfig.memberShowcase.members.map((member) => (
                  <div key={member.name} className="text-center flex flex-col items-center group">
                    <Avatar className="w-24 h-24 border-4 border-transparent group-hover:border-accent transition-colors duration-300">
                      <AvatarImage src={member.image} alt={member.name} data-ai-hint={member.dataAiHint} />
                      <AvatarFallback>{member.name.slice(0, 1)}</AvatarFallback>
                    </Avatar>
                    <h3 className="mt-4 font-semibold">{member.name}</h3>
                    <p className="text-sm text-muted-foreground">{member.role}</p>
                  </div>
                ))}
              </div>
            </Card>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
}
