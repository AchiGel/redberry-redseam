const HeadingFilterSection = ({
  filterIsOpened,
  setFilterIsOpened,
  setSortIsOpened,
}: {
  filterIsOpened: boolean;
  setFilterIsOpened: React.Dispatch<React.SetStateAction<boolean>>;
  setSortIsOpened: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  return (
    <div className="relative">
      <button
        onClick={() => {
          setSortIsOpened(false);
          setFilterIsOpened((prev) => !prev);
        }}
        className="flex items-center gap-2 cursor-pointer"
      >
        <img src="/images/adjustments-horizontal.svg" alt="" />
        <span className="text-Dark-blue">Filter</span>
      </button>
      {filterIsOpened && (
        <div className="top-[36.5px] right-[-16px] absolute flex flex-col gap-5 bg-white p-4 border border-Grey-2 rounded-lg">
          <h3 className="font-semibold text-Dark-blue text-base">
            Select price
          </h3>
          <div className="flex flex-col items-end gap-[10px]">
            <div className="flex items-center gap-[10px]">
              <input
                className="px-3 py-[10.5px] border border-Grey-2 rounded-lg"
                type="text"
                placeholder="From"
              />
              <input
                className="px-3 py-[10.5px] border border-Grey-2 rounded-lg"
                type="text"
                placeholder="To"
              />
            </div>
            <button className="bg-Red px-5 py-[10px] rounded-[10px] w-[124px] text-white text-sm cursor-pointer">
              Apply
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default HeadingFilterSection;
