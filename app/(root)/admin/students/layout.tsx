import type { ReactNode } from 'react'
import { Plus, UserCheck, UserPlus, UserRound, UserX } from 'lucide-react'
import Heading from '../../../components/Header'
import Button from '../../../components/Button'
import StatsGrid from '../../../components/ui/stat-grid'
import Tabs from '../../../components/Tabs'
import { students } from '../../../constants'

const studentStats = [
    {
        title: 'Total Students',
        value: students.length,
        icon: UserRound,
    },
    {
        title: 'Active',
        value: students.filter((student) => student.status === 'Active').length,
        icon: UserCheck,
    },
    {
        title: 'Inactive',
        value: students.filter((student) => student.status === 'Inactive').length,
        icon: UserX,
    },
    {
        title: 'Pending Registration',
        value: students.filter((student) => student.status === 'Pending').length,
        icon: UserPlus,
    },
]

const studentTabs = [
    { id: 'all-students', label: 'All Students', href: '/admin/students' },
    { id: 'new-student', label: 'New Student', href: '/admin/students/new' },
    { id: 'edit-student', label: 'Edit Student', href: '/admin/students/edit' },
]

const StudentsLayout = ({ children }: { children: ReactNode }) => {
    return (
        <div className="page-container">
            <Heading title="Students" subtitle="Create, update, and manage your students.">
                <Button className="ml-auto shrink-0" variant="primary" size="md">
                    <Plus aria-hidden="true" size={18} />
                    Add Student
                </Button>
            </Heading>

            <StatsGrid stats={studentStats} />
            <Tabs items={studentTabs} />
            {children}
        </div>
    )
}

export default StudentsLayout
