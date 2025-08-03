"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { siteConfig } from '@/lib/data';
import { cn } from '@/lib/utils';
import { GraduationCap } from 'lucide-react';

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
      
      const sections = siteConfig.navLinks.map(link => document.getElementById(link.href.substring(1)));
      let currentSection = '';

      sections.forEach(section => {
        if (section && window.scrollY >= section.offsetTop - 100) {
          currentSection = section.id;
        }
      });
      setActiveSection(currentSection);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        scrolled ? 'bg-background/80 shadow-md backdrop-blur-sm' : 'bg-transparent'
      )}
    >
      <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
        <Link href="/" className="flex items-center gap-2 font-bold text-lg hover:text-primary transition-colors">
          <GraduationCap className="h-6 w-6 text-primary" />
          <span className={cn(scrolled ? 'text-foreground' : 'text-white')}>{siteConfig.title}</span>
        </Link>
        <nav className="hidden md:flex items-center gap-6">
          {siteConfig.navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                'text-sm font-medium transition-colors',
                scrolled ? 'text-muted-foreground hover:text-foreground' : 'text-gray-300 hover:text-white',
                activeSection === link.href.substring(1) && (scrolled ? 'text-primary' : 'text-accent')
              )}
            >
              {link.name}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
