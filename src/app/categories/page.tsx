"use client";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function CategoriesPage() {
  const [categories, setCategories] = useState<string[]>([]);

  const fetchCategories = async () => {
    try {
      const res = await fetch("https://fakestoreapi.com/products/categories");
      const data = await res.json();
      setCategories(data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  return (
    <div className="container mx-auto p-4 my-10">
      <h1 className="text-2xl font-bold mb-4 text-center my-7">دسته‌بندی‌ها</h1>
      <ul className="list-inside mt-10 flex list-none justify-center gap-28 ">
        {categories.map((category) => (
          <li
            key={category}
            className="mb-2 p-5 rounded-md border-2 border-blue-900"
          >
            <Link href={`/categories/${category}`}>{category}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
