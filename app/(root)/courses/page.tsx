import Link from "next/link";
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

              <div className="space-y-3">
                {items.map((course) => (
                  <div
                    key={course.id}
                    className="rounded-md border border-slate-200 bg-slate-50 p-3"
                  >
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <Link
                          href={`/courses/${course.id}`}
                          className="text-[11px] font-semibold uppercase tracking-[0.12em] text-[#0f4ed8] transition hover:text-blue-700"
                        >
                          {course.code}
                        </Link>
                        <h5 className="mt-1 text-base font-semibold text-slate-900">
                          {course.title}
                        </h5>
                      </div>

                      <span className="rounded-full bg-emerald-50 px-2 py-1 text-[10px] font-medium text-emerald-700">
                        {course.status}
                      </span>
                    </div>

                    <p className="mt-2 text-sm leading-6 text-slate-600">
                      {course.description}
                    </p>

                    <div className="mt-3 flex flex-wrap gap-2 text-[11px] text-slate-500">
                      <span>{course.program}</span>
                      <span>•</span>
                      <span>{course.credits} credits</span>
                      <span>•</span>
                      <span>{course.lecturer}</span>
                    </div>
                  </div>
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
