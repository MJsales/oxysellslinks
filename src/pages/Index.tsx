import { useState } from "react";
import { motion } from "framer-motion";
import { products, type Category } from "@/data/products";
import ProductCard from "@/components/ProductCard";
import CategoryFilter from "@/components/CategoryFilter";

const Index = () => {
  const [category, setCategory] = useState<Category>("all");

  const filtered =
    category === "all"
      ? products
      : products.filter((p) => p.category === category);

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border">
        <div className="container mx-auto flex items-center justify-between px-4 py-6">
          <h1 className="font-heading text-3xl font-bold text-foreground">
            RESELL<span className="text-primary">HUB</span>
          </h1>
          <p className="text-sm text-muted-foreground hidden sm:block">
            All links — <span className="text-primary font-semibold">$10</span>
          </p>
        </div>
      </header>

      {/* Hero */}
      <section className="container mx-auto px-4 py-12 text-center">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="font-heading text-5xl md:text-7xl font-bold text-foreground"
        >
          COP THE <span className="text-primary">LINKS</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="mt-4 text-muted-foreground max-w-md mx-auto"
        >
          Premium links to the hottest drops. Jordans, designer jeans, AirPods — all for $10.
        </motion.p>
      </section>

      {/* Filters + Grid */}
      <section className="container mx-auto px-4 pb-20">
        <div className="mb-8">
          <CategoryFilter active={category} onChange={setCategory} />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filtered.map((product, i) => (
            <ProductCard key={product.id} product={product} index={i} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Index;
