import { useNavigate } from "react-router-dom";

const CartModal = ({
  setCartIsOpened,
}: {
  setCartIsOpened: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const navigate = useNavigate();
  return (
    <div className="top-0 left-0 z-20 absolute flex justify-end bg-Dark-blue/30 w-full min-h-screen">
      <div className="bg-white p-10 w-[28%] min-h-screen">
        <div className="flex justify-between items-center">
          <h3 className="font-medium text-Dark-blue text-xl">
            Shopping cart (0)
          </h3>
          <button
            onClick={() => setCartIsOpened(false)}
            className="cursor-pointer"
          >
            <img src="/images/close.svg" alt="close button" />
          </button>
        </div>
        <div className="flex flex-col items-center mt-[151px]">
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
      </div>
    </div>
  );
};

export default CartModal;
