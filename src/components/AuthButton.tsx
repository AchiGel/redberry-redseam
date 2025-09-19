const AuthButton = ({ buttonType }: { buttonType: "Log in" | "Register" }) => {
  return (
    <button
      type="submit"
      className="bg-[#FF4000] px-5 py-[10px] rounded-[10px] text-white text-sm"
    >
      {buttonType}
    </button>
  );
};

export default AuthButton;
