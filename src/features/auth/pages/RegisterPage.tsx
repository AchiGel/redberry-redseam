import { Link, useNavigate } from "react-router-dom";
import AuthButton from "../../../components/AuthButton";
import { useRef, useState } from "react";
import { registerApi } from "../services/authApi";
import AvatarUploader from "../components/AvatarUploader";

const RegisterPage = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [avatar, setAvatar] = useState<File | null>(null);
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const inputRef = useRef<HTMLInputElement>(null);

  const isFocused = inputRef.current === document.activeElement;

  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    try {
      const data = await registerApi({
        avatar,
        email,
        username,
        password,
        password_confirmation: confirmPassword,
      });

      if (data) {
        navigate("/login");
      }
    } catch (error) {
      console.error(error);
      alert(error || "Registration failed");
    }
  };

  return (
    <div className="flex flex-col mr-[245px] ml-[173px] w-full">
      <h1 className="mb-12 font-semibold text-[42px] text-Dark-blue">
        Registration
      </h1>
      <form className="flex flex-col gap-[46px] mb-6" onSubmit={handleSubmit}>
        {/* Avatar */}
        <AvatarUploader avatar={avatar} setAvatar={setAvatar} />

        <div className="flex flex-col gap-6">
          {/* Username */}
          <div className="relative w-full">
            <label
              className={`absolute text-sm left-3 top-1/2 -translate-y-1/2 text-Dark-blue-2 pointer-events-none transition-all duration-200
          ${username || isFocused ? "opacity-0" : "opacity-100"}`}
            >
              username <span className="text-Red">*</span>
            </label>
            <input
              className="px-3 py-[10.5px] border border-Grey-2 rounded-lg w-full text-sm"
              type="text"
              value={email}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          {/* Email */}
          <div className="relative w-full">
            <label
              className={`absolute text-sm left-3 top-1/2 -translate-y-1/2 text-Dark-blue-2 pointer-events-none transition-all duration-200
          ${email || isFocused ? "opacity-0" : "opacity-100"}`}
            >
              Email <span className="text-Red">*</span>
            </label>
            <input
              className="px-3 py-[10.5px] border border-Grey-2 rounded-lg w-full text-sm"
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          {/* Password */}
          <div className="relative w-full">
            <label
              className={`absolute text-sm left-3 top-1/2 -translate-y-1/2 text-Dark-blue-2 pointer-events-none transition-all duration-200
          ${password || isFocused ? "opacity-0" : "opacity-100"}`}
            >
              Password <span className="text-Red">*</span>
            </label>
            <input
              className="py-[10.5px] pr-10 pl-3 border border-Grey-2 rounded-lg w-full text-sm"
              type={`${isVisible ? "text" : "password"}`}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
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
          </div>
          {/* Confirm password */}
          <div className="relative w-full">
            <label
              className={`absolute text-sm left-3 top-1/2 -translate-y-1/2 text-Dark-blue-2 pointer-events-none transition-all duration-200
          ${confirmPassword || isFocused ? "opacity-0" : "opacity-100"}`}
            >
              Confirm password <span className="text-Red">*</span>
            </label>
            <input
              className="py-[10.5px] pr-10 pl-3 border border-Grey-2 rounded-lg w-full text-sm"
              type={`${isVisible ? "text" : "password"}`}
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
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
