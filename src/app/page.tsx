import Link from "next/link";

export default async function Home() {
  return (
    <div className="container mx-auto justify-center flex p-4">
      <Link
        className="bg-blue-600 p-4 cursor-pointer mt-10 rounded-md font-bold"
        href="/products"
      >
        مشاهده لیست محصولات
      </Link>
    </div>
  );
}
