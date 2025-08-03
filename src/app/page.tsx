import Image from 'next/image';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { WelcomeLetter } from '@/components/welcome-letter';
import { siteConfig } from '@/lib/data';
import { Card } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { ArrowDown } from 'lucide-react';

export default function Home() {
  return (
    <>
      <div className="fixed inset-0 z-[-1]">
        <Image
          src="https://placehold.co/1920x1080.png"
          alt="班级合影背景"
          data-ai-hint="class group photo"
          fill
          className="object-cover filter blur-md"
        />
        <div className="absolute inset-0 bg-black/40" />
      </div>

      <div className="relative z-10 bg-transparent">
        <WelcomeLetter />
        <Header />
        <main className="flex-1">
          {/* Hero Section */}
          <div className="h-screen flex flex-col items-center justify-center text-center text-white p-4">
            <h1 className="text-5xl md:text-7xl font-headline font-bold drop-shadow-lg animate-fade-in-down">
              {siteConfig.hero.title}
            </h1>
            <p className="mt-4 text-lg md:text-2xl font-body drop-shadow-md animate-fade-in-up">
              {siteConfig.hero.subtitle}
            </p>
            <a href="#class-intro" aria-label="Scroll down" className="absolute bottom-10 animate-bounce">
              <ArrowDown className="h-8 w-8 text-white" />
            </a>
          </div>

          {/* Wrapper for content sections */}
          <div className="bg-background space-y-12 md:space-y-24 py-12">
            
            {/* 班级介绍 */}
            <section id={siteConfig.classIntro.id} className="container mx-auto px-4 md:px-6 scroll-mt-20">
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

            {/* 成员风采 */}
            <section id={siteConfig.memberShowcase.id} className="container mx-auto px-4 md:px-6 scroll-mt-20">
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

            {/* 美丽教师 */}
            <section id={siteConfig.teacherShowcase.id} className="container mx-auto px-4 md:px-6 scroll-mt-20">
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
    </>
  );
}
