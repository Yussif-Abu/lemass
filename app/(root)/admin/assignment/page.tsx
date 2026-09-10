import type { SortingState } from '@tanstack/react-table'
import { assignments } from '../../../constants'
import Button from '../../../components/Button'
import StatsGrid from '../../../components/ui/stat-grid'
import { CheckCircle2, ClipboardList, Clock3, Plus } from 'lucide-react'
import { AssignmentTable, type AssignmentsTableUrlState } from '../../../components/AssignmentTable'

type CoursesPageProps = {
    searchParams: Promise<Record<string, string | string[] | undefined>>
}

function first(value: string | string[] | undefined) {
    return Array.isArray(value) ? value[0] : value
}

function positiveInteger(value: string | undefined, fallback: number) {
    const parsed = Number(value)
    return Number.isInteger(parsed) && parsed > 0 ? parsed : fallback
}

function parseSorting(value: string | undefined): SortingState {
    if (!value) return []
    const [id, direction] = value.split('.')
    const sortableColumns = new Set(['assignment', 'courseCode', 'lecturer', 'deadline', 'status'])
    return sortableColumns.has(id) && (direction === 'asc' || direction === 'desc')
        ? [{ id, desc: direction === 'desc' }]
        : []
}

const assignmentStats = [
    {
        title: 'Total Assignments',
        value: assignments.length,
        icon: ClipboardList,
    },
    {
        title: 'Past Due',
        value: assignments.filter((assignment) => assignment.status === 'Overdue').length,
        icon: Clock3,
    },
    {
        title: 'Completed',
        value: assignments.filter((assignment) => assignment.status === 'Submitted').length,
        icon: CheckCircle2,
    },
]

const AssignmentPage = async ({ searchParams }: CoursesPageProps) => {
    const params = await searchParams
    const requestedSize = positiveInteger(first(params.size), 5)
    const initialUrlState: AssignmentsTableUrlState = {
        pageIndex: positiveInteger(first(params.page), 1) - 1,
        pageSize: [5, 10, 15].includes(requestedSize) ? requestedSize : 5,
        query: first(params.q) ?? '',
        sorting: parseSorting(first(params.sort)),
    }

    return (
        <div className="page-container">
            <div className="page-header flex flex-wrap items-start gap-4">
                <div className="min-w-0">
                    <h1 className="page-title">Assignments</h1>
                    <p className="page-description">Create, update, and manage course assignments.</p>
                </div>
                <Button className="ml-auto shrink-0" variant="primary" size="md">
                    <Plus aria-hidden="true" size={18} />
                    Add Assignment
                </Button>
            </div>
            <StatsGrid stats={assignmentStats} />
            <AssignmentTable initialData={assignments} initialUrlState={initialUrlState} />
        </div>
    )
}

export default AssignmentPage