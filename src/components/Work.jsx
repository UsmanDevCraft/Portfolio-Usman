import React, { useState } from 'react'
import '../components_css/Work.css'
import { FaGithub } from "react-icons/fa";
import { FaEye } from "react-icons/fa";
import AOS from 'aos';
import 'aos/dist/aos.css';

const Work = () => {
    AOS.init();

    const [ accordionHeading, setAccHead] = useState('Show More Projects');
    const [ textColor, setTextColor] = useState('text-white');
    const onClick = () => {
        if(accordionHeading === 'Show More Projects'){
            setAccHead('Show Less');
            setTextColor('text-dark');
        } else {
            setAccHead('Show More Projects');
            setTextColor('text-white');
        }
    };

  return (
    <div className='work'>
        <div className='container work-child'>
            <div data-aos="fade-right">
                <h1 className='font_size beforeTag'>My work</h1>
                <p>Checkout a few of my works!</p>
            </div>


            {/* ------------------ PROJECT#Testimonials ------------------ */}
            <div data-aos="fade-right" className="card my-5 bg_card_color">
                <div className='d-flex flex-column flex-md-row justify-content-center align-items-center'>
                    <div className="card-body col-md-4 order-md-1">
                        <h5 className="card-title ProjectsTag fs-3 fw-bold">Testimonials WebApp</h5>
                        <p className='fs-4 mainPageHeadBlue fw-bold lh-1'>MERN</p>
                        <p className="card-text">Inspired by Testimonials.to, this MERN-based platform helps businesses easily collect, save, and showcase client testimonials. It streamlines gathering and displaying feedback on websites and other digital platforms. Currently, the project is focused on integrating video reviews to enhance how clients share their experiences.</p>
                        <a href="https://testimonials-mern-app.vercel.app/" className='anchor_live' target="target_main"><button type="button" className="btn btn-dark d-flex justify-content-center align-items-center gap-2"><FaEye />Live</button></a>
                        <a href="https://github.com/UsmanDevCraft/testimonials" className='anchor_live' target="target_main"><button type="button" className="btn btn-dark mt-1 d-flex justify-content-center align-items-center gap-2"><FaGithub />Source</button></a>
                    </div>
                    <div className="card col-md-8 imgCard order-md-2">
                        <img src="/testimonials_img_001.png" className="card-img-top" alt="/testimonials_img_001.png" />
                    </div>
                </div>
            </div>




            {/* ------------------ PROJECT#E-Commerce ------------------ */}
            <div data-aos="fade-right" className="card my-5 bg_card_color">
                <div className='d-flex flex-column flex-md-row justify-content-center align-items-center'>
                    <div className="card-body col-md-4 order-md-2">
                        <h5 className="card-title ProjectsTag fs-3 fw-bold">E-Commerce WebApp</h5>
                        <p className='fs-4 mainPageHeadBlue fw-bold lh-1'>MERN</p>
                        <p className="card-text">This is an e-commerce store webapp which allows users to search for different products, save the product to thier cart, and provides login and signup functionality. This webapp is made from Reactjs, Bootstrap, Pexels API, MERN for login and signup and localstorage for storing cart.</p>
                        <a href="https://e-commerce-store-web-app.vercel.app/" className='anchor_live' target="target_main"><button type="button" className="btn btn-dark d-flex justify-content-center align-items-center gap-2"><FaEye />Live</button></a>
                        <a href="https://github.com/UsmanDevCraft/e-commerce" className='anchor_live' target="target_main"><button type="button" className="btn btn-dark mt-1 d-flex justify-content-center align-items-center gap-2"><FaGithub />Source</button></a>
                    </div>
                    <div className="card col-md-8 imgCard order-md-1">
                        <img src="/ecommerce_img_001.png" className="card-img-top" alt="/ecommerce_img_001.png" />
                    </div>
                </div>
            </div>



            {/* ------------------ PROJECT#Pexels Clone ------------------ */}
            <div data-aos="fade-right" className="card my-5 bg_card_color">
                <div className='d-flex flex-column flex-md-row justify-content-center align-items-center'>
                    <div className="card-body col-md-4">
                        <h5 className="card-title ProjectsTag fs-3 fw-bold">Pexels-Clone</h5>
                        <p className='fs-4 mainPageHeadBlue fw-bold lh-1'>ReactJs</p>
                        <p className="card-text">This is a clone of image gallery PEXELS which allows users to search all category images and videos and download them too for free. This app is made from HTML, CSS, JavaScript, ReactJS, BootStrap, Pexels API and hosted on vercel.</p>
                        <a href="https://pexels-clone-web-app.vercel.app/" className='anchor_live' target="target_main"><button type="button" className="btn btn-dark d-flex justify-content-center align-items-center gap-2"><FaEye />Live</button></a>
                        <a href="https://github.com/UsmanDevCraft/Pexels-Clone" className='anchor_live' target="target_main"><button type="button" className="btn btn-dark mt-1 d-flex justify-content-center align-items-center gap-2"><FaGithub />Source</button></a>
                    </div>
                    <div className="card col-md-8 imgCard">
                        <img src="/pexels_clone_img_001.png" className="card-img-top" alt="/ecommerce_img_001.png" />
                    </div>
                </div>
            </div>



            {/* ------------------ PROJECT#Real-time-tracker ------------------ */}
            <div data-aos="fade-right" className="card my-5 bg_card_color">
                <div className='d-flex flex-column flex-md-row justify-content-center align-items-center'>
                    <div className="card-body col-md-4 order-md-2">
                        <h5 className="card-title ProjectsTag fs-3 fw-bold">Realtime Device Tracker</h5>
                        <p className='fs-4 mainPageHeadBlue fw-bold lh-1'>NodeJs, Socket.io</p>
                        <p className="card-text">This project is a real-time device tracking system, developed using Node.js, Express.js, Socket.IO, and Leaflet. It efficiently tracks and displays device locations in real-time on an interactive map. The system leverages WebSockets for seamless, real-time communication between the server and clients.</p>
                        <a href="https://realtime-device-tracker-system.vercel.app/" className='anchor_live' target="target_main"><button type="button" className="btn btn-dark d-flex justify-content-center align-items-center gap-2"><FaEye />Live</button></a>
                        <a href="https://github.com/UsmanDevCraft/realtime-device-tracker" className='anchor_live' target="target_main"><button type="button" className="btn btn-dark mt-1 d-flex justify-content-center align-items-center gap-2"><FaGithub />Source</button></a>
                    </div>
                    <div className="card col-md-8 imgCard">
                        <img src="/device-tracker_ss.png" className="card-img-top" alt="/ecommerce_img_001.png" />
                    </div>
                </div>
            </div>



            {/* ------------------ PROJECT#Qr-code generator ------------------ */}
            <div data-aos="fade-right" className="card my-5 bg_card_color">
                <div className='d-flex flex-column flex-md-row justify-content-center align-items-center'>
                    <div className="card-body col-md-4">
                        <h5 className="card-title ProjectsTag fs-3 fw-bold">QR Code Generator</h5>
                        <p className='fs-4 mainPageHeadBlue fw-bold lh-1'>NodeJs</p>
                        <p className="card-text">This application is a URL to QR Code converter built using HTML, Node.js, and Express.js. Users can effortlessly input any URL into a form, convert it into a QR code, and download the QR code image.</p>
                        <a href="https://url-to-qr-code-convertor-generator-5izt2bsmr.vercel.app/" className='anchor_live' target="target_main"><button type="button" className="btn btn-dark d-flex justify-content-center align-items-center gap-2"><FaEye />Live</button></a>
                        <a href="https://github.com/UsmanDevCraft/QR-Generator" className='anchor_live' target="target_main"><button type="button" className="btn btn-dark mt-1 d-flex justify-content-center align-items-center gap-2"><FaGithub />Source</button></a>
                    </div>
                    <div className="card col-md-8 imgCard">
                        <img src="/qr-code-gen_ss.png" className="card-img-top" alt="/ecommerce_img_001.png" />
                    </div>
                </div>
            </div>



            {/* ------------------ PROJECT#01 ------------------ */}
            <div data-aos="fade-right" className="card my-5 bg_card_color">
                <div className='d-flex flex-column flex-md-row justify-content-center align-items-center'>
                    <div className="card-body col-md-4 order-md-2">
                        <h5 className="card-title ProjectsTag fs-3 fw-bold">Cloudbook</h5>
                        <p className='fs-4 mainPageHeadBlue fw-bold lh-1'>MERN</p>
                        <p className="card-text">This is an online notes saving web app which is used to store the data of a specific user only. Using the Login and Signup functionality, one can easily create an account and login to create, read, update, and delete their notes. This is made from React + Vite, MongoDB, Express, and Node, and Bootstrap.</p>
                        <a href="https://cloud-book-mern-web-app.vercel.app/" className='anchor_live' target="target_main"><button type="button" className="btn btn-dark d-flex justify-content-center align-items-center gap-2"><FaEye />Live</button></a>
                        <a href="https://github.com/UsmanDevCraft/Cloudbook" className='anchor_live' target="target_main"><button type="button" className="btn btn-dark mt-1 d-flex justify-content-center align-items-center gap-2"><FaGithub />Source</button></a>
                    </div>
                    <div className="card col-md-8 imgCard order-md-1">
                        <img src="/cloudbook_ss_3.png" className="card-img-top" alt="/cloudbook_ss_3.png" />
                    </div>
                </div>
            </div>



            {/* ------------------ PROJECT#02 ------------------ */}
            <div data-aos="fade-right" className="card my-5 bg_card_color">
                <div className='d-flex flex-column flex-md-row justify-content-center align-items-center'>
                    <div className="card-body col-md-4">
                        <h5 className="card-title ProjectsTag fs-3 fw-bold">Modern-Website-Landing-Page</h5>
                        <p className='fs-4 mainPageHeadBlue fw-bold lh-1'>HTML, CSS, JS, GSAP</p>
                        <p className="card-text">This is a modern website landing page with great animations and effects coded with pure HTML, CSS and vanilla JS. It also contains GSAP for some effects.</p>
                        <a href="https://usmandevcraft.github.io/Modern-Website-Landing-Page/" className='anchor_live' target="target_main"><button type="button" className="btn btn-dark d-flex justify-content-center align-items-center gap-2"><FaEye />Live</button></a>
                       <a href="https://github.com/UsmanDevCraft/Modern-Website-Landing-Page" className='anchor_live' target="target_main"><button type="button" className="btn btn-dark mt-1 d-flex justify-content-center align-items-center gap-2"><FaGithub />Source</button></a>
                    </div>
                    <div className="card col-md-8 imgCard">
                        <img src="/Modern_Web_Landing_Page_001.png" className="card-img-top" alt="/Modern_Web_Landing_Page_001.png" />
                    </div>
                </div>
            </div>


            {/* ------------------ PROJECT#03 ------------------ */}
            <div data-aos="fade-right" className="card my-5 bg_card_color">
                <div className='d-flex flex-column flex-md-row justify-content-center align-items-center'>
                    <div className="card-body col-md-4 order-md-2">
                        <h5 className="card-title ProjectsTag fs-3 fw-bold">textEditor</h5>
                        <p className='fs-4 mainPageHeadBlue fw-bold lh-1'>ReactJs</p>
                        <p className="card-text">This is a text editor which can be used for text editing. It is made from react, bootstrap and vite.</p>
                        <a href="https://text-editor-gold-nine.vercel.app/" className='anchor_live' target="target_main"><button type="button" className="btn btn-dark d-flex justify-content-center align-items-center gap-2"><FaEye />Live</button></a>
                       <a href="https://github.com/UsmanDevCraft/textEditor" className='anchor_live' target="target_main"><button type="button" className="btn btn-dark mt-1 d-flex justify-content-center align-items-center gap-2"><FaGithub />Source</button></a>
                    </div>
                    <div className="card col-md-8 imgCard order-md-1">
                        <img src="/TextEditor_001.png" className="card-img-top" alt="/TextEditor_001.png" />
                    </div>
                </div>
            </div>




            {/* -------------- Accordion Button for Showing More Projects (7-10) -------------- */}
            <div data-aos="fade-down" className="accordion accordionBg" id="accordionExample">
                <div className="accordion-item">
                    <h2 className="accordion-header">
                    <button className="accordion-button collapsed accordionBg" onClick={onClick} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                        <p className={`${textColor} fs-5`}>{ accordionHeading }</p>
                    </button>
                    </h2>
                    <div id="collapseTwo" className="accordion-collapse collapse accordionBg" data-bs-parent="#accordionExample">
                    <div className="accordion-body">


                        {/* ------------------ PROJECT#Newshub ------------------ */}
                        <div data-aos="fade-right" className="card my-5 bg_card_color">
                            <div className='d-flex flex-column flex-md-row justify-content-center align-items-center'>
                                <div className="card-body col-md-4">
                                    <h5 className="card-title ProjectsTag fs-3 fw-bold">NewsHub</h5>
                                    <p className='fs-4 mainPageHeadBlue fw-bold lh-1'>ReactJs</p>
                                    <p className="card-text">A news website to deliver news up to date. This is developed using ReactJs, Bootstrap, News API and hosted on vercel.</p>
                                    <a href="https://news-hub-news-delivering-website.vercel.app/" className='anchor_live' target="target_main"><button type="button" className="btn btn-dark d-flex justify-content-center align-items-center gap-2"><FaEye />Live</button></a>
                                <a href="https://github.com/UsmanDevCraft/NewsHub" className='anchor_live' target="target_main"><button type="button" className="btn btn-dark mt-1 d-flex justify-content-center align-items-center gap-2"><FaGithub />Source</button></a>
                                </div>
                                <div className="card col-md-8 imgCard">
                                    <img src="/NewsHub_ss_01.png" className="card-img-top" alt="/NewsHub_ss_01.png" />
                                </div>
                            </div>
                        </div>



                        {/* ------------------ PROJECT#04 ------------------ */}
                        <div className="card my-5 bg_card_color">
                            <div className='d-flex flex-column flex-md-row justify-content-center align-items-center'>
                                <div className="card-body col-md-4 order-md-2">
                                    <h5 className="card-title ProjectsTag fs-3 fw-bold">SNAKE-GAME</h5>
                                    <p className='fs-4 mainPageHeadBlue fw-bold lh-1'>HTML, CSS, JS</p>
                                    <p className="card-text">This is a responsive snake game provided with different speed options to play with. It is coded with pure HTML, CSS and vanilla JS.</p>
                                    <a href="https://usmandevcraft.github.io/SNAKE-GAME/" className='anchor_live' target="target_main"><button type="button" className="btn btn-dark d-flex justify-content-center align-items-center gap-2"><FaEye />Live</button></a>
                                <a href="https://github.com/UsmanDevCraft/SNAKE-GAME" className='anchor_live' target="target_main"><button type="button" className="btn btn-dark mt-1 d-flex justify-content-center align-items-center gap-2"><FaGithub />Source</button></a>
                                </div>
                                <div className="card col-md-8 imgCard order-md-1">
                                    <img src="/Snake_Game_001.png" className="card-img-top" alt="/Snake_Game_001.png" />
                                </div>
                            </div>
                        </div>


                        {/* ------------------ PROJECT#05 ------------------ */}
                        <div className="card my-5 mt-3 bg_card_color">
                            <div className='d-flex flex-column flex-md-row justify-content-center align-items-center'>
                                <div className="card-body col-md-4">
                                    <h5 className="card-title ProjectsTag fs-3 fw-bold">Responsive-SPOTIFY-Clone</h5>
                                    <p className='fs-4 mainPageHeadBlue fw-bold lh-1'>HTML, CSS, JS</p>
                                    <p className="card-text">This is a responsive music app with great animations coded with pure HTML, CSS and Vanilla JS.</p>
                                    <a href="https://usmandevcraft.github.io/Responsive-SPOTIFY-Clone/" className='anchor_live' target="target_main"><button type="button" className="btn btn-dark d-flex justify-content-center align-items-center gap-2"><FaEye />Live</button></a>
                                <a href="https://github.com/UsmanDevCraft/Responsive-SPOTIFY-Clone" className='anchor_live' target="target_main"><button type="button" className="btn btn-dark mt-1 d-flex justify-content-center align-items-center gap-2"><FaGithub />Source</button></a>
                                </div>
                                <div className="card col-md-8 imgCard">
                                    <img src="/spotify_clone_ss.png" className="card-img-top" alt="/spotify_clone_ss.png" />
                                </div>
                            </div>
                        </div>


                        {/* ------------------ PROJECT#06 ------------------ */}
                        <div className="card my-5 bg_card_color">
                            <div className='d-flex flex-column flex-md-row justify-content-center align-items-center'>
                                <div className="card-body col-md-4 order-md-2">
                                    <h5 className="card-title ProjectsTag fs-3 fw-bold">Responsive-BUBBLE-GAME</h5>
                                    <p className='fs-4 mainPageHeadBlue fw-bold lh-1'>HTML, CSS, JS</p>
                                    <p className="card-text">This is a responsive bubble game in which you hit bubbles with same number as that of hit targtet given, each correct hit gives a score of 10 and after each hit, all numbers on screen changes with change in target. It is made with HTML, CSS and JS only.</p>
                                    <a href="https://usmandevcraft.github.io/Responsive-BUBBLE-GAME/" className='anchor_live' target="target_main"><button type="button" className="btn btn-dark d-flex justify-content-center align-items-center gap-2"><FaEye />Live</button></a>
                                <a href="https://github.com/UsmanDevCraft/Responsive-BUBBLE-GAME" className='anchor_live' target="target_main"><button type="button" className="btn btn-dark mt-1 d-flex justify-content-center align-items-center gap-2"><FaGithub />Source</button></a>
                                </div>
                                <div className="card col-md-8 imgCard order-md-1">
                                    <img src="/bubble_game_ss.png" className="card-img-top" alt="/bubble_game_ss.png" />
                                </div>
                            </div>
                        </div>


                        {/* ------------------ PROJECT#07 ------------------ */}
                        <div className="card my-5 bg_card_color">
                            <div className='d-flex flex-column flex-md-row justify-content-center align-items-center'>
                                <div className="card-body col-md-4">
                                    <h5 className="card-title ProjectsTag fs-3 fw-bold">DocsApp</h5>
                                    <p className='fs-4 mainPageHeadBlue fw-bold lh-1'>ReactJs, TailwindCSS, Framer Motion</p>
                                    <p className="card-text">This is a modern web design for a mini document app with draggable notes cards. It is built with help of React, Tailwind and Framer motion.</p>
                                    <a href="https://docs-app-sigma.vercel.app/" className='anchor_live' target="target_main"><button type="button" className="btn btn-dark d-flex justify-content-center align-items-center gap-2"><FaEye />Live</button></a>
                                <a href="https://github.com/UsmanDevCraft/DocsApp" className='anchor_live' target="target_main"><button type="button" className="btn btn-dark mt-1 d-flex justify-content-center align-items-center gap-2"><FaGithub />Source</button></a>
                                </div>
                                <div className="card col-md-8 imgCard">
                                    <img src="/docs_app_001.png" className="card-img-top" alt="/docs_app_001.png" />
                                </div>
                            </div>
                        </div>


                        {/* ------------------ PROJECT#08 ------------------ */}
                        <div className="card bg_card_color">
                            <div className='d-flex flex-column flex-md-row justify-content-center align-items-center'>
                                <div className="card-body col-md-4 order-md-2">
                                    <h5 className="card-title ProjectsTag fs-3 fw-bold">python-backend-main</h5>
                                    <p className='fs-4 mainPageHeadBlue fw-bold lh-1'>ReactJs, Python, Django</p>
                                    <p className="card-text">A Machine Learning project with react front end for overlapped speech seperation.</p>
                                    <a href="python-backend-main.vercel.app" className='anchor_live' target="target_main"><button type="button" className="btn btn-dark d-flex justify-content-center align-items-center gap-2"><FaEye />Live</button></a>
                                <a href="https://github.com/UsmanDevCraft/python-backend-main" className='anchor_live' target="target_main"><button type="button" className="btn btn-dark mt-1 d-flex justify-content-center align-items-center gap-2"><FaGithub />Source</button></a>
                                </div>
                                <div className="card col-md-8 imgCard order-md-1">
                                    <img src="/FYP_Frontend_pic.png" className="card-img-top" alt="/FYP_Frontend_pic.png" />
                                </div>
                            </div>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Work
