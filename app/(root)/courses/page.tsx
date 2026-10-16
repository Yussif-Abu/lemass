"use client";

import { useState } from "react";

import CourseCard from "../../components/CourseCard";
import Heading from "../../components/Header";
import { courses } from "../../constants";

const levels = [
  { label: "Level 100", year: "Year 1" },
  { label: "Level 200", year: "Year 2" },
  { label: "Level 300", year: "Year 3" },
  { label: "Level 400", year: "Year 4" },
] as const;

const semesters = ["Semester 1", "Semester 2"] as const;

const Courses = () => {
  const [level, setLevel] = useState<(typeof levels)[number]["label"]>("Level 100");
  const [semester, setSemester] =
    useState<(typeof semesters)[number]>("Semester 1");

  const selectedYear = levels.find((option) => option.label === level)?.year;
  const visibleCourses = courses.filter(
    (course) => course.year === selectedYear && course.semester === semester,
  );

  return (
    <div className="space-y-6">
      <Heading
        title="My Courses"
        subtitle="Browse your courses by level and semester."
      />

      <section className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm sm:p-5">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h2 className="text-base font-semibold text-slate-900">
              Find a course
            </h2>
            <p className="mt-1 text-sm text-slate-500">
              Choose a level and semester to view its courses.
            </p>
          </div>

          <div className="grid gap-3 sm:grid-cols-2">
            <label className="flex flex-col gap-1.5 text-xs font-medium text-slate-600">
              Level
              <select
                className="min-w-40 rounded-lg border border-slate-200 bg-white px-3 py-2.5 text-sm text-slate-800 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                value={level}
                onChange={(event) =>
                  setLevel(event.target.value as (typeof levels)[number]["label"])
                }
              >
                {levels.map((option) => (
                  <option key={option.label} value={option.label}>
                    {option.label}
                  </option>
                ))}
              </select>
            </label>

            <label className="flex flex-col gap-1.5 text-xs font-medium text-slate-600">
              Semester
              <select
                className="min-w-40 rounded-lg border border-slate-200 bg-white px-3 py-2.5 text-sm text-slate-800 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                value={semester}
                onChange={(event) =>
                  setSemester(event.target.value as (typeof semesters)[number])
                }
              >
                {semesters.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            </label>
          </div>
        </div>
      </section>

      <section aria-live="polite">
        <div className="mb-3 flex items-center justify-between">
          <h2 className="text-lg font-semibold text-slate-900">
            {level} · {semester}
          </h2>
          <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-600">
            {visibleCourses.length} {visibleCourses.length === 1 ? "course" : "courses"}
          </span>
        </div>

        {visibleCourses.length > 0 ? (
          <div className="my-courses-grid">
            {visibleCourses.map((course, index) => (
              <CourseCard
                key={course.id}
                course={course}
                progress={course.completion === "Completed" ? 100 : 45}
                variant={index}
                href={`/courses/${course.id}`}
              />
            ))}
          </div>
        ) : (
          <div className="rounded-xl border border-dashed border-slate-300 bg-white px-5 py-12 text-center">
            <h3 className="font-semibold text-slate-800">No courses found</h3>
            <p className="mt-1 text-sm text-slate-500">
              There are no courses for {level}, {semester.toLowerCase()}.
            </p>
          </div>
        )}
      </section>
    </div>
  );
};

export default Courses;
