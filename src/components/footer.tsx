import { siteConfig } from '@/lib/data';

export function Footer() {
  return (
    <footer className="w-full py-6 bg-background/70 backdrop-blur-sm">
      <div className="container mx-auto px-4 text-center text-muted-foreground text-sm">
        <p>{siteConfig.footer.text}</p>
      </div>
    </footer>
  );
}
