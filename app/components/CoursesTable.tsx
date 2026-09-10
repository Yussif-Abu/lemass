'use client'

import { useCreateAtom, useSelector } from '@tanstack/react-store'
import { createColumnHelper, type PaginationState, type SortingState } from '@tanstack/react-table'
import { useCallback, useEffect, useState } from 'react'
import type { Course } from './../constants/courses'
import { DataGrid, dataGridFeatures, type DataGridFilter } from './DataGrid'

export type CoursesTableUrlState = {
    pageIndex: number
    pageSize: number
    query: string
    sorting: SortingState
}

const columnHelper = createColumnHelper<typeof dataGridFeatures, Course>()

const columns = columnHelper.columns([
    columnHelper.accessor('code', { header: 'Course Code', sortFn: 'text' }),
    columnHelper.accessor('title', { header: 'Course Title', sortFn: 'alphanumeric' }),
    columnHelper.accessor('program', { header: 'Program', sortFn: 'text' }),
    columnHelper.accessor('credits', { header: 'Credits', sortFn: 'alphanumeric' }),
    columnHelper.accessor('lecturer', { header: 'Lecturer', sortFn: 'text' }),
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
        allLabel: 'All statuses',
        columnId: 'status',
        label: 'Status',
        options: [
            { label: 'Active', value: 'Active' },
            { label: 'Pending', value: 'Pending' },
            { label: 'Inactive', value: 'Inactive' },
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

type CoursesTableProps = {
    initialData: Course[]
    initialUrlState: CoursesTableUrlState
}

export function CoursesTable({ initialData, initialUrlState }: CoursesTableProps) {
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

    const handleEdit = useCallback((course: Course) => {
        window.alert(`Edit ${course.code}`)
    }, [])

    const handleDelete = useCallback((course: Course) => {
        if (!window.confirm(`Delete ${course.code}?`)) return
        setRows((current) => current.filter((row) => row.code !== course.code))
    }, [])

    return (
        <DataGrid
            atoms={{ globalFilter, pagination, sorting }}
            columns={columns}
            data={rows}
            exportFileName="courses"
            filters={filters}
            getRowId={(course) => course.code}
            onDelete={handleDelete}
            onEdit={handleEdit}
            searchLabel="Search courses"
        />
    )
}
