'use client';

import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { useCart } from '@/contexts/CartContext';
import { useLanguage } from '@/contexts/LanguageContext';
import { motion, AnimatePresence } from 'framer-motion';

export default function CheckoutPage() {
    const { cartItems, cartTotal, clearCart } = useCart();
    const { t, convertPrice, language } = useLanguage();
    const total = convertPrice(cartTotal);

    const [paymentMethod, setPaymentMethod] = useState<'stripe' | 'paypal' | 'whatsapp' | 'email'>('stripe');
    const [isOrdered, setIsOrdered] = useState(false);
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        phone: '',
        address: '',
        city: '',
        country: '',
    });

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const generateOrderSummaryText = () => {
        const itemsList = cartItems.map(item =>
            `- ${item.name[language as keyof typeof item.name] || item.name.en} (Qty: ${item.quantity}, Size: ${item.selectedSize || 'N/A'})`
        ).join('\n');

        return `📦 *Nouvelle Commande JaLaba*\n\n` +
            `👤 *Client:* ${formData.fullName}\n` +
            `📧 *Email:* ${formData.email}\n` +
            `📞 *Tel:* ${formData.phone}\n` +
            `📍 *Adresse:* ${formData.address}, ${formData.city}, ${formData.country}\n\n` +
            `🛒 *Articles:*\n${itemsList}\n\n` +
            `💰 *Total:* ${total.symbol}${total.amount}`;
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        if (paymentMethod === 'whatsapp') {
            const message = encodeURIComponent(generateOrderSummaryText());
            window.open(`https://wa.me/212600000000?text=${message}`, '_blank');
            setIsOrdered(true);
            clearCart();
            return;
        }

        if (paymentMethod === 'email') {
            const subject = encodeURIComponent(`Nouvelle Commande JaLaba - ${formData.fullName}`);
            const body = encodeURIComponent(generateOrderSummaryText().replace(/\*/g, ''));
            window.location.href = `mailto:contact@jalaba.com?subject=${subject}&body=${body}`;
            setIsOrdered(true);
            clearCart();
            return;
        }

        // Logic for Stripe/PayPal would go here
        console.log(`Processing ${paymentMethod} payment...`);
        setIsOrdered(true);
        clearCart();
    };

    if (isOrdered) {
        return (
            <main className="min-h-screen bg-animated-gradient">
                <Navbar />
                <section className="pt-32 pb-20 px-4 flex items-center justify-center min-h-[80vh]">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="glass p-12 rounded-3xl max-w-2xl text-center"
                    >
                        <div className="w-20 h-20 bg-gold/20 rounded-full flex items-center justify-center mx-auto mb-8">
                            <svg className="w-10 h-10 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                        </div>
                        <h1 className="text-4xl font-serif text-white mb-4">
                            {paymentMethod === 'whatsapp' || paymentMethod === 'email'
                                ? "Demande Envoyée !"
                                : t('checkout.success')}
                        </h1>
                        <p className="text-stone/60 text-lg mb-12">
                            {paymentMethod === 'whatsapp' || paymentMethod === 'email'
                                ? "Nous avons bien reçu votre demande. Nous vous contacterons très prochainement pour finaliser les détails."
                                : t('checkout.thankYou')}
                        </p>
                        <motion.a
                            href="/"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="inline-block px-12 py-5 bg-gold text-obsidian font-bold uppercase tracking-[0.2em] rounded-full"
                        >
                            {t('checkout.backToHome')}
                        </motion.a>
                    </motion.div>
                </section>
                <Footer />
            </main>
        );
    }

    return (
        <main className="min-h-screen bg-animated-gradient">
            <Navbar />

            <section className="pt-32 pb-20 px-4">
                <div className="container-luxury max-w-6xl">
                    <h1 className="text-display font-serif text-gradient-gold mb-12 text-center">
                        {t('checkout.title')}
                    </h1>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                        {/* Left Side: Forms */}
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            className="space-y-12"
                        >
                            {/* Delivery Form */}
                            <div>
                                <h2 className="text-2xl font-serif text-white mb-8 border-b border-gold/10 pb-4">
                                    {t('checkout.delivery')}
                                </h2>

                                <form id="checkout-form" onSubmit={handleSubmit} className="space-y-6">
                                    <div className="space-y-2">
                                        <label className="text-xs uppercase tracking-widest text-gold/60 ml-1">
                                            {t('checkout.fullName')}
                                        </label>
                                        <input
                                            required
                                            type="text"
                                            name="fullName"
                                            value={formData.fullName}
                                            onChange={handleInputChange}
                                            className="w-full bg-obsidian/40 border border-gold/10 rounded-xl px-6 py-4 text-white focus:border-gold/50 outline-none transition-all placeholder:text-stone/20"
                                            placeholder="Ahmed Alami"
                                        />
                                    </div>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div className="space-y-2">
                                            <label className="text-xs uppercase tracking-widest text-gold/60 ml-1">
                                                {t('checkout.email')}
                                            </label>
                                            <input
                                                required
                                                type="email"
                                                name="email"
                                                value={formData.email}
                                                onChange={handleInputChange}
                                                className="w-full bg-obsidian/40 border border-gold/10 rounded-xl px-6 py-4 text-white focus:border-gold/50 outline-none transition-all placeholder:text-stone/20"
                                                placeholder="ahmed@example.com"
                                            />
                                        </div>
                                        <div className="space-y-2">
                                            <label className="text-xs uppercase tracking-widest text-gold/60 ml-1">
                                                {t('checkout.phone')}
                                            </label>
                                            <input
                                                required
                                                type="tel"
                                                name="phone"
                                                value={formData.phone}
                                                onChange={handleInputChange}
                                                className="w-full bg-obsidian/40 border border-gold/10 rounded-xl px-6 py-4 text-white focus:border-gold/50 outline-none transition-all placeholder:text-stone/20"
                                                placeholder="+212 6..."
                                            />
                                        </div>
                                    </div>

                                    <div className="space-y-2">
                                        <label className="text-xs uppercase tracking-widest text-gold/60 ml-1">
                                            {t('checkout.address')}
                                        </label>
                                        <textarea
                                            required
                                            name="address"
                                            rows={3}
                                            value={formData.address}
                                            onChange={handleInputChange}
                                            className="w-full bg-obsidian/40 border border-gold/10 rounded-xl px-6 py-4 text-white focus:border-gold/50 outline-none transition-all resize-none placeholder:text-stone/20"
                                            placeholder="123 Rue de la Liberté, Quartier Maarif"
                                        />
                                    </div>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div className="space-y-2">
                                            <label className="text-xs uppercase tracking-widest text-gold/60 ml-1">
                                                {t('checkout.city')}
                                            </label>
                                            <input
                                                required
                                                type="text"
                                                name="city"
                                                value={formData.city}
                                                onChange={handleInputChange}
                                                className="w-full bg-obsidian/40 border border-gold/10 rounded-xl px-6 py-4 text-white focus:border-gold/50 outline-none transition-all placeholder:text-stone/20"
                                                placeholder="Casablanca"
                                            />
                                        </div>
                                        <div className="space-y-2">
                                            <label className="text-xs uppercase tracking-widest text-gold/60 ml-1">
                                                {t('checkout.country')}
                                            </label>
                                            <input
                                                required
                                                type="text"
                                                name="country"
                                                value={formData.country}
                                                onChange={handleInputChange}
                                                className="w-full bg-obsidian/40 border border-gold/10 rounded-xl px-6 py-4 text-white focus:border-gold/50 outline-none transition-all"
                                            />
                                        </div>
                                    </div>
                                </form>
                            </div>

                            {/* Payment Options */}
                            <div>
                                <h2 className="text-2xl font-serif text-white mb-8 border-b border-gold/10 pb-4">
                                    Option de Paiement
                                </h2>
                                <div className="grid grid-cols-2 gap-4">
                                    {[
                                        { id: 'stripe', label: 'Carte Bancaire', icon: '💳' },
                                        { id: 'paypal', label: 'PayPal', icon: '🅿️' },
                                        { id: 'whatsapp', label: 'WhatsApp', icon: '💬' },
                                        { id: 'email', label: 'Email', icon: '📧' }
                                    ].map((method) => {
                                        const isLiquid = method.id === 'whatsapp' || method.id === 'email';
                                        return (
                                            <button
                                                key={method.id}
                                                type="button"
                                                onClick={() => setPaymentMethod(method.id as 'stripe' | 'paypal' | 'whatsapp' | 'email')}
                                                className={`p-6 rounded-2xl border transition-all flex flex-col items-center justify-center space-y-3 ${paymentMethod === method.id
                                                    ? (isLiquid ? 'liquid-glass liquid-glass-active' : 'border-gold bg-gold/10 ring-1 ring-gold shadow-lg shadow-gold/10')
                                                    : (isLiquid ? 'liquid-glass opacity-60 hover:opacity-100' : 'border-gold/10 bg-obsidian/40 hover:border-gold/30')
                                                    }`}
                                            >
                                                <span className="text-3xl">{method.icon}</span>
                                                <span className={`text-xs uppercase tracking-widest font-bold ${paymentMethod === method.id ? 'text-white' : 'text-stone/40'}`}>
                                                    {method.label}
                                                </span>
                                            </button>
                                        );
                                    })}
                                </div>
                                <p className="text-[10px] text-stone/30 mt-6 uppercase tracking-widest leading-relaxed">
                                    * Les options WhatsApp et Email vous permettent de finaliser la commande directement avec notre équipe.
                                </p>
                            </div>

                            <motion.button
                                form="checkout-form"
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                type="submit"
                                className={`w-full py-5 font-bold uppercase tracking-[0.2em] rounded-xl transition-all shadow-xl ${paymentMethod === 'whatsapp' || paymentMethod === 'email'
                                    ? 'liquid-glass text-white border-white/20 hover:border-white/40 shadow-white/5'
                                    : 'bg-gold text-obsidian hover:bg-gold-light shadow-gold/20'
                                    }`}
                            >
                                {paymentMethod === 'whatsapp' || paymentMethod === 'email'
                                    ? "Finaliser sur " + paymentMethod.charAt(0).toUpperCase() + paymentMethod.slice(1)
                                    : t('checkout.placeOrder')}
                            </motion.button>
                        </motion.div>

                        {/* Right Side: Summary */}
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            className="bg-obsidian/40 backdrop-blur-md rounded-3xl p-8 border border-gold/10 h-fit sticky top-32"
                        >
                            <h2 className="text-2xl font-serif text-gold mb-8">{t('checkout.orderSummary')}</h2>
                            <div className="space-y-6 mb-8 max-h-[40vh] overflow-auto pr-4 custom-scrollbar">
                                {cartItems.map((item) => {
                                    const itemName = item.name[language as keyof typeof item.name] || item.name.en;
                                    const itemPrice = convertPrice(item.price);
                                    return (
                                        <div key={item.id} className="flex justify-between items-center py-2 border-b border-gold/5">
                                            <div>
                                                <p className="text-white font-medium">{itemName}</p>
                                                <p className="text-xs text-stone/40 uppercase tracking-widest">
                                                    Qty: {item.quantity} | Size: {item.selectedSize || 'N/A'}
                                                </p>
                                            </div>
                                            <p className="text-stone/80">
                                                {itemPrice.symbol}{(item.price * item.quantity * itemPrice.amount / item.price).toFixed(0)}
                                            </p>
                                        </div>
                                    );
                                })}
                            </div>

                            <div className="space-y-4 pt-4">
                                <div className="flex justify-between text-stone/60">
                                    <span>{t('cart.subtotal')}</span>
                                    <span>{total.symbol}{total.amount}</span>
                                </div>
                                <div className="flex justify-between text-stone/60">
                                    <span>Livraison</span>
                                    <span className="text-gold uppercase tracking-widest text-xs">Gratuite</span>
                                </div>
                                <div className="pt-6 border-t border-gold/20 flex justify-between text-2xl text-white font-serif italic">
                                    <span>{t('cart.total')}</span>
                                    <span className="text-gold">{total.symbol}{total.amount}</span>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
