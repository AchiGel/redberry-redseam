import { useQuery } from "@tanstack/react-query";
import { getSingleProduct } from "../services/productsApi";
import { useParams } from "react-router-dom";
import type { ProductTypes } from "../../../types/types";
import AddToCardButton from "../components/AddToCardButton";
import ProductDetails from "../components/ProductDetails";
import ProductQuantity from "../components/ProductQuantity";
import ProductSizes from "../components/ProductSizes";
import ProductColors from "../components/ProductColors";
import ProductNameAndPrice from "../components/ProductNameAndPrice";
import ProductGallery from "../components/ProductGallery";
import { useState } from "react";
import { useAuth } from "../../../hooks/useAuth";

const ProductDetailPage = () => {
  const { id } = useParams<{ id: string }>();

  const { token } = useAuth();

  const [chosenSize, setChosenSize] = useState("");
  const [chosenQuantity, setChosenQuantity] = useState<null | number>(null);
  const [chosenColor, setChosenColor] = useState("");

  const { data, isLoading, isError } = useQuery<ProductTypes>({
    queryKey: ["product", id],
    queryFn: () => getSingleProduct(id!),
    enabled: !!id,
  });

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Failed to load product</div>;

  return (
    <div className="flex flex-col">
      <span className="mt-[30px] mb-[49px] font-light text-Dark-blue text-sm">
        Listing / Product
      </span>
      <div className="flex justify-between items-start">
        {/* gallery */}
        <ProductGallery
          productImages={data?.images}
          coverImage={data?.cover_image}
          availableColors={data?.available_colors}
          chosenColor={chosenColor}
          setChosenColor={setChosenColor}
        />

        {/* product info */}
        <div className="flex flex-col flex-1 gap-14 max-w-[704px] basis-1/2">
          {/* name and price */}
          <ProductNameAndPrice
            productName={data?.name}
            productPrice={data?.price}
          />
          {/* tech details */}
          <div className="flex flex-col gap-12">
            {/* color section */}
            <ProductColors
              productColor={data?.color}
              availableColors={data?.available_colors}
              chosenColor={chosenColor}
              setChosenColor={setChosenColor}
            />
            {/* size section */}
            <ProductSizes
              productSize={data?.size}
              availableSizes={data?.available_sizes}
              chosenSize={chosenSize}
              setChosenSize={setChosenSize}
            />
            {/* quantity section */}
            <ProductQuantity
              productQuantity={data?.quantity}
              chosenQuantity={chosenQuantity}
              setChosenQuantity={setChosenQuantity}
            />
          </div>
          {/* button */}
          <AddToCardButton
            user={token}
            productId={data!.id.toString()}
            chosenSize={chosenSize}
            chosenColor={chosenColor}
            chosenQuantity={chosenQuantity}
          />
          <hr className="border border-Grey-2" />
          {/* details */}
          <ProductDetails
            image={data?.brand.image}
            brandName={data?.brand.name}
            description={data?.description}
          />
        </div>
      </div>
    </div>
  );
};

export default ProductDetailPage;
