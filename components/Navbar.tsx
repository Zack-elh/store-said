'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';
import { useCart } from '@/contexts/CartContext';

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const { language, setLanguage, currency, setCurrency, t } = useLanguage();
    const { cartCount } = useCart();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'nav-imperial py-4' : 'bg-transparent py-6'
                }`}
        >
            <div className="container-luxury flex items-center justify-between">
                {/* Logo */}
                <Link href="/" className="flex items-center space-x-3 group">
                    <span className="text-3xl font-serif text-gradient-gold tracking-wider">
                        JaLaba
                    </span>
                </Link>

                {/* Desktop Navigation */}
                <div className="hidden md:flex items-center space-x-8">
                    <Link
                        href="/products"
                        className="text-sm uppercase tracking-wider hover:text-foreground transition-colors"
                    >
                        {t('nav.collections')}
                    </Link>
                    <Link
                        href="/about"
                        className="text-sm uppercase tracking-wider hover:text-foreground transition-colors"
                    >
                        {t('nav.story')}
                    </Link>
                    <Link
                        href="/craftsmanship"
                        className="text-sm uppercase tracking-wider hover:text-foreground transition-colors"
                    >
                        {t('nav.craftsmanship')}
                    </Link>
                    <Link
                        href="/contact"
                        className="text-sm uppercase tracking-wider hover:text-foreground transition-colors"
                    >
                        {t('nav.contact')}
                    </Link>

                    {/* Language Switcher */}
                    <div className="flex items-center space-x-2 border-l border-gold/30 pl-6">
                        {(['EN', 'FR', 'AR'] as const).map((lang) => (
                            <button
                                key={lang}
                                onClick={() => setLanguage(lang.toLowerCase() as 'en' | 'fr' | 'ar')}
                                className={`text-xs uppercase tracking-wider px-2 py-1 transition-colors ${language.toUpperCase() === lang
                                    ? 'text-foreground font-semibold'
                                    : 'text-foreground hover:text-foreground'
                                    }`}
                            >
                                {lang}
                            </button>
                        ))}
                    </div>

                    {/* Currency Switcher */}
                    <div className="flex items-center space-x-2 border-l border-gold/30 pl-6 mr-4">
                        {(['USD', 'EUR', 'MAD'] as const).map((curr) => (
                            <button
                                key={curr}
                                onClick={() => setCurrency(curr)}
                                className={`text-xs uppercase tracking-wider px-2 py-1 transition-colors ${currency === curr
                                    ? 'text-foreground font-semibold'
                                    : 'text-foreground hover:text-foreground'
                                    }`}
                            >
                                {curr}
                            </button>
                        ))}
                    </div>

                    {/* Cart Icon */}
                    <Link href="/cart" className="relative group p-2">
                        <svg className="w-6 h-6 text-foreground group-hover:text-foreground transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                        </svg>
                        {cartCount > 0 && (
                            <span className="absolute -top-1 -right-1 bg-gold text-firmament text-[10px] font-bold w-5 h-5 flex items-center justify-center rounded-full border border-firmament">
                                {cartCount}
                            </span>
                        )}
                    </Link>
                </div>

                {/* Mobile Cart & Menu Buttons */}
                <div className="flex items-center space-x-4 md:hidden">
                    <Link href="/cart" className="relative p-2">
                        <svg className="w-6 h-6 text-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                        </svg>
                        {cartCount > 0 && (
                            <span className="absolute -top-1 -right-1 bg-gold text-firmament text-[10px] font-bold w-4 h-4 flex items-center justify-center rounded-full">
                                {cartCount}
                            </span>
                        )}
                    </Link>
                    <button
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        className="flex flex-col space-y-1.5 w-6"
                        aria-label="Toggle menu"
                    >
                        <span
                            className={`block h-0.5 w-full bg-foreground transition-transform ${isMobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`}
                        />
                        <span
                            className={`block h-0.5 w-full bg-foreground transition-opacity ${isMobileMenuOpen ? 'opacity-0' : ''}`}
                        />
                        <span
                            className={`block h-0.5 w-full bg-foreground transition-transform ${isMobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}
                        />
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden glass mt-4"
                    >
                        <div className="container-luxury py-6 flex flex-col space-y-4">
                            <Link
                                href="/products"
                                className="text-sm uppercase tracking-wider hover:text-foreground transition-colors"
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                {t('nav.collections')}
                            </Link>
                            <Link
                                href="/about"
                                className="text-sm uppercase tracking-wider hover:text-foreground transition-colors"
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                {t('nav.story')}
                            </Link>
                            <Link
                                href="/craftsmanship"
                                className="text-sm uppercase tracking-wider hover:text-foreground transition-colors"
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                {t('nav.craftsmanship')}
                            </Link>
                            <Link
                                href="/contact"
                                className="text-sm uppercase tracking-wider hover:text-foreground transition-colors"
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                {t('nav.contact')}
                            </Link>

                            {/* Mobile Language Switcher */}
                            <div className="flex items-center space-x-3 pt-4 border-t border-gold/30">
                                {(['EN', 'FR', 'AR'] as const).map((lang) => (
                                    <button
                                        key={lang}
                                        onClick={() => {
                                            setLanguage(lang.toLowerCase() as 'en' | 'fr' | 'ar');
                                            setIsMobileMenuOpen(false);
                                        }}
                                        className={`text-xs uppercase tracking-wider px-3 py-1.5 transition-colors ${language.toUpperCase() === lang
                                            ? 'text-foreground font-semibold'
                                            : 'text-foreground'
                                            }`}
                                    >
                                        {lang}
                                    </button>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.nav>
    );
}
