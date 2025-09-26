import { useNavigate } from "react-router-dom";
import EmptyCart from "./EmptyCart";
import FilledCart from "./FilledCart";
import { useQuery } from "@tanstack/react-query";
import { getCartItems } from "../features/products/services/cartApi";
import { useAuth } from "../hooks/useAuth";

const CartModal = ({
  setCartIsOpened,
}: {
  setCartIsOpened: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const navigate = useNavigate();

  const { token } = useAuth();

  const { data, isError, isLoading } = useQuery({
    queryKey: ["cartData"],
    queryFn: () => getCartItems(token),
  });

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
            Shopping cart (0)
          </h3>
          <button
            onClick={() => setCartIsOpened(false)}
            className="cursor-pointer"
          >
            <img src="/images/close.svg" alt="close button" />
          </button>
        </div>
        <div className="flex flex-col flex-1 justify-center items-center">
          {isError ? (
            <p>Error fetching data</p>
          ) : isLoading ? (
            <p>Data is loading</p>
          ) : data.length === 0 ? (
            <EmptyCart navigate={navigate} setCartIsOpened={setCartIsOpened} />
          ) : (
            <FilledCart navigate={navigate} setCartIsOpened={setCartIsOpened} />
          )}
        </div>
      </div>
    </div>
  );
};

export default CartModal;
