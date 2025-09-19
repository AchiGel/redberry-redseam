import { Outlet } from "react-router-dom";
import Header from "../components/Header";

const AuthLayout = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <div className="flex">
        <div className="max-w-[948px]">
          <img
            src="/images/authCover.png"
            alt="Hero"
            className="object-cover"
          />
        </div>
        <div className="flex flex-1 justify-center items-center bg-gray-50 p-6">
          <div className="bg-white shadow-md p-8 rounded-2xl w-full max-w-md">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthLayout;
