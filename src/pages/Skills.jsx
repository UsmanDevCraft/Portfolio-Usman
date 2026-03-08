import { useEffect, useRef, useState } from "react";
import "../styles/Skills.css";
import {
  FaHtml5,
  FaCss3,
  FaReact,
  FaNodeJs,
  FaBootstrap,
  FaGithub,
} from "react-icons/fa";
import { IoLogoJavascript, IoLogoVercel } from "react-icons/io5";
import {
  SiExpress,
  SiMongodb,
  SiTailwindcss,
  SiNextdotjs,
  SiPostman,
  SiRedux,
  SiReactquery,
  SiStorybook,
} from "react-icons/si";
import { TbBrandFramerMotion, TbBrandThreejs } from "react-icons/tb";
import { motion } from "framer-motion";
import AOS from "aos";
import "aos/dist/aos.css";

const skillsData = [
  { name: "HTML", icon: <FaHtml5 />, color: "#E34F26" },
  { name: "CSS", icon: <FaCss3 />, color: "#1572B6" },
  { name: "JavaScript", icon: <IoLogoJavascript />, color: "#F7DF1E" },
  { name: "ReactJS", icon: <FaReact />, color: "#61DAFB" },
  { name: "Next.js", icon: <SiNextdotjs />, color: "#FFFFFF" },
  { name: "NodeJS", icon: <FaNodeJs />, color: "#339933" },
  { name: "ExpressJS", icon: <SiExpress />, color: "#747474" },
  { name: "MongoDB", icon: <SiMongodb />, color: "#47A248" },
  { name: "Redux", icon: <SiRedux />, color: "#764ABC" },
  { name: "Zustand", icon: <SiRedux />, color: "#433E38" },
  { name: "Tanstack Query", icon: <SiReactquery />, color: "#FF4154" },
  { name: "Bootstrap", icon: <FaBootstrap />, color: "#7952B3" },
  { name: "Tailwind CSS", icon: <SiTailwindcss />, color: "#06B6D4" },
  { name: "Three.js", icon: <TbBrandThreejs />, color: "#FFFFFF" },
  { name: "Framer Motion", icon: <TbBrandFramerMotion />, color: "#0055FF" },
  { name: "Storybook", icon: <SiStorybook />, color: "#FF4785" },
  { name: "Postman", icon: <SiPostman />, color: "#FF6C37" },
  { name: "Vercel", icon: <IoLogoVercel />, color: "#FFFFFF" },
  { name: "GitHub", icon: <FaGithub />, color: "#181717" },
];

const Skills = () => {
  const ref = useRef(null);
  const [reloadKey, setReloadKey] = useState(0);
  AOS.init();

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 1000) {
        setReloadKey((prevKey) => prevKey + 1);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div key={reloadKey} className="skills">
      <div className="container skills-child">
        <div data-aos="fade-right">
          <h1 className="font_size beforeTag">My skills</h1>
          <p>Here are some technologies I&apos;ve used!</p>
        </div>
        <code>
          Drag the skills for amazing dragging effect using framer motion.
        </code>
        <div
          className=" mt-5 container d-flex justify-content-center flex-wrap gap-3"
          ref={ref}
        >
          {skillsData.map((skill, index) => (
            <motion.button
              key={index}
              drag
              dragConstraints={ref}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              type="button"
              className="btn gap-2 btn101 font_text btn-dark mt-1 d-flex justify-content-center align-items-center skill-card"
              style={{ "--skill-color": skill.color }}
            >
              <span
                style={{ color: skill.color }}
                className="d-flex align-items-center"
              >
                {skill.icon}
              </span>
              {skill.name}
            </motion.button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
