import { Link } from "react-router-dom";
import CartModal from "./CartModal";
import { useState } from "react";

const Header = () => {
  const [cartIsOpened, setCartIsOpened] = useState(false);

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
      <div className="flex items-center">
        <button
          className="p-4 cursor-pointer"
          onClick={() => setCartIsOpened((prev) => !prev)}
        >
          cart
        </button>
        <button className="flex items-center gap-2 font-medium text-Dark-blue text-xs cursor-pointer">
          <img src="/images/Union.svg" alt="login" />
          <span>Log in</span>
        </button>
      </div>
      {cartIsOpened && <CartModal setCartIsOpened={setCartIsOpened} />}
    </header>
  );
};

export default Header;
