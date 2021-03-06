import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
    return (
        <section className="section footer bg-dark text-white">
            <div className="container">
                <div className="row">
                    <div className="col-md-4">
                        <h6>Deserto Details</h6>
                        <hr />
                        <p className="text-white">
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                            when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                            It has survived not only five centuries, but also the leap into electronic typesetting,
                            remaining essentially unchanged. It was popularised in the 1960s with the release of
                            Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing
                            software like Aldus PageMaker including versions of Lorem Ipsum.
                        </p>
                    </div>

                    <div className="col-md-4">
                        <h6>Quick Links</h6>
                        <hr />
                        <div><Link to="/">Home</Link></div>
                        <div><Link to="/about">About</Link></div>
                        <div><Link to="/contact">Contact</Link></div>
                        <div><Link to="/">Blog</Link></div>
                    </div>

                    <div className="col-md-4">
                        <h6>Additional Information</h6>
                        <hr />
                        <div><p className="text-white mb-1">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p></div>
                        <div><p className="text-white mb-1">+91 899123918</p></div>
                        <div><p className="text-white mb-1">+91 393363663</p></div>
                        <div><p className="text-white mb-1">email@domain.com</p></div>
                    </div>
                </div>
            </div>

        </section>
    )
}

export default Footer;
