export type AssignmentStatus = 'Pending' | 'Submitted' | 'Overdue'

export type Assignment = {
    id: number
    assignment: string
    courseCode: string
    lecturer: string
    deadline: string
    status: AssignmentStatus
}

export const assignments: Assignment[] = [
    { id: 1, assignment: 'Algorithms Analysis Report', courseCode: 'CS-301', lecturer: 'Dr. Kwame Mensah', deadline: '2025-11-14', status: 'Pending' },
    { id: 2, assignment: 'Differential Equations Problem Set', courseCode: 'MATH-202', lecturer: 'Prof. Ama Boateng', deadline: '2025-11-18', status: 'Submitted' },
    { id: 3, assignment: 'Academic Argument Essay', courseCode: 'ENG-110', lecturer: 'Ms. Linda Owusu', deadline: '2025-11-20', status: 'Pending' },
    { id: 4, assignment: 'Cell Biology Lab Report', courseCode: 'BIO-120', lecturer: 'Dr. Samuel Addo', deadline: '2025-10-31', status: 'Overdue' },
    { id: 5, assignment: 'Market Research Presentation', courseCode: 'BUS-205', lecturer: 'Mr. Daniel Asare', deadline: '2025-11-24', status: 'Submitted' },
    { id: 6, assignment: 'Mechanics Practical Report', courseCode: 'PHY-101', lecturer: 'Dr. Yaa Arthur', deadline: '2025-11-27', status: 'Pending' },
    { id: 7, assignment: 'African History Source Review', courseCode: 'HIS-210', lecturer: 'Dr. Ibrahim Sulemana', deadline: '2025-12-01', status: 'Pending' },
    { id: 8, assignment: 'Database Design Project', courseCode: 'IT-310', lecturer: 'Mr. Richard Ofori', deadline: '2025-12-05', status: 'Submitted' },
]