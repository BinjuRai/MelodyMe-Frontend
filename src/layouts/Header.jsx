import { Link, NavLink } from 'react-router-dom';
import React, { useContext } from 'react'
import { AuthContext } from '../auth/AuthProvider'

const Header = () => {
    const {user, logout} = useContext(AuthContext)
  return (
    <header className='bg-[#222740] py-1'>
      <div className="container">
        <nav className="space-x-4 flex justify-between items-center light">
          <NavLink  to="/" className="logoo py-7 light font-extrabold">MelodyMe</NavLink>
          
          <div className='flex gap-5 '>
          <NavLink  to="/" className="light" >About us</NavLink>
          <NavLink  to="/" className="light">Courses</NavLink>
          <NavLink  to="/" className="light" >Resources</NavLink>
          <NavLink  to="/" className="light">Contact us</NavLink>
          </div>
          <div className='flex gap-5 flex-row justify-center items-center'>
        
              {
              !user && (
                <>
               
                <NavLink to="/register" className="light " >Register</NavLink>
          <NavLink to="/login"
           className='px-5 py-2  bg-gradient-to-r from-[#0a1229] to-[#4258b2e7] rounded-[18px] text-[#fff] hover:bg-gray-300' >
            Login
            </NavLink>
                </>
              )
            }
            {
              user && (
                <>
                Welcome {user.username},
                <NavLink onClick={logout}
                className='light'>Logout</NavLink>
                </>
              )
            }
          </div>
        
        </nav>
      </div>
    </header>
  );
};

export default Header;


// 

