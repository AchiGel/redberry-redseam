import { Link, useNavigate } from "react-router-dom";
import AuthButton from "../../../components/AuthButton";
import { useState } from "react";
import { useAuth } from "../../../hooks/useAuth";
import { loginApi } from "../services/authApi";
import { useForm, type FieldValues, type SubmitHandler } from "react-hook-form";

const LoginPage = () => {
  const [isVisible, setIsVisible] = useState(false);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<FieldValues>();

  const { login } = useAuth();
  const navigate = useNavigate();

  const email = watch("email");
  const password = watch("password");

  const onSubmit: SubmitHandler<FieldValues> = async (formData) => {
    try {
      const data = await loginApi({
        email: formData.email,
        password: formData.password,
      });
      login(data.user, data.token);
      navigate("/");
    } catch (error) {
      console.error(error);
      alert(error);
    }
  };

  return (
    <div className="flex flex-col mr-[245px] ml-[173px] w-full">
      <h1 className="mb-12 font-semibold text-[42px] text-Dark-blue">Log in</h1>
      <form
        className="flex flex-col gap-[46px] mb-6"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="flex flex-col gap-6">
          {/* Email */}
          <div className="relative w-full">
            <label
              className={`absolute text-sm left-3 top-1/2 -translate-y-1/2 text-Dark-blue-2 pointer-events-none transition-all duration-200
          ${email ? "opacity-0" : "opacity-100"}`}
            >
              Email or username <span className="text-Red">*</span>
            </label>
            <input
              className={`px-3 py-[10.5px] border  rounded-lg w-full text-sm ${
                errors.email ? "border-Red" : "border-Grey-2"
              }`}
              type="text"
              {...register("email", {
                required: "Email is required",
                minLength: {
                  value: 3,
                  message: "Email must be at least 3 characters",
                },
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  message: "Enter a valid email address",
                },
              })}
            />
            {errors.email && (
              <p className="top-[46px] left-[6px] absolute font-light text-[10px] text-Red">
                {errors.email.message as string}
              </p>
            )}
          </div>
          {/* Password */}
          <div className="relative w-full">
            <label
              className={`absolute text-sm left-3 top-1/2 -translate-y-1/2 text-Dark-blue-2 pointer-events-none transition-all duration-200
          ${password ? "opacity-0" : "opacity-100"}`}
            >
              Password <span className="text-Red">*</span>
            </label>
            <input
              className={`px-3 py-[10.5px] border  rounded-lg w-full text-sm ${
                errors.password ? "border-Red" : "border-Grey-2"
              }`}
              type={`${isVisible ? "text" : "password"}`}
              {...register("password", {
                required: "Password is required",
                minLength: {
                  value: 3,
                  message: "Password must be at least 3 characters",
                },
              })}
            />
            <button
              type="button"
              onClick={(e) => {
                e.preventDefault();
                setIsVisible((prev) => !prev);
              }}
              className="top-1/2 right-0 absolute -translate-1/2"
            >
              <img src="/images/eye.svg" alt="" />
            </button>
            {errors.password && (
              <p className="top-[46px] left-[6px] absolute font-light text-[10px] text-Red">
                {errors.password.message as string}
              </p>
            )}
          </div>
        </div>

        <AuthButton buttonType="Log in" />
      </form>
      <span className="flex items-center self-center gap-2 text-Dark-blue-2 text-sm">
        Not a member?
        <Link className="font-medium text-Red" to={"/register"}>
          Register
        </Link>
      </span>
    </div>
  );
};

export default LoginPage;
