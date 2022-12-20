import React from 'react'
import Back from '../common/back/Back'
import CoursesCard from './CoursesCard'
import Onlinecourses from './Onlinecourses'

const CourseHome = () => {
  return (
    <div>
      <Back title='Explore Courses'/>
      <CoursesCard title='Explore Courses'/>
      <Onlinecourses/>
    </div>
  )
}

export default CourseHome
