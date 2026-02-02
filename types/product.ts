export enum Category {
    JALABA = 'jalaba',
    KAFTAN = 'kaftan',
    GANDORA = 'gandora',
    BELGHA = 'belgha',
}

export interface Product {
    id: string;
    category: Category;
    name: {
        en: string;
        fr: string;
        ar: string;
    };
    description: {
        en: string;
        fr: string;
        ar: string;
    };
    price: number;
    currency: string;
    images: string[];
    featured: boolean;
    madeToMeasure: boolean;
    materials: string[];
    colors: string[];
    sizes: string[];
}

export interface CartItem {
    product: Product;
    quantity: number;
    selectedSize?: string;
    selectedColor?: string;
    customMeasurements?: {
        chest?: number;
        waist?: number;
        hips?: number;
        length?: number;
        shoulders?: number;
    };
}
