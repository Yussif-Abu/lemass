import React from 'react'
import Button from '../Button'
import { Select, TextField } from '../../helper'
import Heading from '../Header'

const CourseAssignmentForm = () => {
  return (
    <section className="card flex  flex-col gap-4 p-6 mb-10">
      <div className="rounded-lg bg-primary p-4 [&_.page-header]:mb-0 [&_.page-description]:text-indigo-100 [&_.page-title]:text-white">
        <Heading title='Assign Course to Faculty' subtitle='Fill all required fields to create a new course.' />
      </div>
      <Select
        label="Select Faculty"
        options={[
          { label: 'John Doe', value: 'john-doe' },
          { label: 'Jane Smith', value: 'jane-smith' },
          { label: 'Bob Johnson', value: 'bob-johnson' },
        ]}
      />
      <Select
        label="Select Course"
        options={[
          { label: 'Computer Science', value: 'computer-science' },
          { label: 'Mathematics', value: 'mathematics' },
          { label: 'Physics', value: 'physics' },
        ]}
      />
      <Select
        label="Select Semester"
        options={[
          { label: 'Semester 1', value: 'sem-1' },
          { label: 'Semester 2', value: 'sem-2' },
          { label: 'Semester 3', value: 'sem-3' },
        ]}
      />

      <Button variant="primary" className="w-full">Create Course</Button>

    </section>
  )
}

export default CourseAssignmentForm