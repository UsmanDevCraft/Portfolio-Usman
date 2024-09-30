import React from 'react'
import '../components_css/Blog.css'
import { FaEye } from "react-icons/fa";
import AOS from 'aos';
import 'aos/dist/aos.css';


const Blog = () => {
    AOS.init();

  return (
    <div className="blog">
        <div className='container'>
        <div data-aos="fade-right">
            <h1 className='font_size beforeTag'>My Blogs</h1>
            <p>Checkout a few of my blogs!</p>
        </div>


        {/* ------------------ BLOG#01 ------------------ */}
        <div data-aos="fade-up" className="card my-5 bg_card_color">
            <div className='d-flex flex-column flex-md-row justify-content-center align-items-center'>
                <div className="card-body col-md-4">
                    <h5 className="card-title ProjectsTag">React Concurrent Mode</h5>
                    <p className="card-text">An advanced feature of React designed to make applications more interactive and responsive by improving the way React handles rendering. Instead of rendering updates synchronously (all at once), Concurrent Mode allows React to work on multiple tasks at different priorities and interrupt rendering when necessary.</p>
                    <a href="https://dev.to/usman_awan/react-concurrent-mode-optimizing-react-performance-2mln" className='anchor_live' target="target_main"><button type="button" className="btn btn-dark d-flex justify-content-center align-items-center gap-2"><FaEye />Read</button></a>
                </div>
                <div className="card col-md-8">
                    <img src="/dev-comm-img-002.png" className="card-img-top" alt="/dev-comm-img-002.png" />
                </div>
            </div>
        </div>




        {/* ------------------ BLOG#02 ------------------ */}
        <div data-aos="fade-up" className="card my-5 bg_card_color">
            <div className='d-flex flex-column flex-md-row justify-content-center align-items-center'>
                <div className="card-body col-md-4">
                    <h5 className="card-title ProjectsTag">React Virtualization</h5>
                    <p className="card-text">A technique used to efficiently render large lists or grids of data in React applications by only rendering the visible items on the screen and a small buffer, rather than rendering the entire list. This significantly improves the performance of applications that handle large datasets by minimizing the number of DOM elements being rendered at a time.</p>
                    <a href="https://dev.to/usman_awan/optimizing-performance-with-react-virtualization-an-industry-level-approach-264f" className='anchor_live' target="target_main"><button type="button" className="btn btn-dark d-flex justify-content-center align-items-center gap-2"><FaEye />Read</button></a>
                </div>
                <div className="card col-md-8">
                    <img src="/dev-comm-img-001.png" className="card-img-top" alt="/dev-comm-img-001.png" />
                </div>
            </div>
        </div>




        {/* ------------------ BLOG#03 ------------------ */}
        <div data-aos="fade-up" className="card my-5 bg_card_color">
            <div className='d-flex flex-column flex-md-row justify-content-center align-items-center'>
                <div className="card-body col-md-4">
                    <h5 className="card-title ProjectsTag">Blog-MERN-vercel-host</h5>
                    <p className="card-text">This is blog written by me to help the developers struggling to host a mern website to vercel. This blog contains each and every step requird to host a mern full stack website for free on vercel without any errors.</p>
                    <a href="https://blog-mern-app-vercel-host.vercel.app/" className='anchor_live' target="target_main"><button type="button" className="btn btn-dark d-flex justify-content-center align-items-center gap-2"><FaEye />Read</button></a>
                </div>
                <div className="card col-md-8">
                    <img src="/blog_ss_01.png" className="card-img-top" alt="/blog_ss_01.png" />
                </div>
            </div>
        </div>

        </div>
    </div>
  )
}

export default Blog
