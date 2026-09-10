import type { ReactNode } from 'react'
import Tabs from '../../../components/Tabs'
import StatsGrid from '../../../components/ui/stat-grid'
import { BookOpen, CheckCircle2, Library, Plus } from 'lucide-react'
import { courses } from '../../../constants'
import Button from '../../../components/Button'
import Heading from '../../../components/Header'

const courseStats = [
  {
    title: 'Total Courses',
    value: courses.length,
    icon: BookOpen,
  },
  {
    title: 'Active',
    value: courses.filter((course) => course.status === 'Active').length,
    icon: CheckCircle2,
  },
  {
    title: 'Total Resources',
    value: courses.reduce((total, course) => total + course.credits, 0),
    icon: Library,
  },
  {
    title: 'Average Student/Course',
    value: (courses.reduce((total, course) => total + course.students, 0) / courses.length).toFixed(1),
    icon: CheckCircle2,
  },
]

const CourseTabs = [
    { id: 'all-courses', label: 'All Courses', href: '/admin/courses' },
    { id: 'new-course', label: 'New Course', href: '/admin/courses/new' },
    { id: 'edit-course', label: 'Edit Course', href: '/admin/courses/edit' },
    { id: 'resources', label: 'Resources', href: '/admin/courses/resources' },
]

export default function CoursesLayout({ children }: { children: ReactNode }) {
  return (
    <div className="page-container">
      <Heading title="Courses" subtitle="Create, update, and manage your school courses." >
        <Button className="ml-auto shrink-0" variant="primary" size="md">
          <Plus aria-hidden="true" size={18} />
          Add Course
        </Button>
      </Heading>

      <StatsGrid stats={courseStats} />
      <Tabs items={CourseTabs} />
      {children}
    </div>
  )
}