import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useGetUserById, useUpdateUser } from '../../hooks/admin/useAdminUser';
import { getBackendImageUrl } from '../../utils/backend-image';
import { toast } from 'react-toastify';

const EditUser = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { data: user, isLoading, isError, error } = useGetUserById(id);
  const updateUser = useUpdateUser();

  const validationSchema = Yup.object({
    firstName: Yup.string().required('First name required'),
    lastName: Yup.string().required('Last name required'),
    email: Yup.string().email('Invalid email').required('Email required'),
    image: Yup.mixed()
      .nullable()
      .test('fileSize', 'File too large', (value) => !value || value.size <= 5 * 1024 * 1024),
  });

  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      firstName: user?.firstName || '',
      lastName: user?.lastName || '',
      email: user?.email || '',
      image: null,
    },
    validationSchema,
    onSubmit: (values) => {
      const formData = new FormData();
      formData.append('firstName', values.firstName);
      formData.append('lastName', values.lastName);
      formData.append('email', values.email);
      if (values.image) {
        formData.append('image', values.image);
      }

      updateUser.mutate(
        { id, data: formData },
        {
          onSuccess: () => {
            toast.success('User updated successfully');
            navigate('/admin/user'); // Redirect back to user list
          },
          onError: (err) => {
            toast.error(err?.message || 'Failed to update user');
          },
        }
      );
    },
  });

  if (isLoading) return <div>Loading user data...</div>;
  if (isError) return <div className="text-red-500">Error: {error?.message || 'Failed to fetch user'}</div>;

  return (
    <div className="min-h-screen bg-[#fef9f3] flex flex-col justify-center py-10 px-4">
      <div className="max-w-md mx-auto bg-white rounded-3xl shadow-xl p-8 relative">
        <h1 className="text-3xl font-extrabold text-center text-[#222740] mb-8">Edit User</h1>

        <form onSubmit={formik.handleSubmit} className="space-y-6">
          {/* First Name */}
          <div>
            <label className="block text-sm font-semibold text-[#222740] mb-2">First Name</label>
            <input
              name="firstName"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.firstName}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg"
              placeholder="First name"
            />
            {formik.touched.firstName && formik.errors.firstName && (
              <p className="text-red-500 text-sm mt-1">{formik.errors.firstName}</p>
            )}
          </div>

          {/* Last Name */}
          <div>
            <label className="block text-sm font-semibold text-[#222740] mb-2">Last Name</label>
            <input
              name="lastName"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.lastName}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg"
              placeholder="Last name"
            />
            {formik.touched.lastName && formik.errors.lastName && (
              <p className="text-red-500 text-sm mt-1">{formik.errors.lastName}</p>
            )}
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-semibold text-[#222740] mb-2">Email</label>
            <input
              name="email"
              type="email"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.email}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg"
              placeholder="Email"
            />
            {formik.touched.email && formik.errors.email && (
              <p className="text-red-500 text-sm mt-1">{formik.errors.email}</p>
            )}
          </div>

          {/* Image Upload */}
          <div>
            <label className="block text-sm font-semibold text-[#222740] mb-2">Profile Image</label>
            <input
              name="image"
              type="file"
              accept="image/*"
              onChange={(e) => {
                const file = e.currentTarget.files[0];
                formik.setFieldValue('image', file);
              }}
              className="block w-full text-sm file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:bg-[#F0C5CE] file:text-[#222740] hover:file:bg-[#EFD365]"
            />
            {formik.touched.image && formik.errors.image && (
              <p className="text-red-500 text-sm mt-1">{formik.errors.image}</p>
            )}
          </div>

          {/* Preview */}
          <div className="flex justify-center">
            <img
              src={
                formik.values.image
                  ? URL.createObjectURL(formik.values.image)
                  : getBackendImageUrl(user.filepath)
              }
              alt="Preview"
              className="w-32 h-32 object-cover rounded-xl border-4 border-[#EFD365]"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={updateUser.isLoading}
            className="w-full py-3 bg-[#222740] text-white font-semibold rounded-xl hover:bg-[#1a1d33]"
          >
            {updateUser.isLoading ? 'Updating...' : 'Update User'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default EditUser;
