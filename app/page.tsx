import Link from "next/link";

async function getProducts() {
  const response = await fetch("https://fakestoreapi.com/products");
  return response.json();
}
export default async function Home() {
  const products = await getProducts();
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4 text-center"> لیست محصولات </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5">
        {products.map((product: any) => (
          <Link href={`/product/${product.id}`} key={product.id}>
            <div className="cursor-pointer border p-4 rounded-lg shadow hover:shadow-lg transition duration-300">
              <img src={product.image} className="w-full w-50 h-50 mb-4" />
              <h2 className="text-lg font-light">{product.title}</h2>
              <p className="text-green-600">${product.price}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
