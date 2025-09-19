const AuthButton = ({ type }: { type: "Log in" | "Register" }) => {
  return (
    <button className="bg-[#FF4000] px-5 py-[10px] rounded-[10px] text-white text-sm">
      {type}
    </button>
  );
};

export default AuthButton;
