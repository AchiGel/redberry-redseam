import { useEffect } from "react";

const ProductColors = ({
  productColor,
  availableColors,
  chosenColor,
  setChosenColor,
}: {
  productColor: "Default" | undefined;
  availableColors: string[] | undefined;
  chosenColor: string;
  setChosenColor: React.Dispatch<React.SetStateAction<string>>;
}) => {
  useEffect(() => {
    if (
      availableColors &&
      productColor &&
      (productColor === "Default" || productColor)
    )
      setChosenColor(availableColors[0]);
  }, [productColor, setChosenColor, availableColors]);

  return (
    <div className="flex flex-col gap-4">
      <span className="text-Dark-blue">Color: {chosenColor}</span>
      <div className="flex items-center gap-[13px]">
        {availableColors &&
          availableColors.map((color) => (
            <button
              key={color}
              onClick={() => setChosenColor(color)}
              className={`w-12 h-12 rounded-full bg-white p-[5px] border cursor-pointer overflow-hidden ${
                chosenColor === color ? "border-Grey-2" : "border-none"
              }`}
            >
              <div
                className={`rounded-full w-full h-full ${
                  color === "White" && "border-Grey-2 border"
                }`}
                style={{ backgroundColor: color }}
              ></div>
            </button>
          ))}
      </div>
    </div>
  );
};

export default ProductColors;
