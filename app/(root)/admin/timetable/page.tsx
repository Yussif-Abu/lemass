import type { SortingState } from '@tanstack/react-table'
import { timetable } from '../../../constants'
import Button from '../../../components/Button'
import StatsGrid from '../../../components/ui/stat-grid'
import { AlertTriangle, BookOpen, Building2, Monitor, Plus, Radio } from 'lucide-react'
import { TimeTable, type TimetableTableUrlState } from '../../../components/TimeTable'

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
    const sortableColumns = new Set(['course', 'title', 'lecturer', 'day', 'time', 'type', 'location', 'students', 'status'])
    return sortableColumns.has(id) && (direction === 'asc' || direction === 'desc')
        ? [{ id, desc: direction === 'desc' }]
        : []
}

function timeToMinutes(value: string) {
    const [hours, minutes] = value.split(':').map(Number)
    return hours * 60 + minutes
}

function hasTimeConflict(entryIndex: number) {
    const entry = timetable[entryIndex]
    const [start, end] = entry.time.split(' - ').map(timeToMinutes)

    return timetable.some((other, otherIndex) => {
        if (otherIndex === entryIndex || other.day !== entry.day) return false

        const [otherStart, otherEnd] = other.time.split(' - ').map(timeToMinutes)
        return start < otherEnd && otherStart < end
    })
}

const timetableStats = [
    {
        title: 'Total Classes / Week',
        value: timetable.length,
        icon: BookOpen,
    },
    {
        title: 'Physical',
        value: timetable.filter((entry) => entry.type === 'Physical').length,
        icon: Building2,
    },
    {
        title: 'Online',
        value: timetable.filter((entry) => entry.type === 'Online').length,
        icon: Monitor,
    },
    {
        title: 'Hybrid',
        value: timetable.filter((entry) => entry.type === 'Hybrid').length,
        icon: Radio,
    },
    {
        title: 'Conflicts',
        value: timetable.filter((_, index) => hasTimeConflict(index)).length,
        icon: AlertTriangle,
    },
]

const CoursesPage = async ({ searchParams }: CoursesPageProps) => {
    const params = await searchParams
    const requestedSize = positiveInteger(first(params.size), 5)
    const initialUrlState: TimetableTableUrlState = {
        pageIndex: positiveInteger(first(params.page), 1) - 1,
        pageSize: [5, 10, 15].includes(requestedSize) ? requestedSize : 5,
        query: first(params.q) ?? '',
        sorting: parseSorting(first(params.sort)),
    }

    return (
        <div className="page-container">
            <div className="page-header flex flex-wrap items-start gap-4">
                <div className="min-w-0">
                    <h1 className="page-title">Master Timetable & Scheduling</h1>
                    <p className="page-description">Institutional schedule alignment Semester 2, 2025/2026</p>
                </div>
                <Button className="ml-auto shrink-0" variant="primary" size="md">
                    <Plus aria-hidden="true" size={18} />
                    Create Timetable
                </Button>
            </div>
            <StatsGrid stats={timetableStats} />
            <TimeTable initialData={timetable} initialUrlState={initialUrlState} />
        </div>
    )
}

export default CoursesPage