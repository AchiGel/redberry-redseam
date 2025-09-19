type PaginationProps = {
  meta: {
    current_page: number;
    last_page: number;
  };
  onPageChange: (page: number) => void;
};

const Pagination = ({ meta, onPageChange }: PaginationProps) => {
  const { current_page, last_page } = meta;

  const pages = [];
  for (let i = 1; i <= last_page; i++) {
    pages.push(i);
  }

  return (
    <div className="flex justify-center gap-2">
      <button
        disabled={current_page === 1}
        onClick={() => onPageChange(current_page - 1)}
        className="disabled:opacity-45 cursor-pointer"
      >
        <img src="/images/back.svg" alt="" />
      </button>

      {pages.map((page) => (
        <button
          key={page}
          onClick={() => onPageChange(page)}
          className={`px-3 py-1 rounded ${
            page === current_page
              ? "border border-[#FF4000] text-[#FF4000] cursor-pointer"
              : "border border-[#F8F6F7] text-[#212B36]/60 cursor-pointer"
          }`}
        >
          {page}
        </button>
      ))}

      <button
        disabled={current_page === last_page}
        onClick={() => onPageChange(current_page + 1)}
        className="disabled:opacity-45 cursor-pointer"
      >
        <img src="/images/next.svg" alt="" />
      </button>
    </div>
  );
};

export default Pagination;
