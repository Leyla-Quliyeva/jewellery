import ProductCard from "./ProductCard";
import { useGetProductsQuery } from "../services/productsApi";
import { QuarterRing } from "@/components/quarter-ring";

const NewArrivals = () => {
  const { data: products, isLoading, isError } = useGetProductsQuery();

  if (isLoading) {
    return (
      <div className="flex flex-col items-center justify-center mt-10 gap-3">
        <QuarterRing className="size-13"/>
        <p>Loading...</p>
      </div>
    );
  }

  if (isError) {
    return <p className="text-center mt-10">Failed to load products.</p>;
  }

  return (
    <section>
      <div className="urbanist font-semibold mt-35 ">
        <h2 className="text-center text-[25px] tracking-wide">NEW ARRIVALS</h2>
        <hr className="m-1 mx-auto w-25 border-none h-[1.5px] bg-orange-500 " />
      </div>

      <div className="grid grid-cols-2  text-center md:grid-cols-3 lg:grid-cols-4  gap-5 mt-15 px-5 md:px-10">
        {products
          ?.slice(-4)
          .reverse()
          .map((product) => (
            <ProductCard
              key={product.id}
              id={product.id}
              image={product.image}
              name={product.name}
              price={product.price}
            />
          ))}
      </div>
    </section>
  );
};

export default NewArrivals;
