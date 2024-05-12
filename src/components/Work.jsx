import React from 'react'
import '../components_css/Work.css'
import { FaGithub } from "react-icons/fa";
import { FaEye } from "react-icons/fa";

const Work = () => {
  return (
    <div className='work'>
        <div className='container work-child'>
            <h1 className='font_size beforeTag'>My work</h1>
            <p>Checkout a few of my works!</p>


            {/* ------------------ PROJECT#E-Commerce ------------------ */}
            <div className="card my-5 bg_card_color">
                <div className='d-flex flex-column flex-md-row justify-content-center align-items-center'>
                    <div className="card-body col-md-4">
                        <h5 className="card-title ProjectsTag">E-Commerce WebApp</h5>
                        <p className="card-text">This is an e-commerce store webapp which allows users to search for different products, save the product to thier cart, and provides login and signup functionality. This webapp is made from Reactjs, Bootstrap, Pexels API, MERN for login and signup and localstorage for storing cart.</p>
                        <a href="https://e-commerce-store-web-app.vercel.app/" className='anchor_live' target="target_main"><button type="button" className="btn btn-dark d-flex justify-content-center align-items-center gap-2"><FaEye />Live</button></a>
                        <a href="https://github.com/UsmanDevCraft/e-commerce" className='anchor_live' target="target_main"><button type="button" className="btn btn-dark mt-1 d-flex justify-content-center align-items-center gap-2"><FaGithub />Source</button></a>
                    </div>
                    <div className="card col-md-8">
                        <img src="/ecommerce_img_001.png" className="card-img-top" alt="/ecommerce_img_001.png" />
                    </div>
                </div>
            </div>




            {/* ------------------ PROJECT#01 ------------------ */}
            <div className="card my-5 bg_card_color">
                <div className='d-flex flex-column flex-md-row justify-content-center align-items-center'>
                    <div className="card-body col-md-4">
                        <h5 className="card-title ProjectsTag">Cloudbook</h5>
                        <p className="card-text">This is an online notes saving web app which is used to store the data of a specific user only. Using the Login and Signup functionality, one can easily create an account and login to create, read, update, and delete their notes. This is made from React + Vite, MongoDB, Express, and Node, and Bootstrap.</p>
                        <a href="https://cloud-book-mern-web-app.vercel.app/" className='anchor_live' target="target_main"><button type="button" className="btn btn-dark d-flex justify-content-center align-items-center gap-2"><FaEye />Live</button></a>
                        <a href="https://github.com/UsmanDevCraft/Cloudbook" className='anchor_live' target="target_main"><button type="button" className="btn btn-dark mt-1 d-flex justify-content-center align-items-center gap-2"><FaGithub />Source</button></a>
                    </div>
                    <div className="card col-md-8">
                        <img src="/cloudbook_ss_3.png" className="card-img-top" alt="/cloudbook_ss_3.png" />
                    </div>
                </div>
            </div>



            {/* ------------------ PROJECT#02 ------------------ */}
            <div className="card my-5 bg_card_color">
                <div className='d-flex flex-column flex-md-row justify-content-center align-items-center'>
                    <div className="card-body col-md-4">
                        <h5 className="card-title ProjectsTag">Modern-Website-Landing-Page</h5>
                        <p className="card-text">This is a modern website landing page with great animations and effects coded with pure HTML, CSS and vanilla JS. It also contains GSAP for some effects.</p>
                        <a href="https://usmandevcraft.github.io/Modern-Website-Landing-Page/" className='anchor_live' target="target_main"><button type="button" className="btn btn-dark d-flex justify-content-center align-items-center gap-2"><FaEye />Live</button></a>
                       <a href="https://github.com/UsmanDevCraft/Modern-Website-Landing-Page" className='anchor_live' target="target_main"><button type="button" className="btn btn-dark mt-1 d-flex justify-content-center align-items-center gap-2"><FaGithub />Source</button></a>
                    </div>
                    <div className="card col-md-8">
                        <img src="/Modern_Web_Landing_Page_001.png" className="card-img-top" alt="/Modern_Web_Landing_Page_001.png" />
                    </div>
                </div>
            </div>


            {/* ------------------ PROJECT#03 ------------------ */}
            <div className="card my-5 bg_card_color">
                <div className='d-flex flex-column flex-md-row justify-content-center align-items-center'>
                    <div className="card-body col-md-4">
                        <h5 className="card-title ProjectsTag">textEditor</h5>
                        <p className="card-text">This is a text editor which can be used for text editing. It is made from react, bootstrap and vite.</p>
                        <a href="https://text-editor-gold-nine.vercel.app/" className='anchor_live' target="target_main"><button type="button" className="btn btn-dark d-flex justify-content-center align-items-center gap-2"><FaEye />Live</button></a>
                       <a href="https://github.com/UsmanDevCraft/textEditor" className='anchor_live' target="target_main"><button type="button" className="btn btn-dark mt-1 d-flex justify-content-center align-items-center gap-2"><FaGithub />Source</button></a>
                    </div>
                    <div className="card col-md-8">
                        <img src="/TextEditor_001.png" className="card-img-top" alt="/TextEditor_001.png" />
                    </div>
                </div>
            </div>


            {/* ------------------ PROJECT#Newshub ------------------ */}
            <div className="card my-5 bg_card_color">
                <div className='d-flex flex-column flex-md-row justify-content-center align-items-center'>
                    <div className="card-body col-md-4">
                        <h5 className="card-title ProjectsTag">NewsHub</h5>
                        <p className="card-text">A news website to deliver news up to date. This is developed using ReactJs, Bootstrap, News API and hosted on vercel.</p>
                        <a href="https://news-hub-news-delivering-website.vercel.app/" className='anchor_live' target="target_main"><button type="button" className="btn btn-dark d-flex justify-content-center align-items-center gap-2"><FaEye />Live</button></a>
                       <a href="https://github.com/UsmanDevCraft/NewsHub" className='anchor_live' target="target_main"><button type="button" className="btn btn-dark mt-1 d-flex justify-content-center align-items-center gap-2"><FaGithub />Source</button></a>
                    </div>
                    <div className="card col-md-8">
                        <img src="/NewsHub_ss_01.png" className="card-img-top" alt="/NewsHub_ss_01.png" />
                    </div>
                </div>
            </div>


            {/* ------------------ PROJECT#04 ------------------ */}
            <div className="card my-5 bg_card_color">
                <div className='d-flex flex-column flex-md-row justify-content-center align-items-center'>
                    <div className="card-body col-md-4">
                        <h5 className="card-title ProjectsTag">SNAKE-GAME</h5>
                        <p className="card-text">This is a responsive snake game provided with different speed options to play with. It is coded with pure HTML, CSS and vanilla JS.</p>
                        <a href="https://usmandevcraft.github.io/SNAKE-GAME/" className='anchor_live' target="target_main"><button type="button" className="btn btn-dark d-flex justify-content-center align-items-center gap-2"><FaEye />Live</button></a>
                       <a href="https://github.com/UsmanDevCraft/SNAKE-GAME" className='anchor_live' target="target_main"><button type="button" className="btn btn-dark mt-1 d-flex justify-content-center align-items-center gap-2"><FaGithub />Source</button></a>
                    </div>
                    <div className="card col-md-8">
                        <img src="/Snake_Game_001.png" className="card-img-top" alt="/Snake_Game_001.png" />
                    </div>
                </div>
            </div>


            {/* ------------------ PROJECT#05 ------------------ */}
            <div className="card my-5 bg_card_color">
                <div className='d-flex flex-column flex-md-row justify-content-center align-items-center'>
                    <div className="card-body col-md-4">
                        <h5 className="card-title ProjectsTag">Responsive-SPOTIFY-Clone</h5>
                        <p className="card-text">This is a responsive music app with great animations coded with pure HTML, CSS and Vanilla JS.</p>
                        <a href="https://usmandevcraft.github.io/Responsive-SPOTIFY-Clone/" className='anchor_live' target="target_main"><button type="button" className="btn btn-dark d-flex justify-content-center align-items-center gap-2"><FaEye />Live</button></a>
                       <a href="https://github.com/UsmanDevCraft/Responsive-SPOTIFY-Clone" className='anchor_live' target="target_main"><button type="button" className="btn btn-dark mt-1 d-flex justify-content-center align-items-center gap-2"><FaGithub />Source</button></a>
                    </div>
                    <div className="card col-md-8">
                        <img src="/spotify_clone_ss.png" className="card-img-top" alt="/spotify_clone_ss.png" />
                    </div>
                </div>
            </div>


            {/* ------------------ PROJECT#06 ------------------ */}
            <div className="card my-5 bg_card_color">
                <div className='d-flex flex-column flex-md-row justify-content-center align-items-center'>
                    <div className="card-body col-md-4">
                        <h5 className="card-title ProjectsTag">Responsive-BUBBLE-GAME</h5>
                        <p className="card-text">This is a responsive bubble game in which you hit bubbles with same number as that of hit targtet given, each correct hit gives a score of 10 and after each hit, all numbers on screen changes with change in target. It is made with HTML, CSS and JS only.</p>
                        <a href="https://usmandevcraft.github.io/Responsive-BUBBLE-GAME/" className='anchor_live' target="target_main"><button type="button" className="btn btn-dark d-flex justify-content-center align-items-center gap-2"><FaEye />Live</button></a>
                       <a href="https://github.com/UsmanDevCraft/Responsive-BUBBLE-GAME" className='anchor_live' target="target_main"><button type="button" className="btn btn-dark mt-1 d-flex justify-content-center align-items-center gap-2"><FaGithub />Source</button></a>
                    </div>
                    <div className="card col-md-8">
                        <img src="/bubble_game_ss.png" className="card-img-top" alt="/bubble_game_ss.png" />
                    </div>
                </div>
            </div>


            {/* ------------------ PROJECT#07 ------------------ */}
            <div className="card my-5 bg_card_color">
                <div className='d-flex flex-column flex-md-row justify-content-center align-items-center'>
                    <div className="card-body col-md-4">
                        <h5 className="card-title ProjectsTag">DocsApp</h5>
                        <p className="card-text">This is a modern web design for a mini document app with draggable notes cards. It is built with help of React, Tailwind and Framer motion.</p>
                        <a href="https://docs-app-sigma.vercel.app/" className='anchor_live' target="target_main"><button type="button" className="btn btn-dark d-flex justify-content-center align-items-center gap-2"><FaEye />Live</button></a>
                       <a href="https://github.com/UsmanDevCraft/DocsApp" className='anchor_live' target="target_main"><button type="button" className="btn btn-dark mt-1 d-flex justify-content-center align-items-center gap-2"><FaGithub />Source</button></a>
                    </div>
                    <div className="card col-md-8">
                        <img src="/docs_app_001.png" className="card-img-top" alt="/docs_app_001.png" />
                    </div>
                </div>
            </div>


            {/* ------------------ PROJECT#08 ------------------ */}
            <div className="card bg_card_color">
                <div className='d-flex flex-column flex-md-row justify-content-center align-items-center'>
                    <div className="card-body col-md-4">
                        <h5 className="card-title ProjectsTag">python-backend-main</h5>
                        <p className="card-text">A Machine Learning project with react front end for overlapped speech seperation.</p>
                        <a href="python-backend-main.vercel.app" className='anchor_live' target="target_main"><button type="button" className="btn btn-dark d-flex justify-content-center align-items-center gap-2"><FaEye />Live</button></a>
                       <a href="https://github.com/UsmanDevCraft/python-backend-main" className='anchor_live' target="target_main"><button type="button" className="btn btn-dark mt-1 d-flex justify-content-center align-items-center gap-2"><FaGithub />Source</button></a>
                    </div>
                    <div className="card col-md-8">
                        <img src="/FYP_Frontend_pic.png" className="card-img-top" alt="/FYP_Frontend_pic.png" />
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Work
