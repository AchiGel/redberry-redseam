import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="flex justify-between items-center px-25 py-[10px] h-20">
      {/* Logo */}
      <Link to={"/"}>
        <div className="flex items-center gap-1">
          <img src="/images/HandEye.svg" alt="Logo" />
          <h2 className="font-semibold text-Dark-blue text-base">
            RedSeam Clothing
          </h2>
        </div>
      </Link>

      <button className="flex items-center gap-2 font-medium text-Dark-blue text-xs cursor-pointer">
        <img src="/images/Union.svg" alt="login" />
        <span>Log in</span>
      </button>
    </header>
  );
};

export default Header;
