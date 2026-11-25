import CollectionFilters from "@/components/CollectionFilters";
import Footer from "@/components/Footer";
import Newsletter from "@/components/Newsletter";
import ProductGrid from "@/components/ProductGrid";
import { useState } from "react";

const Collection = () => {
  const [showFilters, setShowFilters] = useState(false);

  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [selectedPrices, setSelectedPrices] = useState<string[]>([]);

  const handleCategoryChange = (category: string) => {
    setSelectedCategories((prev) =>
      prev.includes(category)
        ? prev.filter((item) => item != category)
        : [...prev, category],
    );
  };

  const handlePriceChange = (price: string) => {
    setSelectedPrices((prev) =>
      prev.includes(price)
        ? prev.filter((item) => item != price)
        : [...prev, price],
    );
  };

  return (
    <>
      <div className="max-w-7xl mx-auto px-4  sm:px-6 lg:px-8 mt-13 md:mt-15">
        <div className="text-center mb-8 md:mb-12 bg-[#bcb6bb] min-h-32 px-4 py-6 md:p-5 tracking-wide font-semibold urbanist text-white">
          <h1 className="text-2xl sm:text-3xl md:text-4xl">Our Collection</h1>

          <p className="mt-3 text-base md:text-[18px]">
            Discover our elegant collection of timeless jewelry.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-6 lg:gap-10">
          {showFilters && (
            <div className="w-full lg:w-auto lg:shrink-0">
              <CollectionFilters
                selectedCategories={selectedCategories}
                onCategoryChange={handleCategoryChange}
                selectedPrices={selectedPrices}
                onPriceChange={handlePriceChange}
              />
            </div>
          )}

          <div className="flex-1 min-w-0">
            <ProductGrid
              selectedCategories={selectedCategories}
              selectedPrices={selectedPrices}
              showFilters={showFilters}
              onToggleFilters={() => setShowFilters(!showFilters)}
            />
          </div>
        </div>
      </div>

      <Newsletter />
      <Footer />
    </>
  );
};

export default Collection;
