import { useQuery } from "@tanstack/react-query";
import { useAuth } from "../../../hooks/useAuth";
import CheckoutCartView from "../components/CheckoutCartView";
import CheckoutForm from "../components/CheckoutForm";
import { cartCheckout, getCartItems } from "../../products/services/cartApi";
import { useForm, type FieldValues, type SubmitHandler } from "react-hook-form";
import { useEffect, useState } from "react";
import CongratsModal from "../components/CongratsModal";

const CheckOutPage = () => {
  const [congratsModalIsOpened, setCongratsModalIsOpened] = useState(false);
  const { token } = useAuth();

  const {
    register,
    handleSubmit,
    formState: { errors },
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

  if (isLoading)
    return <div className="top-0 right-0 z-20 absolute">Is Loading</div>;
  if (isError)
    return (
      <div className="top-0 right-0 z-20 absolute">Error fetching data</div>
    );

  const onSubmit: SubmitHandler<FieldValues> = async (formData) => {
    try {
      const response = await cartCheckout(token, {
        name: formData.name,
        surname: formData.surname,
        email: formData.email,
        address: formData.address,
        zip_code: formData.zip_code,
      });
      console.log(response);
    } catch (error) {
      console.error(error);
      alert("Checkout failed");
    } finally {
      setCongratsModalIsOpened((prev) => !prev);
    }
  };

  return (
    <div className="relative mt-18">
      <h1 className="mb-[42px] font-semibold text-[42px] text-Dark-blue">
        Checkout
      </h1>
      <form onSubmit={handleSubmit(onSubmit)} className="flex justify-between">
        <CheckoutForm register={register} errors={errors} />
        <CheckoutCartView data={data} />
      </form>
      {congratsModalIsOpened && (
        <CongratsModal setCongratsModalIsOpened={setCongratsModalIsOpened} />
      )}
    </div>
  );
};

export default CheckOutPage;
