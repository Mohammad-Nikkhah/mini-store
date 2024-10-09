"use client";

import Link from "next/link";
import { useCart } from "../context/CartContext";
import { FaBasketShopping } from "react-icons/fa6";
import MenuItems from "./MenuItems";

export default function Header() {
  const { totalCartItems } = useCart();
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
        <MenuItems />
        <div className="basket-area">
          <Link href="/cart">
            <span className="relative text-black flex place-content-center">
              <span
                className="absolute text-sm left-4 bg-blue-900 text-white p-1 flex justify-center
                ali
               rounded-full h-5 w-5	items-center	"
              >
                <span> {totalCartItems}</span>
              </span>
              <FaBasketShopping className="text-2xl" />
            </span>{" "}
          </Link>
        </div>
      </div>
    </header>
  );
}
