"use client";

import { useMemo, useState } from "react";
import { CalendarDays, Check, Clock3, Search, ShoppingCart, Trash2 } from "lucide-react";
import Heading from "../../../components/Header";
import { courses } from "../../../constants";

type StudyMode = "Day" | "Evening" | "Weekend";
type Registration = { courseId: number; mode: StudyMode };

const scheduleByCourse: Record<number, { mode: StudyMode; days: string; time: string }> = {
  1: { mode: "Day", days: "Mon, Wed, Fri", time: "10:00 – 11:30" },
  2: { mode: "Evening", days: "Tue, Thu", time: "18:00 – 20:00" },
  3: { mode: "Weekend", days: "Sat", time: "08:00 – 12:00" },
  4: { mode: "Day", days: "Mon, Wed", time: "13:00 – 14:30" },
  5: { mode: "Evening", days: "Tue, Thu", time: "17:00 – 19:00" },
  6: { mode: "Weekend", days: "Sat", time: "13:00 – 17:00" },
  7: { mode: "Day", days: "Mon, Wed, Fri", time: "15:00 – 16:30" },
  8: { mode: "Evening", days: "Tue, Thu", time: "18:00 – 20:00" },
  9: { mode: "Day", days: "Mon, Wed", time: "09:00 – 10:30" },
  10: { mode: "Weekend", days: "Sat", time: "09:00 – 13:00" },
  11: { mode: "Evening", days: "Tue, Thu", time: "16:00 – 18:00" },
  12: { mode: "Day", days: "Mon, Wed, Fri", time: "11:00 – 12:30" },
  13: { mode: "Weekend", days: "Sat", time: "10:00 – 14:00" },
  14: { mode: "Day", days: "Mon, Wed", time: "14:00 – 15:30" },
  15: { mode: "Evening", days: "Tue, Thu", time: "18:00 – 20:00" },
};

const MIN_CREDITS = 12;
const MAX_CREDITS = 18;
const levels = ["All Levels", "Year 1", "Year 2", "Year 3", "Year 4"];
const modes = ["All Modes", "Day", "Evening", "Weekend"];

function modeClass(mode: StudyMode) {
  if (mode === "Evening") return "registration-mode registration-mode-evening";
  if (mode === "Weekend") return "registration-mode registration-mode-weekend";
  return "registration-mode registration-mode-day";
}

