import { Product, Category } from '@/types/product';

// Common Size Lists
const KIDS_SIZES = ['2y', '4y', '6y', '8y', '10y', '12y', '14y', '16y', '18y'];
const MEN_SIZES = ['S', 'M', 'L', 'XL', 'XXL', 'XXXL'];
const BELGHA_SIZES = Array.from({ length: 46 - 28 + 1 }, (_, i) => (28 + i).toString());

// Sample products - images will be sourced from jabador.com
export const products: Product[] = [
    // JALABA Products
    {
        id: 'jalaba-001',
        category: Category.JALABA,
        name: {
            en: 'Classic Moroccan Jalaba',
            fr: 'Jalaba Marocaine Classique',
            ar: 'جلابة مغربية كلاسيكية',
        },
        description: {
            en: 'Traditional hooded robe crafted from premium wool. Perfect for special occasions and daily elegance.',
            fr: 'Robe à capuche traditionnelle confectionnée en laine premium. Parfaite pour les occasions spéciales et l\'élégance quotidienne.',
            ar: 'رداء تقليدي بقلنسوة مصنوع من الصوف الفاخر. مثالي للمناسبات الخاصة والأناقة اليومية.',
        },
        price: 299,
        currency: 'EUR',
        images: ['https://www.jabador.com/wp-content/uploads/2020/03/djellaba-marocaine-homme.jpg'],
        featured: true,
        madeToMeasure: true,
        materials: ['Premium Wool', 'Cotton Lining'],
        colors: ['Beige', 'Brown', 'Navy', 'Black'],
        sizes: [...KIDS_SIZES, ...MEN_SIZES],
    },
    {
        id: 'jalaba-002',
        category: Category.JALABA,
        name: {
            en: 'Luxury White Jalaba',
            fr: 'Jalaba Blanche de Luxe',
            ar: 'جلابة بيضاء فاخرة',
        },
        description: {
            en: 'Elegant white jalaba with gold embroidery. Handcrafted for weddings and ceremonial events.',
            fr: 'Jalaba blanche élégante avec broderie dorée. Fabriquée à la main pour les mariages et événements cérémoniels.',
            ar: 'جلابة بيضاء أنيقة مع تطrieز ذهبي. مصنوعة يدوياً للأعراس والمناسبات الاحتفالية.',
        },
        price: 449,
        currency: 'EUR',
        images: ['https://www.jabador.com/wp-content/uploads/2014/01/jabador-homme-blanc-or.jpg'],
        featured: true,
        madeToMeasure: true,
        materials: ['Premium Cotton', 'Gold Thread Embroidery'],
        colors: ['White', 'Cream'],
        sizes: [...KIDS_SIZES, ...MEN_SIZES],
    },

    // KAFTAN Products
    {
        id: 'kaftan-001',
        category: Category.KAFTAN,
        name: {
            en: 'Royal Blue Kaftan',
            fr: 'Caftan Bleu Royal',
            ar: 'قفطان أزرق ملكي',
        },
        description: {
            en: 'Majestic blue kaftan with intricate gold embroidery. A statement piece for grand celebrations.',
            fr: 'Caftan bleu majestueux avec broderie dorée complexe. Une pièce remarquable pour les grandes célébrations.',
            ar: 'قفطان أزرق مهيب مع تطريز ذهبي معقد. قطعة مميزة للاحتفالات الكبرى.',
        },
        price: 599,
        currency: 'EUR',
        images: ['https://www.jabador.com/wp-content/uploads/2020/03/caftan-homme-bleu-or.jpg'],
        featured: true,
        madeToMeasure: true,
        materials: ['Silk Brocade', 'Gold Thread'],
        colors: ['Royal Blue', 'Burgundy', 'Emerald Green'],
        sizes: [...KIDS_SIZES, ...MEN_SIZES],
    },
    {
        id: 'kaftan-002',
        category: Category.KAFTAN,
        name: {
            en: 'Wedding Kaftan - Ivory & Gold',
            fr: 'Caftan de Mariage - Ivoire et Or',
            ar: 'قفطان زفاف - عاجي وذهبي',
        },
        description: {
            en: 'Exquisite wedding kaftan featuring hand-embroidered patterns. The epitome of Moroccan luxury.',
            fr: 'Caftan de mariage exquis avec motifs brodés à la main. Le summum du luxe marocain.',
            ar: 'قفطان زفاف رائع يتميز بأنماط مطرزة يدوياً. قمة الفخامة المغربية.',
        },
        price: 799,
        currency: 'EUR',
        images: ['https://www.jabador.com/wp-content/uploads/2014/01/jabador-homme-blanc-or.jpg'],
        featured: true,
        madeToMeasure: true,
        materials: ['Premium Silk', 'Gold & Silver Thread'],
        colors: ['Ivory', 'Champagne'],
        sizes: [...KIDS_SIZES, ...MEN_SIZES],
    },

    // GANDORA Products
    {
        id: 'gandora-001',
        category: Category.GANDORA,
        name: {
            en: 'Modern Black Gandora',
            fr: 'Gandora Noire Moderne',
            ar: 'قندورة سوداء عصرية',
        },
        description: {
            en: 'Contemporary black gandora with minimalist design. Versatile for both casual and formal settings.',
            fr: 'Gandora noire contemporaine au design minimaliste. Polyvalente pour les occasions décontractées et formelles.',
            ar: 'قندورة سوداء معاصرة بتصميم بسيط. متعددة الاستخدامات للمناسبات غير الرسمية والرسمية.',
        },
        price: 199,
        currency: 'EUR',
        images: ['https://www.jabador.com/wp-content/uploads/2020/03/gandoura-noire-maroc.jpg'],
        featured: false,
        madeToMeasure: true,
        materials: ['Premium Cotton'],
        colors: ['Black', 'Navy', 'Charcoal'],
        sizes: [...KIDS_SIZES, ...MEN_SIZES],
    },
    {
        id: 'gandora-002',
        category: Category.GANDORA,
        name: {
            en: 'Traditional Brown Gandora',
            fr: 'Gandora Marron Traditionnelle',
            ar: 'قندورة بنية تقليدية',
        },
        description: {
            en: 'Classic brown gandora in traditional Moroccan style. Comfortable for everyday wear.',
            fr: 'Gandora marron classique de style marocain traditionnel. Confortable pour un port quotidien.',
            ar: 'قندورة بنية كلاسيكية بأسلوب مغربي تقليدي. مريحة للارتداء اليومي.',
        },
        price: 179,
        currency: 'EUR',
        images: ['https://www.jabador.com/wp-content/uploads/2020/03/gandoura-marocaine-marron.jpg'],
        featured: false,
        madeToMeasure: true,
        materials: ['Cotton', 'Linen Blend'],
        colors: ['Brown', 'Tan', 'Olive'],
        sizes: [...KIDS_SIZES, ...MEN_SIZES],
    },

    // BELGHA Products
    {
        id: 'belgha-001',
        category: Category.BELGHA,
        name: {
            en: 'Handcrafted Leather Belgha - Yellow',
            fr: 'Belgha en Cuir Artisanal - Jaune',
            ar: 'بلغة جلدية مصنوعة يدوياً - أصفر',
        },
        description: {
            en: 'Traditional Moroccan slippers handcrafted from premium leather. The perfect complement to any traditional outfit.',
            fr: 'Babouches marocaines traditionnelles fabriquées à la main en cuir premium. Le complément parfait à toute tenue traditionnelle.',
            ar: 'نعال مغربية تقليدية مصنوعة يدوياً من الجلد الفاخر. المكمل المثالي لأي زي تقليدي.',
        },
        price: 79,
        currency: 'EUR',
        images: ['https://www.jabador.com/wp-content/uploads/2018/01/babouches-cuir-jaune.jpg'],
        featured: false,
        madeToMeasure: false,
        materials: ['Premium Leather', 'Hand-stitched'],
        colors: ['Yellow', 'Brown', 'Black', 'Red'],
        sizes: BELGHA_SIZES,
    },
    {
        id: 'belgha-002',
        category: Category.BELGHA,
        name: {
            en: 'Luxury Embroidered Belgha',
            fr: 'Belgha Brodée de Luxe',
            ar: 'بلغة مطرزة فاخرة',
        },
        description: {
            en: 'Elegant belgha with traditional embroidery. Handmade by master artisans.',
            fr: 'Belgha élégante avec broderie traditionnelle. Fabriquée à la main par des artisans maîtres.',
            ar: 'بلغة أنيقة مع تطريز تقليدي. مصنوعة يدوياً من قبل حرفيين ماهرين.',
        },
        price: 129,
        currency: 'EUR',
        images: ['https://www.jabador.com/wp-content/uploads/2014/01/jabador-2-pieces.jpg'],
        featured: true,
        madeToMeasure: false,
        materials: ['Premium Leather', 'Gold Thread Embroidery'],
        colors: ['Gold', 'Silver', 'Bronze'],
        sizes: BELGHA_SIZES,
    },
];

export function getProductsByCategory(category: Category): Product[] {
    return products.filter((product) => product.category === category);
}

export function getFeaturedProducts(): Product[] {
    return products.filter((product) => product.featured);
}

export function getProductById(id: string): Product | undefined {
    return products.find((product) => product.id === id);
}
