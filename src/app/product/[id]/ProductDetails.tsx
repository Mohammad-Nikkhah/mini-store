"use client";

import { useState } from "react";
import {
  Alert,
  AlertTitle,
  AlertDescription,
} from "../../../components/ui/alert";
import { useCart } from "@/src/context/CartContext";

export default function ProductDetails({ product }: { product: any }) {
  const { addToCart } = useCart();
  const [showAlert, setShowAlert] = useState(false);
  const handleAddToCart = () => {
    addToCart({
      id: product.id,
      title: product.title,
      price: product.price,
      quantity: 1,
    });
    setShowAlert(true);
    setTimeout(() => setShowAlert(false), 3000);
  };

  return (
    <div className="container mx-auto p-4">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <img
          src={product.image}
          alt={product.title}
          className="w-full object-cover"
        />
        <div>
          <h1 className="text-3xl font-bold mb-2">{product.title}</h1>
          <p className="text-lg text-blue-900 mb-4">${product.price}</p>
          <p className="mb-4 text-slate-400">{product.description}</p>
          <button
            className="bg-blue-900 text-white px-4 py-2 rounded-lg"
            onClick={handleAddToCart}
          >
            اضافه کردن به سبد
          </button>

          {showAlert && (
            <Alert className="mt-4 bg-white border-blue-900 absolute left-0">
              <AlertTitle>محصول اضافه شد</AlertTitle>
              <AlertDescription>
                {product.title} به سبد خرید شما اضافه شد.
              </AlertDescription>
            </Alert>
          )}
        </div>
      </div>
    </div>
  );
}
