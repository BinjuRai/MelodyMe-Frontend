import { useFormik } from "formik";
import * as Yup from "yup";
import { NavLink, useNavigate } from "react-router-dom";
import axios from "axios";
import { useState } from "react";
import { useLoginUser } from "../../hooks/useLoginUser";

const LoginForm = () => {
  const navigate = useNavigate();
  const [apiError, setApiError] = useState("");
  const { mutate, data, isPending, error} = useLoginUser()
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
  validationSchema: Yup.object({
    email: Yup.string().email("Invalid email").required("Required"),
    password: Yup.string().min(6, "At least 6 characters").required("Required"),
  }),
  onSubmit: (values) => {
    mutate(values, {
      onSuccess: (response) => {
        setMessage(response?.message || "Login successful!");
        formik.resetForm();
        navigate("/");
      },
      onError: (error) => {
        setMessage(error?.response?.data?.message || "Login failed. Please try again.");
      },
    });
  },
});

  return (
    <div className="w-1/2 bg-[#1e2246] text-white flex flex-col justify-center items-center p-8">
      <h1 className="text-3xl font-bold mb-6">MelodyMe</h1>
      <h2 className="text-xl mb-4">Login</h2>

      <form onSubmit={formik.handleSubmit} className="w-full max-w-sm flex flex-col gap-4">
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

        {apiError && (
          <p className="text-red-400 text-sm mt-1">{apiError}</p>
        )}

        <button
          type="submit"
          className=" text-[#ffff] font-bold py-2 bg-gradient-to-r from-[#0a1229] to-[#3752bf] rounded-[12px] hover:bg-gray-300"
        >
          Join
        </button>
      </form>

      <div className="mt-4 text-sm">
        <NavLink to="/register" className="underline light">New? Create your account</NavLink>
      </div>
    </div>
  );
};

export default LoginForm;
