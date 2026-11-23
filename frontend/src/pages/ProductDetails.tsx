import { useGetProductsByIdQuery } from "@/services/productsApi";
import { useParams } from "react-router-dom";

const ProductDetails = () => {
  const { id } = useParams();

  const { data: product, isLoading, isError } = useGetProductsByIdQuery(id!);

  if (isLoading) return <p>Loading...</p>;

  if (isError || !product) return <p>Product not found!</p>;

  return (
    <div className="mt-30">
      <h3 className="text-center">Collection</h3>
      <img
        className="w-75 h-75 object-cover transition-transform duration-500 group-hover:scale-105"
        src={product.image}
        alt={product.name}
      />

      <h2>{product.name}</h2>
      <p>{product.category}</p>
      <p>${product.price}.00</p>
    </div>
  );
};

export default ProductDetails;
