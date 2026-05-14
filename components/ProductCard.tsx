'use client';

import { Product } from '@/types/product';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';
import { useCart } from '@/contexts/CartContext';

interface ProductCardProps {
    product: Product;
    index?: number;
}

export default function ProductCard({ product, index = 0 }: ProductCardProps) {
    const { convertPrice, language, t } = useLanguage();
    const { addToCart } = useCart();
    const price = convertPrice(product.price);
    const productName = product.name[language as keyof typeof product.name] || product.name.en;
    const productDescription = product.description[language as keyof typeof product.description] || product.description.en;

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            className="group"
        >
            <Link href={`/products/${product.category}/${product.id}`}>
                <div className="relative overflow-hidden bg-white/40 backdrop-blur-md border border-gold/10 hover:border-gold/30 transition-all duration-300 rounded-xl">
                    {/* Product Image */}
                    <div className="relative aspect-[3/4] overflow-hidden bg-white/50 flex items-center justify-center">
                        {product.images[0].startsWith('http') || product.images[0].includes('.') ? (
                            <Image
                                src={product.images[0]}
                                alt={productName}
                                fill
                                className="object-cover transition-transform duration-500 group-hover:scale-105"
                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                onError={(e) => {
                                    // If image fails to load, we could show the placeholder here too
                                }}
                            />
                        ) : null}

                        {/* Luxury Placeholder for Missing Images */}
                        <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center">
                            <div className="w-16 h-16 border border-gold/20 rounded-full flex items-center justify-center mb-4 text-gold/40 group-hover:text-gold/60 transition-colors">
                                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                </svg>
                            </div>
                            <span className="text-gold/40 text-xs uppercase tracking-[0.2em] font-serif">{t('product.comingSoon')}</span>

                            {/* Decorative Corner */}
                            <div className="absolute top-4 left-4 w-4 h-4 border-t border-l border-gold/20" />
                            <div className="absolute bottom-4 right-4 w-4 h-4 border-b border-r border-gold/20" />
                        </div>

                        {/* Overlay on Hover */}
                        <div className="absolute inset-0 bg-firmament/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                            <span className="text-white uppercase tracking-wider text-sm">
                                {t('product.viewDetails')}
                            </span>
                        </div>

                        {/* Made to Measure Badge */}
                        {product.madeToMeasure && (
                            <div className="absolute top-4 right-4 bg-gold/90 text-firmament px-3 py-1 text-xs uppercase tracking-wider">
                                {t('product.madeToMeasure')}
                            </div>
                        )}

                        {/* Featured Badge */}
                        {product.featured && (
                            <div className="absolute top-4 left-4 bg-white/80 text-foreground px-3 py-1 text-xs uppercase tracking-wider border border-foreground/30">
                                {t('product.featured')}
                            </div>
                        )}
                    </div>

                    <div className="p-6">
                        <h3 className="text-xl font-serif text-gold mb-2 group-hover:text-gold-light transition-colors">
                            {productName}
                        </h3>
                        <p className="text-foreground text-sm mb-4 line-clamp-2">
                            {productDescription}
                        </p>

                        {/* Price & Add to Cart */}
                        <div className="flex items-center justify-between">
                            <span className="text-2xl font-serif text-gold">
                                {price.symbol}{price.amount}
                            </span>
                            <button
                                onClick={(e) => {
                                    e.preventDefault();
                                    e.stopPropagation();
                                    addToCart(product);
                                }}
                                className="p-3 bg-gold/10 hover:bg-gold text-gold hover:text-firmament transition-all duration-300 rounded-full border border-gold/20"
                                aria-label={t('product.addToCart')}
                            >
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                                </svg>
                            </button>
                        </div>

                        {/* Available Colors */}
                        {product.colors.length > 0 && (
                            <div className="mt-4 flex items-center space-x-2">
                                <span className="text-xs text-foreground uppercase tracking-wider">
                                    {t('product.colors')}:
                                </span>
                                <div className="flex space-x-1">
                                    {product.colors.slice(0, 4).map((color, idx) => (
                                        <div
                                            key={idx}
                                            className="w-4 h-4 rounded-full border border-gold/30"
                                            style={{
                                                backgroundColor: color.toLowerCase().replace(' ', ''),
                                            }}
                                            title={color}
                                        />
                                    ))}
                                    {product.colors.length > 4 && (
                                        <span className="text-xs text-foreground">
                                            +{product.colors.length - 4}
                                        </span>
                                    )}
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </Link>
        </motion.div>
    );
}
