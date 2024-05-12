import React, { useEffect, useRef, useState } from 'react'
import '../components_css/Skills.css'
import { FaHtml5 } from "react-icons/fa";
import { FaCss3 } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { FaReact } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa";
import { SiExpress } from "react-icons/si";
import { SiMongodb } from "react-icons/si";
import { FaBootstrap } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";
import { IoLogoVercel } from "react-icons/io5";
import { FaGithub } from "react-icons/fa";
import { TbBrandFramerMotion } from "react-icons/tb";
import { TbBrandThreejs } from "react-icons/tb";
import { motion } from "framer-motion"


const Skills = () => {
  const ref = useRef(null);
  const [reloadKey, setReloadKey] = useState(0);

  useEffect(() => {
      const handleResize = () => {
          if (window.innerWidth < 1000) {
              setReloadKey(prevKey => prevKey + 1); // Update key to force component reload
          }
      };

      window.addEventListener('resize', handleResize);

      return () => {
          window.removeEventListener('resize', handleResize);
      };
  }, []);

  return (
      <div key={reloadKey} className='skills'>
          <div className="container skills-child">
              <h1 className='font_size beforeTag'>My skills</h1>
              <p>Here are some technologies I've used!</p>
              <code>Drag the skills for amazing dragging effect using framer motion.</code>
              <div className=" mt-5 container d-flex justify-content-center flex-wrap gap-3" ref={ref}>
                  <motion.button drag dragConstraints={ref} type="button" className="btn gap-2 btn101 font_text btn-dark mt-1 d-flex justify-content-center align-items-center"><FaHtml5 />HTML</motion.button>
                  <motion.button drag dragConstraints={ref} type="button" className="btn gap-2 btn101 font_text btn-dark mt-1 d-flex justify-content-center align-items-center"><FaCss3 />CSS</motion.button>
                  <motion.button drag dragConstraints={ref} type="button" className="btn gap-2 btn101 font_text btn-dark mt-1 d-flex justify-content-center align-items-center"><IoLogoJavascript />JavaScript</motion.button>
                  <motion.button drag dragConstraints={ref} type="button" className="btn gap-2 btn101 font_text btn-dark mt-1 d-flex justify-content-center align-items-center"><FaReact />ReactJS</motion.button>
                  <motion.button drag dragConstraints={ref} type="button" className="btn gap-2 btn101 font_text btn-dark mt-1 d-flex justify-content-center align-items-center"><FaNodeJs />NodeJS</motion.button>
                  <motion.button drag dragConstraints={ref} type="button" className="btn gap-2 btn101 font_text btn-dark mt-1 d-flex justify-content-center align-items-center"><SiExpress />ExpressJS</motion.button>
                  <motion.button drag dragConstraints={ref} type="button" className="btn gap-2 btn101 font_text btn-dark mt-1 d-flex justify-content-center align-items-center"><SiMongodb />MongoDB</motion.button>
                  <motion.button drag dragConstraints={ref} type="button" className="btn gap-2 btn101 font_text btn-dark mt-1 d-flex justify-content-center align-items-center"><FaBootstrap />Bootstrap</motion.button>
                  <motion.button drag dragConstraints={ref} type="button" className="btn gap-2 btn101 font_text btn-dark mt-1 d-flex justify-content-center align-items-center"><SiTailwindcss />Tailwind CSS</motion.button>
                  <motion.button drag dragConstraints={ref} type="button" className="btn gap-2 btn101 font_text btn-dark mt-1 d-flex justify-content-center align-items-center"><TbBrandThreejs />GSAP</motion.button>
                  <motion.button drag dragConstraints={ref} type="button" className="btn gap-2 btn101 font_text btn-dark mt-1 d-flex justify-content-center align-items-center"><TbBrandFramerMotion />Framer Motion</motion.button>
                  <motion.button drag dragConstraints={ref} type="button" className="btn gap-2 btn101 font_text btn-dark mt-1 d-flex justify-content-center align-items-center"><IoLogoVercel />Vercel</motion.button>
                  <motion.button drag dragConstraints={ref} type="button" className="btn gap-2 btn101 font_text btn-dark mt-1 d-flex justify-content-center align-items-center"><FaGithub />GitHub</motion.button>
              </div>
          </div>
      </div>
  );
}

export default Skills
