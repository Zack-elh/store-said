'use client';

import { getProductsByCategory } from '@/lib/products';
import { Category } from '@/types/product';
import ProductCard from '@/components/ProductCard';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { useLanguage } from '@/contexts/LanguageContext';

export default function JalabaPage() {
    const { t } = useLanguage();
    const products = getProductsByCategory(Category.JALABA);

    return (
        <main className="min-h-screen bg-obsidian">
            <Navbar />

            {/* Hero Section */}
            <section className="pt-32 pb-16 px-4">
                <div className="container-luxury text-center">
                    <h1 className="text-display font-serif text-gradient-gold mb-6">
                        {t('products.jalaba.title')}
                    </h1>
                    <p className="text-lg text-stone/80 max-w-3xl mx-auto mb-4">
                        {t('category.jalaba.desc')}
                    </p>
                    <p className="text-sm text-stone/60 uppercase tracking-widest">
                        {products.length} {t('products.count')}
                    </p>
                </div>
            </section>

            {/* Products Grid */}
            <section className="py-16 px-4">
                <div className="container-luxury">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {products.map((product, index) => (
                            <ProductCard key={product.id} product={product} index={index} />
                        ))}
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
