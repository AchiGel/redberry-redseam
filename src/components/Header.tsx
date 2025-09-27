import { Link, useNavigate } from "react-router-dom";
import CartModal from "./CartModal";
import { useEffect, useState } from "react";
import { useAuth } from "../hooks/useAuth";
import { useQuery } from "@tanstack/react-query";
import { getCartItems } from "../features/products/services/cartApi";

const Header = () => {
  const [cartIsOpened, setCartIsOpened] = useState(false);
  const [logOutDropIsOpened, setLogOutDrowIsOpened] = useState(false);
  const { user, logout, token } = useAuth();
  const navigate = useNavigate();

  const { data, isError, isLoading } = useQuery({
    queryKey: ["cartData"],
    queryFn: () => getCartItems(token),
  });

  useEffect(() => {
    if (cartIsOpened) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [cartIsOpened]);

  return (
    <header className="relative flex justify-between items-center mx-auto px-25 py-[10px] w-full max-w-[1920px] h-20">
      {/* Logo */}
      <Link to={"/"}>
        <div className="flex items-center gap-1">
          <img src="/images/HandEye.svg" alt="Logo" />
          <h2 className="font-semibold text-Dark-blue text-base">
            RedSeam Clothing
          </h2>
        </div>
      </Link>
      {user ? (
        <div className="flex items-center gap-5">
          <button
            className="relative cursor-pointer"
            onClick={() => setCartIsOpened((prev) => !prev)}
          >
            <img src="/images/shopping-cart-icon.svg" alt="shoppin cart icon" />
            {data && data.length > 0 ? (
              <span className="-top-3 -right-3 absolute bg-Red px-[6px] py-[2px] rounded-full text-white text-xs">
                {data.length}
              </span>
            ) : null}
          </button>
          <button
            onClick={() => setLogOutDrowIsOpened((prev) => !prev)}
            className="flex items-center gap-1 cursor-pointer"
          >
            <div className="rounded-full w-10 h-10 overflow-hidden">
              {user.avatar ? (
                <img
                  src={user.avatar}
                  alt="user avatar"
                  className="w-full h-full object-contain"
                />
              ) : (
                <img
                  src="/images/Union.svg"
                  alt="user avatar"
                  className="w-full h-full object-contain"
                />
              )}
            </div>
            <img src="/images/chevron-down.svg" alt="arrow" />
          </button>
        </div>
      ) : (
        <button
          onClick={() => navigate("/login")}
          className="flex items-center gap-2 font-medium text-Dark-blue text-xs cursor-pointer"
        >
          <img src="/images/Union.svg" alt="login" />
          <span>Log in</span>
        </button>
      )}

      {cartIsOpened && (
        <CartModal
          data={data}
          isLoading={isLoading}
          isError={isError}
          setCartIsOpened={setCartIsOpened}
          token={token}
        />
      )}
      {logOutDropIsOpened && (
        <div className="top-20 right-25 absolute p-4 border border-Grey-2 rounded-lg">
          <button
            className="bg-Red px-3 py-[10px] rounded-[10px] text-white cursor-pointer"
            onClick={() => {
              logout();
              setLogOutDrowIsOpened(false);
            }}
          >
            Log out
          </button>
        </div>
      )}
    </header>
  );
};

export default Header;
