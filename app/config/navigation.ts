export type UserRole = "admin" | "student";

export type NavigationIcon =
  | "activity"
  | "bar-chart"
  | "bell"
  | "book-open"
  | "calendar"
  | "check-circle"
  | "clock"
  | "cpu"
  | "credit-card"
  | "file-text"
  | "graduation-cap"
  | "layers"
  | "layout-dashboard"
  | "log-out"
  | "message-square"
  | "monitor"
  | "settings"
  | "shield-check"
  | "sparkles"
  | "user-check"
  | "users";

export type NavigationItem = {
  title: string;
  href: string;
  icon: NavigationIcon;
  badge?: number;
};

export type SidebarNavigation = {
  main: NavigationItem[];
  bottom: NavigationItem[];
};

export const STUDENT_SIDEBAR: SidebarNavigation = {
  main: [
    { title: "Dashboard", href: "/", icon: "layout-dashboard" },
    { title: "My Courses", href: "/courses", icon: "book-open" },
    { title: "Assignments", href: "/assignments", icon: "file-text" },
    { title: "Grades", href: "/grades", icon: "graduation-cap" },
    { title: "E-Library", href: "/library", icon: "book-open" },
    { title: "Announcements", href: "/announcements", icon: "bell", badge: 3 },
    { title: "StudyMate AI", href: "/study-mate", icon: "sparkles" },
  ],
  bottom: [
    { title: "Settings", href: "/settings", icon: "settings" },
    { title: "Logout", href: "/login", icon: "log-out" },
  ],
};

export const ADMIN_SIDEBAR: SidebarNavigation = {
  main: [
    { title: "Dashboard", href: "/admin", icon: "layout-dashboard" },
    { title: "Course Management", href: "/admin/courses", icon: "book-open" },
    { title: "Faculty Management", href: "/admin/faculty", icon: "user-check" },
    { title: "Student Management", href: "/admin/students", icon: "users" },
    {
      title: "Timetable & Scheduling",
      href: "/admin/timetable",
      icon: "calendar",
    },
    {
      title: "Attendance Governance",
      href: "/admin/attendance",
      icon: "clock",
    },
    {
      title: "Eligibility Engine",
      href: "/admin/eligibility",
      icon: "shield-check",
    },
    { title: "Quiz Integrity", href: "/admin/integrity", icon: "layers" },
    { title: "Defaulter Engine", href: "/admin/defaulters", icon: "activity" },
    { title: "Notice Management", href: "/admin/notices", icon: "bell" },
    {
      title: "Assignment Management",
      href: "/admin/assignments",
      icon: "check-circle",
    },
    { title: "Exam Management", href: "/admin/exams", icon: "graduation-cap" },
    { title: "ID Card Manager", href: "/admin/id-cards", icon: "credit-card" },
    { title: "AI Intelligence", href: "/admin/ai", icon: "cpu" },
    { title: "Report Management", href: "/admin/reports", icon: "bar-chart" },
    { title: "Social Management", href: "/admin/social", icon: "users" },
    {
      title: "Feedback & Chat",
      href: "/admin/feedback",
      icon: "message-square",
    },
    { title: "Online Teaching", href: "/admin/teaching", icon: "monitor" },
    {
      title: "Quarantine Management",
      href: "/admin/quarantine",
      icon: "shield-check",
    },
  ],
  bottom: [
    { title: "Settings", href: "/admin/settings", icon: "settings" },
    { title: "Logout", href: "/login", icon: "log-out" },
  ],
};

export function getSidebarNavigation(role: UserRole): SidebarNavigation {
  return role === "admin" ? ADMIN_SIDEBAR : STUDENT_SIDEBAR;
}
