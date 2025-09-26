import type { NavigateFunction } from "react-router-dom";

const EmptyCart = ({
  navigate,
  setCartIsOpened,
}: {
  navigate: NavigateFunction;
  setCartIsOpened: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  return (
    <div className="flex flex-col items-center">
      <img src="/images/empty-cart.svg" alt="empty cart" />
      <div className="flex flex-col items-center gap-[10px] mt-6">
        <h4 className="font-semibold text-Dark-blue text-2xl">Ooops!</h4>
        <p className="font-normal text-Dark-blue-2 text-sm">
          You’ve got nothing in your cart just yet...
        </p>
      </div>
      <button
        onClick={() => {
          navigate("/");
          setCartIsOpened(false);
        }}
        className="bg-Red mt-[58px] px-5 py-[10px] rounded-[10px] w-[214px] text-white text-sm cursor-pointer"
      >
        Start shopping
      </button>
    </div>
  );
};

export default EmptyCart;
