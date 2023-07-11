import React, { useEffect, useState } from 'react'
import { useFormik } from 'formik';

import axios, { formToJSON } from 'axios';




export const Addteacher = () => {
       
        

        const [dat,setDat]=useState({
                tfirstname:'',
                tlastname:'',
                tgender:'',
                tdate:'',
                treligion:'',
                tbloodgroup:'',
                temail:'',
                twork:'',
                tphone:'',
                taddress:'',
                tphoto:'null'
        });
        
       const [image,setImage]=useState({tphoto:'null'});
       const [babu,setBabu] =useState({});
       
       
   const handleChange=(e)=>{
       

        if(e.target.name === 'tphoto'){
                setImage({...dat,tphoto:e.target.files[0]})
        }else{
                setDat({...dat,[e.target.name]:e.target.value})
        }
       
        
        console.log('lopp',dat.tphoto)
   }    


  const handleSubmit=(e)=> {
        console.log('lopp',dat.tphoto)
        e.preventDefault();  
               const fd=new FormData();
        //        fd.append('tfirstname',dat.tfirstname);
        //        fd.append('tlastname',dat.tlastname);
        //        fd.append('tgender',dat.tgender);
        //        fd.append('tdate',dat.tdate);
        //        fd.append('tid',dat.tid);
        //        fd.append('treligion',dat.treligion);
        //        fd.append('tbloodgroup',dat.tbloodgroup);
        //        fd.append('temail',dat.temail);
        //        fd.append('tworkexp',dat.tworkexp);
        //        fd.append('tphone',dat.tphone);
               fd.append('tphoto',image.tphoto);
               fd.append('tec',JSON.stringify(dat));
                
                console.log(dat);
                
                // fetch('http://localhost:8080/tech', {
                //         method: 'POST',
                //         body: formdata
                //       })
                //       .then(response => response.json())
                //       .then(data => console.log(data))
                //       .catch(error => console.error(error));
                //     }


//                 console.log(formData)
//     formData.append('tfistname', values.tfirstname);
//     formData.append('tlastname', values.tlastname);
//     formData.append('tgender',values.tgender);
//     formData.append('tdate',values.tdate);
//     formData.append('tbloodgroup',values.tbloodgroup);
//     formData.append('treligion',values.treligion);
//     formData.append('temail',values.temail);
//     formData.append('tworkexp',values.tworkexp);
//     formData.append('tphone',values.tphone);
//     formData.append('taddress',values.taddress);
//     formData.append('tphoto',image);
//     setDat(formToJSON(formData))
                
                axios.post('http://localhost:8080/teacher/tech', fd,{
                        headers:{
                                'Content-Type':'multipart/formdata',
                        }
                })
                      .then(function (response) {
                console.log(response);
                      })
                      .catch(function (error) {
                        console.log(error);
                      });

                
              
        
        
                }
                useEffect(() => {
                        if(dat.tfirstname=="thofid")
                      
                        return (e) => {
                          alert("Hello thofid")
                        }
                      }, [handleSubmit])
  
  
  return (
      
        <div className="row m-5">
                <form onSubmit={handleSubmit}>
                <div className="row">
                                        <h5>Add Teacher</h5>
                                </div>
           
                                <div className="p-2 row">
                                        <div className="col-md-3">
                                                <div className="form-floating mb-3 " for="validationTooltip01">
                                                <input type="text" className="form-control" id="validationTooltip01" placeholder="name@example.com" name='tfirstname' onChange={handleChange} value={dat.tfirstname} required/>
                                                <label htmlFor="floatingInput">First Name</label>
                                                <div class="valid-tooltip">
                                                        Looks good!
                                                        </div>
                                                </div>
                                        </div>
                                        <div className="col-md-3">
                                                <div className="form-floating ">
                                                <input type="text" className="form-control" id="floatingInput" placeholder="name@example.com" name='tlastname' onChange={handleChange} value={dat.tlastname}/>
                                                <label htmlFor="floatingInput">Last Name</label>
                                                </div>
                                        </div>      
                                        <div className="col-md-3">
                                                <div className="form-floating mb-3">
                                                <select className="form-select" id="floatingSelect" aria-label="Floating label select example" placeholder="name@example.com" name='tgender' onChange={handleChange} value={dat.tgender}>
                                                        <option defaultValue>Select Gender</option>
                                                        <option value="male">Male</option>
                                                        <option value="female">Female</option>
                                                </select>
                                                <label htmlFor="floatingSelect">Select Gender</label>
                                                </div>
                                        </div>
                                        <div className="col-md-3">
                                                <div className="form-floating ">
                                                <input type="date" className="form-control" id="floatingInput" placeholder="name@example.com" name='tdate' onChange={handleChange} value={dat.tdate}/>
                                                <label htmlFor="floatingInput">D O B</label>
                                                </div>
                                        </div>
                                </div>
                                <div className="p-2 row">
                                        <div className="col-md-3">
                                                <div className="form-floating mb-3">
                                                        <input type="text" className="form-control" id="floatingInput" placeholder="name@example.com" name='tid' onChange={handleChange} value={dat.tid}/>
                                                        <label htmlFor="floatingInput">Id</label>
                                                </div>
                                        </div>
                                        <div className="col-md-3">
                                                <div className="form-floating mb-3">
                                                <select className="form-select" id="floatingSelect" aria-label="Floating label select example" placeholder="name@example.com" name='treligion' onChange={handleChange} value={dat.treligion} >
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
                                                <select className="form-select" id="floatingSelect" aria-label="Floating label select example" placeholder="name@example.com" name='tbloodgroup' onChange={handleChange} value={dat.tbloodgroup} >
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
                                                        <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" name='temail' onChange={handleChange} value={dat.temail}/>
                                                        <label htmlFor="floatingInput">Email ID</label>
                                                </div>
                                        </div>
                                </div>
                                <div className="p-2 row">
                                        <div className="col-md-3">
                                        <div className="form-floating mb-3">
                                                <select className="form-select" id="floatingSelect" aria-label="Floating label select example" placeholder="name@example.com" name='twork' onChange={handleChange} value={dat.twork} >
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
                                                        <input type="number" className="form-control" id="floatingInput" placeholder="name@example.com" name='tphone' onChange={handleChange} value={dat.tphone} />
                                                        <label htmlFor="floatingInput">phone</label>
                                                </div>
                                        </div>
                                </div>
                                <div className="p-2 row">
                                                <div className="col-md-6 ">
                                                <label htmlFor="inputEmail4" className="form-label">Enter Address</label>
                                                <textarea className="form-control"  aria-label="With textarea" name='taddress' onChange={handleChange} value={dat.taddress} ></textarea>
                                                </div>
                                                <div className="col-md-5">
                                                <label htmlFor="inputEmail4" className="form-label" >Choose Photo</label>
                                                <input type="file" className="form-control" id="inputGroupFile01"  name='tphoto' onChange={handleChange}/>
                                                </div>
                                </div>
                                <div className="p-4 row">
                                                <div className="col-md-3"><button type="submit"  className="btn btn-primary btn-lg">submit</button></div>
                                                
                                </div>






                </form>
                        


        </div>
      
    
     
  )
}

