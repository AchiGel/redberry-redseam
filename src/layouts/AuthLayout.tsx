import { Outlet } from "react-router-dom";
import Header from "../components/Header";

const AuthLayout = () => {
  return (
    <div className="flex flex-col mx-auto max-w-[1920px] min-h-screen">
      <Header />

      <div className="flex flex-1 h-full">
        <div className="flex-1 max-w-[948px]">
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
