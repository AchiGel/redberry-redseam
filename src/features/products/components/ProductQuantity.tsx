import { useEffect, useState } from "react";

const ProductQuantity = ({
  productQuantity,
  chosenQuantity,
  setChosenQuantity,
}: {
  productQuantity: number | undefined;
  chosenQuantity: null | number;
  setChosenQuantity: React.Dispatch<React.SetStateAction<null | number>>;
}) => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (productQuantity && chosenQuantity == null) {
      setChosenQuantity(productQuantity);
    }
  }, [productQuantity, chosenQuantity, setChosenQuantity]);

  const options = productQuantity
    ? Array.from({ length: productQuantity }, (_, i) => i + 1)
    : [];

  const handleSelect = (qty: number) => {
    setChosenQuantity(qty);
    setIsOpen(false);
  };

  return (
    <div className="relative flex flex-col gap-4">
      <span className="text-Dark-blue">Quantity</span>

      {/* Dropdown trigger */}
      <div
        className="flex justify-between items-center px-4 py-[9px] border border-Grey-2 rounded-[10px] w-[70px] cursor-pointer"
        onClick={() => setIsOpen((prev) => !prev)}
      >
        <span className="text-Dark-blue/80">{chosenQuantity ?? "-"}</span>
        <img
          src="/images/chevron-down.svg"
          alt=""
          className={`transition-transform ${isOpen ? "rotate-180" : ""}`}
        />
      </div>

      {/* Dropdown menu */}
      {isOpen && (
        <div className="top-[75px] left-0 z-10 absolute bg-white shadow-md border border-Grey-2 rounded-[10px] w-[75px]">
          {options.map((qty) => (
            <button
              key={qty}
              onClick={() => handleSelect(qty)}
              className="hover:bg-Grey-1 px-4 py-2 w-full text-Dark-blue/80 text-left cursor-pointer"
            >
              {qty}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default ProductQuantity;
