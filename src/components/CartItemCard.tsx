import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteCartItems } from "../features/products/services/cartApi";

const CartItemCard = (itemData: {
  id?: number;
  color: string;
  quantity: number;
  total_price: number;
  name: string;
  size: string;
  cover_image: string;
  token: string | null;
}) => {
  const queryClient = useQueryClient();

  const { mutate: removeItem } = useMutation({
    mutationFn: () => {
      if (!itemData.token || itemData.id === undefined) {
        throw new Error("Token not provided or item does not exist");
      }
      return deleteCartItems(itemData.token, itemData.id);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["cartData"] });
      alert("Item deleted successfully!");
    },
    onError: () => {
      alert("Something went wrong while deleting the item.");
    },
  });

  return (
    <div className="flex gap-[17px]">
      <div className="border border-Grey-2 rounded-[10px] w-[100px] aspect-50/67 overflow-hidden">
        <img
          className="w-full h-full object-contain"
          src={itemData.cover_image}
          alt="cart item"
        />
      </div>
      <div className="flex flex-col flex-1 justify-between gap-[13px] py-[8.5px]">
        <div className="flex justify-between w-full">
          <div className="flex flex-col gap-2">
            <h2 className="font-medium text-Dark-blue">{itemData.name}</h2>
            <span className="text-Dark-blue-2 text-xs">{itemData.color}</span>
            <span className="text-Dark-blue-2 text-xs">{itemData.size}</span>
          </div>
          <div className="font-medium text-Dark-blue text-lg">
            ${itemData.total_price}
          </div>
        </div>
        <div className="flex justify-between items-center w-full">
          <div className="flex items-center gap-[2px] px-2 py-1 border border-Grey-2 rounded-[22px] text-Dark-blue-2 text-xs">
            <button className="cursor-pointer">
              <img src="/images/minus.svg" alt="minus" />
            </button>
            <span className="px-2">{itemData.quantity}</span>
            <button className="cursor-pointer">
              <img src="/images/plus.svg" alt="plus" />
            </button>
          </div>
          <button
            onClick={() => removeItem()}
            className="text-Dark-blue-2 text-xs cursor-pointer"
          >
            Remove
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartItemCard;
