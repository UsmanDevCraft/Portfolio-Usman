import React from 'react'
import '../components_css/Hireme.css'
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import { FaSquarePhone } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";


const Hireme = () => {
  return (
    <div className='hireme'>
        <div className="container">
            <h1 className='font_size beforeTag'>Hire me</h1>
            <div>
                <p>I would like to make your ideas come to live. Feel free to contact me at anytime</p>
                <div>
                    <span className='d-flex align-items-center gap-3'><FaSquarePhone className='reactFont'/><p className='mt-3'>+923175769210</p><br/></span>
                    <span className='d-flex align-items-center gap-3'><IoIosMail className='reactFont'/><p className='mt-3'>usmanaugust28@gmail.com</p><br/></span>
                    <a href="https://www.linkedin.com/in/muhammad-usman-awan-a77906280/" className='reactAtag' target='target_main'><span className='d-flex align-items-center gap-3'><FaLinkedin className='reactFont'/><p className='mt-3'>Usman Awan</p></span></a>
                    <a href="https://github.com/UsmanDevCraft?tab=repositories" className='reactAtag' target='target_main'><span className='d-flex align-items-center gap-3'><FaGithub className='reactFont'/><p className='mt-3'>UsmanDevCraft</p></span></a>
                    <a href="https://web.facebook.com/profile.php?id=100011626533433" className='reactAtag' target='target_main'><span className='d-flex align-items-center gap-3'><FaFacebook className='reactFont'/><p className='mt-3'>Usman Awan</p></span></a>
                    <a href="https://www.instagram.com/usman_awan_00?igsh=NjByZ3pxcm9oeHNp" className='reactAtag' target='target_main'><span className='d-flex align-items-center gap-3'><RiInstagramFill className='reactFont'/><p className='mt-3'>Usman Awan</p></span></a>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Hireme
