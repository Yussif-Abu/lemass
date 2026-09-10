import type { ReactNode }from 'react'
import Heading from '../../../components/Header'
import Button from '../../../components/Button'
import { Plus, UserCheck, Users, CalendarDays } from 'lucide-react'
import StatsGrid from '../../../components/ui/stat-grid'
import Tabs from '../../../components/Tabs'
import { faculty } from '../../../constants'


const facultyStats = [
    {
        title: 'Total Lecturers',
        value: faculty.length,
        icon: Users,
    },
    {
        title: 'Active',
        value: faculty.filter((member) => member.status === 'Active').length,
        icon: UserCheck,
    },
    {
        title: 'On Leave',
        value: faculty.filter((member) => member.status === 'On Leave').length,
        icon: CalendarDays,
    },
]

const facultyTabs = [
    { id: 'all-faculty', label: 'All Faculty', href: '/admin/faculty' },
    { id: 'new-faculty', label: 'New Faculty', href: '/admin/faculty/new' },
    { id: 'edit-faculty', label: 'Edit Faculty', href: '/admin/faculty/edit' },
    { id: 'course-assignment', label: 'Course Assignment', href: '/admin/faculty/course-assignment' },
]

const layout = ({ children }: { children: ReactNode }) => {
  return (
     <div className="page-container">
      <Heading title="Faculty" subtitle="Create, update, and manage your faculty members." >
        <Button className="ml-auto shrink-0" variant="primary" size="md">
          <Plus aria-hidden="true" size={18} />
          Add Faculty
        </Button>
      </Heading>

      <StatsGrid stats={facultyStats} />
      <Tabs items={facultyTabs} />
      {children}
    </div>
  )
}

export default layout