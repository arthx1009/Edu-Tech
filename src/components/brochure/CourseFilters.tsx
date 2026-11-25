type CourseFiltersProps = {
  categories: Array<{ name: string; count: number }>;
  selectedCategory: string;
  onSelect: (category: string) => void;
};

export default function CourseFilters({
  categories,
  selectedCategory,
  onSelect,
}: CourseFiltersProps) {
  return (
    <div className="kids-category-filters" role="group" aria-label="Filter by category">
      <button
        className={selectedCategory === "all" ? "is-active" : ""}
        type="button"
        aria-pressed={selectedCategory === "all"}
        onClick={() => onSelect("all")}
      >
        All Categories <span>{categories.reduce((total, category) => total + category.count, 0)}</span>
      </button>
      {categories.map((category) => (
        <button
          className={selectedCategory === category.name ? "is-active" : ""}
          type="button"
          aria-pressed={selectedCategory === category.name}
          key={category.name}
          onClick={() => onSelect(category.name)}
        >
          {category.name} <span>{category.count}</span>
        </button>
      ))}
    </div>
  );
}
