export type FacultyStatus = 'Active' | 'On Leave' | 'Inactive' | 'Pending'

export type Faculty = {
    id: number
    lecturer: string
    staffId: string
    department: string
    specialization: string
    semester: string
    Courses: number
    students: number
    status: FacultyStatus
}

export const faculty: Faculty[] = [
    { id: 1, lecturer: 'Dr. Kwame Mensah', staffId: 'STF-1001', department: 'Computer Science', specialization: 'Software Engineering', semester: 'Semester 1, 2025/2026', Courses: 4, students: 128, status: 'Active' },
    { id: 2, lecturer: 'Prof. Ama Boateng', staffId: 'STF-1002', department: 'Mathematics', specialization: 'Applied Mathematics', semester: 'Semester 1, 2025/2026', Courses: 3, students: 96, status: 'Active' },
    { id: 3, lecturer: 'Dr. Samuel Addo', staffId: 'STF-1003', department: 'Biological Sciences', specialization: 'Molecular Biology', semester: 'Semester 1, 2025/2026', Courses: 3, students: 105, status: 'Active' },
    { id: 4, lecturer: 'Ms. Linda Owusu', staffId: 'STF-1004', department: 'General Studies', specialization: 'Academic Writing', semester: 'Semester 1, 2025/2026', Courses: 5, students: 174, status: 'Active' },
    { id: 5, lecturer: 'Mr. Daniel Asare', staffId: 'STF-1005', department: 'Business Administration', specialization: 'Marketing', semester: 'Semester 1, 2025/2026', Courses: 3, students: 87, status: 'Active' },
    { id: 6, lecturer: 'Dr. Yaa Arthur', staffId: 'STF-1006', department: 'Physical Sciences', specialization: 'Particle Physics', semester: 'Semester 1, 2025/2026', Courses: 2, students: 64, status: 'On Leave' },
    { id: 7, lecturer: 'Dr. Ibrahim Sulemana', staffId: 'STF-1007', department: 'History', specialization: 'African History', semester: 'Semester 1, 2025/2026', Courses: 2, students: 59, status: 'Active' },
    { id: 8, lecturer: 'Ms. Efua Quaye', staffId: 'STF-1008', department: 'Fine Arts', specialization: 'Graphic Design', semester: 'Semester 1, 2025/2026', Courses: 3, students: 72, status: 'Active' },
    { id: 9, lecturer: 'Prof. Joseph Nartey', staffId: 'STF-1009', department: 'Economics', specialization: 'Development Economics', semester: 'Semester 1, 2025/2026', Courses: 4, students: 121, status: 'Active' },
    { id: 10, lecturer: 'Dr. Nadia Karim', staffId: 'STF-1010', department: 'Chemistry', specialization: 'Organic Chemistry', semester: 'Semester 1, 2025/2026', Courses: 2, students: 53, status: 'Inactive' },
    { id: 11, lecturer: 'Dr. Mabel Asante', staffId: 'STF-1011', department: 'Psychology', specialization: 'Educational Psychology', semester: 'Semester 1, 2025/2026', Courses: 3, students: 91, status: 'Active' },
    { id: 12, lecturer: 'Mr. Felix Kusi', staffId: 'STF-1012', department: 'Data Science', specialization: 'Statistical Analysis', semester: 'Semester 1, 2025/2026', Courses: 3, students: 83, status: 'Pending' },
    { id: 13, lecturer: 'Mrs. Adwoa Frimpong', staffId: 'STF-1013', department: 'Law', specialization: 'Commercial Law', semester: 'Semester 1, 2025/2026', Courses: 2, students: 48, status: 'Active' },
    { id: 14, lecturer: 'Dr. Michael Tetteh', staffId: 'STF-1014', department: 'Sociology', specialization: 'Community Development', semester: 'Semester 1, 2025/2026', Courses: 2, students: 61, status: 'Active' },
    { id: 15, lecturer: 'Mr. Richard Ofori', staffId: 'STF-1015', department: 'Information Technology', specialization: 'Database Systems', semester: 'Semester 1, 2025/2026', Courses: 3, students: 78, status: 'Active' },
]