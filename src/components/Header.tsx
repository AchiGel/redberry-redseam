import { Link, useNavigate } from "react-router-dom";
import CartModal from "./CartModal";
import { useState } from "react";
import { useAuth } from "../hooks/useAuth";

const Header = () => {
  const [cartIsOpened, setCartIsOpened] = useState(false);
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  return (
    <header className="relative flex justify-between items-center px-25 py-[10px] h-20">
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
            className="cursor-pointer"
            onClick={() => setCartIsOpened((prev) => !prev)}
          >
            <img src="/images/shopping-cart-icon.svg" alt="shoppin cart icon" />
          </button>
          <button
            onClick={logout}
            className="flex items-center gap-1 cursor-pointer"
          >
            <div className="bg-Dark-blue-2 rounded-full w-10 h-10 overflow-hidden">
              {user.avatar ? (
                <img src={user.avatar} alt="user avatar" />
              ) : (
                <></>
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

      {cartIsOpened && <CartModal setCartIsOpened={setCartIsOpened} />}
    </header>
  );
};

export default Header;
