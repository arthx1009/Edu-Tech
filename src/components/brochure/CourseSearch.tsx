type CourseSearchProps = {
  query: string;
  sortOrder: "ascending" | "descending";
  onQueryChange: (value: string) => void;
  onSortChange: (value: "ascending" | "descending") => void;
};

export default function CourseSearch({
  query,
  sortOrder,
  onQueryChange,
  onSortChange,
}: CourseSearchProps) {
  return (
    <div className="kids-course-search">
      <label>
        <span>Search courses</span>
        <input
          type="search"
          value={query}
          onChange={(event) => onQueryChange(event.target.value)}
          placeholder="Search by course name"
        />
      </label>
      <label>
        <span>Sort by name</span>
        <select
          value={sortOrder}
          onChange={(event) =>
            onSortChange(event.target.value === "descending" ? "descending" : "ascending")
          }
        >
          <option value="ascending">A–Z</option>
          <option value="descending">Z–A</option>
        </select>
      </label>
    </div>
  );
}
