import React from 'react';

const Contact = () => {
    return (
        <div>
            <h2 className="text-center">Contact us</h2>
            <div className="d-lg-flex ">
            <div className="w-50  p-3 m-lg-5 ">
                <form action="">
                    <h5>Full Name</h5>
                    <input type="text" />
                    <h5>Email</h5>
                    <input type="email" />
                    <h5>Subject</h5>
                    <input type="text" />
                    <h5>Message</h5>
                    <textarea className="" name="message" id="message" cols="40"  rows="5"></textarea>
                    <br />
                    <button>Send Message</button>
                </form>
            </div>

                <div className="w-50 p-3 m-5">
                    <div>
                        <h3>Get in Touch</h3>
                        <p>SA Hospital started its journey in June 1983 and within few days due to its accuracy of the reports and quality of the service, Popular became an unparallel symbol of reliability and trust from the end of respective doctors and the people of our country. To get any service and support from us, please contact us.</p>
                    </div>
                    <div>
                        <h3>Our Office</h3>
                        <div>
                            <h5>Address: <small>House: 08, Road: 02, Dhanmondi, Dhaka-1205, Bangladesh</small> </h5>
                            <h5>Email: <small>info@sa-general-hospital.com</small> </h5>
                            <h5>Phone: <small>09613 700000, 09666 700000</small> </h5>
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;