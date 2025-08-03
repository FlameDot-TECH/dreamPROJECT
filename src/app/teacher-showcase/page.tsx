import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { siteConfig } from '@/lib/data';
import { Card } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

export default function TeacherShowcasePage() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-1 pt-16">
        <div className="container mx-auto px-4 md:px-6 py-12">
            <section id={siteConfig.teacherShowcase.id} className="scroll-mt-20">
               <Card className="p-8 md:p-12 bg-card/80 backdrop-blur-lg border-2 border-primary/20 shadow-xl">
                  <div className="text-center">
                    <h2 className="text-3xl font-headline font-bold">{siteConfig.teacherShowcase.title}</h2>
                    <p className="mt-4 max-w-2xl mx-auto text-muted-foreground">{siteConfig.teacherShowcase.description}</p>
                  </div>
                  <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
                    {siteConfig.teacherShowcase.teachers.map((teacher) => (
                      <div key={teacher.name} className="text-center p-6 bg-card/90 rounded-lg hover:shadow-primary/20 hover:-translate-y-2 transition-all duration-300">
                        <Avatar className="w-32 h-32 mx-auto border-4 border-primary">
                          <AvatarImage src={teacher.image} alt={teacher.name} data-ai-hint={teacher.dataAiHint}/>
                          <AvatarFallback>{teacher.name.slice(0,1)}</AvatarFallback>
                        </Avatar>
                        <h3 className="mt-4 text-xl font-bold">{teacher.name}</h3>
                        <p className="text-muted-foreground">{teacher.subject}</p>
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
