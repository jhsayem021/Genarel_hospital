
import React from 'react';
import hospitalFirebaseAuth from '../../Firebase/Firebase.initialize';
import useAuth from "../Hooks/useAuth";

hospitalFirebaseAuth();

const Register = () => {

 const {user, error,islogin,
  handleEmailChange, handleNameChange ,handlePasswordChange,
  handleRegistration,toggoleLogin, handleGoogleSign } = useAuth();


    return (
        <div>
          <h1>{user.displayName}</h1>
          <div className="container-fluid w-75">
            <h3 className="mb-5">Please {islogin?'Login' : 'Register'}</h3>
            <form onSubmit={handleRegistration} >
        {!islogin && <div className="mb-3 ">
    <label htmlFor="exampleInputEmail1" className="form-label">Name</label>
    <input onBlur={handleNameChange} type="Name" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" required/>
  </div>}
  <div className="mb-3 ">
    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
    <input onBlur={handleEmailChange} type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" required/>
    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
    <input onBlur= {handlePasswordChange} type="password" className="form-control" id="exampleInputPassword1" required/>
  </div>
  <div className="mb-3 form-check">
    <input onChange={toggoleLogin} type="checkbox" className="form-check-input" id="exampleCheck1"/>
    <label className="form-check-label" htmlFor="exampleCheck1">Already registered</label>
  </div>
  <div className="text-danger mb-3 row" >
    <p>{error}</p>
  </div>
  <button type="submit" className="btn btn-primary">{islogin?'Login' : 'Submit'}</button> <button className="btn btn-primary ms-3" onClick={handleGoogleSign} >Sign in with google</button>
  

</form>
        </div>
        </div>
    );
};

export default Register;