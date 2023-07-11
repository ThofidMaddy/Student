import React, { useState } from 'react'
import axios, { HttpStatusCode } from 'axios';
import { ErrorMessage } from 'formik';

const Teacherdetails = () => {
  const [restid,setRestid]= useState([ ]);
  const [gettid,setGettid] =useState({tid:''});


  const handletid=(e)=>{
   setGettid({...gettid,[e.target.name]:e.target.value});
    console.log(gettid);
  }
  const getteachersubmit=(e)=>{
    console.log('con',gettid);
    const formd = new FormData();
    formd.append("tid",gettid);
    console.log("tsend",{gettid})
    axios.get(`http://localhost:8080/teacher/getteacher/${gettid.tid}` ,{
      "Access-Control-Allow-Origin": "*"
})
    .then(function (response) {
      
      if(response.data.status==404){
        console.log("enm")
      }
      else
      {setRestid(response.data);
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
      {/* <div>
      <img src={require('C:/Users/Thofid/Desktop/id.jpeg').default} />
      </div> */}
      <h2>Teacher Details</h2>
      <div className="p-2 row">
                        <div className="col-md-5">
                        <div className="form-floating mb-3">
  <input type="number" className="form-control" id="floatingInput" placeholder="Roll NO" onChange={handletid} name="tid"  />
  <label htmlFor="floatingInput">Enter Roll No</label>
</div>
                        </div>
 
              <div className="col-md-3">
              <label htmlFor="inputState" className="form-label"><br></br></label>

                <button type="submit"  className="btn btn-primary btn-lg" onClick={getteachersubmit}>Get Student Details</button></div>
                <div>   
                        {/* <table className="table">
  <thead>
    <tr>
    <th scope="col">Tid</th>
    <th scope="col">Photo</th>
      <th scope="col">first Name</th>
      <th scope="col">Last Name</th>
      <th scope="col">Gender</th>
      <th scope="col">Work Exp</th>
      <th scope="col">D O B</th>
      <th scope="col">Religion</th>
      <th scope="col">Blood Group</th>
      <th scope="col">Email</th>
      <th scope="col">Address</th>
      <th scope="col">Phone</th>
    </tr>
  </thead>
  <tbody>
        {restid.map((row, i) => {
          console.log(row.tp)  
            return (
              <tr key={i}>
                <td>{row.tid}</td>
                
                <td> <img src={`http://localhost:8080/images/${row.tphoto}` } style={{height:"50px",width:"50px",borderRadius:"50px"}}alt="" /></td>
                <td>{row.tfirstname}</td>
                <td>{row.tlastname}</td>
                <td>{row.tgender}</td>
                <td>{row.twork} Years</td>
               <td>{row.tdate}</td>
               <td>{row.treligion}</td>
               <td>{row.tbloodgroup}</td>
               <td>{row.temail}</td>
               <td>{row.taddress}</td>
               <td>{row.tphone}</td>
              </tr>
            );
          })}
</tbody>
</table> */}
  <div>
      {restid.map((row, i) => {
                console.log(row.tp)  
                  return (
                    <div class="row">
                    <div class="col">
                    <img src={`http://localhost:8080/images/${row.tphoto}` } class="card-img-top" style={{height:"50%",width:"80%",margin:"auto"}} alt="..."/>
                    </div>
                    <div class="col">
                      <div className="row"><label><b> Teacher ID </b></label></div>
                      <div className="row"><label><b> First Name </b></label></div>
                      <div className="row"><label><b> Last Name </b></label></div>
                      <div className="row"><label><b> Gender  </b></label></div>
                      <div className="row"><label><b> Date of Birth </b></label></div>
                      <div className="row"><label><b> Work Experience </b></label></div>
                      <div className="row"><label><b> Religion </b></label></div>
                      <div className="row"><label><b> Blood Group </b></label></div>
                      <div className="row"><label><b> Phone</b></label></div>
                      <div className="row"><label><b> Email </b></label></div>
                      <div className="row"><label><b> Address </b></label></div>
                    </div>
                    <div class="col">
                      <div className="row">{row.tid}</div>
                      <div className="row">{row.tfirstname}</div>
                      <div className="row">{row.tlastname}</div>
                      <div className="row">{row.tgender}</div>
                      <div className="row">{row.tdate}</div>
                      <div className="row">{row.twork}</div>
                      <div className="row">{row.treligion}</div>
                      <div className="row">{row.tbloodgroup}</div>
                      <div className="row">{row.tphone}</div>
                      <div className="row">{row.temail}</div>
                      <div className="row">{row.taddress}</div>
                    </div>
                  </div>
          
                  // <div class="card" style={{width: "18rem"}}>
                  //   <img src={`http://localhost:8080/images/${row.tphoto}` } class="card-img-top" alt="..."/>
                  //   <div class="card-body">
                  //     <h5 class="card-title">Card title</h5>
                  //     <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                  //   </div>
                  //   <ul class="list-group list-group-flush">
                  //     <li class="list-group-item">An item</li>
                  //     <li class="list-group-item">A second item</li>
                  //     <li class="list-group-item">A third item</li>
                  //   </ul>
                  //   <div class="card-body">
                  //     <a href="#" class="card-link">Card link</a>
                  //     <a href="#" class="card-link">Another link</a>
                  //   </div>
                  // </div>

      );
      })}
  </div>
                        </div>

      </div>             
    </div>
  )
}

export default Teacherdetails