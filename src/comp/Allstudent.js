import React from 'react'

export const Allstudent = () => {
  return (
    <div className='m-5'>
      <h3>Search Students</h3>
      <div className="p-2 row">
                        <div className="col-md-3">
                            <div className="form-floating mb-3">
                            <input type="email" className="form-control" id="floatingInput" placeholder="Roll NO"/>
                            <label htmlFor="floatingInput">Enter Roll No</label>
                          </div>
                        </div>
                        <div className="col-md-3">
                            <div className="form-floating mb-3">
                            <input type="email" className="form-control" id="floatingInput" placeholder="Roll NO"/>
                            <label htmlFor="floatingInput">Enter Roll No</label>
                          </div>
                        </div>
                        <div className="col-md-3">
                            <div className="form-floating mb-3">
                            <input type="email" className="form-control" id="floatingInput" placeholder="Roll NO"/>
                            <label htmlFor="floatingInput">Enter Roll No</label>
                          </div>
                        </div>
 
              <div className="col-md-3">
              <label htmlFor="inputState" className="form-label"><br></br></label>

                <button type="button"  className="btn btn-primary btn-lg">Get Student Details</button></div>
            
      </div>  
      <div className="p-2 row">
      <table className="table">
  <thead>
    <tr>
    <th scope="col">Photo</th>
      <th scope="col">Roll no</th>
      <th scope="col">First Name</th>
      <th scope="col">Last Last</th>
      <th scope="col">Gender</th>
      <th scope="col">class</th>
      <th scope="col">Section</th>
      <th scope="col">Phone</th>
      <th scope="col">DOB</th>
      <th scope="col">Email</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>@fat</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td colspan="2">Larry the Bird</td>
      <td>@twitter</td>
    </tr>
  </tbody>
</table>
        </div>  
    </div>
  )
}
