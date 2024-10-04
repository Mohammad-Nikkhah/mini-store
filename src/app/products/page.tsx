import ProductsComponent from "./ProductsComponent";

async function getProducts() {
  const response = await fetch("https://fakestoreapi.com/products");
  return response.json();
}

export default async function ProductsPage() {
  const products = await getProducts();
  return <ProductsComponent products={products} />;
}
