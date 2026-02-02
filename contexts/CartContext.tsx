'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';
import { Product } from '@/types/product';

interface CartItem extends Product {
    quantity: number;
    selectedSize?: string;
}

interface CartContextType {
    cartItems: CartItem[];
    addToCart: (product: Product, size?: string) => void;
    removeFromCart: (productId: string, size?: string) => void;
    updateQuantity: (productId: string, quantity: number, size?: string) => void;
    clearCart: () => void;
    cartTotal: number;
    cartCount: number;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: React.ReactNode }) {
    const [cartItems, setCartItems] = useState<CartItem[]>([]);

    // Load cart from localStorage
    useEffect(() => {
        const savedCart = localStorage.getItem('jalaba-cart');
        if (savedCart) {
            try {
                setCartItems(JSON.parse(savedCart));
            } catch (e) {
                console.error('Failed to parse cart', e);
            }
        }
    }, []);

    // Save cart to localStorage
    useEffect(() => {
        localStorage.setItem('jalaba-cart', JSON.stringify(cartItems));
    }, [cartItems]);

    const addToCart = (product: Product, size?: string) => {
        setCartItems((prevItems) => {
            const existingItem = prevItems.find(
                (item) => item.id === product.id && item.selectedSize === size
            );
            if (existingItem) {
                return prevItems.map((item) =>
                    item.id === product.id && item.selectedSize === size
                        ? { ...item, quantity: item.quantity + 1 }
                        : item
                );
            }
            return [...prevItems, { ...product, quantity: 1, selectedSize: size }];
        });
    };

    const removeFromCart = (productId: string, size?: string) => {
        setCartItems((prevItems) =>
            prevItems.filter((item) => !(item.id === productId && item.selectedSize === size))
        );
    };

    const updateQuantity = (productId: string, quantity: number, size?: string) => {
        if (quantity <= 0) {
            removeFromCart(productId, size);
            return;
        }
        setCartItems((prevItems) =>
            prevItems.map((item) =>
                item.id === productId && item.selectedSize === size
                    ? { ...item, quantity }
                    : item
            )
        );
    };

    const clearCart = () => {
        setCartItems([]);
    };

    const cartTotal = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
    const cartCount = cartItems.reduce((count, item) => count + item.quantity, 0);

    return (
        <CartContext.Provider
            value={{
                cartItems,
                addToCart,
                removeFromCart,
                updateQuantity,
                clearCart,
                cartTotal,
                cartCount,
            }}
        >
            {children}
        </CartContext.Provider>
    );
}

export function useCart() {
    const context = useContext(CartContext);
    if (context === undefined) {
        throw new Error('useCart must be used within a CartProvider');
    }
    return context;
}
