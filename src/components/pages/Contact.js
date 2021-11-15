import React from 'react';

function Contact() {
    return (
        <div>
            <section className="py-4 bg-warning">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 text-center">
                            <h4>Contact Us</h4>
                        </div>
                        
                    </div>
                </div>
            </section>

            <section className="section">
                <div className="container">
                    <div className="card shadow">
                        <div className="card-body">
                            <div className="row">
                                <div className="col-md-6 border-start">
                                    <h6>Contact Form</h6>
                                    <hr/>
                                    <div className="form-group">
                                        <label className="mb-1">Full Name</label>
                                        <input type="text" className="form-control" placeholder="Enter Full Name"></input>
                                    </div>
                                    <div className="form-group">
                                        <label className="mb-1">Phone Number</label>
                                        <input type="text" className="form-control" placeholder="Enter Phone No."></input>
                                    </div>
                                    <div className="form-group">
                                        <label className="mb-1">Email Address</label>
                                        <input type="text" className="form-control" placeholder="Enter Email Address"></input>
                                    </div>
                                    <div className="form-group">
                                        <label className="mb-1">Message</label>
                                        <textarea rows="3" className="form-control" placeholder="Enter your message..."></textarea>
                                    </div>
                                    <div className="form-group py-3">
                                        <button type="button" className="btn btn-warning shadow w-100">Send Message</button>
                                    </div>
                                </div>
                                <div className="col-md-6 border-start">
                                    <h5 className="main-heading">Address Information</h5>
                                    <div className="underline"></div>
                                    <p>#XXX, Riyadh, Kingdom of Saudi Arabia</p>
                                    <p>Phone: +966 7446474747</p>
                                    <p>Email: email@domain.com</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Contact;
