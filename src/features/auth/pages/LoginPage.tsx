import { Link, useNavigate } from "react-router-dom";
import AuthButton from "../../../components/AuthButton";
import { useState } from "react";
import { useAuth } from "../../../hooks/useAuth";
import { loginApi } from "../services/authApi";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useAuth();
  const navigate = useNavigate();

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
      <h1 className="mb-12 font-semibold text-[#10151F] text-[42px]">Log in</h1>
      <form className="flex flex-col gap-[46px] mb-6" onSubmit={handleSubmit}>
        <div className="flex flex-col gap-6">
          <input
            type="text"
            placeholder="Email of username"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <AuthButton buttonType="Log in" />
      </form>
      <span className="flex items-center self-center gap-2 text-[#3E424A] text-sm">
        Not a member?
        <Link className="font-medium text-[#FF4000]" to={"/register"}>
          Register
        </Link>
      </span>
    </div>
  );
};

export default LoginPage;
