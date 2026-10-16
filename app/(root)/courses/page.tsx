import CourseCard from "../../components/CourseCard";
import Accordion from "../../components/accordion";
import Heading from "../../components/Header";
import { courses } from "../../constants";

const yearOrder = ["Year 1", "Year 2", "Year 3", "Year 4"] as const;
const semesterOrder = ["Semester 1", "Semester 2"] as const;

const coursesByYear = yearOrder.map((year) => ({
  year,
  semesters: semesterOrder.map((semester) => ({
    semester,
    items: courses.filter(
      (course) => course.year === year && course.semester === semester,
    ),
  })),
}));

const Courses = () => {
  const accordionItems = coursesByYear.map(({ year, semesters }) => ({
    id: year,
    header: (
      <div className="flex items-center justify-between gap-3">
        <span className="text-base font-semibold text-slate-900">{year}</span>
        <span className="rounded-full bg-slate-100 px-2.5 py-1 text-[11px] font-medium text-slate-600">
          {courses.filter((course) => course.year === year).length} courses
        </span>
      </div>
    ),
    content: (
      <div className="space-y-5">
        {semesters
          .filter(({ items }) => items.length > 0)
          .map(({ semester, items }) => (
            <div
              key={semester}
              className="rounded-lg border border-slate-200 bg-white p-3"
            >
              <h4 className="mb-3 text-xs font-semibold uppercase tracking-[0.14em] text-slate-500">
                {semester}
              </h4>
              <div className="my-courses-grid">
                {items.map((course, index) => (
                  <CourseCard
                    key={course.id}
                    course={course}
                    progress={course.completion === "Completed" ? 100 : 45}
                    variant={index}
                    href={`/courses/${course.id}`}
                  />
                ))}
              </div>
            </div>
          ))}
      </div>
    ),
  }));

  return (
    <div className="space-y-4">
      <Heading
        title="Courses"
        subtitle="Browse courses by year and semester."
      />
      <Accordion items={accordionItems} />
    </div>
  );
};

export default Courses;
