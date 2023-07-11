
import './App.css';
import { Nav } from './comp/Nav';
import { Leftdash } from './comp/Leftdash.js';
import { Dashbook } from './comp/Dashbook';
import { Studentdt } from './comp/Studentdt';
import Login from './comp/Login';
import { useFormik } from 'formik';

import { Link,Routes,Route,BrowserRouter } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import { useState } from 'react';
import { motion } from "framer-motion"


function App() {
  const aaaa ={heh:"heh",hah:"hah"}
  const [nam,setNam]=useState(false);
  const handleCheckboxChange = (isChecked) => {
    setNam(isChecked)
    
  };
  const variants = {
    open: { opacity: 1, x: 10 },
    closed: { opacity: 1, x: -500,duration: 8},
  }
  const variantsa = {
    closed: { opacity: 1, x: 10 },
    open: { opacity: 1, x: -200,duration: 8},
  }
  
  return (
   
    <div className="App">
      <BrowserRouter>
      <motion.div >
        <div className="d-flex justify-content-between align-items-center p-2" style={{height: "64px",background:"#a326d9"}}><div className='h3'>Student</div>
        <div className='h3'>       
              <Link to="/login" className='text-decoration-none text-dark'>Login</Link>
</div></div>
        <div className='row'>
        <motion.div animate={nam ? "open" : "closed"}  variants={variants} className="col-2"><Leftdash ></Leftdash></motion.div>
        <motion.div animate={nam ? "closed" : "open"} variants={variantsa}className="col-10"><Dashbook onCheckboxChange={handleCheckboxChange}></Dashbook></motion.div>
       
        </div>
      </motion.div>s
      
      </BrowserRouter>
    </div>
  );
}

export default App;
