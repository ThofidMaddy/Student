import React, { useState,useLocation } from 'react'
import { motion } from "framer-motion"

const Updateteacher = (props) => {
   
    const [upddat,setUpddat]=useState({});

    const updatehandleSubmit=()=>{

    }
    const updatehandleChange=(e)=>{
        setUpddat({...upddat,[e.target.name]:e.target.value});
        console.log(upddat);
    }

  return (
    <motion.div initial={{x:100,delay:50}} animate={{x:0,delay:50}}  className="row m-5">
                <motion.form transition={{ delay: 5 }} onSubmit={updatehandleSubmit}>
                <div className="row">
                                        <h5>Update {props.teashow}</h5>
                                </div>
           
                                <div className="p-2 row">
                                        <div className="col-md-3">
                                                <div className="form-floating mb-3 " for="validationTooltip01">
                                                <input type="text" className="form-control" id="validationTooltip01" placeholder="name@example.com" name='tfirstname' onChange={updatehandleChange} value={upddat.tfirstname} required/>
                                                <label htmlFor="floatingInput">First Name</label>
                                                <div class="valid-tooltip">
                                                        Looks good!
                                                        </div>
                                                </div>
                                        </div>
                                        <div className="col-md-3">
                                                <div className="form-floating ">
                                                <input type="text" className="form-control" id="floatingInput" placeholder="name@example.com" name='tlastname' onChange={updatehandleChange} value={upddat.tlastname}/>
                                                <label htmlFor="floatingInput">Last Name</label>
                                                </div>
                                        </div>      
                                        <div className="col-md-3">
                                                <div className="form-floating mb-3">
                                                <select className="form-select" id="floatingSelect" aria-label="Floating label select example" placeholder="name@example.com" name='tgender' onChange={updatehandleChange} value={upddat.tgender}>
                                                        <option defaultValue>Select Gender</option>
                                                        <option value="male">Male</option>
                                                        <option value="female">Female</option>
                                                </select>
                                                <label htmlFor="floatingSelect">Select Gender</label>
                                                </div>
                                        </div>
                                        <div className="col-md-3">
                                                <div className="form-floating ">
                                                <input type="date" className="form-control" id="floatingInput" placeholder="name@example.com" name='tdate' onChange={updatehandleChange} value={upddat.tdate}/>
                                                <label htmlFor="floatingInput">D O B</label>
                                                </div>
                                        </div>
                                </div>
                                <div className="p-2 row">
                                        <div className="col-md-3">
                                                <div className="form-floating mb-3">
                                                        <input type="text" className="form-control" id="floatingInput" placeholder="name@example.com" name='tid' onChange={updatehandleChange} value={upddat.tid}/>
                                                        <label htmlFor="floatingInput">Id</label>
                                                </div>
                                        </div>
                                        <div className="col-md-3">
                                                <div className="form-floating mb-3">
                                                <select className="form-select" id="floatingSelect" aria-label="Floating label select example" placeholder="name@example.com" name='treligion' onChange={updatehandleChange} value={upddat.treligion} >
                                                <option defaultValue>Choose Religion</option>
                                                        <option value='hindu'>Hindu</option>
                                                        <option value='islam'>Islam</option>
                                                        <option value='christain'>Christain</option>
                                                        <option value='buddhist'>Buddist</option>
                                                        <option value='other'>Other</option> 
                                                </select>
                                                
                                                <label htmlFor="floatingSelect">Select Religion</label>
                                                </div>
                                        </div>
                                        <div className="col-md-3">
                                                <div className="form-floating mb-3">
                                                <select className="form-select" id="floatingSelect" aria-label="Floating label select example" placeholder="name@example.com" name='tbloodgroup' onChange={updatehandleChange} value={upddat.tbloodgroup} >
                                                <option defaultValue>Choose Blood Group</option>
                                                <option value='opos'>O+ve</option>
                                                <option value='oneg'>O-ve</option>
                                                <option value='apos'>A+ve</option>
                                                <option value='aneg'>A-ve</option>
                                                <option value='bpos'>B+ve</option>
                                                <option value='bneg'>B-ve</option>
                                                <option value='abpos'>AB+ve</option>
                                                <option value='abneg'>AB-ve</option>
                                                </select>
                                                <label htmlFor="floatingSelect">Select Blood Group</label>
                                                </div>
                                        </div>
                                        <div className="col-md-3">
                                                <div className="form-floating mb-3">
                                                        <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" name='temail' onChange={updatehandleChange} value={upddat.temail}/>
                                                        <label htmlFor="floatingInput">Email ID</label>
                                                </div>
                                        </div>
                                </div>
                                <div className="p-2 row">
                                        <div className="col-md-3">
                                        <div className="form-floating mb-3">
                                                <select className="form-select" id="floatingSelect" aria-label="Floating label select example" placeholder="name@example.com" name='twork' onChange={updatehandleChange} value={upddat.twork} >
                                                <option defaultValue>Work Experience</option>
                                                <option value='1'>1 Years</option>
                                                <option value='2'>2 Years</option>
                                                <option value='3'>3 Years</option>
                                                <option value='4'>4 Years</option>
                                                <option value='5'>5 Years</option>
                                                <option value='6'>6 Years</option>
                                                <option value='7'>7 Years</option>
                                                <option value='8'>8 Years</option>
                                                <option value='9'>9 Years</option>
                                                <option value='10'>10 Years</option>
                                                <option value='11'>11 Years</option>
                                                <option value='12'>12 Years</option>
                                                <option value='13'>13 Years</option>
                                                <option value='14'>14 Years</option>
                                                <option value='15'>15 Years</option>
                                                </select>
                                                <label htmlFor="floatingSelect">Enter Work Experience</label>
                                                </div>
                                        </div>
                                        <div className="col-md-3">
                                                <div className="form-floating mb-3">
                                                        <input type="number" className="form-control" id="floatingInput" placeholder="name@example.com" name='tphone' onChange={updatehandleChange} value={upddat.tphone} />
                                                        <label htmlFor="floatingInput">phone</label>
                                                </div>
                                        </div>
                                </div>
                                <div className="p-2 row">
                                                <div className="col-md-6 ">
                                                <label htmlFor="inputEmail4" className="form-label">Enter Address</label>
                                                <textarea className="form-control"  aria-label="With textarea" name='taddress' onChange={updatehandleChange} value={upddat.taddress} ></textarea>
                                                </div>
                                                <div className="col-md-5">
                                                <label htmlFor="inputEmail4" className="form-label" >Choose Photo</label>
                                                <input type="file" className="form-control" id="inputGroupFile01"  name='tphoto' onChange={updatehandleChange}/>
                                                </div>
                                </div>
                                <div className="p-4 row">
                                                <div className="col-md-3"><button type="submit"  className="btn btn-primary btn-lg">Update</button></div>
                                                
                                </div>






                </motion.form>
                        


        </motion.div>
      
    
     
  )
}

export default Updateteacher