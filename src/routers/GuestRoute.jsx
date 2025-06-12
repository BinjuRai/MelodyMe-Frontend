// import { Navigate, Outlet } from "react-router-dom";
// import { AuthContext } from "../auth/AuthProvider";
// import { useContext } from "react";

// import React from 'react'

// export default function GuestRoute() {
//     const { user, loading }= useContext(AuthContext)
    
//     if (loading) return <>Loading</>

//     if(user) return <Navigate to= "/"/>

//   return <Outlet />
// }
  

import React, { useContext } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { AuthContext } from '../auth/AuthProvider'; // Ensure this is the correct context

export default function GuestRoute() {
  const context = useContext(AuthContext);

  // Prevent destructuring if context is undefined
  if (!context) return <>Context not available</>;

  const { user, loading } = context;

  if (loading) return <>Loading...</>;
  if (user) return <Navigate to="/" />;

  return <Outlet />;
}
