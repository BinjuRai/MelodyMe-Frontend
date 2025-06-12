
// export default function Login() {
//     let navigate = useNavigate();
//     const reroute = (event) => {
//         event.preventDefault();
// navigate("/register") 
//     }
//     return (
//         <div>
//             <div className="container"> Login</div>
//             <div>
//             <button class="btn"onClick={reroute}>Register</button>
//             <NavLink to="/register">Register Link</NavLink> 
//             <Link to="/">Homepage</Link> 
//             </div>
//         </div>
//     );
// }

import React from "react";
import { useNavigate, Link, NavLink } from "react-router-dom"; // fixed import
import LoginForm from "../components/auth/loginForm";

export default function Login() {
  const navigate = useNavigate();
  const reroute = (event) => {
    event.preventDefault();
    navigate("/register");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="flex w-[900px] h-[600px] rounded-xl shadow-lg overflow-hidden">
        <div className="bg-img object-cover">
         <img src="src/assets/images/bg.png" alt="" />
        </div>
        <LoginForm/>
      </div>
    </div>
  );
}
