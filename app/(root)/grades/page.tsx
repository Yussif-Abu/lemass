import { Award, BookOpenCheck, CalendarDays, Download, GraduationCap, TrendingUp } from "lucide-react";

import Accordion from "../../components/accordion";
import Button from "../../components/Button";
import Heading from "../../components/Header";
import StatsGrid, { type StatItem } from "../../components/ui/stat-grid";
import { results } from "../../constants";

const gradesStats: StatItem[] = [
  { title: "Cumulative GPA", value: "3.90", description: "out of 4.0", icon: Award },
  { title: "Average Score", value: "92%", description: "across all courses", icon: TrendingUp },
  { title: "Total Credits", value: 62, description: "earned", icon: BookOpenCheck },
  { title: "Academic Years", value: 4, description: "completed", icon: GraduationCap },
];

const academicYears = [...new Set(results.map((result) => result.academicYear))];

const calculateGpa = (yearResults: typeof results) => {
  const totalPoints = yearResults.reduce((sum, result) => sum + result.points * result.credits, 0);
  const totalCredits = yearResults.reduce((sum, result) => sum + result.credits, 0);
  return (totalPoints / totalCredits).toFixed(2);
};

const scoreTone = (score: number) => score >= 80 ? "grade-score-high" : score >= 70 ? "grade-score-medium" : "grade-score-low";

const gradingScale = [
  { grade: "A+", range: "90-100", points: "4.0" },
  { grade: "A", range: "85-89", points: "3.7" },
  { grade: "A-", range: "80-84", points: "3.3" },
  { grade: "B+", range: "75-79", points: "3.0" },
  { grade: "B", range: "70-74", points: "2.7" },
  { grade: "B-", range: "65-69", points: "2.3" },
  { grade: "C+", range: "60-64", points: "2.0" },
  { grade: "D", range: "0-59", points: "0.0" },
];

const Grades = () => {
  const accordionItems = academicYears.map((academicYear) => {
    const yearResults = results.filter((result) => result.academicYear === academicYear);
    const semesters = [...new Set(yearResults.map((result) => result.semester))];
    const credits = yearResults.reduce((sum, result) => sum + result.credits, 0);
    const gpa = calculateGpa(yearResults);

    return {
      id: academicYear,
      header: (
        <div className="grade-year-header">
          <div className="grade-year-title">
            <span className="grade-year-icon"><CalendarDays size={16} aria-hidden="true" /></span>
            <span><span className="grade-year-name">Academic year {academicYear}</span><span className="grade-year-detail">{semesters.length} semester{semesters.length === 1 ? "" : "s"} · {credits} credits</span></span>
          </div>
          <span className="grade-year-gpa"><span>Year GPA</span>{gpa}</span>
        </div>
      ),
      content: (
        <div className="space-y-6">
          {semesters.map((semester) => {
            const semesterResults = yearResults.filter((result) => result.semester === semester);
            const semesterCredits = semesterResults.reduce((sum, result) => sum + result.credits, 0);
            const semesterGpa = calculateGpa(semesterResults);
            return (
              <section key={semester}>
                <div className="grade-semester-summary"><h4>{semester}</h4><div><span>{semesterCredits} credits</span><strong>GPA: {semesterGpa}</strong></div></div>
                <div className="grade-table-wrap">
                  <table className="grade-table">
                    <thead><tr><th>Course</th><th>Credits</th><th>Mid-sem</th><th>End-sem</th><th>Total</th><th>Grade</th><th>Points</th></tr></thead>
                    <tbody>{semesterResults.map((result) => (
                      <tr key={result.id}>
                        <td><span className="grade-course-code">{result.course}</span><span className="grade-course-title">{result.courseTitle}</span></td>
                        <td>{result.credits}</td><td>{result.midSem}%</td><td>{result.endSem}%</td>
                        <td><span className="grade-total"><span>{result.total}%</span><span className={`grade-score ${scoreTone(result.total)}`}><i style={{ width: `${result.total}%` }} /></span></span></td>
                        <td className="font-semibold">{result.grade}</td><td className="font-semibold">{result.points.toFixed(1)}</td>
                      </tr>
                    ))}</tbody>
                  </table>
                </div>
              </section>
            );
          })}
        </div>
      ),
    };
  });

  return (
    <section className="page-container grades-page">
      <Heading title="Academic Records" subtitle="Complete academic history by year and semester.">
        <Button className="ml-auto shrink-0" variant="primary" size="md"><Download aria-hidden="true" size={16} />Download Transcript</Button>
      </Heading>
      <StatsGrid stats={gradesStats} />
      <Accordion items={accordionItems} defaultOpenId={academicYears[0]} variant="separated" className="grades-accordion" />
      <section className="grade-scale" aria-labelledby="grading-scale-title">
        <h2 id="grading-scale-title">Grading Scale</h2>
        <div className="grade-scale-grid" role="list" aria-label="Grading scale values">
          {gradingScale.map(({ grade, range, points }) => (
            <div key={grade} className="grade-scale-card" role="listitem">
              <span className="grade-scale-grade">{grade}</span>
              <span className="grade-scale-range">{range}</span>
              <span className="grade-scale-points">{points}</span>
            </div>
          ))}
        </div>
      </section>
    </section>
  );
};

export default Grades;
