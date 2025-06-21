import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useCreateUser } from '../../hooks/admin/useAdminUser'; // adjust path if needed
import { toast } from 'react-toastify';

export default function CreateUser() {
  const createUser = useCreateUser();

  const validationSchema = Yup.object({
    username: Yup.string().required('Username is required'),
    email: Yup.string().email('Invalid email').required('Email is required'),
    password: Yup.string().required('Password is required'),
    firstName: Yup.string(),
    lastName: Yup.string(),
  });

  const formik = useFormik({
    initialValues: {
      username: '',
      email: '',
      password: '',
      firstName: '',
      lastName: '',
    },
    validationSchema,
    onSubmit: (values) => {
      // Send JSON data, not FormData
      createUser.mutate(values, {
        onSuccess: () => {
          formik.resetForm();
          toast.success('User created successfully');
        },
        onError: (error) => {
          toast.error(error?.message || 'Failed to create user');
        },
      });
    },
  });

  return (
    <div className="min-h-screen bg-[#fef9f3] flex flex-col justify-center py-10 px-4">
      <div className="max-w-md mx-auto bg-white rounded-3xl shadow-xl p-8 relative">
        <h1 className="text-3xl font-extrabold text-center text-[#222740] mb-8">Create User</h1>

        <form onSubmit={formik.handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm font-semibold text-[#222740] mb-2">Username</label>
            <input
              name="username"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.username}
              placeholder="Enter username"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#EFD365] transition"
            />
            {formik.touched.username && formik.errors.username && (
              <p className="text-red-500 text-sm mt-1">{formik.errors.username}</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-semibold text-[#222740] mb-2">Email</label>
            <input
              type="email"
              name="email"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.email}
              placeholder="Enter email"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#EFD365] transition"
            />
            {formik.touched.email && formik.errors.email && (
              <p className="text-red-500 text-sm mt-1">{formik.errors.email}</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-semibold text-[#222740] mb-2">Password</label>
            <input
              type="password"
              name="password"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.password}
              placeholder="Enter password"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#EFD365] transition"
            />
            {formik.touched.password && formik.errors.password && (
              <p className="text-red-500 text-sm mt-1">{formik.errors.password}</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-semibold text-[#222740] mb-2">First Name (optional)</label>
            <input
              name="firstName"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.firstName}
              placeholder="Enter first name"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#EFD365] transition"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-[#222740] mb-2">Last Name (optional)</label>
            <input
              name="lastName"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.lastName}
              placeholder="Enter last name"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#EFD365] transition"
            />
          </div>

          {/* Removed image input */}

          <button
            type="submit"
            disabled={createUser.isLoading}
            className="w-full py-3 bg-[#222740] text-white font-semibold rounded-xl hover:bg-[#1a1d33] transition"
          >
            {createUser.isLoading ? 'Creating...' : 'Create User'}
          </button>
        </form>
      </div>
    </div>
  );
}
