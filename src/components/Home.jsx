import React from 'react'
import '../components_css/Home.css'

const Home = () => {
  return (
    <div className='home container d-flex justify-content-center'>
      <div className='container d-flex align-items-center justify-content-center div1'>
        <div>
          <h1 className='font_size homeHeading lh-1'>Building</h1>
          <h1 className='font_size homeHeading lh-1'>Seamless Web</h1>
          <h1 className='font_size homeHeading lh-1'>Experiences</h1>
          <a href="#work"><button type="button" className="btn btn-primary button my-2">See My Work</button></a>
        </div>
        {/* <h1 className='font_size lh-1'>Building Seamless Web Experiences
        <br/>
        </h1> */}
      </div>
      <div className='container d-flex align-items-center justify-content-center div2'>
        <img src="/GIF.gif" alt="/GIF.gif" className='GIF'/>
      </div>
    </div>
  )
}

export default Home
