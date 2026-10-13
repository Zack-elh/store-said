'use client';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CategorySelector from '@/components/CategorySelector';
import { motion } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';

export default function ProductsPage() {
    const { t } = useLanguage();
    return (
        <main className="min-h-screen bg-animated-gradient">
            <Navbar />

            {/* Hero Section */}
            <section className="pt-32 pb-16 px-4">
                <div className="container-luxury text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <h1 className="text-display font-serif text-gradient-gold mb-6">
                            {t('category.title')}
                        </h1>
                        <p className="text-xl text-stone/80 max-w-3xl mx-auto uppercase tracking-[0.3em] font-light">
                            {t('category.subtitle')}
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Full Category Selection */}
            <div className="pb-24">
                <CategorySelector showTitle={false} />
            </div>

            <Footer />
        </main>
    );
}
