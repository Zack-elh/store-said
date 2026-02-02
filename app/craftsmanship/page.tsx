'use client';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';


export default function CraftsmanshipPage() {
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
                            {t('craft.title')}
                        </h1>
                        <p className="text-xl text-french-gray/80 max-w-3xl mx-auto uppercase tracking-widest">
                            {t('craft.subtitle')}
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* The Master Section */}
            <section className="py-20 px-4">
                <div className="container-luxury">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="relative group"
                        >
                            <div className="absolute -inset-4 bg-gold/10 blur-xl rounded-full group-hover:bg-gold/20 transition-all duration-700" />
                            <div className="relative aspect-[4/5] overflow-hidden rounded-2xl border border-gold/20">
                                <Image
                                    src="/images/craftsmanship/tailor.png"
                                    alt="Master Moroccan Tailor"
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="space-y-8"
                        >
                            <h2 className="text-4xl font-serif text-gold">{t('craft.master.title')}</h2>
                            <p className="text-french-gray/80 text-lg leading-relaxed">
                                {t('craft.master.p1')}
                            </p>
                            <p className="text-french-gray/80 text-lg leading-relaxed">
                                {t('craft.master.p2')}
                            </p>
                            <div className="pt-8">
                                <div className="border-l-2 border-gold pl-6 italic text-gold/80 text-lg">
                                    {t('craft.master.quote')}
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* The Materials Section */}
            <section className="py-20 px-4 bg-firmament/40 backdrop-blur-md">
                <div className="container-luxury">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-serif text-gradient-gold mb-6">{t('craft.mat.title')}</h2>
                        <p className="text-french-gray/60 max-w-2xl mx-auto">
                            {t('craft.mat.p1')}
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            { title: t('craft.mat.item1.t'), desc: t('craft.mat.item1.d') },
                            { title: t('craft.mat.item2.t'), desc: t('craft.mat.item2.d') },
                            { title: t('craft.mat.item3.t'), desc: t('craft.mat.item3.d') }
                        ].map((item, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.2 }}
                                className="p-8 border border-gold/10 bg-firmament/20 rounded-xl hover:border-gold/30 transition-colors"
                            >
                                <h3 className="text-2xl font-serif text-gold mb-4">{item.title}</h3>
                                <p className="text-french-gray/70 leading-relaxed">{item.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Embroidery Section */}
            <section className="py-20 px-4">
                <div className="container-luxury">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                        <motion.div
                            initial={{ opacity: 0, order: 1 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            className="space-y-8 md:order-1"
                        >
                            <h2 className="text-4xl font-serif text-gold">{t('craft.det.title')}</h2>
                            <p className="text-french-gray/80 text-lg leading-relaxed">
                                {t('craft.det.p1')}
                            </p>
                            <p className="text-french-gray/80 text-lg leading-relaxed">
                                {t('craft.det.p2')}
                            </p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, scale: 0.9, order: 2 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="relative aspect-square md:order-2"
                        >
                            <div className="absolute inset-0 border-2 border-gold/20 translate-x-4 translate-y-4 rounded-2xl" />
                            <div className="relative h-full w-full overflow-hidden rounded-2xl">
                                <Image
                                    src="/images/craftsmanship/silk.png"
                                    alt="Intricate Moroccan Embroidery"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-32 px-4 text-center">
                <div className="container-luxury">
                    <div className="max-w-4xl mx-auto p-12 border border-gold/20 bg-firmament/30 rounded-3xl backdrop-blur-lg">
                        <h2 className="text-4xl font-serif text-white mb-8">{t('craft.cta.title')}</h2>
                        <p className="text-french-gray/70 mb-12 text-lg">
                            {t('craft.cta.p1')}
                        </p>
                        <motion.a
                            href="/products"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="inline-block px-12 py-5 bg-gold text-firmament font-bold uppercase tracking-widest hover:bg-gold-light transition-all rounded-full shadow-2xl shadow-gold/20"
                        >
                            {t('craft.cta.btn')}
                        </motion.a>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
