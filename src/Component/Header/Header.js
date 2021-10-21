import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../Hooks/useAuth';
import banner from '../images/banner.jpg'

import './Header.css'

const Header = () => {
    const {user,logOut } = useAuth();
    return (
        <div>
             <img className="w-100" src={banner} alt="" />
         <div className="d-flex py-2 justify-content-between">
         <div className="d-flex me-5 " >
                <p><Link className=" link-style" to="/home">Home</Link></p>
                <p><Link className="link-style" to="/allservices">Service</Link></p>
                <p><Link className="link-style" to="/about">About</Link></p>
                <p><Link className="link-style" to="/contact">Contact</Link></p>
            </div>
            <div>
            <div className="d-flex justify-content-center align-items-center">
               <h3>{user.displayName}</h3>
            <div className="pe-5">
            <p><Link to="/register" className="link-style bg-primary text-white">Register</Link></p>
        </div>
         <div>
         {user?.email &&<button onClick={logOut} type="submit" className="link-style bg-primary text-white">Logout</button>}
         </div>
            </div>
            </div>
        </div>
         </div>
    );
};

export default Header;



        