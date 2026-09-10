export type StudentLevel = 100 | 200 | 300 | 400

export type Student = {
  id: number
  name: string
  studentId: string
  program: string
  level: StudentLevel
  gpa: number
  attendance: number
  status: 'Active' | 'Inactive' | 'Pending'
}

export const students: Student[] = [
  { id: 1, name: 'Amina Yusuf', studentId: 'STU-1001', program: 'Computer Science', level: 300, gpa: 3.82, attendance: 96, status: 'Active' },
  { id: 2, name: 'Noah Williams', studentId: 'STU-1002', program: 'Business Administration', level: 200, gpa: 3.41, attendance: 88, status: 'Active' },
  { id: 3, name: 'Leila Hassan', studentId: 'STU-1003', program: 'Mathematics', level: 400, gpa: 3.67, attendance: 91, status: 'Pending' },
  { id: 4, name: 'Ethan Chen', studentId: 'STU-1004', program: 'Information Technology', level: 100, gpa: 3.18, attendance: 79, status: 'Active' },
  { id: 5, name: 'Sofia Garcia', studentId: 'STU-1005', program: 'Psychology', level: 200, gpa: 2.94, attendance: 72, status: 'Inactive' },
  { id: 6, name: 'Omar Ali', studentId: 'STU-1006', program: 'Economics', level: 400, gpa: 3.56, attendance: 94, status: 'Active' },
  { id: 7, name: 'Maya Patel', studentId: 'STU-1007', program: 'Biological Sciences', level: 100, gpa: 3.29, attendance: 83, status: 'Active' },
  { id: 8, name: 'Lucas Martin', studentId: 'STU-1008', program: 'Computer Science', level: 300, gpa: 3.74, attendance: 89, status: 'Pending' },
  { id: 9, name: 'Zara Ahmed', studentId: 'STU-1009', program: 'Data Science', level: 200, gpa: 3.61, attendance: 97, status: 'Active' },
  { id: 10, name: 'Henry Brown', studentId: 'STU-1010', program: 'History', level: 400, gpa: 3.08, attendance: 76, status: 'Active' },
  { id: 11, name: 'Nora Johnson', studentId: 'STU-1011', program: 'Fine Arts', level: 100, gpa: 2.81, attendance: 68, status: 'Inactive' },
  { id: 12, name: 'Samir Khan', studentId: 'STU-1012', program: 'Physics', level: 300, gpa: 3.45, attendance: 86, status: 'Active' },
  { id: 13, name: 'Grace Mensah', studentId: 'STU-1013', program: 'Law', level: 400, gpa: 3.88, attendance: 98, status: 'Active' },
  { id: 14, name: 'Daniel Owusu', studentId: 'STU-1014', program: 'Sociology', level: 100, gpa: 3.12, attendance: 81, status: 'Pending' },
  { id: 15, name: 'Fatima Diallo', studentId: 'STU-1015', program: 'Chemistry', level: 200, gpa: 3.52, attendance: 93, status: 'Active' },
]
