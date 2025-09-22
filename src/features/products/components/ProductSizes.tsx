const ProductSizes = ({
  productSize,
  availableSizes,
}: {
  productSize: string | undefined;
  availableSizes: string[] | null | undefined;
}) => {
  return (
    <div>
      <span>Size: {productSize}</span>
      <div className="flex items-center gap-[13px]">
        {availableSizes &&
          availableSizes.map((size, index) => (
            <div key={index} className="">
              {size}
            </div>
          ))}
      </div>
    </div>
  );
};

export default ProductSizes;
