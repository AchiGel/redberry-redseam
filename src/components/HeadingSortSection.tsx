const HeadingSortSection = ({
  setFilterIsOpened,
  sortIsOpened,
  setSortIsOpened,
  setSort,
}: {
  setFilterIsOpened: React.Dispatch<React.SetStateAction<boolean>>;
  sortIsOpened: boolean;
  setSortIsOpened: React.Dispatch<React.SetStateAction<boolean>>;
  setSort: (newSort: string | undefined) => void;
}) => {
  const handleSelect = (value: string) => {
    setSort(value);
    setSortIsOpened(false);
  };
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
            <button className="py-2 text-Dark-blue">New products first</button>
            <button
              onClick={() => handleSelect("price")}
              className="py-2 text-Dark-blue"
            >
              Price, low to high
            </button>
            <button
              onClick={() => handleSelect("-price")}
              className="py-2 text-Dark-blue"
            >
              Price, high to low
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default HeadingSortSection;
