"use client";

import Link from "next/link";
import { Pagination } from "@/src/components/ui/pagination";
import { useSearchParams, useRouter } from "next/navigation";

interface Product {
  id: number;
  title: string;
  price: number;
  image: string;
}

interface CategoryProductsComponentProps {
  products: Product[];
  totalPages: number;
  currentPage: number;
  category: string;
}

export default function CategoryProductsComponent({
  products,
  totalPages,
  currentPage,
  category,
}: CategoryProductsComponentProps) {
  const searchParams = useSearchParams();
  const router = useRouter();

  const handlePageChange = (page: number) => {
    const newSearchParams = new URLSearchParams(searchParams.toString());
    newSearchParams.set("page", String(page));
    router.push(`/categories/${category}?${newSearchParams.toString()}`);
  };

  return (
    <div className="container mx-auto text-center p-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
        {products.map((product) => (
          <Link href={`/product/${product.id}`} key={product.id}>
            <div className="cursor-pointer w-58 h-48 grid gap-2 grid-cols-2 border p-4 rounded-lg shadow hover:shadow-lg transition duration-300">
              <img
                src={product.image}
                alt={product.title}
                className="w-20 h-20 mb-4"
              />
              <h2 className="font-light text-sm">{product.title}</h2>
              <p className="text-blue-900">${product.price}</p>
            </div>
          </Link>
        ))}
      </div>

      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
        className="mt-6"
      />
    </div>
  );
}
