const ProductsHeading = () => {
  return (
    <div className="flex justify-between items-center">
      <h2 className="font-semibold text-[#10151F] text-[42px]">Products</h2>
      <div className="flex items-center gap-8">
        <span className="text-[#3E424A] text-xs">
          Showing 1–10 of 100 results
        </span>
        <div className="bg-[#E1DFE1] w-[1px] h-[14px]"></div>
        <div className="flex items-center gap-2">
          <img src="/images/adjustments-horizontal.svg" alt="" />
          <span className="text-[#10151F]">Filter</span>
        </div>
        <div className="flex items-center gap-1">
          <span className="text-[#10151F]">Sort by</span>
          <img src="/images/chevron-down.svg" alt="" />
        </div>
      </div>
    </div>
  );
};

export default ProductsHeading;
