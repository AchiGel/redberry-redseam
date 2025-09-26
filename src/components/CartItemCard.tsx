const CartItemCard = () => {
  return (
    <div className="flex gap-[17px]">
      <div className="border border-Grey-2 rounded-[10px] aspect-50/67 overflow-hidden">
        <img
          className="w-full h-full object-contain"
          src="/images/Union.svg"
          alt="cart item"
        />
      </div>
      <div className="flex flex-col flex-1 justify-between gap-[13px] py-[8.5px]">
        <div className="flex justify-between w-full">
          <div className="flex flex-col gap-2">
            <h2 className="font-medium text-Dark-blue">
              Kids' Curved Hilfiger Graphic T-Shirt
            </h2>
            <span className="text-Dark-blue-2 text-xs">Baby pink</span>
            <span className="text-Dark-blue-2 text-xs">L</span>
          </div>
          <div className="font-medium text-Dark-blue text-lg">$25</div>
        </div>
        <div className="flex justify-between items-center w-full">
          <div className="flex items-center gap-[2px] px-2 py-1 border border-Grey-2 rounded-[22px] text-Dark-blue-2 text-xs">
            <button>-</button>
            <span>1</span>
            <button>+</button>
          </div>
          <button className="text-Dark-blue-2 text-xs cursor-pointer">
            Remove
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartItemCard;
