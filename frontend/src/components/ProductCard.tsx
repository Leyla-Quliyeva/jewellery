import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "@/features/Cart/cartSlice";
import { ShoppingBag, Search } from "lucide-react";
import { memo, useState } from "react";
import QuickViewModal from "./QuickViewModal";
import { toast } from "sonner";

type ProductCardProps = {
  id: string;
  image: string;
  name: string;
  price: number;
};

const ProductCard = ({ id, image, name, price }: ProductCardProps) => {
  const [quickView, setQuickView] = useState(false);

  const dispatch = useDispatch();

  const handleAddToCart = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    e.stopPropagation();
    dispatch(addToCart({ id, name, price, image }));
    toast.success(`${name} added to cart`);
  };

  const handleQuickView = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setQuickView(true);
  };

  const actionBtn =
    "flex h-11 w-11 cursor-pointer items-center justify-center rounded-full bg-white  text-black shadow-sm backdrop-blur-sm transition hover:bg-orange-500 hover:text-white";

  return (
    <>
      <Link to={`/product/${id}`} className="group block">
        <div className="relative overflow-hidden">
          <img
            src={image}
            alt={name}
            loading="lazy"
            className="h-75 w-full object-cover transition-transform duration-500 group-hover:scale-105"
          />

          {/* Düymələr */}
          <div className=" absolute bottom-4 left-1/2 flex -translate-x-1/2 gap-3 transition-all duration-300 md:translate-y-3 md:opacity-0 md:group-hover:translate-y-0 md:group-hover:opacity-100">
            <button
              onClick={handleAddToCart}
              aria-label="Səbətə at"
              className={actionBtn}
            >
              <ShoppingBag size={18} />
            </button>

            <button
              onClick={handleQuickView}
              aria-label="Sürətli bax"
              className={actionBtn}
            >
              <Search size={18} />
            </button>
          </div>
        </div>

        <div className="mt-4 text-center">
          <h3 className="text-md font-medium">{name}</h3>
          <p className="text-md mt-2 font-semibold text-orange-600">
            ${price}.00
          </p>
        </div>
      </Link>

      {quickView && (
        <QuickViewModal
          product={{ id, image, name, price }}
          onClose={() => setQuickView(false)}
        />
      )}
    </>
  );
};

export default memo(ProductCard);
