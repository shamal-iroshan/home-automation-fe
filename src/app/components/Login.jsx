import React from "react";

export default function Login() {
  function formSubmit(event) {
    event.preventDefault();
    console.log("submitted");
  }

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-12 d-flex justify-content-center align-items-center" style={{height: "100vh"}}>
            <form style={{width: '500px'}} onSubmit={formSubmit}>
              <div className="form-group">
                <label htmlFor="username">Username</label>
                <input type="text" className="form-control" id="username" name="username" placeholder="Username"/>
              </div>
              <div className="form-group">
                <label htmlFor="password">Password</label>
                <input type="password" className="form-control" id="password" name="password" placeholder="Password"/>
              </div>
              <button type="submit" className="btn btn-primary">Login</button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}