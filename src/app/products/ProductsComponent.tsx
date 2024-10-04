"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { MdOutlineFiberNew } from "react-icons/md";
import { Pagination } from "@/src/components/ui/pagination";

interface Product {
  id: number;
  title: string;
  price: number;
  image: string;
}

interface ProductsComponentProps {
  products: Product[];
}

export default function ProductsComponent({
  products,
}: ProductsComponentProps) {
  const [currentPage, setCurrentPage] = useState(1);
  const [isLoading, setIsLoading] = useState(true);

  const productsPerPage = 8;

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = products.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

  useEffect(() => {
    if (products.length > 0) {
      setIsLoading(false);
    }
  }, [products]);

  return (
    <div className="container mx-auto text-center p-4">
      <h1 className="text-2xl font-bold mb-4 flex justify-center mt-8 items-center text-center">
        <MdOutlineFiberNew className="text-5xl text-yellow-400" /> جدیدترین
        محصولات
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
        {isLoading
          ? Array.from({ length: productsPerPage }).map((_, index) => (
              <div
                key={index}
                className="border border-blue-300 shadow rounded-md p-4 max-w-sm w-full mx-auto"
              >
                <div className="animate-pulse flex space-x-4">
                  <div className="rounded-full bg-slate-400 h-10 w-10"></div>
                  <div className="flex-1 space-y-6 py-1">
                    <div className="h-2 bg-slate-400 rounded"></div>
                    <div className="space-y-3">
                      <div className="grid grid-cols-3 gap-4">
                        <div className="h-2 bg-slate-400 rounded col-span-2"></div>
                        <div className="h-2 bg-slate-400 rounded col-span-1"></div>
                      </div>
                      <div className="h-2 bg-slate-400 rounded"></div>
                    </div>
                  </div>
                </div>
              </div>
            ))
          : currentProducts.map((product: Product) => (
              <Link href={`/product/${product.id}`} key={product.id}>
                <div className="cursor-pointer w-58 h-48 grid gap-2 grid-cols-2 border p-4 rounded-lg shadow hover:shadow-lg transition duration-300">
                  <img src={product.image} className="w-20 h-20 mb-4" />
                  <h2 className="font-light text-sm">{product.title}</h2>
                  <p className="text-blue-900">${product.price}</p>
                </div>
              </Link>
            ))}
      </div>

      <Pagination
        currentPage={currentPage}
        totalPages={Math.ceil(products.length / productsPerPage)}
        onPageChange={setCurrentPage}
        className="mt-6"
      />
    </div>
  );
}