export default function RegisterCourses() {
  const [query, setQuery] = useState("");
  const [department, setDepartment] = useState("All Departments");
  const [level, setLevel] = useState("All Levels");
  const [mode, setMode] = useState("All Modes");
  const [registrations, setRegistrations] = useState<Registration[]>([]);
  const [notice, setNotice] = useState("");

  const availableCourses = useMemo(() => courses.filter((course) => course.status === "Active"), []);
  const filteredCourses = availableCourses.filter((course) => {
    const schedule = scheduleByCourse[course.id];
    const searchText = `${course.code} ${course.title} ${course.lecturer}`.toLowerCase();
    return searchText.includes(query.trim().toLowerCase()) &&
      (level === "All Levels" || course.year === level) &&
      (department === "All Departments" || course.program === department) &&
      (mode === "All Modes" || schedule.mode === mode);
  });
  const selectedCourses = registrations.flatMap((registration) => {
    const course = courses.find((item) => item.id === registration.courseId);
    return course ? [{ ...course, mode: registration.mode }] : [];
  });
  const currentCredits = selectedCourses.reduce((total, course) => total + course.credits, 0);

  const toggleCourse = (courseId: number) => {
    setNotice("");
    setRegistrations((current) => current.some((item) => item.courseId === courseId)
      ? current.filter((item) => item.courseId !== courseId)
      : [...current, { courseId, mode: scheduleByCourse[courseId].mode }]);
  };

  const clearSelection = () => {
    setRegistrations([]);
    setNotice("");
  };

  const confirmRegistration = () => {
    if (currentCredits < MIN_CREDITS) {
      setNotice(`Select at least ${MIN_CREDITS} credits to confirm your registration.`);
      return;
    }
    if (currentCredits > MAX_CREDITS) {
      setNotice(`Your selection exceeds the ${MAX_CREDITS}-credit maximum.`);
      return;
    }
    setNotice("Registration confirmed successfully.");
  };

  return (
    <div className="registration-page">
      <Heading title="Course Registration" subtitle="Search available courses and build your semester schedule." />

      <div className="registration-layout mt-5">
          <section className="registration-course-panel">
            <header className="registration-panel-heading">
              <h2>Available Courses ({filteredCourses.length})</h2>
              <span>Showing {filteredCourses.length} of {availableCourses.length} courses</span>
            </header>
            <div className="registration-table-scroll">
              <table className="registration-table">
                <thead><tr><th>Code</th><th>Mode</th><th>Schedule</th><th>Lecturer</th><th>Credits</th><th>Action</th></tr></thead>
                <tbody>
                  {filteredCourses.map((course) => {
                    const schedule = scheduleByCourse[course.id];
                    const selected = registrations.some((item) => item.courseId === course.id);
                    return <tr key={course.id}>
                      <td>{course.code}</td>
                      {/* <td className="registration-title-cell">{course.title}</td> */}
                      {/* <td>{course.year.replace("Year ", "")}00</td> */}
                      <td><span className={modeClass(schedule.mode)}>{schedule.mode}</span></td>
                      <td><span className="registration-schedule"><CalendarDays size={15} />{schedule.days}<br /><Clock3 size={15} />{schedule.time}</span></td>
                      <td>{course.lecturer}</td>
                      <td>{course.credits}</td>
                      <td><button className={selected ? "registration-added-button" : "registration-add-button"} onClick={() => toggleCourse(course.id)}>
                        {selected ? <><Check size={16} /> Added</> : "Add"}
                      </button></td>
                    </tr>;
                  })}
                  {filteredCourses.length === 0 && <tr><td colSpan={8} className="registration-empty">No courses match your search. Try changing the filters.</td></tr>}
                </tbody>
              </table>
            </div>
          </section>

        <aside className="registration-sidebar">
          <section className="registration-summary-card">
            <header className="registration-summary-heading">
              <ShoppingCart size={20} aria-hidden="true" />
              <h2>My Registration ({selectedCourses.length})</h2>
              <span>Total Credits: {currentCredits}</span>
            </header>
            <div className="registration-selected-list">
              {selectedCourses.length === 0 ? <p className="registration-selection-empty">Add courses to start your registration.</p> : selectedCourses.map((course) => {
                const schedule = scheduleByCourse[course.id];
                return <article className="registration-selected-course" key={course.id}>
                  <div className="registration-selected-top"><div><strong>{course.code}</strong><p>{course.title}</p></div><span className={modeClass(course.mode)}>{course.mode}</span>
                    <button aria-label={`Remove ${course.code}`} onClick={() => toggleCourse(course.id)}><Trash2 size={17} /></button>
                  </div>
                  <div className="registration-selected-meta"><span><CalendarDays size={15} />{schedule.days}</span><span><Clock3 size={15} />{schedule.time}</span><span>{course.credits} credits</span></div>
                </article>;
              })}
            </div>
            <section className="registration-credit-summary">
              <h3>Credit Summary</h3>
              <div><span>Minimum Credits</span><strong>{MIN_CREDITS}</strong></div>
              <div><span>Maximum Credits</span><strong>{MAX_CREDITS}</strong></div>
              <div><span>Current Credits</span><strong>{currentCredits}</strong></div>
              <div className="registration-remaining"><span>Remaining Credits</span><strong>{Math.max(0, MAX_CREDITS - currentCredits)}</strong></div>
            </section>
            {notice && <p className={`registration-notice ${notice.startsWith("Registration") ? "registration-notice-success" : ""}`} role="status">{notice}</p>}
            <button className="registration-confirm-button" onClick={confirmRegistration}><Check size={18} />Confirm Registration</button>
            <button className="registration-clear-button" onClick={clearSelection}><Trash2 size={17} />Clear Selection</button>
          </section>
        </aside>
      </div>
    </div>
  );
}
