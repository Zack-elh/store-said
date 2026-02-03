'use client';

import { useRef } from 'react';
import { motion } from 'framer-motion';
import { useGSAP } from '@gsap/react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Link from 'next/link';
import { useLanguage } from '@/contexts/LanguageContext';

gsap.registerPlugin(ScrollTrigger);

interface CategorySelectorProps {
    showTitle?: boolean;
}

export default function CategorySelector({ showTitle = true }: CategorySelectorProps) {
    const sectionRef = useRef<HTMLElement>(null);
    const cardsRef = useRef<HTMLDivElement>(null);
    const { t } = useLanguage();

    const categories = [
        {
            id: 'jalaba',
            name: 'Jalaba',
            description: t('category.jalaba.desc'),
            href: '/products/jalaba',
        },
        {
            id: 'kaftan',
            name: 'Kaftan',
            description: t('category.kaftan.desc'),
            href: '/products/kaftan',
        },
        {
            id: 'gandora',
            name: 'Gandora',
            description: t('category.gandora.desc'),
            href: '/products/gandora',
        },
        {
            id: 'belgha',
            name: 'Belgha',
            description: t('category.belgha.desc'),
            href: '/products/belgha',
        },
    ];

    useGSAP(() => {
        if (cardsRef.current) {
            gsap.from(cardsRef.current.children, {
                scrollTrigger: {
                    trigger: cardsRef.current,
                    start: 'top 80%',
                },
                y: 50,
                opacity: 0,
                duration: 0.8,
                stagger: 0.2,
                ease: 'power3.out',
            });
        }
    }, []);

    return (
        <section ref={sectionRef} className="py-24 px-4 bg-transparent">
            <div className="container-luxury">
                {/* Section Header */}
                {showTitle && (
                    <div className="text-center mb-16">
                        <h2 className="text-display font-serif text-gradient-gold mb-4">
                            {t('category.title')}
                        </h2>
                        <p className="text-lg text-french-gray/70 max-w-3xl mx-auto">
                            {t('category.subtitle')}
                        </p>
                    </div>
                )}

                {/* Category Cards */}
                <div ref={cardsRef} className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
                    {categories.map((category, index) => (
                        <Link key={category.id} href={category.href}>
                            <motion.div
                                whileHover={{ scale: 1.01 }}
                                className="group relative overflow-hidden bg-firmament/60 backdrop-blur-xl border border-gold/20 hover:border-gold/50 transition-all duration-500 aspect-[16/10] rounded-none"
                            >
                                {/* Decorative Inner Border */}
                                <div className="absolute inset-2 border border-gold/5 opacity-40 pointer-events-none" />

                                {/* Background Pattern */}
                                <div className="absolute inset-0 opacity-[0.05] group-hover:opacity-[0.1] transition-opacity duration-700">
                                    <svg className="w-full h-full" viewBox="0 0 100 100">
                                        <pattern
                                            id={`pattern-${category.id}`}
                                            x="0"
                                            y="0"
                                            width="40"
                                            height="40"
                                            patternUnits="userSpaceOnUse"
                                        >
                                            <path
                                                d="M20 0 L40 20 L20 40 L0 20 Z"
                                                fill="none"
                                                stroke="currentColor"
                                                strokeWidth="0.2"
                                                className="text-black-smoke"
                                            />
                                            <circle cx="20" cy="20" r="0.8" fill="currentColor" className="text-black-smoke" />
                                        </pattern>
                                        <rect width="100" height="100" fill={`url(#pattern-${category.id})`} />
                                    </svg>
                                </div>

                                {/* Content */}
                                <div className="relative h-full flex flex-col justify-center items-center text-center p-12 z-10">
                                    <div className="w-full max-w-md">
                                        <div className="h-px w-12 bg-gold/30 mx-auto mb-6 transition-all duration-500 group-hover:w-24 group-hover:bg-gold" />
                                        <h3 className="text-4xl md:text-5xl font-serif text-french-gray mb-4 tracking-tight group-hover:text-gold transition-colors duration-500">
                                            {category.name}
                                        </h3>
                                        <p className="text-french-gray/60 text-sm md:text-base mb-8 uppercase tracking-[0.2em] font-light leading-relaxed max-w-sm mx-auto opacity-0 group-hover:opacity-100 transition-all duration-700 transform translate-y-4 group-hover:translate-y-0">
                                            {category.description}
                                        </p>
                                        <div className="inline-flex items-center text-gold text-xs uppercase tracking-[0.3em] font-medium border-b border-transparent hover:border-gold pb-1 transition-all">
                                            <span>{t('product.discover')}</span>
                                        </div>
                                    </div>
                                </div>

                                {/* Hover Vignette */}
                                <div className="absolute inset-0 bg-gradient-to-t from-firmament via-transparent to-transparent opacity-0 group-hover:opacity-60 transition-opacity duration-700" />
                            </motion.div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}
