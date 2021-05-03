import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';

const NavBar = () => {
    return (
        // <nav className="navbar navbar-expand-lg navbar-light">


        //     {/* <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="true" aria-label="Toggle navigation">
        //         <span className="navbar-toggler-icon"></span>
        //     </button> */}

        //     <div className="collapse navbar-collapse position-absolute top-0 end-0" id="navbarSupportedContent">
        //         <ul className="navbar-nav">
        //             <li className="nav-item active me-4">
        //                 <Link className="nav-link mr-5" to="/">Home</Link>
        //             </li>
        //             <li className="nav-item me-4">
        //                 <Link className="nav-link mr-5" to="/projects">Projects</Link>
        //             </li>
        //             <li className="nav-item me-4">
        //                 <Link className="nav-link mr-5" to="/blogs">Blogs</Link>
        //             </li>
        //             <li className="nav-item me-4">
        //                 <Link className="nav-link mr-5" to="/about">About Me</Link>
        //             </li>
        //             <li className="nav-item me-4">
        //                 <Link className="nav-link mr-5" to="/contact">Contact</Link>
        //             </li>
        //         </ul>
        //     </div>
        // </nav>

        <nav class="navbar navbar-expand-lg navbar-light navColor">
            <div class="container-fluid">
                <a class="navbar-brand" href="https://www.linkedin.com/in/nasif-reza-146177211/">Nasif</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse position-absolute top-0 end-0" id="navbarNav">
                    <ul class="navbar-nav">
                        <li class="nav-item me-4">
                            <Link className="nav-link mr-5 text-light" to="/home">Home</Link>
                        </li>
                        <li class="nav-item me-4">
                            <Link className="nav-link mr-5 text-light" to="/projects">Projects</Link>
                        </li>
                        <li class="nav-item me-4">
                            <Link className="nav-link mr-5 text-light" to="/blogs">Blogs</Link>
                        </li>
                        <li class="nav-item me-4">
                            <Link className="nav-link mr-5 text-light" to="/about">About Me</Link>
                        </li>
                        <li class="nav-item me-4">
                            <Link className="nav-link mr-5 text-light" to="/contact">Contact</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default NavBar;