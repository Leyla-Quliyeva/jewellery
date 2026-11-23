import { PRICE_RANGES } from "@/constants/priceRanges";

type CollectionFiltersProps = {
  selectedCategories: string[];
  onCategoryChange: (category: string) => void;
  selectedPrices: string[];
  onPriceChange: (price: string) => void;
};

const CollectionFilters = ({
  selectedCategories,
  onCategoryChange,
  selectedPrices,
  onPriceChange,
}: CollectionFiltersProps) => {
  const categories = ["Necklaces", "Bracelets", "Earrings", "Rings"];

  const prices = PRICE_RANGES.map((r) => r.label);

  return (
    <div className="w-60 shrink-0 space-y-4">
      <div className="mt-25 urbanist">
        <h3 className="text-xl font-semibold mb-4 ">CATEGORIES</h3>

        <div className="space-y-4 text-lg font-medium">
          {categories.map((category) => (
            <label
              className="flex items-center gap-3 text-gray-600 cursor-pointer hover:text-orange-500"
              key={category}
            >
              <input
                type="checkbox"
                className="appearance-none size-4  border border-gray-400 cursor-pointer
         grid place-content-center
         checked:bg-orange-600 checked:border-orange-600
         before:content-[''] before:size-2.5 before:scale-0 before:bg-white
         before:[clip-path:polygon(14%_44%,0_65%,50%_100%,100%_16%,80%_0%,43%_62%)]
         checked:before:scale-100"
                checked={selectedCategories.includes(category)}
                onChange={() => onCategoryChange(category)}
              />

              {category}
            </label>
          ))}
        </div>
      </div>

      <hr className="w-full mx-auto border-gray-300 mt-10 " />

      <div className="mt-15 urbanist">
        <h3 className="text-xl font-semibold mb-4 ">PRICE</h3>

        <div className="space-y-4 text-md font-semibold">
          {prices.map((price) => (
            <label
              className="flex items-center gap-3 text-gray-600 cursor-pointer hover:text-orange-500"
              key={price}
            >
              <input
                type="checkbox"
                className="appearance-none size-4  border border-gray-400 cursor-pointer
         grid place-content-center
         checked:bg-orange-600 checked:border-orange-600
         before:content-[''] before:size-2.5 before:scale-0 before:bg-white
         before:[clip-path:polygon(14%_44%,0_65%,50%_100%,100%_16%,80%_0%,43%_62%)]
         checked:before:scale-100"
                checked={selectedPrices.includes(price)}
                onChange={() => onPriceChange(price)}
              />

              {price}
            </label>
          ))}
        </div>
      </div>

      <hr className="w-full mx-auto border-gray-300 mt-10 " />
    </div>
  );
};

export default CollectionFilters;
