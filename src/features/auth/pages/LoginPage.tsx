import { Link } from "react-router-dom";

const LoginPage = () => {
  return (
    <div className="flex flex-col mr-[245px] ml-[173px] w-full">
      <h1 className="mb-12 font-semibold text-[#10151F] text-[42px]">Log in</h1>
      <form className="flex flex-col gap-[46px] mb-6">
        <div className="flex flex-col gap-6">
          <input type="text" placeholder="Email of username" />
          <input type="text" placeholder="Password" />
        </div>

        <button className="bg-[#FF4000] px-5 py-[10px] rounded-[10px] text-white text-sm">
          Log in
        </button>
      </form>
      <span className="flex items-center gap-2 text-[#3E424A] text-sm">
        Not a member?
        <Link className="font-medium text-[#FF4000]" to={"/register"}>
          Register
        </Link>
      </span>
    </div>
  );
};

export default LoginPage;
