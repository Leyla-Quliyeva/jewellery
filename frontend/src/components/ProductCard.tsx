import { Link } from "react-router-dom";

type ProductCardProps = {
  id: string;
  image: string;
  name: string;
  price: number;
};

const ProductCard = ({ id, image, name, price }: ProductCardProps) => {
  return (
    <Link to={`/product/${id}`} className="group block ">
      <div className="overflow-hidden ">
        <img
          src={image}
          alt={name}
          loading="lazy"
          className="w-full h-75 object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>

      <div className="mt-4">
        <h3 className="text-md font-medium">{name}</h3>
        <p className="text-md font-semibold mt-2 text-orange-600">
          ${price}.00
        </p>
      </div>
    </Link>
  );
};

export default ProductCard;
