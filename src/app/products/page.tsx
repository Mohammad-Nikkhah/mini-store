import ProductsComponent from "./ProductsComponent";

export default async function ProductsPage({ searchParams }: any) {
  const currentPage = searchParams.page ? parseInt(searchParams.page) : 1;
  const productsPerPage = 8;
  const start = (currentPage - 1) * productsPerPage;

  const response = await fetch("https://fakestoreapi.com/products");
  const allProducts = await response.json();
  const products = allProducts.slice(start, start + productsPerPage);

  return (
    <ProductsComponent
      products={products}
      totalPages={Math.ceil(allProducts.length / productsPerPage)}
      currentPage={currentPage}
    />
  );
}
