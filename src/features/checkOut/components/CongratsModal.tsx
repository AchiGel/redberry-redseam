const CongratsModal = ({
  setCongratsModalIsOpened,
}: {
  setCongratsModalIsOpened: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  return (
    <div
      onClick={() => setCongratsModalIsOpened(false)}
      className="top-0 -right-25 -bottom-50 -left-25 absolute flex justify-center items-center bg-Dark-blue/30 min-w-screen min-h-screen"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="flex flex-col bg-white p-[30px] w-[876px] h-[590px]"
      >
        <button
          onClick={() => setCongratsModalIsOpened(false)}
          className="self-end cursor-pointer"
        >
          <img src="/images/close.svg" alt="" />
        </button>
        <div className="flex flex-col items-center">
          <div className="flex flex-col items-center mb-[74px]">
            <img className="mb-10" src="/images/congrats.svg" alt="" />
            <h2 className="mb-4 font-semibold text-[42px] text-Dark-blue">
              Congrats!
            </h2>
            <p className="text-Dark-blue-2 text-sm">
              Your order is placed successfully!
            </p>
          </div>
          <button className="bg-Red px-5 py-4 rounded-[10px] w-[214px] text-white text-sm cursor-pointer">
            Continue shopping
          </button>
        </div>
      </div>
    </div>
  );
};

export default CongratsModal;
