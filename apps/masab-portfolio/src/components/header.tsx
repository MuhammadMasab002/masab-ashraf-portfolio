'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ArrowUpRight, Menu, Moon, Sun, X } from 'lucide-react';

const navLinks = [
  { href: '/#work', label: 'Work' },
  { href: '/#experience', label: 'Experience' },
  { href: '/#skills', label: 'Skills' },
  { href: '/about', label: 'About' },
  { href: '/blog', label: 'Blog' },
];

export function Header() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [theme, setTheme] = useState<'dark' | 'light'>('dark');

  useEffect(() => {
    const saved = window.localStorage.getItem('masab-theme');
    if (saved === 'light') setTheme('light');
  }, []);

  const closeMenu = () => setMenuOpen(false);

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    window.localStorage.setItem('masab-theme', theme);
  }, [theme]);

  const toggleTheme = () => setTheme((current) => (current === 'dark' ? 'light' : 'dark'));

  return (
    <header className="topbar">
      <div className="topbar-inner">
        <Link href="/" className="brand-mark" data-testid="link-brand" onClick={closeMenu}>
          <span className="brand-dot" aria-hidden="true" /> Masab Ashraf
        </Link>
        <nav className="nav-links" aria-label="Primary navigation">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={pathname === link.href ? 'active' : ''}
              data-testid={`link-nav-${link.label.toLowerCase()}`}
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <button
          type="button"
          className="theme-toggle desktop-theme"
          onClick={toggleTheme}
          aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} theme`}
          title={`Switch to ${theme === 'dark' ? 'light' : 'dark'} theme`}
          data-testid="button-theme-toggle"
        >
          {theme === 'dark' ? <Sun size={15} /> : <Moon size={15} />}
          <span>{theme === 'dark' ? 'Light' : 'Dark'}</span>
        </button>
        <Link href="/services" className="nav-cta" data-testid="link-services">
          Services <ArrowUpRight size={13} />
        </Link>
        <button
          type="button"
          className="mobile-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          data-testid="button-mobile-menu"
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>
      <div className={`mobile-menu ${menuOpen ? 'open' : ''}`}>
        {navLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            onClick={closeMenu}
            data-testid={`link-mobile-${link.label.toLowerCase()}`}
          >
            {link.label}
          </Link>
        ))}
        <Link href="/services" onClick={closeMenu} data-testid="link-mobile-services">
          Services <ArrowUpRight size={13} />
        </Link>
        <button
          type="button"
          className="theme-toggle mobile-theme"
          onClick={toggleTheme}
          aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} theme`}
          data-testid="button-mobile-theme-toggle"
        >
          {theme === 'dark' ? <Sun size={15} /> : <Moon size={15} />}
          <span>Switch to {theme === 'dark' ? 'light' : 'dark'} theme</span>
        </button>
      </div>
    </header>
  );
}
