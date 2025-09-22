const ProductColors = ({
  productColor,
  availableColors,
}: {
  productColor: string | undefined;
  availableColors: string[] | undefined;
}) => {
  return (
    <div className="flex flex-col gap-4">
      <span className="text-Dark-blue">Color: {productColor}</span>
      <div className="flex items-center gap-[13px]">
        {availableColors &&
          availableColors.map((color, index) => (
            <div key={index} className="">
              {color}
            </div>
          ))}
      </div>
    </div>
  );
};

export default ProductColors;
