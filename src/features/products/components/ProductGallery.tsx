const ProductGallery = ({
  productImages,
  coverImage,
  availableColors,
  chosenColor,
  setChosenColor,
}: {
  productImages: string[] | undefined;
  coverImage: string | undefined;
  availableColors: string[] | undefined;
  chosenColor: string;
  setChosenColor: React.Dispatch<React.SetStateAction<string>>;
}) => {
  const colorIndex =
    availableColors?.findIndex((color) => color === chosenColor) ?? -1;

  const mainImage =
    (colorIndex >= 0 && productImages?.[colorIndex]) || coverImage;

  return (
    <div className="flex items-start gap-6 basis-1/2">
      {/* thumbnails */}
      <div className="flex flex-col gap-3 w-[121px] shrink-0">
        {productImages &&
          productImages.map((image, index) => {
            const relatedColor = availableColors?.[index];

            return (
              <div
                key={index}
                className="w-full h-[161px]"
                onClick={() => relatedColor && setChosenColor(relatedColor)}
              >
                <img
                  className="rounded-md w-full h-full object-cover"
                  src={image}
                  alt="thumbnail image"
                />
              </div>
            );
          })}
      </div>

      {/* main image */}
      <div className="flex-1 max-w-[703px]">
        {mainImage && (
          <img
            className="rounded-lg w-full h-full object-cover"
            src={mainImage}
            alt="cover image"
          />
        )}
      </div>
    </div>
  );
};

export default ProductGallery;
