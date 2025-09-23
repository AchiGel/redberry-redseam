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

  const [sort, setSort] = useState<string | undefined>(undefined);
  const [filters, setFilters] = useState<{
    price_from?: number;
    price_to?: number;
  }>({});

  const { data, isLoading, isError } = useQuery<ProductsResponse>({
    queryKey: ["products", currentPage, sort, filters],
    queryFn: () =>
      getAllProducts({
        page: currentPage,
        sort,
        filter: filters,
      }),
  });

  if (isError) return <div>Failed to load products</div>;
  if (isLoading) return <div>Loading...</div>;

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
        sort={sort}
        setSort={setSort}
        filters={filters}
        setFilters={setFilters}
      />
      <ProductsGrid products={data!} />
      <Pagination meta={data!.meta} onPageChange={setCurrentPage} />
    </div>
  );
};

export default ProductsPage;
