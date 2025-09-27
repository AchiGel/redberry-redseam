import { useQuery } from "@tanstack/react-query";
import { getAllProducts } from "../services/productsApi";
import ProductsHeading from "../../../components/ProductsHeading";
import ProductsGrid from "../../../components/ProductsGrid";
import Pagination from "../../../components/Pagination";
import { useState } from "react";
import type { ProductsResponse } from "../../../types/types";
import { useSearchParams } from "react-router-dom";
import FilterChip from "../components/FilterChip";

const ProductsPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const currentPage = Number(searchParams.get("page") || 1);
  const sort = searchParams.get("sort") || undefined;
  const filters = {
    price_from: searchParams.get("price_from")
      ? Number(searchParams.get("price_from"))
      : undefined,
    price_to: searchParams.get("price_to")
      ? Number(searchParams.get("price_to"))
      : undefined,
  };

  const handlePageChange = (page: number) => {
    searchParams.set("page", page.toString());
    setSearchParams(searchParams);
  };

  const handleSortChange = (newSort: string | undefined) => {
    searchParams.set("page", "1");
    if (newSort) {
      searchParams.set("sort", newSort);
    } else {
      searchParams.delete("sort");
    }
    setSearchParams(searchParams);
  };

  const handleFiltersChange = (newFilters: {
    price_from?: number;
    price_to?: number;
  }) => {
    searchParams.set("page", "1");
    if (newFilters.price_from !== undefined) {
      searchParams.set("price_from", newFilters.price_from.toString());
    } else {
      searchParams.delete("price_from");
    }

    if (newFilters.price_to !== undefined) {
      searchParams.set("price_to", newFilters.price_to.toString());
    } else {
      searchParams.delete("price_to");
    }

    setSearchParams(searchParams);
  };

  const [filterIsOpened, setFilterIsOpened] = useState(false);
  const [sortIsOpened, setSortIsOpened] = useState(false);

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
        setSort={handleSortChange}
        filters={filters}
        setFilters={handleFiltersChange}
      />
      {filters.price_from !== undefined || filters.price_to !== undefined ? (
        <FilterChip
          label={`Price: ${filters.price_from ?? "Any"}-${
            filters.price_to ?? "Any"
          }`}
          onRemove={() =>
            handleFiltersChange({
              price_from: undefined,
              price_to: undefined,
            })
          }
        />
      ) : null}
      <ProductsGrid products={data!} />
      <Pagination meta={data!.meta} onPageChange={handlePageChange} />
    </div>
  );
};

export default ProductsPage;
