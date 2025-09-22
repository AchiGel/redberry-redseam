import { Link, useNavigate } from "react-router-dom";
import AuthButton from "../../../components/AuthButton";
import { useState } from "react";
import { registerApi } from "../services/authApi";

const RegisterPage = () => {
  const [avatar, setAvatar] = useState<File | null>(null);
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

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
        <div>
          <input
            type="file"
            onChange={(e) => {
              if (e.target.files?.[0]) {
                setAvatar(e.target.files[0]);
              }
            }}
          />
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
