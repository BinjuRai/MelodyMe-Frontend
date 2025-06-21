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

import Courses from '../pages/admin/courses'
import LessonContent from '../pages/admin/lesson_content'
import AdminLayout from '../layouts/AdminLayout'
import CourseTable from '../components/admin/CourseTable'
import LessonTable from '../components/admin/LessonTable'
import CreateCourse from '../pages/admin/createCourse'
import UpdateCourse from '../pages/admin/UpdateCourse'
import ViewCourse from '../pages/admin/ViewCourse'
import UserManagement from '../pages/admin/UserManagement'
import EditUser from '../components/admin/EditUser'
// import CreateUsers from '../pages/admin/CreateUser'
import CreateUsers from '../components/admin/CreateUsers'


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

        {/* <Route path='/admin/*'>
        <Route element={<MainLayout/>}>
        <Route path="dashboard" element= {<>Admin Dashboard</>}></Route>
        <Route path="course" element= {<>Admin course</>}></Route>
        <Route path="category" element= {<>Admin Category</>}></Route>
        <Route path="product" element= {<>Admin Product</>}></Route>
        </Route>
        </Route>  */}
         <Route element={<AdminLayout/>}>
          <Route path='/admin/*'>
            <Route path='user' element={<UserManagement/>}></Route>
            <Route path='user/:id/edit' element={<EditUser/>}></Route>
            {/* <Route path='user/:id' element={<ViewUser/>}></Route> */}
            <Route path='user/create' element={<CreateUsers/>}></Route>


            <Route path='Lessons' element={<LessonContent/>}></Route>
            <Route path='Lesson' element={<LessonTable/>}></Route>

            {/* <Route path='lesson/:id' element={<ViewLesson/>}></Route> */}

            <Route path='courses' element={<Courses/>}></Route>
            <Route path='Course' element={<CourseTable/>}></Route>
           <Route path='course/create' element={<CreateCourse/>}></Route>
            <Route path='course/:id/edit' element={<UpdateCourse/>}></Route>
            <Route path='course/:id' element={<ViewCourse/>}></Route>
            



            {/* // <Route path='category/create' element={<CreateCategory/>}></Route>
            // <Route path='category/id' element={<ViewCategory/>}></Route> */}


          </Route>
        </Route>

       </Routes>
    </BrowserRouter>
  )
}
