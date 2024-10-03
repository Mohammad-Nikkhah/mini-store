"use client";

import { useCart } from "@/src/context/CartContext";

export default function ProductDetails({ product }: { product: any }) {
  const { addToCart } = useCart();

  return (
    <div className="container mx-auto p-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <img
          src={product.image}
          alt={product.title}
          className="w-full h-96 object-cover"
        />
        <div>
          <h1 className="text-3xl font-bold mb-2">{product.title}</h1>
          <p className="text-lg text-green-600 mb-4">${product.price}</p>
          <p className="mb-4">{product.description}</p>
          <button
            className="bg-blue-500 text-white px-4 py-2 rounded-lg"
            onClick={() =>
              addToCart({
                id: product.id,
                title: product.title,
                price: product.price,
                quantity: 1,
              })
            }
          >
            اضافه کردن به سبد
          </button>
        </div>
      </div>
    </div>
  );
}
