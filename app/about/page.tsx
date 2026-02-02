'use client';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';

export default function AboutPage() {
    const { t } = useLanguage();
    return (
        <main className="min-h-screen bg-animated-gradient">
            <Navbar />

            {/* Hero Section */}
            <section className="pt-32 pb-20 px-4">
                <div className="container-luxury text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <h1 className="text-display font-serif text-gradient-gold mb-6">
                            {t('about.subtitle')}
                        </h1>
                        <p className="text-xl text-french-gray/80 max-w-3xl mx-auto">
                            {t('about.hero.subtitle')}
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Heritage Section */}
            <section className="py-20 px-4 bg-firmament/40 backdrop-blur-md border-y border-gold/10">
                <div className="container-luxury max-w-4xl">
                    <div className="prose prose-invert prose-lg mx-auto">
                        <h2 className="text-4xl font-serif text-gold mb-8">{t('about.title1')}</h2>

                        <p className="text-french-gray/80 leading-relaxed mb-6">
                            {t('about.p1')}
                        </p>

                        <p className="text-french-gray/80 leading-relaxed mb-6">
                            {t('about.p2')}
                        </p>

                        <h3 className="text-3xl font-serif text-gold mt-12 mb-6">{t('about.title2')}</h3>

                        <p className="text-french-gray/80 leading-relaxed mb-6">
                            {t('about.p3')}
                        </p>

                        <p className="text-french-gray/80 leading-relaxed mb-6">
                            {t('about.p4')}
                        </p>

                        <h3 className="text-3xl font-serif text-gold mt-12 mb-6">{t('about.title3')}</h3>

                        <p className="text-french-gray/80 leading-relaxed mb-6">
                            {t('about.p5')}
                        </p>

                        <p className="text-french-gray/80 leading-relaxed">
                            {t('about.p6')}
                        </p>
                    </div>
                </div>
            </section>

            {/* Values Section */}
            <section className="py-20 px-4">
                <div className="container-luxury">
                    <h2 className="text-4xl font-serif text-gradient-gold text-center mb-16">
                        {t('about.values.title')}
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-6xl mx-auto">
                        <div className="text-center">
                            <div className="w-16 h-16 mx-auto mb-6 border-2 border-gold rounded-full flex items-center justify-center">
                                <svg className="w-8 h-8 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                </svg>
                            </div>
                            <h3 className="text-2xl font-serif text-gold mb-4">{t('about.values.auth.title')}</h3>
                            <p className="text-french-gray/70">
                                {t('about.values.auth.desc')}
                            </p>
                        </div>

                        <div className="text-center">
                            <div className="w-16 h-16 mx-auto mb-6 border-2 border-gold rounded-full flex items-center justify-center">
                                <svg className="w-8 h-8 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                                </svg>
                            </div>
                            <h3 className="text-2xl font-serif text-gold mb-4">{t('about.values.qual.title')}</h3>
                            <p className="text-french-gray/70">
                                {t('about.values.qual.desc')}
                            </p>
                        </div>

                        <div className="text-center">
                            <div className="w-16 h-16 mx-auto mb-6 border-2 border-gold rounded-full flex items-center justify-center">
                                <svg className="w-8 h-8 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </div>
                            <h3 className="text-2xl font-serif text-gold mb-4">{t('about.values.glob.title')}</h3>
                            <p className="text-french-gray/70">
                                {t('about.values.glob.desc')}
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
