import { useEffect, useState } from "react";
import { ShoppingBag, ChevronDown, ChevronUp, X } from "lucide-react";
import { toast } from "sonner";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { useDispatch } from "react-redux";
import { addToCart } from "@/features/Cart/cartSlice";

interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
  description?: string;
}

interface Props {
  product: Product | null;
  onClose: () => void;
}

export default function QuickViewModal({ product, onClose }: Props) {
  const dispatch = useDispatch();
  const [quantity, setQuantity] = useState(1);

  // Başqa məhsul açılanda sayı 1-ə qaytar
  useEffect(() => {
    setQuantity(1);
  }, [product?.id]);

  if (!product) return null;

  const handleAdd = () => {
    for (let i = 0; i < quantity; i++) {
      dispatch(
        addToCart({
          id: product.id,
          name: product.name,
          price: product.price,
          image: product.image,
        }),
      );
    }
    toast.success(`${product.name} (${quantity} items) added to cart`);
    onClose();
  };

  return (
    <Dialog open={!!product} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="sm:max-w-3xl md:min-h-0 p-5">
        {" "}
        <div className="grid gap-6 md:grid-cols-2 md:items-center">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-80  object-cover md:aspect-auto"
          />
          <div className="flex flex-col justify-center gap-5 urbanist">
            <DialogHeader>
              <DialogTitle className="text-2xl font-semibold">
                {product.name}
              </DialogTitle>
              <p className="text-lg urbanist font-medium">
                ${product.price}.00 USD
              </p>
              <hr className="w-80 border-gray-300 mt-3 max-sm:mx-auto" />

              <DialogDescription className="text-black mt-3 text-[16px]">
                {product.description ??
                  "For thousands of years, jewelry has been more than a way to accessorize. It is a reflection of personal style, a symbol of beauty, and a timeless form of self-expression."}
              </DialogDescription>
            </DialogHeader>

            {/* Quantity */}
            <div className="flex  gap-4 mt-3">
              <div className="flex w-28 items-center justify-between border border-gray-200 bg-white/40 px-4">
                <span className="text-lg">{quantity}</span>
                <div className="flex flex-col">
                  <button
                    type="button"
                    onClick={() => setQuantity((q) => q + 1)}
                    className="cursor-pointer p-0.5 hover:text-orange-500"
                    aria-label="Artır"
                  >
                    <ChevronUp size={16} />
                  </button>
                  <button
                    type="button"
                    onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                    className="cursor-pointer p-0.5 hover:text-orange-500"
                    aria-label="Azalt"
                  >
                    <ChevronDown size={16} />
                  </button>
                </div>
              </div>

              <button
                onClick={handleAdd}
                className=" w-[60%] flex flex-col-2  justify-center items-center gap-3 cursor-pointer bg-orange-500 px-4 py-5 text-lg font-semibold urbanist tracking-widest text-white transition "
              >
                <ShoppingBag size={19} />
                Add to cart
              </button>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
