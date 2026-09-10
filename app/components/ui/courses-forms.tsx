import React from 'react'
import Heading from '../Header'
import { Select, TextField } from '../../helper'
import Button from '../Button'


const CoursesForms = () => {
  return (
    <section className="card flex  flex-col gap-4 p-6">
      <div className="rounded-lg bg-primary p-4 [&_.page-header]:mb-0 [&_.page-description]:text-indigo-100 [&_.page-title]:text-white">
        <Heading title='New Courses' subtitle='Fill all required fields to create a new course.' />
      </div>
      <div className="flex gap-4">
        <TextField label="Course Name" placeholder="Enter Course Title" />
        <TextField label="Course Code" placeholder="CS101" />
      </div>
      <div className="flex gap-4">
        <TextField label="Credit Hours" placeholder="Eg 3hrs" />
        <TextField label="Semester" placeholder="Enter Semester" />
      </div>
      <div className="flex gap-4 flex-1">
        <Select
          label="Program"
          options={[
            { label: 'Computer Science', value: 'computer-science' },
            { label: 'Mathematics', value: 'mathematics' },
            { label: 'Physics', value: 'physics' },
          ]}
        />

      </div>
      <Button variant="primary" className="w-full">Create Course</Button>

    </section>
  )
}

export default CoursesForms