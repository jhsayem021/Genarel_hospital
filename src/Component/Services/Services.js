import React from 'react';
import { Link } from 'react-router-dom';
import './services.css'

const Services = (props) => {
    const { name ,description , image } = props.service;
    console.log(name);
    return (     
        <div>
            <div class="col m-4">
    <div class="card p-2">
      
      <img src={image} class="card-img-top card-img " alt="..."/>
      
      <div class="card-body">
        <h5 class="card-title">{name}</h5>
        <p class="card-text">{description}</p>
        <Link>View Details</Link>
      </div>
    </div>
        </div>
        </div>
    );
};

export default Services;