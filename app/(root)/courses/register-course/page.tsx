import Heading from "../../../components/Header";
import { RadioGroup } from "../../../helper/Radio";
import { courses } from "../../../constants";

const scheduleOptions = [
  { label: "Day", value: "day" },
  { label: "Evening", value: "evening" },
  { label: "Weekends", value: "weekends" },
];

const yearOneSemesterOneCourses = courses.filter(
  (course) => course.year === "Year 1" && course.semester === "Semester 1",
);

const RegisterCourses = () => {
  return (
    <div className="card mt-2 flex flex-col gap-5 p-4">
      <Heading
        title="Register Courses"
        subtitle="Choose your preferred study schedule for each course."
      />

      <div className="overflow-hidden rounded-xl border border-slate-200 bg-slate-50">
        <div className="flex items-center justify-between border-b border-slate-200 bg-white px-4 py-3">
          <h2 className="text-base font-semibold text-slate-900">Year 1 - Semester 1</h2>
          <span className="rounded-full bg-slate-100 px-2.5 py-1 text-[11px] font-medium text-slate-600">
            {yearOneSemesterOneCourses.length} courses
          </span>
        </div>

        <div className="space-y-3 p-3">
          {yearOneSemesterOneCourses.map((course) => (
            <div
              key={course.id}
              className="flex items-center justify-between gap-4 rounded-lg border border-slate-200 bg-white p-3"
            >
              <div className="min-w-0 flex-1">
                <span className="text-base font-semibold uppercase tracking-[0.12em] text-[#0f4ed8]">
                  {course.code} -{course.title}
                </span>
              </div>

              <div className="w-[260px]">
                <RadioGroup
                  name={`course-schedule-${course.id}`}
                  options={scheduleOptions}
                  defaultValue="day"
                  orientation="horizontal"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RegisterCourses;
