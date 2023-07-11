import React from 'react'

const Login = () => {
  return (
    <div class="container row  justify-content-center">
        <div class="row g-1 justify-content-center">
           <strong> Login Page </strong>
        </div>
        <div class="row g-1 justify-content-center">
  <div className="col-md-4">
    <label for="inputPassword6" class="col-form-label">Email</label>
  </div>
  <div className="col-md-4">
    <input type="Text" id="inputPassword6" class="form-control" aria-labelledby="passwordHelpInline"/>
  </div>
  <div className="col-md-4">
    <span id="passwordHelpInline" class="form-text">
      Must be 8-20 characters long.
    </span>
  </div>
</div>

<div class="row g-1 justify-content-center">
  <div class="col-md-4">
    <label for="inputPassword6" class="col-form-label">Password</label>
  </div>
  <div class="col-md-4">
    <input type="password" id="inputPassword6" class="form-control" aria-labelledby="passwordHelpInline"/>
  </div>
  <div class="col-md-4">
    <span id="passwordHelpInline" class="form-text">
      Must be 8-20 characters long.
    </span>
  </div>
</div>
<div class="row g-1 justify-content-center">
  <div class="col-md-4">
    
  </div>
  <div class="col-md-4">
  <button type="button" class="btn btn-primary m-2">Login</button>
  <button type="button" class="btn btn-primary">Reset</button>
  </div>
  <div class="col-md-4">
    
  </div>
</div>
    </div>
  )
}

export default Login