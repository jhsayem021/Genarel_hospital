
import { getAuth, createUserWithEmailAndPassword ,signInWithEmailAndPassword,sendEmailVerification } from "firebase/auth";
import {useState} from 'react';
import React from 'react';
import hospitalFirebaseAuth from '../../Firebase/Firebase.initialize';

hospitalFirebaseAuth();

const Register = () => {

  
    const [email,setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error,setError] = useState('');
    const [islogin, setIslogin] = useState(false);
    const auth = getAuth();

    const handleEmailChange = (e)=>{
        setEmail(e.target.value)
        console.log(e.target.value)
    }
    const handlePasswordChange = (e) => {
      setPassword(e.target.value)
        console.log(e.target.value)
    }

    const handleRegistration = e =>{
      e.preventDefault();
      if(password.length<6){
        setError('Please must be atleast 6 charecters long');
        return;
      }
     islogin? processLogin() : createNewUser(email,password)
        console.log('registration');
        
    }

    const verifyEmail = () =>{
      sendEmailVerification(auth.currentUser)
      .then(() => {
        // Email verification sent!
        // ...
      });
    }

    const processLogin = (email,password) => {
      signInWithEmailAndPassword(auth,email,password)
      .then(result => {
        const user = result.user;
        console.log(user);
        setError('');

      })
      .catch((error) => {
        setError(error.message)
         // ..
       });

    }

    const createNewUser = (email,password) => {
      createUserWithEmailAndPassword(auth,email,password)
      .then((result) => {
        // Signed in 
        const user = result.user;
        console.log(user);
        setError('');
        verifyEmail();
        // ...
      })
      .catch((error) => {
       setError(error.message)
        // ..
      });
    }
    const toggoleLogin = (e) => {
      setIslogin(e.target.checked );
      console.log(e.target.checked);
    }

    return (
        <div className="container-fluid w-75">
            <h1 className="mb-5">Please {islogin?'Login' : 'Register'}</h1>
            <form onSubmit={handleRegistration} >
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
  <button type="submit" className="btn btn-primary">{islogin?'Login' : 'Submit'}</button>
</form>
        </div>
    );
};

export default Register;