'use client';

import { ReactNode } from 'react';
import { LanguageProvider } from '@/contexts/LanguageContext';
import { CartProvider } from '@/contexts/CartContext';

export default function Providers({ children }: { children: ReactNode }) {
    return (
        <LanguageProvider>
            <CartProvider>
                {children}
            </CartProvider>
        </LanguageProvider>
    );
}
