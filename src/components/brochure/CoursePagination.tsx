type CoursePaginationProps = {
  currentPage: number;
  pageCount: number;
  onPageChange: (page: number) => void;
};

export default function CoursePagination({
  currentPage,
  pageCount,
  onPageChange,
}: CoursePaginationProps) {
  if (pageCount <= 1) return null;

  return (
    <nav className="kids-pagination" aria-label="Course pages">
      <button
        type="button"
        disabled={currentPage === 1}
        onClick={() => onPageChange(currentPage - 1)}
      >
        Previous
      </button>
      {Array.from({ length: pageCount }, (_, index) => index + 1).map((page) => (
        <button
          type="button"
          key={page}
          aria-current={page === currentPage ? "page" : undefined}
          className={page === currentPage ? "is-active" : ""}
          onClick={() => onPageChange(page)}
        >
          {page}
        </button>
      ))}
      <button
        type="button"
        disabled={currentPage === pageCount}
        onClick={() => onPageChange(currentPage + 1)}
      >
        Next
      </button>
    </nav>
  );
}
