import { useQuery } from "@tanstack/react-query";
import { getAllProducts } from "../services/productsApi";
import ProductsHeading from "../../../components/ProductsHeading";
import ProductsGrid from "../../../components/ProductsGrid";
import Pagination from "../../../components/Pagination";
import { useState } from "react";

const ProductsPage = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const { data, isLoading, isError } = useQuery({
    queryKey: ["products", currentPage],
    queryFn: () => getAllProducts(currentPage),
  });

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
      {isError ? (
        <div>Failed to load products</div>
      ) : isLoading ? (
        <div>Loading...</div>
      ) : (
        <Pagination meta={data.meta} onPageChange={setCurrentPage} />
      )}
    </div>
  );
};

export default ProductsPage;
