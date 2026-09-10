const STUDENT_SIDEBAR_MAIN_NAV: NavItem[] = [
  { label: "Dashboard", href: "/", icon: "dashboard" },
  { label: "My Courses", href: "/courses", icon: "courses" },
  { label: "Assignments", href: "/assignments", icon: "assignments" },
  { label: "Grades", href: "/grades", icon: "grades" },
  { label: "Resources", href: "/resources", icon: "resources" },
  { label: "E-Library", href: "/library", icon: "library" },
  { label: "Discussions", href: "/discussions", icon: "discussions" },
  { label: "Announcements", href: "/announcements", icon: "announcements", badge: 3 },
  { label: "StudyMate AI", href: "/ai", icon: "ai" },
]

const STUDENT_SIDEBAR_BOTTOM_NAV: NavItem[] = [
  { label: "Settings", href: "/settings", icon: "settings" },
  { label: "Logout", href: "/logout", icon: "logout" },
]

const ADMIN_SIDEBAR_MAIN_NAV: NavItem[] = [
  { label: "Dashboard", href: "/dashboard/admin", icon: "home" },
  { label: "Course Management", href: "/admin/courses", icon: "courses" },
  { label: "Faculty Management", href: "admin/faculty", icon: "user-check" },
  { label: "Student Management", href: "admin/students", icon: "users" },
  { label: "Timetable & Scheduling", href: "admin/timetable", icon: "calendar" },
  { label: "Attendance Governance", href: "admin/attendance", icon: "clock" },
  { label: "Eligibility Engine", href: "/admin/eligibility", icon: "shield" },
  { label: "Quiz Integrity", href: "/admin/integrity", icon: "layers" },
  { label: "Defaulter Engine", href: "/admin/defaulters", icon: "activity" },
  { label: "Notice Management", href: "/admin/notices", icon: "bell" },
  { label: "Assignment Management", href: "/admin/assignments", icon: "assignments" },
  { label: "Exam Management", href: "/admin/exams", icon: "grades" },
  { label: "ID Card Manager", href: "/admin/id-cards", icon: "credit-card" },
  { label: "AI Intelligence", href: "/admin/ai", icon: "cpu" },
  { label: "Report Management", href: "/admin/reports", icon: "resources" },
  { label: "Social Management", href: "/admin/social", icon: "announcements" },
  { label: "Feedback & Chat", href: "/admin/feedback", icon: "discussions" },
  { label: "Online Teaching", href: "/admin/teaching", icon: "monitor" },
  { label: "Quarantine Management", href: "/admin/quarantine", icon: "shield" },
]

const ADMIN_SIDEBAR_BOTTOM_NAV: NavItem[] = [
  { label: "Settings", href: "/admin/settings", icon: "settings" },
  { label: "Logout", href: "/logout", icon: "logout" },
]
