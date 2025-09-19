import { Outlet } from "react-router-dom";

const ProductsLayout = () => {
  return (
    <div className="flex flex-col mx-auto px-[100px] pb-50 max-w-[1920px] min-h-screen">
      <Outlet />
    </div>
  );
};

export default ProductsLayout;
