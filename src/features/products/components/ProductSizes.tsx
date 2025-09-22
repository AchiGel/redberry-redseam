import { useEffect } from "react";

const ProductSizes = ({
  productSize,
  availableSizes,
  chosenSize,
  setChosenSize,
}: {
  productSize: string | undefined;
  availableSizes: string[] | null | undefined;
  chosenSize: string;
  setChosenSize: React.Dispatch<React.SetStateAction<string>>;
}) => {
  useEffect(() => {
    if (productSize) setChosenSize(productSize);
  }, [productSize, setChosenSize]);

  return (
    <div className="flex flex-col gap-4">
      <span className="text-Dark-blue">Size: {chosenSize}</span>
      <div className="flex items-center gap-[13px]">
        {availableSizes &&
          availableSizes.map((size) => (
            <button
              onClick={() => setChosenSize(size)}
              key={size}
              className={`flex justify-center items-center px-4 py-[9px] border  rounded-[10px] w-[70px]  cursor-pointer ${
                chosenSize === size
                  ? "border-Dark-blue bg-Grey text-Dark-blue"
                  : "border-Grey-2 text-Dark-blue/80"
              }`}
            >
              {size}
            </button>
          ))}
      </div>
    </div>
  );
};

export default ProductSizes;
