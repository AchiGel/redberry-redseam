const ProductGallery = ({
  productImages,
  coverImage,
}: {
  productImages: string[] | undefined;
  coverImage: string | undefined;
}) => {
  return (
    <div className="flex items-start gap-6 basis-1/2">
      {/* thumbnails */}
      <div className="flex flex-col gap-3 w-[121px] shrink-0">
        {productImages &&
          productImages.map((image, index) => (
            <div key={index} className="w-full h-[161px]">
              <img
                className="rounded-md w-full h-full object-cover"
                src={image}
                alt=""
              />
            </div>
          ))}
      </div>

      {/* main image */}
      <div className="flex-1 max-w-[703px]">
        <img
          className="rounded-lg w-full h-full object-cover"
          src={coverImage}
          alt="cover image"
        />
      </div>
    </div>
  );
};

export default ProductGallery;
