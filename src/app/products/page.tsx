import Link from "next/link";

async function getProducts() {
  const response = await fetch("https://fakestoreapi.com/products");
  return response.json();
}
export default async function Products() {
  const products = await getProducts();
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4 text-center"> لیست محصولات </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
        {products.map((product: any) => (
          <Link href={`/product/${product.id}`} key={product.id}>
            <div className="cursor-pointer  w-58 h-48 grid gap-2 grid-cols-2  border p-4 rounded-lg shadow hover:shadow-lg transition duration-300">
              <img src={product.image} className=" w-20 h-20 mb-4" />
              <h2 className="font-light text-sm">{product.title}</h2>
              <p className="text-green-600">${product.price}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
