'use client';

import { ReactNode, useEffect } from 'react';

interface SmoothScrollProps {
    children: ReactNode;
}

export default function SmoothScroll({ children }: SmoothScrollProps) {
    useEffect(() => {
        let cancelled = false;
        let lenis: { raf: (time: number) => void; destroy: () => void } | undefined;
        let frame = 0;

        import('lenis')
            .then(({ default: Lenis }) => {
                if (cancelled) return;

                lenis = new Lenis({ lerp: 0.12, duration: 1.0, smoothWheel: true });

                const raf = (time: number) => {
                    lenis?.raf(time);
                    frame = requestAnimationFrame(raf);
                };
                frame = requestAnimationFrame(raf);
            })
            .catch(() => {
                // Smooth scrolling is optional; fall back to native scrolling.
            });

        return () => {
            cancelled = true;
            cancelAnimationFrame(frame);
            lenis?.destroy();
        };
    }, []);

    return <>{children}</>;
}
