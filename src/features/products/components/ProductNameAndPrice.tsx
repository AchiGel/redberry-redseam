const ProductNameAndPrice = ({
  productName,
  productPrice,
}: {
  productName: string | undefined;
  productPrice: number | undefined;
}) => {
  return (
    <div>
      <h1 className="font-semibold text-[32px] text-Dark-blue">
        {productName}
      </h1>
      <h2 className="font-semibold text-[32px] text-Dark-blue">
        $ {productPrice}
      </h2>
    </div>
  );
};

export default ProductNameAndPrice;
