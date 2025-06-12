import React from 'react'
import {BrowserRouter, Route ,Routes} from 'react-router-dom'
import Homepage from '../pages/Homepage'
import Register from '../pages/Register'
import MainLayout from '../layouts/MainLayout'
import Login from '../pages/Login'
import Login_text from '../pages/Login_text'
import GuestRoute from './GuestRoute'
import NormalUserRoute from './NormalUserRoute'
import StateManage from "../pages/StateManage";


export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/state-test' element={<StateManage />}>
        </Route>
        <Route path='/login-text' element={<Login_text/>}></Route>
        <Route element={<MainLayout/>}>
         <Route path="/" element={<Homepage/>}> </Route>

         <Route element={<GuestRoute/>}>
         <Route path="/login" element={<Login/>}> </Route>
         <Route path="/register" element={<Register/>}></Route>
         </Route>
        </Route>

        <Route path ="/normal/*" element= {<NormalUserRoute/>}>
          <Route path='order' element = {<> My Order</>}></Route>
          <Route path='cart' element = {<> My Cart</>}></Route>
          <Route path='*' element = {<> 404 Not found</>}></Route>
        </Route>

        <Route path='/admin/*'>
        <Route element={<MainLayout/>}>
        <Route path="dashboard" element= {<>Admin Dashboard</>}></Route>
        <Route path="course" element= {<>Admin course</>}></Route>
        <Route path="category" element= {<>Admin Category</>}></Route>
        <Route path="product" element= {<>Admin Product</>}></Route>
        </Route>
        </Route> 

       </Routes>
    </BrowserRouter>
  )
}
