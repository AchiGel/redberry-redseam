import type {
  FieldErrors,
  FieldValues,
  UseFormRegister,
} from "react-hook-form";

const CheckoutForm = ({
  register,
  errors,
}: {
  register: UseFormRegister<FieldValues>;
  errors: FieldErrors<FieldErrors>;
}) => {
  return (
    <section className="flex-1 bg-Grey mr-[131px] px-[47px] py-[72px] rounded-2xl">
      <h2 className="mb-[46px] font-medium text-[22px] text-Dark-blue-2">
        Order details
      </h2>
      <div className="gap-x-6 gap-y-[33px] grid grid-cols-2 w-[578px]">
        {/* Name input */}
        <div>
          <input
            className={`px-3 py-[10.5px] border bg-white  rounded-lg w-full text-sm ${
              errors.name ? "border-Red" : "border-Grey-2"
            }`}
            type="text"
            placeholder="Name"
            {...register("name", {
              required: "Name is required",
              minLength: {
                value: 2,
                message: "Name must be at least 2 characters",
              },
            })}
          />
          {errors.name && (
            <p className="font-light text-[10px] text-Red">
              {errors.name.message as string}
            </p>
          )}
        </div>
        {/* Surname input */}
        <div>
          <input
            className={`px-3 py-[10.5px] border bg-white  rounded-lg w-full text-sm ${
              errors.surname ? "border-Red" : "border-Grey-2"
            }`}
            type="text"
            placeholder="Surname"
            {...register("surname", {
              required: "Surname is required",
              minLength: {
                value: 2,
                message: "Surname must be at least 2 characters",
              },
            })}
          />
          {errors.surname && (
            <p className="font-light text-[10px] text-Red">
              {errors.surname.message as string}
            </p>
          )}
        </div>
        {/* Email Input */}
        <div className="relative col-span-2">
          <input
            className={`pl-[36px] pr-3 py-[10.5px] border bg-white  rounded-lg w-full text-sm ${
              errors.email ? "border-Red" : "border-Grey-2"
            }`}
            type="text"
            placeholder="Email"
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: "Enter a valid email address",
              },
            })}
          />
          <img
            className="top-1/2 left-3 absolute -translate-y-1/2"
            src="/images/envelope.svg"
            alt="envelope"
          />
          {errors.email && (
            <p className="top-[46px] left-0 absolute font-light text-[10px] text-Red">
              {errors.email.message as string}
            </p>
          )}
        </div>
        {/* Address input */}
        <div>
          <input
            className={`px-3 py-[10.5px] border bg-white  rounded-lg w-full text-sm ${
              errors.address ? "border-Red" : "border-Grey-2"
            }`}
            type="text"
            placeholder="Address"
            {...register("address", {
              required: "Address is required",
              minLength: {
                value: 5,
                message: "Address must be at least 5 characters",
              },
            })}
          />
          {errors.address && (
            <p className="font-light text-[10px] text-Red">
              {errors.address.message as string}
            </p>
          )}
        </div>
        {/* Zip code input */}
        <div>
          <input
            className={`px-3 py-[10.5px] border bg-white  rounded-lg w-full text-sm ${
              errors.zip_code ? "border-Red" : "border-Grey-2"
            }`}
            type="text"
            placeholder="Zip code"
            {...register("zip_code", {
              required: "Zip code is required",
              pattern: {
                value: /^[0-9]{4}$/,
                message: "Zip code must be exactly 4 digits",
              },
            })}
          />
          {errors.zip_code && (
            <p className="font-light text-[10px] text-Red">
              {errors.zip_code.message as string}
            </p>
          )}
        </div>
      </div>
    </section>
  );
};

export default CheckoutForm;
