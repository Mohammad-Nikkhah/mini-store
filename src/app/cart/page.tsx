"use client";
import Link from "next/link";
import { useCart } from "@/src/context/CartContext";
import { Button } from "@/src/components/ui/button";
import { BsFillBasketFill } from "react-icons/bs";

export default function CartPage() {
  const { cart, removeFromCart, updateQuantity } = useCart();
  const totalPrice = cart.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );
  return (
    <div className="container mx-auto p-8 rounded-lg  border-2 border-gray-200 my-20">
      <h1 className="text-3xl font-bold flex justify-center gap-2 text-blue-900 items-center mb-4">
        <BsFillBasketFill /> سبد خرید شما
      </h1>
      {cart.length == 0 ? (
        <p className="text-lg text-center text-gray-500">
          سبد خرید شما خالی است
        </p>
      ) : (
        <div>
          <ul>
            {cart.map((item) => (
              <li
                key={item.id}
                className="mb-4 flex justify-between border-b-2"
              >
                <div>
                  <h2 className="text-xl font-bold">{item.title}</h2>
                  <p>${item.price}</p>
                </div>
                <div>
                  <input
                    type="number"
                    value={item.quantity}
                    onChange={(e) =>
                      updateQuantity(item.id, parseInt(e.target.value))
                    }
                    className="border p-1 w-16 text-center"
                  />
                  <Button
                    onClick={() => removeFromCart(item.id)}
                    className="ml-4 bg-red-500 hover:bg-red-400 mx-3 text-white px-4 py-1 rounded-lg"
                  >
                    حذف
                  </Button>
                </div>
              </li>
            ))}
          </ul>
          <div className="mt-6 text-center">
            <h2 className="text-2xl font-bold">${totalPrice}</h2>
            <Link href="/checkout">
              <Button className="mt-4 w-48 text-white px-4 py-2 rounded-lg">
                مرحله بعد
              </Button>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}
