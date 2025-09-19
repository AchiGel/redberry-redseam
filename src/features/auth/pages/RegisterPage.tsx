import { Link } from "react-router-dom";
import AuthButton from "../../../components/AuthButton";
import { useState } from "react";

const RegisterPage = () => {
  const [avatar, setAvatar] = useState("");
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(email, password, username, confirmPassword, avatar);
    setEmail("");
    setPassword("");
    setConfirmPassword("");
    setUsername("");
    setAvatar("");
  };

  return (
    <div className="flex flex-col mr-[245px] ml-[173px] w-full">
      <h1 className="mb-12 font-semibold text-[#10151F] text-[42px]">
        Registration
      </h1>
      <form className="flex flex-col gap-[46px] mb-6" onSubmit={handleSubmit}>
        <div>
          <input type="file" />
        </div>

        <div className="flex flex-col gap-6">
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            type="text"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="text"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <input
            type="text"
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </div>

        <AuthButton buttonType="Register" />
      </form>
      <span className="flex items-center self-center gap-2 text-[#3E424A] text-sm">
        Already member?
        <Link className="font-medium text-[#FF4000]" to={"/login"}>
          Log in
        </Link>
      </span>
    </div>
  );
};

export default RegisterPage;
