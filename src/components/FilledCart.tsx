import type { NavigateFunction } from "react-router-dom";
import CartItemCard from "./CartItemCard";

const FilledCart = ({
  navigate,
  setCartIsOpened,
}: {
  navigate: NavigateFunction;
  setCartIsOpened: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  return (
    <div className="flex flex-col flex-1 justify-between items-center mt-[63px] w-full">
      {/* cart items section */}
      <div className="flex flex-col gap-9 w-full max-h-[calc(100vh-410px)] overflow-y-auto">
        <CartItemCard />
        <CartItemCard />
        <CartItemCard />
        <CartItemCard />
        <CartItemCard />
      </div>
      {/* cart checkout section */}
      <div className="flex flex-col mt-5 w-full">
        <div className="flex flex-col gap-4 w-full">
          <div className="flex justify-between items-center text-Dark-blue-2">
            <h4>Items subtotal</h4>
            <span>$ -</span>
          </div>
          <div className="flex justify-between items-center text-Dark-blue-2">
            <h4>Delivery</h4>
            <span>$ 5</span>
          </div>
          <div className="flex justify-between items-center font-medium text-Dark-blue text-xl">
            <h3>Total</h3>
            <span>$ -</span>
          </div>
        </div>
        <button
          onClick={() => {
            navigate("/");
            setCartIsOpened(false);
          }}
          className="bg-Red mt-[58px] px-5 py-4 rounded-[10px] w-full text-white text-sm cursor-pointer"
        >
          Go to checkout
        </button>
      </div>
    </div>
  );
};

export default FilledCart;
