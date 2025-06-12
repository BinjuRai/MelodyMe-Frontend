import React from 'react'
import RegisterForm from '../components/auth/RegisterForm'

export default function Register() {
  return (
   <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="flex w-[900px] h-[600px] rounded-xl shadow-lg overflow-hidden">
        
        <RegisterForm/>
        <div className="bg-img object-cover">
         <img src="src/assets/images/bg.png" alt="" />
        </div>
        
      </div>
    </div>
  );
}