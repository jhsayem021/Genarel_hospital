import { getAuth,GoogleAuthProvider,signInWithPopup, createUserWithEmailAndPassword ,signInWithEmailAndPassword,sendEmailVerification, updateProfile ,signOut ,onAuthStateChanged } from "firebase/auth";
import {useEffect, useState} from 'react';
import hospitalFirebaseAuth from '../../Firebase/Firebase.initialize';

hospitalFirebaseAuth();
const useFirebase = () =>{

    const [name,setName] = useState('');
    const [email,setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [user,setUser] = useState([]);
    const [error,setError] = useState('');
    const [islogin, setIslogin] = useState(false);
    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();

    // google Sign in

    const handleGoogleSign = () =>{
      signInWithPopup(auth, googleProvider)
      .then((result) => {
        
        setUser(result.user);
        setError('');
        // ...
      }).catch((error) => {
        // Handle Errors here.
        
        setError(error.message);
       
      });
    }

    useEffect(()=>{
      onAuthStateChanged(auth,user=>{
      if(user){
        console.log('inside user change',user)
        setUser(user);
      }
      })
    })
    const handleEmailChange = (e)=>{
        setEmail(e.target.value)
        console.log(e.target.value)
    }
    const handlePasswordChange = (e) => {
      setPassword(e.target.value)
        console.log(e.target.value)
    }
    const handleNameChange=(e) =>{
      setName(e.target.value);
    }
    const setUserName=()=>{
      updateProfile(auth.currentUser,{displayName:name})
      .then(() => {
        
      }).catch((error) => {
       
      });
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
    
        setUser(result.user)
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
       
        setUser(result.user);
        console.log(user.displayName)
        
        setError('');
        verifyEmail();
        setUserName();

        // ...
      })
      .catch((error) => {
       setError(error.message)
        // ..
      });
    }
    console.log(user);
    const toggoleLogin = (e) => {
      setIslogin(e.target.checked );
      console.log(e.target.checked);
    }

    const logOut = ()=>{
      signOut(auth).then(()=>{
        setUser({});
      })
    }

    return{
        name,email,user,password,auth, error,islogin,
        handleEmailChange, handleNameChange ,handlePasswordChange,
        handleRegistration,logOut,toggoleLogin,handleGoogleSign
    }

}
export default useFirebase;