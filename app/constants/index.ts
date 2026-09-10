import {
  BookOpen,
  Building2,
  GraduationCap,
  UserRound,
  Users,
  Wallet,
} from "lucide-react";

import type { StatItem } from "../components/ui/stat-grid";

export { students, type Student } from "./students";
export { courses, type Course } from "./courses";
export {
  courseLectures,
  type LectureMaterial,
  type LectureWeek,
} from "./lectures";
export { faculty, type Faculty, type FacultyStatus } from "./faculty";
export {
  timetable,
  type TimetableEntry,
  type TimetableStatus,
  type TimetableType,
} from "./timetable";
export {
  assignments,
  type Assignment,
  type AssignmentStatus,
} from "./assignments";
export {
  exams,
  type Exam,
  type ExamResultStatus,
  type ExamType,
} from "./exams";
export { results, type CourseResult } from "./results";
export {
  libraryResources,
  libraryStats,
  type LibraryResource,
  type LibraryResourceAccent,
  type LibraryResourceSource,
} from "./library";
export {
  announcementStats,
  announcements,
  type Announcement,
  type AnnouncementStat,
} from "./announcements";

export const dashboardStats: StatItem[] = [
  {
    title: "Students",
    value: 1248,
    description: "Across all campuses",
    icon: GraduationCap,
  },
  {
    title: "Teachers",
    value: 84,
    description: "Active teachers",
    icon: Users,
  },
  {
    title: "Campuses",
    value: 4,
    description: "Active campuses",
    icon: Building2,
  },
  {
    title: "Revenue",
    value: "GH₵86,450",
    description: "This term",
    icon: Wallet,
  },
  {
    title: "Courses",
    value: 32,
    description: "Active courses",
    icon: BookOpen,
  },
  {
    title: "Guardians",
    value: 986,
    description: "Registered guardians",
    icon: UserRound,
  },
];
