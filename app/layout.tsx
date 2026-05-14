import type { Metadata } from 'next';
import { Inter, Playfair_Display, Cormorant_Garamond } from 'next/font/google';
import './globals.css';
import Providers from '@/components/Providers';
import SmoothScroll from '@/components/SmoothScroll';
import FloatingContact from '@/components/FloatingContact';

const inter = Inter({
    subsets: ['latin'],
    variable: '--font-inter',
    display: 'swap',
});

const playfair = Playfair_Display({
    subsets: ['latin'],
    variable: '--font-playfair',
    display: 'swap',
});

const cormorant = Cormorant_Garamond({
    subsets: ['latin'],
    weight: ['400', '500', '600', '700'],
    style: ['normal', 'italic'],
    variable: '--font-cormorant',
    display: 'swap',
});

import ScrollBackground from '@/components/ScrollBackground';

export const metadata: Metadata = {
    title: 'JaLaba | Luxury Moroccan Menswear',
    description: 'Timeless Moroccan craftsmanship reimagined for the modern gentleman. 42 years of expertise in creating handmade traditional menswear.',
    keywords: 'Moroccan clothes, Jalaba, Kaftan, Gandora, Moroccan fashion, luxury menswear, traditional moroccan clothes',
    openGraph: {
        title: 'JaLaba | Luxury Moroccan Menswear',
        description: 'Timeless Moroccan craftsmanship reimagined for the modern gentleman. 42 years of expertise in creating handmade traditional menswear.',
        url: 'https://jalaba.com',
        siteName: 'JaLaba',
        images: [
            {
                url: '/og-image.jpg',
                width: 1200,
                height: 630,
            },
        ],
        locale: 'en_US',
        type: 'website',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'JaLaba | Luxury Moroccan Menswear',
        description: 'Timeless Moroccan craftsmanship reimagined for the modern gentleman.',
        images: ['/og-image.jpg'],
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html
            lang="en"
            dir="ltr"
            className={`${inter.variable} ${playfair.variable} ${cormorant.variable}`}
            suppressHydrationWarning
        >
            <head>
                <link rel="icon" href="/logo.png" />
                <meta name="theme-color" content="#674C31" />
            </head>
            <body className="antialiased" suppressHydrationWarning>
                <Providers>
                    <ScrollBackground />
                    <SmoothScroll>
                        {children}
                    </SmoothScroll>
                    <FloatingContact />
                </Providers>
            </body>
        </html>
    );
}
