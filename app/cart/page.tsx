'use client';

import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { useCart } from '@/contexts/CartContext';
import { useLanguage } from '@/contexts/LanguageContext';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';

export default function CartPage() {
    const { cartItems, removeFromCart, updateQuantity, cartTotal, cartCount } = useCart();
    const { t, convertPrice, language } = useLanguage();
    const total = convertPrice(cartTotal);

    return (
        <main className="min-h-screen bg-animated-gradient">
            <Navbar />

            <section className="pt-32 pb-20 px-4">
                <div className="container-luxury max-w-5xl">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="mb-12"
                    >
                        <h1 className="text-display font-serif text-gradient-gold mb-4 text-center">
                            {t('cart.title')}
                        </h1>
                        <p className="text-stone/60 text-center uppercase tracking-widest text-sm">
                            {cartCount} {t('products.count')}
                        </p>
                    </motion.div>

                    {cartItems.length === 0 ? (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            className="text-center py-20 glass rounded-3xl"
                        >
                            <svg className="w-20 h-20 text-gold/20 mx-auto mb-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                            </svg>
                            <p className="text-xl text-stone/40 mb-8">{t('cart.empty')}</p>
                            <Link
                                href="/products"
                                className="inline-block px-8 py-4 bg-gold text-obsidian font-bold uppercase tracking-wider rounded-full hover:bg-gold-light transition-all"
                            >
                                {t('product.discover')}
                            </Link>
                        </motion.div>
                    ) : (
                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                            {/* Items List */}
                            <div className="lg:col-span-2 space-y-6">
                                <AnimatePresence mode="popLayout">
                                    {cartItems.map((item) => {
                                        const itemName = item.name[language as keyof typeof item.name] || item.name.en;
                                        const itemPrice = convertPrice(item.price);
                                        return (
                                            <motion.div
                                                key={item.id}
                                                layout
                                                initial={{ opacity: 0, scale: 0.95 }}
                                                animate={{ opacity: 1, scale: 1 }}
                                                exit={{ opacity: 0, scale: 0.95 }}
                                                className="glass p-6 rounded-2xl flex items-center space-x-6"
                                            >
                                                <div className="relative w-24 h-32 flex-shrink-0 bg-obsidian/50 rounded-lg overflow-hidden border border-gold/10">
                                                    <Image
                                                        src={item.images[0]}
                                                        alt={itemName}
                                                        fill
                                                        className="object-cover"
                                                    />
                                                </div>
                                                <div className="flex-grow">
                                                    <h3 className="text-xl font-serif text-stone mb-1">{itemName}</h3>
                                                    <div className="flex items-center space-x-3 mb-4">
                                                        <p className="text-gold font-serif">{itemPrice.symbol}{itemPrice.amount}</p>
                                                        {item.selectedSize && (
                                                            <span className="text-[10px] bg-gold/10 text-gold px-2 py-0.5 rounded border border-gold/20 uppercase tracking-widest font-bold">
                                                                Size: {item.selectedSize}
                                                            </span>
                                                        )}
                                                    </div>

                                                    <div className="flex items-center space-x-4">
                                                        <div className="flex items-center border border-gold/20 rounded-full overflow-hidden">
                                                            <button
                                                                onClick={() => updateQuantity(item.id, item.quantity - 1, item.selectedSize)}
                                                                className="px-3 py-1 text-gold hover:bg-gold/10 transition-colors"
                                                            >
                                                                -
                                                            </button>
                                                            <span className="px-3 py-1 text-stone min-w-[3ch] text-center">
                                                                {item.quantity}
                                                            </span>
                                                            <button
                                                                onClick={() => updateQuantity(item.id, item.quantity + 1, item.selectedSize)}
                                                                className="px-3 py-1 text-gold hover:bg-gold/10 transition-colors"
                                                            >
                                                                +
                                                            </button>
                                                        </div>
                                                        <button
                                                            onClick={() => removeFromCart(item.id, item.selectedSize)}
                                                            className="text-stone/40 hover:text-red-400 text-xs uppercase tracking-widest transition-colors"
                                                        >
                                                            {t('cart.remove')}
                                                        </button>
                                                    </div>
                                                </div>
                                                <div className="text-right flex-shrink-0">
                                                    <p className="text-lg font-serif text-white">
                                                        {itemPrice.symbol}{(item.price * item.quantity * itemPrice.amount / item.price).toFixed(0)}
                                                    </p>
                                                </div>
                                            </motion.div>
                                        );
                                    })}
                                </AnimatePresence>
                            </div>

                            {/* Summary */}
                            <div className="lg:col-span-1">
                                <div className="glass p-8 rounded-3xl sticky top-32">
                                    <h2 className="text-2xl font-serif text-gold mb-8">{t('checkout.orderSummary')}</h2>

                                    <div className="space-y-4 mb-8">
                                        <div className="flex justify-between text-stone/60">
                                            <span>{t('cart.subtotal')}</span>
                                            <span>{total.symbol}{total.amount}</span>
                                        </div>
                                        <div className="flex justify-between text-stone/60">
                                            <span>Livraison</span>
                                            <span className="text-gold uppercase tracking-widest text-xs">Gratuit</span>
                                        </div>
                                        <div className="pt-4 border-t border-gold/10 flex justify-between text-xl text-white">
                                            <span>{t('cart.total')}</span>
                                            <span className="text-gold">{total.symbol}{total.amount}</span>
                                        </div>
                                    </div>

                                    <Link
                                        href="/checkout"
                                        className="block w-full py-5 bg-gold text-obsidian font-bold uppercase tracking-[0.2em] text-center rounded-xl hover:bg-gold-light transition-all shadow-xl shadow-gold/10"
                                    >
                                        {t('cart.checkout')}
                                    </Link>

                                    <Link
                                        href="/products"
                                        className="block w-full mt-4 py-4 border border-gold/20 text-gold font-bold uppercase tracking-[0.2em] text-center rounded-xl hover:bg-gold/10 transition-all"
                                    >
                                        {t('product.discover')}
                                    </Link>

                                    <p className="text-[10px] text-stone/30 text-center mt-6 uppercase tracking-widest leading-relaxed">
                                        Paiement sécurisé & Artisanat authentique garanti
                                    </p>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </section>

            <Footer />
        </main>
    );
}
