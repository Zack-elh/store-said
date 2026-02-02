'use client';

import { useRef } from 'react';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import { useLanguage } from '@/contexts/LanguageContext';

export default function HeroSection({ isDoorOpen }: { isDoorOpen: boolean }) {
    const titleRef = useRef<HTMLHeadingElement>(null);
    const subtitleRef = useRef<HTMLParagraphElement>(null);
    const ctaRef = useRef<HTMLDivElement>(null);
    const { t } = useLanguage();

    useGSAP(() => {
        if (isDoorOpen) {
            const tl = gsap.timeline({ delay: 1.5 }); // Sync with door opening

            tl.to([titleRef.current, subtitleRef.current, ctaRef.current], {
                opacity: 1,
                y: 0,
                scale: 1,
                duration: 1.2,
                stagger: 0.3,
                ease: 'expo.out',
            });
        }
    }, [isDoorOpen]);

    return (
        <section className="relative h-screen w-full overflow-hidden bg-transparent">
            {/* Hero Content (visible after door opens) */}
            <div className="absolute inset-0 flex items-center justify-center z-20 px-4">
                <div className="text-center max-w-4xl">
                    <h1
                        ref={titleRef}
                        className="text-display font-serif text-gradient-gold mb-6 opacity-0 translate-y-20 scale-95"
                    >
                        {t('hero.title')}
                    </h1>
                    <p
                        ref={subtitleRef}
                        className="text-2xl md:text-3xl text-french-gray mb-4 opacity-0 translate-y-8"
                    >
                        {t('hero.subtitle')}
                    </p>
                    <p className="text-lg text-french-gray/80 mb-8 opacity-0 translate-y-4">
                        {t('hero.experience')}
                    </p>
                    <div ref={ctaRef} className="opacity-0 translate-y-4">
                        <motion.a
                            href="/products"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="inline-block px-8 py-4 bg-gold text-firmament font-semibold uppercase tracking-wider hover:bg-gold-light transition-colors"
                        >
                            {t('hero.cta')}
                        </motion.a>
                    </div>
                </div>
            </div>
        </section>
    );
}
