import type { SortingState } from '@tanstack/react-table'
import { courses } from '../../../constants'
import Button from '../../../components/Button'
import {  Plus } from 'lucide-react'
import { CoursesTable, type CoursesTableUrlState } from '../../../components/CoursesTable'


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
  const sortableColumns = new Set(['code', 'title', 'program', 'credits', 'lecturer', 'students', 'status'])
  return sortableColumns.has(id) && (direction === 'asc' || direction === 'desc')
    ? [{ id, desc: direction === 'desc' }]
    : []
}

const CoursesPage = async ({ searchParams }: CoursesPageProps) => {
  const params = await searchParams
  const requestedSize = positiveInteger(first(params.size), 5)
  const initialUrlState: CoursesTableUrlState = {
    pageIndex: positiveInteger(first(params.page), 1) - 1,
    pageSize: [5, 10, 15].includes(requestedSize) ? requestedSize : 5,
    query: first(params.q) ?? '',
    sorting: parseSorting(first(params.sort)),
  }

  return (
      <CoursesTable initialData={courses} initialUrlState={initialUrlState} />
  )
}

export default CoursesPage