import React from 'react'
import '../components_css/Navbar.css'

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg .bg-dark.bg-gradient fixed-top">
        <div className="container-fluid container">
            <a className="navbar-brand text-white" style={{marginRight:'10rem'}} href="#">DevUsman</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse navList" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                <a className="nav-link active text-white me-3" aria-current="page" href="#home">Home</a>
                </li>
                <li className="nav-item">
                <a className="nav-link active text-white me-3" aria-current="page" href="#work">Work</a>
                </li>
                <li className="nav-item">
                <a className="nav-link active text-white me-3" aria-current="page" href="#skills">Skills</a>
                </li>
                <li className="nav-item">
                <a className="nav-link active text-white me-3" aria-current="page" href="#aboutme">About</a>
                </li>
            </ul>
            <a className="nav-link active text-white" aria-current="page" href="#hireme"><button className='btn btn-outline-info'>Hire me</button></a>
            </div>
        </div>
    </nav>
  )
}

export default Navbar
