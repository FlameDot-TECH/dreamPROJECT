"use client";

import { useEffect, useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { siteConfig } from '@/lib/data';

export function WelcomeLetter() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const hasSeenLetter = sessionStorage.getItem('hasSeenWelcomeLetter');
    if (!hasSeenLetter) {
      const timer = setTimeout(() => {
        setIsOpen(true);
      }, 1000); // Delay appearance for a better user experience
      return () => clearTimeout(timer);
    }
  }, []);

  const handleClose = () => {
    sessionStorage.setItem('hasSeenWelcomeLetter', 'true');
    setIsOpen(false);
  };

  return (
    <Dialog open={isOpen} onOpenChange={handleClose}>
      <DialogContent className="sm:max-w-[425px] bg-background/90 backdrop-blur-sm rounded-lg">
        <DialogHeader>
          <DialogTitle className="text-center font-headline text-2xl">{siteConfig.welcomeLetter.title}</DialogTitle>
        </DialogHeader>
        <div className="py-4">
          <p className="whitespace-pre-line text-muted-foreground text-center">
            {siteConfig.welcomeLetter.content}
          </p>
        </div>
        <div className="flex justify-center">
            <Button onClick={handleClose} className="bg-primary text-primary-foreground hover:bg-primary/90 w-full">
                我已阅读，开始探索
            </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
