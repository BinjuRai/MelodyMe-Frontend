import { Outlet, NavLink } from "react-router-dom";

import { AuthContext } from "../auth/AuthProvider";
import { useContext } from "react";
import Footer from "./Footer";
import Header from "./Header";

export default function AdminLayout() {
    const { user, logout } = useContext(AuthContext);

    return (
      

     

        <div className="flex h-screen">
            {/* <aside className="w-64 bg-[#283256] shadow-lg p-4">
                <h2 className="text-xl font-bold mb-6 text-cyan-50">Admin Panel</h2>
                <nav className="flex flex-col space-y-3 ">
                    <NavLink
                        to="/admin/users"
                        className={({ isActive }) =>
                            `${
                                isActive
                                    ? "text-blue-200 font-semibold"
                                    : "text-gray-700 hover:text-pink-400"
                            } text-white block`
                        }
                    >
                        Users
                    </NavLink>
                    <NavLink
                        to="/admin/lesson"
                        className={({ isActive }) =>
                            `${
                                isActive
                                    ? "text-blue-200 font-semibold"
                                    : "text-gray-700 hover:text-pink-400"
                            } text-white block`
                        }
                    >
                        Lesson
                    </NavLink>
                    <NavLink
                        to="/admin/course"
                        className={({ isActive }) =>
                            `${
                                isActive
                                   ? "text-blue-200 font-semibold"
                                    : "text-gray-700 hover:text-pink-400"
                            } text-white block`
                        }
                    >
                        Courses
                    </NavLink>
                </nav>
            </aside> */}
            <aside className="w-64 h-full bg-[#222740] shadow-xl p-6 ">
  <h2 className="text-2xl font-bold mb-8 text-[#EFD365] text-center tracking-wide">
    Admin Panel
  </h2>

  <nav className="flex flex-col space-y-4">
    <NavLink
      to="/admin/user"
      className={({ isActive }) =>
        `block px-4 py-2 rounded-lg transition-all duration-200 ${
          isActive
            ? "bg-[#F0C5CE] text-[#222740] font-semibold"
            : "text-white hover:bg-[#F0C5CE]/20 hover:text-[#EFD365]"
        }`
      }
    >
      👤 Users
    </NavLink>

    <NavLink
      to="/admin/lesson"
      className={({ isActive }) =>
        `block px-4 py-2 rounded-lg transition-all duration-200 ${
          isActive
            ? "bg-[#F0C5CE] text-[#222740] font-semibold"
            : "text-white hover:bg-[#F0C5CE]/20 hover:text-[#EFD365]"
        }`
      }
    >
      📘 Lessons
    </NavLink>

    <NavLink
      to="/admin/course"
      className={({ isActive }) =>
        `block px-4 py-2 rounded-lg transition-all duration-200 ${
          isActive
            ? "bg-[#F0C5CE] text-[#222740] font-semibold"
            : "text-white hover:bg-[#F0C5CE]/20 hover:text-[#EFD365]"
        }`
      }
    >
      🎓 Courses
    </NavLink>
  </nav>
</aside>

            <div className="flex-1 flex flex-col ">
                {/* Header */}
                <header className="shadow-md px-6 py-4 flex justify-between items-center bg-[#fff]">
                    <span className="text-lg font-medium">
                        Welcome, {user?.username || "Admin"}
                    </span>
                    <button
                        onClick={logout}
                        className="px-4 py-2 bg-[#EFD365] text-black rounded hover:bg-red-600 transition"
                    >
                        Logout
                    </button>
                </header>

                {/* Content area */}
                <main className="p-6 overflow-y-auto flex-1">
                    <Outlet />
                </main>
               
                <Footer/>
            </div>
        </div>
    
    );
}