import { useQuery } from "@tanstack/react-query";
import { getSingleProduct } from "../services/productsApi";
import { useParams } from "react-router-dom";
import type { ProductTypes } from "../../../types/types";

const ProductDetailPage = () => {
  const { id } = useParams<{ id: string }>();

  const { data, isLoading, isError } = useQuery<ProductTypes>({
    queryKey: ["product", id],
    queryFn: () => getSingleProduct(id!),
    enabled: !!id,
  });

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Failed to load product</div>;

  console.log(data);

  return (
    <div className="flex justify-between items-center">
      {/* gallery */}
      {/* gallery */}
      <div className="flex items-start gap-6 basis-1/2">
        {/* thumbnails */}
        <div className="flex flex-col gap-3 w-[121px] shrink-0">
          {data?.images.map((image, index) => (
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
            src={data?.cover_image}
            alt="cover image"
          />
        </div>
      </div>

      {/* product info */}
      <div className="flex flex-col flex-1 gap-14 max-w-[704px] basis-1/2">
        {/* name and price */}
        <div>
          <h1 className="font-semibold text-[32px] text-Dark-blue">
            {data?.name}
          </h1>
          <h2 className="font-semibold text-[32px] text-Dark-blue">
            $ {data?.price}
          </h2>
        </div>
        {/* tech details */}
        <div>
          {/* color section */}
          <div>
            <span>Color: {data?.color}</span>
            <div className="flex items-center gap-[13px]">
              {data?.available_colors.map((color, index) => (
                <div key={index} className="">
                  {color}
                </div>
              ))}
            </div>
          </div>
          {/* size section */}
          <div>
            <span>Size: {data?.size}</span>
            <div className="flex items-center gap-[13px]">
              {data?.available_sizes &&
                data?.available_sizes.map((size, index) => (
                  <div key={index} className="">
                    {size}
                  </div>
                ))}
            </div>
          </div>
          {/* quantity section */}
          <div>
            <span>Quantity</span>
            <div>3</div>
          </div>
        </div>
        {/* button */}
        <button className="bg-Red">Add to cart</button>
        <hr className="bg-[#E1DFE1] h-[1px]" />
        {/* details */}
        <div>
          <div>
            <div>
              <h3>Details</h3>
              <img src={data?.brand.image} alt="brand image" />
            </div>
            <span>Brand: {data?.brand.name}</span>
          </div>
          <p>{data?.description}</p>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailPage;
