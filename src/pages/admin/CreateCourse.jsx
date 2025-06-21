import React from 'react'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import { useCreateCourse } from '../../hooks/admin/useAdminCourse'


export default function CreateCourse() {
    const { mutate, data, error, isPending } = useCreateCourse()
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
    const formik = useFormik(
        {
            initialValues: {
                name: "",
                image: ""
            },
            validationSchema,
            onSubmit: (values) => {
                const formData = new FormData() // multipart request
                formData.append("name", values.name)
                if (values.image) formData.append("image", values.image)
                mutate(formData, {
                    onSuccess: () => {
                        formik.resetForm() // reset fields
                    }
                })
            }
        }
    )
    return (
        // <div>
        //     CreateCategory
        //     <form onSubmit={formik.handleSubmit}>
        //         <label>Category Name</label>
        //         <input
        //             name='name'
        //             onChange={formik.handleChange}
        //             value={formik.values.name}
        //         >
        //         </input>
        //         {formik.touched.name && formik.errors.name && <>{formik.errors.name}</>}
        //         <label>Category Image</label>
        //         <input
        //             name='image'
        //             type='file'
        //             accept='image/*'
        //             onChange={
        //                 (e) => {
        //                     const file = e.currentTarget.files[0]
        //                     if (file) formik.setFieldValue("image", file)
        //                 }
        //             }
        //         >
        //         </input>
        //         {formik.touched.image && formik.errors.image && <>{formik.errors.image}</>}
        //         {
        //             formik.values.image &&
        //             <img
        //                 className='w-32 h-32 object-cover'
        //                 src={URL.createObjectURL(formik.values.image)}
        //             >
        //             </img>
        //         }
        //         <button type='submit'>Create</button>
        //     </form>
        // </div>
        <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-2xl shadow-xl space-y-6">
  <h2 className="text-2xl font-bold text-[#222740] text-center">🎨 Create Category</h2>

  <form onSubmit={formik.handleSubmit} className="space-y-5">
    {/* Category Name */}
    <div>
      <label className="block text-sm font-medium text-[#222740] mb-1">Category Name</label>
      <input
        name="name"
        onChange={formik.handleChange}
        value={formik.values.name}
        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#EFD365]"
        placeholder="Enter category name"
      />
      {formik.touched.name && formik.errors.name && (
        <p className="text-red-500 text-sm mt-1">{formik.errors.name}</p>
      )}
    </div>

    {/* Category Image */}
    <div>
      <label className="block text-sm font-medium text-[#222740] mb-1">Category Image</label>
      <input
        name="image"
        type="file"
        accept="image/*"
        onChange={(e) => {
          const file = e.currentTarget.files[0];
          if (file) formik.setFieldValue("image", file);
        }}
        className="block w-full text-sm text-[#222740] file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-[#F0C5CE] file:text-[#222740] hover:file:bg-[#EFD365] cursor-pointer"
      />
      {formik.touched.image && formik.errors.image && (
        <p className="text-red-500 text-sm mt-1">{formik.errors.image}</p>
      )}
    </div>

    {/* Image Preview */}
    {formik.values.image && (
      <div className="flex justify-center">
        <img
          className="w-32 h-32 object-cover rounded-xl border border-[#EFD365] shadow"
          src={URL.createObjectURL(formik.values.image)}
          alt="Preview"
        />
      </div>
    )}

    {/* Submit Button */}
    <button
      type="submit"
      className="w-full py-2 px-4 bg-[#222740] text-white font-semibold rounded-lg hover:bg-[#1a1d33] transition-colors"
    >
      Create
    </button>
  </form>
 
   <button
      type="button"
      onClick={() => navigate(-1)}
      className="className=px-4 py-2 bg-[#F0C5CE] text-[#222740] rounded-lg hover:bg-[#EFD365] font-semibold transition">
        ← 
    </button>
  
</div>

    )
}