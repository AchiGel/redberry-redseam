const HeadingSortSection = ({
  setFilterIsOpened,
  sortIsOpened,
  setSortIsOpened,
}: {
  setFilterIsOpened: React.Dispatch<React.SetStateAction<boolean>>;
  sortIsOpened: boolean;
  setSortIsOpened: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  return (
    <div className="relative">
      <button
        onClick={() => {
          setFilterIsOpened(false);
          setSortIsOpened((prev) => !prev);
        }}
        className="flex items-center gap-1 cursor-pointer"
      >
        <span className="text-Dark-blue">Sort by</span>
        <img
          src="/images/chevron-down.svg"
          alt=""
          className={`${sortIsOpened ? "rotate-180" : "rotate-0"}`}
        />
      </button>
      {sortIsOpened && (
        <div className="top-[36.5px] right-0 absolute flex flex-col gap-2 bg-white p-4 border border-Grey-2 rounded-lg w-[223px]">
          <h3 className="font-semibold text-Dark-blue text-base">Sort by</h3>
          <div className="flex flex-col">
            <span className="py-2 text-Dark-blue">New products first</span>
            <span className="py-2 text-Dark-blue">Price, low to high</span>
            <span className="py-2 text-Dark-blue">Price, high to low</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default HeadingSortSection;
