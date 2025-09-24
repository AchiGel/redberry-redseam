import { Link, useNavigate } from "react-router-dom";
import AuthButton from "../../../components/AuthButton";
import { useRef, useState } from "react";
import { useAuth } from "../../../hooks/useAuth";
import { loginApi } from "../services/authApi";

const LoginPage = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useAuth();
  const navigate = useNavigate();

  const inputRef = useRef<HTMLInputElement>(null);

  const isFocused = inputRef.current === document.activeElement;

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const data = await loginApi({ email, password });
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
      <form className="flex flex-col gap-[46px] mb-6" onSubmit={handleSubmit}>
        <div className="flex flex-col gap-6">
          <div className="relative w-full">
            <label
              className={`absolute text-sm left-3 top-1/2 -translate-y-1/2 text-Dark-blue-2 pointer-events-none transition-all duration-200
          ${email || isFocused ? "opacity-0" : "opacity-100"}`}
            >
              Email or username <span className="text-Red">*</span>
            </label>
            <input
              className="px-3 py-[10.5px] border border-Grey-2 rounded-lg w-full text-sm"
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

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
