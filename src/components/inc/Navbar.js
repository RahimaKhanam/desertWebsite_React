import React from 'react'
import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <div>
            <nav class="navbar-dark bg-dark shadow">
                <div class="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="navbar navbar-expand-lg">
                                <div class="container-fluid">
                                    <Link to="/" class="navbar-brand navbar-logo-custom">Deserto</Link>
                                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                        <span class="navbar-toggler-icon"></span>
                                    </button>


                                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                                        <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                                            <li class="nav-item">
                                                <Link to="/" class="nav-link active">Home</Link>
                                            </li>
                                            <li class="nav-item">
                                                <Link to="/about" class="nav-link active">About</Link>
                                            </li>
                                            <li class="nav-item">
                                                <Link to="/contact" class="nav-link active">Contact</Link>
                                            </li>
                                        </ul>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </nav>
        </div>
    )
}

export default Navbar;
