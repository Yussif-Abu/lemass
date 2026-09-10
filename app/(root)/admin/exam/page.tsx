import type { SortingState } from '@tanstack/react-table'
import { exams } from '../../../constants'
import Button from '../../../components/Button'
import StatsGrid from '../../../components/ui/stat-grid'
import { CalendarClock, CheckCircle2, ClipboardList, Plus, SlidersHorizontal } from 'lucide-react'
import { ExamTable, type ExamsTableUrlState } from '../../../components/ExamTable'

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
    const sortableColumns = new Set(['course', 'title', 'type', 'date', 'time', 'duration', 'venue', 'students', 'results'])
    return sortableColumns.has(id) && (direction === 'asc' || direction === 'desc')
        ? [{ id, desc: direction === 'desc' }]
        : []
}

const examStats = [
    {
        title: 'Total Exams',
        value: exams.length,
        icon: ClipboardList,
    },
    {
        title: 'Upcoming',
        value: exams.filter((exam) => exam.results === 'Pending').length,
        icon: CalendarClock,
    },
    {
        title: 'Results Published',
        value: exams.filter((exam) => exam.results === 'Published').length,
        icon: CheckCircle2,
    },
    {
        title: 'Grade Overrides',
        value: 0,
        icon: SlidersHorizontal,
    },
]

const ExamPage = async ({ searchParams }: CoursesPageProps) => {
    const params = await searchParams
    const requestedSize = positiveInteger(first(params.size), 5)
    const initialUrlState: ExamsTableUrlState = {
        pageIndex: positiveInteger(first(params.page), 1) - 1,
        pageSize: [5, 10, 15].includes(requestedSize) ? requestedSize : 5,
        query: first(params.q) ?? '',
        sorting: parseSorting(first(params.sort)),
    }

    return (
        <div className="page-container">
            <div className="page-header flex flex-wrap items-start gap-4">
                <div className="min-w-0">
                    <h1 className="page-title">Exams</h1>
                    <p className="page-description">Create, update, and manage course examinations.</p>
                </div>
                <Button className="ml-auto shrink-0" variant="primary" size="md">
                    <Plus aria-hidden="true" size={18} />
                    Add Exam
                </Button>
            </div>
            <StatsGrid stats={examStats} />
            <ExamTable initialData={exams} initialUrlState={initialUrlState} />
        </div>
    )
}

export default ExamPage