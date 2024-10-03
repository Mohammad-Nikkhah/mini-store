async function getProduct(id: string) {
  const response = await fetch(`https://fakestoreapi.com/products/${id}`);
  return response.json();
}

export default async function ProductPage({
  params,
}: {
  params: { id: string };
}) {
  const product = await getProduct(params.id);
  return (
    <div className="container mx-auto p-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <img
          src={product.image}
          alt={product.title}
          className="w-96 h-96 rounded-md"
        />
        <div>
          <h1 className="text-3xl font-bold mb-2">{product.title}</h1>
          <p className="text-green-500">${product.price}</p>
          <p className="mt-1 text-gray-500 mb-4">{product.description}</p>
          <button className="bg-green-600 p-4 rounded-2xl hover:opacity-9">
            اضافه کردن به سبد
          </button>
        </div>
      </div>
    </div>
  );
}

export async function generateStaticParams() {
  const res = await fetch("https://fakestoreapi.com/products");
  const products = await res.json();

  return products.map((product: any) => ({
    id: product.id.toString(),
  }));
}

export async function generateMetadata({ params }: { params: { id: string } }) {
  const product = await getProduct(params.id);
  return {
    title: product.title,
    description: product.description,
  };
}
