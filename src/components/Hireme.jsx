import React, { useState } from 'react'
import '../components_css/Hireme.css'
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import { FaSquarePhone } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { FaFilePdf } from "react-icons/fa6";
import { Resend } from 'resend';


const Hireme = () => {

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


    const [formData, setFormData] = useState({name: "", email: "", message: ""});
    const { name, email, message} = formData;



    const onChange = (e) => {
        setFormData({...formData, [e.target.name]:e.target.value});
        // console.log({name, email, message});
    };


    const onSubmit = (e) => {
        e.preventDefault();

        // const resend = new Resend('re_3YS9KSVB_F6HGZQCgEKPiN9dqhC8eYgXN');

        // (async function() {
        // const { data, error } = await resend.emails.send({
        //     from: {email},
        //     to: 'usmanaugust28@gmail.com',
        //     subject: `Hire Me Message from ${name}`,
        //     text: {message}
        // });
    
        // if (error) {
        //     return console.log(error);
        // }
    
        // console.log(data);
        // })();
    };

  return (
    <>
    <div className='hireme'>
        <div className="container">
            <h1 className='font_size beforeTag'>Hire me</h1>
            <div>
                <p>I would like to make your ideas come to live. Feel free to contact me at anytime</p>


                <div className="container d-flex justify-content-center flex-wrap">
                <div className='container formWidth'>
                    <form onSubmit={onSubmit}>
                        <div className="mb-3">
                            <label htmlFor="name" className="form-label text-white">Name</label>
                            <input onChange={onChange} type="text" className="form-control inputBg" id="name" name='name' aria-describedby="emailHelp" />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="email" className="form-label text-white">Email</label>
                            <input onChange={onChange} type="email" className="form-control inputBg" id="email" name='email' aria-describedby="emailHelp" />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="message" className="form-label text-white">Message</label>
                            <textarea onChange={onChange} type="text" className="form-control inputBg" id="message" name='message' aria-describedby="emailHelp" minLength={2} placeholder='Write your message here' style={{height: '10rem'}}></textarea>
                        </div>
                        <button type="submit" className="btn cvButton" disabled={!email || message.length <= 1 ? true : false} >Submit</button>
                    </form>
                </div>


                <div className='container formWidth'>
                    <span className='d-flex align-items-center gap-3'><FaSquarePhone className='reactFont'/><p className='mt-3'>+923175769210</p><br/></span>
                    <span className='d-flex align-items-center gap-3'><IoIosMail className='reactFont'/><p className='mt-3'>usmanaugust28@gmail.com</p><br/></span>
                    <a href="https://www.linkedin.com/in/muhammad-usman-awan-a77906280/" className='reactAtag' target='target_main'><span className='d-flex align-items-center gap-3'><FaLinkedin className='reactFont'/><p className='mt-3'>Usman Awan</p></span></a>
                    <a href="https://github.com/UsmanDevCraft?tab=repositories" className='reactAtag' target='target_main'><span className='d-flex align-items-center gap-3'><FaGithub className='reactFont'/><p className='mt-3'>UsmanDevCraft</p></span></a>
                    <a href="https://web.facebook.com/profile.php?id=100011626533433" className='reactAtag' target='target_main'><span className='d-flex align-items-center gap-3'><FaFacebook className='reactFont'/><p className='mt-3'>Usman Awan</p></span></a>
                    <a href="https://www.instagram.com/usman_awan_00?igsh=NjByZ3pxcm9oeHNp" className='reactAtag' target='target_main'><span className='d-flex align-items-center gap-3'><RiInstagramFill className='reactFont'/><p className='mt-3'>Usman Awan</p></span></a>
                    <button type="button" className="btn cvButton button my-2 d-flex jutify-content-center align-items-center gap-2" onClick={downloadCV}><FaFilePdf />Download CV</button>
                </div>
                </div>

            </div>
        </div>
    </div>
    </>
  )
}

export default Hireme
