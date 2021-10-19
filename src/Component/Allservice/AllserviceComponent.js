import React from 'react';

const allserviceComponent = (props) => {
  const {imge,title,description} = props.service;
  return (
    <div>
                   <div className="col m-4">
    <div className="card p-2">
      
      <img src={imge} className="card-img-top card-img " alt="..."/>
      
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{description}</p>
        <button  >View Details</button>
      </div>
    </div>
        </div>
    </div>
  );
};

export default allserviceComponent;