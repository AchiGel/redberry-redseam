import { useNavigate } from "react-router-dom";

const CongratsModal = ({
  setCongratsModalIsOpened,
}: {
  setCongratsModalIsOpened: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const navigate = useNavigate();
  return (
    <div
      onClick={() => {
        setCongratsModalIsOpened(false);
        navigate("/");
      }}
      className="top-0 right-0 bottom-0 left-0 absolute flex justify-center items-center bg-Dark-blue/30 min-w-screen h-screen"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="flex flex-col bg-white p-[30px] w-[876px] h-[590px]"
      >
        <button
          onClick={() => {
            setCongratsModalIsOpened(false);
            navigate("/");
          }}
          className="self-end cursor-pointer"
        >
          <img src="/images/close.svg" alt="" />
        </button>
        <div className="flex flex-col flex-1 justify-center items-center">
          <div className="flex flex-col items-center mb-[74px]">
            <img className="mb-10" src="/images/congrats.svg" alt="" />
            <h2 className="mb-4 font-semibold text-[42px] text-Dark-blue">
              Congrats!
            </h2>
            <p className="text-Dark-blue-2 text-sm">
              Your order is placed successfully!
            </p>
          </div>
          <button
            onClick={() => navigate("/")}
            className="bg-Red px-5 py-4 rounded-[10px] w-[214px] text-white text-sm cursor-pointer"
          >
            Continue shopping
          </button>
        </div>
      </div>
    </div>
  );
};

export default CongratsModal;
