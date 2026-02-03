'use client';

import { useRef } from 'react';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';

interface MoroccanDoorProps {
    isOpen: boolean;
}

export default function MoroccanDoor({ isOpen }: MoroccanDoorProps) {
    const leftDoorRef = useRef<HTMLDivElement>(null);
    const rightDoorRef = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        if (isOpen) {
            // Animate doors
            gsap.to(leftDoorRef.current, {
                x: '-100%',
                duration: 2,
                ease: 'power3.inOut',
            });

            gsap.to(rightDoorRef.current, {
                x: '100%',
                duration: 2,
                ease: 'power3.inOut',
            });
        }
    }, [isOpen]);

    return (
        <div className="relative w-full h-full">
            {/* Left Door */}
            <div
                ref={leftDoorRef}
                className="absolute top-0 left-0 w-1/2 h-full bg-[#050810] border-r-2 border-gold/50 overflow-hidden"
                style={{
                    transformOrigin: 'left center',
                }}
            >
                <div className="relative w-full h-full flex items-center justify-center">
                    {/* Moroccan Pattern Overlay */}
                    <div className="absolute inset-0 opacity-20">
                        <svg
                            className="w-full h-full"
                            viewBox="0 0 100 100"
                            preserveAspectRatio="xMidYMid slice"
                        >
                            <pattern
                                id="moroccan-pattern-left"
                                x="0"
                                y="0"
                                width="20"
                                height="20"
                                patternUnits="userSpaceOnUse"
                            >
                                <path
                                    d="M10 0 L20 10 L10 20 L0 10 Z"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="0.5"
                                    className="text-black-smoke"
                                />
                                <circle cx="10" cy="10" r="2" fill="currentColor" className="text-black-smoke" />
                            </pattern>
                            <rect width="100" height="100" fill="url(#moroccan-pattern-left)" />
                        </svg>
                    </div>

                    {/* Door Handle */}
                    <div className="absolute right-8 top-1/2 -translate-y-1/2 w-4 h-16 bg-gold rounded-full shadow-lg" />
                </div>
            </div>

            {/* Right Door */}
            <div
                ref={rightDoorRef}
                className="absolute top-0 right-0 w-1/2 h-full bg-[#050810] border-l-2 border-gold/50 overflow-hidden"
                style={{
                    transformOrigin: 'right center',
                }}
            >
                <div className="relative w-full h-full flex items-center justify-center">
                    {/* Moroccan Pattern Overlay */}
                    <div className="absolute inset-0 opacity-20">
                        <svg
                            className="w-full h-full"
                            viewBox="0 0 100 100"
                            preserveAspectRatio="xMidYMid slice"
                        >
                            <pattern
                                id="moroccan-pattern-right"
                                x="0"
                                y="0"
                                width="20"
                                height="20"
                                patternUnits="userSpaceOnUse"
                            >
                                <path
                                    d="M10 0 L20 10 L10 20 L0 10 Z"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="0.5"
                                    className="text-black-smoke"
                                />
                                <circle cx="10" cy="10" r="2" fill="currentColor" className="text-black-smoke" />
                            </pattern>
                            <rect width="100" height="100" fill="url(#moroccan-pattern-right)" />
                        </svg>
                    </div>

                    {/* Door Handle */}
                    <div className="absolute left-8 top-1/2 -translate-y-1/2 w-4 h-16 bg-gold rounded-full shadow-lg" />
                </div>
            </div>

            {/* Ambient Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gold/10 rounded-full blur-3xl" />
        </div>
    );
}
