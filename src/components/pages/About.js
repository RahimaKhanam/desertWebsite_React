import React from 'react';
import VMC from '../inc/Vmc';
import ai from '../images/about_image.jpg';


function About() {
    return (
        <div>
            <section className="py-4 bg-warning">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 text-center">
                            <h4>About Us</h4>
                        </div>

                    </div>
                </div>
            </section>


            <img src={ai} class="about-img" alt="Image About" />




            <section className="section bg-light border-bottom">
                <div className="container">
                    <h5 className="main-heading">Our Company</h5>
                    <div className="underline"></div>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                        when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                </div>
            </section>

            {/* Section 2: Vision Mission and values*/}
            <VMC />
        </div>
    )
}

export default About;
