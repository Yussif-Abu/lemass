import {
  ArrowUpRight,
  Award,
  BookOpen,
  CalendarClock,
  CheckCircle2,
  CircleDollarSign,
  ClipboardCheck,
  Clock3,
  GraduationCap,
  Lightbulb,
  ListChecks,
  TrendingUp,
} from "lucide-react";

import StatsGrid, { type StatItem } from "../components/ui/stat-grid";
import { announcements, assignments, courses } from "../constants";

const dashboardStats: StatItem[] = [
  {
    title: "Enrolled Courses",
    value: 6,
    description: "This semester",
    icon: BookOpen,
  },
  {
    title: "Current GPA",
    value: "3.62",
    description: "Out of 4.0",
    icon: TrendingUp,
  },
  {
    title: "Pending Assignments",
    value: 3,
    description: "Due this week",
    icon: ClipboardCheck,
  },
  {
    title: "Average Grade",
    value: "87%",
    description: "Across all courses",
    icon: Award,
  },
];

const semesterOneCourses = courses.filter(
  (course) => course.year === "Year 1" && course.semester === "Semester 1",
);

const upcomingAssignments = assignments.slice(0, 4);
const recentAnnouncements = announcements.slice(0, 3);

const Home = () => {
  return (
    <section className="page-container ">
      <div className="student-dashboard-welcome">
        <div>
          <p className="student-dashboard-eyebrow">BS Information Systems</p>
          <h1>
            Welcome back, Abu! <span aria-hidden="true">&#128075;</span>
          </h1>
          <p>Here&apos;s what&apos;s happening with your learning today.</p>
        </div>
        <button type="button" className="dashboard-primary-action">
          Browse Courses
          <ArrowUpRight size={15} aria-hidden="true" />
        </button>
      </div>

      <StatsGrid stats={dashboardStats} />

      <div className="student-dashboard-balance dashboard-panel">
        <div className="student-dashboard-section-heading">
          <div>
            <h2>
              <CircleDollarSign size={15} aria-hidden="true" /> Fees Balance
            </h2>
            <p>Total Fees</p>
          </div>
          <span className="dashboard-amount">GHC 30,200</span>
        </div>
        <div className="student-dashboard-section-heading dashboard-balance-secondary">
          <span>Amount Paid</span>
          <strong>GHC 21,200</strong>
        </div>
        <div
          className="dashboard-progress"
          aria-label="70 percent of fees paid"
        >
          <span style={{ width: "70%" }} />
        </div>
        <div className="dashboard-balance-footer">
          <span>70% paid</span>
          <strong>Outstanding: GHC 9,000</strong>
        </div>
        <small>Payment deadline: March 15, 2026</small>
      </div>

      <div className="student-dashboard-content-grid">
        <div className="student-dashboard-main-column">
          <DashboardSectionHeading title="Upcoming Classes" action="View All" />
          <div className="upcoming-classes-list dashboard-panel">
            {semesterOneCourses.slice(0, 4).map((course, index) => (
              <article className="upcoming-class" key={course.id}>
                <div className={`class-time class-time-${index % 3}`}>
                  <span>{index % 2 === 0 ? "CS301" : "CS402"}</span>
                  <small>{index % 2 === 0 ? "10:00 AM" : "12:00 PM"}</small>
                </div>
                <div className="upcoming-class-copy">
                  <h3>{course.title}</h3>
                  <p>
                    {course.code} <span>•</span> {course.program}
                  </p>
                  <small>
                    Today, {index + 9}:00 AM - {index + 10}:00 AM
                  </small>
                </div>
                <button type="button" className="join-class-button">
                  Join
                </button>
              </article>
            ))}
          </div>

          <DashboardSectionHeading title="My Courses" action="View All" />
          <div className="my-courses-grid">
            {semesterOneCourses.map((course, index) => (
              <article
                className={`my-course-card my-course-card-${index % 3}`}
                key={course.id}
              >
                <div className="my-course-card-topline">
                  <span>{course.code}</span>
                  <span>{course.credits} Credits</span>
                </div>
                <h3>{course.title}</h3>
                <p>{course.description}</p>
                <div className="my-course-card-meta">
                  <span>
                    <GraduationCap size={13} aria-hidden="true" />{" "}
                    {course.lecturer}
                  </span>
                  <span>
                    <ListChecks size={13} aria-hidden="true" />{" "}
                    {course.completion}
                  </span>
                </div>
                <div className="course-progress-label">
                  <span>Course progress</span>
                  <strong>{index === 0 ? "66%" : "45%"}</strong>
                </div>
                <div className="dashboard-progress course-progress">
                  <span style={{ width: index === 0 ? "66%" : "45%" }} />
                </div>
                <button type="button" className="continue-course-button">
                  Continue Learning
                </button>
              </article>
            ))}
          </div>
        </div>

        <aside className="student-dashboard-side-column">
          <DashboardSectionHeading
            title="Upcoming Deadlines"
            action="View All"
          />
          <div className="dashboard-list-panel dashboard-panel">
            {upcomingAssignments.slice(0, 4).map((assignment) => (
              <div className="dashboard-list-item" key={assignment.id}>
                <span
                  className={`dashboard-list-icon deadline-${assignment.status.toLowerCase()}`}
                >
                  {assignment.status === "Submitted" ? (
                    <CheckCircle2 size={13} />
                  ) : (
                    <Clock3 size={13} />
                  )}
                </span>
                <div>
                  <h3>{assignment.assignment}</h3>
                  <p>
                    {assignment.courseCode} <span>•</span> Due{" "}
                    {assignment.deadline}
                  </p>
                </div>
                <span
                  className={`dashboard-status dashboard-status-${assignment.status.toLowerCase()}`}
                >
                  {assignment.status}
                </span>
              </div>
            ))}
          </div>

          <DashboardSectionHeading
            title="Recent Announcements"
            action="View All"
          />
          <div className="dashboard-list-panel dashboard-panel">
            {recentAnnouncements.map((announcement) => (
              <div
                className="dashboard-list-item announcement-list-item"
                key={announcement.id}
              >
                <span className="dashboard-list-icon announcement-list-icon">
                  <BellIcon />
                </span>
                <div>
                  <h3>{announcement.title}</h3>
                  <p>
                    {announcement.course} <span>•</span> {announcement.time}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </aside>
      </div>

      <div className="dashboard-insights dashboard-panel">
        <div className="student-dashboard-section-heading">
          <h2>
            <Lightbulb size={15} aria-hidden="true" /> AI Academic Insights
          </h2>
          <span className="dashboard-chip">Smart</span>
        </div>
        <div className="dashboard-insight-list">
          <p>
            Your attendance has dropped 12% in the last 3 weeks. Students with
            similar patterns scored 15% lower in exams.
          </p>
          <p>
            Recommended: Attend the next 3 classes to restore full eligibility
            for quizzes and tests.
          </p>
          <p>Your assignment average is 63% (203 submissions) in Year 1.</p>
        </div>
      </div>
    </section>
  );
};

const DashboardSectionHeading = ({
  title,
  action,
}: {
  title: string;
  action: string;
}) => (
  <div className="dashboard-section-heading">
    <h2>{title}</h2>
    <button type="button">{action}</button>
  </div>
);

const BellIcon = () => <CalendarClock size={13} aria-hidden="true" />;

export default Home;
