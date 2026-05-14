'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useEffect, useState } from 'react';

export default function ScrollBackground() {
    const { scrollYProgress } = useScroll();
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(true);
    }, []);

    // 3D Parallax Layers
    const y1 = useTransform(scrollYProgress, [0, 1], ['0%', '20%']);
    const y2 = useTransform(scrollYProgress, [0, 1], ['0%', '-20%']);
    const rotate = useTransform(scrollYProgress, [0, 1], [0, 15]);
    const scale = useTransform(scrollYProgress, [0, 0.5, 1], [1, 1.2, 1]);

    // Color Shifts
    const opacity1 = useTransform(scrollYProgress, [0, 0.5, 1], [0.4, 0.8, 0.4]);
    const opacity2 = useTransform(scrollYProgress, [0, 0.5, 1], [0.6, 0.3, 0.6]);

    if (!isClient) return null;

    return (
        <div className="fixed inset-0 z-[-1] overflow-hidden pointer-events-none bg-white">
            {/* Base Gradient */}
            <div className="absolute inset-0 bg-gradient-to-b from-white via-[#F5F5F7] to-[#E5E5E5]" />

            {/* Moving Gradient Orbs for 3D Feel */}
            <motion.div
                style={{ y: y1, opacity: opacity1, scale }}
                className="absolute top-[-20%] left-[-10%] w-[70vw] h-[70vw] rounded-full bg-gradient-radial from-[#C5A059]/20 to-transparent blur-[100px]"
            />

            <motion.div
                style={{ y: y2, opacity: opacity2, rotate }}
                className="absolute bottom-[-10%] right-[-10%] w-[80vw] h-[80vw] rounded-full bg-gradient-radial from-[#D4AF37]/15 to-transparent blur-[120px]"
            />

            <motion.div
                style={{ scale: useTransform(scrollYProgress, [0, 1], [1, 1.5]) }}
                className="absolute top-[40%] left-[30%] w-[40vw] h-[40vw] rounded-full bg-gradient-radial from-white/80 to-transparent blur-[80px] mix-blend-overlay"
            />

            {/* Subtle Texture Overlay */}
            <div className="absolute inset-0 opacity-[0.03] bg-[url('/noise.png')] mix-blend-multiply" />
        </div>
    );
}
