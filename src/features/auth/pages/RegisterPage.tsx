import { Link, useNavigate } from "react-router-dom";
import AuthButton from "../../../components/AuthButton";
import { useState } from "react";
import { registerApi } from "../services/authApi";
import AvatarUploader from "../components/AvatarUploader";
import { useForm, type FieldValues, type SubmitHandler } from "react-hook-form";
import type { ApiError } from "../../../types/types";

const RegisterPage = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [avatar, setAvatar] = useState<File | null>(null);
  const [avatarError, setAvatarError] = useState("");

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<FieldValues>();

  const navigate = useNavigate();

  const username = watch("username");
  const email = watch("email");
  const password = watch("password");
  const confirmPassword = watch("confirmPassword");

  const onSubmit: SubmitHandler<FieldValues> = async (formData) => {
    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    try {
      const data = await registerApi({
        avatar,
        email: formData.email,
        username: formData.username,
        password: formData.password,
        password_confirmation: formData.confirmPassword,
      });

      if (data) {
        navigate("/login");
      }
    } catch (error) {
      const err = error as ApiError;
      if (err.status === 422 && err.errors) {
        console.log("Validation errors:", err.errors);
        alert("Validation failed: " + JSON.stringify(err.errors));
      } else {
        console.error(error);
        alert(err.message || "Registration failed");
      }
    }
  };

  return (
    <div className="flex flex-col mr-[245px] ml-[173px] w-full">
      <h1 className="mb-12 font-semibold text-[42px] text-Dark-blue">
        Registration
      </h1>
      <form
        className="flex flex-col gap-[46px] mb-6"
        onSubmit={handleSubmit(onSubmit)}
      >
        {/* Avatar */}
        <AvatarUploader
          avatar={avatar}
          setAvatar={setAvatar}
          avatarError={avatarError}
          setAvatarError={setAvatarError}
        />

        <div className="flex flex-col gap-6">
          {/* Username */}
          <div className="relative w-full">
            <label
              className={`absolute text-sm left-3 top-1/2 -translate-y-1/2 text-Dark-blue-2 pointer-events-none transition-all duration-200
          ${username ? "opacity-0" : "opacity-100"}`}
            >
              username <span className="text-Red">*</span>
            </label>
            <input
              className={`px-3 py-[10.5px] border  rounded-lg w-full text-sm ${
                errors.username ? "border-Red" : "border-Grey-2"
              }`}
              type="text"
              {...register("username", {
                required: "Username is required",
                minLength: { value: 3, message: "At least 3 characters" },
              })}
            />
            {errors.username && (
              <p className="top-[46px] left-[6px] absolute font-light text-[10px] text-Red">
                {errors.username.message as string}
              </p>
            )}
          </div>
          {/* Email */}
          <div className="relative w-full">
            <label
              className={`absolute text-sm left-3 top-1/2 -translate-y-1/2 text-Dark-blue-2 pointer-events-none transition-all duration-200
          ${email ? "opacity-0" : "opacity-100"}`}
            >
              Email <span className="text-Red">*</span>
            </label>
            <input
              className={`px-3 py-[10.5px] border  rounded-lg w-full text-sm ${
                errors.email ? "border-Red" : "border-Grey-2"
              }`}
              type="text"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  message: "Enter a valid email",
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
                minLength: { value: 3, message: "At least 3 characters" },
              })}
            />
            <button
              type="button"
              onClick={(e) => {
                e.preventDefault();
                setIsVisible((prev) => !prev);
              }}
              className="top-1/2 right-0 absolute -translate-1/2 cursor-pointer"
            >
              <img src="/images/eye.svg" alt="" />
            </button>
            {errors.password && (
              <p className="top-[46px] left-[6px] absolute font-light text-[10px] text-Red">
                {errors.password.message as string}
              </p>
            )}
          </div>
          {/* Confirm password */}
          <div className="relative w-full">
            <label
              className={`absolute text-sm left-3 top-1/2 -translate-y-1/2 text-Dark-blue-2 pointer-events-none transition-all duration-200
          ${confirmPassword ? "opacity-0" : "opacity-100"}`}
            >
              Confirm password <span className="text-Red">*</span>
            </label>
            <input
              className={`px-3 py-[10.5px] border  rounded-lg w-full text-sm ${
                errors.confirmPassword ? "border-Red" : "border-Grey-2"
              }`}
              type={`${isVisible ? "text" : "password"}`}
              {...register("confirmPassword", {
                required: "Please confirm your password",
                validate: (value) =>
                  value === password || "Passwords do not match",
              })}
            />
            <button
              type="button"
              onClick={(e) => {
                e.preventDefault();
                setIsVisible((prev) => !prev);
              }}
              className="top-1/2 right-0 absolute -translate-1/2 cursor-pointer"
            >
              <img src="/images/eye.svg" alt="" />
            </button>
            {errors.confirmPassword && (
              <p className="top-[46px] left-[6px] absolute font-light text-[10px] text-Red">
                {errors.confirmPassword.message as string}
              </p>
            )}
          </div>
        </div>

        <AuthButton buttonType="Register" />
      </form>
      <span className="flex items-center self-center gap-2 text-Dark-blue-2 text-sm">
        Already member?
        <Link className="font-medium text-Red" to={"/login"}>
          Log in
        </Link>
      </span>
    </div>
  );
};

export default RegisterPage;
