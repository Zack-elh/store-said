'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import { Product } from '@/types/product';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { useLanguage } from '@/contexts/LanguageContext';
import { useCart } from '@/contexts/CartContext';
import Image from 'next/image';
import { motion } from 'framer-motion';

interface ProductDetailProps {
    product: Product;
}

export default function ProductDetail({ product }: ProductDetailProps) {
    const router = useRouter();
    const { t, language, convertPrice } = useLanguage();
    const { addToCart } = useCart();

    const [selectedSize, setSelectedSize] = React.useState<string>('');
    const [selectedColor, setSelectedColor] = React.useState<string>(product?.colors[0] || '');
    const [sizeError, setSizeError] = React.useState(false);

    const handleAddToCart = () => {
        if (product.sizes && product.sizes.length > 0 && !selectedSize) {
            setSizeError(true);
            return;
        }
        setSizeError(false);
        addToCart(product, selectedSize);
    };

    const handleWhatsApp = () => {
        const message = encodeURIComponent(`Bonjour JaLaba, je suis intéressé par le produit: ${productName} (Ref: ${product.id})`);
        window.open(`https://wa.me/212600000000?text=${message}`, '_blank');
    };

    const price = convertPrice(product.price);
    const productName = product.name[language as keyof typeof product.name] || product.name.en;
    const productDescription = product.description[language as keyof typeof product.description] || product.description.en;

    return (
        <main className="min-h-screen">
            <Navbar />

            <section className="pt-32 pb-20 px-4">
                <div className="container-luxury">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
                        {/* Image Gallery */}
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            className="space-y-4"
                        >
                            <div className="relative aspect-[3/4] bg-white/50 rounded-3xl overflow-hidden border border-gold/10">
                                <Image
                                    src={product.images[0]}
                                    alt={productName}
                                    fill
                                    className="object-cover"
                                />
                            </div>
                            <div className="grid grid-cols-4 gap-4">
                                {product.images.map((img, idx) => (
                                    <div key={idx} className="relative aspect-square bg-white/30 rounded-xl overflow-hidden border border-gold/5 cursor-pointer hover:border-gold/30 transition-all">
                                        <Image src={img} alt={`${productName} view ${idx + 1}`} fill className="object-cover" />
                                    </div>
                                ))}
                            </div>
                        </motion.div>

                        {/* Product Info */}
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            className="bg-obsidian/95 backdrop-blur-md p-10 rounded-3xl border border-gold/20 shadow-2xl"
                        >
                            <span className="text-gold/60 uppercase tracking-[0.3em] text-xs mb-4 block">
                                {product.category}
                            </span>
                            <h1 className="text-5xl font-serif text-sahara-gold mb-4">
                                {productName}
                            </h1>
                            <div className="flex items-center space-x-6 mb-8">
                                <p className="text-3xl font-serif text-gold">
                                    {price.symbol}{price.amount}
                                </p>
                                <button
                                    onClick={handleWhatsApp}
                                    className="flex items-center space-x-2 text-green-400 hover:text-green-300 transition-colors text-sm uppercase tracking-widest font-bold"
                                >
                                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766 0-3.187-2.575-5.771-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.941-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217s.231.006.332.013c.101.007.237-.038.37.284.133.321.455 1.111.49 1.183.036.072.059.155.011.25-.048.094-.072.155-.144.238-.072.083-.153.185-.219.248-.073.07-.15.146-.065.292.085.145.378.625.811 1.011.558.497 1.03.652 1.174.724.144.072.231.061.317-.038.087-.098.37-.43.47-.577.1-.148.2-.123.336-.072s.867.409.917.458.083.072.072.195z" /></svg>
                                    <span>WhatsApp</span>
                                </button>
                            </div>

                            <div className="space-y-6 mb-12">
                                <p className="text-white/90 leading-relaxed text-lg font-light">
                                    {productDescription}
                                </p>

                                <div className="space-y-4">
                                    <div className="flex items-center space-x-3">
                                        <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                        </svg>
                                        <span className="text-white/90 italic">{t('product.madeToMeasure')}</span>
                                    </div>
                                    <div className="flex items-center space-x-3">
                                        <svg className="w-5 h-5 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                        </svg>
                                        <span className="text-white/90 italic">Artisanat 100% Marocain</span>
                                    </div>
                                </div>
                            </div>

                            {/* Options */}
                            <div className="space-y-10 mb-12">
                                <div>
                                    <h4 className="text-xs uppercase tracking-widest text-gold mb-4">{t('product.colors')}</h4>
                                    <div className="flex space-x-3">
                                        {product.colors.map((color, idx) => (
                                            <button
                                                key={idx}
                                                onClick={() => setSelectedColor(color)}
                                                className={`w-8 h-8 rounded-full border-2 transition-all hover:scale-110 ${selectedColor === color ? 'border-gold scale-110 shadow-lg shadow-gold/20' : 'border-gold/10'}`}
                                                style={{ backgroundColor: color.toLowerCase().replace(' ', '') }}
                                                title={color}
                                            />
                                        ))}
                                    </div>
                                </div>

                                {product.sizes && product.sizes.length > 0 && (
                                    <div>
                                        <h4 className="text-xs uppercase tracking-widest text-gold mb-4">
                                            {product.category === 'belgha' ? t('product.size.shoes') : t('product.size')}
                                        </h4>
                                        <div className="flex flex-wrap gap-2">
                                            {product.sizes.map((size) => (
                                                <button
                                                    key={size}
                                                    onClick={() => {
                                                        setSelectedSize(size);
                                                        setSizeError(false);
                                                    }}
                                                    className={`px-4 py-2 text-sm border rounded-lg transition-all ${selectedSize === size ? 'bg-gold text-firmament border-gold' : 'border-gold/20 text-white/80 hover:border-gold/50'}`}
                                                >
                                                    {size}
                                                </button>
                                            ))}
                                        </div>
                                        {sizeError && (
                                            <p className="text-red-400 text-xs mt-2 font-bold animate-pulse">
                                                {t('product.size')}
                                            </p>
                                        )}
                                    </div>
                                )}
                            </div>

                            {/* Actions */}
                            <div className="flex flex-col sm:flex-row gap-4">
                                <button
                                    onClick={handleAddToCart}
                                    className="flex-grow py-5 bg-gold text-firmament font-bold uppercase tracking-[0.2em] rounded-xl hover:bg-gold-light transition-all shadow-xl shadow-gold/20"
                                >
                                    {t('product.addToCart')}
                                </button>
                                <a
                                    href={`mailto:contact@jalaba.com?subject=Inquiry: ${productName}`}
                                    className="sm:px-10 py-5 border border-gold text-gold font-bold uppercase tracking-[0.2em] rounded-xl hover:bg-gold/10 transition-all text-center"
                                >
                                    {t('contact.email')}
                                </a>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
