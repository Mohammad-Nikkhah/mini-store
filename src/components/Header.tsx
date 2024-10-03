"use client";

import Link from "next/link";
import { useCart } from "../context/CartContext";
import { FaBasketShopping } from "react-icons/fa6";

export default function Header() {
  const { cart } = useCart();
  const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0);
  return (
    <header className="bg-white border-b-2  text-white p-4">
      <div className="container mx-auto flex justify-between gap-20 items-center">
        <div className="flex">
          <Link href="/" className="cursor-pointer">
            <img
              className="w-32"
              src="https://cdnfa.com/s/uploads/shopfa/logo-v6.svg"
              alt=""
            />
          </Link>
        </div>
        <div className="menu-box">
          <ul className="flex gap-5">
            <li className="text-black hover:text-blue-800 cursor-pointer">
              لوازم جانبی
            </li>
            <li className="text-black hover:text-blue-800 cursor-pointer">
              لپ تاپ
            </li>
            <li className="text-black hover:text-blue-800 cursor-pointer">
              تلفن همراه
            </li>
            <li className="text-black hover:text-blue-800 cursor-pointer">
              درباره ما
            </li>
          </ul>
        </div>

        <div className="basket-area">
          <Link href="/cart">
            <span className="text-black flex place-content-center">
              سبد خرید ({totalItems})
              <FaBasketShopping />
            </span>{" "}
          </Link>
        </div>
      </div>
    </header>
  );
}
