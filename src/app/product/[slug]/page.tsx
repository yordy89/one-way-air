import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getProduct, products } from "@/lib/products";
import { ProductDetail } from "@/components/ProductDetail";
import { ProductCard } from "@/components/ProductCard";

export function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) return { title: "Not found — OneWayAir" };
  return {
    title: `${product.name} — OneWayAir`,
    description: product.description,
  };
}

export default async function ProductPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) notFound();

  const related = products.filter((p) => p.slug !== slug).slice(0, 4);

  return (
    <div className="pt-6">
      <ProductDetail product={product} />

      <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8">
        <h2 className="mb-10 font-display text-4xl font-black uppercase tracking-tight">
          Complete the <span className="text-gradient">Fit</span>
        </h2>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {related.map((p, i) => (
            <ProductCard key={p.slug} product={p} index={i} />
          ))}
        </div>
      </section>
    </div>
  );
}
