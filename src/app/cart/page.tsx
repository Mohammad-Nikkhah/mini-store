"use client";
import { useCart } from "@/src/context/CartContext";
import { Button } from "@/src/components/ui/button";
import { BsFillBasketFill } from "react-icons/bs";
import { Alert, AlertDescription } from "@/src/components/ui/alert";

export default function CartPage() {
  const { cart, removeFromCart } = useCart();
  console.log(cart);

  return (
    <div className="container mx-auto p-8 rounded-lg border-2 border-gray-200 my-20">
      <h1 className="text-3xl font-bold flex justify-center gap-2 text-blue-900 items-center mb-4">
        <BsFillBasketFill /> سبدهای خرید شما
      </h1>
      {cart.length === 0 ? (
        <Alert>
          <AlertDescription>شما هنوز هیچ سبد خریدی ندارید.</AlertDescription>
        </Alert>
      ) : (
        <div>
          {cart.map((cartItem) => (
            <div key={cartItem.id} className="mb-8">
              <h2 className="text-xl font-bold">
                سبد خرید شماره {cartItem.id}
              </h2>
              <ul>
                {cartItem.products.map((product) => (
                  <li
                    key={product.id}
                    className="flex justify-between border-b-2 py-2"
                  >
                    <div>
                      <h3 className="text-lg font-bold">
                        {product.title} {product.id}{" "}
                      </h3>
                      <p>قیمت: {product.price} تومان</p>
                    </div>
                    <p>تعداد: {product.quantity}</p>
                    <div>
                      <Button
                        onClick={() => removeFromCart(product.id)}
                        className="bg-red-500 hover:bg-red-400 text-white px-3 py-1 rounded-lg"
                      >
                        حذف
                      </Button>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
