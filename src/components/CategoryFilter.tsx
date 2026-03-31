import type { Category } from "@/data/products";

const categories: { value: Category; label: string }[] = [
  { value: "all", label: "All" },
  { value: "shoes", label: "Shoes" },
  { value: "jeans", label: "Jeans" },
  { value: "tech", label: "Tech" },
];

interface CategoryFilterProps {
  active: Category;
  onChange: (cat: Category) => void;
}

const CategoryFilter = ({ active, onChange }: CategoryFilterProps) => {
  return (
    <div className="flex gap-2 flex-wrap">
      {categories.map((cat) => (
        <button
          key={cat.value}
          onClick={() => onChange(cat.value)}
          className={`px-5 py-2 rounded-md font-heading text-sm uppercase tracking-wider transition-colors ${
            active === cat.value
              ? "bg-primary text-primary-foreground"
              : "bg-secondary text-secondary-foreground hover:bg-primary/20"
          }`}
        >
          {cat.label}
        </button>
      ))}
    </div>
  );
};

export default CategoryFilter;
