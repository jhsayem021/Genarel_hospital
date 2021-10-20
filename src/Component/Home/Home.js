import React, { useEffect, useState } from 'react';
import { Accordion, Card, CardGroup, Carousel } from 'react-bootstrap';
import './Home.css'
// import banner from '../../image/banner-sa-hospital.jpg'
import Services from '../Services/Services';

const Home = () => {

    const [services,setServices] = useState([])

    useEffect(()=>{
        fetch('./services.JSON')
        .then(res=>res.json())
        .then(data=>setServices(data));
        
    },[]);
    console.log(services);
    return (
        <div>
             {/* <img src={banner} alt="" className="w-100 banner-img"/> */}

            <div className="">
            <Carousel >
  <Carousel.Item className=" img-fluid">
    <img
      className="d-block w-100 carousel-img-style"
      src="http://www.popular-hospital.com/public/pmch/img/gimg01.jpg"
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>Welcome to SA General Hospital</h3>
      <p>An Advanced care for Health services</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100 carousel-img-style"
      src="http://www.popular-hospital.com/public/pmch/img/gimg03.jpg"
      alt="Second slide"
    />

    <Carousel.Caption >
      <h3>Enhancing Life. Excelling in Care</h3>
      <p>An Advanced care for Health services</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100 carousel-img-style"
      src="http://www.popular-hospital.com/public/pmch/img/gimg03.jpg"
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Trusted Health Partner for Life</h3>
      <p>An Advanced care for Health services</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
            </div>
             
          <div className="row row-cols-1 row-cols-md-2 g-4 ">
          {
                services.map(service => <Services
                    key={service.id}
                    service={service}
                ></Services> )
            }
          </div>

            <div >
            <div className="d-flex justify-content-evenly align-items-center  p-5">
                <div className="w-25">
                    <h3>Welcome to SA General Hospital</h3>
                </div>
                <div className="w-25"><p>The most prestigious concern of SA group, the SA General Hospital started its journey in the year 2010 and by the grace of Almighty Allah it is now able to boast about a sound infrastructure and an enviable faculty. The dedicated workforce with their committed adherence to quality and uncompromising perfection has been the root of this success.</p></div>
            </div>
                <div className="d-flex justify-content-evenly ">
                    <h1 className="p-5 m-2 bg-info  rounded-3 w-25">Indoor Service</h1>
                    <h1 className="p-5 m-2 bg-info  rounded-3 w-25">Outdoor Service</h1>
                    <h1 className="p-5 m-2 bg-info  rounded-3 w-25">Vaccination</h1>
                </div>
                <div className="d-flex justify-content-evenly">
                    <h1 className="p-5 m-2 bg-info  rounded-3 w-25">Online Appointment</h1>
                    <h1 className="p-5 m-2 bg-info  rounded-3 w-25">24 hours Service</h1>
                    <h1 className="p-5 m-2 bg-info  rounded-3 w-25">Rate Charts</h1>
                </div>
            </div>

            <div className="d-flex justify-content-center align-items-center">
                <div className="w-50 p-2">
                <img src="http://www.popular-hospital.com/public/pmch/img/icu.jpg" alt="" className="carousel-img-style"/>
                </div>
               <div className="w-50 p-5">
                   <h3 className="pb-5">Why Choose Us</h3>
               <Accordion defaultActiveKey="0">
  <Accordion.Item eventKey="0">
    <Accordion.Header>More Experience</Accordion.Header>
    <Accordion.Body>
    In healthcare sector, service excellence is the facility of the hospital as healthcare service provider to consistently meet.
    </Accordion.Body>
  </Accordion.Item>
  <Accordion.Item eventKey="1">
    <Accordion.Header>The Right Answers</Accordion.Header>
    <Accordion.Body>
    Popular Medical College Hospital aims to provide unparalleled service to the people of Bangladesh by delivering the highest possible level of care.
    </Accordion.Body>
  </Accordion.Item>
  <Accordion.Item eventKey="2">
    <Accordion.Header>Seamless Care</Accordion.Header>
    <Accordion.Body>
    The outpatient services are open daily, except Friday, in a convenient morning, afternoon and late evening hours. Other than that our ER (Emergency dept) is fully operational 24/7 round the year.
    </Accordion.Body>
  </Accordion.Item>
  <Accordion.Item eventKey="3">
    <Accordion.Header>The Right Answers</Accordion.Header>
    <Accordion.Body>
    Popular Medical College Hospital aims to provide unparalleled service to the people of Bangladesh by delivering the highest possible level of care.
    </Accordion.Body>
  </Accordion.Item>
</Accordion>
               </div>
            </div>

        </div>
    );
};

export default Home;