import { CheckCircle2, FileText, Pencil, Trash2 } from "lucide-react";
import { courses } from "../../../constants";

const backlogCourses = courses.filter((course) => course.completion === "Backlog");
const completedCourses = courses.filter((course) => course.completion === "Completed");
const totalCredits = courses.reduce((total, course) => total + course.credits, 0);
const completedCredits = completedCourses.reduce(
  (total, course) => total + course.credits,
  0,
);
const completionPercentage = totalCredits
  ? Math.round((completedCredits / totalCredits) * 100)
  : 0;

const formatSemester = (year: string, semester: string) =>
  `${year.replace("Year ", "Yr ")}, ${semester.replace("Semester ", "Sem ")}`;

type CourseRowProps = {
  code: string;
  title: string;
  year: string;
  semester: string;
  completed?: boolean;
};

const CourseRow = ({
  code,
  title,
  year,
  semester,
  completed = false,
}: CourseRowProps) => (
  <div className="flex items-center gap-2 rounded-[9px] bg-slate-100 px-3 py-2.5">
    {completed ? (
      <CheckCircle2 className="h-3.5 w-3.5 shrink-0 text-emerald-500" aria-hidden="true" />
    ) : (
      <FileText className="h-3.5 w-3.5 shrink-0 text-blue-700" aria-hidden="true" />
    )}

    <div className="min-w-0 flex-1">
      <p className="truncate text-[11px] font-medium leading-4 text-slate-900">
        {code} - {title}
      </p>
      <span
        className={`mt-0.5 inline-flex rounded-full px-2 py-0.5 text-[9px] leading-none ${
          completed
            ? "bg-emerald-100 text-emerald-700"
            : "bg-slate-200 text-slate-600"
        }`}
      >
        {formatSemester(year, semester)}
      </span>
    </div>

    <div className="flex shrink-0 items-center gap-2">
      <button
        type="button"
        aria-label={`Edit ${code}`}
        className="text-emerald-500 transition-colors hover:text-emerald-700"
      >
        <Pencil className="h-3.5 w-3.5" aria-hidden="true" />
      </button>
      <button
        type="button"
        aria-label={`Delete ${code}`}
        className="text-red-500 transition-colors hover:text-red-700"
      >
        <Trash2 className="h-3.5 w-3.5" aria-hidden="true" />
      </button>
    </div>
  </div>
);

const Backlogs = () => {
  return (
    <div className="page-container flex flex-col gap-4">
      <section className="rounded-[10px] border border-slate-200 bg-white px-4 py-3 shadow-[0_5px_15px_rgba(15,23,42,0.12)]">
        <div className="flex items-end justify-between gap-3">
          <div>
            <h1 className="text-[11px] font-semibold text-slate-900">
              Graduation Progress
            </h1>
            <p className="text-[10px] text-slate-600">
              {completedCredits} / {totalCredits} credits completed
            </p>
          </div>
          <span className="text-[10px] font-semibold text-slate-900">
            {completionPercentage}%
          </span>
        </div>

        <div
          className="mt-1 h-1.5 overflow-hidden rounded-full bg-slate-300"
          role="progressbar"
          aria-label="Graduation progress"
          aria-valuemin={0}
          aria-valuemax={100}
          aria-valuenow={completionPercentage}
        >
          <div
            className="h-full rounded-full bg-blue-800 transition-[width]"
            style={{ width: `${completionPercentage}%` }}
          />
        </div>

        <div className="mt-2 grid grid-cols-2 gap-2 text-center text-[10px]">
          <div className="rounded-[9px] bg-emerald-50 py-2 font-medium text-emerald-700">
            {completedCourses.length} completed
          </div>
          <div className="rounded-[9px] bg-amber-200/80 py-2 font-medium text-amber-700">
            {backlogCourses.length} Backlog
          </div>
        </div>
      </section>

      <section className="rounded-[10px] border border-slate-200 bg-white p-3 shadow-[0_1px_2px_rgba(15,23,42,0.12)]">
        <h2 className="mb-2 text-[10px] font-semibold text-slate-900">Backlog</h2>
        <div className="space-y-2">
          {backlogCourses.map((course) => (
            <CourseRow key={course.id} {...course} />
          ))}
        </div>
      </section>

      <section className="rounded-[10px] border border-slate-200 bg-white p-3 shadow-[0_1px_2px_rgba(15,23,42,0.12)]">
        <h2 className="mb-2 text-[10px] font-semibold text-slate-900">Completed</h2>
        <div className="space-y-2">
          {completedCourses.map((course) => (
            <CourseRow key={course.id} {...course} completed />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Backlogs;