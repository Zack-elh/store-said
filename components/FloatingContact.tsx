'use client';

import { motion } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';

export default function FloatingContact() {
    const { t } = useLanguage();
    const whatsappNumber = "+212600000000";

    return (
        <div className="fixed bottom-8 right-8 z-50 flex flex-col space-y-4">
            <motion.a
                href={`https://wa.me/${whatsappNumber.replace(/\s+/g, '')}`}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="w-14 h-14 liquid-glass rounded-full flex items-center justify-center shadow-2xl shadow-green-500/10 text-white"
                title="WhatsApp"
            >
                <svg className="w-8 h-8 text-white/80" fill="currentColor" viewBox="0 0 24 24"><path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766 0-3.187-2.575-5.771-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.941-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217s.231.006.332.013c.101.007.237-.038.37.284.133.321.455 1.111.49 1.183.036.072.059.155.011.25-.048.094-.072.155-.144.238-.072.083-.153.185-.219.248-.073.07-.15.146-.065.292.085.145.378.625.811 1.011.558.497 1.03.652 1.174.724.144.072.231.061.317-.038.087-.098.37-.43.47-.577.1-.148.2-.123.336-.072s.867.409.917.458.083.072.072.195z" /></svg>
            </motion.a>

            <motion.a
                href={`mailto:contact@jalaba.com`}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.1 }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="w-14 h-14 liquid-glass rounded-full flex items-center justify-center shadow-2xl shadow-white/5 text-white"
                title="Email"
            >
                <svg className="w-8 h-8 text-white/80" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
            </motion.a>
        </div>
    );
}
