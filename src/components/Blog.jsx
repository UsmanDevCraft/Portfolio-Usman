import React from 'react'
import '../components_css/Blog.css'
import { FaEye } from "react-icons/fa";


const Blog = () => {
  return (
    <div className="blog">
        <div className='container'>
        <h1 className='font_size beforeTag'>My Blogs</h1>
        <p>Checkout a few of my blogs!</p>


        {/* ------------------ BLOG#01 ------------------ */}
        <div className="card my-5 bg_card_color">
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
