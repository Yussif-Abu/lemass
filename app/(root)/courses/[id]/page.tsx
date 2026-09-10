import Link from "next/link";
import {
  Download,
  FileText,
  MessageSquareText,
  BookOpen,
  CalendarDays,
  ChevronDown,
  CircleCheckBig,
  Circle,
  UserRound,
} from "lucide-react";
import { courseLectures, courses } from "../../../constants";

type CourseDetailsPageProps = {
  params: Promise<{ id: string }>;
};

const CourseDetails = async ({ params }: CourseDetailsPageProps) => {
  const { id } = await params;
  const course = courses.find((item) => item.id === Number(id));

  if (!course) {
    return (
      <div className="card mt-2 p-6">
        <p className="text-lg font-semibold text-slate-900">
          Course not found.
        </p>
        <Link
          href="/courses"
          className="mt-4 inline-block text-sm font-medium text-[#0f4ed8]"
        >
          Back to courses
        </Link>
      </div>
    );
  }

  const lectures = courseLectures.filter(
    (lecture) => lecture.courseId === course.id,
  );

  const completedLessons = lectures
    .filter((lecture) => lecture.completed)
    .reduce((total, lecture) => total + lecture.lessons, 0);
  const totalLessons = lectures.reduce(
    (total, lecture) => total + lecture.lessons,
    0,
  );


  return (
    <div className="space-y-4">
      <div className="rounded-[20px] bg-gradient-to-r from-[#0d5db5] via-[#0d7db4] to-[#0a5c82] px-5 py-5 text-white shadow-sm">
        <div className="inline-flex rounded-md bg-white/10 px-2.5 py-1 text-[11px] font-semibold uppercase tracking-[0.12em] text-white/90">
          {course.code}
        </div>

        <h1 className="mt-3 text-3xl font-bold text-white">{course.title}</h1>
        <p className="mt-2 max-w-3xl text-sm leading-6 text-sky-100">
          {course.description}
        </p>

        <div className="mt-4 flex flex-wrap items-center gap-5 text-sm text-sky-100">
          <div className="flex items-center gap-2">
            <UserRound className="h-4 w-4" />
            <span>{course.lecturer}</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="rounded-full bg-white/10 px-2 py-0.5 text-[11px] font-medium text-white">
              {course.credits} Credits
            </span>
          </div>
          <div className="flex items-center gap-2">
            <CalendarDays className="h-4 w-4" />
            <span>Jan 2026</span>
          </div>
        </div>
      </div>

      <div className="grid gap-5 xl:grid-cols-[1.7fr_0.9fr]">
        <div className="card overflow-hidden">
          <div className="space-y-3 p-4">
            {lectures.map((lecture) => (
              <div
                key={lecture.id}
                className="overflow-hidden rounded-xl border border-slate-200 bg-[#f8fafc]"
              >
                <div className="flex items-center justify-between gap-3 px-4 py-3">
                  <div className="flex items-center gap-3">
                    <div className="flex h-7 w-7 items-center justify-center rounded-full bg-emerald-100 text-emerald-700">
                      {lecture.completed ? (
                        <CircleCheckBig className="h-4 w-4" />
                      ) : (
                        <Circle className="h-4 w-4" />
                      )}
                    </div>

                    <div>
                      <h3 className="text-[15px] font-semibold text-slate-900">
                        {lecture.week} - {lecture.title}
                      </h3>
                      <p className="text-xs text-slate-500">
                        {lecture.lessons} lessons • {lecture.overview}
                      </p>
                    </div>
                  </div>

                  <button className="flex h-8 w-8 items-center justify-center rounded-md border border-slate-200 bg-slate-50 text-slate-600 hover:bg-slate-100">
                    <ChevronDown className="h-4 w-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

      <aside className="space-y-4">
        <div className="card p-4">
          <div className="mb-3 flex items-center gap-2 text-base font-semibold text-slate-900">
            <Download className="h-4 w-4 text-slate-700" />
            Course Resources
          </div>

          <div className="space-y-2">
            {lectures[0]?.materials.map((material) => (
              <button
                key={material.id}
                type="button"
                className="flex w-full items-center justify-between rounded-lg border border-slate-200 bg-slate-50 px-3 py-2 text-left transition hover:bg-slate-100"
              >
                <div className="flex items-center gap-2 text-sm text-slate-700">
                  <FileText className="h-4 w-4 text-slate-500" />
                  <span>{material.name}</span>
                </div>
                <Download className="h-4 w-4 text-slate-500" />
              </button>
            ))}
          </div>
        </div>

        <div className="card p-4">
          <div className="mb-3 flex items-center gap-2 text-base font-semibold text-slate-900">
            <BookOpen className="h-4 w-4 text-slate-700" />
            Instructor
          </div>

          <div className="flex items-center gap-3 rounded-lg border border-slate-200 bg-slate-50 p-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-200 text-sm font-semibold text-slate-700">
              {course.lecturer
                .split(" ")
                .map((part) => part[0])
                .slice(0, 2)
                .join("")
                .toUpperCase()}
            </div>
            <div>
              <p className="font-semibold text-slate-900">{course.lecturer}</p>
              <p className="text-xs text-slate-500">Course Instructor</p>
            </div>
          </div>

          <button className="mt-3 w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm font-medium text-slate-700 transition hover:bg-slate-50">
            Contact Instructor
          </button>
        </div>

        <div className="card p-4">
          <div className="mb-3 flex items-center gap-2 text-base font-semibold text-slate-900">
            <MessageSquareText className="h-4 w-4 text-slate-700" />
            Course Community
          </div>

          <div className="space-y-2 text-sm">
            <button className="flex w-full items-center justify-between rounded-lg border border-slate-200 bg-slate-50 px-3 py-2 text-left text-slate-700 hover:bg-slate-100">
              <span>WhatsApp Group</span>
              <Download className="h-4 w-4 text-slate-500" />
            </button>
            <button className="flex w-full items-center justify-between rounded-lg border border-slate-200 bg-slate-50 px-3 py-2 text-left text-slate-700 hover:bg-slate-100">
              <span>Telegram Channel</span>
              <Download className="h-4 w-4 text-slate-500" />
            </button>
            <button className="flex w-full items-center justify-between rounded-lg border border-slate-200 bg-slate-50 px-3 py-2 text-left text-slate-700 hover:bg-slate-100">
              <span>Discord Server</span>
              <Download className="h-4 w-4 text-slate-500" />
            </button>
          </div>
        </div>
      </aside>
    </div></div>
  );
};

export default CourseDetails;
