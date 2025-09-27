const FilterChip = ({
  label,
  onRemove,
}: {
  label: string;
  onRemove: () => void;
}) => {
  return (
    <div className="flex items-center self-start gap-[6px] py-2 pr-[10px] pl-4 border border-Grey-2 rounded-[50px] text-Dark-blue-2 text-sm">
      <span>{label}</span>
      <button
        onClick={onRemove}
        className="text-gray-500 hover:text-black cursor-pointer"
      >
        ✕
      </button>
    </div>
  );
};

export default FilterChip;
