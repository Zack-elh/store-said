'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useLanguage } from '@/contexts/LanguageContext';

export default function Footer() {
    const { t } = useLanguage();
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-transparent py-16 px-4">
            <div className="container-luxury">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
                    {/* Brand Column */}
                    <div className="md:col-span-2">
                        <Link href="/" className="flex items-center space-x-3 mb-6 group">
                            <span className="text-3xl font-serif text-gradient-gold tracking-wider">
                                JaLaba
                            </span>
                        </Link>
                        <p className="text-foreground mb-6 max-w-md leading-relaxed">
                            {t('footer.tagline')}
                        </p>
                        <div className="flex space-x-4">
                            <a
                                href={`https://wa.me/${t('contact.whatsappNumber').replace(/\s+/g, '')}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-10 h-10 flex items-center justify-center liquid-glass rounded-lg text-foreground/50 hover:text-foreground transition-all"
                                aria-label="WhatsApp"
                            >
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766 0-3.187-2.575-5.771-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.941-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217s.231.006.332.013c.101.007.237-.038.37.284.133.321.455 1.111.49 1.183.036.072.059.155.011.25-.048.094-.072.155-.144.238-.072.083-.153.185-.219.248-.073.07-.15.146-.065.292.085.145.378.625.811 1.011.558.497 1.03.652 1.174.724.144.072.231.061.317-.038.087-.098.37-.43.47-.577.1-.148.2-.123.336-.072s.867.409.917.458.083.072.072.195z" /></svg>
                            </a>
                            <a
                                href={`mailto:${t('contact.emailAddress')}`}
                                className="w-10 h-10 flex items-center justify-center liquid-glass rounded-lg text-foreground/50 hover:text-foreground transition-all"
                                aria-label="Email"
                            >
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                            </a>
                            <a
                                href="https://instagram.com/jalaba"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-10 h-10 flex items-center justify-center liquid-glass rounded-lg text-foreground/50 hover:text-foreground transition-all"
                                aria-label="Instagram"
                            >
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073z" />
                                    <path d="M12 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                                </svg>
                            </a>
                        </div>
                    </div>

                    <div>
                        <h4 className="text-foreground font-serif text-lg mb-6">{t('footer.quicklinks')}</h4>
                        <ul className="space-y-3">
                            <li>
                                <Link href="/about" className="text-foreground hover:text-foreground transition-colors">
                                    {t('nav.story')}
                                </Link>
                            </li>
                            <li>
                                <Link href="/craftsmanship" className="text-foreground hover:text-foreground transition-colors">
                                    {t('nav.craftsmanship')}
                                </Link>
                            </li>
                            <li>
                                <Link href="/products" className="text-foreground hover:text-foreground transition-colors">
                                    {t('nav.collections')}
                                </Link>
                            </li>
                            <li>
                                <Link href="/contact" className="text-foreground hover:text-foreground transition-colors">
                                    {t('nav.contact')}
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Customer Service */}
                    <div>
                        <h4 className="text-gold font-serif text-lg mb-6">{t('footer.customer')}</h4>
                        <ul className="space-y-3">
                            <li>
                                <Link href="/shipping" className="text-foreground hover:text-foreground transition-colors">
                                    {t('footer.shipping')}
                                </Link>
                            </li>
                            <li>
                                <Link href="/returns" className="text-foreground hover:text-foreground transition-colors">
                                    {t('footer.returns')}
                                </Link>
                            </li>
                            <li>
                                <Link href="/size-guide" className="text-foreground hover:text-foreground transition-colors">
                                    {t('footer.sizeguide')}
                                </Link>
                            </li>
                            <li>
                                <Link href="/faq" className="text-foreground hover:text-foreground transition-colors">
                                    {t('footer.faq')}
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="pt-8 border-t border-gold/20 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
                    <p className="text-foreground text-sm">
                        © {currentYear} JaLaba. {t('footer.copyright')}
                    </p>
                    <div className="flex space-x-6 text-sm">
                        <Link href="/privacy" className="text-foreground hover:text-foreground transition-colors">
                            Privacy Policy
                        </Link>
                        <Link href="/terms" className="text-foreground hover:text-foreground transition-colors">
                            Terms of Service
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
