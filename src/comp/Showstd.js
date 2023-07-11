import React, { useState } from 'react'
import axios from 'axios';
export const Showstd = () => {
  const [getsinglestd,SetGetsinglestd]=useState([ ]);
  const [getstd,SetGetstd]=useState(" ");

  const getstdval=(e)=>{
    SetGetstd(e.target.value);
  }
  const stdsubmit=(e)=>{
    console.log(getstd);
    axios.get(`http://localhost:8080/student/${getstd}` ,{
      "Access-Control-Allow-Origin": "*"
})
    .then(function (response) {
      
      if(response.data.status==404){
        console.log("enm")
      }
      else
      {SetGetsinglestd(response.data);
        console.log("std",getsinglestd);
      }
    })
    .catch(function (error) {
    if(error){
      alert("Please enter valid input");
    }
    });

  }
  return (
    <div>
      <h2>Student Details</h2>
                     <div className="p-2 row">
                        <div className="col-md-5">
                        <div className="form-floating mb-3">
                        <input type="email" className="form-control" id="floatingInput" placeholder="Roll NO" name='stdname' onChange={getstdval}/>
                        <label htmlFor="floatingInput">Enter Roll No</label>
                      </div>
                        </div>
 
              <div className="col-md-3">
              <label htmlFor="inputState" className="form-label"><br></br></label>

                <button type="button"  className="btn btn-primary btn-lg" onClick={stdsubmit}>Get Student Details</button></div>
            
      </div>     
      <div className='center'>
      {getsinglestd.map((row, i) => {
                console.log(row.tp)  
                  return (
                    <div className="row ">
                    <div className="col align-self-center ">
                    <img src={`http://localhost:8080/images/${row.stdphoto}` } className="card-img-top m-4" style={{height:"50%",width:"50%",borderRadius:"50px"}} alt="..."/>
                    </div>
                    <div className="col">
                      <div className="row"><label><b> Student ID </b></label></div>
                      <div className="row"><label><b> First Name </b></label></div>
                      <div className="row"><label><b> Last Name </b></label></div>
                      <div className="row"><label><b> Gender  </b></label></div>
                      <div className="row"><label><b> Date of Birth </b></label></div>
                      <div className="row"><label><b> Class </b></label></div>
                      <div className="row"><label><b> Section </b></label></div>
                      <div className="row"><label><b> Religion </b></label></div>
                      <div className="row"><label><b> Blood Group </b></label></div>
                      <div className="row"><label><b> Phone</b></label></div>
                      <div className="row"><label><b> Email </b></label></div>
                      <div className="row"><label><b> Address </b></label></div>
                    </div>
                    <div className="col">
                      <div className="row">{row.stdid}</div>
                      <div className="row">{row.stdfirstname}</div>
                      <div className="row">{row.stdlastname}</div>
                      <div className="row">{row.stdgender}</div>
                      <div className="row">{row.stddate}</div>
                      <div className="row">{row.stdclass}</div>
                      <div className="row">{row.stdsection}</div>
                      <div className="row">{row.stdreligion}</div>
                      <div className="row">{row.stdbloodgroup}</div>
                      <div className="row">{row.stdphone}</div>
                      <div className="row">{row.stdemail}</div>
                      <div className="row">{row.stdaddress}</div>
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
    
  )
}
