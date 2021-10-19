import React, { useEffect, useState } from 'react';
import AllserviceComponent from '../Allservice/AllserviceComponent';

import '../Services/services.css'

const AllService = () => {
    const [allservices,setAllservices] = useState([])

    useEffect(()=>{
        fetch('./allservice.JSON')
        .then(res=>res.json())
        .then(data=>setAllservices(data));
        
    },[]);
    console.log(allservices);

    return (
        <div className="row row-cols-1 row-cols-md-3 g-4 ">
           {
              allservices.map(services =><AllserviceComponent
              key={services.id}
              service={services}
              ></AllserviceComponent>)
           }
              
        </div>
    );
};

export default AllService;