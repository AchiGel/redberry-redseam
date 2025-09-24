import { useNavigate } from "react-router-dom";
import type { UserType } from "../../../types/types";

const AddToCardButton = ({ user }: { user: UserType | null }) => {
  const navigate = useNavigate();

  const handleAddToCart = () => {
    if (!user) navigate("/login");
  };

  return (
    <button
      onClick={handleAddToCart}
      className="flex justify-center items-center gap-[10px] bg-Red py-4 rounded-[10px] font-medium text-white text-lg cursor-pointer"
    >
      <img src="/images/shopping-cart.svg" alt="cart" />
      Add to cart
    </button>
  );
};

export default AddToCardButton;
