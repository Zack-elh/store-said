'use client';

import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';

export default function HeroSection({ isDoorOpen }: { isDoorOpen: boolean }) {
    const taglineRef = useRef<HTMLParagraphElement>(null);
    const titleRef = useRef<HTMLHeadingElement>(null);
    const subtitleRef = useRef<HTMLParagraphElement>(null);
    const ctaRef = useRef<HTMLDivElement>(null);
    const { t } = useLanguage();

    useEffect(() => {
        if (!isDoorOpen) return;

        let cancelled = false;
        let ctx: { revert: () => void } | undefined;

        (async () => {
            const { gsap } = await import('gsap');
            if (cancelled) return;
            if (!taglineRef.current || !titleRef.current || !subtitleRef.current || !ctaRef.current) return;

            ctx = gsap.context(() => {
                const tl = gsap.timeline({ delay: 1.5 }); // Sync with door opening

                tl.to([taglineRef.current, titleRef.current, subtitleRef.current, ctaRef.current], {
                    opacity: 1,
                    y: 0,
                    scale: 1,
                    duration: 1.2,
                    stagger: 0.3,
                    ease: 'expo.out',
                });
            });
        })();

        return () => {
            cancelled = true;
            ctx?.revert();
        };
    }, [isDoorOpen]);

    return (
        <section className="relative h-screen w-full overflow-hidden">
            {/* Background handled by global body style */}

            {/* Noise Overlay */}
            <div className="bg-noise" />

            {/* Hero Content (visible after door opens) */}
            <div className="absolute inset-0 flex items-center justify-center z-20 px-4">
                <div className="text-center max-w-4xl">
                    <p
                        ref={taglineRef}
                        className="text-sm md:text-base uppercase tracking-[0.4em] text-gold mb-6 opacity-0 translate-y-8"
                    >
                        {t('hero.tagline')}
                    </p>
                    <h1
                        ref={titleRef}
                        className="text-display font-serif text-sahara-gold mb-6 opacity-0 translate-y-20 scale-95"
                    >
                        {t('hero.title')}
                    </h1>
                    <p
                        ref={subtitleRef}
                        className="text-2xl md:text-3xl text-foreground mb-4 opacity-0 translate-y-8"
                    >
                        {t('hero.subtitle')}
                    </p>
                    <p className="text-lg text-foreground mb-8 opacity-0 translate-y-4">
                        {t('hero.experience')}
                    </p>
                    <div ref={ctaRef} className="opacity-0 translate-y-4">
                        <motion.a
                            href="/products"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="btn-imperial"
                        >
                            {t('hero.cta')}
                        </motion.a>
                    </div>
                </div>
            </div>
        </section>
    );
}
