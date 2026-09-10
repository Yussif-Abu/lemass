import React from 'react'
import Tabs from '../../components/Tabs'

const CourseTabs = [
    { id: 'all-courses', label: 'All Courses', href: '/courses' },
    { id: 'register-course', label: 'Register Course', href: '/courses/register-course' },
    { id: 'registered-courses', label: 'Registered Courses', href: '/courses/registered-courses' },
    { id: 'backlog', label: 'Backlog', href: '/courses/backlog' },
    { id: 'graduation', label: 'Graduation', href: '/courses/graduation' }
]


const layout = ({children}: {children: React.ReactNode}) => {
  return (
    <div className="page-container">
        <Tabs items={CourseTabs} />
      {children}
    </div>
  )
}

export default layout