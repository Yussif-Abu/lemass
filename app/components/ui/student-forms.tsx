import Heading from '../Header'
import Button from '../Button'
import { Select, TextField } from '../../helper'

const StudentForms = () => {
    return (
        <section className="card flex flex-col gap-4 p-6">
            <div className="rounded-lg bg-primary p-4 [&_.page-header]:mb-0 [&_.page-description]:text-indigo-100 [&_.page-title]:text-white">
                <Heading title="New Student" subtitle="Fill all required fields to create a new student." />
            </div>

            <div className="flex flex-col gap-4 md:flex-row">
                <TextField className="flex-1" label="Full Name" name="name" placeholder="Enter student name" required />
                <TextField className="flex-1" label="Student ID" name="studentId" placeholder="STU-1001" required />
            </div>

            <div className="flex flex-col gap-4 md:flex-row">
                <Select
                    className="flex-1"
                    label="Program"
                    name="program"
                    options={[
                        { label: 'Computer Science', value: 'Computer Science' },
                        { label: 'Business Administration', value: 'Business Administration' },
                        { label: 'Mathematics', value: 'Mathematics' },
                        { label: 'Information Technology', value: 'Information Technology' },
                        { label: 'Data Science', value: 'Data Science' },
                        { label: 'Biological Sciences', value: 'Biological Sciences' },
                        { label: 'Psychology', value: 'Psychology' },
                        { label: 'Economics', value: 'Economics' },
                        { label: 'History', value: 'History' },
                        { label: 'Fine Arts', value: 'Fine Arts' },
                        { label: 'Physics', value: 'Physics' },
                        { label: 'Law', value: 'Law' },
                        { label: 'Sociology', value: 'Sociology' },
                        { label: 'Chemistry', value: 'Chemistry' },
                    ]}
                    required
                />
                <Select
                    className="flex-1"
                    label="Level"
                    name="level"
                    options={[
                        { label: 'Level 100', value: 100 },
                        { label: 'Level 200', value: 200 },
                        { label: 'Level 300', value: 300 },
                        { label: 'Level 400', value: 400 },
                    ]}
                    required
                />
            </div>

            <div className="flex flex-col gap-4 md:flex-row">
                <TextField className="flex-1" label="GPA" name="gpa" placeholder="3.50" type="number" min="0" max="4" step="0.01" required />
                <TextField className="flex-1" label="Attendance (%)" name="attendance" placeholder="90" type="number" min="0" max="100" required />
            </div>

            <Select
                label="Status"
                name="status"
                options={[
                    { label: 'Active', value: 'Active' },
                    { label: 'Pending', value: 'Pending' },
                    { label: 'Inactive', value: 'Inactive' },
                ]}
                required
            />

            <Button variant="primary" className="w-full">Create Student</Button>
        </section>
    )
}

export default StudentForms
