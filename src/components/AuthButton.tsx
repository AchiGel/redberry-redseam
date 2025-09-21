const AuthButton = ({ buttonType }: { buttonType: "Log in" | "Register" }) => {
  return (
    <button
      type="submit"
      className="bg-Red px-5 py-[10px] rounded-[10px] text-white text-sm cursor-pointer"
    >
      {buttonType}
    </button>
  );
};

export default AuthButton;
