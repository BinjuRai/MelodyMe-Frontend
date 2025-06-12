import React, { useState } from "react";
import { userRegisterUser as userRegisterUserTan } from "../../hooks/userRegisterUserTan";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useNavigate } from 'react-router-dom';


export default function RegisterForm() {
  const { mutate, data, error, isLoading, isSuccess, isError } = userRegisterUserTan();
  const [message, setMessage] = useState("");
  const navigate = useNavigate();


  const validationSchema = Yup.object({
    firstName: Yup.string().required("First name required"),
    lastName: Yup.string().required("Last name required"),
    username: Yup.string().required("Username required"),
    phoneno: Yup.string()
      .matches(/^\d+$/, "Phone number must contain only digits")
      .required("Phone number required"),
    email: Yup.string().email("Invalid email").required("Please fill email"),
    password: Yup.string()
      .min(8, "Password needs at least 8 characters")
      .required("Please fill password"),
  });

  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      username: "",
      phoneno: "",
      email: "",
      password: "",
    },
    validationSchema,
    onSubmit: (values) => {
      mutate(values, {
        onSuccess: (response) => {
          setMessage(response?.message || "Registration successful!");
          formik.resetForm();
        },
        onError: (error) => {
          setMessage(error?.response?.data?.message || "Registration failed. Please try again.");
        },
      });
    },
  //   validationSchema,
  // onSubmit: async (values, { setSubmitting }) => {
  //   try {
  //     setIsLoading(true);
  //     const response = await axios.post('http://your-api/register', values);
  //     if (response.status === 200 || response.status === 201) {
  //       // Navigate to login
  //       navigate("/login");
  //     }
  //   } catch (error) {
  //     console.error("Registration error", error);
  //   } finally {
  //     setIsLoading(false);
  //     setSubmitting(false);
  //   }
  // },
  });

  return (
    <div className="w-1/2 bg-[#1e2246] text-white flex flex-col justify-center items-center p-8">
      <h1 className="text-3xl font-bold mb-6">MelodyMe</h1>
      <h2 className="text-l mb-4">Create your account</h2>

      <form onSubmit={formik.handleSubmit} className="w-full max-w-sm flex flex-col gap-4">
        <div className="w-full flex gap-1">
          <input
            type="text"
            name="firstName"
            placeholder="First name"
            className="p-2 rounded text-black w-1/2"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.firstName}
          />
          {formik.touched.firstName && formik.errors.firstName && (
            <p className="text-red-400 text-sm mt-1">{formik.errors.firstName}</p>
          )}

          <input
            type="text"
            name="lastName"
            placeholder="Last name"
            className="p-2 rounded text-black w-1/2"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.lastName}
          />
          {formik.touched.lastName && formik.errors.lastName && (
            <p className="text-red-400 text-sm mt-1">{formik.errors.lastName}</p>
          )}
        </div>

        <div>
          <input
            type="text"
            name="username"
            placeholder="Username"
            className="p-2 rounded text-black w-full"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.username}
          />
          {formik.touched.username && formik.errors.username && (
            <p className="text-red-400 text-sm mt-1">{formik.errors.username}</p>
          )}
        </div>

        <div>
          <input
            type="text"
            name="phoneno"
            placeholder="Phone no."
            className="p-2 rounded text-black w-full"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.phoneno}
          />
          {formik.touched.phoneno && formik.errors.phoneno && (
            <p className="text-red-400 text-sm mt-1">{formik.errors.phoneno}</p>
          )}
        </div>

        <div>
          <input
            type="email"
            name="email"
            placeholder="Email address"
            className="p-2 rounded text-black w-full"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
          />
          {formik.touched.email && formik.errors.email && (
            <p className="text-red-400 text-sm mt-1">{formik.errors.email}</p>
          )}
        </div>

        <div>
          <input
            type="password"
            name="password"
            placeholder="Password"
            className="p-2 rounded text-black w-full"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.password}
          />
          {formik.touched.password && formik.errors.password && (
            <p className="text-red-400 text-sm mt-1">{formik.errors.password}</p>
          )}
        </div>

        <button
          type="submit"
          disabled={isLoading}
          className="text-[#ffff] font-bold py-2 bg-gradient-to-r from-[#0a1229] to-[#3752bf] rounded-[12px] hover:bg-gray-300"
        >
          {isLoading ? "Registering..." : "Register"}
        </button>
      </form>

      {message && (
        <p className={`mt-4 text-center ${isError ? "text-red-500" : "text-green-400"}`}>
          {message}
        </p>
      )}
    </div>
  );
}

