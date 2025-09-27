const HeadingSortSection = ({
  setFilterIsOpened,
  sortIsOpened,
  setSortIsOpened,
  setSort,
  sort,
}: {
  setFilterIsOpened: React.Dispatch<React.SetStateAction<boolean>>;
  sortIsOpened: boolean;
  setSortIsOpened: React.Dispatch<React.SetStateAction<boolean>>;
  setSort: (newSort: string | undefined) => void;
  sort: string | undefined;
}) => {
  const handleSelect = (value: string) => {
    setSort(value);
    setSortIsOpened(false);
  };

  const sortLabel =
    sort === "price"
      ? "Price, low to high"
      : sort === "-price"
      ? "Price, high to low"
      : sort === "created_at"
      ? "New products first"
      : "Sort by";

  return (
    <div className="relative">
      <button
        onClick={() => {
          setFilterIsOpened(false);
          setSortIsOpened((prev) => !prev);
        }}
        className="flex items-center gap-1 cursor-pointer"
      >
        <span className="text-Dark-blue">{sortLabel}</span>
        <img
          src="/images/chevron-down.svg"
          alt=""
          className={`${sortIsOpened ? "rotate-180" : "rotate-0"}`}
        />
      </button>
      {sortIsOpened && (
        <div className="top-[36.5px] right-0 absolute flex flex-col gap-2 bg-white p-4 border border-Grey-2 rounded-lg w-[223px]">
          <h3 className="font-semibold text-Dark-blue text-base">Sort by</h3>
          <div className="flex flex-col items-start">
            <button
              onClick={() => handleSelect("created_at")}
              className="py-2 text-Dark-blue cursor-pointer"
            >
              New products first
            </button>
            <button
              onClick={() => handleSelect("price")}
              className="py-2 text-Dark-blue cursor-pointer"
            >
              Price, low to high
            </button>
            <button
              onClick={() => handleSelect("-price")}
              className="py-2 text-Dark-blue cursor-pointer"
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
