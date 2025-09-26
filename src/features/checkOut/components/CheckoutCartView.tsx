import CartItemCard from "../../../components/CartItemCard";

const CheckoutCartView = ({
  data,
}: {
  data: {
    id: number;
    color: string;
    quantity: number;
    total_price: number;
    name: string;
    size: string;
    cover_image: string;
  }[];
}) => {
  const deliveryFee = 5;

  const subTotal = data.reduce((acc, prev) => prev.total_price + acc, 0);

  const total = deliveryFee + subTotal;
  return (
    <div className="flex flex-col flex-1 items-center gap-[81px] max-w-[460px]">
      {/* cart items section */}
      <div className="flex flex-col gap-9 w-full max-h-[calc(100vh-410px)] overflow-y-auto">
        {data.map((item) => (
          <CartItemCard
            key={item.id + item.color}
            color={item.color}
            quantity={item.quantity}
            size={item.size}
            name={item.name}
            total_price={item.total_price}
            cover_image={item.cover_image}
          />
        ))}
      </div>
      {/* cart checkout section */}
      <div className="flex flex-col mt-5 w-full">
        <div className="flex flex-col gap-4 w-full">
          <div className="flex justify-between items-center text-Dark-blue-2">
            <h4>Items subtotal</h4>
            <span>$ {subTotal}</span>
          </div>
          <div className="flex justify-between items-center text-Dark-blue-2">
            <h4>Delivery</h4>
            <span>$ {deliveryFee}</span>
          </div>
          <div className="flex justify-between items-center font-medium text-Dark-blue text-xl">
            <h3>Total</h3>
            <span>$ {total}</span>
          </div>
        </div>
      </div>
      <button
        type="submit"
        className="bg-Red px-5 py-4 rounded-[10px] w-full text-white text-sm cursor-pointer"
      >
        Pay
      </button>
    </div>
  );
};

export default CheckoutCartView;
