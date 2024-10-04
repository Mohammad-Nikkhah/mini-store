"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import { MdOutlineFiberNew } from "react-icons/md";

import { Pagination } from "@/src/components/ui/pagination";

async function getProducts() {
  const response = await fetch("https://fakestoreapi.com/products");
  return response.json();
}

export default function Products() {
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 8;

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = products.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

  useEffect(() => {
    getProducts().then((data) => setProducts(data));
  }, []);

  return (
    <div className="container mx-auto text-center  p-4">
      <h1 className="text-2xl font-bold mb-4 flex justify-center mt-8 items-center text-center">
        <MdOutlineFiberNew className="text-5xl text-yellow-400" /> جدیدترین
        محصولات
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
        {currentProducts.map((product: any) => (
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
