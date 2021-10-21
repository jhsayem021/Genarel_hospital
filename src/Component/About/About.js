import React from 'react';
import './About.css'

const About = () => {
    return (
        <div>
            <h2 className="text-center">About us</h2>
            <div className="text-center py-3 px-5 mx-5">
                <h3>We are SA General Hospital</h3>
                <p className="py-3">
                Popular Medical College Hospital is a 500+ beds care hospital and the leading contributor of private healthcare services in Bangladesh. This has been achieved only through consistent commitment to improving the lives of people through utmost service excellence since its inception on 2009. Popular Medical College Hospital is one of the ventures of Popular Group which is the top Medical business group of the country.
                </p>
            </div>
            <div className="p-5">
            <div className="row row-cols-1 row-cols-md-3 g-4 ">
  <div className="col ">
    <div className="card img-fluid">
      <img src="http://www.popular-hospital.com/public/pmch/img/abtu01.jpg" className="card-img-top" alt="..."/>
      <div className="card-body">
        <h5 className="card-title">OUR MISSION</h5>
        <p className="card-text">"SA General Hospital will be the leading hospital company of the country within 2025 as manufacturer of high-tech, high quality affordable medicines"</p>
      </div>
    </div>
  </div>
  <div className="col">
    <div className="card img-fluid">
      <img src="http://www.popular-hospital.com/public/pmch/img/abtu02.jpg" className="card-img-top" alt="..."/>
      <div className="card-body">
        <h5 className="card-title">OUR VISION</h5>
        <p className="card-text">To establish an environment around the hospital field through the highest level of innovative and technical support which will add value to our society and act as a driven force of our humanity.</p>
      </div>
    </div>
  </div>
  <div className="col">
    <div className="card img-fluid">
      <img src="http://www.popular-hospital.com/public/pmch/img/abtu03.jpg" className="card-img-top" alt="..."/>
      <div className="card-body">
        <h5 className="card-title">WHY US</h5>
        <p className="card-text">The latest venture of Popular Group is Popular Medical College and Popular Medical College Hospital which will fulfill the Group's devoted commitment towards the health sector of Bangladesh providing the complete healthcare services.</p>
      </div>
    </div>
  </div>
  
    </div>
            </div>
        </div>
    );
};

export default About;