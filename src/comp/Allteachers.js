import React, { useState } from 'react'
import axios, { HttpStatusCode } from 'axios';
import { Link } from "react-router-dom";


export const Allteachers = (props) => {
  const [allteach,setAllteach]=useState([ ])
 const [tidmain,setTidmain]=useState({tid:'',twork:'',tfirstname:''})
 const handletid=(e)=>{
  setTidmain({...tidmain,[e.target.name]:e.target.value});
  
   
   }
   const alltsubmit=(e)=>{
    
    if(tidmain.tid!=''){
      console.log("1tid is"+tidmain.tid)
      axios.get(`http://localhost:8080/teacher/getteacher/${tidmain.tid}` ,{
      "Access-Control-Allow-Origin": "*"
})
    .then(function (response) {
      
      if(response.data.status==404){
        console.log("enm")
      }
      else
      {
        setAllteach(response.data);
        console.log("res",response.data);
      }
    })
    .catch(function (error) {
    if(error){
      alert("Please enter valid input");
    }
    });
    }else if(tidmain.tfirstname!=''){
      console.log("worktid is"+tidmain.tfirstname)
      axios.get(`http://localhost:8080/teacher/allgetteacher/${tidmain.tfirstname}` ,{
      "Access-Control-Allow-Origin": "*"
})
    .then(function (response) {
      
      if(response.data.status==404){
        console.log("enm")
      }
      else
      {
        setAllteach(response.data);
        console.log("resa",[allteach]);
      }
    })
    .catch(function (error) {
    if(error){
      alert("Please enter valid input");
    }
    });
    }else if(tidmain.twork!==''){
      console.log("1tid is"+tidmain.twork)
    }
    else if(tidmain.tid!=='' && tidmain.twork!==''){
      console.log("atid is"+tidmain.tid+ "twork is "+tidmain.twork)
    }else if(tidmain.tid!=='' && tidmain.tfirstname!==''){
      console.log("btid is"+tidmain.tid+ "twork is "+tidmain.tfirstname)
    }else if(tidmain.twork!=='' && tidmain.tfirstname!==''){
      console.log("ctid is"+tidmain.tid+ "twork is "+tidmain.tfirstname)
    }

   }
   const [delteashow,setDelteashow]=useState("");
   const mama=(tid)=>{
   props.onteachershow(tid);
    
  
    
   }
   const deletestd=(deltid)=>{
    console.log("this is del"+deltid)
    axios.delete(`http://localhost:8080/teacher/delteacher/${deltid}` ,{
      "Access-Control-Allow-Origin": "*"
})
    .then(function (response) {
      
      if(response.data.status==404){
        console.log("enm")
      }
      else
      {
        console.log("res",response.data);
      }
    })
    .catch(function (error) {
    if(error){
      alert("Please enter valid input");
    }
    });
   }
  return (
    <div className='m-4'>
         <h3>Search Teachers</h3>
      <div className="p-2 row">
                        <div className="col-md-3">
                            <div className="form-floating mb-3">
                            <input type="text" className="form-control" id="floatingInput" placeholder="Roll NO" name="tid" onChange={handletid} />
                            <label htmlFor="floatingInput">Enter Teacher ID</label>
                          </div>
                        </div>
                        <div className="col-md-3">
                            <div className="form-floating mb-3">
                            <input type="text" className="form-control" id="floatingInput" placeholder="Roll NO" name='twork' onChange={handletid} />
                            <label htmlFor="floatingInput">Enter Work Experience</label>
                          </div>
                        </div>
                        <div className="col-md-3">
                            <div className="form-floating mb-3">
                            <input type="text" className="form-control" id="floatingInput" placeholder="Roll NO" name='tfirstname' onChange={handletid}/>
                            <label htmlFor="floatingInput">Enter Teacher Name</label>
                          </div>
                        </div>
 
              <div className="col-md-3">
              <label htmlFor="inputState" className="form-label"><br></br></label>

                <button type="button" onClick={alltsubmit} className="btn btn-primary btn-lg">Get Student Details</button></div>
            
      </div>  
      <div className="p-2 row">
      <table className="table">
  <thead>
    <tr>
    
      <th scope="col">Teacher Id</th>
      <th scope="col">Photo</th>
      <th scope="col">First Name</th>
      <th scope="col">Last Last</th>
      <th scope="col">Gender</th>
      <th scope="col" >DOB</th>
      <th scope="col">Experience</th>
      <th scope="col">Religion</th>
      <th scope="col">Blood Group</th>
      <th scope="col">Address</th>
      <th scope="col">Phone</th>
      <th scope="col">Email</th>
      <th scope='col'>Action</th>
    </tr>
  </thead>
  <tbody>
        {allteach.map((row, i) => {
          console.log(row.tp)
            return (
              <tr key={i}>
                <td>{row.tid}</td>
                
                <td> <img src={`http://localhost:8080/images/${row.tphoto}` } style={{height:"50px",width:"50px",borderRadius:"50px"}}alt="" /></td>
                <td>{row.tfirstname}</td>
                <td>{row.tlastname}</td>
                <td>{row.tgender}</td>
               <td>{row.tdate}</td>
               <td>{row.twork}</td>
               <td>{row.treligion}</td>
               <td>{row.tbloodgroup}</td>
               <td>{row.taddress}</td>
               <td>{row.tphone}</td>
               <td>{row.temail}</td>
               <td style={{display:'flex'}}>
                <button type='button' class="btn btn-danger" onClick={()=>{mama(row.tid)}}><Link to='/updateteacher'  >Update</Link></button>
                <button type="button" class="btn btn-warning" onClick={()=>{deletestd(row.tid)}}>Delete</button>
               </td>
              </tr>
            );
          })}
</tbody>
</table>
        </div>  
    </div>
  )
}
