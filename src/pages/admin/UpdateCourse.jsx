import React from 'react'
import { useFormik } from 'formik'
import * as Yup from "yup"
import { useGetOneCourse, useUpdateOneCourse } from '../../hooks/admin/useAdminCourse'
import { useParams } from 'react-router-dom'
import { getBackendImageUrl } from '../../utils/backend-image'
 import { Link } from 'react-router-dom';


export default function UpdateCourse() {

    const { id } = useParams()

    const validationSchema = Yup.object(
        {
            name: Yup.string().required("Name required"),
            image: Yup.mixed().nullable().test(
                "fileSize",
                "File too large",
                (value) => !value || (value && value.size <= 5 * 1024 * 1024)
            )
        }
    )
    const courseOne = useGetOneCourse(id)
    // courseOne.data, courseOne.isPending
    const updateCourse = useUpdateOneCourse()

    const formik = useFormik(
        {
            enableReinitialize: true, // allow rerender
            initialValues: {
                name: courseOne.course?.name || "",
                image: "" // files/image no need to set
            },
            validationSchema,
            onSubmit: (values) => {
                const formData = new FormData()
                formData.append("name", values.name)
                if (values.image) formData.append("image", values.image)
                updateCourse.mutate(
                    { id, data: formData },
                    {
                        onSuccess: () => formik.resetForm()
                    }
                )
            }
        }
    )
    return (
      

<div>
  

  

  {/* Heading */}
  <div className="text-2xl text-center font-bold text-[#222740] mb-4">
    Update Course
  </div>
  
 

  {/* Form */}
  <form
    onSubmit={formik.handleSubmit}
    className="max-w-md mx-auto p-6 bg-white rounded-2xl shadow-lg space-y-6"
  >
    {/* Course Name */}
    <div>
      <label className="block text-sm font-semibold text-[#222740] mb-1">
        Course Name
      </label>
      <input
        name="name"
        onChange={formik.handleChange}
        value={formik.values.name}
        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#EFD365]"
        placeholder="Enter course name"
      />
      {formik.touched.name && formik.errors.name && (
        <p className="text-red-500 text-sm mt-1">{formik.errors.name}</p>
      )}
    </div>

    {/* Course Image Upload */}
    <div>
      <label className="block text-sm font-semibold text-[#222740] mb-1">
        Course Image
      </label>
      <input
        name="image"
        type="file"
        accept="image/*"
        onChange={(e) => {
          const file = e.currentTarget.files[0];
          if (file) formik.setFieldValue("image", file);
        }}
        className="block w-full text-sm text-[#222740] file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-[#F0C5CE] file:text-[#222740] hover:file:bg-[#efd365] cursor-pointer"
      />
      {formik.touched.image && formik.errors.image && (
        <p className="text-red-500 text-sm mt-1">{formik.errors.image}</p>
      )}
    </div>

    {/* Image Preview */}
    <div className="flex justify-center">
      <img
        className="w-32 h-32 object-cover rounded-xl border border-[#EFD365]"
        src={
          formik.values.image
            ? URL.createObjectURL(formik.values.image)
            : getBackendImageUrl(courseOne.course?.filepath)
        }
        alt="Course"
      />
    </div>

    {/* Submit Button */}
    <div className="text-center">
      <button
        type="submit"
        className="w-full py-2 px-4 bg-[#222740] text-white font-semibold rounded-lg hover:bg-[#1a1d33] transition-colors"
      >
        Update
      </button>
    </div>
  </form>
  <div className="max-w-md mx-auto flex justify-start mt-4">
    <Link to="/admin/course">
      <button className="px-4 py-2 bg-[#F0C5CE] text-[#222740] rounded-lg hover:bg-[#EFD365] font-semibold transition">
        ← 
      </button>
    </Link>
  </div>
</div>

    )
}