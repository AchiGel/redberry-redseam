import { useNavigate } from "react-router-dom";
import { postCartItems } from "../services/cartApi";
import { useMutation, useQueryClient } from "@tanstack/react-query";

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

  const queryClient = useQueryClient();

  const { mutate, isPending } = useMutation({
    mutationFn: () => {
      if (!user) throw new Error("Not logged in");
      if (!chosenQuantity || !chosenSize || !chosenColor) {
        throw new Error("Missing required fields");
      }

      return postCartItems(user, productId, {
        quantity: chosenQuantity,
        size: chosenSize,
        color: chosenColor,
      });
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["cartData"] });
      alert("Product added to cart!");
    },
    onError: (error) => {
      console.error(error);
      if (error.message === "Not logged in") {
        navigate("/login");
      } else {
        alert("Failed to add to cart");
      }
    },
  });

  return (
    <button
      onClick={() => mutate()}
      className="flex justify-center items-center gap-[10px] bg-Red py-4 rounded-[10px] font-medium text-white text-lg cursor-pointer"
    >
      <img src="/images/shopping-cart.svg" alt="cart" />
      {isPending ? "Adding..." : "Add to Cart"}
    </button>
  );
};

export default AddToCardButton;
