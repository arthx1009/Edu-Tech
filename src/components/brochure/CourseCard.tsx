import type { BrochureCourse } from "../../data/brochureCourseTypes";

type CourseCardProps = {
  course: BrochureCourse;
  pathwayTitle: string;
  ageGroup: string;
  illustration?: string;
  illustrationTone?: "kids" | "pro-kids" | "spark" | "pro-spark" | "future" | "professional";
};

export default function CourseCard({
  course,
  pathwayTitle,
  ageGroup,
  illustration,
  illustrationTone,
}: CourseCardProps) {
  return (
    <article
      className={`kids-course-card${illustration ? ` kids-course-card--illustrated kids-course-card--illustrated-${illustrationTone}` : ""}`}
    >
      <span className="kids-course-card__accent" aria-hidden="true" />
      <div className="kids-course-card__body">
        <h3>{course.title}</h3>
        <span className="kids-course-card__age">{pathwayTitle} · {ageGroup}</span>
      </div>
      {illustration && (
        <img
          className="kids-course-card__illustration"
          src={illustration}
          alt=""
          loading="lazy"
          decoding="async"
        />
      )}
      {course.available ? (
        <div className="kids-course-card__actions">
          <a href={course.url} target="_blank" rel="noopener noreferrer">
            View Brochure
          </a>
          <a href={course.url} download={course.filename}>
            Download PDF
          </a>
        </div>
      ) : (
        <p className="kids-course-card__unavailable" role="status">
          Brochure unavailable
        </p>
      )}
    </article>
  );
}
