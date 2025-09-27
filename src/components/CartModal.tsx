import { useNavigate } from "react-router-dom";
import EmptyCart from "./EmptyCart";
import FilledCart from "./FilledCart";
import type { ProductTypes } from "../types/types";

const CartModal = ({
  setCartIsOpened,
  data,
  isError,
  isLoading,
  token,
}: {
  setCartIsOpened: React.Dispatch<React.SetStateAction<boolean>>;
  data: ProductTypes[];
  isLoading: boolean;
  isError: boolean;
  token: string | null;
}) => {
  const navigate = useNavigate();

  if (isLoading)
    return <div className="top-0 right-0 z-20 absolute">Is Loading</div>;
  if (isError)
    return (
      <div className="top-0 right-0 z-20 absolute">Error fetching data</div>
    );

  return (
    <div
      onClick={() => setCartIsOpened(false)}
      className="top-0 left-0 z-20 absolute flex justify-end bg-Dark-blue/30 w-full min-h-screen"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="flex flex-col bg-white p-10 w-[28%]"
      >
        <div className="flex justify-between items-center">
          <h3 className="font-medium text-Dark-blue text-xl">
            Shopping cart ({data.length})
          </h3>
          <button
            onClick={() => setCartIsOpened(false)}
            className="cursor-pointer"
          >
            <img src="/images/close.svg" alt="close button" />
          </button>
        </div>
        <div className="flex flex-col flex-1 justify-center items-center">
          {data.length === 0 ? (
            <EmptyCart navigate={navigate} setCartIsOpened={setCartIsOpened} />
          ) : (
            <FilledCart
              navigate={navigate}
              setCartIsOpened={setCartIsOpened}
              cartData={data}
              token={token}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default CartModal;
