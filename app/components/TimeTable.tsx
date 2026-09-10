'use client'

import { useCreateAtom, useSelector } from '@tanstack/react-store'
import { createColumnHelper, type PaginationState, type SortingState } from '@tanstack/react-table'
import { useCallback, useEffect, useState } from 'react'
import type { TimetableEntry } from '../constants/timetable'
import { DataGrid, dataGridFeatures, type DataGridFilter } from './DataGrid'

export type TimetableTableUrlState = {
    pageIndex: number
    pageSize: number
    query: string
    sorting: SortingState
}

const columnHelper = createColumnHelper<typeof dataGridFeatures, TimetableEntry>()

const columns = columnHelper.columns([
    columnHelper.accessor('course', { header: 'Course', sortFn: 'text' }),
    columnHelper.accessor('title', { header: 'Title', sortFn: 'alphanumeric' }),
    columnHelper.accessor('lecturer', { header: 'Lecturer', sortFn: 'text' }),
    columnHelper.accessor('day', { header: 'Day', sortFn: 'text' }),
    columnHelper.accessor('time', { header: 'Time', sortFn: 'text' }),
    columnHelper.accessor('type', { header: 'Type', sortFn: 'text' }),
    columnHelper.accessor('location', { header: 'Location', sortFn: 'text' }),
    columnHelper.accessor('students', { header: 'Enrolled Students', sortFn: 'alphanumeric' }),
    columnHelper.accessor('status', {
        header: 'Status',
        sortFn: 'text',
        cell: ({ getValue }) => {
            const status = getValue()
            const color = status === 'Scheduled'
                ? 'status-badge-active'
                : status === 'Pending'
                    ? 'status-badge-pending'
                    : 'status-badge-inactive'
            return <span className={`status-badge ${color}`}>{status}</span>
        },
    }),
])

const filters: DataGridFilter[] = [

    {
        allLabel: 'All delivery types',
        columnId: 'type',
        label: 'Type',
        options: [
            { label: 'Physical', value: 'Physical' },
            { label: 'Online', value: 'Online' },
            { label: 'Hybrid', value: 'Hybrid' },
        ],
    },
    {
        allLabel: 'All statuses',
        columnId: 'status',
        label: 'Status',
        options: [
            { label: 'Scheduled', value: 'Scheduled' },
            { label: 'Pending', value: 'Pending' },
            { label: 'Cancelled', value: 'Cancelled' },
        ],
    },
]

function syncTableUrl(query: string, sorting: SortingState, pagination: PaginationState) {
    const params = new URLSearchParams(window.location.search)

    if (query) params.set('q', query)
    else params.delete('q')

    if (sorting[0]) params.set('sort', `${sorting[0].id}.${sorting[0].desc ? 'desc' : 'asc'}`)
    else params.delete('sort')

    if (pagination.pageIndex) params.set('page', String(pagination.pageIndex + 1))
    else params.delete('page')

    if (pagination.pageSize !== 5) params.set('size', String(pagination.pageSize))
    else params.delete('size')

    const queryString = params.toString()
    window.history.replaceState(null, '', `${window.location.pathname}${queryString ? `?${queryString}` : ''}${window.location.hash}`)
}

type TimetableTableProps = {
    initialData: TimetableEntry[]
    initialUrlState: TimetableTableUrlState
}

export function TimeTable({ initialData, initialUrlState }: TimetableTableProps) {
    const [rows, setRows] = useState(initialData)

    // Routing owns only the state users should be able to share or refresh.
    const globalFilter = useCreateAtom<unknown>(initialUrlState.query)
    const sorting = useCreateAtom<SortingState>(initialUrlState.sorting)
    const pagination = useCreateAtom<PaginationState>({
        pageIndex: initialUrlState.pageIndex,
        pageSize: initialUrlState.pageSize,
    })

    const queryValue = useSelector(globalFilter, (value) => String(value ?? ''))
    const sortingValue = useSelector(sorting)
    const paginationValue = useSelector(pagination)

    useEffect(() => {
        syncTableUrl(queryValue, sortingValue, paginationValue)
    }, [paginationValue, queryValue, sortingValue])

    const handleCreate = useCallback(() => {
        window.alert('Connect this action to the create-student form.')
    }, [])

    const handleEdit = useCallback((timetable: TimetableEntry) => {
        window.alert(`Edit ${timetable.course}`)
    }, [])

    const handleDelete = useCallback((timetable: TimetableEntry) => {
        if (!window.confirm(`Delete ${timetable.course}?`)) return
        setRows((current) => current.filter((row) => row.id !== timetable.id))
    }, [])

    return (
        <DataGrid
            atoms={{ globalFilter, pagination, sorting }}
            columns={columns}
            data={rows}
            exportFileName="timetable"
            filters={filters}
            getRowId={(timetable) => String(timetable.id)}
            onDelete={handleDelete}
            onEdit={handleEdit}
            searchLabel="Search timetable"
        />
    )
}
