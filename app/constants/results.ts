export type CourseResult = {
  id: number;
  course: string;
  courseTitle: string;
  credits: number;
  midSem: number;
  endSem: number;
  total: number;
  grade: string;
  points: number;
  academicYear: string;
  semester: string;
};

export const results: CourseResult[] = [
  { id: 1, course: "CS301", courseTitle: "Data Structures and Algorithms", credits: 3, midSem: 78, endSem: 85, total: 81, grade: "A-", points: 3.7, academicYear: "2024/2025", semester: "First Semester" },
  { id: 2, course: "CS303", courseTitle: "Database Systems", credits: 3, midSem: 82, endSem: 88, total: 85, grade: "A", points: 4.0, academicYear: "2024/2025", semester: "First Semester" },
  { id: 3, course: "CS305", courseTitle: "Computer Networks", credits: 3, midSem: 75, endSem: 80, total: 78, grade: "B+", points: 3.3, academicYear: "2024/2025", semester: "First Semester" },
  { id: 4, course: "MATH301", courseTitle: "Discrete Mathematics", credits: 3, midSem: 80, endSem: 84, total: 82, grade: "A-", points: 3.7, academicYear: "2024/2025", semester: "First Semester" },
  { id: 5, course: "CS302", courseTitle: "Operating Systems", credits: 3, midSem: 76, endSem: 82, total: 79, grade: "B+", points: 3.3, academicYear: "2024/2025", semester: "Second Semester" },
  { id: 6, course: "CS304", courseTitle: "Software Engineering", credits: 3, midSem: 84, endSem: 86, total: 85, grade: "A", points: 4.0, academicYear: "2024/2025", semester: "Second Semester" },
  { id: 7, course: "CS201", courseTitle: "Object-Oriented Programming", credits: 3, midSem: 77, endSem: 81, total: 79, grade: "B+", points: 3.3, academicYear: "2023/2024", semester: "First Semester" },
  { id: 8, course: "MATH201", courseTitle: "Linear Algebra", credits: 3, midSem: 73, endSem: 79, total: 76, grade: "B", points: 3.0, academicYear: "2023/2024", semester: "First Semester" },
  { id: 9, course: "CS101", courseTitle: "Introduction to Computing", credits: 3, midSem: 81, endSem: 83, total: 82, grade: "A-", points: 3.7, academicYear: "2022/2023", semester: "First Semester" },
  { id: 10, course: "ENG101", courseTitle: "Academic Writing", credits: 3, midSem: 79, endSem: 80, total: 80, grade: "A-", points: 3.7, academicYear: "2022/2023", semester: "First Semester" },
];
