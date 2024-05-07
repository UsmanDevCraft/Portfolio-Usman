import React from 'react'
import '../components_css/Navbar.css'

const Navbar = () => {

  const downloadCV = () => {
    // Replace 'cv.pdf' with the actual path to your CV file
    const cvUrl = '/MERNDev_CV.pdf';
    const link = document.createElement('a');
    link.href = cvUrl;
    link.download = 'UsmanDevCV'; // You can change the downloaded file name here
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
};

  return (
    <nav className="navbar navbar-expand-lg .bg-dark.bg-gradient fixed-top">
        <div className="container-fluid container">
            <a className="navbar-brand text-white" style={{marginRight:'10rem'}} href="#">DevUsman</a>
            <button className="navbar-toggler bg-info" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
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
                <li className="nav-item">
                <a className="nav-link active text-white me-3" aria-current="page" href="#blog">Blog</a>
                </li>
            </ul>
            <button className='btn btn-outline-info me-4 mt-1' onClick={downloadCV}>Download CV</button>
            <a className="nav-link active text-white mt-1" aria-current="page" href="#hireme"><button className='btn btn-outline-info'>Hire me</button></a>
            </div>
        </div>
    </nav>
  )
}

export default Navbar
