import { useNavigate } from "react-router-dom";
import { postCartItems } from "../services/cartApi";
import { useState } from "react";

interface AddToCardButtonProps {
  user: string | null;
  productId: string;
  chosenSize: string;
  chosenColor: string;
  chosenQuantity: number | null;
}

const AddToCardButton = ({
  user,
  productId,
  chosenSize,
  chosenColor,
  chosenQuantity,
}: AddToCardButtonProps) => {
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);

  const handleAddToCart = async () => {
    if (!user) {
      navigate("/login");
      return;
    }
    if (!chosenQuantity || !chosenSize || !chosenColor) {
      alert("Please select size, color, and quantity");
      return;
    }

    setLoading(true);
    try {
      const data = await postCartItems(user, productId, {
        quantity: chosenQuantity,
        size: chosenSize,
        color: chosenColor,
      });
      console.log("Added to cart:", data);
      alert("Product added to cart!");
    } catch (error) {
      console.error(error);
      alert("Failed to add to cart");
    } finally {
      setLoading(false);
    }
  };

  return (
    <button
      onClick={handleAddToCart}
      className="flex justify-center items-center gap-[10px] bg-Red py-4 rounded-[10px] font-medium text-white text-lg cursor-pointer"
    >
      <img src="/images/shopping-cart.svg" alt="cart" />
      {loading ? "Adding..." : "Add to Cart"}
    </button>
  );
};

export default AddToCardButton;
