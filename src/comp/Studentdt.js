import React, { useState } from 'react'
import axios from 'axios';
export const Studentdt = (props) => {
  const [formvalue,setFormvalue]=useState([ ]);
  const [stdimg,setStdimg]=useState({ });
  
  const handleinput =(e)=>{
    console.log("this is "+stdimg);
    if(e.target.name === 'stdphoto'){
      setStdimg({...formvalue,stdphoto:e.target.files[0]})
      
}else{
  setFormvalue({...formvalue,[e.target.name]:e.target.value});

}
  }
  const stdform=(e)=>{
    const stdform = new FormData();
    stdform.append("for",JSON.stringify(formvalue));
    stdform.append("stdimage",stdimg.stdphoto)
    console.log(stdform);
    axios.post('http://localhost:8080/stdsave', stdform,{
                        headers:{
                                'Content-Type':'multipart/formdata',
                        }
                })
                      .then(function (response) {
                if(response.status===200){
                  console.log(response.status===200)
                  alert("Successfully inserted into System");
                }else{
                  alert("Given data into system having error");
                }
                      })
                      .catch(function (error) {
                        console.log("this is error"+error.alert);
                      });
  }
  const stdformrest=(e)=>{
    setFormvalue({
      stdfirstname:'',
      stdlastname:'',
      stdgender:'',
      stddate:'',
      stdid:'',
      stdbloodgroup:'',
      stdreligion:'',
      stdemail:'',
      stdclass:'',
      stdsection:'',
      stdphone:'',
      stdphoto:'',
      stdaddress:''
    })
    
}
  return (
    <div className='m-5'>
                <div className="row">
                        <h1>Student Details{props.kk}</h1>
                </div>
                <div className="p-2 row">
                        <div className="col-md-3">
                        <label htmlFor="inputState" className="form-label">First Name</label>
                        <input type="text" className="form-control"  aria-label="First name" name='stdfirstname' value={formvalue.stdfirstname} onChange={handleinput}/>
                        </div>
                        <div className="col-md-3">
                        <label htmlFor="inputState" className="form-label">Last Name</label>
                        <input type="text" className="form-control"  aria-label="Last name" name='stdlastname' value={formvalue.stdlastname} onChange={handleinput}/>
                        </div>
                        <div className="col-md-3">
                        <label htmlFor="inputState" className="form-label">Gender</label>
                        <select id="inputState" className="form-select" name='stdgender' value={formvalue.stdgender} onChange={handleinput}>
                          <option defaultValue>Choose Gender</option>
                          <option value='male'>Male</option>
                          <option value='female'>Female</option>
                        </select>
                      </div>
                      <div className="col-md-3">
                        <label htmlFor="inputState" className="form-label">Date</label>
                        <input type="date" className="form-control"  aria-label="First name" name='stddate' value={formvalue.stddate} onChange={handleinput} />
                        </div>
              </div>
            <div className="p-2 row">
                        <div className="col-md-3">
                        <label htmlFor="inputState" className="form-label">Roll No</label>
                        <input type="text" className="form-control"  aria-label="First name" name='stdid' value={formvalue.stdid} onChange={handleinput}/>
                        </div>
                        <div className="col-md-3">
                        <label htmlFor="inputState" className="form-label">Blood Group</label>
                        <select id="inputState" className="form-select" name='stdbloodgroup' value={formvalue.stdbloodgroup} onChange={handleinput}>
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
                      </div>
                      <div className="col-md-3">
                        <label htmlFor="inputState" className="form-label">Religion</label>
                        <select id="inputState" className="form-select" name='stdreligion' value={formvalue.stdreligion} onChange={handleinput} >
                          <option defaultValue>Choose Religion</option>
                          <option value='hindu'>Hindu</option>
                          <option value='islam'>Islam</option>
                          <option value='christain'>Christain</option>
                          <option value='buddhist'>Buddist</option>
                          <option value='other'>Other</option>
                        </select>
                      </div>
                      <div className="col-md-3">
                        <label htmlFor="inputEmail4" className="form-label">Email</label>
                        <input type="email" className="form-control" id="inputEmail4" name='stdemail' value={formvalue.stdemail} onChange={handleinput}/>
                      </div>  
            </div>
            <div className="p-2 row">
                        <div className="col-md-3">
                        <label htmlFor="inputState" className="form-label">Classes</label>
                        <select id="inputState" className="form-select" name='stdclass' value={formvalue.stdclass} onChange={handleinput} >
                          <option defaultValue>Select class</option>
                          <option value='play'>Play</option>
                          <option value='lkg'>LKG</option>
                          <option value='ukg'>UKG</option>
                          <option value='1'>1st class</option>
                          <option value='2'>2nd class</option>
                          <option value='3'>3rd class</option>
                          <option value='4'>4th class</option>
                          <option value='5'>5th class</option>
                          <option value='6'>6th class</option>
                          <option value='7'>7th class</option>
                          <option value='8'>8th class</option>
                          <option value='9'>9th class</option>
                          <option value='10'>10th class</option>
                        </select>
                      </div>
                      <div className="col-md-3">
                        <label htmlFor="inputState" className="form-label">Section</label>
                        <select id="inputState" className="form-select"name='stdsection' value={formvalue.stdsection} onChange={handleinput} >
                          <option defaultValue>Select Section</option>
                          <option value='a'>A Section</option>
                          <option value='b'>B Section</option>
                          <option value='c'>C Section</option>
                          <option value='d'>D Section</option>
                        </select>
                      </div>
                      <div className="col-md-3">
                        <label htmlFor="inputEmail4" className="form-label">Phone</label>
                        <input type="text" className="form-control" id="inputEmail4" name='stdphone' value={formvalue.stdphone} onChange={handleinput} />
                      </div>  
            </div>
            <div className="p-2 row">
                        <div className="col-md-6 ">
                        <label htmlFor="inputEmail4" className="form-label">Enter Address</label>
                        <textarea className="form-control"  aria-label="With textarea" name='stdaddress' value={formvalue.stdaddress} onChange={handleinput}></textarea>
                          </div>
                          <div className="col-md-5">
                          <label htmlFor="inputEmail4" className="form-label" >Choose Photo</label>
                            <input type="file" className="form-control" id="inputGroupFile01" name='stdphoto' value={formvalue.stdphoto} onChange={handleinput}  />
                          </div>
            </div>
            <div className="p-4 row">
              <div className="col-md-3"><button type="button" onClick={stdform} className="btn btn-primary btn-lg">Submit</button></div>
              <div className="col-md-3"><button type="button" onClick={stdformrest} className="btn btn-primary btn-lg">Reset</button></div>
            </div>
  </div>
  )
  }