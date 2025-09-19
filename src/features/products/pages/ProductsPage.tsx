import { useQuery } from "@tanstack/react-query";
import { getAllProducts } from "../services/productsApi";
import ProductsHeading from "../../../components/ProductsHeading";
import ProductsGrid from "../../../components/ProductsGrid";
import Pagination from "../../../components/Pagination";

const ProductsPage = () => {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["products"],
    queryFn: getAllProducts,
  });

  console.log(data, isError, isLoading);

  return (
    <div className="flex flex-col gap-8 mt-18">
      <ProductsHeading />
      {isError ? (
        <div>Failed to load products</div>
      ) : isLoading ? (
        <div>Loading...</div>
      ) : (
        <ProductsGrid products={data} />
      )}
      <Pagination />
    </div>
  );
};

export default ProductsPage;
