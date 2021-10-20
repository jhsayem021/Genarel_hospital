import React from 'react';
import { Link } from 'react-router-dom';
import './services.css'

const Services = (props) => {
    const { name ,description , image } = props.service;
    console.log(name);
    return (     
        <div>
            <div className="col m-4">
    <div className="card p-2">
      
      <img src={image} className="card-img-top card-img " alt="..."/>
      
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
        <p className="card-text">{description}</p>
        <Link to="/Allservices">View Details</Link>
      </div>
    </div>
        </div>
        </div>
    );
};

export default Services;