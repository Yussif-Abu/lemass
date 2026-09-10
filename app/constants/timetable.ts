export type TimetableType = 'Physical' | 'Online' | 'Hybrid'
export type TimetableStatus = 'Scheduled' | 'Pending' | 'Cancelled'

export type TimetableEntry = {
  id: number
  course: string
  title: string
  lecturer: string
  day: string
  time: string
  type: TimetableType
  location: string
  students: number
  status: TimetableStatus
}

export const timetable: TimetableEntry[] = [
  { id: 1, course: 'CS-101', title: 'Introduction to Computer Science', lecturer: 'Dr. Kwame Mensah', day: 'Monday', time: '08:00 - 10:00', type: 'Physical', location: 'Science Hall 1', students: 84, status: 'Scheduled' },
  { id: 2, course: 'MATH-201', title: 'Calculus II', lecturer: 'Prof. Ama Boateng', day: 'Monday', time: '10:00 - 12:00', type: 'Hybrid', location: 'Mathematics Lab', students: 62, status: 'Scheduled' },
  { id: 3, course: 'ENG-110', title: 'Academic Writing', lecturer: 'Ms. Linda Owusu', day: 'Tuesday', time: '09:00 - 11:00', type: 'Online', location: 'Virtual Classroom', students: 96, status: 'Scheduled' },
  { id: 4, course: 'BIO-120', title: 'General Biology', lecturer: 'Dr. Samuel Addo', day: 'Tuesday', time: '13:00 - 15:00', type: 'Physical', location: 'Biology Lab 2', students: 71, status: 'Pending' },
  { id: 5, course: 'BUS-205', title: 'Principles of Marketing', lecturer: 'Mr. Daniel Asare', day: 'Wednesday', time: '08:00 - 10:00', type: 'Hybrid', location: 'Business Block 3', students: 58, status: 'Scheduled' },
  { id: 6, course: 'PHY-101', title: 'Fundamentals of Physics', lecturer: 'Dr. Yaa Arthur', day: 'Wednesday', time: '11:00 - 13:00', type: 'Physical', location: 'Physics Lab 1', students: 49, status: 'Scheduled' },
  { id: 7, course: 'HIS-210', title: 'African History', lecturer: 'Dr. Ibrahim Sulemana', day: 'Thursday', time: '10:00 - 12:00', type: 'Online', location: 'Virtual Classroom', students: 43, status: 'Cancelled' },
  { id: 8, course: 'ART-115', title: 'Foundations of Design', lecturer: 'Ms. Efua Quaye', day: 'Thursday', time: '14:00 - 16:00', type: 'Physical', location: 'Design Studio', students: 35, status: 'Scheduled' },
  { id: 9, course: 'ECON-202', title: 'Microeconomics', lecturer: 'Prof. Joseph Nartey', day: 'Friday', time: '09:00 - 11:00', type: 'Hybrid', location: 'Economics Hall 2', students: 67, status: 'Pending' },
  { id: 10, course: 'IT-310', title: 'Database Systems', lecturer: 'Mr. Richard Ofori', day: 'Friday', time: '13:00 - 15:00', type: 'Physical', location: 'ICT Lab 4', students: 42, status: 'Scheduled' },
]