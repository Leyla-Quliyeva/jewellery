import { useGetProductsQuery } from "@/services/productsApi";
import ProductCard from "./ProductCard";
import { useMemo, useState } from "react";
import { SlidersHorizontal } from "lucide-react";
import { QuarterRing } from "@/components/quarter-ring";
import { PRICE_RANGES } from "@/constants/priceRanges";

type Props = {
  selectedCategories: string[];
  selectedPrices: string[];
  showFilters: boolean;
  onToggleFilters: () => void;
};

const ProductGrid = ({
  selectedCategories,
  selectedPrices,
  showFilters,
  onToggleFilters,
}: Props) => {
  const { data: products = [], isLoading, isError } = useGetProductsQuery();

  const [sortBy, setSortBy] = useState("default");

  const sortedProducts = useMemo(() => {
    const activeRanges = PRICE_RANGES.filter((r) =>
      selectedPrices.includes(r.label),
    );

    const filtered = products.filter((product) => {
      const price = Number(product.price);

      const categoryMatch =
        selectedCategories.length === 0 ||
        selectedCategories.includes(product.category);

      const priceMatch =
        activeRanges.length === 0 ||
        activeRanges.some((r) => price >= r.min && price <= r.max);

      return categoryMatch && priceMatch;
    });

    return [...filtered].sort((a, b) => {
      if (sortBy === "low-high") return Number(a.price) - Number(b.price);
      if (sortBy === "high-low") return Number(b.price) - Number(a.price);
      return 0;
    });
  }, [products, selectedCategories, selectedPrices, sortBy]);

  if (isLoading)
    return (
      <div className="flex flex-col items-center justify-center mt-10 gap-3">
        <QuarterRing className="size-13" /> <p>Loading...</p>
      </div>
    );

  if (isError) return <p>Failed to load products.</p>;

  return (
    <div className="mt-20">
      <div className="flex justify-between items-center mb-6">
        <div className="flex items-center gap-6">
          <button
            onClick={onToggleFilters}
            className="flex gap-3 items-center border-2 border-black urbanist font-semibold tracking-[0.9px] px-8 py-2 text-lg cursor-pointer hover:bg-orange-500 hover:border-orange-500 hover:text-white transition-colors"
          >
            <SlidersHorizontal size={19} />
            {showFilters ? "Hide Filter" : "Filter"}
          </button>

          <p className="hidden sm:block text-gray-500">
            Showing {sortedProducts.length}{" "}
            {sortedProducts.length === 1 ? "product" : "products"}
          </p>
        </div>

        <select
          onChange={(e) => setSortBy(e.target.value)}
          value={sortBy}
          className="border border-gray-300 px-4 py-2 outline-none"
        >
          <option value="default">Sort By</option>
          <option value="low-high">Price: Low-High</option>
          <option value="high-low">Price: High-Low</option>
        </select>
      </div>

      {sortedProducts.length === 0 ? (
        <p className="text-gray-500">No products match your filters.</p>
      ) : (
        <div
          className={`grid gap-6 text-center grid-cols-1 sm:grid-cols-2 ${
            showFilters ? "lg:grid-cols-3" : "lg:grid-cols-4"
          }`}
        >
          {sortedProducts.map((product) => (
            <ProductCard
              key={product.id}
              id={product.id}
              image={product.image}
              name={product.name}
              price={product.price}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default ProductGrid;
