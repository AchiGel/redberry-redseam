import type { ProductsHeadingProps } from "../types/types";
import HeadingFilterSection from "./HeadingFilterSection";
import HeadingSortSection from "./HeadingSortSection";

const ProductsHeading = ({
  totalProducts,
  from,
  to,
  filterIsOpened,
  setFilterIsOpened,
  sortIsOpened,
  setSortIsOpened,
  setSort,
  filters,
  setFilters,
}: ProductsHeadingProps) => {
  return (
    <div className="flex justify-between items-center">
      <h2 className="font-semibold text-[42px] text-Dark-blue">Products</h2>
      <div className="flex items-center gap-8">
        <span className="text-Dark-blue-2 text-xs">
          Showing {from}–{to} of {totalProducts} results
        </span>
        <div className="bg-Grey-2 w-[1px] h-[14px]"></div>
        {/* Filter Section */}
        <HeadingFilterSection
          filterIsOpened={filterIsOpened}
          setFilterIsOpened={setFilterIsOpened}
          setSortIsOpened={setSortIsOpened}
          filters={filters}
          setFilters={setFilters}
        />
        {/* Sort Section */}
        <HeadingSortSection
          setFilterIsOpened={setFilterIsOpened}
          sortIsOpened={sortIsOpened}
          setSortIsOpened={setSortIsOpened}
          setSort={setSort}
        />
      </div>
    </div>
  );
};

export default ProductsHeading;
