'use client'

import { useCreateAtom, useSelector } from '@tanstack/react-store'
import { createColumnHelper, type PaginationState, type SortingState } from '@tanstack/react-table'
import { useCallback, useEffect, useState } from 'react'
import { DataGrid, dataGridFeatures, type DataGridFilter } from './DataGrid'
import type { Faculty } from '../constants'

export type FacultyTableUrlState = {
    pageIndex: number
    pageSize: number
    query: string
    sorting: SortingState
}

const columnHelper = createColumnHelper<typeof dataGridFeatures, Faculty>()

const columns = columnHelper.columns([
    columnHelper.accessor('lecturer', { header: 'Lecturer', sortFn: 'text' }),
    columnHelper.accessor('staffId', { header: 'Staff ID', sortFn: 'text' }),
    columnHelper.accessor('department', { header: 'Department', sortFn: 'text' }),
    columnHelper.accessor('specialization', { header: 'Specialization', sortFn: 'text' }),
    columnHelper.accessor('semester', { header: 'Semester', sortFn: 'text' }),
    columnHelper.accessor('Courses', { header: 'Courses', sortFn: 'alphanumeric' }),
    columnHelper.accessor('students', { header: 'Enrolled Students', sortFn: 'alphanumeric' }),
    columnHelper.accessor('status', {
        header: 'Status',
        sortFn: 'text',
        cell: ({ getValue }) => {
            const status = getValue()
            const color = status === 'Active'
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
        allLabel: 'All Departments',
        columnId: 'department',
        label: 'Department',
        options: [
            { label: 'Computer Science', value: 'Computer Science' },
            { label: 'Mathematics', value: 'Mathematics' },
            { label: 'Physics', value: 'Physics' },
            { label: 'Chemistry', value: 'Chemistry' },
            { label: 'Biology', value: 'Biology' },
            { label: 'Economics', value: 'Economics' },
            { label: 'History', value: 'History' },
            { label: 'Fine Arts', value: 'Fine Arts' },
            { label: 'Business Administration', value: 'Business Administration' },
        ],
    },

    {
        allLabel: 'All statuses',
        columnId: 'status',
        label: 'Status',
        options: [
            { label: 'Active', value: 'Active' },
            { label: 'Pending', value: 'Pending' },
            { label: 'Inactive', value: 'Inactive' },
            { label: 'On Leave', value: 'On Leave' },
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

type FacultyTableProps = {
    initialData: Faculty[]
    initialUrlState: FacultyTableUrlState
}

export function FacultyTable({ initialData, initialUrlState }: FacultyTableProps) {
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

    const handleEdit = useCallback((faculty: Faculty) => {
        window.alert(`Edit ${faculty.lecturer}`)
    }, [])

    const handleDelete = useCallback((faculty: Faculty) => {
        if (!window.confirm(`Delete ${faculty.lecturer}?`)) return
        setRows((current) => current.filter((row) => row.staffId !== faculty.staffId))
    }, [])

    return (
        <DataGrid
            atoms={{ globalFilter, pagination, sorting }}
            columns={columns}
            data={rows}
            exportFileName="faculty"
            filters={filters}
            getRowId={(faculty) => faculty.staffId}
            onDelete={handleDelete}
            onEdit={handleEdit}
            searchLabel="Search faculty"
        />
    )
}
