'use client';

import { useState, useEffect } from 'react';
import { Container } from '@/components/ui/Container';
import { NAVIGATION_ITEMS } from '@/lib/utils/constants';
import { cn } from '@/lib/utils';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className={cn(
      'fixed top-0 w-full z-50 transition-all duration-300',
      isScrolled
        ? 'bg-white/95 backdrop-blur-md border-b border-stone-200 shadow-sm'
        : 'bg-transparent'
    )}>
      <Container>
        <div className="flex items-center justify-between h-16">
          {/* Logo/Name */}
          <div className="flex-shrink-0">
            <button
              onClick={() => scrollToSection('#hero')}
              className={cn(
                'text-2xl font-light font-serif transition-colors',
                isScrolled ? 'text-stone-900' : 'text-white drop-shadow-lg'
              )}
            >
              Chukwuemeka
            </button>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {NAVIGATION_ITEMS.map((item) => (
              <button
                key={item.href}
                onClick={() => scrollToSection(item.href)}
                className={cn(
                  'font-light transition-all duration-200 hover:scale-105',
                  isScrolled
                    ? 'text-stone-700 hover:text-amber-600'
                    : 'text-white/90 hover:text-white drop-shadow-md'
                )}
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={cn(
                'p-2 transition-colors',
                isScrolled
                  ? 'text-stone-700 hover:text-stone-900'
                  : 'text-white/90 hover:text-white'
              )}
              aria-label="Toggle menu"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isMenuOpen ? (
                  <path d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className={cn(
          'md:hidden transition-all duration-300 ease-in-out',
          isMenuOpen ? 'max-h-80 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'
        )}>
          <div className="bg-white/95 backdrop-blur-md border-t border-stone-200 shadow-lg">
            <nav className="py-6 space-y-2">
              {NAVIGATION_ITEMS.map((item) => (
                <button
                  key={item.href}
                  onClick={() => scrollToSection(item.href)}
                  className="block w-full text-left text-stone-700 hover:text-amber-600 hover:bg-stone-50 font-light transition-colors py-3 px-4 rounded-lg"
                >
                  {item.label}
                </button>
              ))}
            </nav>
          </div>
        </div>
      </Container>
    </header>
  );
}