import { Link } from "react-router-dom";
import AuthButton from "../../../components/AuthButton";

const RegisterPage = () => {
  return (
    <div className="flex flex-col mr-[245px] ml-[173px] w-full">
      <h1 className="mb-12 font-semibold text-[#10151F] text-[42px]">
        Registration
      </h1>
      <form className="flex flex-col gap-[46px] mb-6">
        <div>
          <input type="file" src="" alt="" />
        </div>

        <div className="flex flex-col gap-6">
          <input type="text" placeholder="Username" />
          <input type="text" placeholder="Email" />
          <input type="text" placeholder="Password" />
          <input type="text" placeholder="Confirm Password" />
        </div>

        <AuthButton type="Register" />
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
