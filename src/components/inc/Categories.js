import React from 'react'
import c1 from '../images/c1.jpg';
import c2 from '../images/c2.jpg';
import c3 from '../images/c3.jpg';
import { Link } from 'react-router-dom';

function features() {
    return (
        <div>
            <section className="section border-top">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 mb-4 text-center">
                            <h3 className="main-heading">Categories</h3>
                            <div className="underline mx-auto"></div>
                        </div>

                        <div className="col-md-4">
                            <div className="card shadow">
                                <img src={c1} className="cont-image border-bottom" alt="Features" />
                                <div className="card-body">
                                    <h6>Cakes</h6>
                                    <div className="underline"></div>
                                    <p>
                                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                    </p>
                                    <Link to="/" className="btn btn-warning">Read more...</Link>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-4">
                            <div className="card shadow">
                                <img src={c2} className="cont-image border-bottom" alt="Categories" />
                                <div className="card-body">
                                    <h6>Icecream</h6>
                                    <div className="underline"></div>
                                    <p>
                                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                    </p>
                                    <Link to="/" className="btn btn-warning">Read more...</Link>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-4">
                            <div className="card shadow">
                                <img src={c3} className="cont-image border-bottom" alt="Features" />
                                <div className="card-body">
                                    <h6>Sweets</h6>
                                    <div className="underline"></div>
                                    <p>
                                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                    </p>
                                    <Link to="/" className="btn btn-warning">Read more...</Link>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </div>
    )
}

export default features
