import { Outlet } from "react-router-dom";
import Header from "../components/Header";

const AuthLayout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <div className="flex flex-1 mx-auto w-full max-w-[1920px] h-full">
        <div className="flex-1">
          <img
            src="/images/authCover.png"
            alt="Hero"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="flex flex-1 justify-center items-center">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default AuthLayout;
