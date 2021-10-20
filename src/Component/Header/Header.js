import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../Hooks/useAuth';

import './Header.css'

const Header = () => {
    const {user,logOut } = useAuth();
    return (
        <div className="d-sm-flex justify-content-evenly align-items-sm-center container-fluid">
            <div>
                <h1 className="fs-1 font-bold">SA General Hospital</h1>
            </div>
            <div className="d-flex justify-content-between align-items-center p-5">
            <div className="d-flex me-5 " >
                <p><Link className=" link-style" to="/home">Home</Link></p>
                <p><Link className="link-style" to="/allservices">Service</Link></p>
                <p><Link className="link-style" to="/about">About</Link></p>
                <p><Link className="link-style" to="/contact">Contact</Link></p>
               
                
            </div>
            
            </div>
            <div className="d-flex justify-content-center align-item-center">
            <div className="ps-5">
                <p><Link to="/register" className="link-style bg-primary text-white">Register</Link></p>
            </div>
            <div>
            {user?.email &&<button onClick={logOut} type="submit" className="btn btn-primary">Logout</button>}
            <p>{user.displayName}</p>
            </div>
            </div>
                       
        </div>
    );
};

export default Header;