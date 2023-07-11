import React, { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import { Addteacher } from './Addteacher'
import { Allstudent } from './Allstudent'
import { Showstd } from './Showstd'
import { Studentdt } from './Studentdt'
import { Allteachers } from './Allteachers'
import Teacherdetails from './Teacherdetails'
import { BiArrowFromRight } from "react-icons/bi";
import Updateteacher from './Updateteacher'
import Login from './Login'

export const Dashbook = (props) => {
  const [onclk,setOnclk]=useState(false);
  const onclose=(e)=>{
  
    setOnclk(!onclk);
    props.onCheckboxChange(!onclk);
   
  }
  const [teashow,setTeashow]=useState("");
  const newyahoo=(sho)=>{
    console.log(sho)
    setTeashow(sho);
  }
  
  return (
    <div  >
      <div > <button class="btn btn-danger " value={onclk} onClick={onclose}   ><BiArrowFromRight/></button></div>
      <Routes>
        <Route path='/student' element={<Studentdt ></Studentdt>}></Route>
        <Route path='/studentdetails' element={<Showstd></Showstd>}></Route>
        <Route path='/allstudents' element={ <Allstudent></Allstudent>}></Route>
        <Route path='/addteacher' element={<Addteacher></Addteacher>}></Route>
        <Route path='/teacherdetails'element={<Teacherdetails></Teacherdetails>} ></Route>
        <Route path='/allteachers'element={<Allteachers onteachershow={newyahoo}></Allteachers>} ></Route>
        <Route path='/updateteacher'element={<Updateteacher  teashow={teashow}></Updateteacher>} ></Route>
        
      <Route path='/login'element={<Login></Login>} ></Route>
      
      </Routes>
    </div >
  )
}
