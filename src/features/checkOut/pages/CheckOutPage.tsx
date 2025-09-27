import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useAuth } from "../../../hooks/useAuth";
import CheckoutCartView from "../components/CheckoutCartView";
import CheckoutForm from "../components/CheckoutForm";
import { cartCheckout, getCartItems } from "../../products/services/cartApi";
import { useForm, type FieldValues, type SubmitHandler } from "react-hook-form";
import { useEffect, useState } from "react";
import CongratsModal from "../components/CongratsModal";

const CheckOutPage = () => {
  const { token } = useAuth();
  const queryClient = useQueryClient();
  const [congratsModalIsOpened, setCongratsModalIsOpened] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  useEffect(() => {
    if (congratsModalIsOpened) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [congratsModalIsOpened]);

  const { data, isError, isLoading } = useQuery({
    queryKey: ["cartData"],
    queryFn: () => getCartItems(token),
  });

  const {
    mutate: checkout,
    isPending: isCheckoutLoading,
    isError: isCheckoutError,
  } = useMutation({
    mutationFn: (formData: FieldValues) => cartCheckout(token, formData),
    onSuccess: (response) => {
      if (
        response.message === "Checkout successful. Thank you for your purchase!"
      ) {
        reset();
        setCongratsModalIsOpened(true);
        queryClient.invalidateQueries({ queryKey: ["cartData"] });
      }
    },
    onError: (error) => {
      console.error(error);
      alert("Checkout failed");
    },
  });

  const onSubmit: SubmitHandler<FieldValues> = (formData) => {
    checkout({
      name: formData.name,
      surname: formData.surname,
      email: formData.email,
      address: formData.address,
      zip_code: formData.zip_code,
    });
  };

  if (isLoading || isCheckoutLoading)
    return <div className="top-0 right-0 z-20 absolute">Is Loading</div>;
  if (isError || isCheckoutError)
    return (
      <div className="top-0 right-0 z-20 absolute">Error fetching data</div>
    );

  return (
    <div className="relative mt-18">
      <h1 className="mb-[42px] font-semibold text-[42px] text-Dark-blue">
        Checkout
      </h1>
      <form onSubmit={handleSubmit(onSubmit)} className="flex justify-between">
        <CheckoutForm register={register} errors={errors} />
        <CheckoutCartView data={data} token={token} />
      </form>
      {congratsModalIsOpened && (
        <CongratsModal setCongratsModalIsOpened={setCongratsModalIsOpened} />
      )}
    </div>
  );
};

export default CheckOutPage;
