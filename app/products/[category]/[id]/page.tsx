import { products, getProductById } from '@/lib/products';
import ProductDetail from '@/components/ProductDetail';
import { notFound } from 'next/navigation';

export function generateStaticParams() {
    return products.map((product) => ({
        category: product.category.toLowerCase(),
        id: product.id,
    }));
}

export default async function Page({ params }: { params: Promise<{ category: string; id: string }> }) {
    const { id } = await params;
    const product = getProductById(id);

    if (!product) {
        notFound();
    }

    return <ProductDetail product={product} />;
}
