export type ExamType = 'Mid Semester' | 'End Semester'
export type ExamResultStatus = 'Pending' | 'Published'

export type Exam = {
    id: number
    course: string
    title: string
    type: ExamType
    date: string
    time: string
    duration: string
    venue: string
    students: number
    results: ExamResultStatus
}

export const exams: Exam[] = [
    { id: 1, course: 'CS-101', title: 'Introduction to Computer Science', type: 'Mid Semester', date: '2025-10-20', time: '09:00', duration: '2 hours', venue: 'Science Hall A', students: 84, results: 'Published' },
    { id: 2, course: 'MATH-201', title: 'Calculus II', type: 'End Semester', date: '2025-12-08', time: '13:00', duration: '3 hours', venue: 'Main Auditorium', students: 62, results: 'Pending' },
    { id: 3, course: 'ENG-110', title: 'Academic Writing', type: 'Mid Semester', date: '2025-10-22', time: '10:00', duration: '2 hours', venue: 'Humanities Block B', students: 96, results: 'Published' },
    { id: 4, course: 'BIO-120', title: 'General Biology', type: 'End Semester', date: '2025-12-10', time: '09:00', duration: '2 hours', venue: 'Life Sciences Lab', students: 71, results: 'Pending' },
    { id: 5, course: 'BUS-205', title: 'Principles of Marketing', type: 'End Semester', date: '2025-12-12', time: '13:00', duration: '2 hours', venue: 'Business School Hall', students: 58, results: 'Pending' },
    { id: 6, course: 'PHY-101', title: 'Fundamentals of Physics', type: 'Mid Semester', date: '2025-10-24', time: '14:00', duration: '2 hours', venue: 'Science Hall B', students: 49, results: 'Published' },
    { id: 7, course: 'HIS-210', title: 'African History', type: 'End Semester', date: '2025-12-15', time: '09:00', duration: '2 hours', venue: 'Humanities Block A', students: 43, results: 'Pending' },
    { id: 8, course: 'IT-310', title: 'Database Systems', type: 'End Semester', date: '2025-12-17', time: '13:00', duration: '3 hours', venue: 'Technology Centre', students: 42, results: 'Pending' },
]
