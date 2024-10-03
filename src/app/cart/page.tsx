"use client";
import Link from "next/link";
import { useCart } from "@/src/context/CartContext";

export default function CartPage() {
  const { cart, removeFromCart, updateQuantity } = useCart();
  const totalPrice = cart.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">سبد خرید شما</h1>
      {cart.length == 0 ? (
        <p>سبد خرید شما خالی است</p>
      ) : (
        <div>
          <ul>
            {cart.map((item) => (
              <li key={item.id} className="mb-4 flex justify-between">
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
                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="ml-4 bg-red-500 text-white px-4 py-1 rounded-lg"
                  >
                    حذف
                  </button>
                </div>
              </li>
            ))}
          </ul>
          <div className="mt-6 text-center">
            <h2 className="text-2xl font-bold">${totalPrice.toFixed(2)}</h2>

            <Link href="/checkout">
              <button className="mt-4 bg-green-500 text-white px-4 py-2 rounded-lg">
                ادامه
              </button>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}
