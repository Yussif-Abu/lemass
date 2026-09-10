export type LectureMaterial = {
  id: number;
  name: string;
  type: "pdf" | "zip" | "doc";
  file: string;
};

export type LectureWeek = {
  id: number;
  courseId: number;
  week: string;
  title: string;
  overview: string;
  lessons: number;
  completed: boolean;
  materials: LectureMaterial[];
};

export const courseLectures: LectureWeek[] = [
  {
    id: 1,
    courseId: 1,
    week: "Week 1",
    title: "Introduction to Data Structures",
    overview: "Overview of data structures and their importance in computing.",
    lessons: 3,
    completed: true,
    materials: [
      {
        id: 1,
        name: "Course syllabus.pdf",
        type: "pdf",
        file: "/materials/course-syllabus.pdf",
      },
      {
        id: 2,
        name: "Lecture notes.pdf",
        type: "pdf",
        file: "/materials/lecture-notes.pdf",
      },
      {
        id: 3,
        name: "Passco Bank.zip",
        type: "zip",
        file: "/materials/passco-bank.zip",
      },
    ],
  },
  {
    id: 2,
    courseId: 1,
    week: "Week 2",
    title: "Arrays and Linked Lists",
    overview: "Deep dive into linear data structures.",
    lessons: 3,
    completed: true,
    materials: [
      {
        id: 4,
        name: "Arrays worksheet.pdf",
        type: "pdf",
        file: "/materials/arrays-worksheet.pdf",
      },
      {
        id: 5,
        name: "Linked list guide.pdf",
        type: "pdf",
        file: "/materials/linked-list-guide.pdf",
      },
    ],
  },
  {
    id: 3,
    courseId: 1,
    week: "Week 3",
    title: "Stacks and Queues",
    overview: "Understanding LIFO and FIFO data structures.",
    lessons: 3,
    completed: false,
    materials: [
      {
        id: 6,
        name: "Stack and queue notes.pdf",
        type: "pdf",
        file: "/materials/stacks-queues-notes.pdf",
      },
    ],
  },
  {
    id: 4,
    courseId: 1,
    week: "Week 4",
    title: "Trees and Binary Search Trees",
    overview: "Hierarchical data structures.",
    lessons: 2,
    completed: false,
    materials: [
      {
        id: 7,
        name: "Trees overview.pdf",
        type: "pdf",
        file: "/materials/trees-overview.pdf",
      },
    ],
  },
];
