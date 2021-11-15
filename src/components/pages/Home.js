import React from 'react';
import { Link } from 'react-router-dom';
import Slider from '../inc/Slider';
import VMC from '../inc/Vmc';
import Categories from '../inc/Categories';

function Home() {
    return (
        <div>
            <Slider />

            {/* Section 1 */}
            <section className="section">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 text-center">
                            <h3 className="main-heading">Deserto</h3>
                            <div className="underline mx-auto"></div>
                            <p>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                            when an unknown printer took a galley of type and scrambled it to make a type specimen book.


                            </p>

                            <Link to="/about" className="btn btn-warning shadow">Read More...</Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Section 2: Vision Mission and values*/}
            <VMC />

            {/* Section 3: services */}
            <Categories />

        </div>

    )
}

export default Home;
