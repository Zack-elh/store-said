'use client';

import { useState, useEffect } from 'react';
import HeroSection from '@/components/HeroSection';
import Navbar from '@/components/Navbar';
import CategorySelector from '@/components/CategorySelector';
import Footer from '@/components/Footer';
import MoroccanDoor from '@/components/MoroccanDoor';
import { AnimatePresence, motion } from 'framer-motion';

export default function Home() {
    const [isDoorOpen, setIsDoorOpen] = useState(false);
    const [showContent, setShowContent] = useState(false);

    const [isDoorGone, setIsDoorGone] = useState(false);

    useEffect(() => {
        // Start opening the door after a short delay
        const doorTimer = setTimeout(() => {
            setIsDoorOpen(true);
        }, 1000);

        // Show content after doors are significantly open
        const contentTimer = setTimeout(() => {
            setShowContent(true);
        }, 2500);

        // Completely remove the door container after animation
        const finishTimer = setTimeout(() => {
            setIsDoorGone(true);
        }, 4000);

        return () => {
            clearTimeout(doorTimer);
            clearTimeout(contentTimer);
            clearTimeout(finishTimer);
        };
    }, []);

    return (
        <main className="min-h-screen bg-animated-gradient overflow-hidden relative" suppressHydrationWarning>
            {/* Entrance Experience */}
            {!isDoorGone && (
                <div
                    className="fixed inset-0 z-[60] pointer-events-none"
                    suppressHydrationWarning
                >
                    <MoroccanDoor isOpen={isDoorOpen} />
                </div>
            )}

            <AnimatePresence>
                {showContent && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1 }}
                        className="relative z-0"
                        suppressHydrationWarning
                    >
                        <Navbar />
                        <HeroSection isDoorOpen={isDoorOpen} />
                        <CategorySelector />
                        <Footer />
                    </motion.div>
                )}
            </AnimatePresence>
        </main>
    );
}
