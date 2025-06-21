
import React from 'react'
import { useParams } from "react-router-dom"
import { getBackendImageUrl } from '../../utils/backend-image'
import { useGetOneCourse } from '../../hooks/admin/useAdminCourse'
import { Link } from 'react-router-dom';


export default function ViewCourse() {
   const { id } = useParams()
    const { course, error, isPending } = useGetOneCourse(id)
    if(error) <>{error}</>
    return (
        // <div>
        //     View Course
        //     {course.name}
        //     <img src={getBackendImageUrl(course.filepath)}></img>
        // </div>

   

<div className="max-w-2xl mx-auto p-6 rounded-2xl shadow-xl bg-gradient-to-br from-white to-[#fef9f3] relative overflow-hidden">

  <div className="absolute inset-0 bg-[url('/music-notes-bg.png')] opacity-10 bg-cover bg-center z-0" />

  <div className="relative z-10 space-y-4">
    
    <div className="mb-2">
      <Link to="/admin/course">
        <button className="text-[#222740] bg-[#F0C5CE] hover:bg-[#EFD365] px-4 py-2 rounded-lg font-semibold shadow transition duration-200">
          ← 
        </button>
      </Link>
    </div>

    <h2 className="text-2xl text-center font-bold text-[#222740]">🎵 View Course</h2>

    <p className="text-lg font-semibold text-[#222740]">{course.name}</p>

    <img
      src={getBackendImageUrl(course.filepath)}
      alt="Course Cover"
      className="w-full max-h-64 object-cover rounded-xl border-2 border-[#EFD365] shadow-md"
    />
  </div>
</div>





    )
}
