import Link from "next/link";
import { GraduationCap, ListChecks } from "lucide-react";

import type { Course } from "../constants/courses";

type CourseCardProps = {
  course: Course;
  progress: number;
  variant?: number;
  href?: string;
};

const CourseCard = ({ course, progress, variant = 0, href }: CourseCardProps) => (
  <article className={`my-course-card my-course-card-${variant % 3}`}>
    <div className="my-course-card-topline">
      <span>{course.code}</span>
      <span>{course.credits} Credits</span>
    </div>
    <h3>{course.title}</h3>
    <p>{course.description}</p>
    <div className="my-course-card-meta">
      <span>
        <GraduationCap size={13} aria-hidden="true" /> {course.lecturer}
      </span>
      <span>
        <ListChecks size={13} aria-hidden="true" /> {course.completion}
      </span>
    </div>
    <div className="course-progress-label">
      <span>Course progress</span>
      <strong>{progress}%</strong>
    </div>
    <div
      className="dashboard-progress course-progress"
      aria-label={`${progress}% course progress`}
    >
      <span style={{ width: `${progress}%` }} />
    </div>
    {href ? (
      <Link href={href} className="continue-course-button block text-center">
        Continue Learning
      </Link>
    ) : (
      <button type="button" className="continue-course-button">
        Continue Learning
      </button>
    )}
  </article>
);

export default CourseCard;
