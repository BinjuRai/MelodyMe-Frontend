import React, { useState } from 'react'
import { useAdminCourse, useDeleteOneCourse } from '../../hooks/admin/useAdminCourse'
import { getBackendImageUrl } from '../../utils/backend-image'
import { Link } from 'react-router-dom'
import DeleteModal from '../DeleteModel'



export default function CourseTable() {
    const { courses, error, isPending } = useAdminCourse()
    const deleteCourseHook = useDeleteOneCourse()
    const [deleteId, setDeleteId] = useState(null)

    const handleDelete = () => {
        deleteCourseHook.mutate(
            deleteId,
            {
                onSuccess: () => {
                    setDeleteId(null)
                }
            }
        )
    }

    return (

<div className="p-4">

  <DeleteModal
    isOpen={deleteId}
    onClose={() => setDeleteId(null)}
    onConfirm={handleDelete}
    title="Delete Confirmation"
    description="Are you sure you want to delete"
  />

  <div className="flex justify-between items-center mb-6">
    <h2 className="text-2xl font-bold text-[#222740]">Course Table</h2>
    <Link to="/admin/course/create">
      <button className="bg-[#222740] text-white px-4 py-2 rounded-lg hover:bg-[#1a1d33] transition-colors">
        + Create Course
      </button>
    </Link>
  </div>


  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
    {courses.map((course) => (
      <div
        key={course._id}
        className="bg-white rounded-xl shadow-md p-4 flex flex-col items-center text-center"
      >
        <img
          src={getBackendImageUrl(course.filepath)}
          alt={course.name}
          className="w-full h-40 object-cover rounded-lg mb-4"
        />
        <h3 className="text-lg font-semibold mb-2 text-[#222740]">{course.name}</h3>
        <div className="flex gap-2 mt-auto">
          <Link to={`/admin/course/${course._id}`}>
            <button className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600 text-sm">View</button>
          </Link>
          <Link to={`/admin/course/${course._id}/edit`}>
            <button className="bg-yellow-500 text-white px-3 py-1 rounded hover:bg-yellow-600 text-sm">Edit</button>
          </Link>
          <button
            onClick={() => setDeleteId(course._id)}
            className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 text-sm"
          >
            Delete
          </button>
        </div>
      </div>
    ))}
  </div>
</div>

    )
}