'use client';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';

export default function ContactPage() {
    const { t } = useLanguage();

    return (
        <main className="min-h-screen bg-animated-gradient">
            <Navbar />

            {/* Hero Section */}
            <section className="pt-32 pb-16 px-4">
                <div className="container-luxury text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <h1 className="text-display font-serif text-gradient-gold mb-6">
                            {t('contact.title')}
                        </h1>
                        <p className="text-lg text-stone/80 max-w-3xl mx-auto mb-4">
                            {t('contact.subtitle')}
                        </p>
                        <p className="text-stone/60 max-w-2xl mx-auto">
                            {t('contact.desc')}
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Social Media Platforms */}
            <section className="py-16 px-4">
                <div className="container-luxury max-w-4xl">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
                        {/* Instagram */}
                        <motion.a
                            href="https://instagram.com/jalaba"
                            target="_blank"
                            rel="noopener noreferrer"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                            whileHover={{ scale: 1.05 }}
                            className="glass p-8 text-center group hover:border-gold/50 transition-all"
                        >
                            <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                                <svg className="w-12 h-12 text-gold group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073z" />
                                    <path d="M12 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-serif text-gold mb-2">Instagram</h3>
                            <p className="text-stone/70 text-sm">{t('contact.insta')}</p>
                        </motion.a>

                        {/* Facebook */}
                        <motion.a
                            href="https://facebook.com/jalaba"
                            target="_blank"
                            rel="noopener noreferrer"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            whileHover={{ scale: 1.05 }}
                            className="glass p-8 text-center group hover:border-gold/50 transition-all"
                        >
                            <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                                <svg className="w-12 h-12 text-gold group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-serif text-gold mb-2">Facebook</h3>
                            <p className="text-stone/70 text-sm">{t('contact.fb')}</p>
                        </motion.a>

                        {/* WhatsApp */}
                        <motion.a
                            href="https://wa.me/212600000000"
                            target="_blank"
                            rel="noopener noreferrer"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3 }}
                            whileHover={{ scale: 1.05 }}
                            className="glass p-8 text-center group hover:border-gold/50 transition-all"
                        >
                            <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                                <svg className="w-12 h-12 text-gold group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-serif text-gold mb-2">WhatsApp</h3>
                            <p className="text-stone/70 text-sm">{t('contact.wa')}</p>
                        </motion.a>
                    </div>

                    {/* Contact CTA */}
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-serif text-white mb-4">{t('contact.detailsRequest')}</h2>
                        <div className="w-24 h-1 bg-gold mx-auto rounded-full"></div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {/* Email */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4 }}
                            className="liquid-glass p-8 text-center rounded-2xl group"
                        >
                            <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-white/10 mr-auto ml-auto">
                                <svg className="w-6 h-6 text-white/70" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                </svg>
                            </div>
                            <h3 className="text-lg font-serif text-white mb-3">{t('contact.email')}</h3>
                            <a href={`mailto:${t('contact.emailAddress')}`} className="text-stone/80 hover:text-white transition-colors block break-all">
                                {t('contact.emailAddress')}
                            </a>
                        </motion.div>

                        {/* WhatsApp */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.5 }}
                            className="liquid-glass p-8 text-center rounded-2xl group"
                        >
                            <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-white/10 mr-auto ml-auto">
                                <svg className="w-6 h-6 text-white/70" fill="currentColor" viewBox="0 0 24 24"><path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766 0-3.187-2.575-5.771-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.941-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217s.231.006.332.013c.101.007.237-.038.37.284.133.321.455 1.111.49 1.183.036.072.059.155.011.25-.048.094-.072.155-.144.238-.072.083-.153.185-.219.248-.073.07-.15.146-.065.292.085.145.378.625.811 1.011.558.497 1.03.652 1.174.724.144.072.231.061.317-.038.087-.098.37-.43.47-.577.1-.148.2-.123.336-.072s.867.409.917.458.083.072.072.195z" /></svg>
                            </div>
                            <h3 className="text-lg font-serif text-white mb-3">WhatsApp</h3>
                            <a href={`https://wa.me/${t('contact.whatsappNumber').replace(/\s+/g, '')}`} target="_blank" rel="noopener noreferrer" className="text-stone/80 hover:text-white transition-colors block">
                                {t('contact.whatsappNumber')}
                            </a>
                        </motion.div>

                        {/* Address */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.6 }}
                            className="glass p-8 text-center rounded-2xl border-gold/10 hover:border-gold/30 transition-all group"
                        >
                            <div className="w-12 h-12 bg-gold/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-gold/20 mr-auto ml-auto">
                                <svg className="w-6 h-6 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                </svg>
                            </div>
                            <h3 className="text-lg font-serif text-gold mb-3">{t('contact.address')}</h3>
                            <p className="text-stone/80">{t('contact.addressText')}</p>
                        </motion.div>

                        {/* Hours */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.7 }}
                            className="glass p-8 text-center rounded-2xl border-gold/10 hover:border-gold/30 transition-all group"
                        >
                            <div className="w-12 h-12 bg-gold/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-gold/20 mr-auto ml-auto">
                                <svg className="w-6 h-6 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </div>
                            <h3 className="text-lg font-serif text-gold mb-3">{t('contact.hours')}</h3>
                            <p className="text-stone/80">{t('contact.hoursText')}</p>
                        </motion.div>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
