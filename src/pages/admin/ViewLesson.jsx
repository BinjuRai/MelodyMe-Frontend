import React from 'react'
import { useParams } from "react-router-dom"

import { useGetOneLesson } from '../../hooks/admin/useAdminLesson'

export default function ViewLesson() {
    const { id } = useParams()
        const { lesson, error, isPending } = useGetOneLesson(id)
        if(error) <>{error}</>
  return (
   <div>
            View Lesson
            {lesson.name}
            
        </div>
  )
}
