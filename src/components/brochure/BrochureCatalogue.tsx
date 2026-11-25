import { useMemo, useState } from "react";
import type { BrochureCourse } from "../../data/brochureCourseTypes";
import { pathways } from "../../data/pathways";
import CourseCard from "./CourseCard";
import CourseFilters from "./CourseFilters";
import CoursePagination from "./CoursePagination";
import CourseSearch from "./CourseSearch";
import Navbar from "../Navbar";
import kyro from "../../assets/images/prof-kyro-learning.png";
import "../../styles/kids-brochures.css";

type BrochureCatalogueProps = {
  pathwayId: string;
  courses: BrochureCourse[];
};

const PAGE_SIZE = 12;
const CARD_ILLUSTRATIONS: Record<
  string,
  { src: string; tone: "kids" | "pro-kids" | "spark" | "pro-spark" | "future" | "professional" }
> = {
  kids: { src: "/assets/images/kids-learning-common.png", tone: "kids" },
  "pro-kids": { src: "/assets/images/pro-kids-common.png", tone: "pro-kids" },
  spark: { src: "/assets/images/spark-common.png", tone: "spark" },
  "pro-spark": { src: "/assets/images/pro-spark-common.png", tone: "pro-spark" },
  future: { src: "/assets/images/future-common.png", tone: "future" },
  professional: { src: "/assets/images/professional-common.png", tone: "professional" },
};

export default function BrochureCatalogue({ pathwayId, courses }: BrochureCatalogueProps) {
  const pathway = pathways.find((entry) => entry.id === pathwayId);
  if (!pathway) throw new Error(`Unknown brochure pathway: ${pathwayId}`);

  const [query, setQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [sortOrder, setSortOrder] = useState<"ascending" | "descending">("ascending");
  const [currentPage, setCurrentPage] = useState(1);

  const categories = useMemo(() => {
    const categoryCounts = new Map<string, number>();
    for (const course of courses) {
      categoryCounts.set(course.category, (categoryCounts.get(course.category) ?? 0) + 1);
    }
    return Array.from(categoryCounts, ([name, count]) => ({ name, count })).sort((a, b) =>
      a.name.localeCompare(b.name),
    );
  }, [courses]);

  const filteredCourses = useMemo(() => {
    const normalizedQuery = query.trim().toLocaleLowerCase();
    return courses
      .filter((course) => selectedCategory === "all" || course.category === selectedCategory)
      .filter((course) => course.title.toLocaleLowerCase().includes(normalizedQuery))
      .sort((first, second) => {
        const order = first.title.localeCompare(second.title);
        return sortOrder === "ascending" ? order : -order;
      });
  }, [courses, query, selectedCategory, sortOrder]);

  const pageCount = Math.ceil(filteredCourses.length / PAGE_SIZE);
  const visibleCourses = filteredCourses.slice((currentPage - 1) * PAGE_SIZE, currentPage * PAGE_SIZE);
  const heroDescription = pathway.id === "kids"
    ? `Explore ${courses.length} Kids course brochures across ${categories.length} learning categories, created for curious minds aged 5–8.`
    : `Explore ${courses.length} ${pathway.title} course brochures across ${categories.length} learning categories.`;
  const cardIllustration = CARD_ILLUSTRATIONS[pathway.id];

  function updateQuery(value: string) {
    setQuery(value);
    setCurrentPage(1);
  }

  function updateCategory(value: string) {
    setSelectedCategory(value);
    setCurrentPage(1);
  }

  function updateSortOrder(value: "ascending" | "descending") {
    setSortOrder(value);
    setCurrentPage(1);
  }

  return (
    <div className="kids-catalogue">
      <Navbar />
      <main>
        <section className="kids-catalogue-hero" aria-labelledby="kids-catalogue-title">
          <div className="kids-catalogue-hero__glow" aria-hidden="true" />
          <div className="kids-catalogue-container kids-catalogue-hero__content">
            <a className="kids-back-link" href="/#learning-pathways-section">
              <span aria-hidden="true">←</span> Back to Learning Pathways
            </a>
            <div className="kids-catalogue-hero__copy">
              <p className="kids-catalogue-eyebrow">
                <span aria-hidden="true" /> TARVYX LEARNING PATHWAYS
              </p>
              <h1 id="kids-catalogue-title">
                {pathway.title} Learning <span>Programmes</span>
              </h1>
              <span className="kids-age-badge">{pathway.age}</span>
              <p className="kids-catalogue-hero__description">{heroDescription}</p>
              <div className="kids-catalogue-stats" aria-label="Catalogue overview">
                <div>
                  <strong>{courses.length}</strong>
                  <span>Courses</span>
                </div>
                <div>
                  <strong>{categories.length}</strong>
                  <span>Categories</span>
                </div>
                <div className="kids-catalogue-stats__pdf">
                  <span className="kids-pdf-mark" aria-hidden="true">PDF</span>
                  <span>Course Brochures</span>
                </div>
              </div>
            </div>
            <div className="kids-catalogue-hero__mascot" aria-hidden="true">
              <span />
              <img src={kyro} alt="" />
            </div>
          </div>
          <div className="kids-catalogue-wave" aria-hidden="true" />
        </section>

        <section className="kids-courses-section" aria-labelledby="kids-courses-title">
          <div className="kids-catalogue-container">
            <header className="kids-courses-heading">
              <div>
                <p className="kids-catalogue-eyebrow">FIND YOUR NEXT ADVENTURE</p>
                <h2 id="kids-courses-title">Explore {pathway.title} Courses</h2>
              </div>
              <p>{filteredCourses.length} brochures available</p>
            </header>

            <CourseFilters
              categories={categories}
              selectedCategory={selectedCategory}
              onSelect={updateCategory}
            />
            <CourseSearch
              query={query}
              sortOrder={sortOrder}
              onQueryChange={updateQuery}
              onSortChange={updateSortOrder}
            />

            {visibleCourses.length > 0 ? (
              <div className="kids-course-grid">
                {visibleCourses.map((course) => (
                  <CourseCard
                    key={course.sourcePath}
                    course={course}
                    pathwayTitle={pathway.title}
                    ageGroup={pathway.age}
                    illustration={cardIllustration?.src}
                    illustrationTone={cardIllustration?.tone}
                  />
                ))}
              </div>
            ) : (
              <p className="kids-courses-empty" role="status">
                No courses match your search. Try another course name or category.
              </p>
            )}

            <CoursePagination
              currentPage={currentPage}
              pageCount={pageCount}
              onPageChange={setCurrentPage}
            />
          </div>
        </section>
      </main>
    </div>
  );
}
