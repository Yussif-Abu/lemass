'use client'

import { useCreateAtom, useSelector } from '@tanstack/react-store'
import { createColumnHelper, type PaginationState, type SortingState } from '@tanstack/react-table'
import { useCallback, useEffect, useState } from 'react'
import type { Exam } from '../constants/exams'
import { DataGrid, dataGridFeatures, type DataGridFilter } from './DataGrid'

export type ExamsTableUrlState = {
    pageIndex: number
    pageSize: number
    query: string
    sorting: SortingState
}

const columnHelper = createColumnHelper<typeof dataGridFeatures, Exam>()

const columns = columnHelper.columns([
    columnHelper.accessor('course', { header: 'Course', sortFn: 'text' }),
    columnHelper.accessor('title', { header: 'Title', sortFn: 'alphanumeric' }),
    columnHelper.accessor('type', { header: 'Type', sortFn: 'text' }),
    columnHelper.accessor('date', { header: 'Date', sortFn: 'text' }),
    columnHelper.accessor('time', { header: 'Time', sortFn: 'text' }),
    columnHelper.accessor('duration', { header: 'Duration', sortFn: 'text' }),
    columnHelper.accessor('venue', { header: 'Venue', sortFn: 'text' }),
    columnHelper.accessor('students', { header: 'Students', sortFn: 'alphanumeric' }),
    columnHelper.accessor('results', {
        header: 'Results',
        sortFn: 'text',
        cell: ({ getValue }) => {
            const results = getValue()
            const color = results === 'Published'
                ? 'status-badge-active'
                : 'status-badge-pending'
            return <span className={`status-badge ${color}`}>{results}</span>
        },
    }),
])

const filters: DataGridFilter[] = [

    {
        allLabel: 'All exam types',
        columnId: 'type',
        label: 'Type',
        options: [
            { label: 'Mid Semester', value: 'Mid Semester' },
            { label: 'End Semester', value: 'End Semester' },
        ],
    },
    {
        allLabel: 'All result statuses',
        columnId: 'results',
        label: 'Results',
        options: [
            { label: 'Pending', value: 'Pending' },
            { label: 'Published', value: 'Published' },
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

type ExamsTableProps = {
    initialData: Exam[]
    initialUrlState: ExamsTableUrlState
}

export function ExamTable({ initialData, initialUrlState }: ExamsTableProps) {
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

    const handleEdit = useCallback((exam: Exam) => {
        window.alert(`Edit ${exam.title}`)
    }, [])

    const handleDelete = useCallback((exam: Exam) => {
        if (!window.confirm(`Delete ${exam.title}?`)) return
        setRows((current) => current.filter((row) => row.id !== exam.id))
    }, [])

    return (
        <DataGrid
            atoms={{ globalFilter, pagination, sorting }}
            columns={columns}
            data={rows}
            exportFileName="exams"
            filters={filters}
            getRowId={(exam) => String(exam.id)}
            onDelete={handleDelete}
            onEdit={handleEdit}
            searchLabel="Search exams"
        />
    )
}
