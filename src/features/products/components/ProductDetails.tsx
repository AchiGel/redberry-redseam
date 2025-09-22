const ProductDetails = ({
  image,
  brandName,
  description,
}: {
  image: string | undefined;
  brandName: string | undefined;
  description: string | undefined | null;
}) => {
  return (
    <div>
      <div className="mb-[19px]">
        <div className="flex justify-between items-center mb-[7px]">
          <h3 className="font-medium text-Dark-blue text-xl">Details</h3>
          <img
            className="flex-0 w-full h-full max-h-[61px]"
            src={image}
            alt="brand image"
          />
        </div>
        <span className="font-normal text-Dark-blue-2 text-base">
          Brand: {brandName}
        </span>
      </div>
      <p className="font-normal text-Dark-blue-2 text-base">{description}</p>
    </div>
  );
};

export default ProductDetails;
