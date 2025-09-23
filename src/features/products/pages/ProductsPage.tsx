import { useQuery } from "@tanstack/react-query";
import { getAllProducts } from "../services/productsApi";
import ProductsHeading from "../../../components/ProductsHeading";
import ProductsGrid from "../../../components/ProductsGrid";
import Pagination from "../../../components/Pagination";
import { useState } from "react";
import type { ProductsResponse } from "../../../types/types";

const ProductsPage = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const [filterIsOpened, setFilterIsOpened] = useState(false);
  const [sortIsOpened, setSortIsOpened] = useState(false);

  const { data, isLoading, isError } = useQuery<ProductsResponse>({
    queryKey: ["products", currentPage],
    queryFn: () => getAllProducts(currentPage),
  });

  if (isError) return <div>Failed to load products</div>;
  if (isLoading) return <div>Loading...</div>;

  console.log(data);

  return (
    <div className="flex flex-col gap-8 mt-18">
      <ProductsHeading
        from={data?.meta.from}
        to={data?.meta.to}
        totalProducts={data?.meta.total}
        filterIsOpened={filterIsOpened}
        setFilterIsOpened={setFilterIsOpened}
        sortIsOpened={sortIsOpened}
        setSortIsOpened={setSortIsOpened}
      />
      <ProductsGrid products={data!} />
      <Pagination meta={data!.meta} onPageChange={setCurrentPage} />
    </div>
  );
};

export default ProductsPage;
