'use client';

import { useEffect, useMemo, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Menu, Moon, Sun, X } from 'lucide-react';
import Image from 'next/image';
import { useTheme } from '@/components/providers/ThemeProvider';

type NavItem = {
  id: string;
  label: string;
};

const navItems: NavItem[] = [
  { id: 'home', label: 'Home' },
  { id: 'problem-solution', label: 'Problems we Solve' },
  { id: 'workflow', label: 'How It Works' },
  { id: 'features', label: 'Platform Features' },
  { id: 'customers', label: 'Who It Helps' },
  { id: 'comparison', label: 'Comparison' },
  { id: 'contact', label: 'Contact' },
];

export function TopNav() {
  const { isDark, toggleDarkMode } = useTheme();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeId, setActiveId] = useState<string>('home');

  const sectionIds = useMemo(() => navItems.map((item) => item.id), []);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 12);

      const currentId = sectionIds.findLast((id) => {
        const section = document.getElementById(id);
        if (!section) return false;
        const top = section.getBoundingClientRect().top;
        return top <= 140;
      });

      if (currentId) setActiveId(currentId);
    };

    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [sectionIds]);

  useEffect(() => {
    const original = document.body.style.overflow;
    document.body.style.overflow = mobileOpen ? 'hidden' : original;
    return () => {
      document.body.style.overflow = original;
    };
  }, [mobileOpen]);

  return (
    <>
      <header
        className={[
          'fixed inset-x-0 top-0 z-50 transition-all duration-300',
          scrolled
            ? 'backdrop-blur-xl bg-white/85 dark:bg-black/70 border-b border-blue-200/60 dark:border-blue-900/60'
            : 'bg-transparent',
        ].join(' ')}
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <a
              href="#home"
              className="group inline-flex items-center"
              aria-label="Go to ShopDropz home section"
            >
              <Image
                src="/images/image-1-transparent.png"
                alt="ShopDropz logo"
                width={336}
                height={112}
                className="h-24 w-auto object-contain drop-shadow-sm sm:h-28"
                sizes="(max-width: 640px) 240px, 336px"
                priority
              />
            </a>

            <nav className="hidden lg:flex items-center gap-2" aria-label="Section navigation">
              {navItems.map((item) => {
                const isActive = activeId === item.id;
                return (
                  <a
                    key={item.id}
                    href={`#${item.id}`}
                    className={[
                      'relative rounded-full px-4 py-2 text-sm font-medium transition-colors',
                      isActive
                        ? 'text-blue-700 dark:text-lime-300'
                        : 'text-gray-700 hover:text-blue-700 dark:text-gray-300 dark:hover:text-lime-300',
                    ].join(' ')}
                  >
                    {item.label}
                    {isActive ? (
                      <motion.span
                        layoutId="active-nav-pill"
                        className="absolute inset-0 -z-10 rounded-full bg-blue-100/80 dark:bg-blue-950/70"
                        transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                      />
                    ) : null}
                  </a>
                );
              })}
            </nav>

            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={toggleDarkMode}
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-blue-200 bg-white/80 text-blue-700 hover:bg-blue-50 dark:border-blue-900 dark:bg-gray-900 dark:text-lime-300 dark:hover:bg-gray-800"
                aria-label="Toggle color theme"
              >
                {isDark ? <Sun size={18} /> : <Moon size={18} />}
              </button>

              <button
                type="button"
                onClick={() => setMobileOpen((prev) => !prev)}
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-blue-200 bg-white/80 text-blue-700 hover:bg-blue-50 dark:border-blue-900 dark:bg-gray-900 dark:text-lime-300 dark:hover:bg-gray-800 lg:hidden"
                aria-label="Toggle navigation menu"
              >
                {mobileOpen ? <X size={20} /> : <Menu size={20} />}
              </button>
            </div>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {mobileOpen ? (
          <motion.aside
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 bg-black/45 backdrop-blur-sm lg:hidden"
            onClick={() => setMobileOpen(false)}
          >
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', stiffness: 280, damping: 30 }}
              className="ml-auto h-full w-[82%] max-w-sm bg-white dark:bg-gray-950 border-l border-blue-200 dark:border-blue-900 pt-20 px-6"
              onClick={(event) => event.stopPropagation()}
            >
              <nav className="flex flex-col gap-2" aria-label="Mobile section navigation">
                {navItems.map((item) => {
                  const isActive = activeId === item.id;
                  return (
                    <a
                      key={item.id}
                      href={`#${item.id}`}
                      onClick={() => setMobileOpen(false)}
                      className={[
                        'rounded-xl px-4 py-3 text-base font-medium transition-colors',
                        isActive
                          ? 'bg-blue-100 text-blue-700 dark:bg-blue-950 dark:text-lime-300'
                          : 'text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-900',
                      ].join(' ')}
                    >
                      {item.label}
                    </a>
                  );
                })}
              </nav>
            </motion.div>
          </motion.aside>
        ) : null}
      </AnimatePresence>
    </>
  );
}
