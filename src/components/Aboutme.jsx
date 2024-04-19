import React from 'react'
import '../components_css/Aboutme.css'

const Aboutme = () => {
  return (
    <div className='aboutme'>
        <div className="container">
            <h1 className='font_size beforeTag'>About me</h1>
            <div className='mt-4 d-flex flex-column flex-md-row flex-wrap justify-content-between align-items-center'>
                <div className='div02 col-md-8 d-flex justify-content-center align-items-center pb-5'>
                    <img src="/1706953445419.JPG" className='myPic' alt="/1706953445419.JPG" />
                </div>
                <div className='div01 col-md-4'>
                    <p>Hello! My name is Usman, and I am a frontend developer, mern stack developer and web designer.<br /><br/> I took the initiative to teach myself coding so that I could acquire the knowledge and skills necessary to transform my ideas into reality.<br/><br/>

                    Throughout this journey, I have gained expertise in designing and developing visually appealing and functional websites. I'm dedicated to crafting websites that not only look good but also work seamlessly to provide the best user experience.<br/><br/>

                    Additionally, I have completed my bachelor's degree in Electrical Engineering from National University of Science and Technology, NUST Islamabad.</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Aboutme
