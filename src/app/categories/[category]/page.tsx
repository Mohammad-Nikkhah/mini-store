import CategoryProductsComponent from "./CategoryProducts";

interface SearchParams {
  page?: string;
}

export default async function CategoryProductsPage({
  params,
  searchParams,
}: {
  params: { category: string };
  searchParams: SearchParams;
}) {
  const currentPage = searchParams.page ? parseInt(searchParams.page) : 1;
  const productsPerPage = 3;
  const start = (currentPage - 1) * productsPerPage;

  const response = await fetch(
    `https://fakestoreapi.com/products/category/${params.category}`
  );
  const allProducts = await response.json();
  const products = allProducts.slice(start, start + productsPerPage);

  return (
    <CategoryProductsComponent
      products={products}
      totalPages={Math.ceil(allProducts.length / productsPerPage)}
      currentPage={currentPage}
      category={params.category}
    />
  );
}
